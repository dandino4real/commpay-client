'use client';

import React, { Suspense } from 'react';
import SuperAgentServices from './super-agent-services';
import { LoaderCircle } from 'lucide-react';

const SuperAgentServicesWrapper: React.FC = () => (
  <Suspense fallback={<LoaderCircle className="spin-in-180" />}>
    <SuperAgentServices />
  </Suspense>
);

export default SuperAgentServicesWrapper;
