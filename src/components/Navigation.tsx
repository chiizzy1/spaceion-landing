"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Grid, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavLinkProps {
  href: string;
  label: string;
}

const NAV_LINKS: NavLinkProps[] = [
  { href: "#documentation", label: "Documentation" },
  { href: "#infrastructure", label: "Infrastructure" },
  { href: "#pricing", label: "Pricing" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Glassmorphism Backdrop */}
      <div className="absolute inset-0 bg-white/90 backdrop-blur-md border-b border-black/5 shadow-sm transition-all duration-300" />

      <div className="relative max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-none group-hover:rotate-90 transition-transform duration-500 ease-elastic">
            <Grid className="w-4 h-4" />
          </div>
          <span className="text-xl font-bold tracking-tighter uppercase">Spaceion</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-12">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs font-medium uppercase tracking-widest-swiss hover:text-signal-green transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-signal-green group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <Link
            href="#login"
            className="hidden md:block text-xs font-medium uppercase tracking-widest hover:opacity-50 transition-opacity"
          >
            Login
          </Link>
          <Button
            size="sm"
            className="gap-2 group bg-black text-white rounded-none h-9 px-4 uppercase text-[10px] tracking-widest font-bold hover:bg-neutral-800 transition-all"
          >
            Deploy Node
            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
