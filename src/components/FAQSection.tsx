"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const FAQS = [
  {
    question: "How does the Global Mesh Routing work?",
    answer:
      "Spaceion automatically routes traffic to the nearest edge node using Anycast IP. Our control plane monitors latency in real-time and reroutes traffic around congestion or outages instantly, ensuring <30ms latency worldwide.",
  },
  {
    question: "Do you support cold start mitigation?",
    answer:
      "Yes. We use a proprietary 'warm-pool' technology that keeps a baseline of micro-VMs ready to accept traffic. This eliminates cold starts for 99.5% of requests, even after periods of inactivity.",
  },
  {
    question: "Can I deploy stateful applications?",
    answer:
      "Spaceion is optimized for stateless edge functions, but we offer a globally replicated Key-Value store and persistent volume attachments for stateful workloads. We recommend separating compute and state for maximum edge performance.",
  },
  {
    question: "How is pricing calculated for the Enterprise plan?",
    answer:
      "Enterprise plans are custom-tailored based on committed usage, support SLAs, and specific compliance requirements (HIPAA, SOC2). Contact our sales team for a consultation and volume discounts.",
  },
  {
    question: "What compliance standards do you meet?",
    answer: "We are SOC2 Type II compliant, GDPR ready, and ISO 27001 certified. All data is encrypted at rest and in transit.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full py-24 bg-neutral-50 border-b border-black">
      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Sticky Header */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
          <Badge variant="outline" className="mb-6 bg-white">
            Support & Docs
          </Badge>
          <h2 className="text-4xl font-display font-bold tracking-tighter uppercase mb-6 leading-[0.9]">
            Frequently
            <br />
            Asked
            <br />
            Questions.
          </h2>
          <p className="text-neutral-500 max-w-md">
            Everything you need to know about the Spaceion platform and billing. Can't find the answer? Chat with our team.
          </p>
        </div>

        {/* Right: Accordion */}
        <div className="lg:col-span-8">
          <div className="border-t border-black">
            {FAQS.map((faq, index) => (
              <div key={index} className="border-b border-black bg-white group">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between py-8 px-6 text-left hover:bg-neutral-50 transition-colors"
                >
                  <span className="text-xl font-display font-bold tracking-tight pr-8">
                    <span className="font-mono text-emerald-600 mr-4 text-sm opacity-50 group-hover:opacity-100 transition-opacity">
                      {String(index + 1).padStart(2, "0")}.
                    </span>
                    {faq.question}
                  </span>
                  <span className="shrink-0 p-2 border border-neutral-200 rounded-full group-hover:border-black transition-colors">
                    {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-8 pl-18 text-neutral-600 leading-relaxed max-w-3xl">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
