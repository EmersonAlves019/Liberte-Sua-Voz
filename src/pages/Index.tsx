
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StorytellingSection from "@/components/StorytellingSection";
import PainPointsSection from "@/components/PainPointsSection";
import TransformationSection from "@/components/TransformationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ObjectionsSection from "@/components/ObjectionsSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <StorytellingSection />
      <PainPointsSection />
      <TransformationSection />
      <TestimonialsSection />
      <ObjectionsSection />
      <TargetAudienceSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
