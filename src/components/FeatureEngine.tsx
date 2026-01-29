"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FEATURES_DATA } from "@/data/mockData";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { MonitorWaveform } from "./graphics/MonitorWaveform";

export default function FeatureEngine() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full border-b border-black bg-white">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Interactive List */}
        <div className="flex flex-col lg:border-r border-black py-12 lg:py-24">
          {FEATURES_DATA.map((feature, index) => (
            <div
              key={feature.id}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "p-8 md:p-12 border-b border-black/10 lg:border-none cursor-pointer group transition-all duration-300 relative",
                activeIndex === index ? "bg-neutral-50" : "hover:bg-neutral-50",
              )}
            >
              {/* Active Indicator Line */}
              {activeIndex === index && (
                <motion.div layoutId="activeFeature" className="absolute left-0 top-0 bottom-0 w-1 bg-black" />
              )}

              <div className="pl-4">
                <span className="font-mono text-xs text-neutral-400 mb-3 block transition-colors group-hover:text-black tracking-widest">
                  {feature.id}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tighter group-hover:translate-x-2 transition-transform">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 max-w-md font-light leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Visualization */}
        <div className="relative bg-neutral-50 flex items-center justify-center p-12 lg:p-24 min-h-[500px] lg:min-h-[auto] overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#000_1px,transparent_1px)] [background-size:20px_20px]" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
              className="relative w-full max-w-md aspect-square bg-white border border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 flex flex-col justify-between"
            >
              {/* Header */}
              <div className="flex justify-between items-center border-b border-black pb-4">
                <Badge variant="outline" className="rounded-sm font-mono text-[10px] uppercase">
                  SYS_MONITOR
                </Badge>
                <div className="flex gap-2">
                  <span className="w-2 h-2 rounded-full border border-black" />
                  <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
                </div>
              </div>

              {/* Graphic */}
              <div className="flex-1 flex items-center justify-center py-8 relative w-full">
                {activeIndex === 0 ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full h-full">
                    <MonitorWaveform />
                  </motion.div>
                ) : (
                  (() => {
                    const Icon = FEATURES_DATA[activeIndex].icon;
                    return (
                      <motion.div
                        initial={{ scale: 0.8, rotate: -10 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", duration: 0.8 }}
                      >
                        <Icon className="w-32 h-32 stroke-[1px]" />
                      </motion.div>
                    );
                  })()
                )}
              </div>

              {/* Metrics */}
              <div className="font-mono text-xs space-y-3">
                <div className="flex justify-between border-t border-dashed border-black pt-3">
                  <span className="text-neutral-500">LATENCY</span>
                  <span className="font-bold">0.4ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">STATUS</span>
                  <span className="text-[var(--color-signal-green)] font-bold">OPTIMAL</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Node ID Marker */}
          <div className="absolute bottom-8 right-8 bg-white border border-black p-4 font-mono text-xs shadow-lg hidden md:block">
            <div className="flex justify-between gap-8 mb-1">
              <span className="text-neutral-500">NODE_ID</span>
              <span>SP-8821</span>
            </div>
            <div className="flex justify-between gap-8">
              <span className="text-neutral-500">LOAD</span>
              <span>{activeIndex === 1 ? "92%" : "42%"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
