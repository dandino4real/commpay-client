"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

export function HeroSection() {
  return (
    <div className=" pb-16 pt:5 lg:pb-10 lg:pt-5 relative overflow-hidden">
  
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-20 py-16 lg:py-32 relative bg-[url('/assets/images/background-hero-bg.png')] bg-cover bg-center text-white rounded-3xl">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div  className="space-y-8 col-span-2">
            <h1 className="text-4xl lg:text-5xl font-semibold leading-tight">
              Powering payments for Africa&apos;s boldest businesses.
            </h1>
            <p className="text-base text-emerald-100 leading-relaxed">
              From startups to enterprises, we fuel growth with seamless, secure, and scalable cross-border payment
              solutions.
            </p>
         
            <Button className="bg-emerald-400 hover:bg-emerald-300  font-semibold shadow-2xl group rounded-ful text-white" size="lg">
                <motion.span className="flex items-center" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  Get Started
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </motion.div>
                </motion.span>
              </Button>
          </div>

          <div  className="absolute bottom-0 right-[-4] flex justify-center lg:justify-end">
              <Image
                src="/assets/images/hero-phone.png"
                alt="CompPay mobile app"
                width={447}
                height={480}
              />
          </div>
        </div>
      </div>
    </div>
  )
}
