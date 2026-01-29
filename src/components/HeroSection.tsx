"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { HERO_DATA } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { OrbitalCommand } from "./graphics/OrbitalCommand";

export default function HeroSection() {
  return (
    <header className="relative w-full min-h-[85vh] flex flex-col items-center justify-center border-b border-black overflow-hidden pt-32 pb-24">
      {/* Background Decor */}
      <OrbitalCommand />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 flex flex-col items-center text-center gap-10">
        {/* Status Pill */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Badge variant="status" className="pl-2 pr-4 py-1.5 gap-3 border border-black rounded-full">
            <span className="w-2 h-2 rounded-full bg-signal-green animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest">{HERO_DATA.status}</span>
          </Badge>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tighter uppercase max-w-5xl whitespace-pre-line"
        >
          {HERO_DATA.title.replace(/ /g, "\n")}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl max-w-2xl font-light leading-relaxed text-gray-600"
        >
          {HERO_DATA.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto"
        >
          <Button size="lg" className="min-w-[200px] gap-2 group">
            {HERO_DATA.ctaPrimary}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button variant="outline" size="lg" className="min-w-[200px] gap-2">
            <FileText className="w-4 h-4" />
            {HERO_DATA.ctaSecondary}
          </Button>
        </motion.div>
      </div>

      {/* Tech Markers */}
      <div className="absolute bottom-0 left-0 p-6 font-mono text-xs hidden md:block opacity-50">{HERO_DATA.coord}</div>
      <div className="absolute bottom-0 right-0 p-6 font-mono text-xs hidden md:block opacity-50">{HERO_DATA.version}</div>
    </header>
  );
}
