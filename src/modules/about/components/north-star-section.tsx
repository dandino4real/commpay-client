
import SectionLayout from "@/components/layout/section-layout"
import { Badge } from "@/components/ui/badge"
import * as motion from "motion/react-client"

export function NorthStarSection() {
  return (
    <SectionLayout>
      <div className="text-center mb-16">
        <Badge>• Our North Star</Badge>
      </div>
      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
        <motion.div
          className="bg-gradient-to-tr from-gray-100 to-white rounded-2xl p-8"
          whileHover={{
            scale: 1.03,
            y: -8,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
          }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.h3
            className="text-xl font-semibold text-gray-900 mb-4"
            whileHover={{ color: "#059669" }}
            transition={{ duration: 0.3 }}
          >
            Our Vision
          </motion.h3>
          <p className="text-gray-600 leading-relaxed">
            To be a trusted global partner for effortless and transparent financial transactions, enabling seamless
            connections across borders.
          </p>
        </motion.div>

        <motion.div
          className="bg-gradient-to-tr from-gray-100 to-white rounded-2xl p-8"
          whileHover={{
            scale: 1.03,
            y: -8,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
          }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h3
            className="text-xl font-semibold text-gray-900 mb-4"
            whileHover={{ color: "#2563eb" }}
            transition={{ duration: 0.3 }}
          >
            Our Mission
          </motion.h3>
          <p className="text-gray-600 leading-relaxed">
            To empower individuals and businesses with a seamless, secure, and cost-effective platform for managing
            global financial transactions, simplifying international payments, currency exchange, and cross-border
            money management.
          </p>
        </motion.div>

        <motion.div
          className="bg-gradient-to-tr from-gray-100 to-white rounded-2xl p-8"
          whileHover={{
            scale: 1.03,
            y: -8,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
          }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.h3
            className="text-xl font-semibold text-gray-900 mb-4"
            whileHover={{ color: "#7c3aed" }}
            transition={{ duration: 0.3 }}
          >
            Our Story
          </motion.h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Founded in 2023 by a team of fintech innovators, CompPay was created to address the complexities and high
            costs associated with international financial transactions.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Recognizing the need for a unified platform, we set out to build a solution that simplifies cross-border
            payments and currency management for both individuals and businesses.
          </p>
        </motion.div>
      </div>
    </SectionLayout>

  )
}
