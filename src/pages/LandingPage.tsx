import React from "react";
import LandingPageHeader from "@/components/header/LandingPageHeader";
import HeroSection from "@/components/section/HeroSection";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-mainnavy text-white">
      <LandingPageHeader />
      <HeroSection />
    </div>
  );
};

export default LandingPage;
