import React from 'react';

import SectionLayout from '@/components/layout/section-layout';
import { Badge } from '@/components/ui/badge';

const HowWeHelp: React.FC = () => {
    return (
        <SectionLayout className="py-12 md:py-24 px-8 sm:px-12 md:px-36" containerClassName="space-y-18">
            <div className="space-y-4 md:space-y-8 md:px-48">
                <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-8 items-center md:px-48 justify-center">
                    <h3 className="text-4xl font-semibold min-w-max">How We Help</h3>
                    <Badge>• Key Features</Badge>
                </div>
                <p className="font-light w-full text-muted-foreground text-center">
                    Our platform offers seamless international transfers, transparent rates, and enterprise grade
                    security everything your business needs to thrive globally.
                </p>
            </div>
        </SectionLayout>
    );
};

export default HowWeHelp;
