import { Icon } from "@iconify/react";
import Logo from "../ui/Logo";
import Menu from "../sections/Menu";

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur border-b border-neutral-200">
      <div className="max-w-7xl mx-auto h-20 px-16 flex-row-reverse flex items-center justify-between">

        {/* Left - Logo */}
        <div className="text-2xl font-serif tracking-wide text-brown-dark">
           <Logo/>
        </div>

        {/* Center - Navigation */}
        <nav className="hidden md:flex gap-10 text-sm font-medium text-neutral-700">
          <Menu/>
        </nav>

        {/* Right - Icons */}
        <div className="flex items-center gap-5">
          <Icon
            icon="mdi:magnify"
            className="text-xl cursor-pointer text-neutral-700 hover:text-brown-dark transition"
          />
          <Icon
            icon="mdi:heart-outline"
            className="text-xl cursor-pointer text-neutral-700 hover:text-brown-dark transition"
          />
          <Icon
            icon="mdi:shopping-outline"
            className="text-xl cursor-pointer text-neutral-700 hover:text-brown-dark transition"
          />

          {/* Mobile menu */}
          <Icon
            icon="mdi:menu"
            className="text-2xl cursor-pointer md:hidden text-neutral-700"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
