'use client';

import React, { Suspense } from 'react';
import VirtualCards from './virtual-cards';
import { LoaderCircle } from 'lucide-react';

const VirtualCardsWrapper: React.FC = () => (
  <Suspense fallback={<LoaderCircle className="spin-in-180" />}>
    <VirtualCards />
  </Suspense>
);

export default VirtualCardsWrapper;
