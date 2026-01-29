"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Activity, Globe, Server, ShieldCheck, Terminal, Zap } from "lucide-react";

const SYSTEM_LOGS = [
  "Initializing core runtime...",
  "Connecting to global mesh (us-east-1)...",
  "Optimizing route latency...",
  "Route established: 12ms",
  "Allocating edge resources...",
  "Container spun up in 45ms",
  "Syncing state across regions...",
  "System healthy. Ready for traffic.",
  "Monitoring active threads...",
  "Auto-scaling triggers armed...",
];

export function InfraMonitor() {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      // Capture the value effectively before state update logic creates race conditions
      // But simpler: just check valid index relative to array length
      if (currentIndex < SYSTEM_LOGS.length) {
        const logEntry = SYSTEM_LOGS[currentIndex];
        if (logEntry) {
          setLogs((prev) => [...prev.slice(-4), logEntry]);
        }
        currentIndex++;
      } else {
        currentIndex = 0; // Loop the logs
        setLogs([]);
      }
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto rounded-xl border border-neutral-200 bg-white shadow-2xl overflow-hidden relative group">
      {/* Glossy Overlay */}
      <div className="absolute inset-0 bg-linear-to-tr from-white/50 via-white/0 to-white/20 pointer-events-none z-20" />

      {/* Header Bar */}
      <div className="h-10 border-b border-neutral-100 bg-neutral-50 flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <div className="h-4 w-px bg-neutral-200 mx-2" />
          <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider flex items-center gap-1">
            <ShieldCheck className="w-3 h-3" /> Spaceion_Runtime_v2.4
          </span>
        </div>
        <div className="flex items-center gap-3 text-[10px] font-mono text-neutral-400">
          <span className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            LIVE
          </span>
          <span>12ms LATENCY</span>
        </div>
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-100 h-[320px]">
        {/* Left: Global Mesh Status */}
        <div className="p-6 flex flex-col gap-4 relative overflow-hidden bg-neutral-50/30">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500 flex items-center gap-2">
              <Globe className="w-3 h-3" /> Global Mesh
            </h3>
            <span className="text-[10px] font-mono text-neutral-400">5 REGIONS</span>
          </div>

          {/* Abstract Map Visualization */}
          <div className="flex-1 relative flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              {/* Central Node */}
              <motion.div
                className="w-4 h-4 bg-black rounded-full shadow-[0_0_15px_rgba(0,0,0,0.2)]"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Satellite Nodes */}
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-neutral-400 rounded-full"
                  style={{
                    top: "50%",
                    left: "50%",
                  }}
                  animate={{
                    rotate: 360,
                    x: [Math.cos(i * 1.57) * 60, Math.cos(i * 1.57 + 3.14) * 60],
                    y: [Math.sin(i * 1.57) * 60, Math.sin(i * 1.57 + 3.14) * 60],
                  }}
                  transition={{
                    rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                    default: { duration: 4, repeat: Infinity, repeatType: "mirror", delay: i * 0.5 },
                  }}
                />
              ))}

              {/* Connecting Lines (SVG overlay could go here, omitting for simplicity/performance in first pass) */}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white border border-neutral-100 p-2 rounded shadow-sm">
              <div className="text-[9px] text-neutral-400 uppercase">Active Nodes</div>
              <div className="text-xl font-bold font-mono tracking-tighter">842</div>
            </div>
            <div className="bg-white border border-neutral-100 p-2 rounded shadow-sm">
              <div className="text-[9px] text-neutral-400 uppercase">Uptime</div>
              <div className="text-xl font-bold font-mono tracking-tighter text-emerald-600">99.99%</div>
            </div>
          </div>
        </div>

        {/* Middle: System Resources */}
        <div className="p-6 flex flex-col gap-6 relative bg-white">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500 flex items-center gap-2">
              <Activity className="w-3 h-3" /> Throughput
            </h3>
            <span className="text-[10px] font-mono text-neutral-400">REAL-TIME</span>
          </div>

          <div className="flex-1 flex flex-col justify-end gap-1">
            <div className="flex items-end justify-between gap-1 h-32 pl-1 pb-2 border-l border-b border-neutral-100">
              {[45, 60, 35, 70, 55, 80, 65, 90, 75, 50, 60, 85].map((h, i) => (
                <motion.div
                  key={i}
                  className="w-full bg-neutral-100 hover:bg-neutral-900 transition-colors duration-300 rounded-t-sm"
                  initial={{ height: "0%" }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 1, delay: i * 0.05 }}
                />
              ))}
            </div>
            <div className="flex justify-between text-[9px] font-mono text-neutral-400">
              <span>00:00</span>
              <span>00:15</span>
              <span>00:30</span>
              <span>00:45</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono border-t border-neutral-100 pt-3">
            <span className="text-neutral-400">Requests/sec:</span>
            <span className="font-bold">24,592</span>
            <span className="text-emerald-500 ml-auto">+12%</span>
          </div>
        </div>

        {/* Right: Terminal Logs */}
        <div className="p-6 flex flex-col gap-4 bg-neutral-900 text-neutral-400">
          <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500 flex items-center gap-2">
            <Terminal className="w-3 h-3" /> System Logs
          </h3>

          <div className="flex-1 font-mono text-[10px] flex flex-col gap-1 overflow-hidden">
            {logs.map((log, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex gap-2">
                <span className="text-neutral-600">{`>`}</span>
                <span
                  className={
                    log.includes("Error")
                      ? "text-red-400"
                      : log.includes("established") || log.includes("Ready")
                        ? "text-emerald-400"
                        : "text-neutral-300"
                  }
                >
                  {log}
                </span>
              </motion.div>
            ))}
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-2 h-4 bg-emerald-500/50 mt-1"
            />
          </div>

          <div className="pt-2 border-t border-neutral-800 flex justify-between items-center text-[9px]">
            <span>US-EAST-1</span>
            <div className="flex gap-1.5">
              <div className="w-1.5 h-1.5 bg-neutral-700 rounded-full" />
              <div className="w-1.5 h-1.5 bg-neutral-700 rounded-full" />
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
