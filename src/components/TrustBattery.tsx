"use client";

export default function TrustBattery() {
  const logos = [
    { name: "Vercel", width: 100 },
    { name: "Stripe", width: 80 },
    { name: "Linear", width: 90 },
    { name: "Raycast", width: 100 },
    { name: "OpenAI", width: 90 },
    { name: "Scale", width: 80 },
  ];

  return (
    <section className="py-12 border-b border-[var(--color-grid-line)]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-8">Trusted by engineering teams at</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {logos.map((logo) => (
            <div key={logo.name} className="h-8 flex items-center justify-center font-bold text-xl text-black">
              {/* Placeholder for actual SVGs - using text for now to maintain style without assets */}
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
