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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black">
      <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-sm">
            <Grid className="w-4 h-4" />
          </div>
          <span className="text-xl font-bold tracking-tight uppercase">Spaceion</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-12">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wide hover:opacity-50 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <Link
            href="#login"
            className="hidden md:block text-sm font-medium uppercase tracking-wide hover:opacity-50 transition-opacity"
          >
            Login
          </Link>
          <Button size="sm" className="gap-2 group">
            Deploy Node
            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
