"use client";

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrustBattery from "@/components/TrustBattery";
import FeatureEngine from "@/components/FeatureEngine";
import InfrastructureMap from "@/components/InfrastructureMap";
import BentoGrid from "@/components/BentoGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      {/* TrustBattery removed - merged into Hero */}
      <FeatureEngine />
      <InfrastructureMap />
      <BentoGrid />
      <Footer />
    </main>
  );
}
