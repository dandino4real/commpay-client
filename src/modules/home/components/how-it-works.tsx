'use client';
import SectionLayout from '@/components/layout/section-layout';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

export default function HowItWorks() {
    const [activeIndex, setActiveIndex] = useState(0);

    const items = [
        {
            title: 'Sign up and get API keys',
            image: '/assets/images/spending-summary.svg',
        },
        {
            title: 'Set up payment links',

            image: '/assets/images/spending-summary.svg',
        },
        {
            title: 'Start sending and receiving payments seamlessly',

            image: '/assets/images/spending-summary.svg',
        },
    ];
    return (
        <SectionLayout>
            <div className="flex gap-x-5 items-center justify-center py-10">
                <h2 className="text-3xl">How it works</h2>
                <span className="bg-[#F4FFF9] text-[#1FC16B] py-2 px-4 rounnded-sm">• Core features</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 px-5 md:px-10 py-10 md:py-20">
                <div className="col-span-1 md:col-span-2 lg:col-span-3">
                    <div className="space-y-6 relative">
                        {items.map((item, index) => (
                            <div
                                className="flex items-center gap-x-5 cursor-pointer group relative"
                                key={index}
                                onMouseEnter={() => setActiveIndex(index)}
                            >
                                <h3
                                    className={`text-2xl font-normal py-4 transition-colors duration-300 ${
                                        activeIndex === index
                                            ? 'text-black'
                                            : 'text-gray-400 group-hover:text-[#1FC16B]'
                                    }`}
                                >
                                    {item.title}
                                </h3>
                                <ArrowRight
                                    className={`w-6 h-6 transition-opacity duration-300 ${
                                        activeIndex === index ? 'opacity-100' : 'opacity-0'
                                    }`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-span-1 md:col-span-2 lg:col-span-3">
                    <div className="relative overflow-hidden">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className={`transition-opacity duration-500 ${
                                    activeIndex === index ? 'opacity-100' : 'opacity-0 absolute inset-0'
                                }`}
                            >
                                <Image
                                    src={item.image}
                                    alt={`${item.title} illustration`}
                                    layout="responsive"
                                    width={500}
                                    height={300}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionLayout>
    );
}
