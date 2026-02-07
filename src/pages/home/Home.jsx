import React from 'react'
import Hero from "../../components/sections/Hero"
import CategorySection from './sections/CategorySection'
import TopSellerProducts from './sections/TopSellerProducts'
import CommentCard from '../../components/cards/CommentCard'
import CommentSlider from './sections/CommentSlider'

function Home() {
  return (
    <div>
      <Hero/>
      <CategorySection/>
      <TopSellerProducts/>
      <CommentSlider/>
    </div>
  )
}

export default Home