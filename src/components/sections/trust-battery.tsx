"use client";

const LOGOS = [
  { name: "Vercel", className: "h-6" },
  { name: "Stripe", className: "h-8" },
  { name: "OpenAI", className: "h-6" },
  { name: "Linear", className: "h-6" },
  { name: "Raycast", className: "h-7" },
  { name: "Scale", className: "h-5" },
];

export function TrustBattery() {
  return (
    <section className="border-b border-black/[0.08] bg-white py-12 md:py-20">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-8 text-sm font-medium text-zinc-400">POWERING NEXT-GENERATION TEAMS</p>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-60 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0">
          {LOGOS.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center">
              {/* Placeholder Text for Logos if SVGs aren't available yet, but styled to look like logos */}
              <span
                className={`font-sans font-bold text-black tracking-tighter text-xl ${logo.name === "Stripe" ? "italic" : ""}`}
              >
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
