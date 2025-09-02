

"use client";

import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

// Import required modules
import { Autoplay } from 'swiper/modules';

const InfiniteProductSlider = () => {
  const sliderItems = [
    "IBR Boiler",
    'Small Industrial Boiler ',
    'Thermic Fluid Heaters',
    'Hot Air Generators',
  ];

  return (
    <div className="w-full bg-[#202020] py-24">
      <Swiper
        // Install Swiper modules
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={2.1}
        loop={true}
        speed={10000} // Set a long duration for a smooth, slow scroll
        autoplay={{
          delay: 1, // A delay of 1ms between transitions
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {sliderItems.map((item, index) => (
          <SwiperSlide key={index} style={{ width: 'auto' }}>
            <div className="flex items-center gap-8">
              <h2
                className="text-5xl md:text-7xl  bg-gradient-red-glow bg-clip-text text-white animate-shimmer bg-[length:200%_100%] font-semibold hover-fill-text relative cursor-pointer whitespace-nowrap"
                data-text={item}
              >
                {item}
              </h2>
            </div>
          </SwiperSlide>
        ))}
        {/* You can duplicate the slides for a denser look if needed */}
        {sliderItems.map((item, index) => (
          <SwiperSlide key={`duplicate-${index}`} style={{ width: 'auto' }}>
            <div className=" flex items-center gap-8">
              <h2
                className="text-5xl md:text-7xl font-semibold bg-gradient-red-glow bg-clip-text text-white animate-shimmer bg-[length:200%_100%] hover-fill-text relative cursor-pointer whitespace-nowrap"
                data-text={item}
              >
                {item}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default InfiniteProductSlider;