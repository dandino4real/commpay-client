
import Image from "next/image"
import * as motion from "motion/react-client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

interface FeatureCardProps {
  title: string
  description: string
  imageUrl: string
}

const features: FeatureCardProps[] = [
  {
    title: "Unified Platform",
    description: "Manage all your global financial transactions in one place.",
    imageUrl: "/assets/images/unified-image.png",
  },
  {
    title: "Competitive Rates",
    description: "Benefit from real-time, market driven exchange rates with minimal fees.",
    imageUrl: "/assets/images/statistics-image.png",
  },
  {
    title: "Robust Security",
    description: "Enjoy peace of mind with our enterprise-grade security measures.",
    imageUrl: "/assets/images/security-illustration.png",
  },
  {
    title: "Global Reach",
    description: "Access to a network spanning multiple countries and currencies.",
    imageUrl: "/assets/images/globe.png",
  },
  {
    title: "User-Friendly Interface",
    description: "Experience a clean, intuitive platform designed for ease use.",
    imageUrl: "/assets/images/competitive-image.png",
  },
]

function FeatureCard({ title, description, imageUrl }: FeatureCardProps) {
  return (
    <motion.div
      className="bg-gray-100 rounded-2xl p-5 shadow-sm h-full w-full"
      whileHover={{
        scale: 1.01,
        y: -8,
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h3
        className="text-2xl font-semibold text-gray-900 mb-3"
        whileHover={{ color: "#059669" }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.h3>
      <p className="text-base text-gray-600 leading-relaxed mb-8">{description}</p>
      <div className="flex justify-center">
        <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.3 }}>
          <Image src={imageUrl} alt={title} width={324} height={100} />
        </motion.div>
      </div>
    </motion.div>
  )
}

export function WhatSetsUsApartSection() {
  return (
    <div className="relative overflow-hidden">
      <div className="py-20 lg:pt-28 lg:pb:5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-emerald-500 text-sm font-medium bg-emerald-50 px-4 py-2 rounded-full">
              <strong>•</strong> What Sets Us Apart
            </span>
          </div>

          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full max-w-7xl mx-auto"
          >
            <CarouselContent className="-mr-8">
              {features.map((feature, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/4"
                >
                  <FeatureCard {...feature} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-4">
              <CarouselPrevious className="bg-white shadow-md" />
              <CarouselNext className="bg-white shadow-md" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  )
}
