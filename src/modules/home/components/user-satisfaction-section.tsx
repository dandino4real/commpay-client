import SectionLayout from '@/components/layout/section-layout';
import { Star } from 'lucide-react';

export default function UserSatisfactionSection() {
    return (
        <div className="relative xl:min-h-screen bg-[#1A233A] overflow-hidden">
            <SectionLayout className="">
                {/* Background decorative elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-96 h-96 border-2 border-slate-700/30 rounded-full transform translate-x-48 -translate-y-48"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 border-2 border-emerald-500/20 rounded-full transform -translate-x-40 translate-y-40"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 border-2 border-emerald-500/20 rounded-full transform translate-x-32 translate-y-32"></div>
                </div>

                <div className="relative z-10 container mx-auto py-16 lg:py-24 max-w-5xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left content */}
                        <div className="space-y-8">
                            <div className="space-y-10">
                                <p className="text-white text-sm font-medium tracking-wider uppercase">
                                    • USER SATISFACTION
                                </p>
                                <h1 className="text-4xl xl:text-5xl font-bold text-white leading-tight">
                                    Join the Movement, <span className="block">used by millions</span>
                                    <span className="block">of happy users</span>
                                </h1>
                            </div>
                        </div>

                        {/* Right content - App Store stats */}
                        <div className="space-y-6 lg:pl-8">
                            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-5xl lg:text-6xl font-bold text-emerald-500 mb-2">
                                            1,5M+
                                        </div>
                                        <div className="text-slate-600 text-lg">Downloads on App Store</div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className="text-5xl lg:text-6xl font-bold text-emerald-500">4,9</div>
                                        <Star className="w-12 h-12 text-emerald-500 fill-emerald-500" />
                                    </div>
                                    <div className="text-right">
                                        <div className="text-slate-600 text-lg">Ratings out of 5</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                        <div className="bg-[#DEE8F61A]/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 flex flex-col items-center">
                            <div className="text-3xl lg:text-4xl font-bold text-white mb-2">150k+</div>
                            <div className="text-slate-400 text-sm">Active Customers</div>
                        </div>
                        <div className="bg-[#DEE8F61A]/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 flex flex-col items-center">
                            <div className="text-3xl lg:text-4xl font-bold text-white mb-2">5%+</div>
                            <div className="text-slate-400 text-sm">Spending reduction</div>
                        </div>
                        <div className="bg-[#DEE8F61A]/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 flex flex-col items-center">
                            <div className="text-3xl lg:text-4xl font-bold text-white mb-2">20%+</div>
                            <div className="text-slate-400 text-sm">Increase savings</div>
                        </div>
                        <div className="bg-[#DEE8F61A]/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 flex flex-col items-center">
                            <div className="text-3xl lg:text-4xl font-bold text-white mb-2">99k+</div>
                            <div className="text-slate-400 text-sm">Positive reviews</div>
                        </div>
                    </div>

                    {/* Bottom description */}
                    <div className="mt-16 text-center">
                        <p className="text-slate-400 text-lg max-w-4xl mx-auto leading-relaxed">
                            Trusted by millions, this app offers seamless financial management and personalized insights
                            for user satisfaction.
                        </p>
                    </div>
                </div>
            </SectionLayout>
        </div>
    );
}
