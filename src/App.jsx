import FeaturesSection from "./component/FeaturesSection";
import HeroSection from "./component/HeroSection";
import SmartIndicatorsSection from "./component/SmartIndicatorsSection";
import StepProgress from "./component/StepProgress";
import TestimonialScroller from "./component/TestimonialScroller ";
import PricingPlans from "./component/PricingPlans";
import RebustSection from "./component/RebustSection";
import SmoothIntegration from "./component/SmoothIntegration";
import FAQAccordion from "./component/FAQAccordion";
import SearchRankingSection from "./component/SearchRankingSection ";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="bg-dark font-poppins">
      <HeroSection />
      <FeaturesSection />
      <SmartIndicatorsSection />
      <StepProgress />
      <TestimonialScroller />
      <PricingPlans />
      <RebustSection />
      <SmoothIntegration />
      <FAQAccordion />
      <SearchRankingSection />
      <Footer />
    </div>
  );
}

export default App;
