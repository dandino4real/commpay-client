'use client';

import React, { useState, ReactNode } from 'react';

import { FieldValues, Path, UseFormReturn } from 'react-hook-form';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';

import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

import { Tabs, TabsList, TabsTrigger, TabsContent } from './tabs';
import { Separator } from './separator';

export interface Step {
    id: number;
    label: string;
    content: ReactNode;
}

interface StepperProps<F extends FieldValues> {
    steps: Array<Step>;
    className?: string;
    form?: UseFormReturn<F>;
    stepFields?: {
        [x: number]: Array<Path<F>>;
    };
    handleSubmit?: () => void;
}

function Stepper<F extends FieldValues>({ steps, className, form, stepFields, handleSubmit }: StepperProps<F>) {
    const [currentStep, setCurrentStep] = useState<number>(0);

    const isStepComplete = (index: number) => index < currentStep;
    const isLastStep = currentStep === steps.length - 1;

    const canProceed = async () => {
        const errorStatus = (stepFields || {})[currentStep + 1]?.map(field => {
            const valid = !form?.getFieldState(field).invalid;
            return valid;
        });

        if (errorStatus?.includes(false)) return false;

        return true;
    };

    const nextStep = async () => {
        if (currentStep < steps.length - 1 && (await canProceed())) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const goToStep = (step: number) => async () => {
        if (step < steps.length - 1 && (await canProceed())) {
            setCurrentStep(step);
        }
    };

    return (
        <div className="mx-auto space-y-6 max-w-screen-md w-full px-4">
            {/* Stepper Header */}
            <Tabs value={`step-${currentStep}`} className="space-y-12">
                {/* Stepper Navigation */}
                <TabsList className="flex justify-between bg-transparent flex-1 items-center">
                    {steps.map((step, index) => {
                        const isNotlastIndex = index < steps.length - 1;
                        return (
                            <>
                                <TabsTrigger
                                    key={step.id}
                                    value={`step-${index}`}
                                    onClick={goToStep(index)}
                                    disabled={!isStepComplete(index) && index > currentStep}
                                    className={`min-w-8 min-h-8 p-0 rounded-full ${
                                        isStepComplete(index)
                                            ? 'bg-green-500 text-white'
                                            : index === currentStep
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-gray-200'
                                    }`}
                                >
                                    {isStepComplete(index) ? <Check /> : index + 1}
                                </TabsTrigger>
                                {isNotlastIndex && (
                                    <Separator orientation="horizontal" className="w-full bg-gray-400" />
                                )}
                            </>
                        );
                    })}
                </TabsList>

                {/* Stepper Content */}
                {steps.map((step, index) => (
                    <TabsContent key={step.id} value={`step-${index}`} className={className}>
                        {step.content}
                    </TabsContent>
                ))}
            </Tabs>

            {/* Stepper Controls */}
            <div className={cn('flex justify-between gap-4', className)}>
                {currentStep !== 0 && (
                    <Button variant="secondary" onClick={prevStep} className="w-full text-white" type="button">
                        <ArrowLeft />
                        <span>Previous</span>
                    </Button>
                )}
                {isLastStep ? (
                    <Button variant="secondary" className="w-full text-white" type="button" onClick={handleSubmit}>
                        Finish
                    </Button>
                ) : (
                    <Button onClick={nextStep} className="w-full text-white" variant="secondary" type="button">
                        <span>Next</span>
                        <ArrowRight />
                    </Button>
                )}
            </div>
        </div>
    );
}

export default Stepper;
