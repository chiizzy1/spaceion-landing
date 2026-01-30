"use client";

import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Check, Box, Database, Globe, Terminal } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const STEPS = [
  {
    id: "01",
    title: "Deploy",
    description: "Push your container to the Spaceion registry. We automatically analyze dependencies and runtime requirements.",
    cmd: "spaceion push ./app",
    icon: Box,
  },
  {
    id: "02",
    title: "Orchestrate",
    description: "Our control plane maps your workload to the optimal regions based on user latency and cost policies.",
    cmd: "Routing traffic to [us-east-1, eu-central-1]...",
    icon: Globe,
  },
  {
    id: "03",
    title: "Scale",
    description: "Infrastructure auto-scales horizontally. You only pay for active execution time.",
    cmd: "Scaling replicas: 1 -> 450",
    icon: Database,
  },
];

const SchematicIcon = ({ Icon, isActive }: { Icon: any; isActive: boolean }) => {
  return (
    <div className="relative w-12 h-12 flex items-center justify-center">
      {/* Icon */}
      <Icon
        className={`w-6 h-6 transition-colors duration-300 ${
          isActive ? "text-emerald-500" : "text-neutral-400 group-hover:text-neutral-600"
        }`}
      />

      {/* Schematic Brackets */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left */}
        <motion.div
          className="absolute top-0 left-0 w-3 h-3 border-l border-t border-emerald-500/50"
          animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.8 }}
        />
        {/* Bottom Right */}
        <motion.div
          className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-emerald-500/50"
          animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.8 }}
        />
        {/* Scanning Line */}
        {isActive && (
          <motion.div
            layoutId="scan-line"
            className="absolute inset-x-0 h-[1px] bg-emerald-500/30"
            initial={{ top: 0 }}
            animate={{ top: "100%" }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        )}
      </div>
    </div>
  );
};

const Typewriter = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText("");
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 20); // Fast typing 20ms
    return () => clearInterval(timer);
  }, [text]);

  return (
    <span>
      {displayedText}
      <span className="animate-pulse text-emerald-500">▋</span>
    </span>
  );
};

export default function DeploySequence() {
  const [activeStep, setActiveStep] = useState(0);
  const [booted, setBooted] = useState(false);

  // 3D Tilt Logic
  const terminalRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-300, 300], [5, -5]), { damping: 30, stiffness: 400 });
  const rotateY = useSpring(useTransform(x, [-300, 300], [-5, 5]), { damping: 30, stiffness: 400 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  // Boot Sequence
  useEffect(() => {
    const timer = setTimeout(() => setBooted(true), 2000); // 2s boot
    return () => clearTimeout(timer);
  }, []);

  // Auto-advance
  useEffect(() => {
    if (!booted) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [booted]);

  return (
    <section className="py-24 bg-white border-b border-neutral-200 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text Content */}
        <div className="space-y-8">
          <div className="mb-12">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-2 block">The Workflow</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter">
              Push to Production <br />
              <span className="text-neutral-400">in Seconds.</span>
            </h2>
          </div>

          <div className="space-y-6 min-h-[360px]">
            {STEPS.map((step, index) => (
              <motion.div
                layout
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`cursor-pointer group flex gap-6 p-4 rounded-lg transition-all duration-300 border border-transparent ${activeStep === index ? "bg-neutral-50 border-neutral-200" : "hover:bg-neutral-50/50"}`}
              >
                <div className="pt-1">
                  <SchematicIcon Icon={step.icon} isActive={activeStep === index} />
                </div>

                <div className="space-y-2 flex-1">
                  <div className="flex items-center justify-between">
                    <h3
                      className={`text-xl font-display font-bold uppercase tracking-tight transition-colors ${activeStep === index ? "text-black" : "text-neutral-400"}`}
                    >
                      {step.title}
                    </h3>
                    <span
                      className={`text-[10px] font-mono tracking-widest ${activeStep === index ? "text-emerald-600" : "text-neutral-300"}`}
                    >
                      {step.id}
                    </span>
                  </div>

                  <AnimatePresence mode="popLayout">
                    {activeStep === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-neutral-600 font-light leading-relaxed text-sm"
                      >
                        {step.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Code/Visual Terminal */}
        <div className="relative perspective-1000" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          {/* Terminal Window */}
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="w-full bg-[#0A0A0A] rounded-lg overflow-hidden shadow-2xl border border-neutral-800 relative z-10 min-h-[440px] flex flex-col"
          >
            {/* Terminal Header */}
            <div className="bg-[#1C1C1C] px-4 py-3 flex items-center justify-between border-b border-neutral-800">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-neutral-700" />
                <div className="w-3 h-3 rounded-full bg-neutral-700" />
                <div className="w-3 h-3 rounded-full bg-neutral-700" />
              </div>
              <div className="text-[10px] font-mono text-neutral-500 flex items-center gap-2">
                <Terminal className="w-3 h-3" />
                root@spaceion-core
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-sm text-neutral-400 space-y-2 flex-1 relative font-medium leading-relaxed">
              {!booted ? (
                /* Boot Sequence */
                <div className="space-y-1 text-xs opacity-70">
                  {[
                    "Initializing kernel...",
                    "Loading modules: [net, fs, crypto]",
                    "Verifying signatures...",
                    "Connect: wss://api.spaceion.com/v1/stream",
                    "Handshake established (4ms)",
                    "System Ready.",
                  ].map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      {`> ${line}`}
                    </motion.div>
                  ))}
                </div>
              ) : (
                /* Interactive Mode */
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="flex gap-3 text-neutral-500 mb-4">
                    <span>$</span>
                    <span className="text-white">
                      <Typewriter text={STEPS[activeStep].cmd} />
                    </span>
                  </div>

                  <div className="pl-4 border-l border-neutral-800 space-y-2 min-h-[120px]">
                    {activeStep === 0 && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1 text-neutral-500">
                        <div>→ Building container image...</div>
                        <div>→ Optimizing layers (deduped 43MB)...</div>
                        <div className="text-emerald-500">→ Push complete: sha256:8f9a...</div>
                      </motion.div>
                    )}
                    {activeStep === 1 && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1 text-neutral-500">
                        <div>→ Quantizing latency map...</div>
                        <div>→ Routing to [us-east-1, eu-central-1]...</div>
                        <div className="text-emerald-500">→ Global mesh synchronized.</div>
                      </motion.div>
                    )}
                    {activeStep === 2 && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1 text-neutral-500">
                        <div>→ Load delta: +400%</div>
                        <div>→ Spawning 449 micro-instances...</div>
                        <div className="text-emerald-500">→ Scale factor 450x applied.</div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Status Footer */}
            <div className="bg-[#111] border-t border-neutral-800 p-2 flex justify-between items-center text-[10px] font-mono text-neutral-500 px-4">
              <div>MEM: 43MB / 128MB</div>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${booted ? "bg-emerald-500 animate-pulse" : "bg-yellow-500"}`} />
                {booted ? "ONLINE" : "BOOTING"}
              </div>
            </div>
          </motion.div>

          {/* Backdrop Decor -> Made heavier/industrial */}
          <div className="absolute -right-4 -bottom-4 w-full h-full border-2 border-dashed border-neutral-200 rounded-lg z-0 hidden lg:block pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
