import { Icon } from "@iconify/react";
import img1 from "../../images/img1.jpg";

const Product = () => {
  return (
    <div className="w-full bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden font-sans">
      
      {/* Image Section */}
      <div className="relative h-52 bg-gray-100 group">
        {/* Product Image */}
        <img 
          src={img1} 
          alt="Blue Chair" 
          className="w-full h-full object-cover"
        />

        {/* Wishlist Button */}
        <button className="absolute bottom-4 hover:text-red-950 right-4 bg-white text-gray-400 w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all duration-200">
          <Icon icon="heroicons:heart" className="w-5 h-5" />
        </button>
      </div>

      {/* Content Section */}
      <div className="p-3 pt-4 pb-4">
         {/* Title */}
        <h3 className="text-gray-800 text-right hover:text-[#5f3b22d0] cursor-pointer text-base font-semibold">
          مانتو شیک پاییزه با طرح گل‌ دار
        </h3>
        {/* Rating */}
        <div className="flex items-center justify-between my-2">
          <div className='flex items-center justify-end gap-1 my-2'>

          {[1, 2, 3, 4, 5].map((star) => (
            <Icon 
            key={star} 
            icon="heroicons:star-solid" 
            className="w-4 h-4 text-yellow-400" 
            />
          ))}
          <span className="text-xs text-gray-400 ml-2">(45)</span>
          </div>
          <div className='flex items-center'>
            <Icon className='mt-2 -mr-0.5' icon="tabler:currency-afghani" width="15" height="15" />
            <span className="text-lg font-semibold text-gray-800">
              300
            </span>
          </div>
        </div>

       
        {/* Bottom Row: Price & Add Button */}
        <div className="flex items-center justify-between mt-4">

          <button className="bg-[#5f3b22d0] hover:bg-[#5f3b22] text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-colors duration-200">
            <Icon icon="heroicons:shopping-cart" className="w-4 h-4" />
            <span>Add</span>
          </button>

          <button className="pb-2 pt-1 rounded-lg px-5 text-white bg-[#5f3b22d0] hover:bg-[#5f3b22]" >
            جزییات محصول
          </button>

          
          
          
        </div>
      </div>
    </div>
  );
};


export default Product;