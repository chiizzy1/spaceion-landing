"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export function LatencyCard() {
  return (
    <div className="relative group bg-white border border-neutral-200 p-6 h-full flex flex-col justify-between overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] bg-size-[16px_16px] opacity-30 pointer-events-none" />

      <div className="relative z-10">
        <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center mb-4 border border-neutral-200">
          <Zap className="w-5 h-5 text-neutral-600" />
        </div>
        <h3 className="text-xl font-bold uppercase tracking-tight mb-2">Engineered Latency</h3>
        <p className="text-sm text-neutral-500 font-light leading-relaxed">
          Sub-millisecond cold start times achieved through our proprietary edge-caching protocol and bare-metal control plane.
        </p>
      </div>

      <div className="mt-8 relative h-32 w-full flex items-center justify-center bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800">
        <svg viewBox="0 0 300 100" className="w-full h-full p-4">
          {/* Circuit Path */}
          <path
            d="M20,50 L60,50 L80,20 L120,20 L140,80 L180,80 L200,50 L280,50"
            fill="none"
            stroke="#333"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-50"
          />

          {/* Glowing Trace */}
          <motion.path
            d="M20,50 L60,50 L80,20 L120,20 L140,80 L180,80 L200,50 L280,50"
            fill="none"
            stroke="#10b981"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 0.5,
            }}
            style={{ filter: "drop-shadow(0 0 4px #10b981)" }}
          />

          {/* Leading Photon Particle */}
          <motion.circle
            r="3"
            fill="white"
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: "100%" }}
            style={{
              offsetPath: 'path("M20,50 L60,50 L80,20 L120,20 L140,80 L180,80 L200,50 L280,50")',
              filter: "drop-shadow(0 0 8px white)",
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 0.5,
            }}
          />
        </svg>
        <div className="absolute bottom-2 right-3 font-mono text-[10px] text-emerald-500 font-bold tracking-wider">
          LATENCY: 0.8ms
        </div>
      </div>
    </div>
  );
}
