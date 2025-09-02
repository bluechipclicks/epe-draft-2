// app/components/AnimatedText.tsx
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function TextAnimation() {
  const [startAnimation, setStartAnimation] = useState(false);

  // Trigger animation after 16s
  useEffect(() => {
    const timer = setTimeout(() => setStartAnimation(true), 7000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
      className="flex flex-col justify-center h-screen  text-[#AEAAAA]"
      initial={{ opacity: 0 }}
      animate={{ opacity: startAnimation ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      {/* First Line - bottom to top */}
      <motion.h1
        className="text-3xl md:text-[9vw] font-bold uppercase text-left px-4 leading-40"
        initial={{ y: 150, opacity: 0 }}
        animate={startAnimation ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease: "backIn" }}
      >
    Energy Process
      </motion.h1>

      {/* Second Line - top to bottom */}
      <motion.h2
        className="text-4xl md:text-[9vw] font-bold uppercase text-right px-4 leading-40"
        initial={{ y: -50, opacity: 0 }}
        animate={startAnimation ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease: "backIn", delay: 0.3 }}
      >
       Equipments (EPE)
      </motion.h2>
    </motion.section>
  );
}
