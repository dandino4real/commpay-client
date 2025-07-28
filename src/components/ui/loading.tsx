import React from 'react';

import { cn } from '../../lib/utils';

interface LoadingProps {
    className?: string;
    cover?: boolean;
}

const Loading: React.FC<LoadingProps> = ({ className, cover }) => {
    return (
        <div className={`h-full ${cover && 'w-full flex items-center justify-center'}`}>
            <svg
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className={cn('animate-spin h-12 w-12 mt-2 text-accent', className)}
            >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
            </svg>
        </div>
    );
};

export default Loading;
