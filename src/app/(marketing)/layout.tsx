import React from 'react';
import Navigation from '@/components/layout/navigation';
import Footer from '@/modules/home/components/footer';

const MarketingLayout: React.FC<Readonly<{ children: React.ReactNode }>> = ({ children }) => {
    return (
        <>
            <Navigation />
            {children}
            <Footer />
        </>
    );
};

export default MarketingLayout;
