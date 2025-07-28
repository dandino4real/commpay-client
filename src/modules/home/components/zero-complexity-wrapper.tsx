'use client';

import React, { Suspense } from 'react';
import ZeroComplexity from './zero-complexity';
import { LoaderCircle } from 'lucide-react';

const ZeroComplexityWrapper: React.FC = () => (
  <Suspense fallback={<LoaderCircle className="mx-auto animate-spin" />}>
    <ZeroComplexity />
  </Suspense>
);

export default ZeroComplexityWrapper;
