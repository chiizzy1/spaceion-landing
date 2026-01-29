"use client";

import { motion } from "framer-motion";

export const ThroughputMatrix = () => {
  return (
    <div className="absolute inset-0 w-full h-full bg-neutral-50 overflow-hidden flex flex-col justify-center gap-6 px-8">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-size-[20px_20px]" />

      {/* Data Pipelines */}
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="relative w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
          {/* Base Track */}
          <div className="absolute inset-0 opacity-20 bg-neutral-300" />

          {/* Quick Packet */}
          <motion.div
            className="absolute top-0 bottom-0 bg-black w-12 rounded-full"
            initial={{ x: "-100%" }}
            animate={{ x: "400%" }}
            transition={{
              duration: 2 - i * 0.3, // Varying speeds
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          />

          {/* Slow Packet */}
          <motion.div
            className="absolute top-0 bottom-0 bg-emerald-500 w-4 rounded-full opacity-60"
            initial={{ x: "-100%" }}
            animate={{ x: "400%" }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.2,
            }}
          />
        </div>
      ))}

      {/* Label */}
      <div className="absolute bottom-4 left-4 text-[10px] font-mono uppercase text-neutral-400">PIPELINE_ACTV // 45.2 TB/s</div>
    </div>
  );
};
