import React from 'react'
import TopHeader from '../components/shared/TopHeader'
import Header from '../components/shared/Header'
import Home from '../pages/home/Home'
import { Route, Routes } from 'react-router-dom';

function MainLayout() {
  return (
    <div className='w-full bg-[#dfd6d0]  '>
      <TopHeader/>
      <Header/>
      <div className='w-full'>
        <Routes>
          <Route path='/' element={<Home/>}/>

        </Routes>

      </div>
  
  

</div>


  )
}

export default MainLayout