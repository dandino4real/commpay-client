import React from 'react';
import { IconProps } from '../../types/icons';

const ApiPlugIcon: React.FC<IconProps> = ({ className, ...props }) => (
    <svg
        width="29"
        height="29"
        viewBox="0 0 29 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
    >
        <path
            d="M22.3531 13.2917L20.5406 15.1042L13.8948 8.45838L15.7073 6.64588C16.6135 5.73963 19.9364 4.22921 22.3531 6.64588C24.7698 9.06255 23.2594 12.3855 22.3531 13.2917Z"
            fill="white"
            stroke="white"
            strokeWidth="2.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M25.3761 3.625L22.3552 6.64583"
            stroke="white"
            strokeWidth="2.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M6.64539 15.7083L8.45789 13.8958L15.1037 20.5416L13.2912 22.3541C12.385 23.2604 9.06206 24.7708 6.64539 22.3541C4.22873 19.9375 5.73914 16.6146 6.64539 15.7083Z"
            fill="white"
            stroke="white"
            strokeWidth="2.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M13.8958 19.3333L16.3125 16.9167M3.625 25.375L6.64583 22.3542M9.66667 15.1042L12.0833 12.6875"
            stroke="white"
            strokeWidth="2.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default ApiPlugIcon;
