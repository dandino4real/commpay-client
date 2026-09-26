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

const whiteBGPages = ['/about'];

const Navigation: React.FC = () => {
    const currentRoute = useCurrentRoute();
    const [scrolled, setScrolled] = React.useState(false);
    const { isMobile } = useMediaQuery();

    const isWhiteBG = whiteBGPages.includes(currentRoute?.route as string);

    React.useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className={cn(
            'fixed top-0 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-500 pointer-events-none',
            scrolled ? 'pt-2 md:pt-4' : 'pt-4 md:pt-6'
        )}>
            <NavigationMenu
                className={cn(
                    'w-full max-w-6xl justify-between rounded-full border transition-all duration-500 pointer-events-auto',
                    scrolled 
                        ? (isWhiteBG ? 'bg-white/80 backdrop-blur-xl border-black/10 py-3 px-6 shadow-xl' : 'bg-[#181a29]/80 backdrop-blur-xl border-white/10 py-3 px-6 shadow-xl')
                        : 'bg-transparent border-transparent py-4 px-4 md:px-8 shadow-none'
                )}
            >
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
                                    <NavigationMenuContent className="rounded-xl overflow-hidden shadow-2xl border-none">
                                        <ul className="grid grid-cols-3 w-[800px] lg:w-[950px] bg-white max-h-[75vh] overflow-y-auto">
                                            <li className="col-span-2 p-5 md:p-6">
                                                <div className="flex flex-col gap-6 w-full">
                                                    {item.children
                                                        .filter(item => item.title !== 'More')
                                                        .map(section => (
                                                            <div key={section.title} className="space-y-4">
                                                                <h4 className="font-bold text-sm tracking-wide text-muted-foreground uppercase ml-3">
                                                                    {section.title}
                                                                </h4>
                                                                <ul className="grid grid-cols-2 gap-2">
                                                                    {section.items.map(subItem => (
                                                                        <ListItem
                                                                            key={subItem.title}
                                                                            title={subItem.title}
                                                                            href={subItem.route}
                                                                            render={subItem?.render}
                                                                            className="hover:bg-zinc-50 group"
                                                                        >
                                                                            {subItem.description}
                                                                        </ListItem>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        ))}
                                                </div>
                                            </li>
                                            <li className="col-span-1 bg-zinc-50/80 p-5 md:p-6 relative border-l">
                                                <div className="w-full">
                                                    <h4 className="mb-6 font-bold text-sm tracking-wide text-muted-foreground uppercase ml-3">
                                                        {navigationMoreRoutes.title}
                                                    </h4>
                                                    <ul className="gap-2 flex flex-col">
                                                        {navigationMoreRoutes.items.map(section => (
                                                            <div key={section.title}>
                                                                <ListItem
                                                                    title=""
                                                                    key={section.title}
                                                                    href={section.route}
                                                                    className="hover:bg-zinc-100/50 py-2"
                                                                >
                                                                    <span className="text-zinc-600 group-hover:text-zinc-900 font-medium transition-colors">
                                                                        {section.title}
                                                                    </span>
                                                                </ListItem>
                                                            </div>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <LogoMuted className="absolute bottom-8 right-8 opacity-50" />
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
                        const isSignUp = item.route === '/signup';

                        return (
                            <NavigationMenuItem
                                key={`${item.route}-${index}`}
                                className="ml-2"
                            >
                                {isSignUp ? (
                                    <Link href={item.route}>
                                        <Button size="sm" variant="default" className="rounded-full shadow-lg h-9 px-6 text-sm">
                                            {item.label}
                                        </Button>
                                    </Link>
                                ) : (
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link
                                            className={`${isWhiteBG ? 'text-foreground hover:text-accent' : 'text-white hover:text-accent'}`}
                                            href={item.route}
                                        >
                                            {item.label}
                                        </Link>
                                    </NavigationMenuLink>
                                )}
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
        </div>
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
