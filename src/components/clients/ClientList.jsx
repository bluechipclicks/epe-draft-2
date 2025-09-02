"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion


const ClientList = ({clientData,heading}) => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="bg-white py-12 md:py-20 px-6 lg:px-8  ">
      <div className="container max-w-7xl mx-auto pb-12 md:pb-20">
        <div className="text-center mx-auto">
          <h2 className="text-3xl mb-6 md:mb-16 sm:text-4xl font-bold text-gray-900 tracking-tight">
           {heading}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {clientData.map((client, index) => (
            <motion.div
              key={index}
              className="group flex flex-col border border-gray-200 transition-all duration-300 hover:shadow-lg hover:border-transparent"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.1 }}
            >
              <div className="flex-grow flex items-center justify-center p-10 min-h-[180px]">
                <Image
                  src={client.imgSrc}
                  alt={client.company}
                  height={200}
                  width={200}
                  className="object-contain h-20"
                />
              </div>

              <div className="w-full px-6 pb-10 ">
                <p className=" text-sm text-gray-500 font-medium group-hover:text-[#DC2621]">
                  {client.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    
    
    </section>
  );
};

export default ClientList;
