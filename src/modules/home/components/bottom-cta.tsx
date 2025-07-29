import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function BottomCta() {
    return (
        <div className="py-[100px]">
            <div className="rounded-4xl bg-gradient-to-br from-emerald-400 via-green-500 to-emerald-600 relative overflow-hidden">
                <div className="relative z-10 flex items-center container mx-auto px-4 py-12 lg:py-20">
                    <div className="max-w-[70%] pl-20 gap-12 items-center">
                        {/* Left content */}
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                                    Powering payments for Africa&apos;s boldest businesses.
                                </h1>
                                <p className="text-lg md:text-xl text-emerald-50 leading-relaxed max-w-lg">
                                    From startups to enterprises, we fuel growth with seamless, secure, and scalable
                                    cross-border payment solutions.
                                </p>
                            </div>

                            <Button
                                size="lg"
                                className="bg-emerald-400 hover:bg-emerald-700 text-white px-8 py-8 text-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                            >
                                Get Started
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </Button>
                        </div>

                        <Image
                            src="/assets/images/hand-holding-mobile.png"
                            alt="Mobile payment app interface showing financial dashboard"
                            width={400}
                            height={400}
                            className="w-full max-w-sm lg:max-w-md xl:max-w-lg h-auto absolute right-0 top-1/2 transform -translate-y-1/2"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
