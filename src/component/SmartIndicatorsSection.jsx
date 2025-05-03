import { motion } from "framer-motion";
import icon1 from "../assets/smartIndicator/smartIndicator1.png";
import icon2 from "../assets/smartIndicator/smartIndicator2.png";
import icon3 from "../assets/smartIndicator/smartIndicator3.png";
import Button from "./common/Button";
import FeatureCard from "./common/Card";

const features = [
  {
    icon: icon1,
    title: "Cannibalization Detection",
    description:
      "Uncover and evaluate new growth opportunities to enhance your search strategy.",
  },
  {
    icon: icon2,
    title: "Market Intelligence Powered by AI",
    description:
      "Leverage artificial intelligence to gain deeper market understanding and competitive insights.",
  },
  {
    icon: icon3,
    title: "Seasonal Trends Tracking",
    description:
      "Monitor and adapt to seasonal fluctuations for optimized performance year-round.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function SmartIndicatorsSection() {
  return (
    <section className="px-4 py-20 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-12 lg:flex-row">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-4xl font-extrabold md:text-5xl">
            Spot Issues Faster via <br />
            Smart Indicators
          </h2>
          <p className="mb-6 max-w-sm text-[#9893B8]">
            Quickly identify and address problems with advanced AI-driven
            insights.
          </p>
          <Button text={"Try It Now"} />
        </motion.div>

        <motion.div
          className="flex flex-1 flex-col gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.6, delay: 0.3 } },
          }}
        >
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <FeatureCard {...item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
