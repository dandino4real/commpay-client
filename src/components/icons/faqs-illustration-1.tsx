import React from 'react';
import { IconProps } from '../../types/icons';

const FaqsIllustration1: React.FC<IconProps> = ({ ...props }) => {
    return (
        <svg width="450" height="560" viewBox="0 0 450 560" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M19.7806 -194C-157.114 186.521 286.972 25.82 365.142 143.649C463.995 292.654 90.9288 250.777 43.0708 448.335C2.3583 616.4 304.125 612.119 445.505 693.653"
                stroke="url(#paint0_linear_652_872)"
                strokeWidth="16.64"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_652_872"
                    x1="129.838"
                    y1="587.692"
                    x2="9.08924"
                    y2="-149.356"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#9FFFCC" stop-opacity="0.47" />
                    <stop offset="1" stop-color="#EBDDF9" stop-opacity="0" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default FaqsIllustration1;
