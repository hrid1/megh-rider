import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import FaqSection from "./FaqSection";
import FeatureSection from "./FeatureSection";
import ReviewSection from "./ReviewSection";
import ParcelTracking from "./ParcelTracking";
import ChargeSection from "./ChargeSection";
import CompanySection from "./CompanySection";
import Customar from "./Customar";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <ParcelTracking />
      <CompanySection />
      <Customar />
      <FeatureSection />
      <ReviewSection />
      <ChargeSection />
      <FaqSection />
    </div>
  );
};

export default Homepage;
