import SectionLayout from '@/components/layout/section-layout';
import Image from 'next/image';

export default function WhoWeServe() {
    return (
        <SectionLayout className="">
            <div className="flex gap-x-5 items-center justify-center py-10">
                <h2 className="text-3xl font-medium">Who We Serve</h2>
                <span className="bg-[#F4FFF9] text-[#1FC16B] py-2 px-4 rounnded-sm">• Key features</span>
            </div>
            <div className="max-w-7xl mx-auto py-10 flex flex-col space-y-5">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
                    {/* Financial Analytics Section */}
                    <div className="bg-gradient-to-br h-[400px] md:h-[475px] col-span-2 from-green-400 to-green-500 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Financial analytics</h2>
                            <p className="text-lg md:text-xl mb-8 text-green-50">
                                Create some fun reports and charts to check out how people are spending their money.
                            </p>
                        </div>
                        <div className="absolute bottom-0 md:-bottom-20  right-0 left-0">
                            <div className="relative ">
                                <Image
                                    src="/assets/images/mobile.png"
                                    alt="Spending summary illustration"
                                    width={500}
                                    height={200}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* 24/7 Support Section */}
                    <div className="bg-[#F4FFF9] col-span-1 rounded-3xl p-8 md:p-12">
                        <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">24/7 Support</h2>
                        <p className="text-sm text-gray-600 mb-8">
                            Need assistance? Our friendly crew is ready to assist you anytime! Just drop us a message,
                            and we&apos;ll take care of everything!
                        </p>
                        <Image
                            src="/assets/images/chat.svg"
                            height={200}
                            width={500}
                            className="w-full h-auto object-contain"
                            alt="24/7 Support"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
                    {/* Easy Card Management Section */}

                    <div className="bg-white h-[400px] md:h-[475px] p-8 md:p-7 text-white relative overflow-hidden">
                        <h2 className="text-3xl md:text-4xl font-medium mb-4 text-gray-600">
                            Easy easier card management
                        </h2>
                        <p className="text- text-gray-600 mb-8">
                            Manage your cards effortlessly and keep track of all of your expenses
                        </p>
                        <div className="absolute -bottom-5  right-0 left-0">
                            <div className="relative ">
                                <Image
                                    src="/assets/images/cards.svg"
                                    alt="Spending summary illustration"
                                    width={500}
                                    height={200}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Instant Transaction Alerts Section */}
                    <div className="bg-gradient-to-br h-[400px] md:h-[475px] from-green-400 to-green-500 rounded-2xl p-8 md:p-8 pt-12 text-white relative overflow-hidden">
                        <h2 className="text-3xl md:text-4xl font-medium mb-4">Instant transaction alerts</h2>
                        <p className="text- text-green-50 mb-8">
                            Easily manage your cards and effortlessly stay on top of all your spending.
                        </p>
                        <div className="absolute -bottom-0  right-0 left-0">
                            <div className="relative ">
                                <Image
                                    src="/assets/images/transaction-history.svg"
                                    alt="Spending summary illustration"
                                    width={500}
                                    height={200}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionLayout>
    );
}
