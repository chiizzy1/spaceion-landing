"use client";

export const OrbitalCommand = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none">
      <svg className="absolute w-full h-full opacity-[0.15]" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
        {/* Orbital Rings - CSS Animation */}
        <circle
          cx="500"
          cy="500"
          r="300"
          stroke="black"
          strokeWidth="1"
          fill="none"
          strokeDasharray="4 4"
          className="origin-center animate-[spin_120s_linear_infinite]"
        />
        <circle
          cx="500"
          cy="500"
          r="450"
          stroke="black"
          strokeWidth="0.5"
          fill="none"
          className="origin-center animate-[spin_180s_linear_infinite_reverse]"
        />

        {/* Floating Satellites - CSS Animation */}
        {/* We need groups for rotation centers */}
        <g className="origin-center animate-[spin_60s_linear_infinite]">
          <circle cx="500" cy="200" r="4" fill="black" />
          <line x1="500" y1="200" x2="500" y2="220" stroke="black" strokeWidth="0.5" />
        </g>

        <g className="origin-center animate-[spin_90s_linear_infinite_reverse]">
          <circle cx="800" cy="500" r="6" fill="transparent" stroke="black" strokeWidth="1" />
        </g>
      </svg>

      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-size-[100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
    </div>
  );
};
