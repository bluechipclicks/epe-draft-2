// // components/PartnerLogos.jsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CommonChipHeading from "./CommonChipHeading";

const partnerLogos = [
  {
    company: " Larsen & Toubro Limited",
    location: "Allahabad Project",
    imgSrc: "/assets/clients/l-and-t-logo.webp",
  },
  {
    company: " Steelco Gujarat Limited",
    location: "Palaj, Gujarat",
    imgSrc: "/assets/clients/steelco-gujarat-limited.webp",
  },
  {
    company: " National Dairy Develop Board",
    location: "NDDB, Anand",
    imgSrc: "/assets/clients/national-dairy-develop-board.webp",
  },
  {
    company: " BHEL Limited",
    location: "Hyderabad",
    imgSrc: "/assets/clients/bhel-limited.webp",
  },
  {
    company: " Gas Authority of India Limited",
    location: "Waghodia, Gujarat",
    imgSrc: "/assets/clients/gail.webp",
  },
  {
    company: " Birla Copper",
    location: "Dahej",
    imgSrc: "/assets/clients/birla-copper.webp",
  },
  {
    company: " Thermax Limited",
    location: "Pune",
    imgSrc: "/assets/clients/thermax.webp",
  },
  {
    company: " HOEC Limited",
    location: "Palaj",
    imgSrc: "/assets/clients/hoec-limited.webp",
  },
  {
    company: " Baroda Dairy Co.op. Milk Limited",
    location: "Bodeli",
    imgSrc: "/assets/clients/baroda-dairy.webp",
  },
  {
    company: " Electrothem (India) Limited",
    location: "Kutch",
    imgSrc: "/assets/clients/electrotherm.webp",
  },
  {
    company: " Vihita Bio-Chem Limited",
    location: "Ankleshwar",
    imgSrc: "/assets/clients/vihi.webp",
  },
  {
    company: " Bodal Chemical Limited",
    location: "Dudhwada, Baroda",
    imgSrc: "/assets/clients/BodalLogo.webp",
  },
  {
    company: " Gujarat Alkalies & Chemicals Ltd.",
    location: "Dahej, Dist.: Bharuch",
    imgSrc: "/assets/clients/gacl.webp",
  },
  {
    company: " Welspun Limited",
    location: "Anjar",
    imgSrc: "/assets/clients/welspun.webp",
  },
  {
    company: "Aimco Pesticides Limited",
    location: "Maharashtra",
    imgSrc: "/assets/clients/AIMCO-LOGO.webp",
  },
  {
    company: "GMM Pfaudler Limited",
    location: "Anand",
    imgSrc: "/assets/clients/gmm-pfaudler-limited.webp",
  },
  {
    company: "M/s. Tobinco Pharmaceuticals Limited",
    location: "Accra – Ghana",
    model_fuel: "IBO–15 – LDO",
    imgSrc: "/assets/clients/tobino.webp",
  },
  {
    company: "M/s. Gulf Environmental Company L.L.C",
    location: "Abu Dhabi",
    model_fuel: "IBO–10 – Gas",
    imgSrc: "/assets/clients/gulf-env.webp",
  },
  {
    company: "M/s. VFK Head Corporation",
    location: "Seoul, Korea",
    model_fuel: "IBO–0.5 – LDO",
    imgSrc: "/assets/clients/vfk.webp",
  },
  {
    company: "M/s. Basumati Distribution Ltd.",
    location: "Bangladesh",
    model_fuel: "TC–04 – FO",
    imgSrc: "/assets/clients/basumati.webp",
  },
  {
    company: "M/s. Midland Rolling Mills Ltd",
    location: "Abeokuta, Nigeria",
    model_fuel: "IBO–1.5 – FO",
    imgSrc: "/assets/clients/mrm.webp",
  },
  {
    company: "M/s. Finepack Industries Ltd",
    location: "Accra – Ghana",
    model_fuel: "SIB–0.5 Solid",
    imgSrc: "/assets/clients/finepack.webp",
  },
];

// Helper to duplicate logos for continuous scroll effect. Duplicated more times for smoother continuous scroll in reverse.

const Client = () => {
  const itemsPerColumn = Math.ceil(partnerLogos.length / 4);

  const column1 = partnerLogos.slice(0, itemsPerColumn);
  const column2 = partnerLogos.slice(itemsPerColumn, itemsPerColumn * 2);
  const column3 = partnerLogos.slice(itemsPerColumn * 2, itemsPerColumn * 3);
  const column4 = partnerLogos.slice(itemsPerColumn * 3);

  const columns = [column1, column2, column3, column4];
  // Animation duration for the scroll, increased by 1s (from 20s to 21s base)
  const baseAnimationDuration = 21;

  // New state to track the visible items for fade-up effect
  const [visibleItems, setVisibleItems] = useState({});

  const handleItemInView = (colIndex, logoIndex, inView) => {
    setVisibleItems((prev) => ({
      ...prev,
      [`${colIndex}-${logoIndex}`]: inView,
    }));
  };

  return (
    <section className="relative overflow-hidden bg-[#2C2C2C]">
      <div className="container max-w-7xl mx-auto px-8 pt-24">
        <div className="grid grid-cols-2 gap-12 ">
          <div>
            <CommonChipHeading chipTitle={"Our Clients"} />
            <p className="text-white mt-4 text-lg font-semibold max-w-xl">
              Energy Process Equipments (EPE) offers innovative and reliable
              solutions, including IBR Boilers and Heating Systems.
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold  mb-12 text-white max-w-2xl leading-14">
            Partnered with the Best Manufacturers Boilers
          </h2>
        </div>

        <div className="relative h-[700px] overflow-hidden mt-8">
          <div className="absolute inset-0 flex">
            {columns.map((column, colIndex) => (
              <motion.div
                key={colIndex}
                className={`flex flex-col flex-shrink-0 w-1/2 sm:w-1/4`}
                initial={{ y: "0%" }} // Start from 0% (bottom)
                animate={{
                  y: ["0%", "-100%"], // Animate from 0% to -100% to scroll up
                }}
                transition={{
                  duration: baseAnimationDuration + colIndex * 5, // Stagger animation duration for parallax effect
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                {column.map((logo, logoIndex) => (
                  <motion.div
                    key={`${colIndex}-${logoIndex}`}
                    className="flex flex-col items-center  justify-center border border-[#464646] rounded-xl h-48 md:h-56 p-6 py-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
                    exit={{ opacity: 0, transition: { duration: 1.2 } }}
                    viewport={{ margin: "-150px 0px -150px 0px", amount: 0.6 }}
                  >
                    <div className=" p-4 rounded-lg">
                      <Image
                        src={logo.imgSrc}
                        alt={logo.company}
                        width={150}
                        height={150}
                        className="h-32 object-contain grayscale"
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
