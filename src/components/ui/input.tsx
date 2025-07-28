import * as React from 'react';

import { cn } from '../../lib/utils';

const Input = React.forwardRef<
    HTMLInputElement,
    React.ComponentProps<'input'> & { iconStart?: React.ReactNode; iconEnd?: React.ReactNode }
>(({ className, type, iconStart, iconEnd, ...props }, ref) => {
    return (
        <div className="flex gap-4 w-full relative">
            <input
                type={type}
                className={cn(
                    `flex h-14 box-border w-full rounded-md bg-background ${iconStart ? 'pl-9' : 'pl-3'} ${
                        iconEnd ? 'pr-9' : 'pr-3'
                    } py-1 text-base text-primary shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm`,
                    className
                )}
                ref={ref}
                {...props}
            />
            <span className="absolute left-2 inset-y-0 top-2">{iconStart}</span>
            <span className="absolute right-2 inset-y-0 top-2">{iconEnd}</span>
        </div>
    );
});
Input.displayName = 'Input';

export { Input };
