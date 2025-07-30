import { Button } from "@/components/ui/button"
import { FaqItem } from "./faq-item"

const faqData = [
  {
    question: "How does CompPay work for international payments?",
    answer:
      "CompPay lets you send and receive money across borders using secure, fast, and innovative digital transfers all from one simple platform.",
  },
  {
    question: "What currencies and countries does CompPay support?",
    answer: "",
  },
  {
    question: "Are there any hidden fees or charges?",
    answer: "",
  },
  {
    question: "Is my money and data safe with CompPay?",
    answer: "",
  },
  {
    question: "Can individuals and businesses both use CompPay?",
    answer: "",
  },
]

interface FaqSectionProps {
  title?: string
  subtitle?: string
}

export function FaqSection({ title = "FAQs", subtitle = "Frequently Asked Question" }: FaqSectionProps) {
  return (
    <section className="bg-slate-800 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute -left-32 top-0 w-64 h-64 bg-gradient-to-r from-green-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -right-32 bottom-0 w-64 h-64 bg-gradient-to-l from-green-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-xl text-gray-300">{subtitle}</p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} isExpanded={index === 0} />
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" className="text-white border-gray-600 hover:bg-gray-700 hover:text-white bg-transparent">
            Load more
          </Button>
        </div>
      </div>
    </section>
  )
}
