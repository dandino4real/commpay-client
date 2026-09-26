import React from 'react';
import SectionLayout from '@/components/layout/section-layout';
import HeroBgMesh from '@/components/icons/hero-bg-mesh';
import { BookOpen, FileText, Code, Video, ArrowRight, Terminal } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const ResourcesPage = () => {
    return (
        <main className="w-full bg-[#0a0a0a] min-h-screen text-white selection:bg-accent/30 selection:text-accent">
            {/* HERO SECTION */}
            <SectionLayout
                className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden text-center"
                containerClassName="relative z-10 flex flex-col items-center"
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-accent/20 rounded-full blur-[150px] -z-10 pointer-events-none" />
                
                <HeroBgMesh className="absolute top-0 left-0 opacity-40 mix-blend-screen pointer-events-none" />
                
                <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-sm text-accent mb-8 backdrop-blur-md">
                    Developer First
                </div>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6 max-w-5xl">
                    Knowledge <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-emerald-400 to-cyan-500 italic pr-2">Hub</span>
                </h1>
                
                <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                    Everything you need to build, launch, and grow with CompPay. Dive into our comprehensive documentation, API references, and step-by-step guides.
                </p>
            </SectionLayout>

            {/* BENTO BOX SECTION */}
            <SectionLayout className="py-24 relative">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10">
                    
                    {/* Featured Resource - API Documentation */}
                    <div className="col-span-1 md:col-span-3 group relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-zinc-900 to-zinc-950 border border-white/10 p-8 md:p-12 hover:border-white/20 transition-all duration-500 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="flex-1">
                            <div className="inline-flex items-center space-x-2 text-accent font-semibold mb-4 uppercase tracking-wider text-sm">
                                <Code className="w-5 h-5" />
                                <span>Featured Resource</span>
                            </div>
                            <h3 className="text-3xl md:text-5xl font-semibold mb-6">API Documentation</h3>
                            <p className="text-zinc-400 text-lg max-w-xl mb-8 leading-relaxed">
                                Our API is designed around REST. Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes.
                            </p>
                            <Link href="#" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-accent text-white font-medium hover:bg-accent/90 transition-colors">
                                Read the docs <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </div>
                        
                        {/* Faux Code Block */}
                        <div className="flex-1 w-full relative rounded-2xl bg-[#0d1117] border border-white/10 overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-700">
                            <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/5">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                                </div>
                                <div className="mx-auto text-xs text-zinc-500 font-mono">POST /v1/charges</div>
                            </div>
                            <div className="p-6 font-mono text-sm">
                                <div className="text-emerald-400">curl <span className="text-white">https://api.comppay.com/v1/charges</span> \</div>
                                <div className="text-sky-400 ml-4">-u <span className="text-amber-300">sk_test_4eC39Hq:</span> \</div>
                                <div className="text-sky-400 ml-4">-d <span className="text-amber-300">amount=2000</span> \</div>
                                <div className="text-sky-400 ml-4">-d <span className="text-amber-300">currency=usd</span> \</div>
                                <div className="text-sky-400 ml-4">-d <span className="text-amber-300">source=tok_visa</span></div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Start Guide */}
                    <div className="col-span-1 group relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-white/5 to-transparent border border-white/10 p-8 hover:border-white/20 transition-all duration-500">
                        <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center mb-8 group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors duration-500">
                            <Terminal className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-3">Quick Starts</h3>
                        <p className="text-zinc-400 mb-8 leading-relaxed">
                            Integrate CompPay into your app in minutes. Code examples available in Node.js, Python, Ruby, and more.
                        </p>
                        <Link href="#" className="inline-flex items-center text-sm font-medium text-white hover:text-blue-400 transition-colors">
                            Start building <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>

                    {/* Video Tutorials */}
                    <div className="col-span-1 group relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-white/5 to-transparent border border-white/10 p-8 hover:border-white/20 transition-all duration-500">
                        <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center mb-8 group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-colors duration-500">
                            <Video className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-3">Video Tutorials</h3>
                        <p className="text-zinc-400 mb-8 leading-relaxed">
                            Watch our engineers build real-world applications step-by-step using the CompPay ecosystem.
                        </p>
                        <Link href="#" className="inline-flex items-center text-sm font-medium text-white hover:text-purple-400 transition-colors">
                            Watch videos <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>

                    {/* Community & Blog */}
                    <div className="col-span-1 group relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-white/5 to-transparent border border-white/10 p-8 hover:border-white/20 transition-all duration-500">
                        <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center mb-8 group-hover:bg-rose-500/20 group-hover:text-rose-400 transition-colors duration-500">
                            <FileText className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-3">Blog & Updates</h3>
                        <p className="text-zinc-400 mb-8 leading-relaxed">
                            Read the latest product announcements, deep dives, and industry insights from our engineering team.
                        </p>
                        <Link href="#" className="inline-flex items-center text-sm font-medium text-white hover:text-rose-400 transition-colors">
                            Read articles <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>

                </div>
            </SectionLayout>
        </main>
    );
};

export default ResourcesPage;
