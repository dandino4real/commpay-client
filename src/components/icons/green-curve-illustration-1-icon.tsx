import React from 'react';
import { IconProps } from '../../types/icons';

const GreenCurveIllustration1: React.FC<IconProps> = ({ className, ...props }) => (
    <svg
        width="962"
        height="290"
        viewBox="0 0 962 290"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
    >
        <path
            d="M9.15664 289.742C8.01205 214.905 0.484873 64.0405 240.587 157.782C747.924 355.861 570.243 -165.764 724.605 -282.62C798.555 -338.602 849.356 -314.511 1000.69 -320.402"
            stroke="url(#paint0_linear_521_694)"
            strokeWidth="16.64"
        />
        <defs>
            <linearGradient
                id="paint0_linear_521_694"
                x1="19.0865"
                y1="137.944"
                x2="916.599"
                y2="292.42"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#6AFFB0" stopOpacity="0.39" />
                <stop offset="0.83" stopColor="#EBDDF9" stopOpacity="0" />
            </linearGradient>
        </defs>
    </svg>
);

export default GreenCurveIllustration1;
