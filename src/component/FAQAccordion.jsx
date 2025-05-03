import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";

const faqs = [
  {
    question: "What does your platform do?",
    answer:
      "Our platform helps optimize your website for search engines using AI-driven insights.",
  },
  {
    question: "How does it help improve my search traffic?",
    answer:
      "It analyzes keyword performance and content structure to drive more organic traffic.",
  },
  {
    question: "Is it like having an SEO expert on my team?",
    answer:
      "Yes, our tools simulate expert-level SEO analysis without needing in-house specialists.",
  },
  {
    question: "Do I need technical SEO knowledge to use the platform?",
    answer:
      "Nope. It's designed for beginners and pros alike — no coding skills required.",
  },
  {
    question: "How is data analyzed by the platform?",
    answer:
      "We use machine learning and large-scale web data to identify what works best.",
  },
  {
    question: "Will the platform help me identify SEO trends?",
    answer:
      "Absolutely. You’ll get real-time trend data and insights tailored to your industry.",
  },
];

export default function FAQAccordion() {
  return (
    <div className="flex flex-col items-center px-4 py-16 text-white">
      <div className="mb-12 max-w-2xl text-center">
        <h1 className="mb-2 text-4xl font-bold leading-tight">
          We’ve Got the Answers
          <br />
          You’re Looking For
        </h1>
        <p className="mt-2 text-sm text-[#9893B8]">
          Find answers to common queries about our product, features, and
          services. If you need more information, we're here to help!
        </p>
      </div>

      <div className="w-full max-w-2xl space-y-4">
        {faqs.map((faq, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <div className="rounded-xl border border-[#9893B8] bg-[radial-gradient(circle_at_top_left,_#241C36_0%,_#0C0512_40%,_#0b0712_100%)] transition-all duration-300">
                <Disclosure.Button className="flex w-full justify-between px-6 py-4 text-left text-sm font-medium text-white focus:outline-none">
                  <span>{faq.question}</span>
                  {open ? (
                    <MinusIcon
                      className={`h-5 w-5 text-[#9893B8] transition-transform duration-300`}
                    />
                  ) : (
                    <PlusIcon
                      className={`h-5 w-5 text-[#9893B8] transition-transform duration-300`}
                    />
                  )}
                </Disclosure.Button>
                <Disclosure.Panel className="px-6 pb-4 text-sm text-[#9893B8] transition-all duration-300">
                  {faq.answer}
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
