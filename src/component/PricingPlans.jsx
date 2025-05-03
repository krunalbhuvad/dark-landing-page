import { useState } from "react";
import Button from "./common/Button";
import CardContainer from "./common/CardContainer";

import tick from "../assets/common/tick.svg";
import grayTick from "../assets/common/false.svg";

const plans = [
  {
    name: "Basic",
    tag: "Individual",
    description: "Essential features for startups and small teams.",
    features: [
      "30+ Features",
      "Priority Support",
      "4 Team Members",
      "Premium Features",
      "Data Insights",
    ],
    missingFeatures: ["Gen AI Report"],
    price: "$39.99",
    users: "",
  },
  {
    name: "Standard",
    tag: "2 to 10 Users",
    description: "Advanced tools for scaling and growing businesses.",
    features: [
      "Access 80+ Enterprise Features",
      "Priority Support",
      "10 Team Members",
      "Premium Features",
      "Unlimited Data Insights",
      "Gen AI Report",
    ],
    price: "$69.99",
  },
  {
    name: "Enterprise",
    tag: "10+ Users",
    description:
      "Full customization and premium support for large organizations.",
    features: [
      "Access All Features",
      "Priority Support",
      "Unlimited Members",
      "Premium Features",
      "Unlimited Data Insights",
      "Custom Gen AI Report",
    ],
    price: "$119.99",
  },
];

export default function PricingPlans() {
  const [billing, setBilling] = useState("Monthly");

  return (
    <div className="px-6 py-20 font-sans text-white">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h1 className="mb-4 text-5xl font-extrabold leading-tight">
          Innovative Pricing for
          <br />
          Modern Needs
        </h1>
        <p className="text-sm text-[#9893B8]">
          Choose from our range of plans designed to help you maximize your
          search performance, from basic insights to advanced analytics and
          customization.
        </p>
        <div className="mx-auto mt-6 flex w-fit items-center justify-center gap-2 rounded-full bg-[#0D0A17] p-1">
          <button
            onClick={() => setBilling("Monthly")}
            className={`rounded-full p-[2px] text-sm transition ${
              billing === "Monthly"
                ? "bg-[linear-gradient(131deg,rgba(0,0,0,0.4)_0%,rgba(59,59,59,1)_0%,rgba(228,150,255,1)_63%,rgba(104,30,224,1)_100%)] text-white"
                : "text-[#9893B8]"
            }`}
          >
            <div className="rounded-full bg-[#0D0A17] px-6 py-2">Monthly</div>
          </button>
          <button
            onClick={() => setBilling("Yearly")}
            className={`rounded-full p-[2px] text-sm transition ${
              billing === "Yearly"
                ? "bg-[linear-gradient(131deg,rgba(0,0,0,0.4)_0%,rgba(59,59,59,1)_0%,rgba(228,150,255,1)_63%,rgba(104,30,224,1)_100%)] text-white"
                : "text-[#9893B8]"
            }`}
          >
            <div className="rounded-full bg-[#0D0A17] px-6 py-2">Yearly</div>
          </button>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-8">
        {plans.map((plan, idx) => (
          <CardContainer key={idx}>
            <div className="mb-4 flex items-center gap-2">
              <h2 className="text-3xl font-semibold text-white">{plan.name}</h2>
              <span className="rounded-full border border-[#9893B8] p-1 px-2 text-xs font-thin tracking-wider text-[#9893B8]">
                {plan.tag}
              </span>
            </div>
            <p className="mb-6 min-h-[48px] text-sm text-[#9893B8]">
              {plan.description}
            </p>
            <div
              className="relative h-px w-full flex-none overflow-hidden"
              style={{
                background:
                  "linear-gradient(90deg, rgb(84, 84, 84) 0%, rgb(26, 26, 59) 0%, rgb(166, 139, 238) 49%, rgb(26, 26, 59) 100%)",
                opacity: 1,
              }}
            ></div>

            <ul className="my-12 space-y-3">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center text-sm">
                  <img src={tick} alt="tick" className="mr-2" />
                  {feature}
                </li>
              ))}
              {plan.missingFeatures &&
                plan.missingFeatures.map((feature, i) => (
                  <li
                    key={`missing-${i}`}
                    className="flex items-center text-sm text-gray-600 line-through"
                  >
                    <img src={grayTick} alt="tick" className="mr-2" />
                    {feature}
                  </li>
                ))}
            </ul>
            <div className="mb-12 text-3xl font-bold text-white">
              {plan.price}{" "}
              <span className="text-sm text-[#9893B8]">/per month</span>
            </div>
            <Button customClass={"w-full"} text={"Get Started"} />
          </CardContainer>
        ))}
      </div>
    </div>
  );
}
