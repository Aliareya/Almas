import React from "react";
import { Icon } from "@iconify/react";

function Input({
  lable = null,
  placeholder = null,
  type = "text",
  register,
  icon = null,
  inputclass = null
}) {
  return (
    <>
      <label htmlFor="" className="text-sm text-[#43210aeb] darkgreen font-semibold">
        {lable}
      </label>
      <div className="flex border  border-[#532b10eb] p-1 pl-2 justify-center items-center rounded-md">
        <Icon
          icon={icon}
          width="22"
          height="22"
          style={{ color: "#532b10eb" }}
        />
        <input 
         {...register}
         type={type}
         className={`w-full py-1 placeholder:text-[#532b10eb] focus:border-[#05666653] outline-none bg-transparent pl-3 ${inputclass}`} 
         placeholder={placeholder}
         />
      </div>
    </>
  );
}

export default Input;
