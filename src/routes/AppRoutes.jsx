import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import Shop from '../pages/shop/Shop';

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/shop' element={<Shop/>}/>
    </Routes>
  )
}

export default AppRoutes