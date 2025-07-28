import React from 'react';
import { IconProps } from '../../types/icons';

const CardIcon: React.FC<IconProps> = ({ ...props }) => {
    return (
        <svg width="32" height="27" viewBox="0 0 32 27" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M-4.25586 -1.22607L30.5275 -6.89293L36.1943 27.8904L1.41099 33.5572L-4.25586 -1.22607Z"
                fill="black"
            />
        </svg>
    );
};

export default CardIcon;
