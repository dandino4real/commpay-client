'use client';

import { MessageCircle, MapPin, MessageSquare, Phone, FileText, Briefcase } from 'lucide-react';
import { SupportCard } from './support-card';
import { useState } from 'react';
import { EnquiryModal } from './enquiry-modal';
import SectionLayout from '@/components/layout/section-layout';

const supportOptions = [
    {
        icon: MessageCircle,
        title: 'Chat to Sales',
        description: 'Let us know how we can help. A member of our team will respond within 24 hours.',
        linkText: 'info@comppay.io',
        linkHref: 'mailto:info@comppay.io',
        variant: 'default' as const,
    },
    {
        icon: MapPin,
        title: 'Locate Us',
        description: 'You can reach us at our headquarters or schedule an appointment with a regional representative.',
        linkText: 'View on Google Maps',
        linkHref: '#',
        variant: 'default' as const,
    },
    {
        icon: MessageSquare,
        title: 'Live Chat',
        description: 'Available 24/7 via the chat icon at the bottom right of your screen.',
        linkText: 'info@comppay.io',
        linkHref: 'mailto:info@comppay.io',
        variant: 'default' as const,
    },
    {
        icon: Phone,
        title: 'Phone Support',
        description: "If you're facing an urgent security issue, call us immediately.",
        linkText: '+447-377-706-465',
        linkHref: 'tel:+447377706465',
        variant: 'default' as const,
    },
    {
        icon: FileText,
        title: 'Enquiry Form',
        description:
            'You can reach us at our Lagos headquarters or schedule an appointment with a regional representative.',
        linkText: 'Submit a form',
        linkHref: '#',
        variant: 'green' as const,
    },
    {
        icon: Briefcase,
        title: 'Career',
        description:
            "We're always looking for passionate, tech-savvy, and purpose-driven individuals to join our growing team.",
        linkText: 'Careers available',
        linkHref: '#',
        variant: 'dark' as const,
    },
];

export function SupportGrid() {
    const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

    return (
        <>
            <SectionLayout className="pt-16 pb-36 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {supportOptions.map((option, index) => (
                        <SupportCard
                            key={index}
                            icon={option.icon}
                            title={option.title}
                            description={option.description}
                            linkText={option.linkText}
                            linkHref={option.linkHref}
                            variant={option.variant}
                            onLinkClick={
                                option.title === 'Enquiry Form' ? () => setIsEnquiryModalOpen(true) : undefined
                            }
                        />
                    ))}
                </div>
            </SectionLayout>

            <EnquiryModal open={isEnquiryModalOpen} onOpenChange={setIsEnquiryModalOpen} />
        </>
    );
}
