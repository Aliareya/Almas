import React, { useState } from 'react'
import FilterOption from '../../components/ui/FilterOption'
import { useShop } from '../../context/ShopContext'
import Sidebar from './sections/Sidebar';
import Topbar from './sections/Topbar';
import ProductCard from '../../components/cards/Product';
import img1 from '../../images/img1.jpg'
import { div } from 'framer-motion/client';

function Shop() {
  const {year} = useShop();
  const [selectedYears, setSelectedYears] = useState([]);
  const handleFilterProducts =()=>{

  }
  const products = 
    {
      id: 1,
      name: "لباس مجلسی زنانه",
      category: "لباس زنانه",
      price: "۸,۵۰۰ افغانی",
      oldPrice: "۱۷,۰۰۰ افغانی",
      rating: 4.8,
      discount: "۵۰٪ تخفیف",
      image: img1,
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
      <div className="w-full lg:flex-row md:flex-col max-md:flex-col max-sm:flex-col h-auto px-4 lg:px-16  md:px-6 max-md:px-4  pb-10  pt-10 flex justify-center items-start gap-4">
      <Sidebar FiletrProducts={handleFilterProducts} />
      <div className="w-[80%] md:w-full max-md:w-full max-sm:w-full h-auto flex flex-col">
        <Topbar
          style={selectStyle}
          setstyle={setselectStyle}
          handlesort={handleSort}
          sort={sort}
        />
        <div className='w-full grid content-between lg:grid-cols-3 md:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5'>
        {[0,0,0,0,0].length === 0 ? (
          <div className="text-center w-full py-10 text-gray-500">
            No cars match the selected filters.
          </div>
        ) : (
          [0,0,0,0].map((car, index) => (
            <div className='lg:w-[290px] md:w-[350px] max-md:w-[310px] max-sm:w-full'>

              <ProductCard product={products} key={index}/>
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