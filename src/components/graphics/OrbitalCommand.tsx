"use client";

import { motion } from "framer-motion";

export const OrbitalCommand = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none">
      <svg className="absolute w-full h-full opacity-[0.15]" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
        {/* Orbital Rings */}
        <motion.circle
          cx="500"
          cy="500"
          r="300"
          stroke="black"
          strokeWidth="1"
          fill="none"
          strokeDasharray="4 4"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle
          cx="500"
          cy="500"
          r="450"
          stroke="black"
          strokeWidth="0.5"
          fill="none"
          initial={{ rotate: 0 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating Satellites */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ originX: "500px", originY: "500px" }}
        >
          <circle cx="500" cy="200" r="4" fill="black" />
          <line x1="500" y1="200" x2="500" y2="220" stroke="black" strokeWidth="0.5" />
        </motion.g>

        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          style={{ originX: "500px", originY: "500px" }}
        >
          <circle cx="800" cy="500" r="6" fill="transparent" stroke="black" strokeWidth="1" />
        </motion.g>
      </svg>

      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
    </div>
  );
};
