
'use client';

import EasyBanking from '@components/illustrations/easy-banking';
import Sprint from '@components/illustrations/sprint';
import SectionLayout from '@components/layout/section-layout';
import { Button } from '@components/ui/button';
import { LoaderCircle } from 'lucide-react';
import React, { Suspense } from 'react';
const CompPayAppPreview = React.lazy(() => import('@components/illustrations/comppay-app-preview'));

const ZeroComplexity: React.FC = () => {
    return (
        <SectionLayout className="py-28 px-8 sm:px-12 md:px-24">
            <div className="space-y-12">
                <div className="space-y-1 text-center">
                    <h1 className="text-4xl font-semibold">Zero complexity.</h1>
                    <h1 className="text-4xl font-semibold">All your financial workflows.</h1>
                </div>
                <ZeroComplexityIllustrationCopy />
            </div>
        </SectionLayout>
    );
};

const ZeroComplexityIllustrationCopy: React.FC = () => {
    return (
        <div className="grid  md:grid-cols-3 min-h-[328px]">
            <div className="col-span-1 space-y-8 md:space-y-4 text-white bg-[#13A264] max-md:rounded-t-3xl md:rounded-l-3xl p-14 text-center md:text-left">
                <h1 className="text-4xl font-semibold">CompPay</h1>
                <p className="text-sm font-light">
                    Experience easy banking with swift transactions, designed to make your financial life simpler and
                    more efficient. Manage your money seamlessly, anytime, anywhere.
                </p>
                <Button variant="ghost" className="rounded-full font-semibold text-primary">
                    Learn more
                </Button>
            </div>
            <div className="col-span-2 space-y-4 text-white bg-primary max-md:rounded-b-3xl md:rounded-r-3xl p-6 md:p-14 relative md:overflow-y-hidden max-md:justify-center">
                <EasyBanking className="absolute -bottom-32 scale-90 md:bottom-8 md:right-96 h-96" />
                <Sprint className="absolute right-0 md:-top-8 md:right-28 h-96" />
                <Suspense fallback={<LoaderCircle />}>
                    <CompPayAppPreview className="md:absolute max-md:mx-auto top-7 md:-top-28 md:right-28 md:scale-75 right-12 max-md:w-full" />
                </Suspense>
            </div>
        </div>
    );
};

export default ZeroComplexity;
