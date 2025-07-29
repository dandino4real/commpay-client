import React from 'react';
import { IconProps } from '../../types/icons';

const CurvyLineIllustration: React.FC<IconProps> = ({ className, ...props }) => (
    <svg
        width="707"
        height="496"
        viewBox="0 0 707 496"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
    >
        <path
            d="M697.638 572.742C698.782 497.906 706.309 347.041 466.208 440.783C-41.1302 638.861 136.551 117.236 -17.8111 0.380439C-91.7613 -55.6017 -142.562 -31.5113 -293.892 -37.4021"
            stroke="url(#paint0_linear_521_674)"
            strokeWidth="16.64"
        />
        <defs>
            <linearGradient
                id="paint0_linear_521_674"
                x1="687.708"
                y1="420.944"
                x2="-209.804"
                y2="575.42"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#6AFFB0" stopOpacity="0.36" />
                <stop offset="0.68" stopColor="#EBDDF9" stopOpacity="0" />
            </linearGradient>
        </defs>
    </svg>
);

export default CurvyLineIllustration;
