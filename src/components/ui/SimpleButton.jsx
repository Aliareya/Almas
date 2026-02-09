import React from "react";
import { Icon } from "@iconify/react";

function SimpleButton({ label, click = null, color = null , icon=null , customClass=null , type="submit" }) {
  return (
    <button
      type={type}
      onClick={click}
      className={`flex gap-2 items-center justify-center bg-[#4d260cc9] hover:bg-[#532b10eb] border border-white  px-5 py-1 text-sm rounded-md font-semibold text-white
       ${customClass}`}
    >
      {icon ? (<Icon icon={icon} width="24" height="24"  style={{color: '#fffs'}} />) : null}
      
      {label}
    </button>
  );
}

export default SimpleButton;
