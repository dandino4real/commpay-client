import React from 'react';
import { IconProps } from '../../types/icons';

const BusinessSuitCase: React.FC<IconProps> = ({ ...props }) => {
    return (
        <svg
            width="122"
            height="100"
            viewBox="0 0 122 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            {...props}
        >
            <rect width="121.498" height="100" fill="url(#pattern0_1_16172)" />
            <defs>
                <pattern id="pattern0_1_16172" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_1_16172" transform="matrix(0.00823056 0 0 0.01 0.0884719 0)" />
                </pattern>
                <image
                    id="image0_1_16172"
                    width="100"
                    height="100"
                    xlinkHref="data:image/png;base64,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"
                />
            </defs>
        </svg>
    );
};

export default BusinessSuitCase;
