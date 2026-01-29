"use client";

import { motion } from "framer-motion";
import { Github, Slack, MessageSquare, Database, Cloud, Terminal, Cpu, Globe, Shield, Box, Layers, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const INTEGRATIONS = [
  { name: "GitHub", icon: Github, category: "Code" },
  { name: "Slack", icon: Slack, category: "Alerts" },
  { name: "Linear", icon: Layers, category: "Project" },
  { name: "Vercel", icon: Cloud, category: "Deploy" },
  { name: "Supabase", icon: Database, category: "Data" },
  { name: "Discord", icon: MessageSquare, category: "Community" },
  { name: "Docker", icon: Box, category: "Container" },
  { name: "Kubernetes", icon: Globe, category: "Orchestration" },
];

export function Integrations() {
  return (
    <section className="bg-zinc-50 py-24 md:py-32 border-b border-black/[0.08]">
      <div className="container mx-auto px-6">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/[0.1] text-xs font-mono uppercase tracking-widest text-zinc-500 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Ecosystem Ready
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-black mb-6">
            Connects with your <br className="hidden md:block" />
            entire stack instantly.
          </h2>
          <p className="text-xl text-zinc-500">
            Native bindings for the tools you use every day. No webhooks to manage. Just pure signal.
          </p>
        </div>

        {/* The BENTO GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {INTEGRATIONS.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, type: "spring", stiffness: 200 }}
              whileHover={{ y: -4, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
              className="group relative flex flex-col items-center justify-center aspect-square bg-white border border-black/[0.08] rounded-2xl hover:border-black/[0.3] transition-colors"
            >
              {/* Active Dot */}
              <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-zinc-200 group-hover:bg-emerald-500 transition-colors duration-300" />

              {/* Icon */}
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-emerald-100 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                <tool.icon
                  className="relative w-10 h-10 text-zinc-400 group-hover:text-black transition-colors duration-300"
                  strokeWidth={1.5}
                />
              </div>

              {/* Label */}
              <span className="font-medium text-zinc-500 group-hover:text-black transition-colors">{tool.name}</span>
              <span className="text-[10px] uppercase tracking-wider text-zinc-300 mt-1 font-mono group-hover:text-emerald-600 transition-colors">
                {tool.category}
              </span>

              {/* Decorative "Circuit" Lines (Corner) */}
              <svg
                className="absolute bottom-0 left-0 w-12 h-12 text-zinc-100 group-hover:text-zinc-200 transition-colors opacity-0 group-hover:opacity-100"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path d="M0 48 V 24 Q 24 24 24 0" stroke="currentColor" strokeWidth="1" fill="none" />
              </svg>
            </motion.div>
          ))}

          {/* "And More" Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, type: "spring" }}
            className="col-span-2 md:col-span-4 h-24 mt-4 bg-zinc-900 rounded-2xl flex items-center justify-between px-8 text-white relative overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_3s_infinite]" />

            <div className="relative z-10 flex items-center gap-4">
              <div className="p-2 bg-white/10 rounded-lg">
                <Terminal className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Build your own integration</h3>
                <p className="text-zinc-400 text-sm">Use our MCP-compatible SDK &rarr;</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
