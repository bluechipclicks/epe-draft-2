"use client";

import React, { useState } from "react";
import { Network, Globe, Truck, Music } from "lucide-react";
import CommonChipHeading from "./CommonChipHeading";
import {
  FaIndustry,
  FaUsersCog,
  FaLightbulb,
  FaTools,
  FaHandsHelping,
} from "react-icons/fa";

const services = [
  {
    id: "01",
    title: "Proven Industry Expertise",
    icon: <FaIndustry className="w-6 h-6 text-white" />,
    bgColor: "bg-gradient-to-b from-[#2e2e2e] to-[#424242]",
    description:
      "With 15+ years in boiler manufacturing, we have built a trusted reputation for durable, reliable solutions.",
  },
  {
    id: "02",
    title: "Skilled Leadership",
    icon: <FaUsersCog className="w-6 h-6 text-white" />,
    bgColor: "bg-[#454545]",
    description:
      "Guided by engineering expertise and strong leadership, we bring meaningful insight to every project we deliver.",
  },
  {
    id: "03",
    title: "Innovation & R&D",
    icon: <FaLightbulb className="w-6 h-6 text-white" />,
    bgColor: "bg-[#5a5a5a]",
    description:
      "Constant research and development drive our innovation, offering advanced boiler systems and sustainable solutions.",
  },
  {
    id: "04",
    title: "Comprehensive Services",
    icon: <FaTools className="w-6 h-6 text-white" />,
    bgColor: "bg-[#767676]",
    description:
      "Beyond manufacturing, we provide reliable IBR repairs, thermic systems, and customized heating solutions.",
  },
  {
    id: "05",
    title: "24/7 Customer Support",
    icon: <FaHandsHelping className="w-6 h-6 text-white" />,
    bgColor: "bg-gradient-to-r from-red-400 via-[#DC2621] to-red-500",
    description:
      "Round-the-clock after-sales service ensures your systems run efficiently with quick and dependable support.",
  },
];

export default function WhyChooseUs() {
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <div className="bg-[#2D2D2D] ">
      <div className="grid grid-cols-2 mb-16 gap-12 max-w-7xl mx-auto px-8">
        <h2 className="text-4xl md:text-5xl font-semibold  mb-12 text-white max-w-2xl leading-14">
          Trusted Boilers, Built for Lasting Performance{" "}
        </h2>
        <div>
          <CommonChipHeading chipTitle={"Why Choose Us"} />
          <p className="text-white mt-4 text-lg font-semibold">
          Delivering high-quality boiler solutions across multiple industries, designed to maximize productivity, reduce downtime, and ensure lasting performance.
          </p>
        </div>
      </div>
      {services.map((service) => (
        <div
          key={service.id}
          className={`relative overflow-hidden mx-auto transition-all border-b border-b-white duration-500 ease-in-out ${
            service.bgColor
          } ${hoveredService === service.id ? "h-60" : "h-28"} `}
          onMouseEnter={() => setHoveredService(service.id)}
          onMouseLeave={() => setHoveredService(null)}
        >
          {/* Main Service Row */}
          <div className="grid grid-cols-3  px-4 py-8 h-24 max-w-7xl mx-auto">
            {/* Number */}
            <div className="text-white/70  font-light text-2xl ">
              {service.id}
            </div>
            {/* Icon */}

            <div
              className={`flex  ${
                hoveredService === service.id
                  ? "justify-center"
                  : "items-center justify-center"
              }`}
            >
              {service.icon}
            </div>
            <div className=" ">
              {/* Title */}
              <h2 className="text-white text-3xl font-medium tracking-wide">
                {service.title}
              </h2>
              {hoveredService === service.id && (
                <div
                  className={`transition-all duration-500 ease-in-out  ${
                    hoveredService === service.id
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-4"
                  }`}
                >
                  <div className="max-w-4xl pt-2">
                    <p className="text-white/90 text-lg ">
                      {service.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Dropdown Content */}
        </div>
      ))}
    </div>
  );
}
