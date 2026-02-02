import React from "react";
import { motion } from "framer-motion";

function AnimationButton({text , customeclass=null}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className={`
    px-10 py-3 max-sm:px-5
    border border-[#945b25]
    rounded-full
    text-white
    ${customeclass ? customeclass : `
    hover:bg-[#c17632]  border-white
    `}
    hover:text-white
    transition-all duration-300
    tracking-wide
  `}
    >
      {text}
    </motion.button>
  );
}

export default AnimationButton;
