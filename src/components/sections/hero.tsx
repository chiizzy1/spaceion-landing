"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden border-b border-black/[0.08] bg-white pt-16">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container relative z-10 mx-auto flex flex-col items-center px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8 flex items-center gap-2 rounded-full bg-black/[0.03] px-3 py-1 text-xs font-medium text-black ring-1 ring-inset ring-black/[0.08]"
        >
          <span className="flex h-1.5 w-1.5 rounded-full bg-green-500" />
          <span>v2.0 is now live</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="max-w-4xl text-5xl font-bold tracking-tighter text-black sm:text-7xl lg:text-8xl"
        >
          The Universal Runtime for <span className="text-zinc-500">AI Agents.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="mt-6 max-w-2xl text-lg text-zinc-500 sm:text-xl"
        >
          Deploy autonomous agents to any cloud in seconds.
          <br className="hidden sm:block" />
          Zero config. Global edge network. Millisecond cold starts.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              href="/deploy"
              className="group flex h-12 items-center gap-2 rounded-full bg-black px-8 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
            >
              Start Deploying
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              href="/docs"
              className="flex h-12 items-center rounded-full border border-black/[0.1] bg-white px-8 text-sm font-medium text-black transition-colors hover:bg-zinc-50"
            >
              Read Documentation
            </Link>
          </motion.div>
        </motion.div>

        {/* Visual / Floating Code */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-20 w-full max-w-5xl"
        >
          <div className="relative overflow-hidden rounded-xl border border-black/[0.08] bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)]">
            {/* Header */}
            <div className="flex items-center gap-2 border-b border-black/[0.08] bg-zinc-50/50 px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-black/10" />
                <div className="h-3 w-3 rounded-full bg-black/10" />
                <div className="h-3 w-3 rounded-full bg-black/10" />
              </div>
              <div className="ml-4 flex items-center gap-2 rounded-md bg-white px-2 py-1 text-xs font-medium text-zinc-500 shadow-sm ring-1 ring-black/[0.05]">
                <Terminal className="h-3 w-3" />
                agent-config.ts
              </div>
            </div>
            {/* Body */}
            <div className="flex overflow-hidden bg-white">
              {/* Line Numbers */}
              <div className="border-r border-black/[0.08] bg-zinc-50/30 py-4 px-3 text-right font-mono text-sm text-zinc-300 select-none">
                1<br />2<br />3<br />4<br />5<br />6<br />7
              </div>
              {/* Code */}
              <div className="flex-1 overflow-x-auto py-4 px-4 text-left font-mono text-sm">
                <pre className="text-zinc-800">
                  <span className="text-purple-600">import</span> {"{ Agent }"} <span className="text-purple-600">from</span>{" "}
                  <span className="text-green-600">'@spaceion/sdk'</span>;
                  <br />
                  <br />
                  <span className="text-purple-600">export default new</span> <span className="text-blue-600">Agent</span>({"{ "}
                  <br />
                  {"  "}name: <span className="text-green-600">'background-processor'</span>,
                  <br />
                  {"  "}runtime: <span className="text-green-600">'edge-global'</span>,
                  <br />
                  {"  "}isolation: <span className="text-blue-600">true</span>,
                  <br />
                  {"}"});
                </pre>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
