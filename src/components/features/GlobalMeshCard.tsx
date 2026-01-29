"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";

export function GlobalMeshCard() {
  return (
    <div className="relative group bg-neutral-900 border border-neutral-800 p-6 h-full flex flex-col justify-between overflow-hidden text-white hover:shadow-2xl hover:shadow-black/20 transition-all duration-300">
      <div className="relative z-10">
        <div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center mb-4 border border-neutral-700">
          <Globe className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-xl font-display font-bold uppercase tracking-tight mb-2">Global Mesh</h3>
        <p className="text-sm text-neutral-400 font-light leading-relaxed">
          State is automatically replicated across 35 regions. Write to one node, read from any. Strong consistency guaranteed.
        </p>
      </div>

      <div className="mt-8 relative h-32 w-full flex items-center justify-center bg-neutral-900/50 rounded-lg overflow-hidden border border-neutral-800">
        <svg className="w-full h-full p-4" viewBox="0 0 300 100">
          {/* Central Core */}
          <circle cx="150" cy="50" r="8" fill="#171717" stroke="#333" strokeWidth="1" />
          <motion.circle
            cx="150"
            cy="50"
            r="3"
            fill="#fff"
            animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Orbital Rings */}
          {[0, 60, 120].map((angle, i) => (
            <g key={`orbit-${i}`} transform={`rotate(${angle} 150 50)`}>
              <ellipse cx="150" cy="50" rx="60" ry="20" fill="none" stroke="#333" strokeWidth="1" className="opacity-50" />
              <motion.circle
                r="2"
                fill="white"
                animate={{
                  offsetDistance: "100%",
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  offsetPath: 'path("M 90 50 A 60 20 0 1 1 210 50 A 60 20 0 1 1 90 50")',
                }}
              />
            </g>
          ))}

          {/* Connectivity Lines overlay */}
          <motion.line
            x1="90"
            y1="50"
            x2="150"
            y2="50"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="2 4"
            className="opacity-20"
            animate={{ strokeDashoffset: -20 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.line
            x1="210"
            y1="50"
            x2="150"
            y2="50"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="2 4"
            className="opacity-20"
            animate={{ strokeDashoffset: 20 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </svg>

        <div className="absolute top-2 right-3 flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
          <span className="font-mono text-[10px] text-neutral-400 font-bold tracking-wider">35 REGIONS ACTIVE</span>
        </div>
      </div>
    </div>
  );
}
