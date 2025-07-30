

import React from "react";
import * as motion from "motion/react-client";
import SectionLayout from "@/components/layout/section-layout";
import AmazonPayIcon from "@/components/icons/amazonpay";
import ApplePayIcon from "@/components/icons/applepay";
import MasterCardIcon from "@/components/icons/mastercard";
import SkrillIcon from "@/components/icons/skrill";
import WesternUniondIcon from "@/components/icons/westernunion";
import DiscoverIcon from "@/components/icons/discover";
import UnionPayIcon from "@/components/icons/unionpay";

const icons = [
  { component: <ApplePayIcon />, name: "ApplePay" },
  { component: <WesternUniondIcon />, name: "WesternUnion" },
  { component: <MasterCardIcon />, name: "MasterCard" },
  { component: <SkrillIcon />, name: "Skrill" },
  { component: <AmazonPayIcon />, name: "AmazonPay" },
  { component: <DiscoverIcon />, name: "Discover" },
  { component: <UnionPayIcon />, name: "UnionPay" },
];


export function PaymentPartnersSection() {
  return (
    <SectionLayout
      className="pb-12 md:pb-24 px-8 sm:px-12 md:px-36"
      containerClassName="flex gap-4 md:gap-10 items-center justify-center flex-wrap"
    >

      <motion.div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 items-center">
        {icons.map((icon, index) => (
          <motion.div
            key={icon.name}
            className="flex justify-center items-center p-4 hover:scale-110 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {icon.component}
          </motion.div>
        ))}
      </motion.div>
    </SectionLayout>
  );
};



