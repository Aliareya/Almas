import React from "react";
import { Icon } from "@iconify/react";

function Search({ search }) {
  return (
    <>
      <input
        onChange={(e) => search(e.target.value)}
        placeholder="Search for products"
        type="text"
        className="placeholder-[#43210aeb] text-sm w-11/12 h-8 bg-[#d9ccc4] outline-none border-none"
      />
      <Icon
        icon="fluent:search-12-filled"
        width="20"
        height="20"
        style={{ color: "#43210aeb" }}
      />
    </>
  );
}

export default Search;
