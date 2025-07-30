
import type React from "react"

import { WhyChooseSection } from "./components/why-choose-section"
import { PaymentPartnersSection } from "./components/payment-partner-section"
import { NorthStarSection } from "./components/north-star-section"
import { CoreValuesSection } from "./components/core-values-section"
import { TeamSection } from "./components/team-section"
import { WhatSetsUsApartSection } from "./components/what-sets-up-apart-section"
import { HeroSection } from "./components/hero-section"
// import Partners from "../home/components/partners"



export default function About() {
    return (
        <div className="min-h-screen">
            <WhyChooseSection />
            <PaymentPartnersSection />
            {/* <Partners /> */}
            <NorthStarSection />
            <CoreValuesSection />
            <TeamSection />
            <WhatSetsUsApartSection />
            <HeroSection />
        </div>
    )
}
