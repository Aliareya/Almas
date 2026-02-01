import { useContext , createContext , useState  } from "react";
import {siteData} from "../data/sitedata"

const data = {
   site : siteData
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
