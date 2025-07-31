'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import SectionLayout from '@/components/layout/section-layout';

interface CoreValue {
    id: string;
    title: string;
    image: string;
    color: string;
    description: string;
}

const coreValues: CoreValue[] = [
    {
        id: 'integrity',
        title: 'Integrity',
        image: '/assets/images/integrity-illustration.png',
        color: 'text-emerald-600',
        description: 'We uphold the highest standards of honesty and transparency in all our dealings.',
    },
    {
        id: 'innovation',
        title: 'Innovation',
        image: '/assets/images/innovation-illustration.png',
        color: 'text-emerald-600',
        description: 'We continuously seek creative solutions to meet the evolving needs of our users.',
    },
    {
        id: 'customer-centricity',
        title: 'Customer-Centricity',
        image: '/assets/images/customer-centricity-illustration.png',
        color: 'text-emerald-600',
        description: 'Our users are at the heart of everything we do, we prioritize their needs and feedback.',
    },
    {
        id: 'security',
        title: 'Security',
        image: '/assets/images/security-illustration.png',
        color: 'text-emerald-600',
        description: 'We are committed to safeguarding user data and ensuring secure transactions.',
    },
    {
        id: 'simplicity',
        title: 'Simplicity',
        image: '/assets/images/simplicity-illustration.png',
        color: 'text-emerald-600',
        description: 'We bstrive to make complex financial processes straightforward and accessible.',
    },
];

export function CoreValuesSection() {
    const [activeValue, setActiveValue] = useState<string>('integrity');

    const activeValueData = coreValues.find(value => value.id === activeValue) || coreValues[0];

    return (
        <SectionLayout className="py-12 md:py-32 px-8 sm:px-12 md:px-24 ">
            <div className="text-center mb-16">
                <Badge>• Core Values</Badge>
            </div>
            <div className="grid lg:grid-cols-3 gap-12 items-center">
                <div className="space-y-6 col-span-1">
                    {coreValues.map(value => (
                        <motion.div
                            key={value.id}
                            className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                                activeValue === value.id
                                    ? 'bg-white shadow-lg border-l-4 border-emerald-500'
                                    : 'hover:bg-white/50'
                            }`}
                            onClick={() => setActiveValue(value.id)}
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span
                                className={`text-2xl font-bold transition-colors duration-300 ${
                                    activeValue === value.id ? value.color : 'text-gray-400'
                                }`}
                            >
                                {value.title}
                            </span>

                            <AnimatePresence>
                                {activeValue === value.id && (
                                    <motion.div
                                        initial={{ opacity: 0, x: -10, scale: 0.8 }}
                                        animate={{ opacity: 1, x: 0, scale: 1 }}
                                        exit={{ opacity: 0, x: 10, scale: 0.8 }}
                                        transition={{ duration: 0.4, ease: 'easeOut' }}
                                    >
                                        <ArrowRight className={`h-5 w-5 ${value.color.replace('text-', 'text-')}`} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                <motion.div className="relative flex justify-center col-span-2 bg-gray-100 p-8 rounded-xl shadow-lg bg-[url('/assets/images/core-values-bg.png')] bg-cover bg-center ">
                    <div className="w-full max-w-md ">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeValue}
                                initial={{ opacity: 0, scale: 0.95, rotateY: -20 }}
                                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                exit={{ opacity: 0, scale: 0.95, rotateY: 20 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 80,
                                    damping: 20,
                                    opacity: { duration: 0.3 },
                                }}
                                className="relative w-[420px] h-[420px] rounded-3xl overflow-hidden"
                            >
                                <div className="relative rounded-3xl p-8 ">
                                    <Image
                                        src={activeValueData.image || '/placeholder.svg'}
                                        alt={`${activeValueData.title} illustration`}
                                        width={400}
                                        height={300}
                                    />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Description card overlay */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeValue + '-desc'}
                            initial={{ opacity: 0, y: 40, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 40, scale: 0.9 }}
                            transition={{
                                type: 'spring',
                                stiffness: 70,
                                damping: 18,
                                opacity: { duration: 0.3 },
                            }}
                            className="absolute bottom-28 left-10 max-w-[340px] bg-white/80 backdrop-blur-md rounded-xl p-4 shadow-lg"
                        >
                            <div className="bg-gray-100 rounded-3xl px-2 py-4">
                                <p className="text-sm text-gray-700 leading-relaxed">{activeValueData.description}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </div>
        </SectionLayout>
    );
}
