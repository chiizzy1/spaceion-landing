"use client";

import { Activity, ShieldCheck, ArrowRight, CornerRightUp } from "lucide-react";
import { BENTO_DATA } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { OrbitalShield, UptimeGraph } from "./graphics/Spotlights";
import { motion, useSpring, useTransform, useInView, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

// --- Micro-Components ---

const CountingNumber = ({ value, className }: { value: string; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, "")); // Extract number
  const spring = useSpring(0, { stiffness: 50, damping: 20 });
  const displayValue = useTransform(spring, (current) => {
    // If it's an integer, show int. If float, show 2 decimals.
    if (Number.isInteger(numericValue)) return current.toFixed(0);
    return current.toFixed(2);
  });

  useEffect(() => {
    if (isInView) {
      spring.set(numericValue);
    }
  }, [isInView, numericValue, spring]);

  return (
    <motion.span ref={ref} className={className}>
      {displayValue}
    </motion.span>
  );
};

const CornerBrackets = () => (
  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-emerald-500/50" />
    <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-emerald-500/50" />
    <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-emerald-500/50" />
    <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-emerald-500/50" />
  </div>
);

const ScanLine = () => (
  <motion.div
    className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent pointer-events-none z-0"
    initial={{ translateY: "-100%" }}
    whileHover={{ translateY: "100%" }}
    transition={{ duration: 1.5, ease: "linear", repeat: Infinity }}
  />
);

// --- Main Grid ---

export default function BentoGrid() {
  return (
    <section className="w-full max-w-[1440px] mx-auto py-32 px-6">
      <div className="flex flex-col mb-12 items-start">
        <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter uppercase mb-2">System Metrics</h2>
        <div className="h-px w-full bg-black/10 mt-4 relative">
          <div className="absolute left-0 top-0 h-1 w-12 bg-black"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Metric Card - Active Monitoring */}
        <div className="md:col-span-2 p-12 flex flex-col justify-between min-h-[340px] bg-white border border-neutral-200 rounded-lg group relative overflow-hidden transition-all hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/5">
          <ScanLine />
          <CornerBrackets />

          <div className="absolute top-4 right-4 opacity-50 font-mono text-[9px] tracking-widest text-neutral-400">
            LIVE_FEED::MTR-01
          </div>

          <div className="absolute inset-x-0 bottom-0 h-32 opacity-10 pointer-events-none text-emerald-500 mix-blend-multiply">
            <UptimeGraph />
          </div>

          <div className="flex justify-between items-start relative z-10">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs uppercase text-neutral-500 tracking-widest group-hover:text-emerald-700 transition-colors">
                {BENTO_DATA.uptime.label}
              </span>
              <span className="h-0.5 w-4 bg-emerald-500" />
            </div>
            <Activity className="w-5 h-5 text-emerald-500 opacity-50 group-hover:opacity-100 transition-opacity animate-pulse" />
          </div>

          <div className="relative z-10 mt-8">
            <h3 className="text-8xl md:text-9xl font-bold tracking-[-0.05em] leading-none font-sans flex items-baseline">
              <CountingNumber value={BENTO_DATA.uptime.value} />
              <span className="text-4xl ml-1 tracking-normal text-neutral-300 font-light">%</span>
            </h3>
            <p className="mt-6 text-lg font-medium text-neutral-600 max-w-sm leading-tight border-l-2 border-neutral-200 pl-4 group-hover:border-emerald-500/50 transition-colors">
              {BENTO_DATA.uptime.desc}
            </p>
          </div>
        </div>

        {/* Security Card - Shield Status */}
        <div className="p-12 flex flex-col justify-between min-h-[340px] bg-white border border-neutral-200 rounded-lg group relative overflow-hidden transition-all hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/5">
          <ScanLine />
          <CornerBrackets />

          <div className="absolute top-4 right-4 p-2 bg-neutral-50 rounded-full border border-neutral-100 group-hover:border-emerald-500/20 transition-colors">
            <ShieldCheck className="w-4 h-4 text-neutral-400 group-hover:text-emerald-600 transition-colors" />
          </div>

          <span className="font-mono text-xs uppercase text-neutral-500 tracking-widest group-hover:text-emerald-700 transition-colors z-10">
            {BENTO_DATA.security.label}
          </span>

          <div className="flex flex-col items-center justify-center flex-1 gap-6 transform group-hover:scale-105 transition-transform duration-700 ease-elastic z-10">
            <OrbitalShield />
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold uppercase tracking-tighter">{BENTO_DATA.security.standard}</div>
              <div className="text-[10px] font-mono text-neutral-500 tracking-widest border border-neutral-200 px-2 py-1 rounded-sm bg-white">
                {BENTO_DATA.security.type}
              </div>
            </div>
          </div>
        </div>

        {/* Partners Card (Inverted) - Command Link */}
        <div className="p-12 flex flex-col justify-between min-h-[340px] bg-[#0A0A0A] text-white border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors relative group overflow-hidden">
          {/* Static Technical Crosses */}
          <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-white/20" />
          <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-white/20" />

          {/* Subtle Grid BG */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

          <span className="font-mono text-xs uppercase opacity-50 tracking-widest relative z-10 text-emerald-500">
            Integrations
          </span>

          <div className="flex flex-col gap-6 mt-4 relative z-10">
            {BENTO_DATA.partners.map((partner, i) => (
              <div
                key={partner}
                className="flex items-center gap-4 opacity-60 hover:opacity-100 cursor-pointer group/item translate-x-0 hover:translate-x-2 transition-transform duration-300"
              >
                <span className="font-mono text-[10px] opacity-30 text-emerald-500">0{i + 1}</span>
                <span className="font-bold text-2xl tracking-tight">{partner}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-6 border-t border-white/10 relative z-10">
            <Button
              variant="link"
              className="text-white p-0 h-auto hover:text-emerald-400 hover:no-underline gap-3 group/btn uppercase tracking-widest text-[10px] font-bold"
            >
              View API Docs{" "}
              <CornerRightUp className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
