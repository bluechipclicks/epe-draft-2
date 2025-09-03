import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="about-sections bg-cover bg-no-repeat bg-center py-16 relative">
      <div className=" mx-auto px-4">
        <div className="about-wrapper relative">
          <div className="about-title mb-8">
            <h2
              className="
              text-[6vw]  mx-auto w-full mb-8
                           text-center
                           text-5xl md:text-[6vw] font-extrabold text-transparent  about-hover-fill-text relative cursor-pointer whitespace-nowrap
                           "
              data-text={"About Energy Process Equipments"}
            >
              About Energy Process Equipments
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Left Column */}
            <div className="lg:col-span-1">
              <div className="about-item flex flex-col px-8 lg:px-12 justify-end h-full items-center lg:items-start">
                <div className="about-details">
                  <div className="details-show">
                    <div className="about-details-info text-center lg:text-left">
                      <h3 className="text-white text-2xl font-semibold mb-4">
                        Reliable Solutions
                      </h3>
                      <p className="text-white text-base leading-relaxed">
                        With over 15 years of expertise, EPE provides reliable
                        boilers, ensuring durability, advancement, and
                        customer-driven innovation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Column - Image */}
            <div className="lg:col-span-1">
              <div className="about-img h-full flex items-center justify-center">
                <Image
                  src="/assets/products/solid-fuel-fired-package-steam-boiler.webp"
                  alt="solid-fuel-fired-package-steam-boiler"
                  height={600}
                  width={600}
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-1">
              <div className="about-item flex flex-col px-8 lg:px-12 justify-end h-full items-center lg:items-end">
                <div className="about-details">
                  <div className="details-show">
                    <div className="about-details-info text-center lg:text-right">
                      <h3 className="text-white text-2xl font-semibold mb-4">
                        Our Vision
                      </h3>
                      <p className="text-white text-base leading-relaxed">
                        To be respected as a high performance organization
                        offering sustainable solutions in energy and
                        environment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
