// components/Footer.js

import React from "react";
import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const Footer = () => {
  return (
    <footer className="bg-[#171717] px-6 lg:px-8 py-9 md:py-20 relative h-[75vh]">
      {/* Top Section */}

      <div className="">
        <div className="container max-w-7xl mx-auto  ">
          <div className="grid gap-4 md:gap-12 sm:grid-cols-2">
            {/* Column 1: Brand and Description */}
            <div className="">
              <Image
                src="/assets/footer.png"
                alt="epe"
                height={500}
                width={900}
                className="absolute left-0 "
              />
            </div>
            <div className="z-20">
              <div>
                              <h2 className="text-5xl text-white mb-6">Let’s Talk Affiliate Marketing</h2>
                              <Link href={"#"} className="bg-gray-300/50 rounded-full font-bold text-white px-4 py-2 flex items-center gap-2 w-fit">Contact Us <GoArrowUpRight />
</Link>

              </div>
              
              <div className="grid grid-cols-2 z-20 mt-9">
                {/* Column 2: Product Links */}
                <div className="mt-4">
                  <div className="relative w-full max-w-2xl mx-auto mb-16">
                    {/* Trapezoid shape */}

                    {/* Text on top of the shape */}
                    <div className=" text-2xl absolute inset-0  text-white font-bold">
                      Quick Links
                    </div>
                  </div>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/about-us"
                        className="text-lg text-white transition-colors"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/infrastructure"
                        className="text-lg text-white transition-colors"
                      >
                        Infrastructure
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/our-clients"
                        className="text-lg text-white transition-colors"
                      >
                        Our Clients
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact-us"
                        className="text-lg text-white transition-colors"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Column 3: Services Links */}
                <div className="mt-4">
                  <div className="relative w-full max-w-2xl mx-auto mb-10">
                    {/* Trapezoid shape */}
                    <div className="h-7 clip-trapezoid-footer"></div>

                    {/* Text on top of the shape */}
                    <div className=" text-2xl absolute inset-0  text-white font-bold ">
                      Our Products
                    </div>
                  </div>

                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/product/ibr-boiler"
                        className="text-lg text-white transition-colors"
                      >
                        IBR Boiler
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/product/small-industrial-boiler-sib"
                        className="text-lg text-white transition-colors"
                      >
                        Small Industrial Boiler [SIB]
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/thermic-fluid-heaters-thermopack"
                        className="text-lg text-white transition-colors"
                      >
                        Thermic Fluid Heaters [Thermopack]
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/hot-air-generators"
                        className="text-lg text-white transition-colors"
                      >
                        Hot Air Generators
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* Column 3: Services Links */}
              </div>
            </div>
          </div>
          <Image
            src={"/assets/footer-name.png"}
            alt="footer-name"
            className="absolute top-auto bottom-0 w-full left-0 right-0 opacity-50"
            height={100}
            width={800}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
