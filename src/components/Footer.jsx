// components/Footer.js

import React from "react";
import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#252525] px-6 lg:px-8 py-9 md:py-20">
      {/* Top Section */}
      <div className="relative">
        <div className="container max-w-7xl mx-auto  ">
          <div className="w-full flex flex-col md:flex-row justify-between md:items-center pb-14 mb-14 border-b border-white">
            <h2 className=" text-white text-3xl md:text-4xl max-w-3xl md:leading-12 font-bold">
              Powering Industries With <span className="text-white">Durable </span>And <span className="text-white">Efficient</span> Boiler Systems
            </h2>
            <Link href={"/all-products"} className="bg-[#DC2621] text-center text-white py-3 h-fit mt-8 md:mt-0 px-8 rounded hover:bg-transparent hover:border-white   font-medium  border border-black transition-colors duration-300 md:text-base text-sm">
              View All Products
            </Link>
          </div>
          <div className="grid gap-4 md:gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {/* Column 1: Brand and Description */}
            <div className="lg:col-span-2">
              <Link href="/" className="font-logo text-6xl text-gray-800 ">
                <Image
                  src="/assets/epe.png"
                  alt="Energy Process Equipments (EPE)"
                  height={140}
                  width={380}
                />
              </Link>
              <p className="text-white mt-6 max-w-xl">
                Energy Process Equipments (EPE) has been designing and
                manufacturing boilers for over 15 years, thus developing a
                reputation for producing reliable and long-life products. Since
                its inception on February 25, 1994, the company is catering to
                various requirements involving an assortment of specifications
                of boilers for diverse applications.
              </p>
            </div>

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
                  <Link href="/about-us" className="text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/infrastructure" className="text-white transition-colors">
                    Infrastructure
                  </Link>
                </li>
                <li>
                  <Link href="/our-clients" className="text-white transition-colors">
                    Our Clients
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="text-white transition-colors">
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
                  <Link href="/product/ibr-boiler" className="text-white transition-colors">
                    IBR Boiler
                  </Link>
                </li>
                <li>
                  <Link href="/product/small-industrial-boiler-sib" className="text-white transition-colors">
                    Small Industrial Boiler [SIB]
                  </Link>
                </li>
                <li>
                  <Link href="/thermic-fluid-heaters-thermopack" className="text-white transition-colors">
                   Thermic Fluid Heaters [Thermopack]
                  </Link>
                </li>
                <li>
                  <Link href="/hot-air-generators" className="text-white transition-colors">
                    Hot Air Generators
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section: Contact Info and Appointment */}
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-2 lg:px-0 pt-14">
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
          <Link href={"/contact-us"} className="font-bold text-lg lg:text-xl hover:opacity-90 transition-opacity">
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
