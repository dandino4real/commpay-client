"use client";

import Image from 'next/image';
import { motion } from 'motion/react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import SectionLayout from '@/components/layout/section-layout';
import { useEffect, useRef } from 'react';

interface FeatureCardProps {
    title: string;
    description: string;
    imageUrl: string;
}

const features: FeatureCardProps[] = [
    {
        title: 'Unified Platform',
        description: 'Manage all your global financial transactions in one place.',
        imageUrl: '/assets/images/unified-image.png',
    },
    {
        title: 'Competitive Rates',
        description: 'Benefit from real-time, market driven exchange rates with minimal fees.',
        imageUrl: '/assets/images/statistics-image.png',
    },
    {
        title: 'Robust Security',
        description: 'Enjoy peace of mind with our enterprise-grade security measures.',
        imageUrl: '/assets/images/secured-3d.png',
    },
    {
        title: 'Global Reach',
        description: 'Access to a network spanning multiple countries and currencies.',
        imageUrl: '/assets/images/globe.png',
    },
    {
        title: 'User-Friendly Interface',
        description: 'Experience a clean, intuitive platform designed for ease use.',
        imageUrl: '/assets/images/competitive-image.png',
    },
];

function FeatureCard({ title, description, imageUrl }: FeatureCardProps) {
    return (
        <motion.div
            className="bg-gray-100 rounded-2xl p-5 shadow-sm h-full w-full"
            whileHover={{
                scale: 1.01,
                y: -8,
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <motion.h3
                className="text-2xl font-semibold text-gray-900 mb-3"
                whileHover={{ color: '#059669' }}
                transition={{ duration: 0.3 }}
            >
                {title}
            </motion.h3>
            <p className="text-base text-gray-600 leading-relaxed mb-8">{description}</p>
            <div className="flex justify-center">
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.3 }}>
                    <Image src={imageUrl} alt={title} width={324} height={100} />
                </motion.div>
            </div>
        </motion.div>
    );
}

export function WhatSetsUsApartSection() {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current) {
                scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });

                // If scrolled to the end, reset to the start
                if (
                    scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
                    scrollRef.current.scrollWidth - 10
                ) {
                    scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                }
            }
        }, 10000);

        return () => clearInterval(interval);
    }, []);
    return (
        <SectionLayout className="py-12 md:py-32 px-8 sm:px-12 md:px-24 ">
            <div className="text-center mb-16">
                <Badge>• What Sets Us Apart</Badge>
            </div>

            <Carousel opts={{ align: 'start', loop: true }} className="w-full max-w-7xl mx-auto">
                <CarouselContent ref={scrollRef}
                    className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory -mr-8 px-1 white-scrollbar">
                    {features.map((feature, index) => (
                        <CarouselItem
                            key={index}
                            className={`snap-start shrink-0 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 ${index === features.length - 1 ? 'pr-6' : ''
                                }`}
                        >
                            <FeatureCard {...feature} />
                        </CarouselItem>
                    ))}
                </CarouselContent>

            </Carousel>

        </SectionLayout>
    );
}
