"use client";

import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string; // Container class
  iconClassName?: string; // Icon SVG class
}

export function BrandLogo({ className, iconClassName }: BrandLogoProps) {
  return (
    <div className={cn("flex items-center gap-3 cursor-pointer select-none group", className)}>
      {/* Premium Minimalist Logomark: The Split Square (S) */}
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={cn("w-8 h-8 text-black transition-colors duration-300 group-hover:text-neutral-700", iconClassName)}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20 2H4c-1.1 0-2 .9-2 2v16l18-18z" />
        <path d="M4 22h16c1.1 0 2-.9 2-2V4L4 22z" />
      </svg>
      <span className="text-xl font-display font-bold tracking-tighter uppercase text-black">Spaceion</span>
    </div>
  );
}
