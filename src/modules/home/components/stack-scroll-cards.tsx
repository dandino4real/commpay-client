import React from 'react';
import Image from 'next/image';
import ApiPlugIcon from '@/components/icons/api-plug-icon';
import SealCheckIcon from '@/components/icons/seal-check-icon';
import FlashIcon from '@/components/icons/flash-icon';
import SectionLayout from '@/components/layout/section-layout';
import { Button } from '@/components/ui/button';
import UpRightIcon from '@/components/icons/uprighticon';
import CurvyLineIllustration from '@/components/icons/curvy-line-illustration-icon';
import { cn } from '@/lib/utils';
import PadlockWhiteIcon from '@/components/icons/padlock-white-icon';
import GrowthTrendIcon from '@/components/icons/growth-trend-icon';
import Link from 'next/link';

interface CardData {
    icon: React.ReactNode;
    title: string;
    description: string;
    bgClass: string;
    buttonText: string;
    variant: 1 | 2;
    illustration: React.ReactNode;
}

const cardData: CardData[] = [
    {
        icon: <ApiPlugIcon className="w-8 h-8 text-white top-8 left-8" />,
        title: 'One API, Many Markets',
        description: 'Access Payments in Multiple Countries and Networks, Locally And Globally',
        bgClass: 'bg-[#14142B]',
        buttonText: 'Get Started',
        variant: 1,
        illustration: (
            <div className="w-full">
                <Image
                    width={600}
                    height={500}
                    alt="shadow"
                    src={`/assets/images/vertical-ellipse-shadow.png`}
                    className="absolute bottom-0 right-20 object-cover"
                />
                <Image
                    width={500}
                    height={1000}
                    alt="vscode"
                    src={`/assets/images/vscode1.png`}
                    className="z-10 absolute -right-16"
                />
                <Image
                    width={500}
                    height={1000}
                    alt="code-editor"
                    src={`/assets/images/editor1.png`}
                    className="z-20 absolute right-8 bottom-10"
                />
                <CurvyLineIllustration className="absolute bottom-0 left-0" />
            </div>
        ),
    },
    {
        icon: <FlashIcon className="w-8 h-8 text-white top-8 left-8" />,
        title: 'Fast, Reliable Settlements',
        description: 'Get Your Money When You Need It, Where You Need It',
        bgClass: 'bg-accent',
        buttonText: 'Get Started',
        variant: 2,
        illustration: (
            <div className="w-full">
                <Image
                    width={600}
                    height={500}
                    alt="shadow"
                    src={`/assets/images/vertical-ellipse-shadow.png`}
                    className="absolute bottom-0 right-20 object-cover"
                />
                <Image
                    width={400}
                    height={1000}
                    alt="fastmoney"
                    className="z-10 absolute"
                    src={`/assets/images/fast-money-3d.png`}
                />
                <CurvyLineIllustration className="absolute bottom-0 left-0" />
            </div>
        ),
    },
    {
        icon: <SealCheckIcon className="w-8 h-8 text-white top-8 left-8" />,
        title: 'Transparent Pricing',
        description: 'No Hidden Surprises here! See Our Rates Before You Pay',
        bgClass: 'bg-[#14142B]',
        buttonText: 'Get Started',
        variant: 1,
        illustration: (
            <div className="w-full">
                <Image
                    width={600}
                    height={500}
                    alt="shadow"
                    src={`/assets/images/vertical-ellipse-shadow.png`}
                    className="absolute bottom-0 right-20 object-cover"
                />
                <Image
                    width={400}
                    height={1000}
                    alt="vscode"
                    src={`/assets/images/badge-check.png`}
                    className="z-10 absolute"
                />
                <CurvyLineIllustration className="absolute bottom-0 right-20" />
            </div>
        ),
    },
    {
        icon: <PadlockWhiteIcon className="w-8 h-8 text-white top-8 left-8" />,
        title: 'Secure & Compliant',
        description:
            "From PCI to Privacy Regulations and Security we've got More Than What You Need For Safe Money Transfers",
        bgClass: 'bg-accent',
        buttonText: 'Get Started',
        variant: 2,
        illustration: (
            <div className="w-full">
                <Image
                    width={600}
                    height={500}
                    alt="shadow"
                    src={`/assets/images/vertical-ellipse-shadow.png`}
                    className="absolute bottom-0 right-20 object-cover"
                />
                <Image
                    width={500}
                    height={1000}
                    alt="vscode"
                    src={`/assets/images/payment-transaction-hand.png`}
                    className="z-10 absolute bottom-0"
                />
                <CurvyLineIllustration className="absolute bottom-0 left-0" />
            </div>
        ),
    },
    {
        icon: <GrowthTrendIcon className="w-8 h-8 text-white top-8 left-8" />,
        title: 'Built For Scale',
        description: 'Scale Payments To Multiple Countries and Networks, Locally And Globally',
        bgClass: 'bg-[#14142B]',
        buttonText: 'Get Started',
        variant: 1,
        illustration: (
            <div className="w-full">
                <Image
                    width={600}
                    height={500}
                    alt="shadow"
                    src={`/assets/images/vertical-ellipse-shadow.png`}
                    className="absolute bottom-0 right-20 object-cover"
                />
                <Image
                    width={400}
                    height={1000}
                    alt="code-editor"
                    src={`/assets/images/compay-3d.png`}
                    className="z-20 absolute right-8 bottom-10"
                />
                <CurvyLineIllustration className="absolute bottom-0 left-0" />
            </div>
        ),
    },
];

const StackScrollCards: React.FC = () => {
    return (
        <SectionLayout className="px-8 py-0 sm:px-12 md:px-36">
            <div className="relative flex flex-col gap-16">
                {cardData.map((card, index) => (
                    <div
                        key={card.title}
                        className={cn(
                            'sticky top-0 mb-6 p-20 rounded-3xl overflow-hidden shadow-xl transition-all duration-300 min-h-[496px] flex flex-col md:flex-row justify-between md:gap-24',
                            card.bgClass,
                            card.variant === 2 ? 'md:flex-row-reverse' : ''
                        )}
                        style={{
                            zIndex: index + 1,
                        }}
                    >
                        {/* Content */}
                        <div className={'relative z-10 flex flex-col h-full w-full'}>
                            <div className={cn('space-y-8 max-w-xl', card.variant === 2 && 'text-right')}>
                                <div className={cn('w-full flex', card.variant === 2 && 'justify-end')}>
                                    {card.icon}
                                </div>
                                <h3 className="text-2xl md:text-4xl font-semibold text-white">{card.title}</h3>
                                <p className="text-white/80">{card.description}</p>
                                <Link href="/signup" passHref>
                                    <Button variant={card.variant === 2 ? 'default' : 'secondary'}>
                                        {card.buttonText}
                                        <UpRightIcon size={48} />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        {card.illustration}
                    </div>
                ))}
            </div>
        </SectionLayout>
    );
};

export default StackScrollCards;
