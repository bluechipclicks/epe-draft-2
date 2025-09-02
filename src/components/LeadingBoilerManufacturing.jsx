// components/AwardsSection.jsx
import Image from "next/image";
import React from "react";
import CommonChipHeading from "./CommonChipHeading";

const AwardItem = ({
  title,
  awardName,
  recipient,
  description,
  bgColor,
  hasGlow = false,
}) => {
  return (
    <div
      className={`relative p-8 py-16 overflow-hidden transition-all duration-300 ease-in-out 
        ${bgColor}
        ${hasGlow ? "group" : ""} // Add group class for hover effect
      `}
    >
      {/* Hover Glow Effect */}
      <div
        className={`absolute bottom-0 right-0 w-11/12  h-full opacity-0 transition-opacity duration-500 ease-in-out
          bg-gradient-to-b from-white via-red-400 to-red-400 rounded-full filter blur-2xl z-0
          group-hover:opacity-40  transform translate-x-[45%]  translate-y-1/5 -rotate-45
        `}
      ></div>

      <div className="relative z-10 flex flex-col md:flex-row justify-between max-w-7xl mx-auto ">
        <h3 className="text-4xl font-semibold text-gray-200 mb-4 md:mb-0 md:w-3/5">
          {title}
        </h3>
        <div className="flex gap-4 text-gray-400 md:w-2/3">
          <div className="text-2xl mt-1 mr-3">
            <Image src="/assets/award.svg" alt="award" height={60} width={60} />
          </div>{" "}
          {/* Award icon */}
          <div>
            <p className="text-2xl font-medium text-white">{awardName}</p>
            {/* {recipient && <p className="text-sm mt-6">{recipient}</p>} */}
            {description && (
              <p className="text-lg mt-6 text-gray-300 font-semibold">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const LeadingBoilerManufacturing = () => {
  return (
    <section className=" flex flex-col justify-center items-center">
      <div className="px-8">
        <div className="max-w-7xl mx-auto pt-24">
          <div className="grid grid-cols-2 gap-12 mb-16">
            <div>
              <CommonChipHeading chipTitle={"Leading Boiler Manufacturing"} />
              <p className="text-white mt-4 text-lg ">
               Energy Process Equipments (EPE) has been designing and manufacturing boilers for over 15 years, thus developing a reputation for producing reliable and long-life products
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold   text-white max-w-2xl leading-14">
              Your Trusted Partner for Comprehensive Boiler Engineering
              Solutions
            </h2>
          </div>
        </div>
      </div>

      <div className=" w-full">
        <AwardItem
          title="Engineering Trust, Delivering Heat"
          awardName="Boiler Systems Built for Reliability"
          description="With over 15 years’ experience, we design durable boilers tailored to meet varied industrial heat demands."
          bgColor="bg-[#262626]"
          hasGlow={true}
        />
        <AwardItem
          title=" Driven by Smart Innovation"
          awardName="Powered by Innovation, Built for Performance"
          recipient="Joseph Waite, Account Manager"
          description="From IBR boilers to fluid systems, our team pioneers adaptable, efficient solutions tailored to industry needs."
          bgColor="bg-[#202020]"
          hasGlow={true}
        />
        <AwardItem
          title="Support Beyond the Product"
          awardName="Trusted Service, Anytime You Need"
          recipient="Faique Moqeet, CEO"
          description="EPE ensures 24/7 prompt maintenance, upgrades, and spare part management for maximum uptime and customer satisfaction."
          bgColor="bg-[#262626]"
          hasGlow={true}
        />
      </div>
    </section>
  );
};

export default LeadingBoilerManufacturing;
