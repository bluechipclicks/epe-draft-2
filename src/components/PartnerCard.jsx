import React from 'react';
import { motion } from 'framer-motion';


const PartnerCard = ({ logoText }) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-lg p-6 flex items-center justify-center h-32 text-white text-xl font-bold border border-gray-700"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {logoText}
    </motion.div>
  );
};

export default PartnerCard;