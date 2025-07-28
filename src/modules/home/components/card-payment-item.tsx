import React from 'react';
import { Card, CardContent, CardDescription, CardFooter } from '@components/ui/card';
import { cn } from '@lib/utils';

interface ICardPaymentItem {
    children: React.ReactNode;
    description: React.ReactNode;
    footerClassName?: string;
    descriptionClassName?: string;
}

const CardPaymentItem: React.FC<ICardPaymentItem> = ({
    children,
    description,
    footerClassName,
    descriptionClassName,
}) => {
    return (
        <Card className="p-0 w-full">
            <CardContent className="p-0 rounded-t-xl">{children}</CardContent>
            <CardFooter className={cn('flex justify-between rounded-b-xl pt-6 items-center', footerClassName)}>
                <CardDescription
                    className={cn('text-center text-lg text-primary font-semibold w-full', descriptionClassName)}
                >
                    {description}
                </CardDescription>
            </CardFooter>
        </Card>
    );
};

export default CardPaymentItem;
