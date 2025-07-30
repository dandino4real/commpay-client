import SectionLayout from "@/components/layout/section-layout"
import { Badge } from "@/components/ui/badge"

interface HeroSectionProps {
  title?: string
  subtitle?: string
  BadgeText?: string
}

export function HeroSection({
  title = "We're here to assist you",
  subtitle = "Have questions or need support? Our team is here to help you every step of the way",
  
}: HeroSectionProps) {
  return (
    <SectionLayout className="pb-16 pt-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Badge className="text-green-600 border-green-600 hover:bg-green-50 bg-transparent">
        . Contact Us
          </Badge>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{title}</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </SectionLayout>
  )
}
