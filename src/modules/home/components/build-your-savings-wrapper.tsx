'use client';

import React, { Suspense } from 'react';
import { LoaderCircle } from 'lucide-react';

const BuildYourSavings = React.lazy(() => import('./build-your-savings'));

const BuildYourSavingsWrapper = () => {
    return (
        <Suspense
            fallback={
                <div className="flex justify-center items-center py-10">
                    <LoaderCircle className="animate-spin w-10 h-10 text-muted-foreground" />
                </div>
            }
        >
            <BuildYourSavings />
        </Suspense>
    );
};

export default BuildYourSavingsWrapper;
