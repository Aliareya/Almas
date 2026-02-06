import React from 'react'
import Hero from "../../components/sections/Hero"
import CategorySection from './sections/CategorySection'
import TopSellerProducts from './sections/TopSellerProducts'

function Home() {
  return (
    <div>
      <Hero/>
      <CategorySection/>
      <TopSellerProducts/>
    </div>
  )
}

export default Home