// components/IndustryWeServe.js
"use client"; // Add this line for Next.js 13+ App Router

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import ContactModal from "./ContactModal";
import CommonChipHeading from "./CommonChipHeading";

gsap.registerPlugin(ScrollTrigger);

const IndustryWeServe = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products = [
    {
      title: "Automotive and Engineering Industry",
      image: "/assets/applications/automotive-engineering-industry.webp",
      description:
        "Efficient steam and heat solutions powering precision processes, manufacturing lines, and heavy-duty engineering equipment across the automotive and engineering sectors worldwide.",
    },
    {
      title: "Hospitality and Laundry Services",
      image: "/assets/applications/industrial-laundries.webp",
      description:
        "Reliable boiler systems for high-volume laundry, hotel heating, and sanitation processes, ensuring uninterrupted service and consistent thermal performance in hospitality environments.",
    },
    {
      title: "Paper and Pulp Industry",
      image: "/assets/applications/paper-industry.webp",
      description:
        "Customized thermal energy systems supporting drying, pulping, and chemical recovery processes essential for high-efficiency production in paper and pulp manufacturing industries.",
    },
    {
      title: "Chemical and Process Industry",
      image: "/assets/applications/chemical-industry.webp",
      description:
        "Precision-engineered boiler systems built to handle critical temperature control and continuous operations in complex, demanding chemical and process manufacturing facilities.",
    },
    {
      title: "Textile and Garment Industry",
      image: "/assets/applications/textile-industry.webp",
      description:
        "Steam solutions for dyeing, drying, and fabric finishing, offering optimal energy efficiency and production reliability across textile and garment manufacturing operations.",
    },
    {
      title: "Food and Beverage Industry",
      image: "/assets/applications/food-industry.webp",
      description:
        "Hygienic and consistent heating systems used in cooking, sterilization, and food-grade processing, ensuring safety and compliance in food and beverage plants.",
    },
  ];

  const cardsRef = useRef([]);

  useEffect(() => {
    if (window.innerWidth > 991) {
      const cards = cardsRef.current;
      const lastCard = cards[cards.length - 1];

      cards.forEach((card, index) => {
        const scaleValue = 0.8 - (cards.length - 1 - index) * 0.05;

        ScrollTrigger.create({
          trigger: card,
          start: "-40% top",
          pin: true,
          pinSpacing: false,
          scrub: true,
          end: () => `+=${lastCard.offsetTop - card.offsetTop}`,
          onUpdate: (self) => {
            gsap.to(card, {
              scale: 1 - self.progress * (1 - scaleValue),
              transformOrigin: "50% 50%",
            });
          },
        });
      });
    }
  }, []);

  return (
    <section className=" bg-[#2D2D2D]  pt-12 md:pt-24">
      {/* <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center px-6 lg:px-8">
        Industries We Serve
      </h2>
      <p className=" max-w-7xl mx-auto text-black mb-8 md:mb-16 text-center px-6 lg:px-8">
        Your Trusted Partner for Comprehensive Boiler Engineering Solutions
      </p> */}

      <section className="work-card  text-white px-6 lg:px-8">
        <div className="container max-w-7xl mx-auto ">
          <div className="grid grid-cols-2 gap-12 mb-16">
            <div>
              <CommonChipHeading chipTitle={"Industries We Serve"} />
              <p className="text-white mt-4 text-lg font-semibold">
                Energy Process Equipments (EPE) offers innovative and reliable
                solutions, including IBR Boilers and Heating Systems.
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold   text-white max-w-2xl leading-14">
              Your Trusted Partner for Comprehensive Boiler 
            </h2>
          </div>
          <div className="cards">
            {products.map((product, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="card-item mb-20  rounded-lg text-white bg-[#252525]  shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 ">
                  <div className="lg:col-span-5 flex flex-col justify-between p-6 md:p-20">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-4 hover:text-[#DC2621] transition-colors">
                        {product.title}
                      </h3>
                      <p className=" text-sm md:text-base md:leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                    <div className="mt-4 md:mt-10">
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="tag inline-block py-2 px-4 border hover:border-gray-300/60 hover:bg-transparent border-[#DC2621]  text-white rounded bg-[#DC2621] transition-colors"
                      >
                        Know More
                      </button>
                    </div>
                  </div>
                  <div className="lg:col-span-7 md:p-5">
                    <div className="relative w-full h-64 lg:h-full rounded-lg">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {isModalOpen && (
          <ContactModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        )}
      </section>
    </section>
  );
};

export default IndustryWeServe;
