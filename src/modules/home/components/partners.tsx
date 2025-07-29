import React from 'react';

import SectionLayout from '@/components/layout/section-layout';
import AmazonPayIcon from '@/components/icons/amazonpay';
import ApplePayIcon from '@/components/icons/applepay';
import MasterCardIcon from '@/components/icons/mastercard';
import SkrillIcon from '@/components/icons/skrill';
import WesternUniondIcon from '@/components/icons/westernunion';
import DiscoverIcon from '@/components/icons/discover';
import UnionPayIcon from '@/components/icons/unionpay';

const Partners: React.FC = () => {
    return (
        <SectionLayout
            className="pb-12 md:pb-24 px-8 sm:px-12 md:px-36"
            containerClassName="flex gap-4 md:gap-10 items-center justify-center flex-wrap"
        >
            <ApplePayIcon />
            <WesternUniondIcon />
            <MasterCardIcon />
            <SkrillIcon />
            <AmazonPayIcon />
            <DiscoverIcon />
            <UnionPayIcon />
        </SectionLayout>
    );
};

export default Partners;
