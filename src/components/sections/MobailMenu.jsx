import React from 'react'
import { useSite } from '../../context/SiteContext'
import { useNavigate } from 'react-router-dom'

function MobailMenu() {
  const { headerMenu } = useSite()
  const naviagte = useNavigate();

  return (
    <div
      className="
        absolute top-full left-0 w-full
        md:hidden
        bg-white/95 backdrop-blur
        border-t border-neutral-200
        shadow-xl rounded-b-lg
      "
    >
      <ul className="flex flex-col items-end gap-1 px-5 py-1 ">
        {[...headerMenu].reverse().map((item, index) => (
          <li
            key={index}
            onClick={() =>naviagte(item.path)}
            className="
              list-none w-full text-right
              py-3 px-2
              text-[15px] font-medium
              tracking-wide
              cursor-pointer
              transition-all duration-200
              border-b border-neutral-200
              hover:text-[#8b4c1b]
              hover:pr-4
            "
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MobailMenu
