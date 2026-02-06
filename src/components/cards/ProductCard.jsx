import React from "react";
import { Icon } from "@iconify/react";
import img1 from "../../images/img1.jpg";
import AnimationTitle from "../ui/AnimationTitle";
import img4 from "../../images/img4.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";

function ProductCardFa({
  img = img1,
  price = "2,450,000",
  oldPrice = "3,100,000",
}) {
  return (
    <div className="md:w-1/3 max-sm:w-full bg-white rounded-3xl shadow-lg p-4 font-sans">

      {/* تصویر محصول */}
      <div
        className="
          relative
          w-full
          h-80
          rounded-2xl
          overflow-hidden
          bg-top
          bg-no-repeat
          bg-cover
          bg-[#f8f8f8]
        "
        style={{ backgroundImage: `url(${img})` }}
      >
        {/* Overlay ملایم */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

        {/* قیمت */}
        <div className="
          absolute
          bottom-4
          left-4
          bg-white/90
          backdrop-blur
          rounded-xl
          px-3
          py-2
          text-right
          shadow
        ">
          <span className="block text-xs text-gray-400 line-through">
            {oldPrice} تومان
          </span>
          <span className="block text-sm font-bold text-red-900">
            {price} تومان
          </span>
        </div>
      </div>

      {/* تصاویر کوچک */}
      <div className="flex flex-row items-center gap-2 mt-3">
        <img className="w-7 h-7 rounded-full object-cover" src={img2} alt="" />
        <img className="w-7 h-7 -ml-5 rounded-full object-cover" src={img3} alt="" />
        <img className="w-7 h-7 -ml-5 rounded-full border object-cover" src={img4} alt="" />
        <span className="text-sm text-orange-600 font-medium">+۲</span>
      </div>

      {/* عنوان محصول */}
      <div className="mt-4 text-right">
        <h3 className="text-base font-semibold text-gray-800 leading-7">
          <AnimationTitle text="کفش زنانه نایکی ایر مکس ۲۷۰" />
        </h3>
      </div>

      {/* دکمه‌ها */}
      <div className="mt-4 flex flex-row-reverse items-center gap-3">
        <button
          className="
            flex-1
            border
            border-orange-900
            py-2
            rounded-xl
            font-medium
            hover:bg-orange-50
            transition
          "
        >
          جزییات محصول
        </button>

        <button className="w-10 h-10 border rounded-xl flex items-center justify-center hover:bg-gray-100 transition">
          <Icon icon="mdi:heart-outline" className="text-red-900 text-xl" />
        </button>

        <button className="w-10 h-10 border rounded-xl flex items-center justify-center hover:bg-gray-100 transition">
          <Icon icon="mdi:cart-outline" className="text-red-900 text-xl" />
        </button>
      </div>
    </div>
  );
}

export default ProductCardFa;
