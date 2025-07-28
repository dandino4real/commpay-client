'use client';

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { convertToSentenceCase } from '@/utils/string';

export interface RouteSegment {
    name: string;
    href: string;
}

/**
 * Returns the hierarchy of the current route from the root to the top.
 */
const useRouteHierarchy = (): Array<RouteSegment> => {
    const pathname = usePathname();

    // Split the pathname into segments and build the hierarchy
    const hierarchy: RouteSegment[] = useMemo(
        () =>
            pathname
                .split('/')
                .filter(segment => segment !== '') // Remove empty segments
                .map((segment, index, array) => ({
                    name: convertToSentenceCase(decodeURIComponent(segment), '-'), // Decode URI components
                    href: '/' + array.slice(0, index + 1).join('/'), // Build the URL for each level
                })),
        [pathname]
    );

    if (!pathname) return [{ name: 'Home', href: '/' }];

    return hierarchy;
};

export default useRouteHierarchy;
