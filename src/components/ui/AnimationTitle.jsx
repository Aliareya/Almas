import React from "react";
import { motion } from "framer-motion";

function AnimationTitle({text}) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="
    relative
    cursor-pointer
    text-xl
    font-extrabold
    tracking-wider
    text-transparent bg-clip-text
    bg-gradient-to-r
    from-[#483510]
    via-[#c17632]
    to-[#1e1006]
    bg-[length:200%_auto]
    animate-shimmer
    hover:scale-105
    transition-transform duration-300
  "
    >
     {text}
    </motion.span>
  );
}

export default AnimationTitle;
