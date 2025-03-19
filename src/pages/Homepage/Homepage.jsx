import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import FaqSection from "./FaqSection";
import FeatureSection from "./FeatureSection";
import ReviewSection from "./ReviewSection";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <ReviewSection />
      <FaqSection />
    </div>
  );
};

export default Homepage;
