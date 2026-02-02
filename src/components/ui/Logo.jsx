import React from 'react'
import { motion } from 'framer-motion'

function Logo() {
  return (
   <motion.span
  initial={{ opacity: 0, y: 20, scaleX: 0.9 }}
  animate={{ opacity: 1, y: 0, scaleX: 1.1 }}
  transition={{ duration: 1.1, delay: 0.3, ease: "easeOut" }}
  className="
    relative
    text-4xl
    font-[900]
    tracking-widest
    text-transparent bg-clip-text
    bg-gradient-to-r
    from-[#f7d28b]
    via-[#c17632]
    to-[#8b4c1b]
    bg-[length:200%_auto]
    animate-shimmer
    hover:scale-105
    transition-transform duration-300
    inline-block
  "
>
  الماس
</motion.span>

  )
}

export default Logo