import React, { useState } from 'react'
import SelectBox from '../../../components/ui/SelectBox'
import { Icon } from '@iconify/react'
import { useShop } from '../../../context/ShopContext';

function Topbar({style , setstyle , sort , handlesort}) {
  const {sortOptions} = useShop();
  const [productSort , setProductSort] = useState()
  
  const handleChangeStyle = (type)=>{
    setstyle(type);
  }


  return (
    <div className="w-full h-16 flex items-center justify-between mb-4 bg-white px-4 rounded-lg">
          <div className="w-[50%] max-sm:w-full h-full flex items-center justify-start sm:gap-1 gap-3">
            <SelectBox label={"Sort By"} opt={sortOptions} onChange={handlesort} value={sort} />
          </div>
          <span className="max-sm:hidden text-sm font-semibold text-gray-800">
            Showing 1-6 of 40 Results
          </span>
          <div className="w-[20%] max-sm:hidden max-md:hidden h-full flex items-center justify-end gap-3">
            <span onClick={()=>handleChangeStyle("grid")}
              className={`${
                style === "grid"
                  ? "bg-slate-100 border border-gray-300 rounded-lg"
                  : ""
              } p-1 `}
            >
              {/* <Icon
                className="cursor-pointer"
                icon="mingcute:grid-fill"
                width="24"
                height="24"
                style={{ color: "#c20f2f" }}
              />
            </span>
            <span onClick={()=>handleChangeStyle("list")}
              className={`${
                style === "list"
                  ? "bg-slate-100 border border-gray-300 rounded-lg"
                  : ""
              } p-1 `}
            >
              <Icon
                className="cursor-pointer"
                icon="lucide:list"
                width="24"
                height="24"
                style={{ color: "#c20f2f" }}
              /> */}
            </span>
          </div>
        </div>
  )
}

export default Topbar