import Client from "@/components/Client";
import HeroSection from "@/components/HeroSection";
import OurStory from "@/components/OurStory";
import ServiceAwards from "@/components/LeadingBoilerManufacturing";
import ServiceList from "@/components/WhyChooseUs";
import React from "react";
import ProductCategories from "@/components/ProductCategories";
import Footer from "@/components/Footer";
import IndustryWeServe from "@/components/IndustryWeServe";
import StatsSection from "@/components/StatsSection";
import InfiniteProductSlider from "@/components/InfiniteProductSlider";
import TextAnimation from "@/components/TestAnimation";
import AboutUs from "@/components/AboutUs";
import ProductSlider from "@/components/ProductSlider";
import IndustriesSection from "@/components/IndustriesSection";

const page = () => {
  return (
    <div className="bg-[#2D2D2D]">
      <HeroSection />
      <AboutUs />
      {/* <OurStory /> */}
      <ServiceAwards />
      <ProductSlider />
      {/* <IndustriesSection /> */}

      <StatsSection />

      <InfiniteProductSlider />
      <IndustryWeServe />
      <ServiceList />
      <Client />
    </div>
  );
};

export default page;
