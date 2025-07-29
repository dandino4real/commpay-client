import React from 'react';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

import { cn } from '@/lib/utils';
import Navigation from '@/components/layout/navigation';
import Footer from '@/modules/home/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'CompPay',
    description: 'Seamless Payment Solutions for Africa & Beyond',
};

const RootLayout: React.FC<Readonly<{ children: React.ReactNode }>> = ({ children }) => {
    return (
        <html lang="en">
            <body className={cn(inter.className)}>
                <Navigation />
                {children}
                <Footer />
            </body>
        </html>
    );
};

export default RootLayout;
