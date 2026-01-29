"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { BrandLogo } from "@/components/ui/BrandLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-black/10 bg-white relative overflow-hidden z-20">
      <div className="max-w-[1440px] mx-auto px-6 py-24 flex flex-col md:flex-row justify-between items-start gap-16 relative z-10">
        {/* Brand Column */}
        <div className="flex flex-col gap-6 max-w-sm">
          <BrandLogo className="scale-110 origin-left" />
          <p className="text-sm text-neutral-800 font-mono leading-relaxed uppercase tracking-widest font-bold">
            The universal runtime for high-performance edge computing. <br />
            Engineered in Zurich. Deployed Globally.
          </p>
          <div className="mt-2">
            <Badge variant="outline" className="border-black pl-2 pr-3 py-1.5 gap-2 bg-neutral-100 rounded-full">
              <span className="w-1.5 h-1.5 bg-signal-green rounded-full animate-pulse" />
              <span className="text-[10px] font-mono uppercase text-black tracking-widest font-bold">
                All Systems Operational
              </span>
            </Badge>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-12 md:gap-24">
          <div className="flex flex-col gap-6">
            <span className="text-[10px] font-mono uppercase text-neutral-900 tracking-widest border-b border-black/20 pb-2 mb-2 w-32 font-bold">
              Platform
            </span>
            <Link href="#" className="text-sm font-bold uppercase text-neutral-900 hover:text-signal-green transition-colors">
              Manifest
            </Link>
            <Link href="#" className="text-sm font-bold uppercase text-neutral-900 hover:text-signal-green transition-colors">
              Pricing
            </Link>
            <Link href="#" className="text-sm font-bold uppercase text-neutral-900 hover:text-signal-green transition-colors">
              Enterprise
            </Link>
          </div>

          <div className="flex flex-col gap-6">
            <span className="text-[10px] font-mono uppercase text-neutral-900 tracking-widest border-b border-black/20 pb-2 mb-2 w-32 font-bold">
              Resources
            </span>
            <Link href="#" className="text-sm font-bold uppercase text-neutral-900 hover:text-signal-green transition-colors">
              Documentation
            </Link>
            <Link href="#" className="text-sm font-bold uppercase text-neutral-900 hover:text-signal-green transition-colors">
              API Reference
            </Link>
            <Link href="#" className="text-sm font-bold uppercase text-neutral-900 hover:text-signal-green transition-colors">
              Status
            </Link>
          </div>

          <div className="flex flex-col gap-6">
            <span className="text-[10px] font-mono uppercase text-neutral-900 tracking-widest border-b border-black/20 pb-2 mb-2 w-32 font-bold">
              Legal
            </span>
            <Link href="#" className="text-sm font-bold uppercase text-neutral-900 hover:text-signal-green transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-bold uppercase text-neutral-900 hover:text-signal-green transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto py-4 px-6 flex justify-between items-center border-t border-black/10 bg-white text-neutral-900 font-bold">
        <span className="text-[10px] font-mono uppercase tracking-widest">© {currentYear} SPACEION INC.</span>
        <span className="text-[10px] font-mono uppercase tracking-widest">ZURICH, CH — 8001</span>
      </div>
    </footer>
  );
}
