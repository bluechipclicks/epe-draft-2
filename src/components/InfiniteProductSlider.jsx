"use client";

import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

// Import required modules
import { Autoplay } from "swiper/modules";

const InfiniteProductSlider = () => {
  const sliderItems = [
    "IBR Boiler",
    "Small Industrial Boiler ",
    "Thermic Fluid Heaters",
    "Hot Air Generators",
     "IBR Boiler",
    "Small Industrial Boiler ",
    "Thermic Fluid Heaters",
    "Hot Air Generators",
  ];

  return (
    <section className="w-full  overflow-hidden bg-[#202020] py-24">
      <div className="relative group">
        <div className="flex animate-slide gap-12 w-max items-center">
          {sliderItems.map((text, index) => (
            <div key={index} className="flex items-center gap-6">
              {/* Text */}
              <h2
                className="text-3xl md:text-6xl font-bold 
                           bg-gradient-red-glow bg-clip-text text-white 
                           animate-shimmer bg-[length:200%_100%] 
                           relative cursor-pointer whitespace-nowrap text-center"
              >
                {text}
              </h2>

              {/* Gradient Circle */}
              <div className="relative w-4 h-4">
                <span className="absolute inset-0 bg-red-500 rounded-full animate-ping"></span>
                <span className="absolute inset-0 bg-gradient-to-b from-red-400 via-red-500 to-red-600 rounded-full"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfiniteProductSlider;
