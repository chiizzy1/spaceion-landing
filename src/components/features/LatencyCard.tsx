"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

// Mini Waveform Icon Component
const WaveformIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" strokeWidth="2">
    <motion.path
      d="M2 12 L6 12 L8 4 L12 20 L16 12 L22 12"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, repeat: Infinity, repeatDelay: 2, ease: "linear" }}
    />
  </svg>
);

export function LatencyCard() {
  const [tick, setTick] = useState(0);

  // Simulated live data flicker
  useEffect(() => {
    const interval = setInterval(() => {
      setTick((t) => t + 1);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative group bg-white border border-neutral-200 p-6 h-full flex flex-col justify-between overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Background Grid - Oscilloscope Style */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-size-[20px_20px] pointer-events-none" />

      <div className="relative z-10">
        <div className="w-10 h-10 bg-neutral-100 rounded-md flex items-center justify-center mb-4 border border-neutral-200 group-hover:border-emerald-500/30 transition-colors">
          <WaveformIcon />
        </div>
        <h3 className="text-xl font-display font-bold uppercase tracking-tight mb-2">Engineered Latency</h3>
        <p className="text-sm text-neutral-500 font-light leading-relaxed">
          Sub-millisecond cold start times achieved through our proprietary edge-caching protocol and bare-metal control plane.
        </p>
      </div>

      <div className="mt-8 relative h-32 w-full flex items-center justify-center bg-neutral-950 rounded-sm overflow-hidden border border-neutral-800">
        {/* Oscilloscope Screen */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-size-[10px_10px] opacity-20" />

        <svg viewBox="0 0 300 100" className="w-full h-full p-2">
          {/* Center Line */}
          <line x1="0" y1="50" x2="300" y2="50" stroke="#10b981" strokeWidth="0.5" strokeOpacity="0.3" />

          {/* The Signal Trace */}
          <motion.path
            d="M0,50 L40,50 L60,20 L80,80 L100,50 L140,50 L160,10 L180,90 L200,50 L300,50"
            fill="none"
            stroke="#10b981"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.1, ease: "linear", repeat: Infinity, repeatDelay: 1.5 }}
            style={{ filter: "drop-shadow(0 0 2px #10b981)" }}
          />
          {/* Ghost Trace (Fade out) */}
          <motion.path
            d="M0,50 L40,50 L60,20 L80,80 L100,50 L140,50 L160,10 L180,90 L200,50 L300,50"
            fill="none"
            stroke="#10b981"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 1.5, ease: "easeOut", repeat: Infinity, delay: 0.1 }}
          />
        </svg>

        {/* Technical readout overlays */}
        <div className="absolute top-2 left-2 font-mono text-[8px] text-emerald-500/70">CH1: 200mV</div>
        <div className="absolute bottom-2 right-2 font-mono text-[8px] text-emerald-500 font-bold tracking-wider flex items-center gap-1">
          <span className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse" />
          TRIG:{" "}
          <span className="tabular-nums">
            {Math.floor(Math.random() * 9)}.{tick % 9}ms
          </span>
        </div>
      </div>
    </div>
  );
}
