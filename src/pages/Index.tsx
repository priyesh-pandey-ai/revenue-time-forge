import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import ProfessorSection from "@/components/ProfessorSection";
import FrameworksSection from "@/components/FrameworksSection";
import IndustryInsights from "@/components/IndustryInsights";
import GamesSection from "@/components/GamesSection";
import TransformationSection from "@/components/TransformationSection";
import ROISection from "@/components/ROISection";
import ObjectionHandling from "@/components/ObjectionHandling";
import ClosingSection from "@/components/ClosingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ValueProposition />
        <ProfessorSection />
        <FrameworksSection />
        <IndustryInsights />
        <GamesSection />
        <div id="transformation">
          <TransformationSection />
        </div>
        <div id="roi">
          <ROISection />
        </div>
        <ObjectionHandling />
        <div id="closing">
          <ClosingSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
