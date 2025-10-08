'use client';

import * as React from 'react';
import Link from 'next/link';
import useMediaQuery from '@/hooks/use-media-query';

import { cn } from '../../lib/utils';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuContent,
    navigationMenuTriggerStyle,
} from '../ui/navigation-menu';
import Logo from '../icons/logo';
import { Button } from '../ui/button';
import { navigationCTARoutes, navigationMoreRoutes, navigationRoutes } from '@/constants/navigation';

const whiteBGPages = ['/contact-us', '/about'];

const Navigation: React.FC = () => {
    const currentRoute = useCurrentRoute();
    const [hidden, setHidden] = React.useState(false);
    const { isMobile } = useMediaQuery();

    const isWhiteBG = whiteBGPages.includes(currentRoute?.route as string);

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
                'w-full py-8 px-8 sm:px-12 md:px-24 justify-between md:fixed z-50 top-0 shadow-none md:backdrop-blur-sm transition-opacity duration-300',
                hidden ? 'opacity-0 pointer-events-none' : 'opacity-100'
            )}
        >
            <HeroBgMesh className="absolute top-0 left-0 hidden lg:block" />
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
                            <Logo fill={isMobile || isWhiteBG ? '#000' : '#FFF'} />
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <div className="hidden md:flex space-x-2 items-center">
                    {navigationRoutes.map((item, index) => {
                        const isActive = currentRoute?.route === item.route;

                        if (item.children) {
                            return (
                                <NavigationMenuItem key={`${item.route}-${index}`}>
                                    <NavigationMenuTrigger
                                        className={`${isActive ? 'bg-accent' : ''} ${
                                            isWhiteBG ? 'text-foreground' : 'text-white'
                                        }`}
                                    >
                                        {item.label}
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent className="h-[calc(100vh-6rem)]">
                                        <ul className="grid gap-2 grid-cols-3 w-5xl h-full">
                                            <ScrollArea className="h-[calc(100vh-6rem)] col-span-2">
                                                <li className="grid grid-cols-1 gap-4 w-full p-6">
                                                    {item.children
                                                        .filter(item => item.title !== 'More')
                                                        .map(section => (
                                                            <div
                                                                key={section.title}
                                                                className="not-last:border-b not-last:border-b-border py-6 space-y-6"
                                                            >
                                                                <h4 className="mb-2 font-bold text-muted-foreground leading-none ml-3">
                                                                    {section.title}
                                                                </h4>
                                                                <ul className="grid grid-cols-2 gap-2">
                                                                    {section.items.map(subItem => (
                                                                        <ListItem
                                                                            key={subItem.title}
                                                                            title={subItem.title}
                                                                            href={subItem.route}
                                                                            render={subItem?.render}
                                                                            className="hover:bg-accent/10"
                                                                        >
                                                                            {subItem.description}
                                                                        </ListItem>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        ))}
                                                </li>
                                            </ScrollArea>
                                            <li className="col-span-1 bg-gray-100 h-full p-6 relative">
                                                <NavigationMenuLink>
                                                    <h4 className="mb-2 font-semibold text-muted-foreground leading-none ml-2">
                                                        {navigationMoreRoutes.title}
                                                    </h4>
                                                    <ul className="gap-2">
                                                        {navigationMoreRoutes.items.map(section => (
                                                            <div key={section.title}>
                                                                <ListItem
                                                                    title=""
                                                                    key={section.title}
                                                                    href={section.route}
                                                                    className="hover:bg-accent/10"
                                                                >
                                                                    {section.title}
                                                                </ListItem>
                                                            </div>
                                                        ))}
                                                    </ul>
                                                </NavigationMenuLink>
                                                <LogoMuted className="absolute bottom-0 right-0" />
                                            </li>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            );
                        }

                        return (
                            <NavigationMenuItem
                                key={`${item.route}-${index}`}
                                className={`${isActive ? 'bg-accent rounded-md' : 'text-white'}`}
                            >
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link
                                        className={` ${isWhiteBG ? 'text-foreground' : 'text-white'}`}
                                        href={item.route}
                                    >
                                        {item.label}
                                    </Link>
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
                                    <Link
                                        className={`${isWhiteBG ? 'text-foreground' : 'text-white'}`}
                                        href={item.route}
                                    >
                                        {item.label}
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        );
                    })}
                    <NavigationMenuItem
                        className={`${currentRoute?.route === 'contact-us' ? 'bg-accent rounded-md' : 'text-white'}`}
                    >
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link href="contact-us">{<SupportIcon fill={`${isWhiteBG ? 'black' : 'white'}`} />}</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </div>
                <MobileNavigation currentRoute={currentRoute} />
            </NavigationMenuList>
        </NavigationMenu>
    );
};

interface ListItemProps extends React.ComponentPropsWithoutRef<'a'> {
    title: string;
    href: string;
    render?: React.ReactNode;
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, ListItemProps>(
    ({ className, title, children, href, render, ...props }, ref) => {
        return (
            <li>
                <NavigationMenuLink asChild className={className}>
                    <Link
                        ref={ref}
                        href={href}
                        className={cn(
                            'block select-none space-y-3 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                        )}
                        {...props}
                    >
                        {title && <div className="text-sm font-medium leading-none">{title}</div>}
                        {children && <p className="line-clamp-2 text-sm leading-snug text-gray-400">{children}</p>}
                        {render}
                    </Link>
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
import { ScrollArea } from '../ui/scroll-area';
import LogoMuted from '../icons/logo-muted';

const MobileNavigation: React.FC<{ currentRoute: ReturnType<typeof useCurrentRoute> }> = ({ currentRoute }) => {
    return (
        <Sheet>
            <SheetTrigger asChild className="md:hidden cursor-pointer">
                <MenuIcon className="w-8 h-8 text-foreground" />
            </SheetTrigger>
            <SheetContent className="flex flex-col justify-between py-12">
                <div className="space-y-6">
                    {navigationRoutes.map((item, index) => {
                        const isActive = currentRoute?.route === item.route;

                        return (
                            <NavigationMenuItem key={`${item.route}-${index}`} className={'list-none'}>
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
                    {navigationCTARoutes.map((item, index) => {
                        const isActive = currentRoute?.route === item.route;

                        return (
                            <NavigationMenuItem key={`${item.route}-${index}`} className={'list-none'}>
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
            </SheetContent>
        </Sheet>
    );
};
