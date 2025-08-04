import { cn } from '../../lib/utils';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SectionLayoutProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    containerClassName?: string;
}

const SectionLayout: React.FC<SectionLayoutProps> = ({ className, children, containerClassName, ...props }) => {
    return (
        <section {...props} className={cn('w-full px-5 xl:px-32', className)}>
            <div className={cn('max-w-full md:max-w-screen-md lg:max-w-screen-xl mx-auto', containerClassName)}>
                {children}
            </div>
        </section>
    );
};

export default SectionLayout;
