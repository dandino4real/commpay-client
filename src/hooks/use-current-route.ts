'use client';

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import useRouteHierarchy from './use-route-heirarchy';
import { navigationRoutes } from '../constants/navigation';

/**
 *
 * @param {boolean} baseRoute specify whether to return the base route or not
 * @returns current route
 */

const useCurrentRoute = (baseRoute: boolean = true) => {
    const pathname = usePathname();
    const routeHeirarchy = useRouteHierarchy();

    const currentPathname = baseRoute ? routeHeirarchy[0]?.href : pathname;
    const currentRoute = useMemo(
        () => navigationRoutes.find(navRoute => navRoute.route === currentPathname),
        [currentPathname]
    );

    return currentRoute;
};

export default useCurrentRoute;
