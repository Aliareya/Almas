import React from 'react'
import { motion } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'

function MenuItem({ menu }) {
   const location = useLocation();
   const active = location.pathname === menu.path;
   const navigate = useNavigate()
  return (
    <motion.li
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="list-none"
    >
      <li
        onClick={()=>navigate(menu.path)}
        className={`
          relative
          cursor-pointer
          py-2
          text-sm md:text-base
          font-medium
          tracking-wide
          transition-all duration-300
          ${
            active
              ? "text-[#c17632]"
              : "text-gray-700 hover:text-[#8b4c1b]"
          }
        `}
      >
        {menu.title}

        {/* underline animation */}
        <span
          className={`
            absolute left-0 -bottom-1
            h-[2px] w-full
            bg-gradient-to-r from-[#f7d28b] to-[#8b4c1b]
            scale-x-0 origin-left
            transition-transform duration-300
            group-hover:scale-x-100
          `}
        />
      </li>
    </motion.li>
  )
}

export default MenuItem
