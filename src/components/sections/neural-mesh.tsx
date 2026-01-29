"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Coordinates for "Active Nodes" (approximate SVG % positions)
const NODES = [
  { x: 20, y: 35, name: "SFO", delay: 0 },
  { x: 25, y: 38, name: "IAD", delay: 0.5 },
  { x: 48, y: 30, name: "LHR", delay: 1 },
  { x: 52, y: 32, name: "FRA", delay: 1.5 },
  { x: 80, y: 40, name: "HND", delay: 2 },
  { x: 75, y: 55, name: "SIN", delay: 2.5 },
  { x: 85, y: 80, name: "SYD", delay: 3 },
  { x: 30, y: 70, name: "GRU", delay: 3.5 },
];

export function NeuralMesh() {
  return (
    <section className="bg-zinc-950 py-24 md:py-32 relative overflow-hidden text-white border-y border-white/[0.1]">
      {/* Background Mesh (Optional grid) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
              The sun never sets on your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Neural Mesh.</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Deploy to 34 regions instantly. Our intelligent routing layer anticipates traffic spikes before they happen.
            </p>
          </motion.div>
        </div>

        {/* THE WORLD MAP (Abstract) */}
        <div className="relative w-full aspect-[2/1] max-w-5xl mx-auto">
          {/* Map Silhouette (Simplified Dots or SVG path) */}
          <svg viewBox="0 0 100 50" className="w-full h-full opacity-20">
            {/* Simplified Continents Path - Abstract */}
            <path
              d="M10,15 Q15,10 20,15 T30,25 T20,40 T10,30 Z M45,10 Q50,5 55,10 T60,20 T50,25 T45,15 Z M70,15 Q80,10 90,15 T95,30 T85,40 T75,30 Z"
              fill="currentColor"
              className="text-zinc-500"
            />
            {/* Note: In a real prod environment, using a proper D3 map or GeoJSON features would be better. 
                  For this "Vibe" component, we use the Nodes to define the shape. */}
          </svg>

          {/* Active Nodes */}
          {NODES.map((node, i) => (
            <motion.div
              key={node.name}
              className="absolute w-2 h-2"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: node.delay, type: "spring" }}
            >
              <div className="relative">
                <div className="absolute -inset-2 bg-emerald-500/20 rounded-full animate-ping" />
                <div className="w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_2px_rgba(52,211,153,0.5)]" />

                {/* Label */}
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: node.delay + 0.5 }}
                  className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] font-mono font-bold text-zinc-500 tracking-wider"
                >
                  {node.name}
                </motion.div>
              </div>

              {/* Connecting Lines (Simple) */}
              {i < NODES.length - 1 && (
                <svg className="absolute top-1 left-1 w-[200px] h-[100px] pointer-events-none opacity-20 overflow-visible">
                  <motion.path
                    d={`M0,0 Q${(NODES[i + 1].x - node.x) / 2},${NODES[i + 1].y - node.y - 10} ${(NODES[i + 1].x - node.x) * 4},${(NODES[i + 1].y - node.y) * 2}`} // Abstract curve
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-emerald-500"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: node.delay }}
                  />
                </svg>
              )}
            </motion.div>
          ))}
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 border-t border-white/[0.1] pt-12">
          {[
            { label: "PoPS Worldwide", value: "34" },
            { label: "Uptime SLA", value: "99.99%" },
            { label: "Global Latency", value: "<30ms" },
            { label: "Requests/Day", value: "1.2B+" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-mono font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
