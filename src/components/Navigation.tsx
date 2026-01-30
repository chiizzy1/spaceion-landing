"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { BrandLogo } from "@/components/ui/BrandLogo";

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
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const sidebarVariants: Variants = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 100% 0px)`,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(30px at 100% 0px)",
      opacity: 0,
      transition: {
        delay: 0.2, // Wait for items to fade out
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const navListVariants = {
    open: {
      transition: { loop: false, staggerChildren: 0.1, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const navItemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Desktop Glassmorphism Backdrop */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-xl border-b border-white/20 shadow-[0_1px_0_0_rgba(0,0,0,0.05)] transition-all duration-300 lg:block hidden" />

      {/* Mobile Control Bar - Always Visible */}
      <div className="lg:hidden absolute top-0 left-0 right-0 h-16 bg-white/95 backdrop-blur-md border-b border-black/10 flex items-center justify-between px-6 z-50">
        <div onClick={() => setIsOpen(false)}>
          <BrandLogo />
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-100 active:scale-95 transition-transform"
        >
          {isOpen ? <X className="w-5 h-5 text-black" /> : <Menu className="w-5 h-5 text-black" />}
        </button>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between pointer-events-none lg:pointer-events-auto">
        {/* Desktop Logo / Brand */}
        <div className="hidden lg:block pointer-events-auto">
          <BrandLogo />
        </div>

        {/* Desktop Links - Sliding Pill System */}
        <div className="hidden lg:flex items-center gap-2 pointer-events-auto" onMouseLeave={() => setHoveredLink(null)}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onMouseEnter={() => setHoveredLink(link.label)}
              className="relative px-4 py-2 text-xs font-bold uppercase tracking-widest text-black transition-colors group"
            >
              <span className="relative z-10">{link.label}</span>
              {hoveredLink === link.label && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-neutral-100 rounded-md -z-0"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-6 pointer-events-auto">
          <Link
            href="#login"
            className="hidden lg:block text-xs font-bold uppercase tracking-widest text-black hover:text-neutral-600 transition-colors"
          >
            Login
          </Link>
          <Button
            size="sm"
            className="gap-2 group bg-black text-white h-9 px-4 uppercase text-[10px] tracking-widest font-bold hover:bg-neutral-800 transition-all active:scale-95"
          >
            Deploy Node
            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div
        className="fixed inset-0 bg-white z-40 lg:hidden"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={1000} // Approximate height
        variants={sidebarVariants}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 grid-bg opacity-30" />

        <div className="flex flex-col h-full justify-center px-8 pt-16">
          <motion.ul variants={navListVariants} className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <motion.li key={link.label} variants={navItemVariants}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-display font-bold text-black hover:text-signal-green transition-colors"
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
            <motion.li variants={navItemVariants} className="pt-8">
              <Button
                onClick={() => setIsOpen(false)}
                className="w-full gap-2 group bg-black text-white h-12 uppercase text-sm tracking-widest font-bold hover:bg-neutral-800 transition-all justify-between px-6 rounded-none"
              >
                Deploy Node
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </motion.li>
            <motion.li variants={navItemVariants}>
              <Link
                href="#login"
                onClick={() => setIsOpen(false)}
                className="block text-center text-sm font-bold uppercase tracking-widest text-text-dim mt-4"
              >
                Login
              </Link>
            </motion.li>
          </motion.ul>
        </div>
      </motion.div>
    </nav>
  );
}
