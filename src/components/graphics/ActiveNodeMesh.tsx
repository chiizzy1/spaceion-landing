"use client";

import { motion } from "framer-motion";
import { MESH_DATA } from "@/data/mockData";

export const ActiveNodeMesh = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
        {/* Connection Lines (Dashed) */}
        {MESH_DATA.locations.map((loc, i) =>
          MESH_DATA.locations.map((target, j) => {
            if (i >= j) return null; // Avoid duplicate lines
            return (
              <motion.line
                key={`line-${i}-${j}`}
                x1={loc.x}
                y1={loc.y}
                x2={target.x}
                y2={target.y}
                stroke="black"
                strokeWidth="0.1"
                strokeDasharray="1 1"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.3 }}
                transition={{ duration: 1.5, delay: i * 0.2 }}
              />
            );
          }),
        )}

        {/* Nodes */}
        {MESH_DATA.locations.map((loc, i) => (
          <motion.g
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", delay: i * 0.1 }}
          >
            {/* Pulse Effect */}
            <motion.circle
              cx={loc.x}
              cy={loc.y}
              r="2"
              fill="rgba(16, 185, 129, 0.2)"
              animate={{ r: [2, 4, 2], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
            />
            {/* Core Node */}
            <circle cx={loc.x} cy={loc.y} r="0.8" fill="black" />

            {/* Label Line */}
            <line x1={loc.x} y1={loc.y} x2={loc.x} y2={loc.y - 3} stroke="black" strokeWidth="0.1" />
            <rect x={loc.x - 2} y={loc.y - 4.5} width="4" height="1.5" fill="black" />
          </motion.g>
        ))}
      </svg>
    </div>
  );
};
