// app/components/AnimatedText.tsx
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function TextAnimation() {
  const [startAnimation, setStartAnimation] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  // Trigger animation after 16s
    useEffect(() => {
    // First trigger text after 7s
    const timer = setTimeout(() => {
      setStartAnimation(true);

      // After text shows, then overlay comes in
      setTimeout(() => setShowOverlay(true), 1000); // delay overlay by 1.5s
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
  return (

    <div className="h-screen bg-black/0 inset-0">
            {/* Overlay appears after text animation starts */}
      {showOverlay && (
        <motion.div
          className="absolute inset-0 bg-black/60 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }} // full black
          transition={{ duration: 1 }}
        />
      )}

      <motion.section
        className="flex flex-row justify-center items-center h-screen text-[#AEAAAA] z-10 px-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: startAnimation ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        {/* Left word */}
        {/* <motion.h1
          className="text-3xl md:text-[9vw] font-bold py-40 uppercase z-10 leading-tight"
          initial={{ y: 150, opacity: 0 }}
          animate={startAnimation ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "backIn" }}
        >
          EPE
        </motion.h1> */}

        {/* Right word */}
        <motion.h1
          className="text-3xl md:text-[8.3vw] text-center font-bold  uppercase z-10 leading-tight"
          initial={{ y: 150, opacity: 0 }}
          animate={startAnimation ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "backIn", delay: 0.2 }}
        >
          POWERING THE WORLD
        </motion.h1>


        {/* <motion.h2
          className="text-4xl md:text-[7vw] font-bold uppercase text-right z-10 leading-tight"
          initial={{ y: -50, opacity: 0 }}
          animate={startAnimation ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "backIn", delay: 0.3 }}
        >
          THE WORLD
        </motion.h2> */}
      </motion.section>
    </div>



  );
}
