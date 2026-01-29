"use client";

import { Activity, ShieldCheck, ArrowRight } from "lucide-react";
import { BENTO_DATA } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { OrbitalShield, UptimeGraph } from "./graphics/Spotlights";

export default function BentoGrid() {
  return (
    <section className="w-full max-w-[1440px] mx-auto py-32 px-6">
      <div className="flex flex-col mb-12 items-start">
        <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter uppercase mb-2">System Metrics</h2>
        <div className="h-px w-full bg-black/10 mt-4 relative">
          <div className="absolute left-0 top-0 h-1 w-12 bg-black"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-px bg-black/10 border border-black/10 swiss-border">
        {/* Metric Card */}
        <div className="md:col-span-2 p-12 flex flex-col justify-between min-h-[340px] bg-white group relative overflow-hidden transition-all hover:z-10 hover:shadow-2xl hover:shadow-black/5">
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-[9px] font-mono tracking-widest text-neutral-400">ID: MTR-01</span>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-32 opacity-10 pointer-events-none text-emerald-500 mixture-blend-multiply">
            <UptimeGraph />
          </div>

          <div className="flex justify-between items-start relative z-10">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs uppercase text-neutral-500 tracking-widest group-hover:text-black transition-colors">
                {BENTO_DATA.uptime.label}
              </span>
              <span className="h-0.5 w-4 bg-signal-green" />
            </div>
            <Activity className="w-5 h-5 opacity-20 group-hover:opacity-100 transition-opacity" />
          </div>

          <div className="relative z-10 mt-8">
            <h3 className="text-8xl md:text-9xl font-bold tracking-tighter leading-none font-sans">
              {BENTO_DATA.uptime.value}
              <span className="text-4xl align-top ml-2 tracking-normal text-neutral-400">{BENTO_DATA.uptime.unit}</span>
            </h3>
            <p className="mt-6 text-lg font-medium text-neutral-600 max-w-sm leading-tight border-l-2 border-neutral-200 pl-4">
              {BENTO_DATA.uptime.desc}
            </p>
          </div>
        </div>

        {/* Security Card */}
        <div className="p-12 flex flex-col justify-between min-h-[340px] bg-white group relative transition-all hover:z-10 hover:shadow-2xl hover:shadow-black/5">
          <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
            <ShieldCheck className="w-4 h-4" />
          </div>

          <span className="font-mono text-xs uppercase text-neutral-500 tracking-widest group-hover:text-black transition-colors">
            {BENTO_DATA.security.label}
          </span>

          <div className="flex flex-col items-center justify-center flex-1 gap-6 transform group-hover:scale-105 transition-transform duration-700 ease-elastic">
            <OrbitalShield />
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold uppercase tracking-tighter">{BENTO_DATA.security.standard}</div>
              <div className="text-[10px] font-mono text-neutral-500 tracking-widest border border-neutral-200 px-2 py-1 rounded-sm">
                {BENTO_DATA.security.type}
              </div>
            </div>
          </div>
        </div>

        {/* Partners Card (Inverted) */}
        <div className="p-12 flex flex-col justify-between min-h-[340px] bg-black text-white hover:bg-neutral-900 transition-colors relative group">
          {/* Technical Crosses */}
          <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-white/20" />
          <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-white/20" />

          <span className="font-mono text-xs uppercase opacity-50 tracking-widest">Connectors</span>

          <div className="flex flex-col gap-6 mt-4">
            {BENTO_DATA.partners.map((partner, i) => (
              <div
                key={partner}
                className="flex items-center gap-4 opacity-70 hover:opacity-100 cursor-pointer group/item translate-x-0 hover:translate-x-2 transition-transform duration-300"
              >
                <span className="font-mono text-[10px] opacity-30">0{i + 1}</span>
                <span className="font-bold text-2xl tracking-tight">{partner}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-6 border-t border-white/20">
            <Button
              variant="link"
              className="text-white p-0 h-auto hover:text-signal-green hover:no-underline gap-3 group uppercase tracking-widest text-xs"
            >
              View All Integrations <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
