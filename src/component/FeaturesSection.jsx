import icon1 from "../assets/feature/featureCard1.png";
import icon2 from "../assets/feature/featureCard2.png";
import icon3 from "../assets/feature/featureCard3.png";
import icon4 from "../assets/feature/featureCard4.png";
import icon5 from "../assets/feature/featureCard5.png";
import FeatureCard from "./common/Card";
import { motion } from "framer-motion";
const features = [
  {
    icon: icon1,
    title: "Real-Time Updates",
    description:
      "Stay ahead with up-to-the-minute ranking data and keyword performance.",
  },
  {
    icon: icon2,
    title: "Instant Insights",
    description:
      "Get immediate, actionable data to boost your SEO strategy without delay. SEO strategy without delay",
  },
  {
    icon: icon3,
    title: "Effortless Reporting",
    description:
      "Generate easy-to-read reports that provide clear insights into SEO progress.",
  },
  {
    icon: icon4,
    title: "Lightning Fast",
    description:
      "From entering your site address to full setup, it’s all done in just 60 seconds—no waiting around.",
  },
  {
    icon: icon5,
    title: "Intelligent Targeting",
    description:
      "Focus on analyzing your direct competitors for valuable insights and strategies.",
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
export default function FeaturesSection() {
  return (
    <section className="px-4 py-20 text-center">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="mb-4 text-4xl font-extrabold text-white md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Faster. Smarter.
          <br />
          Start in seconds
        </motion.h2>
        <motion.p
          className="mb-12 text-sm text-[#9893B8] md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Experience lightning-fast setup with intelligent features designed to
          optimize your workflow instantly.
        </motion.p>

        <div className="mb-6 grid grid-cols-1 gap-6 text-start md:grid-cols-3">
          {features.slice(0, 3).map((feature, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col justify-center gap-6 text-start md:flex-row">
          {features.slice(3).map((feature, idx) => (
            <motion.div
              key={idx + 3}
              custom={idx + 3}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <FeatureCard key={idx + 3} {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
