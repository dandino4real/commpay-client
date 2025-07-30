
import * as motion from "motion/react-client"
import Image from "next/image"

const paymentPartners = [
  {
    name: "Apple Pay",
    logo: "/assets/images/ApplePay.png",
    width: 80,
    height: 32,
  },
  {
    name: "Western Union",
    logo: "/assets/images/westernunion.png",
    width: 120,
    height: 32,
  },
  {
    name: "Mastercard",
    logo: "/assets/images/Mastercard.png",
    width: 60,
    height: 40,
  },
  {
    name: "Skrill",
    logo: "/assets/images/Skrill.png",
    width: 80,
    height: 32,
  },
  {
    name: "Amazon Pay",
    logo: "/assets/images/AmazonPay.png",
    width: 100,
    height: 32,
  },
  {
    name: "Discover",
    logo: "/assets/images/Discover.png",
    width: 100,
    height: 32,
  },
  {
    name: "UnionPay",
    logo: "/assets/images/Unionpay.png",
    width: 100,
    height: 32,
  },
]

export function PaymentPartnersSection() {
  return (
    <div className="py-4 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div  className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 items-center">
          {paymentPartners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className="flex justify-center items-center p-4 hover:scale-110 transition-transform duration-300"
              whileHover={{ scale: 1.1 }}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={`${partner.name} logo`}
                width={partner.width}
                height={partner.height}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
