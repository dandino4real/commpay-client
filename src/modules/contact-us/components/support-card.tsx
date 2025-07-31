'use client';

import { Card, CardContent } from '@/components/ui/card';
import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface SupportCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    linkText: string;
    linkHref: string;
    variant?: 'default' | 'green' | 'dark';
    onLinkClick?: () => void;
}

export function SupportCard({
    icon: Icon,
    title,
    description,
    linkText,
    linkHref,
    variant = 'default',
    onLinkClick,
}: SupportCardProps) {
    const getCardStyles = () => {
        switch (variant) {
            case 'green':
                return 'bg-green-500 text-white';
            case 'dark':
                return 'bg-slate-800 text-white';
            default:
                return 'bg-gray-100';
        }
    };

    const getIconStyles = () => {
        switch (variant) {
            case 'green':
            case 'dark':
                return 'bg-white/20';
            default:
                return 'bg-green-500';
        }
    };

    const getIconColor = () => {
        switch (variant) {
            case 'default':
                return 'text-white';
            default:
                return 'text-white';
        }
    };

    const getLinkStyles = () => {
        switch (variant) {
            case 'green':
            case 'dark':
                return 'text-white underline';
            default:
                return 'text-gray-500 underline';
        }
    };

    return (
        <Card className={`${getCardStyles()} border-0 hover:shadow-lg transition-shadow`}>
            <CardContent className="p-6">
                <div className={`w-12 h-12 ${getIconStyles()} rounded-full flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${getIconColor()}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className={`text-sm mb-4 ${variant === 'default' ? 'text-gray-600' : 'text-white/90'}`}>
                    {description}
                </p>
                {onLinkClick ? (
                    <button onClick={onLinkClick} className={`text-sm ${getLinkStyles()}`}>
                        {linkText}
                    </button>
                ) : (
                    <Link href={linkHref} className={`text-sm ${getLinkStyles()}`}>
                        {linkText}
                    </Link>
                )}
            </CardContent>
        </Card>
    );
}
