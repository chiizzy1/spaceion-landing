"use client";

import { motion } from "framer-motion";
import { Activity } from "lucide-react";

export function ThroughputCard() {
  return (
    <div className="relative group bg-white border border-neutral-200 p-6 h-full flex flex-col justify-between overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-10 transition-opacity">
        <Activity className="w-24 h-24 text-neutral-300" />
      </div>

      <div className="relative z-10">
        <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center mb-4 border border-neutral-200">
          <Activity className="w-5 h-5 text-neutral-600" />
        </div>
        <h3 className="text-xl font-bold uppercase tracking-tight mb-2">High Throughput</h3>
        <p className="text-sm text-neutral-500 font-light leading-relaxed">
          Parallelize execution across thousands of concurrent edges without degradation.
        </p>
      </div>

      <div className="mt-8 relative h-32 w-full flex items-center justify-center bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800">
        <svg className="w-full h-full p-4" viewBox="0 0 300 100">
          <defs>
            <linearGradient id="streamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
              <stop offset="50%" stopColor="#10b981" stopOpacity="1" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Background Grid Lines */}
          {[10, 30, 50, 70, 90].map((y, i) => (
            <motion.line
              key={`bg-${i}`}
              x1="0"
              y1={y}
              x2="300"
              y2={y}
              stroke="#333"
              strokeWidth="1"
              strokeDasharray="4 4"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: -20 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="opacity-30"
            />
          ))}

          {/* Active Data Streams - Increased Density */}
          {[15, 25, 35, 45, 55, 65, 75, 85].map((y, i) => (
            <motion.path
              key={`stream-${i}`}
              d={`M0,${y} L300,${y}`}
              stroke="url(#streamGradient)"
              strokeWidth={Math.random() > 0.5 ? 2 : 1}
              strokeLinecap="round"
              initial={{ strokeDasharray: "50 50", strokeDashoffset: 300 }}
              animate={{ strokeDashoffset: -300 }}
              transition={{
                duration: 1 + Math.random(), // Random speed for chaotic flow
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ opacity: 0.8, filter: "drop-shadow(0 0 2px #10b981)" }}
            />
          ))}

          {/* Random Data Particles */}
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.circle
              key={`particle-${i}`}
              r={Math.random() * 1.5 + 0.5}
              fill="#fff"
              initial={{ cx: 0, cy: Math.random() * 90 + 5, opacity: 0 }}
              animate={{
                cx: 300,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 0.5 + Math.random() * 1.5,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "linear",
              }}
            />
          ))}
        </svg>

        <div className="absolute bottom-2 left-3 flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
          <span className="font-mono text-[10px] text-emerald-500 font-bold tracking-wider">142,892 REQ/S</span>
        </div>
      </div>
    </div>
  );
}
