"use client";

import { motion, useSpring, useMotionValue } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, memo } from "react";

// 1000x500 Coordinate Space
const NODES = [
  { id: "sf", x: 180, y: 180, label: "San Francisco", latency: "12ms" },
  { id: "ny", x: 290, y: 170, label: "New York", latency: "18ms" },
  { id: "lon", x: 480, y: 140, label: "London", latency: "24ms" },
  { id: "fra", x: 520, y: 150, label: "Frankfurt", latency: "26ms" },
  { id: "sin", x: 750, y: 300, label: "Singapore", latency: "85ms" },
  { id: "tok", x: 820, y: 180, label: "Tokyo", latency: "92ms" },
];

const CONNECTIONS = [
  { from: "sf", to: "ny" },
  { from: "ny", to: "lon" },
  { from: "lon", to: "fra" },
  { from: "fra", to: "sin" },
  { from: "sin", to: "tok" },
  { from: "tok", to: "sf" },
  { from: "ny", to: "fra" },
];

// Pre-calculate paths to avoid doing it on every render
const PRECALCULATED_PATHS = CONNECTIONS.map((conn) => {
  const start = NODES.find((n) => n.id === conn.from)!;
  const end = NODES.find((n) => n.id === conn.to)!;
  const midX = (start.x + end.x) / 2;
  const midY = (start.y + end.y) / 2 - 40;
  const pathD = `M${start.x},${start.y} Q${midX},${midY} ${end.x},${end.y}`;
  return { ...conn, pathD, key: `${conn.from}-${conn.to}` };
});

// MEMOIZED: Static Background Grid & Regions
const StaticMapLayer = memo(() => (
  <>
    <defs>
      <linearGradient id="packet-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
        <stop offset="50%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    {/* Abstract World Zones */}
    <g className="opacity-20 text-emerald-900 fill-current pointer-events-none">
      <path d="M 100 50 L 350 50 L 300 450 L 150 400 Z" />
      <path d="M 400 50 L 950 50 L 900 450 L 450 450 Z" />
    </g>

    {/* Static Lines */}
    <g className="pointer-events-none opacity-50">
      {PRECALCULATED_PATHS.map((conn) => (
        <path key={conn.key} d={conn.pathD} fill="none" stroke="#333" strokeWidth="1" />
      ))}
    </g>
  </>
));
StaticMapLayer.displayName = "StaticMapLayer";

// MEMOIZED: Active Packet Animations
const ActivePacketsLayer = memo(() => (
  <g className="pointer-events-none">
    {PRECALCULATED_PATHS.map((conn, i) => {
      // Mix of speeds: simple data vs priority traffic
      const isPriority = i % 2 === 0;
      return (
        <motion.path
          key={`packet-${i}`}
          d={conn.pathD}
          fill="none"
          stroke="url(#packet-gradient)"
          strokeWidth={isPriority ? 2 : 1.5}
          strokeLinecap="round"
          filter="url(#glow)"
          initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
          animate={{
            pathLength: [0.05, 0.2, 0.05],
            pathOffset: [0, 1],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: isPriority ? 1.5 + Math.random() : 3 + Math.random(),
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 2,
          }}
        />
      );
    })}
  </g>
));
ActivePacketsLayer.displayName = "ActivePacketsLayer";

// MAGNETIC NODE COMPONENT
const MagneticNode = ({
  node,
  isHovered,
  onHover,
  onLeave,
}: {
  node: (typeof NODES)[0];
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Magnetic physics: stiff spring for "weighty" feel
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  function handleMouseMove(event: React.MouseEvent<SVGGElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    // Calculate offset from center of the node
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    // Limit movement to avoid flying too far (max +/- 20px)
    const offsetX = Math.min(Math.max((event.clientX - centerX) / 2, -20), 20);
    const offsetY = Math.min(Math.max((event.clientY - centerY) / 2, -20), 20);

    x.set(offsetX);
    y.set(offsetY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    onLeave();
  }

  return (
    <g onMouseEnter={onHover} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="cursor-pointer group">
      {/* Ping Animation - Pure CSS or simplified Motion */}
      <motion.circle
        cx={node.x}
        cy={node.y}
        r="8"
        fill="none"
        stroke="#10b981"
        strokeWidth="1"
        initial={{ scale: 0.5, opacity: 1 }}
        animate={{ scale: 3, opacity: 0 }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* The Node Dot itself moves slightly with the magnet */}
      <motion.circle
        cx={node.x}
        cy={node.y}
        r="4"
        className="fill-emerald-500 transition-colors group-hover:fill-emerald-400"
        filter="url(#glow)"
        style={{ x: springX, y: springY }}
      />

      {/* Smart Tooltip - Springs towards cursor */}
      <foreignObject x={node.x - 60} y={node.y - 60} width="120" height="50" className="pointer-events-none overflow-visible">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.8,
          }}
          transition={{ duration: 0.2 }}
          style={{ x: springX, y: springY }} // Magnetic movement applied to tooltip too
          className="flex justify-center items-center h-full w-full"
        >
          <div className="bg-black/90 text-white text-[10px] px-3 py-1.5 rounded border border-emerald-500/50 font-mono shadow-[0_0_20px_rgba(16,185,129,0.4)] whitespace-nowrap backdrop-blur-md">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              {node.label} <span className="text-emerald-400 font-bold ml-1 border-l border-white/20 pl-2">{node.latency}</span>
            </div>
          </div>
        </motion.div>
      </foreignObject>
    </g>
  );
};

export default function InfrastructureMap() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <section className="w-full border-b border-black py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-4">Global Mesh</h2>
            <p className="font-mono text-sm text-neutral-500 uppercase tracking-widest">35 Regions / 99.99% Uptime</p>
          </div>

          <div className="flex gap-[-1px]">
            <Button variant="swiss" size="icon" className="rounded-none border-r-0 shadow-none">
              <Plus className="w-4 h-4" />
            </Button>
            <Button variant="swiss" size="icon" className="rounded-none shadow-none">
              <Minus className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Map Container */}
        <div className="relative w-full aspect-video md:aspect-[2.5/1] bg-neutral-950 border border-black group overflow-hidden rounded-md cursor-crosshair">
          {/* Base Grid - CSS Background (Hardware accelerated) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Holographic Container */}
          <div className="relative w-full h-full flex items-center justify-center p-8">
            <svg viewBox="0 0 1000 500" className="w-full h-full drop-shadow-2xl select-none">
              <StaticMapLayer />
              <ActivePacketsLayer />

              {/* Interactive Nodes */}
              {NODES.map((node) => (
                <MagneticNode
                  key={node.id}
                  node={node}
                  isHovered={hoveredNode === node.id}
                  onHover={() => setHoveredNode(node.id)}
                  onLeave={() => setHoveredNode(null)}
                />
              ))}
            </svg>

            {/* Status Overlay */}
            <div className="absolute top-6 left-8 flex items-center gap-3 pointer-events-none">
              <div className="px-3 py-1.5 bg-emerald-500/10 rounded-full border border-emerald-500/20 backdrop-blur-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] text-emerald-400 font-mono uppercase tracking-wider">Holographic Grid Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
