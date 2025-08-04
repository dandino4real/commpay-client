import React from 'react';
import { IconProps } from '../../types/icons';

const LogoMuted: React.FC<IconProps> = ({ ...props }) => (
    <svg width="126" height="131" viewBox="0 0 126 131" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g style={{ mixBlendMode: 'multiply' }} opacity="0.15">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M118.617 0H53.9779L0 53.8833V116.985L1.2592 118.242L34.0824 85.392L86.2974 33.2685L119.121 0.502799L118.617 0Z"
                fill="#1B1E38"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M83.5141 135.15L34.0782 85.7139L1.31641 118.559L50.6685 167.912L83.5141 135.15Z"
                fill="#202442"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M86.1543 33.2535L127.152 74.2884L160 41.4773L119.003 0.442383L86.1543 33.2535Z"
                fill="#202442"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M115.675 102.858L83.4485 135.123L50.5508 167.891L51.8935 169.232H114.92L116.262 167.891L148.573 135.71L115.675 102.858Z"
                fill="#1B1E38"
            />
            <path
                d="M84.7254 50.4884L50.9062 84.3076L84.7254 118.127L118.545 84.3076L84.7254 50.4884Z"
                fill="#1B1E38"
            />
        </g>
    </svg>
);

export default LogoMuted;
