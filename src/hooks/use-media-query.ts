'use client';

import { useEffect, useState } from 'react';

export type MediaQueries = {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    isLargeDesktop: boolean;
    isPortrait: boolean;
    isLandscape: boolean;
    isPrefersReducedMotion: boolean;
    isDarkMode: boolean;
};

const useMediaQuery = (): MediaQueries => {
    const [mediaQueries, setMediaQueries] = useState<MediaQueries>({
        isMobile: false,
        isTablet: false,
        isDesktop: false,
        isLargeDesktop: false,
        isPortrait: false,
        isLandscape: false,
        isPrefersReducedMotion: false,
        isDarkMode: false,
    });

    useEffect(() => {
        const queries = {
            isMobile: window.matchMedia('(max-width: 767px)'),
            isTablet: window.matchMedia('(min-width: 768px) and (max-width: 1023px)'),
            isDesktop: window.matchMedia('(min-width: 1024px) and (max-width: 1279px)'),
            isLargeDesktop: window.matchMedia('(min-width: 1280px)'),
            isPortrait: window.matchMedia('(orientation: portrait)'),
            isLandscape: window.matchMedia('(orientation: landscape)'),
            isPrefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)'),
            isDarkMode: window.matchMedia('(prefers-color-scheme: dark)'),
        };

        const updateMediaQueries = () => {
            setMediaQueries({
                isMobile: queries.isMobile.matches,
                isTablet: queries.isTablet.matches,
                isDesktop: queries.isDesktop.matches,
                isLargeDesktop: queries.isLargeDesktop.matches,
                isPortrait: queries.isPortrait.matches,
                isLandscape: queries.isLandscape.matches,
                isPrefersReducedMotion: queries.isPrefersReducedMotion.matches,
                isDarkMode: queries.isDarkMode.matches,
            });
        };

        // Initial check
        updateMediaQueries();

        // Add listeners for each media query
        Object.values(queries).forEach(query => {
            query.addEventListener('change', updateMediaQueries);
        });

        // Cleanup listeners
        return () => {
            Object.values(queries).forEach(query => {
                query.removeEventListener('change', updateMediaQueries);
            });
        };
    }, []);

    return mediaQueries;
};

export default useMediaQuery;
