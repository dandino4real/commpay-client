import React from 'react';
import { IconProps } from '../../types/icons';

const UpRightIcon: React.FC<IconProps> = ({ ...props }) => {
    return (
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M6.06055 11.5201L12.4605 5.12012"
                stroke="#15E18E"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6.06055 5.12012H12.4605V11.5201"
                stroke="#15E18E"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default UpRightIcon;
