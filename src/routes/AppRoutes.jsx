import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import Shop from '../pages/shop/Shop';
import ProductDetails from '../pages/productdetails/ProductDetails';

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/product' element={<ProductDetails/>}/>
    </Routes>
  )
}

export default AppRoutes