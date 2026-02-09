import React from "react";

function Check({ option, onChange, checked }) {
  return (
    <div className="w-full h-10 flex items-center gap-2">
      <input
        type="checkbox"
        value={option}
        checked={checked}
        onChange={() => onChange(option)}
        className="w-4 h-4 accent-[#6c4b35] cursor-pointer"
      />
      <p className="text-sm capitalize">{option}</p>
    </div>
  );
}

export default Check;
