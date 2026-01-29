"use client";

import { motion } from "framer-motion";

export default function TrustBar() {
  return (
    <div className="flex flex-col items-center gap-4 mt-8">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="text-[10px] font-mono font-bold tracking-widest text-neutral-400 uppercase"
      >
        Trusted by industry leaders
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
        className="flex flex-wrap justify-center gap-12 items-center"
      >
        {/* Sequoia */}
        <div className="group flex items-center gap-2 cursor-pointer grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          <svg viewBox="0 0 100 24" className="h-5 w-auto fill-current text-black">
            <path d="M11.6 17.8c0 1.3-.9 2.1-2.4 2.1-1.3 0-2.3-.6-2.6-1.6h-1.4c.3 1.8 1.9 2.8 4 2.8 2.4 0 3.9-1.3 3.9-3.3 0-1.8-1.1-2.7-3.1-3.2-1.5-.4-2.1-.8-2.1-1.6 0-.7.6-1.2 1.7-1.2 1.2 0 2 .5 2.3 1.4h1.4c-.3-1.6-1.8-2.6-3.7-2.6-1.9 0-3.2 1.1-3.2 2.5 0 1.6 1.1 2.4 3 2.9 1.6.4 2.2.9 2.2 1.8zm31.7 1.8V17c0-2.8-2-4.6-4.9-4.6-2.9 0-5 1.9-5 4.8 0 3 2.1 4.9 5.1 4.9 1.8 0 3.3-.6 4.1-1.7l-.9-.9c-.7.8-1.7 1.3-3.2 1.3-1.8 0-3.3-1-3.5-3h8.3v-.3zm-1.4-1.2h-7c.2-1.6 1.5-2.6 3.4-2.6 1.7 0 3.2 1 3.6 2.6zm6.8 3.5V17c0-2.8-2-4.6-4.9-4.6-2.9 0-4.9 1.9-4.9 4.8 0 3 2 4.9 4.9 4.9 1.7 0 3.2-.6 4-1.6l-.9-1c-.6.8-1.7 1.3-3.1 1.3-2 0-3.4-1.3-3.4-3.5s1.4-3.6 3.4-3.6c1.4 0 2.5.5 3.1 1.3l.9-1c-.8-1-2.2-1.6-4-1.6-3.7 0-6.4 2.6-6.4 6.2s2.6 6.2 6.4 6.2c1.7 0 3.3-.6 4-1.7v1.7h1.4v-6h-1.5zm10.7-7.7v8.5c0 1.9-1.2 3.2-3.3 3.2-2.1 0-3.3-1.3-3.3-3.2v-8.5h-1.5v8.7c0 2.6 1.8 4.3 4.8 4.3 3 0 4.8-1.7 4.8-4.3v-8.7h-1.5zm7.3 0h-1.5v12.2h1.5V14.2zM75.1 14l-4.5 9.9h1.7l1.1-2.4h5.2l1.1 2.4h1.7L76.8 14h-1.7zm-1.1 6.3l2-4.4 2 4.4H74zm-28.7-6.1h-1.5v12.2h1.5V14.2z" />
            <path d="M3.2 9.6L0 15h6.4L3.2 9.6zM3.2 4.3L.7 8.5h5L3.2 4.3zM3.2 15L.7 19.3h5L3.2 15z" transform="translate(-1 0)" />
          </svg>
        </div>

        {/* Index Ventures */}
        <div className="group flex items-center gap-2 cursor-pointer grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          <svg viewBox="0 0 160 30" className="h-6 w-auto stroke-current text-black fill-none stroke-[2px]">
            {/* Hand Mark */}
            <path
              d="M10 6L4 20h4l6-14M16 6l6 14h-4L12 6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-black fill-none"
            />

            {/* Text: Index Ventures */}
            <text x="35" y="20" className="fill-current text-black stroke-none font-sans font-bold tracking-tight text-lg">
              INDEX
            </text>
            <text x="96" y="20" className="fill-current text-black stroke-none font-sans font-light tracking-tight text-lg">
              VENTURES
            </text>
          </svg>
        </div>

        {/* Vercel */}
        <div className="group flex items-center gap-2 cursor-pointer grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          <svg viewBox="0 0 110 24" className="h-5 w-auto fill-current text-black">
            <path d="M12 2L22 22H2L12 2Z" />
            <text x="30" y="19" className="font-sans font-bold tracking-tighter text-2xl">
              VERCEL
            </text>
          </svg>
        </div>

        {/* Linear */}
        <div className="group flex items-center gap-2 cursor-pointer grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          <svg viewBox="0 0 110 24" className="h-5 w-auto fill-current text-black">
            {/* Linear Symbol */}
            <circle cx="12" cy="12" r="2" />
            <path
              d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"
              className="opacity-50"
            />
            <text x="30" y="19" className="font-sans font-semibold tracking-tight text-2xl">
              Linear
            </text>
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
