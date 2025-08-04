import React from 'react';

import SectionLayout from '@/components/layout/section-layout';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

const WhyWeExist: React.FC = () => {
    return (
        <SectionLayout className="py-12 md:py-24 px-8 sm:px-12 md:px-36" containerClassName="space-y-24">
            <div className="flex flex-col md:flex-row text-center md:text-start gap-4 md:gap-8 items-center md:px-48">
                <h3 className="text-3xl md:text-4xl font-semibold min-w-max">Why We Exist</h3>
                <p className="font-light w-full">
                    Across Africa, businesses and individuals face fragmented payment systems, costly transfers, and
                    unreliable settlements.
                </p>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col gap-6">
                    <div className="bg-gradient-to-r from-[hsla(0,0%,91%,1)] to-[hsla(0,0%,100%,1)] rounded-2xl py-8 px-4 md:p-8 flex items-center md:justify-between justify-center h-full shadow-sm">
                        <div className="space-y-4 w-full">
                            <h4 className="text-base md:text-2xl w-full">To Simplify Global Payments</h4>
                            <p className="text-xs md:text-base font-light w-full">
                                We eliminate the complexity of international transactions by offering a seamless,
                                all-in-one payment and currency exchange platform.
                            </p>
                        </div>
                        <Image
                            width={220}
                            height={254}
                            alt="global-payments"
                            className="w-3/12 md:w-auto"
                            src="/assets/images/global-payments.png"
                        />
                    </div>
                    <div className="bg-gradient-to-r from-[hsla(0,0%,91%,1)] to-[hsla(0,0%,100%,1)] rounded-2xl py-8 px-4 md:p-8 flex flex-row-reverse text-end items-center md:justify-between justify-center h-full shadow-sm">
                        <div className="space-y-4 w-full">
                            <h4 className="text-base md:text-2xl w-full">To Empower Financial Efficiency</h4>
                            <p className="text-xs md:text-base font-light w-full">
                                Our competitive rates and low fees help businesses and individuals save money and time
                                with every cross border transaction
                            </p>
                        </div>
                        <Image
                            width={220}
                            height={254}
                            alt="efficiency"
                            className="w-3/12 md:w-auto"
                            src="/assets/images/3d-cards.png"
                        />
                    </div>
                </div>
                <div className="relative bg-gradient-to-r to-[hsla(0,0%,91%,1)] from-[hsla(0,0%,100%,1)] rounded-2xl py-8 px-4 md:p-8 h-full space-y-6 items-center justify-center shadow-sm">
                    <Badge>• Our Mission</Badge>
                    <Image
                        width={1000}
                        height={500}
                        alt="secured"
                        className="md:w-11/12"
                        src="/assets/images/secured-3d.png"
                    />
                    <Image
                        width={1000}
                        height={1000}
                        alt="group-transact"
                        className="w-min absolute top-72 md:top-86 md:right-20 right-0"
                        src="/assets/images/group-transact.png"
                    />
                    <div className="gap-6 w-full flex flex-col md:flex-row">
                        <h4 className="text-base md:text-2xl w-full md:w-auto">To Ensure Payment Security</h4>
                        <p className="font-light w-full text-sm md:text-base">
                            With advanced encryption and compliance standards, we protect your money.
                        </p>
                    </div>
                </div>
            </div>
        </SectionLayout>
    );
};

export default WhyWeExist;
