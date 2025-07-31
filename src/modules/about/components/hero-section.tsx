import * as motion from 'motion/react-client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import SectionLayout from '@/components/layout/section-layout';

export function HeroSection() {
    return (
        <SectionLayout className=" px-4 sm:px-6 lg:px-20 py-16 lg:py-24 relative bg-[url('/assets/images/background-hero-bg.png')] bg-cover bg-center text-white max-w-6xl mx-auto rounded-4xl">
            <div className="grid lg:grid-cols-3 gap-12 items-center">
                <div className="space-y-8 col-span-2">
                    <h1 className="text-4xl lg:text-5xl font-semibold leading-tight">
                        Powering payments for Africa&apos;s boldest businesses.
                    </h1>
                    <p className="text-base text-emerald-100 leading-relaxed">
                        From startups to enterprises, we fuel growth with seamless, secure, and scalable cross-border
                        payment solutions.
                    </p>

                    <Button className="bg-emerald-400 hover:bg-emerald-300  font-semibold shadow-2xl group rounded-ful text-white">
                        <motion.span className="flex items-center" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                            Get Started
                            <motion.div
                                className="ml-2"
                                animate={{ x: [0, 5, 0] }}
                                transition={{
                                    duration: 2,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: 'easeInOut',
                                }}
                            >
                                <ArrowUpRight className="h-4 w-4" />
                            </motion.div>
                        </motion.span>
                    </Button>
                </div>

                <div className="absolute bottom-0 right-[-1] flex justify-center lg:justify-end rounded-b-r rounded-4xl">
                    <Image
                        src="/assets/images/hero-phone.png"
                        alt="CompPay mobile app"
                        width={447}
                        height={480}
                        className="rounded-b-r rounded-4xl"
                    />
                </div>
            </div>
        </SectionLayout>
    );
}
