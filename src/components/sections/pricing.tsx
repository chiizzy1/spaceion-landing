"use client";

import { useRef, useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const PLANS = [
  {
    name: "Developer",
    price: "$0",
    description: "For hobbyists and local development.",
    features: ["1 Node Limit", "Community Support", "Public Agent Registry", "Standard Cold Starts"],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Startup",
    price: "$199",
    description: "For fast-moving teams building production agents.",
    features: ["100 Concurrent Nodes", "Turbo-Start (127ms)", "Private VPC Peering", "24/7 Slack Support", "Usage Analytics"],
    cta: "Deploy Now",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For global scale and dedicated infrastructure.",
    features: ["Unlimited Nodes", "Custom SLA", "On-Premise Deployment", "Audit Logs", "Dedicated Solutions Architect"],
    cta: "Contact Sales",
    popular: false,
  },
];

function PricingCard({ plan }: { plan: (typeof PLANS)[0] }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl border p-8 transition-shadow duration-300 hover:shadow-2xl overflow-hidden",
        plan.popular ? "border-black bg-black text-white shadow-xl" : "border-black/[0.1] bg-white text-black",
      )}
    >
      {/* Spotlight Effect Overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${plan.popular ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.04)"},
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <h3 className="font-mono text-sm font-bold uppercase tracking-widest opacity-70">{plan.name}</h3>
          {plan.popular && <span className="rounded-full bg-white px-2 py-0.5 text-xs font-bold text-black">POPULAR</span>}
        </div>

        <div className="mt-6 flex items-baseline gap-1">
          <span className="text-4xl font-bold tracking-tighter">{plan.price}</span>
          {plan.price !== "Custom" && <span className="text-sm opacity-60">/mo</span>}
        </div>
        <p className={cn("mt-4 text-sm", plan.popular ? "text-zinc-400" : "text-zinc-500")}>{plan.description}</p>

        <ul className="mt-8 space-y-4">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm">
              <Check className={cn("h-4 w-4 shrink-0", plan.popular ? "text-green-400" : "text-black")} />
              <span className="opacity-90">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "relative z-10 mt-8 w-full rounded-full py-3 text-sm font-bold transition-colors",
          plan.popular ? "bg-white text-black hover:bg-zinc-200" : "bg-black text-white hover:bg-zinc-800",
        )}
      >
        {plan.cta}
      </motion.button>
    </motion.div>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="border-b border-black/[0.08] bg-white py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            Simple, transparent <br />
            compute pricing.
          </h2>
          <p className="mt-4 text-xl text-zinc-500">
            Pay only for the milliseconds your agents are active. Scale to zero instantly.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {PLANS.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
