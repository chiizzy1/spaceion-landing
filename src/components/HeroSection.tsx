"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { HERO_DATA } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { OrbitalCommand } from "./graphics/OrbitalCommand";
import NoiseTexture from "./graphics/NoiseTexture";
import { InfraMonitor } from "./hero/InfraMonitor";
import TrustBar from "./TrustBar";

export default function HeroSection() {
  const words = HERO_DATA.title.split(" ");
  // Split title for the two-line effect if needed, or keep as is.
  // Using the original data but we want to break it nicely.

  return (
    <header className="relative w-full min-h-screen flex flex-col items-center justify-start border-b border-neutral-200 overflow-hidden pt-36 pb-32 bg-white">
      <NoiseTexture />

      {/* Technical Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Background Decor */}
      <div className="absolute top-0 inset-x-0 h-[600px] flex items-center justify-center opacity-10 pointer-events-none">
        <OrbitalCommand />
      </div>

      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 flex flex-col items-center text-center gap-12">
        {/* Metric Pill & Status */}
        <div className="flex flex-col items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "backOut" }}
            className="flex items-center gap-3"
          >
            <Badge variant="outline" className="gap-3 border-neutral-300 bg-white/80 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-black font-bold">{HERO_DATA.status}</span>
            </Badge>
            <Badge
              variant="secondary"
              className="font-mono text-[10px] tracking-tight bg-neutral-100 text-neutral-800 rounded-md border border-neutral-200 font-bold"
            >
              SERIES A FUNDED
            </Badge>
          </motion.div>
        </div>

        {/* Kinetic Typography Title */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.9] tracking-tighter text-black uppercase max-w-7xl flex flex-wrap justify-center gap-x-6">
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
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg md:text-xl max-w-2xl font-sans font-medium leading-relaxed text-neutral-600 tracking-wide"
        >
          {HERO_DATA.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Button
            size="lg"
            variant="holographic"
            className="min-w-[180px] h-12 rounded-md uppercase tracking-wide font-medium text-sm"
          >
            {HERO_DATA.ctaPrimary}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="min-w-[180px] h-12 border-neutral-300 hover:bg-neutral-50 hover:border-neutral-400 rounded-md uppercase tracking-wide font-medium text-sm text-black bg-white"
          >
            <FileText className="w-4 h-4 mr-2" />
            {HERO_DATA.ctaSecondary}
          </Button>
        </motion.div>

        {/* Trust Signals */}
        <TrustBar />

        {/* VISUAL ANCHOR: Infrastructure Monitor */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "circOut" }}
          className="w-full mt-12"
        >
          <InfraMonitor />
        </motion.div>
      </div>

      {/* Tech Markers - Aligned to Grid */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none">
        <div className="max-w-[1440px] mx-auto px-6 pb-6 flex justify-between items-end text-[10px] font-mono text-neutral-600 font-bold">
          <div className="flex gap-8">
            <span>{HERO_DATA.coord}</span>
            <span className="text-emerald-700">SYSTEM_READY</span>
          </div>

          <div className="text-right">
            <span>Spaceion Universal Runtime v1.0.4</span>
          </div>
        </div>
      </div>
    </header>
  );
}
