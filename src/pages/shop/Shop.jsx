import React, { useState } from 'react'
import { useShop } from '../../context/ShopContext'
import Sidebar from './sections/Sidebar';
import Topbar from './sections/Topbar';

import Product from '../../components/cards/Product';

function Shop() {
  const {year} = useShop();
  const [selectedYears, setSelectedYears] = useState([]);
  const handleFilterProducts =()=>{

  }
  
  const [selectStyle, setselectStyle] = useState("grid");
  // const [productFilter, setproductFilter] = useState(cars);
  const [sort, setSort] = useState("Default");

  const handleSort = (e) => {
    // const selected = e.target.value;
    // setSort(selected);
    // const sorted = sortCars(productFilter, selected);
    // setproductFilter(sorted);
  };

  return (
    <div className='w-full '>
      <div className='banner w-full h-52 bg-gray-100 flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold text-[#532b10]'>فروشگاه</h1>
        <span className='text-[#532b10] pt-5 font-medium'>خانه / فروشگاه </span>
      </div>
      <div className="w-full lg:flex-row md:flex-col max-md:flex-col max-sm:flex-col h-auto xl:px-16 lg:px-12  md:px-6 max-md:px-4  pb-10  pt-10 flex justify-center items-start gap-4">
      <Sidebar FiletrProducts={handleFilterProducts} />
      <div className="xl:w-[75%] lg:w-[70%] md:w-full max-md:w-full max-sm:w-full h-auto flex flex-col">
        <Topbar
          style={selectStyle}
          setstyle={setselectStyle}
          handlesort={handleSort}
          sort={sort}
        />
        <div className='w-full flex justify-between flex-wrap xl:gap-y-5 gap-y-7 '>
        {[0,0,0,0,0].length === 0 ? (
          <div className="text-center w-full py-10 text-gray-500">
            No cars match the selected filters.
          </div>
        ) : (
          [0,0,0,0].map((car, index) => (
            <div className='xl:w-[270px] lg:w-[300px] md:w-80 max-md:w-80 max-sm:w-full'>


              <Product product={car} key={index}/>
            </div>
          ))
        )}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Shop




