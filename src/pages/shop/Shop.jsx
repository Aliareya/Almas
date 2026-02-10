import React, { useState } from 'react'
import FilterOption from '../../components/ui/FilterOption'
import { useShop } from '../../context/ShopContext'
import Sidebar from './sections/Sidebar';
import Topbar from './sections/Topbar';

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
      <div className='banner w-full h-52 bg-[#72533e2e] flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold text-[#532b10]'>فروشگاه</h1>
        <span className='text-[#532b10] pt-5 font-medium'>خانه / فروشگاه </span>
      </div>
      <div className="w-full lg:flex-row md:flex-col sm:flex-col h-auto px-4 lg:px-16 sm:px-0 md:px-0 pb-10  pt-10 flex justify-center items-start gap-4">
      <Sidebar FiletrProducts={handleFilterProducts} />
      <div className="w-3/4 md:w-full sm:w-full h-auto flex justify-between flex-wrap">
        <Topbar
          style={selectStyle}
          setstyle={setselectStyle}
          handlesort={handleSort}
          sort={sort}
        />
        {/* {productFilter.length === 0 ? (
          <div className="text-center w-full py-10 text-gray-500">
            No cars match the selected filters.
          </div>
        ) : (
          productFilter.map((car, index) => (
            <div
              key={car.name + index}
              className={`${
                selectStyle === "grid" ? "w-[48%] sm:w-full" : "w-full"
              } fade-in mb-4`}
            >
              <Product car={car} sty={selectStyle} />
            </div>
          ))
        )} */}
      </div>
    </div>
    </div>
  )
}

export default Shop