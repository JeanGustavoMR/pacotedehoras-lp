import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ProblemsSection from "@/components/sections/ProblemsSection";
import ValuePropositionSection from "@/components/sections/ValuePropositionSection";
import PlansSection from "@/components/sections/PlansSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import ResultsSection from "@/components/sections/ResultsSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-transparent">
        <HeroSection />
        <ProblemsSection />
        <ValuePropositionSection />
        <PlansSection />
        <HowItWorksSection />
        <ResultsSection />
        <FinalCTASection />
      </main>
      <WhatsAppButton />
    </>
  );
};

export default Index;
