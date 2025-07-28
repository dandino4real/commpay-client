import React from 'react';
import { IconProps } from '../../types/icons';

const ArrowRight: React.FC<IconProps> = ({ ...props }) => {
    return (
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M6.64062 10H14.6406"
                stroke="#1B1E38"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M10.6406 6L14.6406 10L10.6406 14"
                stroke="#1B1E38"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default ArrowRight;
