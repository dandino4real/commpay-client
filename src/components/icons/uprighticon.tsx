import React from 'react';
import { IconProps } from '../../types/icons';

const UpRightIcon: React.FC<IconProps> = ({ size = 12, ...props }) => {
    return (
        <svg width={size} height={size} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M0.742641 10.4194L9.58148 1.58056M9.58148 1.58056H1.09619M9.58148 1.58056V10.0658"
                stroke="#F2F9FE"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </svg>
    );
};

export default UpRightIcon;
