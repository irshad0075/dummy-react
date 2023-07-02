import React from "react";
import Carouselstart from "../components/Carouselstart";
import AboutSection from "../components/AboutSection";
import WhyUs from "../components/WhyUs";
import Sale from "../components/Sale";
import BestSellerSection from "../components/BestSellerSection";
import News from "../components/News";

function Home() {
  return (
    <>
      <Carouselstart />
      <AboutSection />
      <WhyUs />
      <BestSellerSection />
      <Sale />
      <News />
    </>
  );
}

export default Home;
