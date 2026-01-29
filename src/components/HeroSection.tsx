"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { HERO_DATA } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { OrbitalCommand } from "./graphics/OrbitalCommand";
import NoiseTexture from "./graphics/NoiseTexture";

export default function HeroSection() {
  const words = HERO_DATA.title.split(" ");

  return (
    <header className="relative w-full min-h-[90vh] flex flex-col items-center justify-center border-b border-black overflow-hidden pt-48 pb-24 bg-white/50">
      <NoiseTexture />

      {/* Background Decor */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <OrbitalCommand />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 flex flex-col items-center text-center gap-12">
        {/* Metric Pill & Status */}
        <div className="flex flex-col items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "backOut" }}
            className="flex items-center gap-3"
          >
            <Badge
              variant="outline"
              className="pl-2 pr-4 py-1.5 gap-3 border-black/10 bg-white/50 backdrop-blur-md rounded-none swiss-border"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-signal-green"></span>
              </span>
              <span className="text-xs font-mono uppercase tracking-widest-swiss text-neutral-600">{HERO_DATA.status}</span>
            </Badge>
            <Badge variant="secondary" className="font-mono text-[10px] tracking-tight bg-neutral-100 text-neutral-500">
              SERIES A FUNDED
            </Badge>
          </motion.div>
        </div>

        {/* Kinetic Typography Title */}
        <h1 className="text-6xl md:text-9xl font-bold leading-[0.85] tracking-tighter uppercase max-w-6xl flex flex-wrap justify-center gap-x-6 gap-y-2">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.8,
                delay: 0.15 + i * 0.1,
                ease: [0.215, 0.61, 0.355, 1], // easeOutCubic
              }}
              className="inline-block text-black"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl max-w-2xl font-body font-light leading-relaxed text-neutral-600 tracking-wide"
        >
          {HERO_DATA.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto"
        >
          <Button
            size="lg"
            className="min-w-[200px] gap-2 h-12 bg-black hover:bg-neutral-800 text-white rounded-none uppercase tracking-wide font-medium text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            {HERO_DATA.ctaPrimary}
            <ArrowRight className="w-4 h-4" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="min-w-[200px] gap-2 h-12 border-black/20 hover:bg-neutral-50 rounded-none uppercase tracking-wide font-medium text-sm text-black"
          >
            <FileText className="w-4 h-4" />
            {HERO_DATA.ctaSecondary}
          </Button>
        </motion.div>

        {/* Trust Signals - High Density */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 flex flex-col items-center gap-3"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">Backing & Infrastructure</span>
          <div className="flex items-center gap-8 grayscale opacity-60 hover:opacity-100 transition-opacity duration-500">
            <span className="text-sm font-bold font-sans tracking-tight">SEQUOIA</span>
            <div className="h-3 w-[1px] bg-neutral-300"></div>
            <span className="text-sm font-bold font-sans tracking-tight">LINEAR</span>
            <div className="h-3 w-[1px] bg-neutral-300"></div>
            <span className="text-sm font-bold font-sans tracking-tight">VERCEL</span>
          </div>
        </motion.div>
      </div>

      {/* Tech Markers - Aligned to Grid */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none">
        <div className="max-w-[1440px] mx-auto px-6 pb-6 flex justify-between items-end">
          <div className="font-mono text-[10px] opacity-40 hover:opacity-100 transition-opacity pointer-events-auto">
            <div className="flex flex-col gap-1">
              <span>{HERO_DATA.coord}</span>
              <span className="text-signal-green">sys_ready: true</span>
            </div>
          </div>
          <div className="font-mono text-[10px] opacity-40 hover:opacity-100 transition-opacity text-right pointer-events-auto">
            {HERO_DATA.version} <br />
            LATENCY: <span className="text-black font-bold">12ms</span>
          </div>
        </div>
      </div>
    </header>
  );
}
