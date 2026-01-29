"use client";

import { motion } from "framer-motion";

export const GlobalSync = () => {
  return (
    <div className="absolute inset-0 w-full h-full bg-neutral-50 flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-size-[20px_20px]" />

      <div className="relative w-48 h-48 flex items-center justify-center">
        {/* Central Node */}
        <motion.div
          className="relative w-12 h-12 bg-black rounded-full z-10 flex items-center justify-center"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-4 h-4 bg-emerald-500 rounded-full" />
        </motion.div>

        {/* Orbit Ring 1 */}
        <motion.div
          className="absolute inset-8 border border-neutral-300 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-0 left-1/2 -ml-1.5 -mt-1.5 w-3 h-3 bg-neutral-400 rounded-full" />
          <div className="absolute bottom-0 right-1/2 -mr-1.5 -mb-1.5 w-3 h-3 bg-neutral-400 rounded-full" />
        </motion.div>

        {/* Orbit Ring 2 */}
        <motion.div
          className="absolute inset-0 border border-neutral-300 rounded-full border-dashed"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-1/4 left-0 w-3 h-3 bg-black rounded-full" />
        </motion.div>

        {/* Sync Pulses - Connecting lines */}
        <svg
          className="absolute inset-0 w-full h-full animate-spin-slow pointer-events-none"
          style={{ animationDuration: "60s" }}
        >
          <line x1="50%" y1="50%" x2="50%" y2="0%" stroke="black" strokeWidth="1" strokeOpacity="0.1" />
          <line x1="50%" y1="50%" x2="100%" y2="50%" stroke="black" strokeWidth="1" strokeOpacity="0.1" />
          <line x1="50%" y1="50%" x2="0%" y2="100%" stroke="black" strokeWidth="1" strokeOpacity="0.1" />
        </svg>
      </div>

      <div className="absolute bottom-4 right-4 text-[10px] font-mono uppercase text-neutral-400 text-right">
        SYNC_STATE: OK
        <br />
        LATENCY: 12ms
      </div>
    </div>
  );
};
