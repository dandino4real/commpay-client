import { Badge } from '@/components/ui/badge';
import { ReactNode } from 'react';

interface NavigationItem {
    route: string;
    label: string;
    children?: {
        title: string;
        items: {
            title: string;
            description?: string;
            route: string;
            render?: ReactNode;
        }[];
    }[];
}

export const navigationRoutes: NavigationItem[] = [
    {
        route: '/products',
        label: 'Products',
        children: [
            {
                title: 'Global Payment',
                items: [
                    {
                        title: 'Payment',
                        description: 'Online payments',
                        route: '/products/payment',
                        render: (
                            <div className="space-y-3 w-full">
                                <Badge className="gap-2 w-full justify-start" size="sm" variant="secondary">
                                    <span className="text-foreground">Payment Links</span> <span>•</span>
                                    <span className="text-muted-foreground">No-code payments</span>
                                </Badge>
                                <Badge className="gap-2 w-full justify-start" size="sm" variant="secondary">
                                    <span className="text-foreground">Checkout</span> <span>•</span>
                                    <span className="text-muted-foreground">Prebuilt payment form</span>
                                </Badge>
                                <Badge className="gap-2 w-full justify-start" size="sm" variant="secondary">
                                    <span className="text-foreground">Elements</span> <span>•</span>
                                    <span className="text-muted-foreground">Flexible UI components</span>
                                </Badge>
                            </div>
                        ),
                    },
                    {
                        title: 'POS Settlement',
                        description: 'In-person payments',
                        route: '/products/pos-settlement',
                    },
                    {
                        title: 'Radar',
                        description: 'Fraud prevention',
                        route: '/products/radar',
                    },
                    {
                        title: 'Authorization',
                        description: 'Acceptance optimizations',
                        route: '/products/authorization',
                    },
                ],
            },
            {
                title: 'Money Management',
                items: [
                    {
                        title: 'Connect',
                        description: 'Payments for platforms',
                        route: '/products/connect',
                    },
                    {
                        title: 'Capital for platforms',
                        description: 'Customer Financing',
                        route: '/products/capital',
                    },
                    {
                        title: 'Global payouts',
                        description: 'Send money to third parties',
                        route: '/products/payouts',
                    },
                    {
                        title: 'Issuing',
                        description: 'Physical and virtual cards',
                        route: '/products/issuing',
                    },
                ],
            },
            {
                title: 'Revenue And Finance Automation',
                items: [
                    {
                        title: 'Billing',
                        description: 'Subscriptions and usage-based',
                        route: '/products/billing',
                    },
                    {
                        title: 'Invoicing',
                        description: 'Online invoices',
                        route: '/products/invoicing',
                    },
                    {
                        title: 'Revenue Recognition',
                        description: 'Accounting automation',
                        route: '/products/revenue',
                    },
                    {
                        title: 'Tax',
                        description: 'Sales & VAT automation',
                        route: '/products/tax',
                    },
                ],
            },
        ],
    },
    {
        route: '/about',
        label: 'About Us',
    },
    {
        route: '/industries',
        label: 'Industries',
    },
    {
        route: '/resources',
        label: 'Resources',
    },
    {
        route: '/contact-us',
        label: 'Contact Us',
    },
];

export const navigationCTARoutes = [
    {
        route: '/signin',
        label: 'Sign in',
    },
    {
        route: '/signup',
        label: 'Sign up',
    },
];

export const navigationMoreRoutes = {
    title: 'More',
    items: [
        {
            title: 'Payment Methods',
            route: '/products/payment-methods',
        },
        {
            title: 'Link',
            route: '/products/link',
        },
        {
            title: 'Financial Connections',
            route: '/products/financial-connections',
        },
        {
            title: 'Identity',
            route: '/products/identity',
        },
        {
            title: 'Atlas',
            route: '/products/atlas',
        },
        {
            title: 'Climate',
            route: '/products/climate',
        },
        {
            title: 'Treasury',
            route: '/products/treasury',
        },
    ],
};
