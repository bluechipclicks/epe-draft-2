// components/Footer.js

import React from "react";
import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const Footer = () => {
  return (
    <footer className="bg-[#171717] px-6 lg:px-8 py-9 md:py-24 relative">
      {/* Top Section */}

        <div className="">
          <div className=" w-full flex justify-between items-center pb-20">
            {/* Column 1: Brand and Description */}
            <div className="w-1/2 flex justify-center items-center">
              <Image
                src="/assets/footer-bg.webp"
                alt="epe"
                height={400}
                width={700}
                className="   opacity-30"
              />
            </div>
            <div className="z-20 w-1/2">
              <div>
                <h2 className="text-5xl md:text-7xl text-white mb-6 leading-20">
                  Let’s Talk Boiler Solutions
                </h2>
                <Link
                  href={"#"}
                  className="bg-gray-300/50 hover:bg-red-600 rounded-full font-bold text-white px-8 py-2 flex items-center gap-2 w-fit"
                >
                  Contact Us <GoArrowUpRight />
                </Link>
              </div>

              <div className="grid grid-cols-2 z-20 my-9">
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
                      Get in Touch
                    </div>
                  </div>

                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="#"
                        className="text-lg text-white transition-colors"
                      >
                        info@energy-boilers.com
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-lg text-white transition-colors"
                      >
                        +91 (265) 2830375
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-lg text-white transition-colors"
                      >
                        Plot No. 29, G.I.D.C. Industrial Estate, N.H. No.8,
                        POR-Ramangamdi, Vadodara - 391243, Gujarat (India)
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
    </footer>
  );
};

export default Footer;
