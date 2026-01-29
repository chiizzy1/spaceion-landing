"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-black py-24 px-6 bg-white">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        {/* Brand Column */}
        <div className="flex flex-col gap-4 max-w-sm">
          <span className="text-2xl font-bold uppercase tracking-tight">Spaceion</span>
          <p className="text-sm text-neutral-500 font-light leading-relaxed">
            The universal runtime for high-performance edge computing. Engineered in Zurich. Deployed Globally.
          </p>
          <div className="mt-2">
            <Badge variant="status" className="pl-1 pr-3 py-1 gap-2 border border-black/10">
              <span className="w-1.5 h-1.5 bg-[var(--color-signal-green)] rounded-full animate-pulse" />
              <span className="text-[10px] font-mono uppercase text-neutral-500">All Systems Normal</span>
            </Badge>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-8 md:gap-16">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-mono uppercase text-neutral-400">Platform</span>
            <Link href="#" className="text-sm font-bold uppercase hover:underline">
              Manifest
            </Link>
            <Link href="#" className="text-sm font-bold uppercase hover:underline">
              Pricing
            </Link>
            <Link href="#" className="text-sm font-bold uppercase hover:underline">
              Enterprise
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-xs font-mono uppercase text-neutral-400">Resources</span>
            <Link href="#" className="text-sm font-bold uppercase hover:underline">
              Documentation
            </Link>
            <Link href="#" className="text-sm font-bold uppercase hover:underline">
              API Reference
            </Link>
            <Link href="#" className="text-sm font-bold uppercase hover:underline">
              Status
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-xs font-mono uppercase text-neutral-400">Legal</span>
            <Link href="#" className="text-sm font-bold uppercase hover:underline">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-bold uppercase hover:underline">
              Terms
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
        <span className="text-xs font-mono text-neutral-400">© {currentYear} SPACEION INC.</span>
        <span className="text-xs font-mono text-neutral-400">ZURICH, CH</span>
      </div>
    </footer>
  );
}
