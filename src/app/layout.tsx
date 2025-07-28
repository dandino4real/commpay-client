import React from 'react';

import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';

import './globals.css';

import { cn } from '@/lib/utils';
import Navigation from '@/components/layout/navigation';

const dm_sans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'CompPay',
    description: 'Seamless Payment Solutions for Africa & Beyond',
};

const RootLayout: React.FC<Readonly<{ children: React.ReactNode }>> = ({ children }) => {
    return (
        <html lang="en">
            <body className={cn(dm_sans.className)}>
                <Navigation />
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
