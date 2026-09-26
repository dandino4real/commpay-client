'use client';

import { Button } from '@/components/ui/button';
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
                return 'bg-accent/5 hover:bg-accent/10 border-accent/20';
            case 'dark':
                return 'bg-sidebar-background text-white border-transparent';
            default:
                return 'bg-white border-zinc-200 hover:border-zinc-300';
        }
    };

    const getIconStyles = () => {
        switch (variant) {
            case 'green':
                return 'bg-accent/20 text-accent';
            case 'dark':
                return 'bg-white/10 text-white';
            default:
                return 'bg-zinc-100 text-zinc-700';
        }
    };

    const getLinkStyles = () => {
        switch (variant) {
            case 'green':
                return 'text-accent hover:text-accent/80 font-medium';
            case 'dark':
                return 'text-white hover:text-white/80 font-medium';
            default:
                return 'text-zinc-900 hover:text-accent font-medium';
        }
    };

    return (
        <Card className={`${getCardStyles()} border shadow-sm hover:shadow-xl transition-all duration-300 group`}>
            <CardContent className="p-8 flex flex-col h-full">
                <div className={`w-12 h-12 ${getIconStyles()} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">{title}</h3>
                <p className={`text-base mb-8 flex-1 leading-relaxed ${variant === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    {description}
                </p>
                {onLinkClick ? (
                    <Button onClick={onLinkClick} variant="link" className={`text-sm !px-0 h-auto justify-start ${getLinkStyles()}`}>
                        {linkText}
                    </Button>
                ) : (
                    <Link href={linkHref} className={`text-sm ${getLinkStyles()}`}>
                        {linkText}
                    </Link>
                )}
            </CardContent>
        </Card>
    );
}
