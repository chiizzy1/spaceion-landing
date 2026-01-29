"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export const OrbitalShield = () => {
  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      {/* Central Shield */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <ShieldCheck className="w-16 h-16 stroke-1 text-black" />
      </motion.div>

      {/* Orbit Ring 1 */}
      <motion.div
        className="absolute inset-0 border border-black/10 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 -ml-1 -mt-1 w-2 h-2 bg-black rounded-full" />
      </motion.div>

      {/* Orbit Ring 2 (Counter) */}
      <motion.div
        className="absolute inset-4 border border-dashed border-black/20 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute bottom-0 left-1/2 -ml-1 -mb-1 w-2 h-2 bg-emerald-500 rounded-full" />
      </motion.div>
    </div>
  );
};

export const UptimeGraph = () => {
  return (
    <svg viewBox="0 0 100 40" className="w-full h-full opacity-20">
      {[...Array(20)].map((_, i) => (
        <motion.rect
          key={i}
          x={i * 5 + 1}
          y={20}
          width="3"
          height="10"
          fill="currentColor"
          initial={{ height: 10, y: 15 }}
          animate={{
            height: [10, 25, 8, 30, 10],
            y: [15, 7.5, 16, 5, 15],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.1,
            repeatType: "mirror",
          }}
        />
      ))}
    </svg>
  );
};
