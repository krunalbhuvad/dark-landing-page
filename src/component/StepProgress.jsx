import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import icon from "../assets/stepProcess/stepProcess.png";
import Button from "./common/Button";

const steps = [
  {
    id: 1,
    title: "Sign Up",
  },
  {
    id: 2,
    title: "Attach Site",
  },
  {
    id: 3,
    title: "Run AI Analytics",
  },
  {
    id: 4,
    title: "Get Smart Insights",
  },
];

export default function StepProgress() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepClick = (index) => {
    setCurrentStep(index);
  };

  return (
    <div className="flex flex-col items-center p-8 text-white">
      <div className="flex flex-col items-center justify-center lg:flex-row">
        <div className="relative h-[300px] w-[300px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={steps[currentStep].id}
              src={icon}
              alt="step image"
              className="h-full w-full rounded-2xl object-cover"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </div>

        <div className="mt-6 max-w-md text-start lg:ml-12 lg:mt-0">
          <motion.h2
            key={steps[currentStep].id}
            className="mb-2 text-3xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            Create your account in minutes
          </motion.h2>

          <motion.p
            key={steps[currentStep].description}
            className="mb-4 text-[#9893B8]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            Easily sign up and get started right away with a simple,
            user-friendly process.
          </motion.p>

          <Button text={"Let's Start"} />
        </div>
      </div>

      <div className="relative mt-20 h-px w-full max-w-4xl bg-white">
        <motion.div
          className="absolute left-0 top-0 h-full bg-[linear-gradient(to_right,_#ec4899_0%,_#8b5cf6_80%,_#ffffff_100%)]"
          style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="flex w-full max-w-4xl justify-between border-t border-gray-700 pt-4">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`flex-1 cursor-pointer transition-colors duration-300 ${
              index === currentStep ? "font-bold text-white" : "text-gray-500"
            }`}
            onClick={() => handleStepClick(index)}
          >
            <p className="text-sm">{`0${step.id}.`}</p>
            <p>{step.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
