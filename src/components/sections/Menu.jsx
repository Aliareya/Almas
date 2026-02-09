import React from "react";
import MenuItem from "../ui/MenuItem";
import { useSite } from "../../context/SiteContext";
import SimpleButton from "../ui/SimpleButton";
import { useNavigate } from 'react-router-dom'

function Menu() {
  const { headerMenu } = useSite();
  const navigate = useNavigate()
  return (
    <div className="flex md:flex-row md:items-center max-sm:flex-col lg:gap-10 md:gap-6 ">
      {headerMenu?.map((menu, index) => {
        return (
          <>
            {menu.path === "/login" ? (
              <SimpleButton 
                 click={()=>navigate('/login')}
                 label={menu.title} 
                 customClass={"!py-1 !pb-2 !px-5"} />
            ) : (
              <MenuItem key={index} menu={menu} />
            )}
          </>
        );
      })}
    </div>
  );
}

export default Menu;
