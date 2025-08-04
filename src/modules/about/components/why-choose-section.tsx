import Logo from '@/components/icons/logo';
import SectionLayout from '@/components/layout/section-layout';
import { Badge } from '@/components/ui/badge';
import * as motion from 'motion/react-client';
import Image from 'next/image';

export function WhyChooseSection() {
    return (
        <SectionLayout className="pb-20 pt-8 md:pt-32 px-8 sm:px-12 md:px-24 ">
            <div className="text-center mb-12">
                <Badge>• About Us</Badge>

                <h1 className=" text-3xl sm:text-4xl lg:text-6xl font-semibold text-gray-900 mt-6 mb-8">Why Choose CompPay</h1>
                <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    We&apos;re on a mission to simplify cross-border payments, currency exchange, and international
                    money management making global finance faster, safer, and more accessible for everyone.
                </p>
            </div>
            <motion.div
                initial={{ scale: 1 }}
                whileHover={{
                    scale: 1.03,
                    transition: { duration: 1, ease: 'easeInOut' },
                }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="relative rounded-4xl overflow-hidden shadow-2xl w-full max-w-6xl h-[300px] sm:h-[400px] md:h-[464px]"
            >
                <Image
                    src="/assets/images/about-hero-image.png"
                    alt="CompPay team working together"
                    fill
                    className="object-cover transform scale-100"
                />
                <div className="absolute bottom-0 left-8">
                    <Logo className="size-20 md:size-35" />
                </div>
            </motion.div>

        </SectionLayout>
    );
}
