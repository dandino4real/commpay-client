'use client';

import React from 'react';

import { Button } from '@/components/ui/button';
import SectionLayout from '@/components/layout/section-layout';
import UpRightIcon from '@/components/icons/uprighticon';
import HeroBgMesh from '@/components/icons/hero-bg-mesh';
import Image from 'next/image';
import useMediaQuery from '@/hooks/use-media-query';
import { useRouter } from 'next/navigation';

const Hero: React.FC = () => {
    const router = useRouter();
    const { isMobile, isTablet } = useMediaQuery();
    return (
        <SectionLayout
            id="hero-section"
            containerClassName="space-y-12"
            className="relative py-12 pb-0 md:py-32 px-8 sm:px-12 md:px-24 overflow-x-clip bg-sidebar-background md:h-screen text-center overflow-clip"
        >
            <h1 className="text-4xl md:text-7xl font-semibold text-white z-10">
                <span>Seamless</span> <span className="italic text-accent">Payment</span>{' '}
                {isMobile || isTablet ? (
                    <span>
                        Solutions For Africa <br /> & Beyond
                    </span>
                ) : (
                    <span>
                        Solutions <br /> For Africa & Beyond
                    </span>
                )}
            </h1>
            <Button className="gap-4 z-10" variant="default" onClick={() => router.push('/signup')}>
                Get Started
                <span>
                    <UpRightIcon />
                </span>
            </Button>
            <Image
                width={803}
                height={455}
                alt="product-shot"
                className="md:w-10/12 mx-auto z-10 relative"
                src="/assets/images/dashboard-screenshot.png"
            />
            <Image
                width={1108}
                height={477}
                alt="product-shot-shadow"
                src="/assets/images/ellipse-shadow.png"
                className="w-full scale-110 absolute -bottom-16 left-1/2 -translate-x-1/2"
            />
            <HeroBgMesh className="absolute top-0 left-0" />
        </SectionLayout>
    );
};

export default Hero;
