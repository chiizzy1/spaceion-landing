"use client";

import { motion } from "framer-motion";

// Mini Mesh Icon
const MeshIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2">
    <motion.circle
      cx="12"
      cy="12"
      r="8"
      initial={{ scale: 0.8, opacity: 0.5 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
    />
    <path
      d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      strokeOpacity="0.5"
    />
  </svg>
);

export function GlobalMeshCard() {
  return (
    <div className="relative group bg-neutral-900 border border-neutral-800 p-6 h-full flex flex-col justify-between overflow-hidden text-white hover:shadow-2xl hover:shadow-black/20 transition-all duration-300">
      <div className="relative z-10">
        <div className="w-10 h-10 bg-neutral-800 rounded-md flex items-center justify-center mb-4 border border-neutral-700 group-hover:border-white/20 transition-colors">
          <MeshIcon />
        </div>
        <h3 className="text-xl font-display font-bold uppercase tracking-tight mb-2">Global Mesh</h3>
        <p className="text-sm text-neutral-400 font-light leading-relaxed">
          State is automatically replicated across 35 regions. Write to one node, read from any. Strong consistency guaranteed.
        </p>
      </div>

      <div className="mt-8 relative h-32 w-full flex items-center justify-center bg-neutral-900/50 rounded-sm overflow-hidden border border-neutral-800">
        <svg className="w-full h-full p-4" viewBox="0 0 300 100">
          {/* Geodesic Sphere */}
          <g transform="translate(150, 50)">
            {/* Rotating Wireframes */}
            {[0, 45, 90, 135].map((deg, i) => (
              <motion.ellipse
                key={i}
                rx="40"
                ry="15"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
                strokeOpacity="0.3"
                animate={{ rotate: 360 }}
                transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "center" }}
              />
            ))}
            {/* Core Node */}
            <circle r="4" fill="white" className="drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />

            {/* Satellite Nodes */}
            {[0, 120, 240].map((deg, i) => (
              <motion.circle
                key={`sat-${i}`}
                r="2"
                fill="white"
                animate={{ rotate: 360 }}
                style={{ offsetPath: `path("M 50 0 A 50 50 0 1 1 -50 0 A 50 50 0 1 1 50 0")` }}
                // Note: offset-path animation in framer-motion is tricky, reverting to transform
                transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: i }}
              />
            ))}

            {/* Simple Satellites Orbiting using transform */}
            <motion.circle
              r="2"
              fill="#10b981"
              initial={{ x: 30, y: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "center" }}
            />
            <motion.circle
              r="2"
              fill="#10b981"
              initial={{ x: 50, y: 0 }}
              animate={{ rotate: -360 }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "center" }}
            />
          </g>
        </svg>

        <div className="absolute top-2 right-3 flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
          <span className="font-mono text-[10px] text-neutral-400 font-bold tracking-wider">MESH SYNC: ACTIVE</span>
        </div>
      </div>
    </div>
  );
}
