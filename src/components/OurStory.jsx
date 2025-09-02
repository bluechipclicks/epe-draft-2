// components/BrandStory.js
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CommonChipHeading from "./CommonChipHeading";

const horizontalLineVariants = {
  hidden: { width: 0 },
  visible: (i) => ({
    width: "100%",
    transition: {
      duration: 1,
      delay: i * 0.3, // staggered animation
      ease: "easeInOut",
    },
  }),
};
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function OurStory() {
  const numberOfLines = 6;
  const stats = [
    {
      value: "15+ ",
      titleLine1: " Years Industry",
      titleLine2: "Experience",
      description:
        "Delivering trusted boiler solutions since 1994, built on engineering excellence and long-term customer satisfaction.",
    },
    {
      value: "840+",
      titleLine1: "Satisfied",
      titleLine2: "Clients",
      description:
        "Serving hundreds of clients with reliable, long-life thermal systems and efficient after-sales service.",
    },
    {
      value: "7+",
      titleLine1: "Sectors",
      titleLine2: "Served",
      description:
        "Providing tailored boiler applications across key industries including food, textile, chemical, hospitality, and more.",
    },
    {
      value: "24/7",
      titleLine1: "Service",
      titleLine2: "Support",
      description:
        "Round-the-clock technical support and maintenance services to ensure maximum uptime and client satisfaction.",
    },
  ];

  return (
    <div className=" text-white h-screen flex items-center justify-center px-8">
      <div className="flex flex-col md:flex-row w-full max-w-7xl  gap-12 ">
        {/* LEFT SIDE: Graph animation */}
        <div className="relative w-full md:w-1/2 h-[550px] flex items-end justify-around ">
          {/* Animated Horizontal Lines */}
          {[...Array(numberOfLines)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[1px] bg-gray-200/50" // Removed 'bottom-0'
              custom={i}
              initial="hidden"
              animate="visible"
              variants={horizontalLineVariants}
              style={{
                left: "0",
                right: "0",
                top: `${i * 25}%`, // Changed from 'bottom' to 'top'
              }}
            />
          ))}

          {/* Optional Logo Card */}
          <div className="absolute -top-5 left-5 transform ">
            <div className="w-32 h-40 bg-white flex items-center justify-center rounded-2xl">
              {/* Replace with actual icon/image if needed */}
              <Image
                src={"/assets/epe-icon.png"}
                alt="epe-icon"
                height={60}
                width={60}
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Text Content */}
        <div className="md:w-1/2 bottom-8 relative">
          <CommonChipHeading chipTitle={"About Us"} />
          <h2 className="text-4xl md:text-6xl font-medium mt-6  mb-12">
            We love being your growth partner
          </h2>
          <p className="text-gray-300 mb-12 text-lg md:text-xl">
            Among boiler manufacturers and boiler maintenance companies, Energy
            Process Equipments has established its name for innovation. Through
            a commitment to research and development and a sound adaptable
            strategy, today the company is involved into the creation of IBR,
            Thermic Fluid Heating Systems, Hot Air Generators, DM Plants, IBR
            Boiler Repairs among others.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-400">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50/10 p-8 rounded-lg text-center shadow-md border-b border-b-white/40"
              >
                <p className="text-3xl md:text-4xl  font-bold text-white">
                  {stat.value}
                </p>
                <h3 className="mt-3 text-lg font-bold text-white leading-tight">
                  {stat.titleLine1}
                  &nbsp;
                  {stat.titleLine2}
                </h3>
                {/* <p className="mt-3 text-sm ">{stat.description}</p> */}
              </motion.div>
            ))}
            {/* <p>
              They created a new kind of affiliate agency that could meet the
              rapidly evolving media and partnerships landscape.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
