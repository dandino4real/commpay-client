import { Button } from '@/components/ui/button';
import SectionLayout from '@/components/layout/section-layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import HeroBgMesh from '@/components/icons/hero-bg-mesh';
import FaqsIllustration2 from '@/components/icons/faqs-illustration-2';
import FaqsIllustration1 from '@/components/icons/faqs-illustration-1';

const faqData = [
    {
        question: 'How does CompPay work for international payments?',
        answer: 'CompPay lets you send and receive money across borders using secure, fast, and innovative digital transfers all from one simple platform.',
    },
    {
        question: 'What currencies and countries does CompPay support?',
        answer: '',
    },
    {
        question: 'Are there any hidden fees or charges?',
        answer: '',
    },
    {
        question: 'Is my money and data safe with CompPay?',
        answer: '',
    },
    {
        question: 'Can individuals and businesses both use CompPay?',
        answer: '',
    },
];

interface FaqSectionProps {
    title?: string;
    subtitle?: string;
}

export function FaqSection({ title = 'FAQs', subtitle = 'Frequently Asked Question' }: FaqSectionProps) {
    return (
        <SectionLayout className="bg-slate-800 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0">
                <div className="absolute -left-32 top-0 w-64 h-64 bg-gradient-to-r from-green-500/20 to-transparent rounded-full blur-3xl" />
                <div className="absolute -right-32 bottom-0 w-64 h-64 bg-gradient-to-l from-green-500/20 to-transparent rounded-full blur-3xl" />
            </div>

            <HeroBgMesh className="absolute top-0 left-0" />
            <FaqsIllustration1 className="absolute top-0 h-full left-0" />
            <FaqsIllustration2 className="absolute top-0 h-full right-0" />

            <div className="max-w-xl mx-auto relative">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">{title}</h2>
                    <p className="text-xl text-secondary">{subtitle}</p>
                </div>

                <Accordion type="single" collapsible>
                    {faqData.map((faq, index) => (
                        <AccordionItem value={faq.question} key={index}>
                            <AccordionTrigger className="text-secondary">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-gray-400">{faq.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                <div className="text-center mt-8">
                    <Button size="sm" variant="link" className="text-secondary">
                        Load more
                    </Button>
                </div>
            </div>
        </SectionLayout>
    );
}
