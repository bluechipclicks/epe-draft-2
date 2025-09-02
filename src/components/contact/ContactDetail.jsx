"use client"; // Required for Framer Motion hooks and components

import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import { LuPrinterCheck } from "react-icons/lu";
import { TbMailSpark, TbPhoneCheck } from "react-icons/tb";
import { GrMapLocation } from "react-icons/gr";
import { motion } from "framer-motion"; // Import motion

export default function ContactDetail() {
  const contactDetails = [
    {
      icon: <GrMapLocation className="text-white text-4xl" />,
      title: "Our Location",
      type: "location",
      content:
        "Plot No. 29, G.I.D.C. Industrial Estate, N.H. No.8, POR-Ramangamdi, Vadodara - 391243, Gujarat (India)",
      link: "https://maps.app.goo.gl/e8RqH5e6fcvFz4mGA",
    },
    {
      icon: <TbPhoneCheck className="text-white text-4xl" />,
      title: "Call us",
      type: "phone",
      contacts: [
        "+91 (265) 2830375",
        "+91 (265) 2830975",
        "+91 (265) 2831475",
        "+91 (265) 2831414",
      ],
    },
    {
      icon: <TbMailSpark className="text-white text-4xl" />,
      title: "Mail us 24/7",
      type: "email",
      emails: [
        "info@energy-boilers.com",
        "energyboiler@yahoo.com",
        "sales@energy-boilers.com",
      ],
    },
    {
      icon: <LuPrinterCheck className="text-white text-4xl" />,
      title: "Fax",
      type: "fax",
      content: "+91 (265) 2830975",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, // Stagger the animation of children by 0.2 seconds
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 }, // Start hidden and below original position
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }, // Animate to visible and original position
  };

  return (
    <motion.section
      className="py-12 md:py-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {contactDetails.map((detail, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg flex flex-col justify-between relative group overflow-hidden"
              variants={itemVariants} // Apply item animation variant to each card
            >
              <div>
                <div className="flex gap-4">
                  <div className="border border-white rounded-full p-4 w-fit bg-black mb-3 md:mb-6">
                    {detail.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-black pt-4 mb-4">
                    {detail.title}
                  </h3>
                </div>

                <div className="absolute w-11/12 h-0.5 ">
                  <div className="absolute w-11/12 h-full bg-gray-200"></div>
                  <div className="absolute w-0 h-full bg-gray-400 transition-all duration-300 group-hover:w-11/12"></div>
                  <div className="absolute top-1/2 right-6 transform -translate-y-1/2 w-2 h-2 bg-gray-200 rounded-full transition-colors duration-300 group-hover:bg-gray-400"></div>
                </div>

                {detail.type === "location" && (
                  <div className="mt-6 max-w-sm">
                    <Link
                      href={detail.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black leading-relaxed hover:text-[#DC2621] transition-colors"
                    >
                      {detail.content}
                    </Link>
                  </div>
                )}

                {detail.type === "phone" && (
                  <div className="space-y-1 text-black mt-6">
                    {detail.contacts.map((phone, i) => (
                      <p key={i}>
                        <a
                          href={`tel:${phone.replace(/\s|\(|\)|-/g, "")}`}
                          className="hover:text-[#DC2621] transition-colors"
                        >
                          {phone}
                        </a>
                      </p>
                    ))}
                  </div>
                )}

                {detail.type === "email" && (
                  <div className="space-y-1 text-gray-600 mt-6">
                    {detail.emails.map((email, i) => (
                      <p key={i}>
                        <a
                          href={`mailto:${email}`}
                          className="hover:text-[#DC2621] transition-colors"
                        >
                          {email}
                        </a>
                      </p>
                    ))}
                  </div>
                )}

                {detail.type === "fax" && (
                  <p className="text-black hover:text-[#DC2621] transition-colors mt-6">
                    {detail.content}
                  </p>
                )}
              </div>

              <button className="absolute bottom-6 right-6 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors group-hover:bg-[#DC2621] group-hover:text-white">
                <FiArrowUpRight className="text-gray-700 group-hover:text-white" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}