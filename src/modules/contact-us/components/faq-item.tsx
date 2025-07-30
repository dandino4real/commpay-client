"use client"

import SectionLayout from "@/components/layout/section-layout"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

interface FaqItemProps {
  question: string
  answer?: string
  isExpanded?: boolean
}

export function FaqItem({ question, answer, isExpanded = false }: FaqItemProps) {
  const [expanded, setExpanded] = useState(isExpanded)

  return (
    <SectionLayout className="border-b border-gray-700 pb-4">
      <Button
        variant="ghost"
        className="flex justify-between items-center w-full text-left p-4 h-auto hover:bg-transparent"
        onClick={() => setExpanded(!expanded)}
      >
        <span className="text-white font-medium">{question}</span>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${expanded ? "rotate-180" : ""}`} />
      </Button>
      {expanded && answer && <p className="text-gray-400 text-sm mt-2">{answer}</p>}
    </SectionLayout>
  )
}
