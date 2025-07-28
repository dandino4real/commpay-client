'use client';

import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';

import { cn } from '../../lib/utils';
import { Label } from './label';

const RadioGroup = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
    return <RadioGroupPrimitive.Root className={cn('grid gap-2', className)} {...props} ref={ref} />;
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
    return (
        <RadioGroupPrimitive.Item
            ref={ref}
            className={cn(
                'aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
                className
            )}
            {...props}
        >
            <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
                <Circle className="h-3.5 w-3.5 fill-primary" />
            </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>
    );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

interface RadioGroupItemBoxProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
    isActive?: boolean;
}

const RadioGroupItemBox = React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Item>, RadioGroupItemBoxProps>(
    ({ className, children, isActive, ...props }, ref) => {
        return (
            <Label
                ref={ref as React.LegacyRef<HTMLLabelElement>}
                className={cn(
                    'rounded-3xl p-2 !bg-transparent border border-transparent cursor-pointer relative',
                    `${className} ${isActive && 'border-accent bg-accent'}`
                )}
            >
                <div className="flex-1">{children}</div>

                <RadioGroupPrimitive.Item
                    className={cn(
                        'aspect-square rounded-full absolute top-4 left-4 border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
                        `${className} ${isActive && 'border-accent'}`
                    )}
                    {...props}
                >
                    <RadioGroupPrimitive.Indicator className="flex items-center justify-center" />
                </RadioGroupPrimitive.Item>
            </Label>
        );
    }
);
RadioGroupItemBox.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem, RadioGroupItemBox };
