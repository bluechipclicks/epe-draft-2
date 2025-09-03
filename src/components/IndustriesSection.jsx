'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const IndustriesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const industries = [
    {
          name: "IBR Boiler",
    image: "/assets/products/ibr.webp", 
      href: '/application',
      delay: 0.2
    },
    {
        name: "Small Industrial Boiler",
    image: "/assets/products/sib.webp", 
      href: '/application',
      delay: 0.4
    },
    {
      name: "Thermic Fluid Heaters",
    image: "/assets/products/thermopack.webp",
      href: '/application',
      delay: 0.5
    },
    {
       name: "Hot Air Generators",
    image: "/assets/products/hot-air-generators.webp",
      href: '/application',
      delay: 0.2
    },
   
   
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      scale: 0.8,
      opacity: 0
    },
    visible: { 
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const hoverVariants = {
    rest: { 
      flexGrow: 1,
      transition: {
        duration: 0.6,
        ease: [0.455, 0.03, 0.515, 0.955]
      }
    },
    hover: { 
      flexGrow: 2.5,
      transition: {
        duration: 0.6,
        ease: [0.455, 0.03, 0.515, 0.955]
      }
    }
  };

  const contentVariants = {
    rest: { 
      scaleX: 0.9,
      opacity: 0.8,
      transition: {
        duration: 0.6,
        ease: [0.455, 0.03, 0.515, 0.955]
      }
    },
    hover: { 
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.455, 0.03, 0.515, 0.955]
      }
    }
  };

  return (
    <section className="relative z-10 py-20">
      <div className="">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="text-red-500 text-sm font-medium uppercase tracking-wider mb-4 block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our engineering
          </motion.span>
          
          <motion.h3 
            className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-wider"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Industries We Serve
          </motion.h3>
          
          <motion.p 
            className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            At Desire Engineering, we offer specialized design engineering services across mechanical systems, 
            Teflon components, sight glass assemblies, elevator structures, and more.
          </motion.p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div 
          className="flex flex-wrap md:flex-nowrap gap-0 overflow-hidden rounded-lg"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              className="relative flex-1 group cursor-pointer"
              variants={hoverVariants}
              initial="rest"
              whileHover="hover"
              animate={hoveredIndex !== null && hoveredIndex !== index ? "rest" : "rest"}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <motion.div
                variants={itemVariants}
                className="relative h-96 md:h-[80vh] overflow-hidden"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover "
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0  bg-opacity-70"></div>
                </div>

                {/* Content */}
                <motion.div 
                  className="absolute bottom-8 left-0 right-0 p-6 z-10"
                  variants={contentVariants}
                  initial="rest"
                  animate={hoveredIndex === index ? "hover" : "rest"}
                >
                  <div className="flex justify-between items-center">
                    {/* name */}
                    <h2 className="text-white text-xl md:text-4xl font-bold tracking-wider">
                      <Link 
                        href={industry.href}
                        className="transition-colors duration-300"
                      >
                        {industry.name}
                      </Link>
                    </h2>

                    {/* Arrow Button */}
                    <Link href={industry.href}>
                      <motion.div 
                        className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-red-500 transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg 
                          className="w-5 h-5 text-white" 
                          viewBox="0 0 384 512" 
                          fill="currentColor"
                        >
                          <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z" />
                        </svg>
                      </motion.div>
                    </Link>
                  </div>
                </motion.div>

                {/* Gradient Overlay for Better Text Readability */}
                <div className="absolute bottom-0 left-0 right-0 h-full  bg-gradient-to-t from-black via-black/50 to-transparent top-0"></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;