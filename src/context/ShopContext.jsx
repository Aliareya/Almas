import { useContext , createContext } from "react";
import shopData from '../data/shop'
import { color } from "framer-motion";

const data ={
   year : shopData.year,
   category : shopData.category,
   color : shopData.color,
   price : shopData.price,
   sortOptions : shopData.sortOptions
}
const ShopContext = createContext();
export const ShopProvider = ({children}) =>{
   return(
      <ShopContext.Provider value={data}>
         {children}
      </ShopContext.Provider>
   )
}

export const useShop = () =>{
   return useContext(ShopContext)
}