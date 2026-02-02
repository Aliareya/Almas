import React from 'react'
import TopHeader from '../components/shared/TopHeader'
import Header from '../components/shared/Header'
import herobg from "../../public/images/herobg.jpg"
import { motion } from "framer-motion";
import Hero from '../components/sections/Hero';

function MainLayout() {
  return (
    <div className='w-full bg-slate-200 h-[900px] '>
      <TopHeader/>
      <Header/>
      <Hero/>
  
  

</div>


  )
}

export default MainLayout