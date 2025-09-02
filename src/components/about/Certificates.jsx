"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LiaCertificateSolid } from "react-icons/lia";

const services = [
  {
    title: "IBR Boiler Manufacture License",
    description:
      "We successfully cope with of varying complexity, provide long-term guarantees",
    icon: "/assets/about/certificates/ibr_boiler.webp",
  },
  {
    title: "IBR Boiler Repairing License",
    description:
      "We successfully cope with of varying complexity, provide long-term guarantees",
    icon: "/assets/about/certificates/ibr_pipeline_fabrication.png",
  },
  {
    title: "IBR Fabrication License",
    description:
      "We successfully cope with of varying complexity, provide long-term guarantees",
    icon: "/assets/about/certificates/ibr_boiler_repairing.webp",
  },
];

// Animation variants for the container and its items
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Time delay between each child animation
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 }, // Start hidden and 50px down
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Animate to visible and original position
};

export default function Certificates() {
  return (
    <motion.section
      className="py-4 sm:py-20 bg-white text-center max-w-7xl mx-auto px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} // Ensures animation runs only once
    >
      <motion.div variants={itemVariants}>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center">
          Certifications
        </h2>
        <p className="max-w-7xl mx-auto mb-6 md:mb-10 text-center text-sm md:text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
          delectus hic pariatur quam laudantium, soluta fuga suscipit fugiat ex
          tempora. Eaque delectus hic pariatur quam laudantium, soluta fuga
          suscipit fugiat ex tempora.
        </p>
      </motion.div>

      <motion.div
        className="w-full flex justify-center"
        variants={itemVariants} // This whole block will animate as one item
      >
        <div className="rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-b-4 border-b-[#DC2621] mb-12">
          <Image
            src={"/assets/about/certificates/crisil.webp"}
            alt={"NSIC - CRISIL Rating"}
            height={600}
            width={400}
            className="border border-gray-200/80 w-full object-cover rounded-lg"
          />
          <h3 className="md:text-xl font-semibold mt-4 mb-2 flex items-center gap-2 w-full justify-center">
            <LiaCertificateSolid className="text-[#DC2621] md:text-2xl" />
            NSIC - CRISIL Rating
          </h3>
        </div>
      </motion.div>

      {/* The grid container will orchestrate the staggered animation for its children */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={containerVariants} // You can re-apply containerVariants for nested staggering
      >
        {services.map((service, index) => (
          // Apply the item variant to each certificate card
          <motion.div
            key={index}
            variants={itemVariants}
            className="rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-b-4 border-b-[#DC2621]"
          >
            <Image
              src={service.icon}
              alt={service.title}
              height={600}
              width={400}
              className="h-[460px] border border-gray-200/80 w-full object-cover rounded-lg"
            />
            <h3 className="md:text-xl font-semibold my-4 flex items-center gap-2 w-full justify-center">
              <LiaCertificateSolid className="text-[#DC2621] text-2xl" />
              {service.title}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}