import { useContext , createContext , useState  } from "react";
import {siteData} from "../data/sitedata";
import menus from "../data/Menu";

const data = {
   site : siteData,
   headerMenu : menus.headermenu,
   headerIconMenu : menus.headerIconMenu
}

const SiteContext = createContext();
export const SiteProvider = ({children}) => {
   return(
      <SiteContext.Provider value={data}>
         {children}
      </SiteContext.Provider>
   )
}

export const useSite = () =>{
   return useContext(SiteContext);
}
