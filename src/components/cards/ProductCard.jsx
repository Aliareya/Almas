import React from "react";
import { Icon } from "@iconify/react";
import img1 from "../../images/img1.jpg"
import AnimationTitle from "../ui/AnimationTitle";

function ProductCardFa() {
  return (
    <div className="md:w-[370px] max-sm:w-full bg-white rounded-3xl shadow-lg p-4 font-sans">
      
      {/* تصویر محصول */}
      <div className="relative bg-o rounded-2xl ">


        <img
          src={img1}
          alt="کفش زنانه"
          className="w-full h-[230px] max-sm:h-[220px] rounded-xl shadow-slate-50"
        />
      </div>

      {/* تصاویر کوچک */}
      <div className="flex flex-row-reverse items-center gap-2 mt-3">
        <img className="w-7 h-7 -ml-5 rounded-full "
          src={img1}/>
        <img className="w-7 h-7 -ml-5 rounded-full object-contain"
          src={img1} />
        <img className="w-7 h-7  rounded-full border object-contain"
          src={img1} />
        <span className="text-sm text-orange-500 font-medium">+۲</span>
      </div>

      {/* اطلاعات محصول */}
      <div className="mt-4 text-right">
        <h3 className="text-lg font-semibold text-gray-800">
         <AnimationTitle text={' کفش زنانه نایکی ایر مکس ۲۷۰'}/>
        </h3>
        {/* <p className="mt-2 text-xl font-bold text-gray-900">
          ۱۳۹٫۹۹ دلار
        </p> */}
        <p className="mt-1 text-sm text-gray-500">
          ...سبک، راحت و مناسب استفاده روزمره
        </p>
      </div>

      {/* دکمه‌ها */}
      <div className="mt-4 flex flex-row-reverse items-center gap-3">
        <button className="flex-1 border border-orange-900 hover:bg-slate-100  py-2 rounded-lg font-medium  transition">
         جزییات محصول
        </button>

        <button className="w-10 h-10 border rounded-xl flex items-center justify-center hover:bg-gray-100 transition">
          <Icon icon="mdi:heart-outline" className="text-red-950 text-xl" />
        </button>
        <button className="w-10 h-10 border rounded-xl flex items-center justify-center hover:bg-gray-100 transition">
          <Icon icon="mdi:cart-outline" className="text-red-950 text-xl" />
        </button>
      </div>
    </div>
  );
}

export default ProductCardFa;
