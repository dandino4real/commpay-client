import React from 'react';
import Link from 'next/link';
import Logo from '@/components/icons/logo';

const AuthLayout: React.FC<Readonly<{ children: React.ReactNode }>> = ({ children }) => {
    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
            {/* Left side (Dark/Graphic) */}
            <div className="hidden md:flex flex-col justify-between bg-sidebar-background text-white p-12 relative overflow-hidden">
                <div className="relative z-10">
                    <Link href="/">
                        <Logo fill="#FFF" />
                    </Link>
                </div>
                
                <div className="relative z-10 space-y-6 max-w-md">
                    <h1 className="text-4xl font-bold tracking-tight">Seamless Payment Solutions for Africa & Beyond.</h1>
                    <p className="text-zinc-400 text-lg">
                        Join thousands of businesses relying on CompPay for their daily financial operations and growth.
                    </p>
                </div>
                
                {/* Decorative background element */}
                <div className="absolute -bottom-[20%] -left-[10%] w-[80%] h-[60%] rounded-full bg-accent/20 blur-[120px] pointer-events-none" />
                <div className="absolute top-[10%] -right-[10%] w-[60%] h-[40%] rounded-full bg-accent/10 blur-[120px] pointer-events-none" />
            </div>

            {/* Right side (Form) */}
            <div className="flex flex-col items-center justify-center p-8 bg-zinc-50 relative">
                <div className="md:hidden absolute top-8 left-8">
                    <Link href="/">
                        <Logo fill="#000" />
                    </Link>
                </div>
                <div className="w-full max-w-md space-y-8 mt-12 md:mt-0">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
