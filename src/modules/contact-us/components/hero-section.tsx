import SectionLayout from '@/components/layout/section-layout';
import HeroBgMesh from '@/components/icons/hero-bg-mesh';

interface HeroSectionProps {
    title?: string;
    subtitle?: string;
}

export function HeroSection({
    title = "We're here to assist you",
    subtitle = 'Have questions or need support? Our team is here to help you every step of the way',
}: HeroSectionProps) {
    return (
        <SectionLayout
            className="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-sidebar-background overflow-hidden text-center"
            containerClassName="relative z-10 flex flex-col items-center"
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-accent/10 rounded-full blur-[150px] -z-10 pointer-events-none" />
            <HeroBgMesh className="absolute top-0 left-0 opacity-40 mix-blend-screen pointer-events-none" />
            
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-zinc-300 mb-8 backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-accent mr-2"></span>
                Contact Support
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl">
                {title.split(' ').slice(0, -1).join(' ')} <span className="text-accent italic">{title.split(' ').slice(-1)}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                {subtitle}
            </p>
        </SectionLayout>
    );
}
