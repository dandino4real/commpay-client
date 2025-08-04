import SectionLayout from '@/components/layout/section-layout';
import Link from 'next/link';
import React from 'react';
import BottomCta from './bottom-cta';
import Image from 'next/image';

export default function Footer() {
    return (
        <SectionLayout>
            <BottomCta />
            <footer className="bg-transparent text-black">
                <div className="container mx-auto py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 ">
                        {/* Logo and Description */}
                        <div className="lg:col-span-3">
                            <div className="flex items-center gap-2 mb-4">
                                <Image
                                    src="/assets/images/comppay-logo-black.svg"
                                    alt="CompPay Logo"
                                    className="w-[172px] h-[32px] object-contain"
                                    width={172}
                                    height={32}
                                />
                            </div>
                            <p className="text-[#343434] text-[16px] leading-relaxed max-w-sm">
                                Streamlines international payments and currency exchange for businesses and individuals
                            </p>
                        </div>
                        <div className="flex space-y-5 flex-col md:flex-row justify-between lg:col-span-3">
                            {/* Company Links */}
                            <div className="flex-1">
                                <h3 className="font-semibold text-[#1B1B1B] text-lg  mb-4">Company</h3>
                                <div className="space-y-3">
                                    <Link
                                        href="/about"
                                        className="block text-[#343434] hover:text-black text-[16px] transition-colors"
                                    >
                                        About us
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="block text-[#343434] hover:text-black text-[16px] transition-colors"
                                    >
                                        Contact us
                                    </Link>
                                </div>
                            </div>

                            {/* Resources Links */}
                            <div className="flex-1">
                                <h3 className="font-semibold text-[#1B1B1B] text-lg  mb-4">Resources</h3>
                                <div className="space-y-3">
                                    <Link
                                        href="/privacy"
                                        className="block text-[#343434] hover:text-black text-[16px] transition-colors"
                                    >
                                        Privacy policy
                                    </Link>
                                    <Link
                                        href="/terms"
                                        className="block text-[#343434] hover:text-black text-[16px] transition-colors"
                                    >
                                        Terms of use
                                    </Link>
                                </div>
                            </div>

                            {/* Discover and Address */}
                            <div className="flex-1">
                                <h3 className="font-semibold text-[#1B1B1B] text-lg  mb-4">Discover</h3>
                                <div className="space-y-3 mb-6">
                                    <Link
                                        href="/personal"
                                        className="block text-[#343434] hover:text-black text-[16px] transition-colors"
                                    >
                                        Personal
                                    </Link>
                                    <Link
                                        href="/business"
                                        className="block text-[#343434] hover:text-black text-[16px] transition-colors"
                                    >
                                        Business
                                    </Link>
                                </div>
                            </div>
                            {/* Address */}
                            <div className="flex-1">
                                <h3 className="font-semibold text-[#1B1B1B] text-lg  mb-4">Address</h3>
                                <address className="text-[#1B1B1B] text-[16px] not-italic leading-relaxed">
                                    8 The Clubhouse, St. James&apos;s & St. James&apos;s Square, London, England, SW1Y
                                    4JU
                                </address>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="border-t border-[#84848426] mt-12 pt-10">
                        <p className="text-gray-400 text-[16px]">
                            © 2024 CompPay Services Limited. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </SectionLayout>
    );
}
