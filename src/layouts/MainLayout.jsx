import React from 'react'
import TopHeader from '../components/shared/TopHeader'
import Header from '../components/shared/Header'
import herobg from "../../public/images/herobg.jpg"
import { motion } from "framer-motion";

function MainLayout() {
  return (
    <div className='w-full bg-slate-200 h-[900px] '>
      <TopHeader/>
      <Header/>
  
  <div
      className="relative w-full h-[500px] bg-center bg-cover overflow-hidden"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l 
        from-[#2b1d1d]/60 
        via-[#4f3422]/65 
        to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-white xl:text-6xl text-4xl font-bold leading-tight"
        >
          درخشش استایل با
        </motion.h1>

        <motion.span
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="text-[#c17632] xl:text-6xl text-4xl font-bold mt-2"
        >
          الماس
        </motion.span>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          className="max-w-2xl text-gray-300 mt-8 text-base md:text-lg leading-relaxed"
        >
          «الماس» جایی‌ست که طراحی مدرن با کیفیت ممتاز ترکیب می‌شود.
          هر جزئیات با دقت انتخاب شده تا استایلی خاص و ماندگار خلق کند.
          انتخابی متفاوت برای بانوان خوش‌سلیقه که به سبک خود اهمیت می‌دهند.
        </motion.p>

      </div>
    </div>

</div>


  )
}

export default MainLayout