// components/Footer.js

import React from "react";
import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#171717] px-6 lg:px-8 py-9 md:py-20 relative">
      {/* Top Section */}
      <Image
        src="/assets/footer.png"
        alt="epe"
        height={500}
        width={800}
        className="absolute top-56 w-full left-0 right-0"
      />

      <div className="relative">
        <div className="container max-w-7xl mx-auto  ">
          <div className="grid gap-4 md:gap-12 sm:grid-cols-2">
            {/* Column 1: Brand and Description */}
            <div className="">
            
            </div>
            <div className="grid grid-cols-2">
              {/* Column 2: Product Links */}
              <div className="mt-4">
                <div className="relative w-full max-w-2xl mx-auto mb-4">
                  {/* Trapezoid shape */}
                  <div className="h-7  clip-trapezoid-footer"></div>

                  {/* Text on top of the shape */}
                  <div className="text-xl absolute inset-0  text-white font-bold">
                    Quick Links
                  </div>
                </div>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/about-us"
                      className="text-white transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/infrastructure"
                      className="text-white transition-colors"
                    >
                      Infrastructure
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/our-clients"
                      className="text-white transition-colors"
                    >
                      Our Clients
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact-us"
                      className="text-white transition-colors"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3: Services Links */}
              <div className="mt-4">
                <div className="relative w-full max-w-2xl mx-auto mb-4">
                  {/* Trapezoid shape */}
                  <div className="h-7 clip-trapezoid-footer"></div>

                  {/* Text on top of the shape */}
                  <div className="text-xl absolute inset-0  text-white font-bold ">
                    Our Products
                  </div>
                </div>

                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/product/ibr-boiler"
                      className="text-white transition-colors"
                    >
                      IBR Boiler
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/product/small-industrial-boiler-sib"
                      className="text-white transition-colors"
                    >
                      Small Industrial Boiler [SIB]
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/thermic-fluid-heaters-thermopack"
                      className="text-white transition-colors"
                    >
                      Thermic Fluid Heaters [Thermopack]
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/hot-air-generators"
                      className="text-white transition-colors"
                    >
                      Hot Air Generators
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section: Contact Info and Appointment */}
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-2 lg:px-0 pt-20">
        {/* Contact Info (White background) */}
        <div className="bg-white text-black p-8 flex-grow w-full lg:w-3/4">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 p-3 rounded-full">
                <FaPhoneAlt className="text-black h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold">Contact Number</p>
                <p className="text-gray-600">+91 (265) 2830375</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 p-3 rounded-full">
                <FaEnvelope className="text-black h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold">Email Us:</p>
                <p className="text-gray-600">info@energy-boilers.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 p-3 rounded-full">
                <FaClock className="text-black h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold">Opening Hours:</p>
                <p className="text-gray-600">Mon-Fri: 8am - 7pm</p>
              </div>
            </div>
          </div>
        </div>

        {/* Schedule Button (Orange background) */}
        <div className="bg-[#DC2621] text-white flex items-center justify-center p-4 md:p-8 w-full lg:w-1/4">
          <Link
            href={"/contact-us"}
            className="font-bold text-lg lg:text-xl hover:opacity-90 transition-opacity"
          >
            Let&apos;s Connect
          </Link>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="bg-[#252525]  max-w-7xl mx-auto">
        <div className="container mx-auto px-6 lg:px-8 pt-12">
          <p className="text-center text-white text-sm">
            © Copyright 2025 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
