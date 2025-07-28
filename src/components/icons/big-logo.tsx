import React from 'react';
import { IconProps } from '../../types/icons';

const LogoBig: React.FC<IconProps> = ({ ...props }) => {
    return (
        <svg width="73" height="77" viewBox="0 0 73 77" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M54.0743 0H24.6024L0 24.5526V53.3155L0.562209 53.8766L15.5328 38.9317L39.3407 15.1767L54.3112 0.236484L54.0743 0Z"
                fill="#15E18E"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M38.1109 61.4569L15.5389 38.9307L0.568359 53.8755L23.1404 76.4018L38.1109 61.4569Z"
                fill="#43BA86"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M39.3379 15.1763L58.0302 33.8261L73.0007 18.8858L54.3131 0.236084L39.3379 15.1763Z"
                fill="#43BA86"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M52.8335 46.7625L38.1092 61.4569L23.1387 76.4018L23.7381 76.9999H52.4804L53.0844 76.4018L67.8087 61.7073L52.8335 46.7625Z"
                fill="#15E18E"
            />
            <path
                d="M38.6626 22.9739L23.2266 38.3787L38.6626 53.7834L54.0986 38.3787L38.6626 22.9739Z"
                fill="#43BA86"
            />
        </svg>
    );
};

export default LogoBig;
