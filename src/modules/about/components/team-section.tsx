

import * as motion from "motion/react-client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ArrowRight } from "lucide-react"

export function TeamSection() {
  return (
    <div className="py-16 lg:py-24 bg-[url('/assets/images/core-values-bg2.png')] bg-cover bg-center text-white relative overflow-hidden">
      {/* Animated background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
          animate={{
            scale: [1, 0.8, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-500 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -60, -20],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-8">
            <span
              className="text-sm font-medium"
            >
              • Our Team
            </span>
            <div >
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div

            className="relative"
         initial={{ scale: 1 }}
          whileHover={{
            scale: 1.03,
            transition: { duration: 1, ease: "easeInOut" },
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
            >
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-blue-500/20 rounded-2xl blur-xl"
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{
                rotateY: 5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
              }}
            >
              <Image
                src="/assets/images/team-section-image.png"
                alt="Team collaboration"
                width={600}
                height={400}
                className="w-full h-auto"
              />

              {/* Overlay gradient on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>

          <motion.div className="space-y-6">
            <motion.p
              className="text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              CompPay is led by a diverse team of professionals with expertise in fintech, software development,
              customer service, and compliance. Our leadership team brings a wealth of experience from leading global
              financial institutions and tech companies.
            </motion.p>

            <motion.p
              className="text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              CompPay is led by a diverse team of professionals with expertise in fintech, software development,
              customer service, and compliance. Our leadership team brings a wealth of experience from leading global
              financial institutions and tech companies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <Button className="bg-slate-700 hover:bg-slate-600 text-white border-slate-600 group rounded-full" size="lg">
                <motion.span className="flex items-center" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  Learn More
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
