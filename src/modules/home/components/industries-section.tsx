import SectionLayout from '@/components/layout/section-layout';
import { ArrowRight } from 'lucide-react';

const industries = [
    {
        title: 'Digital & Subscriptions',
        description:
            '(Streaming, Gaming, SaaS, E-Learning): CompPay provides payment processing solutions tailored for digital platforms, ensuring efficient transactions for streaming services, gaming subscriptions, SaaS products, and e-learning courses, requiring payment integration for access.',
    },
    {
        title: 'Travels',
        description:
            'Offers payment gateways for online travel agencies, airlines, and travel operators, facilitating secure payments for bookings through global distribution systems thereby requiring a reliable payment infrastructure',
    },
    {
        title: 'B2C Retail',
        description:
            'CompPay delivers comprehensive payment solutions for B2C retail marketplaces and e-commerce platforms, enabling businesses to efficiently process transactions and manage customer payments.',
    },
    {
        title: 'B2C Retail',
        description:
            'CompPay delivers comprehensive payment solutions for B2C retail marketplaces and e-commerce platforms, enabling businesses to efficiently process transactions and manage customer payments.',
    },
    {
        title: 'B2C Retail',
        description:
            'CompPay delivers comprehensive payment solutions for B2C retail marketplaces and e-commerce platforms, enabling businesses to efficiently process transactions and manage customer payments.',
    },
];

export default function IndustriesSection() {
    return (
        <SectionLayout className="">
            <div className="max-w-7xl mx-auto py-20 ">
                <div className="bg-[#F4FFF9] py-20">
                    {/* Header */}
                    <div className="mb-12 px-10">
                        <p className="text-[#646464] mb-16 font-light">Industries we serve</p>
                        <div className="flex items-center justify-between">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 leading-tight">
                                Serving Bold Businesses
                                <br />
                                Everywhere
                            </h2>
                            <div className="pr-20">
                                <button className="w-[70px] h-[70px] bg-[#E6FFF2] rounded-full flex items-center justify-center">
                                    <ArrowRight className="w-6 h-6 text-green-400" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Industry Cards */}
                    <div className="flex gap-4 overflow-x-auto w-full pb-4 pr-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                        {industries.map((industry, index) => (
                            <div
                                key={index}
                                className="space-y-8 w-[509px] py-20 flex-shrink-0 bg-white p-6 pl-20 flex flex-col"
                            >
                                <h3 className="text-2xl font-medium text-gray-800">{industry.title}</h3>
                                <p className="text-gray-600 leading-[29.2px] text-sm">{industry.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionLayout>
    );
}
