"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-black/[0.08] bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative flex h-8 w-8 items-center justify-center bg-black text-white transition-transform group-hover:rotate-180 duration-500">
            {/* Simple Hexagon/Cube logic */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            </svg>
          </div>
          <span className="font-sans text-lg font-bold tracking-tight text-black">SPACEION</span>
        </Link>

        {/* Links */}
        <div className="hidden items-center gap-8 md:flex">
          <NavLink href="#platform">Platform</NavLink>
          <NavLink href="#solutions">Solutions</NavLink>
          <NavLink href="#pricing">Pricing</NavLink>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-zinc-600 hover:text-black transition-colors">
            Log in
          </Link>
          <Link
            href="/signup"
            className="rounded-none bg-black px-5 py-2 text-sm font-medium text-white transition-transform hover:scale-105 active:scale-95"
          >
            Start Building
          </Link>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm font-medium text-zinc-500 transition-colors hover:text-black">
      {children}
    </Link>
  );
}
