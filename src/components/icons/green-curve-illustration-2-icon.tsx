import React from 'react';
import { IconProps } from '../../types/icons';

const GreenCurveIllustration2: React.FC<IconProps> = ({ className, ...props }) => (
    <svg
        width="742"
        height="496"
        viewBox="0 0 742 496"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
    >
        <path
            d="M9.15664 547.742C8.01205 472.905 0.484873 322.04 240.587 415.782C747.924 613.861 570.243 92.2355 724.605 -24.6196C798.555 -80.6018 849.356 -56.5113 1000.69 -62.4021"
            stroke="url(#paint0_linear_521_693)"
            strokeWidth="16.64"
        />
        <defs>
            <linearGradient
                id="paint0_linear_521_693"
                x1="19.0865"
                y1="395.944"
                x2="916.599"
                y2="550.42"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#6AFFB0" stopOpacity="0.39" />
                <stop offset="0.83" stopColor="#EBDDF9" stopOpacity="0" />
            </linearGradient>
        </defs>
    </svg>
);

export default GreenCurveIllustration2;
