"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    id: "01",
    title: "127ms Turbo-Start",
    description: "Instant cold starts. We cache your runtime at the edge.",
  },
  {
    id: "02",
    title: "Intelligent Isolation",
    description: "Bank-grade V8 sandboxes for zero-trust security.",
  },
  {
    id: "03",
    title: "Horizontal Scale",
    description: "Spin up 10,000 nodes in under 4 seconds globally.",
  },
  {
    id: "04",
    title: "MCP Gateway",
    description: "Native protocol support for AI Agent tools.",
  },
];

export function FeatureEngine() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="border-b border-black/[0.08] bg-white py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-8">
          {/* LEFT COLUMN: The Control List */}
          <div className="flex flex-col justify-center gap-2">
            {FEATURES.map((feature, index) => (
              <div
                key={feature.id}
                onMouseEnter={() => setActiveFeature(index)}
                className={cn(
                  "group relative cursor-pointer border-l-2 py-6 pl-8 transition-all duration-500",
                  activeFeature === index ? "border-black bg-black/[0.02]" : "border-transparent hover:border-black/[0.1]",
                )}
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-baseline gap-4">
                    <span
                      className={cn(
                        "font-mono text-xs font-bold tracking-widest uppercase transition-colors duration-300",
                        activeFeature === index ? "text-green-600" : "text-zinc-300",
                      )}
                    >
                      {feature.id} /
                    </span>
                    <h3
                      className={cn(
                        "text-xl font-bold tracking-tight transition-colors duration-300",
                        activeFeature === index ? "text-black" : "text-zinc-400 group-hover:text-zinc-600",
                      )}
                    >
                      {feature.title}
                    </h3>
                  </div>
                  <motion.p
                    initial={false}
                    animate={{
                      height: activeFeature === index ? "auto" : 0,
                      opacity: activeFeature === index ? 1 : 0,
                    }}
                    className="overflow-hidden text-sm text-zinc-500 ml-10"
                  >
                    {feature.description}
                  </motion.p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN: The Reactor (Isometric SVG) */}
          <div className="relative flex min-h-[400px] items-center justify-center rounded-2xl border border-black/[0.05] bg-zinc-50/50 p-8">
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

            {/* The Isometric Stage */}
            <div className="relative h-64 w-64 [perspective:1000px]">
              {/* Base Plate */}
              <motion.div
                animate={{ rotateX: 60, rotateZ: 45 }}
                className="absolute inset-0 rounded-xl border-2 border-zinc-200 bg-white shadow-xl"
              />

              {/* Animated Layers based on Active State */}
              <AnimatePresence mode="wait">
                {activeFeature === 0 && <FeatureVisual01 key="v1" />}
                {activeFeature === 1 && <FeatureVisual02 key="v2" />}
                {activeFeature === 2 && <FeatureVisual03 key="v3" />}
                {activeFeature === 3 && <FeatureVisual04 key="v4" />}
              </AnimatePresence>
            </div>

            {/* Schematic Label */}
            <div className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-widest text-zinc-400">
              SYS_STATE_0{activeFeature + 1}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =======================================
   ISOMETRIC VISUALS (Micro-Components)
   ======================================= */

import { Zap, ShieldCheck, Server, Workflow, Sparkles, Lock, Globe } from "lucide-react";

// Shared Aesthetic Constants from Illustration System
const STROKE_WIDTH = 1.5;
/* Note: Using Tailwind classes directly instead of constants for flexibility in this specific file context */
const ACCENT_CLASS = "text-emerald-500";
const NEUTRAL_CLASS = "text-zinc-800";

function FeatureVisual01() {
  // "Turbo Start": Fast moving particles or stacking blocks
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="absolute inset-0 flex items-center justify-center p-8"
      style={{ transform: "rotateX(60deg) rotateZ(45deg) translateZ(40px)" }}
    >
      {/* Base Platform */}
      <div className="absolute inset-0 rounded-2xl border-2 border-zinc-200 bg-white/50 backdrop-blur-sm" />

      {/* Central "Engine" Icon - Floating */}
      <motion.div
        animate={{ z: 20 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="relative z-10 flex h-24 w-24 items-center justify-center rounded-xl border border-zinc-200 bg-white shadow-lg"
      >
        <Zap className={cn("h-12 w-12", ACCENT_CLASS)} strokeWidth={STROKE_WIDTH} />
      </motion.div>

      {/* Orbiting Particles */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute top-4 left-1/2 h-2 w-2 rounded-full bg-emerald-400" />
        <div className="absolute bottom-4 left-1/2 h-2 w-2 rounded-full bg-black" />
      </motion.div>
    </motion.div>
  );
}

function FeatureVisual02() {
  // "Isolation": A shield or lock metaphor
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 flex items-center justify-center"
      style={{ transform: "rotateX(60deg) rotateZ(45deg) translateZ(50px)" }}
    >
      {/* Glass Shield */}
      <div className="relative flex h-32 w-24 items-center justify-center rounded-b-full rounded-t-lg border-2 border-zinc-900 bg-white/80 shadow-xl">
        <ShieldCheck className={cn("h-10 w-10", ACCENT_CLASS)} strokeWidth={STROKE_WIDTH} />

        {/* Decorative 'Scan' Line */}
        <motion.div
          initial={{ top: "10%" }}
          animate={{ top: "80%" }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute left-2 right-2 h-[1px] bg-emerald-500/50"
        />
      </div>
    </motion.div>
  );
}

function FeatureVisual03() {
  // "Scale": Multiple items expanding
  return (
    <motion.div
      style={{ transform: "rotateX(60deg) rotateZ(45deg) translateZ(20px)" }}
      className="absolute inset-0 grid grid-cols-2 gap-4 p-12"
    >
      {[1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: i * 0.1, type: "spring" }}
          className="flex items-center justify-center rounded-xl border border-zinc-200 bg-white shadow-sm"
        >
          <Server className="h-6 w-6 text-zinc-400" strokeWidth={STROKE_WIDTH} />
        </motion.div>
      ))}
    </motion.div>
  );
}

function FeatureVisual04() {
  // "MCP": Connection lines
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ transform: "rotateX(60deg) rotateZ(45deg) translateZ(30px)" }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="relative h-32 w-32">
        <Globe className="absolute top-0 left-0 h-10 w-10 text-zinc-300" strokeWidth={STROKE_WIDTH} />
        <Workflow className="absolute bottom-0 right-0 h-10 w-10 text-zinc-300" strokeWidth={STROKE_WIDTH} />
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-emerald-500 bg-white shadow-lg shadow-emerald-500/20">
            <Sparkles className={cn("h-8 w-8", ACCENT_CLASS)} strokeWidth={STROKE_WIDTH} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
