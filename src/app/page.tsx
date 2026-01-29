import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeatureEngine from "@/components/FeatureEngine";
import DeploySequence from "@/components/DeploySequence";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

// Lazy load heavy interactive components
const InfrastructureMap = dynamic(() => import("@/components/InfrastructureMap"), {
  loading: () => <div className="w-full h-[500px] bg-neutral-50" />, // Simple skeleton
});
const BentoGrid = dynamic(() => import("@/components/BentoGrid"));

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />

      {/* Core Capabilities (Bento Grid) */}
      <FeatureEngine />

      {/* Workflow Storytelling */}
      <DeploySequence />

      {/* Global Scale */}
      <InfrastructureMap />

      {/* System Metrics & Compliance */}
      <BentoGrid />

      {/* Commercials */}
      <PricingSection />
      <FAQSection />

      <Footer />
    </main>
  );
}
