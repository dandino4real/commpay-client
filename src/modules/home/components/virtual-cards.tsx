'use client';

import Statistic from '@components/composite/statistic';
import SectionLayout from '@components/layout/section-layout';
import { LoaderCircle } from 'lucide-react';
import React, { Suspense } from 'react';
const VirtualCardsIllustration = React.lazy(() => import('@components/illustrations/virtual-cards'));

const VirtualCards: React.FC = () => {
    return (
        <SectionLayout className="bg-primary py-14 text-center md:text-right px-8 sm:px-12 md:px-24">
            <div className="flex flex-col max-md:gap-12 md:flex-row items-center w-full md:justify-between">
                <VirtualCardCopy />
                <Suspense fallback={<LoaderCircle className="spin-in-180" />}>
                    <VirtualCardsIllustration className="max-md:h-56 max-md:w-56" />
                </Suspense>
            </div>
        </SectionLayout>
    );
};

const VirtualCardCopy: React.FC = () => {
    return (
        <div className="space-y-8 md:space-y-12 max-w-[560px]">
            <h1 className="text-4xl md:text-6xl md:text-start font-semibold">
                <p className="italic text-accent font-light">Payment</p>
                <span className="text-white">made easy with our virtual card</span>
            </h1>
            <div className="flex space-x-12 items-center max-md:w-full justify-center md:justify-start">
                <Statistic title="Community" value={2.3} suffix="M+" />
                <Statistic title="Ratings" value={4.9} />
            </div>
        </div>
    );
};

export default VirtualCards;
