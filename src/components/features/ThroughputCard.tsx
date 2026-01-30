"use client";

import { motion } from "framer-motion";

// Mini Parallel Lines Icon
const ParallelIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" strokeWidth="2">
    <motion.path
      d="M4 18L20 18"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, repeat: Infinity, delay: 0 }}
    />
    <motion.path
      d="M4 12L20 12"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
    />
    <motion.path
      d="M4 6L20 6"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
    />
  </svg>
);

export function ThroughputCard() {
  return (
    <div className="relative group bg-white border border-neutral-200 p-6 h-full flex flex-col justify-between overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-size-[20px_20px] pointer-events-none" />

      <div className="relative z-10">
        <div className="w-10 h-10 bg-neutral-100 rounded-md flex items-center justify-center mb-4 border border-neutral-200 group-hover:border-emerald-500/30 transition-colors">
          <ParallelIcon />
        </div>
        <h3 className="text-xl font-display font-bold uppercase tracking-tight mb-2">High Throughput</h3>
        <p className="text-sm text-neutral-500 font-light leading-relaxed">
          Parallelize execution across thousands of concurrent edges without degradation.
        </p>
      </div>

      <div className="mt-8 relative h-32 w-full flex items-center justify-center bg-neutral-950 rounded-sm overflow-hidden border border-neutral-800">
        <svg className="w-full h-full p-4" viewBox="0 0 300 100">
          {/* Parallel Lanes */}
          {[20, 40, 60, 80].map((y, i) => (
            <g key={i}>
              {/* Lane Guide */}
              <line x1="0" y1={y} x2="300" y2={y} stroke="#404040" strokeWidth="1" strokeDasharray="4 6" />
              {/* Data Packet */}
              <motion.path
                d={`M0,${y} L300,${y}`}
                stroke="#10b981"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ strokeDasharray: "80 220", strokeDashoffset: 380 }}
                animate={{ strokeDashoffset: -220 }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.15, // Staggered start
                }}
                style={{ filter: "drop-shadow(0 0 4px #10b981)" }}
              />
            </g>
          ))}
        </svg>

        <div className="absolute top-2 right-2 font-mono text-[8px] text-emerald-500/50 uppercase tracking-widest">
          Lane Sync: LOCKED
        </div>
        <div className="absolute bottom-2 left-3 flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
          <span className="font-mono text-[10px] text-emerald-500 font-bold tracking-wider">142,892 REQ/S</span>
        </div>
      </div>
    </div>
  );
}
