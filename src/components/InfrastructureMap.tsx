"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { MESH_DATA } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { ActiveNodeMesh } from "./graphics/ActiveNodeMesh";

export default function InfrastructureMap() {
  return (
    <section className="w-full border-b border-black py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">{MESH_DATA.title}</h2>
            <p className="font-mono text-sm text-neutral-500 uppercase tracking-widest">{MESH_DATA.subtitle}</p>
          </div>

          {/* Zoom Controls */}
          <div className="flex gap-[-1px]">
            <Button
              variant="swiss"
              size="icon"
              className="rounded-none border-r-0 hover:translate-x-0 hover:translate-y-0 hover:shadow-none shadow-none"
            >
              <Plus className="w-4 h-4" />
            </Button>
            <Button
              variant="swiss"
              size="icon"
              className="rounded-none hover:translate-x-0 hover:translate-y-0 hover:shadow-none shadow-none"
            >
              <Minus className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Map Container */}
        <div className="relative w-full aspect-video md:aspect-[2.5/1] bg-neutral-50 border border-black group overflow-hidden">
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-10 pointer-events-none" />

          {/* World Map Placeholder (CSS or SVG) */}
          <div className="absolute inset-0 flex items-center justify-center text-neutral-200 font-bold text-6xl md:text-9xl select-none opacity-20 tracking-tighter">
            WORLD MESH
          </div>

          <ActiveNodeMesh />
        </div>
      </div>
    </section>
  );
}
