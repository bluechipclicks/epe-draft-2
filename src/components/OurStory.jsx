"use client";
import Image from "next/image";
import { useState } from "react";

export default function OurStory() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="h-screen bg-gray-900 relative overflow-hidden">
      {/* Grain texture overlay */}
      <div className="absolute inset-0 opacity-30 mix-blend-overlay">
        <div
          className="w-full h-full"
          // style={{
          //   backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          //   backgroundSize: '256px 256px'
          // }}
        />
      </div>

      {/* Main container */}
      <div className="relative flex min-h-screen">
        {/* Left Panel */}
        <div className="w-1/2 flex flex-col justify-center px-16 relative bg-[#202020]">
          {/* Logo */}
          <div className="absolute top-8 left-16">
            <div className="text-white font-semibold  tracking-wider">EPE</div>
          </div>

          <div className="">
            {/* Main Heading */}
            <div>
              <h2 className="text-4xl md:text-6xl font-semibold   text-white max-w-2xl leading-20">
                Leading Boiler
                <br /> Manufacturing
              </h2>
            </div>

            {/* Description blocks */}

            <div className="space-y-6 mt-36 relative ">
              <div className="max-w-sm about-after-box ">
                <div className="relative z-10 p-6 ">
                  <h3 className="text-white text-2xl font-semibold mb-2">
                    Reliable Solutions
                  </h3>
                  <p className="text-gray-300 text-justify text-md leading-relaxed">
                    With over 15 years of expertise, EPE provides reliable
                    boilers, ensuring durability, advancement, and
                    customer-driven innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Center divider line */}

        {/* Right Panel */}
        <div className="w-1/2 flex flex-col justify-center  relative bg-[#262626] ">
          <div className="space-y-8">
            {/* The Design section */}
            <div className="max-w-sm">
              <h2 className="text-4xl md:text-[6vw] leading-28 uppercase  text-[#202020] opacity-65 font-extrabold absolute top-9 -left-2">
                Energy Process Equipments
              </h2>
            </div>

            {/* UI Accent elements */}
            <div className="space-y-6 mt-56 relative ">
              <div className="max-w-sm about-right-after-box ">
                <div className="relative z-10 p-6 ">
                  <h3 className="text-white text-2xl font-semibold mb-2">
                    Our Vision
                  </h3>
                  <p className="text-gray-300 text-justify text-md leading-relaxed">
                    The guiding principle of Energy Process Equipments (EPE) is
                    to "NEVER COMPROMISE ON QUALITY & SAFETY".
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation arrow */}
          <div className="absolute bottom-8 right-16">
            <button
              className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-orange-500 hover:text-orange-500 transition-colors duration-300"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <svg
                className={`w-4 h-4 transform transition-transform duration-300 ${
                  isHovered ? "translate-x-0.5" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Tumbler Image - Positioned on the center line */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <Image
            src="/assets/products/solid-fuel-fired-package-steam-boiler.webp"
            alt="solid-fuel-fired-package-steam-boiler"
            height={600}
            width={600}
          />
        </div>
      </div>
    </div>
  );
}
