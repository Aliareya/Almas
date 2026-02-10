import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import img from "../../images/img1.jpg";
import AnimationTitle from "../ui/AnimationTitle";
import AnimationText from "../ui/AnimationText";

export default function ProductCard() {
  return (
    <motion.div
      dir="rtl"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-sm:w-full p-3 bg-[#efe7e2] rounded-2xl overflow-hidden shadow-xl text-black font-sans"
    >
      
      {/* Image */}
      <div className="relative group overflow-hidden rounded-xl">
        <motion.img
          src={img}
          alt="کت رسمی زنانه بوردو"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="w-full h-[230px] object-cover rounded-xl"
        />

        {/* Rating */}
        <div className="absolute top-3 right-3 bg-black/70 text-[#d4a53a] text-xs px-2 py-1 rounded-md flex items-center gap-1">
          ★★★★☆
          <span className="text-white">(۶۷)</span>
        </div>

        {/* Icons */}
        <div className="absolute top-3 left-3 flex gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-black/60 p-2 rounded-full hover:bg-black transition"
          >
            <Icon icon="mdi:heart-outline" width="18" className="text-white" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-black/60 p-2 rounded-full hover:bg-black transition"
          >
            <Icon icon="mdi:cart-outline" width="18" className="text-white" />
          </motion.button>
        </div>
      </div>

      {/* Content */}
      <div className="relative mt-3 space-y-3 text-right">

        {/* Price */}
        <div className="absolute rounded-lg left-2 -top-8 flex bg-[#c17632] py-2 px-5 items-center gap-2">
          <span className="text-sm font-bold text-white">۸۹۰$</span>
        </div>

        {/* Title */}
        <AnimationText text={'لباس مجلسی'}/>
        {/* <h3 className="text-base font-semibold leading-snug">
          کت رسمی زنانه بوردو
        </h3> */}

        {/* Sizes */}
        <div className="flex items-center justify-between">
          <span className="font-semibold text-sm text-[#532b10]">سایز</span>
          <div className="flex gap-2">
            {["S", "M", "L", "XL"].map((size) => (
              <motion.button
                key={size}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="min-w-[22px] h-6 text-xs border border-gray-400 rounded-md hover:bg-black hover:text-white transition"
              >
                {size}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Colors */}
        <div className="flex items-center justify-between">
          <span className="font-semibold text-sm text-[#532b10]">رنگ</span>
          <div className="flex gap-2">
            {["#6b1e2d", "#000000", "#2c2f4a"].map((color, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.2 }}
                className="w-5 h-5 rounded-full ring-2 ring-offset-2 ring-transparent hover:ring-black cursor-pointer"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        {/* Bottom Action */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="mt-4 w-full py-1 rounded-md border border-[#7a3b18] text-[#7a3b18] font-semibold hover:bg-[#7a3b18] hover:text-white transition"
        >
          جزئیات محصول
        </motion.button>
      </div>
    </motion.div>
  );
}
