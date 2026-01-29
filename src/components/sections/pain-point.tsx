"use client";

import { X, Check, Server, Database, ShieldAlert, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

export function PainPoint() {
  return (
    <section className="border-b border-black/[0.08] bg-zinc-50 py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl font-bold tracking-tighter text-black sm:text-5xl">
            Stop managing <br />
            infrastructure sprawl.
          </h2>
          <p className="mt-4 text-xl text-zinc-500">The modern AI stack is broken. Fragmentation slows you down.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* THE OLD WAY (Pain) */}
          <div className="relative overflow-hidden rounded-2xl border border-red-200 bg-red-50/50 p-8 md:p-12">
            <div className="absolute top-0 right-0 rounded-bl-xl bg-red-100 px-4 py-2 text-xs font-bold uppercase tracking-widest text-red-600">
              The Old Way
            </div>

            <div className="relative z-10">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
                <X className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-2xl font-bold tracking-tight text-red-900">Fragmented & Fragile</h3>
              <ul className="space-y-4 text-red-800/80">
                <li className="flex items-center gap-3">
                  <ShieldAlert className="h-5 w-5 opacity-70" />
                  <span>Inconsistent security policies</span>
                </li>
                <li className="flex items-center gap-3">
                  <Database className="h-5 w-5 opacity-70" />
                  <span>Multiple database connections</span>
                </li>
                <li className="flex items-center gap-3">
                  <Server className="h-5 w-5 opacity-70" />
                  <span>Slow cold starts (&gt;2s)</span>
                </li>
              </ul>
            </div>

            {/* Background Chaos Code */}
            <div className="absolute -right-12 -bottom-12 opacity-10">
              <pre className="text-xs text-red-900">
                {`Error: Connection refused
at TCPConnectWrap.afterConnect
at TCPConnectWrap.callbackTrampoline
TypeError: Cannot read property 'auth'`}
              </pre>
            </div>
          </div>

          {/* THE SPACEION WAY (Solution) */}
          <div className="relative overflow-hidden rounded-2xl border border-green-200 bg-white p-8 md:p-12 shadow-xl shadow-green-900/5">
            <div className="absolute top-0 right-0 rounded-bl-xl bg-green-100 px-4 py-2 text-xs font-bold uppercase tracking-widest text-green-600">
              The Spaceion Way
            </div>

            <div className="relative z-10">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-2xl font-bold tracking-tight text-zinc-900">Unified & Instant</h3>
              <ul className="space-y-4 text-zinc-600">
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  <span>Single V8 Isolation Boundary</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  <span>Global Edge Data Layer</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  <span>
                    Instant <span className="font-mono text-xs bg-zinc-100 px-1 py-0.5 rounded">127ms</span> Cold Starts
                  </span>
                </li>
              </ul>
            </div>

            {/* Background Order Code */}
            <div className="absolute -right-4 -bottom-4 opacity-[0.03]">
              <Cpu className="h-64 w-64" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
