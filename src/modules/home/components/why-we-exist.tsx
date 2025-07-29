import React from 'react';

import SectionLayout from '@/components/layout/section-layout';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

const WhyWeExist: React.FC = () => {
    return (
        <SectionLayout className="py-12 md:py-24 px-8 sm:px-12 md:px-36" containerClassName="space-y-24">
            <div className="flex gap-4 md:gap-8 items-center md:px-48">
                <h3 className="text-4xl font-semibold min-w-max">Why We Exist</h3>
                <p className="font-light w-full">
                    Across Africa, businesses and individuals face fragmented payment systems, costly transfers, and
                    unreliable settlements.
                </p>
            </div>
            <div className="flex gap-6">
                <div className="flex flex-col gap-6">
                    <div className="bg-gradient-to-r from-[hsla(0,0%,91%,1)] to-[hsla(0,0%,100%,1)] rounded-2xl p-8 flex items-center justify-center h-full shadow-sm">
                        <div className="space-y-4 w-full">
                            <h4 className="text-2xl w-full">To Simplify Global Payments</h4>
                            <p className="font-light w-full">
                                We eliminate the complexity of international transactions by offering a seamless,
                                all-in-one payment and currency exchange platform.
                            </p>
                        </div>
                        <Image
                            width={220}
                            height={254}
                            alt="global-payments"
                            src="/assets/images/global-payments.png"
                        />
                    </div>
                    <div className="bg-gradient-to-r from-[hsla(0,0%,91%,1)] to-[hsla(0,0%,100%,1)] rounded-2xl p-8 flex flex-row-reverse text-end items-center justify-center h-full shadow-sm">
                        <div className="space-y-4 w-full">
                            <h4 className="text-2xl w-full">To Empower Financial Efficiency</h4>
                            <p className="font-light w-full">
                                Our competitive rates and low fees help businesses and individuals save money and time
                                with every cross border transaction
                            </p>
                        </div>
                        <Image width={220} height={254} alt="efficiency" src="/assets/images/3d-cards.png" />
                    </div>
                </div>
                <div className="bg-gradient-to-r to-[hsla(0,0%,91%,1)] from-[hsla(0,0%,100%,1)] rounded-2xl p-8 h-full space-y-6 items-center justify-center shadow-sm">
                    <Badge>• Our Mission</Badge>
                    <Image
                        width={220}
                        height={254}
                        alt="secured"
                        className="w-full"
                        src="/assets/images/secured-3d.png"
                    />
                    <div className="gap-6 w-full flex">
                        <h4 className="text-2xl">To Simplify Global Payments</h4>
                        <p className="font-light w-full">
                            We eliminate the complexity of international transactions by offering a seamless, all-in-one
                            payment and currency exchange platform.
                        </p>
                    </div>
                </div>
            </div>
        </SectionLayout>
    );
};

export default WhyWeExist;
