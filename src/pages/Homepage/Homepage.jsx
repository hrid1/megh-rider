import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import FaqSection from "./FaqSection";
import FeatureSection from "./FeatureSection";
import ReviewSection from "./ReviewSection";
import ParcelTracking from "./ParcelTracking";
import ChargeSection from "./ChargeSection";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <ParcelTracking />
      <ChargeSection/>
      <FeatureSection />
      <ReviewSection />
      <FaqSection />
    </div>
  );
};

export default Homepage;
