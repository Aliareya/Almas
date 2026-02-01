import React from "react";
import { Icon } from "@iconify/react";

function IconLink({item , text=null}) {
  return (
    <span className="cursor-pointer p-1 rounded-full hover:bg-white/20">
      <a className={`${text ? 'flex justify-center items-center':''}`} href={item?.path} target="_blank" rel="noopener noreferrer">
        <Icon
          icon={item?.icon}
          width="22"
          height="22"
          className={`w-5.5 ${text?'mt-1':''}`}
          style={{ color: "#fff" }}
        />
        <p className="ml-2 text-white  max-sm:text-sm">{text}</p>
      </a>
    </span>
  );
}

export default IconLink;
