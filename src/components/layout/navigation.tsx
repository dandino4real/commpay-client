'use client';

import * as React from 'react';
import Link from 'next/link';

import { cn } from '../../lib/utils';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '../ui/navigation-menu';
import Logo from '../icons/logo';
import { Button } from '../ui/button';
import { navigationCTARoutes, navigationRoutes } from '@/constants/navigation';

const Navigation: React.FC = () => {
    const currentRoute = useCurrentRoute();
    const [hidden, setHidden] = React.useState(false);

    React.useEffect(() => {
        const hero = document.getElementById('hero-section');
        const heroHeight = hero ? hero.offsetHeight : 600; // fallback height
        const onScroll = () => {
            setHidden(window.scrollY > heroHeight);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <NavigationMenu
            className={cn(
                'w-full py-8 px-8 sm:px-12 md:px-24 justify-between fixed top-0 shadow-none backdrop-blur-sm transition-opacity duration-300',
                hidden ? 'opacity-0 pointer-events-none' : 'opacity-100'
            )}
        >
            <HeroBgMesh className="absolute top-0 left-0" />
            <NavigationMenuList className="w-full flex justify-between">
                <NavigationMenuItem>
                    <NavigationMenuLink
                        asChild
                        className={cn(
                            navigationMenuTriggerStyle(),
                            'hover:bg-transparent scale-90 md:scale-100 focus:bg-transparent px-0'
                        )}
                    >
                        <Link href="/">
                            <Logo />
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <div className="hidden md:flex space-x-2 items-center">
                    {navigationRoutes.map((item, index) => {
                        const isActive = currentRoute?.route === item.route;

                        return (
                            <NavigationMenuItem
                                key={`${item.route}-${index}`}
                                className={`${isActive ? 'bg-accent rounded-md' : 'text-white'}`}
                            >
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link href={item.route}>{item.label}</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        );
                    })}
                </div>
                <div className="hidden md:flex space-x-2 items-center">
                    {navigationCTARoutes.map((item, index) => {
                        const isActive = currentRoute?.route === item.route;

                        return (
                            <NavigationMenuItem
                                key={`${item.route}-${index}`}
                                className={`${isActive ? 'bg-accent rounded-md' : 'text-white'}`}
                            >
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link href={item.route}>{item.label}</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        );
                    })}
                    <NavigationMenuItem
                        className={`${currentRoute?.route === 'contact-us' ? 'bg-accent rounded-md' : 'text-white'}`}
                    >
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link href="contact-us"> {<SupportIcon />} </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </div>
                <MobileNavigation currentRoute={currentRoute} />
            </NavigationMenuList>
        </NavigationMenu>
    );
};

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
    ({ className, title, children, ...props }, ref) => {
        return (
            <li>
                <NavigationMenuLink asChild>
                    <a
                        ref={ref}
                        className={cn(
                            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                            className
                        )}
                        {...props}
                    >
                        <div className="text-sm font-medium leading-none">{title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-white">{children}</p>
                    </a>
                </NavigationMenuLink>
            </li>
        );
    }
);

ListItem.displayName = 'ListItem';

export default Navigation;

import { Sheet, SheetClose, SheetContent, SheetTrigger } from '../../components/ui/sheet';
import { MenuIcon } from 'lucide-react';
import useCurrentRoute from '../../hooks/use-current-route';
import SupportIcon from '../icons/support';
import HeroBgMesh from '../icons/hero-bg-mesh';

const MobileNavigation: React.FC<{ currentRoute: ReturnType<typeof useCurrentRoute> }> = ({ currentRoute }) => {
    return (
        <Sheet>
            <SheetTrigger asChild className="md:hidden cursor-pointer">
                <MenuIcon className="w-8 h-8 text-foreground" />
            </SheetTrigger>
            <SheetContent className="flex flex-col justify-between">
                <div className="space-y-6">
                    {navigationRoutes.map((item, index) => {
                        const isActive = currentRoute?.route === item.route;

                        return (
                            <NavigationMenuItem key={`${item.route}-${index}`} className={'text-center list-none'}>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link href={item.route}>
                                        <SheetClose asChild>
                                            <Button
                                                variant="ghost"
                                                className={`${isActive && 'bg-accent rounded-md'} `}
                                            >
                                                {item.label}
                                            </Button>
                                        </SheetClose>
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        );
                    })}
                </div>
                <NavigationMenuItem className="text-center list-none">
                    <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), 'px-0')}>
                        <Link href="/sign-up">
                            <SheetClose asChild>
                                <Button> Create free account</Button>
                            </SheetClose>
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </SheetContent>
        </Sheet>
    );
};
