import React from "react";
import { Icon } from "@iconify/react";
import { useSite } from "../../context/SiteContext";
import IconLink from "../ui/IconLink";

function TopHeader() {
  const { site } = useSite();
  const phoneNumber = `tel:${site.phone}`;
  return (
    <div className="w-full flex flex-row-reverse justify-between h-10 max-sm:h-12 bg-[#532b10] lg:px-16 max-md:px-5 md:px-5 max-sm:px-3 items-center">
      <IconLink item={site.phone} text={`(+93) ${site.phone.number}`}/>

      <div className="flex items-center max-sm:hidden">
        <p className=" mr-2 text-white text-sm">{site?.address}</p>
        <span className="text-white font-semibold text-sm">: آدرس</span>
      </div>

      <div className="flex items-center gap-2 ">
        {site.socials?.map((item, index) => {
          return (
            <IconLink key={index} item={item} />
          );
        })}
      </div>
    </div>
  );
}

export default TopHeader;
