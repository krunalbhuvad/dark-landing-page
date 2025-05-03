import { motion } from "framer-motion";
import SmoothIntegrationImg from "../assets/smoothIntegration/SmoothIntegration.png";
import tick from "../assets/common/tick.svg";

export default function SmoothIntegration() {
  return (
    <motion.section
      className="flex flex-col items-center justify-center gap-10 px-6 py-12 text-white md:flex-row md:px-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="md:max-w-1/2 space-y-6"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
      >
        <h2 className="text-4xl font-bold leading-tight md:text-5xl">
          Smooth Integration for <br className="hidden md:block" /> Effortless
          Workflow
        </h2>
        <p className="max-w-md text-lg text-[#9893B8]">
          Easily integrate Wope with your existing tools and platforms for a
          seamless experience.
        </p>
        <ul className="space-y-4">
          <motion.li
            className="flex items-center transition-colors hover:text-purple-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <img src={tick} alt="tick" className="mr-2" />
            Instant Setup
          </motion.li>
          <motion.li
            className="flex items-center transition-colors hover:text-purple-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <img src={tick} alt="tick" className="mr-2" />
            Compatible with Major Platforms
          </motion.li>
          <motion.li
            className="flex items-center transition-colors hover:text-purple-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <img src={tick} alt="tick" className="mr-2" />
            Real-Time Data Sync
          </motion.li>
        </ul>
      </motion.div>

      <motion.div
        className="md:max-w-1/2 mt-10 flex justify-center md:mt-0"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
      >
        <img
          src={SmoothIntegrationImg}
          alt="Integration Illustration"
          className="h-auto max-w-full transform rounded-2xl shadow-lg transition-transform hover:scale-105"
        />
      </motion.div>
    </motion.section>
  );
}
