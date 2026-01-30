"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

// --- Micro-Schematics (Premium Icons) ---

const MicroChip = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 text-neutral-700" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="4" y="4" width="16" height="16" rx="2" strokeOpacity="0.5" />
    <motion.path d="M9 9h6v6h-6z" fill="currentColor" fillOpacity="0.1" stroke="none" />
    <path d="M9 9h6v6h-6z" strokeOpacity="1" />
    {/* Animated Data Pins */}
    {[6, 12, 18].map((offset, i) => (
      <motion.path
        key={i}
        d={`M${offset} 4V2 M${offset} 20V22 M4 ${offset}H2 M20 ${offset}H22`}
        strokeOpacity="0.5"
        animate={{ strokeOpacity: [0.2, 1, 0.2] }}
        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
      />
    ))}
  </svg>
);

const SineWave = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 text-neutral-700" fill="none" stroke="currentColor" strokeWidth="2">
    <motion.path
      d="M2 12c2.5-4 4.5-8 7-8s5 8 8 8 4.5-5 5-5"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
    />
  </svg>
);

const SecureNode = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 text-neutral-700" fill="none" stroke="currentColor" strokeWidth="2">
    {/* Solid Shield Outline */}
    <path d="M12 2l9 4v6c0 5.5-3.8 10.7-9 12-5.2-1.3-9-6.5-9-12V6l9-4z" strokeLinejoin="round" className="opacity-100" />
    {/* Inner Pulsing Core */}
    <motion.circle
      cx="12"
      cy="12"
      r="3"
      fill="currentColor"
      initial={{ scale: 0.5, opacity: 0.5 }}
      animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
    {/* Scanning Line effect (Subtle) */}
    <motion.path
      d="M12 2l9 4v6c0 5.5-3.8 10.7-9 12-5.2-1.3-9-6.5-9-12V6l9-4z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
      className="opacity-50"
    />
  </svg>
);

const PRICING_TIERS = [
  {
    name: "DEVELOPER",
    description: "For hobbyists and side projects.",
    price: "$0",
    period: "/mo",
    features: ["100k requests/month", "Global Edge Network", "Community Support", "1 Project"],
    cta: "Start Building",
    featured: false,
    icon: <MicroChip />,
  },
  {
    name: "STARTUP",
    description: "For growing teams and production apps.",
    price: "$99",
    period: "/mo",
    features: ["2M requests/month included", "DDoS Protection (L3/L4)", "Team Management", "99.9% Uptime SLA", "5 Projects"],
    cta: "Upgrade to Pro",
    featured: true,
    icon: <SineWave />,
  },
  {
    name: "SCALE",
    description: "For high-volume, mission-critical workloads.",
    price: "Custom",
    period: "",
    features: [
      "Unlimited requests",
      "Global Mesh Routing",
      "Dedicated Infrastructure",
      "24/7 Priority Support",
      "99.99% Uptime SLA",
      "SSO & Audit Logs",
    ],
    cta: "Contact Sales",
    featured: false,
    icon: <SecureNode />,
  },
];

export default function PricingSection() {
  const [requests, setRequests] = useState([1]);

  // Usage Estimation Logic
  const calculateUsageCost = (val: number) => {
    // 1 slider unit = 1M requests
    const base = 99;
    const additional = Math.max(0, val - 2) * 20; // $20 per additional million
    return base + additional;
  };

  return (
    <section className="w-full py-24 bg-white border-b border-black relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-white">
            TRANSPARENT PRICING
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter uppercase mb-6">
            Predictable Costs.
            <br />
            Scale Without Fear.
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
            Start free, pay as you grow. Our usage-based model ensures you never pay for idle capacity.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start mb-24">
          {PRICING_TIERS.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={cn(
                "group relative p-8 border hover:shadow-xl transition-all duration-300 flex flex-col h-full bg-white",
                tier.featured
                  ? "border-black shadow-lg scale-105 z-10 rounded-lg"
                  : "border-neutral-200 hover:border-neutral-300 rounded-md",
              )}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-0 right-0 flex justify-center">
                  <Badge className="bg-emerald-500 text-white border-emerald-600 shadow-sm">MOST POPULAR</Badge>
                </div>
              )}

              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-neutral-50 rounded-md border border-neutral-100 group-hover:border-neutral-200 transition-colors">
                  {tier.icon}
                </div>
                {tier.name === "STARTUP" && (
                  <span className="text-xs font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded-sm">
                    Usage-Based
                  </span>
                )}
              </div>

              <h3 className="text-lg font-display font-bold tracking-tight mb-2 uppercase">{tier.name}</h3>
              <p className="text-neutral-500 text-sm mb-6 h-10">{tier.description}</p>

              <div className="mb-6 pb-6 border-b border-neutral-100">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tighter">
                    {tier.name === "STARTUP" ? `$${calculateUsageCost(requests[0])}` : tier.price}
                  </span>
                  <span className="text-neutral-400 font-medium">{tier.period}</span>
                </div>
                <div className="text-xs text-neutral-400 mt-2 font-mono">
                  {tier.name === "STARTUP" ? `Estimated cost for ${requests[0]}M requests` : "Flat rate"}
                </div>
              </div>

              {/* Usage Interaction for Startup Tier */}
              {tier.name === "STARTUP" && (
                <div className="mb-8">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-2">
                    <span>Requests / Month</span>
                    <span>{requests[0]}M</span>
                  </div>
                  <Slider defaultValue={[1]} max={10} step={1} className="py-4" onValueChange={setRequests} />
                  <div className="flex justify-between text-[10px] text-neutral-400 font-mono mt-1">
                    <span>1M</span>
                    <span>10M</span>
                  </div>
                </div>
              )}

              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-neutral-600">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant={tier.featured ? "swiss-inverted" : "swiss"} className="w-full">
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
