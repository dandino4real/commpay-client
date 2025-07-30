"use client"

import { HeroSection } from "./components/hero-section"
import { SupportGrid } from "./components/support-grid"
import { FaqSection } from "./components/faq-section"


export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white">
      
      <HeroSection
        title="We're here to assist you"
        subtitle="Have questions or need support? Our team is here to help you every step of the way"
        
      />
      <SupportGrid />
      <FaqSection title="FAQs" subtitle="Frequently Asked Question" />
      
    </div>
  )
}
