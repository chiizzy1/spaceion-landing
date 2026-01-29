"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const FOOTER_LINKS = [
  {
    title: "Platform",
    links: ["Deploy", "Observability", "Edge Network", "Pricing"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Blog", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Security", "DPA"],
  },
];

export function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        {/* Top Section: Links & Newsletter */}
        <div className="mb-24 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">All Systems Operational</span>
            </div>
            <p className="text-sm text-zinc-500 max-w-xs">
              Spaceion provides the universal runtime for the next generation of autonomous AI agents.
            </p>
          </div>

          {FOOTER_LINKS.map((column) => (
            <div key={column.title} className="col-span-1">
              <h4 className="mb-6 font-mono text-xs font-bold uppercase tracking-widest text-zinc-400">{column.title}</h4>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="group flex items-center gap-1 text-sm text-zinc-600 transition-colors hover:text-black"
                    >
                      {link}
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section: MEGA TEXT */}
        <div className="border-t border-black/[0.08] pt-12">
          <h1
            className="w-full text-center font-bold tracking-tighter text-black leading-none break-all"
            style={{ fontSize: "clamp(4rem, 18vw, 24rem)" }}
          >
            SPACEION
          </h1>
          <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs font-medium text-zinc-400 sm:flex-row">
            <p>© 2026 Spaceion Inc.</p>
            <div className="flex gap-8">
              <span>Twitter</span>
              <span>GitHub</span>
              <span>Discord</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
