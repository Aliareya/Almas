import { Icon } from "@iconify/react";
import Logo from "../ui/Logo";
import Menu from "../sections/Menu";
import { useSite } from "../../context/SiteContext";
import CustomIcon from "../ui/CustomIcon";
import { useState } from "react";
import MobailMenu from "../sections/MobailMenu";

function Header() {
  const {headerIconMenu} = useSite()
  const login = true
  const [isopen , setIsopen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur border-b border-neutral-200">
      <div className="max-w-7xl mx-auto h-20 max-sm:h-[70px] xl:px-16 lg:px-12 md:px-6 max-md:px-6  max-sm:px-4 flex-row-reverse flex items-center justify-between">

        {/* Left - Logo */}
        <div className="text-2xl font-serif tracking-wide text-brown-dark">
           <Logo/>
        </div>

        {/* Center - Navigation */}
        <nav className="hidden md:flex lg:gap-10 md:gap-4  text-sm font-medium text-neutral-700">
          <Menu/>
        </nav>

        {/* Right - Icons */}
        <div className="flex items-center gap-2">
          {/* Mobile menu */}
          <Icon
            onClick={()=>setIsopen(!isopen)}
            icon={!isopen ? "heroicons-outline:menu":'line-md:close'}
            width={26}
            height={24}
            className="text-2xl cursor-pointer md:hidden text-neutral-700"
          />
          {headerIconMenu?.map((item, index) => (
            <>
            {item.path === "/profile" ? login ?
             (<CustomIcon  item={item} key={index}/>):null
            :(
              <CustomIcon item={item} key={index}/>
            )}
            
              </>
          ))}


          
        </div>
      </div>
          {isopen && (
            <MobailMenu />
          )}
    </header>
  );
}

export default Header;
