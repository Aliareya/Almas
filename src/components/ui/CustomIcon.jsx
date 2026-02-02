import React from 'react'
import { Icon } from '@iconify/react'

function CustomIcon({item}) {
  return (
    <span className="cursor-pointer p-1 rounded-full hover:bg-gray-300/20">
          <span>
            <Icon
              icon={item?.icon}
              width="22"
              height="22"
              className={`w-5.5 `}
              style={{ color: "#532b10" }}
            />
          </span>
        </span>
  )
}

export default CustomIcon