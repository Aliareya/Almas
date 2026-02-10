import React, { useState } from "react";
import { useShop } from "../../../context/ShopContext";
import Search from "../../../components/ui/Search";
import FilterOption from "../../../components/ui/FilterOption";

function Sidebar({ FiletrProducts }) {
  const { year, category, color, price } = useShop();

  const [selectedMakes, setSelectedMakes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectPrice, setSelectPrice] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); 

  //  Triggered on typing in search box
  const handleSearchChange = (value) => {
    setSearchQuery(value);
    FiletrProducts({
      make: selectedMakes,
      colors: selectedColors,
      years: selectedYears,
      categories: selectedCategories,
      price: selectPrice,
      search: value,
    });
  };

  // Triggered when "Filter Result" button is clicked
  const handleFilterClick = () => {
    FiletrProducts({
      make: selectedMakes,
      colors: selectedColors,
      years: selectedYears,
      categories: selectedCategories,
      price: selectPrice,
      search: searchQuery,
    });
  };

  return (
    <div className="xl:w-[30%] md:w-full sm:w-full h-auto bg-[#efe7e2] rounded-lg shadow-md p-5">
      <div className="w-full h-fit">
        <h1 className="text-base font-bold">What Are You Looking For</h1>
        <div className="w-full flex h-9 bg-[#72533e2e] rounded-lg items-center justify-between px-2 mt-4">
          <Search search={handleSearchChange} />
        </div>

        <div className="w-full h-auto pb-5 flex flex-col gap-1 mt-5">
          <FilterOption
            filtername="Price"
            options={price}
            selectedOptions={selectPrice}
            onSelectionChange={setSelectPrice}
          />
          <FilterOption
            filtername="Color"
            options={color}
            selectedOptions={selectedColors}
            onSelectionChange={setSelectedColors}
          />
          <FilterOption
            filtername="Year"
            options={year}
            selectedOptions={selectedYears}
            onSelectionChange={setSelectedYears}
          />
          <FilterOption
            filtername="Category"
            options={category}
            selectedOptions={selectedCategories}
            onSelectionChange={setSelectedCategories}
          />

          <div className="w-full h-10 flex items-center justify-center mt-5">
            <button
              onClick={handleFilterClick}
              className="bg-[#532b10eb] w-full h-full text-white hover:bg-[#532b10] rounded-lg"
            >
              Filter Result
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
