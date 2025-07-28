'use client';

import React, { Suspense } from 'react';

import SectionLayout from '@components/layout/section-layout';
import CardPaymentItem from './card-payment-item';

import { LoaderCircle } from 'lucide-react';

const HandPay3D = React.lazy(() => import('@components/illustrations/hand-pay-3d'));
const HandCard3D = React.lazy(() => import('@components/illustrations/hand-card-3d'));
const HandPOS3D = React.lazy(() => import('@components/illustrations/hand-pos-3d'));

const BuildYourSavings: React.FC = () => {
    return (
        <SectionLayout className="flex items-center text-center py-14 px-8 sm:px-12 md:px-24">
            <div className="space-y-10">
                <div>
                    <h3 className="text-3xl md:text-4xl font-semibold">Many ways to build your savings</h3>
                    <p className="md:text-lg font-light mt-4">
                        Earn 12%-17% when you save with any of these CompPay plans.
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row items-center w-full justify-between gap-9">
                    <CardPaymentItem
                        footerClassName="bg-accent"
                        description={
                            <>
                                Seamless bill payment across
                                <br /> every channel
                            </>
                        }
                    >
                        <Suspense fallback={<LoaderCircle />}>
                            <HandPay3D className="max-md:h-64 max-md:w-64 mx-auto" />
                        </Suspense>
                    </CardPaymentItem>
                    <CardPaymentItem
                        footerClassName="bg-primary"
                        descriptionClassName="text-white"
                        description={
                            <>
                                Electronic Card
                                <br /> Services
                            </>
                        }
                    >
                        <Suspense fallback={<LoaderCircle />}>
                            <HandCard3D className="max-md:h-64 max-md:w-64 mx-auto" />
                        </Suspense>
                    </CardPaymentItem>
                    <CardPaymentItem
                        description={
                            <>
                                POS
                                <br /> Settlement
                            </>
                        }
                        footerClassName="bg-[#E5A442]"
                    >
                        <Suspense fallback={<LoaderCircle />}>
                            <HandPOS3D className="max-md:h-64 max-md:w-64 mx-auto" />
                        </Suspense>
                    </CardPaymentItem>
                </div>
            </div>
        </SectionLayout>
    );
};

export default BuildYourSavings;
