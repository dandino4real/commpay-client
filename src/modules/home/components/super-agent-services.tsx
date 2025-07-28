'use client';

import SectionLayout from '@components/layout/section-layout';
import { Button } from '@components/ui/button';
import { LoaderCircle } from 'lucide-react';
import React, { Suspense } from 'react';
const POSTerminal = React.lazy(() => import('@components/illustrations/pos-terminal'));

const SuperAgentServices: React.FC = () => {
    return (
        <SectionLayout className="bg-white py-14 px-8 sm:px-12 md:px-24">
            <div className="flex flex-col-reverse md:flex-row items-center w-full justify-center gap-12">
                <Suspense fallback={<LoaderCircle className="spin-in-180" />}>
                    <POSTerminal className="max-md:w-9/12 max-md:h-min" />
                </Suspense>
                <SuperAgentCopy />
            </div>
        </SectionLayout>
    );
};

const SuperAgentCopy: React.FC = () => {
    return (
        <div className="space-y-6 md:w-5/12 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-semibold">
                Unlock the power of financial inclusion with our Super Agent services
            </h1>
            <p className="max-w-md">
                Expand your reach with agency banking offering convenient, reliable financial services directly in your
                community.
            </p>
            <div className="flex space-x-4 items-center justify-center md:justify-start">
                <Button variant="secondary" className="text-white">
                    Learn more
                </Button>
            </div>
        </div>
    );
};

export default SuperAgentServices;
