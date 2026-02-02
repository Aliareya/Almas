import React from 'react'
import MenuItem from '../ui/MenuItem'
import { useSite } from '../../context/SiteContext'

function Menu() {
   const {headerMenu} = useSite()
  return (
   <div className='flex gap-10'>
      {headerMenu?.map((menu , index)=>{
         return(
            <MenuItem key={index} menu={menu} />
         )
      })}
   </div>
  )
}

export default Menu