"use client"; // Required for Framer Motion

import React from "react";
import { motion } from "framer-motion"; // Import motion

// Infrastructure data remains the same

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Small delay between each item
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 }, // Start hidden and 50px down
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Animate to visible and original position
};

const InfrastructureList = () => {
  const infrastructureData = [
    {
      makerName: "Fabgear",
      machine: "CNC Plasma Plate Cutting M/c",
      size: "3000 mm x 12000 mm",
      machineData2: ["CNC Computerized fully auto-matic with Plasma system"],
    },
    {
      makerName: "Skill Weld Bombay",
      machine: "Inverter Welding M/c",
      size: "400 Amp. - 10 Nos. / 500 Amp. - 10 Nos.",
      machineData2: ["Electronics Operated Fully Automatic"],
    },
    {
      makerName: "Standard",
      machine: "Rectifier Welding M/c",
      size: "400 Amp. (Each)",
      machineData2: ["Electrically operated welding rectifier"],
    },
    {
      makerName: "Kriton & Technique",
      machine: "Welding Machines",
      size: "300 Amp. (2 Sets), 200 Amp. (2 Sets)",
      machineData2: ["Air Cooled"],
    },
    {
      makerName: "ASPEE",
      machine: "Hydraulic Test Pump",
      size: "0 to 100 Kg/Cm² (6 Sets)",
      machineData2: [
        "Hydraulic Test Pump",
        "Positive Displacement Piston Pump with Water Sump",
      ],
    },
    {
      makerName: "Jalaram",
      machine: "Plate Bending Machine",
      size: "Bending Cap. Up to 25mm",
      machineData2: ["Three Roller Bending Machine"],
    },
    {
      makerName: "Jalaram",
      machine: "Hydraulic Power Press",
      size: "Pre. Punching 1000 Tons, Cap. Up to 40 mm",
      machineData2: ["Oil Hydraulic Cylinder type"],
    },
    {
      makerName: "Hercules Hoist",
      machine: "Over Head Crane ",
      size: "15 Tons & 10 Tons Total - 6 Nos.",
      machineData2: [
        "Over Head Crane with long & cross travel facility, Height-6.75 Mtr.",
      ],
    },
    {
      makerName: "Makson",
      machine: "Radial Drilling Machine",
      size: "75 mm drilling & 100 mm boring in M.S.",
      machineData2: ["Heavy Duty Radial Drilling M/c with boring attachment"],
    },
    {
      makerName: "Saraswati",
      machine: "Drilling Machine",
      size: "Up to 40 Dia. Hole",
      machineData2: ["Portable Drilling Machine"],
    },
    {
      makerName: "KPT/Bosch",
      machine: "Grinder (40 Nos.)",
      size: "8500 RPM, 230 V",
      machineData2: ["Portable Disc Grinder, AG-7, AG-9 & CQ-4 Type"],
    },
    {
      makerName: "Super",
      machine: "Air Compressor",
      size: "0 to 10 Kg/Cm²",
      machineData2: ["Portable Compressor"],
    },
    {
      makerName: "Rasco",
      machine: "Gas Cutting Set (15 sets)",
      size: "Up to 100mm",
      machineData2: ["Gas Cutter with Pre. Gauge"],
    },
    {
      makerName: "MLKM",
      machine: "Metal Cutting Bandsaw",
      size: "Cutting Cap. 200 mm",
      machineData2: ["Automatic metal cutting"],
    },
    {
      makerName: "Saraswati",
      machine: "Hacksaw Machine",
      size: 'Up to 8" NB Cutting',
      machineData2: ["M/c. with 1 H.P. motor Pulley & V-Belts"],
    },
    {
      makerName: "Sagar",
      machine: "Lathe Machine",
      size: "4.5'",
      machineData2: ["M/c. with 1 H.P. motor"],
    },
    {
      makerName: "Sagar",
      machine: "Lathe Machine",
      size: "6'",
      machineData2: ["M/c. with 3 H.P. Motor"],
    },
    {
      makerName: "ESAB",
      machine: "Pug Cutting Machine",
      size: "32 mm Thick.",
      machineData2: ["Pug cutting M/c. with Circle cutting track"],
    },
    {
      makerName: "Wolf",
      machine: "Hand Drill (2 Nos.)",
      size: "13 mm",
      machineData2: ["Medium Heavy Duty"],
    },
    {
      makerName: "Indef",
      machine: "Chain Pulley Block",
      size: "10 Ton (3 Nos.)",
      machineData2: ["Super Gear with 10 Mtr. Chain"],
    },
    {
      makerName: "Indef",
      machine: "Chain Pulley Block",
      size: "5 Ton (3 Nos.)",
      machineData2: ["Super Gear with 10 Mtr. Chain"],
    },
    {
      makerName: "Indef",
      machine: "Chain Pulley Block",
      size: "3 Ton (5 Nos.)",
      machineData2: ["Super Gear with 10 Mtr. Chain"],
    },
    {
      makerName: "Wolf",
      machine: "Bench Grinder",
      size: '7" Disc - 1 No.',
      machineData2: [""],
    },
    {
      makerName: "Metalace",
      machine: "Hand Shearing M/c.",
      size: "Up to 5mm cutting",
      machineData2: [""],
    },
    {
      makerName: "Indef",
      machine: "Material Handling Equip.",
      size: "Up to 14 Ton",
      machineData2: ["For Material Handling (Erection Crane)"],
    },
    {
      makerName: "EPE",
      machine: "Pipe Bending M/c",
      size: "1 No.",
      machineData2: ["for MS Coil winding"],
    },
  ];

  return (
    <motion.section
      className="bg-white py-12 sm:py-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold mb-6 md:mb-12"
          variants={itemVariants} // Animate the heading as well
        >
          Infrastructure
        </motion.h2>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {infrastructureData.map((data, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg text-center shadow-md border-b-4 border-b-[#DC2621] border-t border-t-gray-200/40 hover:scale-105 hover:shadow-lg"
              variants={itemVariants} // Apply the item animation to each card
            >
              <p className="text-xl md:text-2xl font-bold text-[#DC2621]">
                {data.makerName}
              </p>
              <h3 className="mt-3 text-lg font-bold leading-tight">
                {data.machine}
              </h3>
              <p className="mt-3 text-sm">{data.machineData2}</p>
              <p className="mt-3 text-sm">{data.size}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default InfrastructureList;
