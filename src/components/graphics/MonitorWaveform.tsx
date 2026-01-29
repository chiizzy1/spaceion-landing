"use client";

import { motion } from "framer-motion";

export const MonitorWaveform = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-white/50">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:20px_20px]" />

      {/* Axis Lines */}
      <div className="absolute left-8 right-8 bottom-12 h-px bg-black/10 border-t border-dashed border-black/30" />
      <div className="absolute top-12 bottom-12 left-12 w-px bg-black/10 border-r border-dashed border-black/30" />

      {/* Live Waveform Container */}
      <svg
        viewBox="0 0 300 200"
        className="w-full h-full max-w-[300px] max-h-[200px] preserve-3d"
        style={{ overflow: "visible" }}
      >
        {/* Animated Path */}
        <motion.path
          d="M 20 100 C 50 100, 70 100, 90 70 C 110 40, 130 160, 150 100 C 170 40, 190 130, 210 100 C 230 70, 250 100, 280 100"
          fill="none"
          stroke="#000000"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            // Infinite drawing effect
            strokeDasharray: ["0 1", "1 0", "1 0"],
            strokeDashoffset: [0, -100, -200],
          }}
          transition={{
            duration: 3,
            ease: "linear",
            repeat: Infinity,
          }}
        />

        {/* Pulse Dot at the 'Head' of the graph */}
        <motion.circle
          cx="280"
          cy="100"
          r="4"
          fill="#10B981"
          animate={{
            opacity: [0, 1, 0],
            scale: [1, 1.5, 1],
            boxShadow: "0 0 20px #10B981",
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Gradient Area Under Curve (Optional for depth) */}
        <motion.path
          d="M 20 100 C 50 100, 70 100, 90 70 C 110 40, 130 160, 150 100 C 170 40, 190 130, 210 100 C 230 70, 250 100, 280 100 L 280 180 L 20 180 Z"
          fill="rgba(16, 185, 129, 0.05)"
          stroke="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        />
      </svg>

      {/* Glitch Overlay for "Technical" feel */}
      <motion.div
        className="absolute inset-0 bg-neutral-900/5 mix-blend-overlay pointer-events-none"
        animate={{ opacity: [0, 0.1, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.05, 1] }}
      />
    </div>
  );
};
