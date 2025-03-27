import LandingPageHeader from "@/ui/pages/landingPage/LandingPageHeader.tsx";
import HeroSection from "@/ui/pages/landingPage/HeroSection.tsx";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-mainnavy text-white">
      <LandingPageHeader />
      <HeroSection />
    </div>
  );
};

export default LandingPage;
