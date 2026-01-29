"use client";

import { Activity, ShieldCheck, ArrowRight } from "lucide-react";
import { BENTO_DATA } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { OrbitalShield, UptimeGraph } from "./graphics/Spotlights";

export default function BentoGrid() {
  return (
    <section className="w-full max-w-[1440px] mx-auto py-24 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[-1px]">
        {/* Metric Card */}
        <div className="md:col-span-2 border border-black p-12 flex flex-col justify-between min-h-[340px] hover:bg-neutral-50 transition-colors bg-white group relative overflow-hidden">
          <div className="absolute inset-x-0 bottom-0 h-32 opacity-10 pointer-events-none text-emerald-500">
            <UptimeGraph />
          </div>
          <div className="flex justify-between items-start relative z-10">
            <span className="font-mono text-sm uppercase text-neutral-500 tracking-widest group-hover:text-black transition-colors">
              {BENTO_DATA.uptime.label}
            </span>
            <Activity className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="relative z-10">
            <h3 className="text-7xl md:text-9xl font-bold tracking-tighter leading-none">
              {BENTO_DATA.uptime.value}
              <span className="text-4xl align-top ml-1">{BENTO_DATA.uptime.unit}</span>
            </h3>
            <p className="mt-4 text-lg font-medium text-neutral-600">{BENTO_DATA.uptime.desc}</p>
          </div>
        </div>

        {/* Security Card */}
        <div className="border border-black md:border-l-0 p-12 flex flex-col justify-between min-h-[340px] hover:bg-neutral-50 transition-colors bg-white group">
          <span className="font-mono text-sm uppercase text-neutral-500 tracking-widest group-hover:text-black transition-colors">
            {BENTO_DATA.security.label}
          </span>
          <div className="flex flex-col items-center justify-center flex-1 gap-4 transform group-hover:scale-105 transition-transform duration-500">
            <OrbitalShield />
            <div className="text-center space-y-1">
              <div className="text-2xl font-bold uppercase tracking-tight">{BENTO_DATA.security.standard}</div>
              <div className="text-sm font-mono text-neutral-500">{BENTO_DATA.security.type}</div>
            </div>
          </div>
        </div>

        {/* Partners Card (Inverted) */}
        <div className="p-12 border border-black lg:border-l-0 flex flex-col justify-between min-h-[340px] bg-black text-white hover:bg-neutral-900 transition-colors">
          <span className="font-mono text-sm uppercase opacity-70 tracking-widest">Integrations</span>

          <div className="flex flex-col gap-5 mt-4">
            {BENTO_DATA.partners.map((partner) => (
              <div key={partner} className="flex items-center gap-4 opacity-80 hover:opacity-100 cursor-pointer group/item">
                <div className="w-2 h-2 rounded-full bg-white group-hover/item:scale-150 transition-transform" />
                <span className="font-bold text-xl tracking-tight">{partner}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-6 border-t border-white/20">
            <Button variant="link" className="text-white p-0 h-auto hover:text-neutral-300 hover:no-underline gap-2 group">
              View All <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
