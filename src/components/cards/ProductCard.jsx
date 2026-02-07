import React from "react";
import { Icon } from "@iconify/react";
import img1 from "../../images/img1.jpg";
import AnimationTitle from "../ui/AnimationTitle";
import img4 from "../../images/img4.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import AnimationText from "../ui/AnimationText";

function ProductCardFa({
  product =null,
  img = img1,
  price = "2,450,000",
  oldPrice = "3,100,000",
}) {
  return (
    <div className="md:w-1/3 max-sm:w-full bg-[#efe7e2] rounded-3xl shadow-lg p-4 font-sans">

      {/* تصویر محصول */}
      <div
        className="
          relative
          w-full
          xl:h-72
          lg:h-64
          md:h-52
          max-md:h-52
          max-sm:h-52

          rounded-2xl
          overflow-hidden
          bg-top
          bg-no-repeat
          bg-cover
          bg-[#f8f8f8]
        "
        style={{ backgroundImage: `url(${product.image})` }}
      >
        {/* Overlay ملایم */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

        {/* قیمت */}
        <div className="
          absolute
          bottom-4
          right-2
          bg-white/90
          backdrop-blur
          rounded-xl
          px-3
          py-2
          text-right
          shadow
        ">
          <span className="block text-sm font-bold text-red-900">
            {product.price} 
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
      <div className="mt-2 text-right">
        <h3 className="text-base font-semibold text-gray-800 leading-7">
          <AnimationText text={product.name} />
        </h3>
        <p>this is is for me and for you ....</p>
      </div>

      {/* دکمه‌ها */}
      <div className="mt-4 flex flex-row-reverse items-center gap-3">
        <button
          className="
            border
            border-orange-900
            py-2 
            px-4
            flex-1
            max-sm:flex-1
            lg:text-base
            md:text-[13px]
            max-md:text-[12px]
            rounded-xl
            font-medium
            hover:bg-orange-50
            transition
          "
        >
          جزییات محصول
        </button>

        <button className="w-10 h-10 border border-red-900 rounded-xl flex items-center justify-center hover:bg-orange-50 transition">
          <Icon icon="mdi:heart-outline" className="text-red-900 text-xl" />
        </button>

        <button className="w-10 h-10 border border-red-900 rounded-xl flex items-center justify-center hover:bg-orange-50 transition">
          <Icon icon="mdi:cart-outline" className="text-red-900 text-xl" />
        </button>
      </div>
    </div>
  );
}

export default ProductCardFa;
