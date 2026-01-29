"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Simplified World Map Path (Mercator-ish)
const WORLD_MAP_PATH =
  "M156.4,117.8c-1.6-0.7-3.9-1.9-4.2-2.3c-0.3-0.4-0.8-0.3-1.6,0.3c-1.3,1-2.9,1.6-4.2,1.6c-0.8,0-1.6-0.3-1.7-0.7 c-0.1-0.4-1-1.3-2-2c-1.8-1.2-1.9-1.5-0.6-2.6c0.7-0.6,1-1.5,0.6-2c-0.7-1.1,0.3-3.9,1.4-3.9c0.4,0,0.4-0.6,0-1.3\n\t\t\t\tc-0.7-1.3-0.4-2.2,0.7-2.2c0.7,0,1.2-0.8,1.2-1.9c0-1.6,0.5-2.2,1.7-2.2c0.8,0,1.5-0.6,1.5-1.3c0-0.7,0.7-1.3,1.5-1.3\n\t\t\t\tc1.8,0,1.8-0.6,0-1.8c-1.2-0.8-1.5-1.5-1-2.1c0.8-1,0.5-1.1-1.2-0.6c-2.4,0.7-2.6,0.6-2.6-1.5c0-1.3-0.5-1.9-1.5-1.9\n\t\t\t\tc-1.5,0-1.6-0.3-0.6-1.5c0.7-0.9,0.7-1.9,0-2.3c-1.5-0.9-1.5-1-0.4-2.6c0.6-0.9,0.7-2.5,0.1-3.6c-1.1-1.8-0.9-2.1,1.1-1.6\n\t\t\t\tc3.3,0.8,4.2-0.6,1.4-2.2c-2.4-1.3-2.6-2.5-0.3-2.5c1.4,0,1.8-0.6,1.2-1.8c-0.6-1-0.3-2.1,0.8-2.6c1.8-0.9,1.6-2.4-0.4-3.5\n\t\t\t\tc-1.3-0.8-2.2-2.1-1.9-2.9c0.7-1.7,4.8-2.6,4.8-1c0,0.6,0.8,0.7,1.8,0.1c1.5-0.9,1.8-0.7,1.8,1.3c0,1.3,0.7,2.3,1.6,2.3\n\t\t\t\tc0.9,0,1.6,0.7,1.6,1.5c0,0.8,0.7,1.5,1.6,1.5c0.8,0,1.6-0.6,1.7-1.3c0.1-0.7,1-1.3,2-1.3c1.7,0,1.9-0.5,0.7-1.9\n\t\t\t\tc-0.7-0.9-0.7-2.4,0.1-3.3c1.2-1.4,1.1-1.5-0.9-1.5c-1.3,0-2.6-0.6-2.9-1.3c-0.3-0.7-1.6-1.3-2.9-1.3c-1.8,0-2.5-0.7-2.9-2.8\n\t\t\t\tc-0.3-1.6-1.2-2.9-2-2.9c-0.8,0-1.5-0.6-1.5-1.3c0-1.8-1.5-1.9-3.2-0.2c-1.2,1.2-2.7,1.7-3.4,1.2c-0.7-0.5-2.8-0.3-4.6,0.6\n\t\t\t\tc-3.1,1.5-3.5,1.4-5.2-1.2c-1-1.5-2.2-2.2-2.7-1.5c-0.5,0.7-2.5,0.8-4.5,0.3c-2.9-0.8-3.7-0.6-4.5,1.2c-0.5,1.2-2.2,2.2-3.8,2.2\n\t\t\t\tc-2.1,0-2.9,0.7-2.9,2.4c0,1.3-0.7,2.4-1.5,2.4c-0.8,0-1.5,0.7-1.5,1.5c0,1.5-1.6,2.3-3.1,1.5c-0.9-0.5-2.6-0.3-3.7,0.3\n\t\t\t\tc-1.1,0.6-2.9,1.1-4,1.1c-1.6,0-2,0.6-2,3.1c0,1.7-0.6,3.4-1.3,3.7c-0.7,0.3-1.3,1.9-1.3,3.6c0,2.5-0.5,3.2-2.1,3.2\n\t\t\t\tc-1.1,0-2.3,0.9-2.6,2c-0.3,1.1-1.4,2-2.4,2c-1,0-1.9,0.8-1.9,1.8c0,1,0.6,2.1,1.3,2.5c0.7,0.3,1.3,1.8,1.3,3.3\n\t\t\t\tc0,1.5-0.6,3.1-1.3,3.5c-0.7,0.4-1.3,1.9-1.3,3.2c0,2.1-0.9,2.8-4.3,3.2c-3.1,0.4-4,1.1-3.6,2.8c0.2,0.9,0,1.7-0.5,1.7\n\t\t\t\tc-0.5,0-0.7,0.9-0.4,2c1.2,3.5-1.9,3.5-3.3,0c-0.6-1.5-1.5-1.7-3.9-1.1c-1.6,0.4-3.2,1.2-3.5,1.8c-0.3,0.6-1.6,0.9-2.9,0.6\n\t\t\t\tc-2.4-0.6-2.5-0.5-0.7,1.3c2.2,2.2,1.8,2.7-2.6,3.1c-2.4,0.2-3.7,0.9-3.7,1.8c0,0.8-0.7,1.5-1.6,1.5c-3.4,0-3.3,2,0.2,3.8\n\t\t\t\tc2.2,1.1,2.5,1.8,1.2,2.7c-0.9,0.6-1.3,1.8-0.9,2.8c0.4,1-0.1,1.8-1.1,1.8c-1.4,0-1.6,0.6-0.8,2c0.6,1,0.4,1.8-0.6,1.8\n\t\t\t\tc-1.9,0-1.7,3.1,0.3,3.8c0.9,0.3,1.9,1.3,2.2,2.2c0.3,0.9,1.5,1.6,2.6,1.6c1.1,0,3.1,1,4.5,2.2c1.4,1.2,3.4,2.2,4.5,2.2\n\t\t\t\tc1.1,0,3.3,1.3,5,2.9c3.9,3.8,5.4,4,13.8,2.2c4.1-0.9,8-1,8.6-0.2c0.6,0.8,4.2,1.5,8,1.5c3.8,0,8.3,0.7,10,1.5\n\t\t\t\tc1.7,0.8,3.9,1.5,4.9,1.5c1,0,3.6,1.3,5.8,2.9c3.6,2.6,4.3,2.7,6.4,1.2c1.3-0.9,2.9-1.7,3.6-1.7c0.7,0,3.2-1.7,5.5-3.8\n\t\t\t\tc3.7-3.4,4.6-3.7,6.8-2.3c1.4,0.9,4.4,1.6,6.7,1.6s4.7,0.7,5.3,1.6c0.6,0.9,2.4,1.6,4,1.6c1.6,0,3.9,0.8,5.1,1.8\n\t\t\t\tc1.2,1,3.4,1.8,4.9,1.8c1.5,0,3.9,1.1,5.2,2.4c1.3,1.3,2.4,1.9,2.4,1.3c0-0.6,1.2-0.5,2.7,0.2c1.5,0.7,3.6,1.3,4.7,1.3\n\t\t\t\tc1.1,0,2.1,0.7,2.2,1.6c0.1,0.9,0.8,1.6,1.5,1.6c0.7,0,1.3,0.8,1.3,1.8c0,1,0.5,1.8,1.1,1.8c0.6,0,1.1-1.7,1.1-3.8\n\t\t\t\tc0-2.6,0.5-3.8,1.5-3.8c0.8,0,1.5-0.6,1.5-1.3c0-0.7,0.9-1.3,2-1.3c1.1,0,2-0.6,2-1.3c0-0.7,0.8-1.3,1.8-1.3c1,0,3.1-1,4.7-2.2\n\t\t\t\tc1.6-1.2,3.8-2.2,4.9-2.2c1.1,0,2-0.6,2-1.4c0-0.8,0.7-1.4,1.5-1.4c0.8,0,1.5-0.6,1.5-1.4c0-0.8,1.7-3.3,3.8-5.5\n\t\t\t\tc2.1-2.2,4.4-4,5.1-4c0.7,0,3-1.6,5.1-3.6c2.1-2,5.2-4.3,6.9-5.1c1.7-0.8,3.1-2.2,3.1-3.1c0-0.9,0.8-2.2,1.8-2.9\n\t\t\t\tC157.9,122.1,158,118.5,156.4,117.8z";

interface Node {
  id: string;
  x: number;
  y: number;
  label: string;
  latency: string;
}

const NODES: Node[] = [
  { id: "sf", x: 60, y: 70, label: "San Francisco", latency: "12ms" },
  { id: "ny", x: 130, y: 65, label: "New York", latency: "18ms" },
  { id: "lon", x: 230, y: 50, label: "London", latency: "24ms" },
  { id: "fra", x: 250, y: 55, label: "Frankfurt", latency: "26ms" },
  { id: "sin", x: 420, y: 110, label: "Singapore", latency: "85ms" },
  { id: "tok", x: 460, y: 75, label: "Tokyo", latency: "92ms" },
];

const CONNECTIONS = [
  { from: "sf", to: "ny" },
  { from: "ny", to: "lon" },
  { from: "lon", to: "fra" },
  { from: "fra", to: "sin" },
  { from: "sin", to: "tok" },
  { from: "tok", to: "sf" }, // Pacific route
  { from: "ny", to: "fra" }, // Direct Atlantic
];

export function GlobalMeshInteractive() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <div className="relative w-full h-[400px] bg-white rounded-xl overflow-hidden border border-neutral-200">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative w-full h-full flex items-center justify-center p-8">
        <svg viewBox="0 0 540 280" className="w-full h-full text-neutral-200 drop-shadow-xl">
          <defs>
            <pattern id="dot-pattern" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" className="text-neutral-300 fill-current" />
            </pattern>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
              <stop offset="50%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Map Base - Filled with Dots */}
          <path d={WORLD_MAP_PATH} fill="url(#dot-pattern)" stroke="none" className="opacity-50" />

          {/* Map Outline - Subtle */}
          <path d={WORLD_MAP_PATH} fill="none" stroke="currentColor" strokeWidth="0.5" className="text-neutral-300" />

          {/* Connections & Packets */}
          {CONNECTIONS.map((conn, i) => {
            const start = NODES.find((n) => n.id === conn.from)!;
            const end = NODES.find((n) => n.id === conn.to)!;

            // Simple logic to curb lines - simulating great circle roughly
            const midX = (start.x + end.x) / 2;
            const midY = (start.y + end.y) / 2 - 20; // Arch up

            const pathD = `M${start.x},${start.y} Q${midX},${midY} ${end.x},${end.y}`;

            return (
              <g key={i}>
                {/* Static Line */}
                <path d={pathD} fill="none" stroke="#e5e5e5" strokeWidth="1" />

                {/* Traveling Packet */}
                <motion.path
                  d={pathD}
                  fill="none"
                  stroke="url(#line-gradient)"
                  strokeWidth="2"
                  initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
                  animate={{
                    pathLength: [0.1, 0.3, 0.1],
                    pathOffset: [0, 1],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: Math.random() * 2, // Staggered start
                  }}
                />
              </g>
            );
          })}

          {/* Key Nodes */}
          {NODES.map((node) => (
            <g
              key={node.id}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              className="cursor-pointer group"
            >
              {/* Pulsing Ring */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r="8"
                fill="none"
                stroke="#10b981"
                strokeWidth="1"
                initial={{ scale: 0.5, opacity: 1 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Core Dot */}
              <circle
                cx={node.x}
                cy={node.y}
                r="3"
                className="fill-neutral-900 group-hover:fill-emerald-500 transition-colors duration-200"
              />

              {/* Tooltip Label (SVG overlay) */}
              <foreignObject x={node.x - 50} y={node.y - 40} width="100" height="40">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: hoveredNode === node.id ? 1 : 0,
                    y: hoveredNode === node.id ? 0 : 10,
                  }}
                  className="flex flex-col items-center justify-center"
                >
                  <div className="bg-neutral-900 text-white text-[9px] px-2 py-1 rounded shadow-lg whitespace-nowrap border border-neutral-700 font-mono tracking-tight">
                    {node.label} <span className="text-emerald-400 ml-1">{node.latency}</span>
                  </div>
                </motion.div>
              </foreignObject>
            </g>
          ))}
        </svg>

        {/* Global Overlay Stats */}
        <div className="absolute top-4 left-6">
          <h3 className="text-sm font-semibold text-neutral-900 font-display">GLOBAL MESH</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs text-neutral-500 font-mono">SYSTEM NORMAL</span>
          </div>
        </div>

        <div className="absolute top-4 right-6 text-right">
          <div className="text-xs text-neutral-400 font-mono">LATENCY (P99)</div>
          <div className="text-lg font-bold text-neutral-900 font-display">24ms</div>
        </div>
      </div>
    </div>
  );
}
