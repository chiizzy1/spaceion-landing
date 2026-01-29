"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Info, Zap, Shield, Globe, Cpu } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

const PRICING_TIERS = [
  {
    name: "DEVELOPER",
    description: "For hobbyists and side projects.",
    price: "$0",
    period: "/mo",
    features: ["100k requests/month", "Global Edge Network", "Community Support", "1 Project"],
    cta: "Start Building",
    featured: false,
    icon: <Cpu className="w-5 h-5" />,
  },
  {
    name: "STARTUP",
    description: "For growing teams and production apps.",
    price: "$99",
    period: "/mo",
    features: ["2M requests/month included", "DDoS Protection (L3/L4)", "Team Management", "99.9% Uptime SLA", "5 Projects"],
    cta: "Upgrade to Pro",
    featured: true,
    icon: <Zap className="w-5 h-5" />,
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
    icon: <Shield className="w-5 h-5" />,
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

              <h3 className="text-lg font-bold tracking-tight mb-2 uppercase">{tier.name}</h3>
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
