"use client";

import { motion } from "framer-motion";

export const IntegrationFlow = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      {/* Animated Connection Lines */}
      <svg className="w-full h-full" overflow="visible">
        <defs>
          <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#10B981" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        {/* Dotted lines moving right */}
        {[1, 2, 3].map((i) => (
          <motion.line
            key={i}
            x1="0"
            y1={i * 30 + 10}
            x2="100%"
            y2={i * 30 + 10}
            stroke="black"
            strokeWidth="1"
            strokeDasharray="4 8"
            strokeOpacity="0.1"
            animate={{ strokeDashoffset: -24 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </svg>
    </div>
  );
};
