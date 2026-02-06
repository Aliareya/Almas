import React from "react";
import herobg from "../../images/herobg.jpg";
import { motion } from "framer-motion";
import AnimationButton from "../ui/AnimationButton";

function Hero() {
  return (
    <div
      className="relative w-full lg:h-[470px] max-sm:h-[470px] max-md:h-[420px] md:h-[400px] bg-center bg-cover overflow-hidden"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-l 
        from-[#2b1d1d]/60 
        via-[#4f3422]/65 
        to-transparent"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center lg:pt-16 pt-10 h-full px-6 max-sm:px-3 text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-[#d7b898] xl:text-6xl max-md:text-5xl  md:text-5xl max-sm:text-4xl font-bold leading-tight"
        >
          درخشش استایل با
        </motion.h1>

        <motion.span
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: "easeOut" }}
          className="
    relative
    xl:text-7xl text-7xl max-sm:text-7xl
    font-extrabold
    tracking-wider
    mt-3
    text-transparent bg-clip-text
    bg-gradient-to-r
    from-[#f7d28b]
    via-[#c17632]
    to-[#8b4c1b]
    bg-[length:200%_auto]
    animate-shimmer
    hover:scale-105
    transition-transform duration-300
    pb-2
  "
        >
          الماس
        </motion.span>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          className=" lg:w-1/2 pt-5 max-sm:w-[98%] md:w-2/3 max-md:w-2/3
    relative
    xl:text-xl max-sm:text-lg md:text-xl max-md:text-xl
    font-extrabold
    tracking-wider
    mt-3
    text-transparent bg-clip-text
    bg-gradient-to-r
    from-[#f7d28b]
    via-[#e8e5e2]
    to-[#b7a99e]
    bg-[length:200%_auto]
    animate-shimmer
    hover:scale-105
    transition-transform duration-300
  "
        >
          «الماس» جایی‌ست که طراحی مدرن با کیفیت ممتاز ترکیب می‌شود. هر جزئیات
          با دقت انتخاب شده تا استایلی خاص و ماندگار خلق کند. انتخابی متفاوت
          برای بانوان خوش‌سلیقه که به سبک خود اهمیت می‌دهند.
        </motion.p>

        <div className="w-full flex justify-center items-center gap-5 mt-9">
          <AnimationButton text={"خرید آنلاین"} />
          <AnimationButton
            text={"مشاهده فروشگاه"}
            customeclass={"bg-gradient-to-r from-[#c17632] to-[#e3a24a]"}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
