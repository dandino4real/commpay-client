import React from 'react';
import SectionLayout from '@/components/layout/section-layout';
import HeroBgMesh from '@/components/icons/hero-bg-mesh';
import { ArrowRight, ShoppingCart, Laptop, Globe, Users, Zap, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const IndustriesPage = () => {
    return (
        <main className="w-full bg-[#0a0a0a] min-h-screen text-white selection:bg-accent/30 selection:text-accent">
            {/* HERO SECTION */}
            <SectionLayout
                className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden text-center"
                containerClassName="relative z-10 flex flex-col items-center"
            >
                {/* Decorative background blurs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] -z-10 pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-violet-600/10 rounded-full blur-[128px] -z-10 pointer-events-none" />
                
                <HeroBgMesh className="absolute top-0 left-0 opacity-50 mix-blend-screen pointer-events-none" />
                
                <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-zinc-300 mb-8 backdrop-blur-md">
                    <span className="flex h-2 w-2 rounded-full bg-accent mr-2 animate-pulse"></span>
                    Built for Infinite Scale
                </div>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6 max-w-5xl">
                    Solutions for <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-accent/80 to-zinc-500 italic pr-2">
                        Every Industry
                    </span>
                </h1>
                
                <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                    From fast-growing startups to global enterprises, CompPay provides the bespoke financial infrastructure your business needs to accelerate revenue.
                </p>
            </SectionLayout>

            {/* BENTO BOX SECTION */}
            <SectionLayout className="py-24 relative">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10">
                    
                    {/* E-Commerce - Large Feature */}
                    <div className="col-span-1 md:col-span-2 group relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-white/5 to-white/5 border border-white/10 p-8 md:p-12 hover:border-white/20 transition-all duration-500">
                        <div className="absolute top-0 right-0 p-8 opacity-10 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-20 group-hover:-rotate-12">
                            <ShoppingCart className="w-64 h-64 text-white" />
                        </div>
                        <div className="relative z-10 h-full flex flex-col justify-end">
                            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center mb-12 group-hover:bg-accent/20 group-hover:text-accent transition-colors duration-500">
                                <ShoppingCart className="w-7 h-7" />
                            </div>
                            <h3 className="text-3xl md:text-4xl font-semibold mb-4">E-Commerce</h3>
                            <p className="text-zinc-400 text-lg max-w-md mb-8">
                                Maximize conversion rates with our globally optimized checkout flow. Seamlessly accept localized payment methods across borders.
                            </p>
                            <Link href="#" className="inline-flex items-center text-sm font-medium text-white hover:text-accent transition-colors w-fit">
                                Explore e-commerce solutions <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>

                    {/* SaaS - Tall Feature */}
                    <div className="col-span-1 group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-8 hover:border-white/20 transition-all duration-500">
                        <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center mb-8 group-hover:bg-accent/20 group-hover:text-accent transition-colors duration-500">
                            <Laptop className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-3">SaaS & Software</h3>
                        <p className="text-zinc-400 mb-8 leading-relaxed">
                            Automate recurring billing, manage complex subscription tiers, and reduce involuntary churn with our Smart Retries API.
                        </p>
                        
                        <div className="mt-auto space-y-3">
                            <div className="flex items-center text-sm text-zinc-300">
                                <ShieldCheck className="w-4 h-4 text-accent mr-3" /> PCI DSS Level 1
                            </div>
                            <div className="flex items-center text-sm text-zinc-300">
                                <Zap className="w-4 h-4 text-accent mr-3" /> Webhook sync in &lt;1s
                            </div>
                        </div>
                    </div>

                    {/* Marketplaces - Standard Feature */}
                    <div className="col-span-1 group relative overflow-hidden rounded-[2rem] bg-gradient-to-tr from-white/5 to-transparent border border-white/10 p-8 hover:border-white/20 transition-all duration-500">
                        <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center mb-8 group-hover:bg-accent/20 group-hover:text-accent transition-colors duration-500">
                            <Globe className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-3">Marketplaces</h3>
                        <p className="text-zinc-400 mb-8 leading-relaxed">
                            Onboard vendors globally, split payments instantly, and manage complex multi-party money movement.
                        </p>
                        <Link href="#" className="inline-flex items-center text-sm font-medium text-white hover:text-accent transition-colors">
                            View marketplace docs <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>

                    {/* Creator Economy - Wide Feature */}
                    <div className="col-span-1 md:col-span-2 group relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-accent/10 to-transparent border border-white/10 p-8 md:p-12 hover:border-white/20 transition-all duration-500 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                        <div>
                            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 group-hover:text-accent transition-colors duration-500">
                                <Users className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-semibold mb-3">Creator Economy</h3>
                            <p className="text-zinc-400 max-w-md">
                                Empower creators to get paid instantly. Issue virtual cards, manage payouts globally, and unlock new revenue streams.
                            </p>
                        </div>
                        <Link href="#" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors whitespace-nowrap">
                            Learn more
                        </Link>
                    </div>

                </div>
            </SectionLayout>
        </main>
    );
};

export default IndustriesPage;
