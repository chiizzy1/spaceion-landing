"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, Check, Box, Database, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const STEPS = [
  {
    id: "01",
    title: "Deploy",
    description: "Push your container to the Spaceion registry. We automatically analyze dependencies and runtime requirements.",
    cmd: "spaceion push ./app",
    icon: Box,
  },
  {
    id: "02",
    title: "Orchestrate",
    description: "Our control plane maps your workload to the optimal regions based on user latency and cost policies.",
    cmd: "Routing traffic to [us-east-1, eu-central-1]...",
    icon: Globe,
  },
  {
    id: "03",
    title: "Scale",
    description: "Infrastructure auto-scales horizontally. You only pay for active execution time.",
    cmd: "Scaling replicas: 1 -> 450",
    icon: Database,
  },
];

export default function DeploySequence() {
  const [activeStep, setActiveStep] = useState(0);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white border-b border-neutral-200">
      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text Content */}
        <div className="space-y-8">
          <div className="mb-12">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-2 block">The Workflow</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter">
              Push to Production <br />
              <span className="text-neutral-400">in Seconds.</span>
            </h2>
          </div>

          <div className="space-y-6 min-h-[360px]">
            {STEPS.map((step, index) => (
              <motion.div
                layout
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`cursor-pointer group flex gap-6 p-4 rounded-xl transition-all duration-300 ${activeStep === index ? "bg-neutral-50" : "hover:bg-neutral-50/50"}`}
              >
                <span
                  className={`text-sm font-mono tracking-wider pt-1 ${activeStep === index ? "text-black" : "text-neutral-300"}`}
                >
                  {step.id}
                </span>
                <div className="space-y-2">
                  <h3
                    className={`text-xl font-display font-bold uppercase tracking-tight transition-colors ${activeStep === index ? "text-black" : "text-neutral-400"}`}
                  >
                    {step.title}
                  </h3>
                  <AnimatePresence mode="popLayout">
                    {activeStep === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-neutral-600 font-light leading-relaxed text-sm"
                      >
                        {step.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Code/Visual Terminal */}
        <div className="relative">
          {/* Terminal Window */}
          <div className="w-full bg-[#1A1A1A] rounded-xl overflow-hidden shadow-2xl border border-neutral-800 relative z-10 min-h-[400px] flex flex-col">
            {/* Terminal Header */}
            <div className="bg-[#2A2A2A] px-4 py-3 flex items-center justify-between border-b border-neutral-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-neutral-500" />
                <div className="w-3 h-3 rounded-full bg-neutral-500" />
                <div className="w-3 h-3 rounded-full bg-neutral-500" />
              </div>
              <div className="text-[10px] font-mono text-neutral-500 flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                BASH
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-sm text-neutral-300 space-y-4 flex-1">
              <div className="flex gap-3 text-neutral-500">
                <span>$</span>
                <span className="text-white">spaceion init</span>
              </div>
              <div className="text-emerald-500">➜ Project initialized (v2.4)</div>

              <div className="flex gap-3 text-neutral-500 pt-4">
                <span>$</span>
                <span className="text-white">{STEPS[activeStep].cmd}</span>
              </div>

              {activeStep === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-neutral-400 pl-4 border-l border-neutral-700 space-y-1"
                >
                  <div>→ Building container...</div>
                  <div>→ Analyzing cargo.toml...</div>
                  <div>→ Uploading assets (4.2MB)...</div>
                </motion.div>
              )}
              {activeStep === 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-neutral-400 pl-4 border-l border-neutral-700 space-y-1"
                >
                  <div>→ Resolving global mesh...</div>
                  <div>→ Found 5 optimal regions</div>
                  <div>→ Propagating state...</div>
                </motion.div>
              )}
              {activeStep === 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-neutral-400 pl-4 border-l border-neutral-700 space-y-1"
                >
                  <div>→ Traffic spike detected</div>
                  <div>→ Provisioning micro-vms...</div>
                  <div className="text-emerald-500">→ Stable at 450 replicas</div>
                </motion.div>
              )}

              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="w-2 h-4 bg-neutral-500 inline-block translate-y-0.5"
              />
            </div>

            {/* Visual Context Badge */}
            <div className="absolute bottom-6 right-6">
              <Badge className="bg-white text-black hover:bg-white font-mono uppercase text-xs">
                {activeStep === 0 && <Box className="w-3 h-3 mr-2" />}
                {activeStep === 1 && <Globe className="w-3 h-3 mr-2" />}
                {activeStep === 2 && <Database className="w-3 h-3 mr-2" />}
                Step {STEPS[activeStep].id}
              </Badge>
            </div>
          </div>

          {/* Backdrop Decor */}
          <div className="absolute -right-12 -bottom-12 w-full h-full border border-neutral-200 rounded-xl z-0 hidden lg:block" />
          <div className="absolute -right-6 -bottom-6 w-full h-full bg-neutral-100 rounded-xl z-0 hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
