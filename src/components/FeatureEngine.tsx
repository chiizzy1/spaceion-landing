"use client";

import { motion } from "framer-motion";
import { LatencyCard } from "./features/LatencyCard";
import { ThroughputCard } from "./features/ThroughputCard";
import { GlobalMeshCard } from "./features/GlobalMeshCard";

export default function FeatureEngine() {
  return (
    <section className="w-full bg-neutral-50 py-24 border-b border-neutral-200">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Section Header - Core Capabilities */}
        <div className="mb-16 max-w-2xl">
          <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-2 block">Core Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-6">
            Engineered for <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-neutral-500 to-black">High Density.</span>
          </h2>
          <p className="text-lg font-light text-neutral-600 leading-relaxed">
            Spaceion isn't just a platform; it's a physics engine for your compute. Designed to handle the distinct requirements
            of autonomous agent workloads.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-auto lg:h-[400px]">
          {/* Card 1: Engineered Latency */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <LatencyCard />
          </motion.div>

          {/* Card 2: High Throughput */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ThroughputCard />
          </motion.div>

          {/* Card 3: Global Mesh Interactive (Holographic) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 lg:col-span-1"
          >
            <GlobalMeshCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
