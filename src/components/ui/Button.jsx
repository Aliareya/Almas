import { button } from 'framer-motion/client'
import React from 'react'

function Button() {
  return (
   <button
  className="
    px-10 py-3
    rounded-full
    bg-gradient-to-r from-[#c17632] to-[#e3a24a]
    text-white text-lg font-semibold
    shadow-lg shadow-[#c17632]/30
    hover:scale-105
    hover:shadow-xl hover:shadow-[#c17632]/40
    transition-all duration-300
  "
>
  مشاهده کالکشن
</button>

  )
}

export default Button