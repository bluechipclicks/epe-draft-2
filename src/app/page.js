import Client from "@/components/Client";
import HeroSection from "@/components/HeroSection";
import OurStory from "@/components/OurStory";
import ServiceAwards from "@/components/LeadingBoilerManufacturing";
import ServiceList from "@/components/ServiceList";
import React from "react";
import ProductCategories from "@/components/ProductCategories";
import Footer from "@/components/Footer";
import IndustryWeServe from "@/components/IndustryWeServe";

const page = () => {
  return (
    <div className="">
      <HeroSection />
      <OurStory />
      <ServiceAwards />
      <ProductCategories />
      <Client />
      <IndustryWeServe/>
      <ServiceList />
    </div>
  );
};

export default page;
