import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import ThreeDModels from "@/components/services/ThreeDModels";
import RenderingIntegration from "@/components/services/RenderingIntegration";
import TechnicalConsulting from "@/components/services/TechnicalConsulting";
// import CustomDevelopment from "@/components/services/CustomDevelopment";
import AugmentedReality from "@/components/services/AugmentedReality";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ThreeDModels />
      <RenderingIntegration />
      <TechnicalConsulting />
      {/* <CustomDevelopment /> */ }
      <AugmentedReality />
      <ContactSection />
      <Footer />
    </>
  );
}
