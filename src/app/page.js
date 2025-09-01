import Client from "@/components/Client";
import HeroSection from "@/components/HeroSection";
import OurStory from "@/components/OurStory";
import ServiceAwards from "@/components/ServiceAwards";
import ServiceList from "@/components/ServiceList";
import React from "react";

const page = () => {
  return (
    <div className="">
      <HeroSection />
      <OurStory />
      <ServiceAwards />
      <ServiceList />
      <Client/>
    </div>
  );
};

export default page;
