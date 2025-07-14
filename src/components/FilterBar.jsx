// src/components/FilterBar.jsx
import React from "react";
import { BsFilter } from "react-icons/bs";
import { MdCategory } from "react-icons/md";

const FilterBar = ({
  priceFilter,
  setPriceFilter,
  categoryFilter,
  setCategoryFilter,
}) => {
  const priceFilters = [
    { label: "Tất cả", value: "" },
    { label: "< 500.000 đ", value: "<500" },
    { label: "500.000 – 1.000.000 đ", value: "500-1000" },
    { label: "> 1.000.000 đ", value: ">1000" },
  ];

  const categories = [
    "Lập trình",
    "Ngoại ngữ",
    "Thiết kế",
    "Marketing",
    "Tin học văn phòng",
  ];

  return (
    <div className="w-full md:max-w-3xl bg-white border border-gray-300 rounded-xl shadow p-5 mt-2 ml-2">
      {/* Lọc theo giá */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <BsFilter className="text-blue-500 text-xl" />
          <h3 className="text-lg font-semibold text-gray-800">Lọc theo giá</h3>
        </div>
        <div className="flex flex-wrap gap-3">
          {priceFilters.map((f) => {
            const isActive = priceFilter === f.value;
            return (
              <button
                key={f.value}
                onClick={() => setPriceFilter(f.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 transform
                  ${
                    isActive
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700 hover:scale-105 hover:shadow-md"
                  }
                  cursor-pointer`}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Lọc theo danh mục */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <MdCategory className="text-blue-500 text-xl" />
          <h3 className="text-lg font-semibold text-gray-800">Lọc theo danh mục</h3>
        </div>
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => {
            const isActive = categoryFilter === cat;
            return (
              <button
                key={cat}
                onClick={() =>
                  setCategoryFilter(cat === categoryFilter ? "" : cat)
                }
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 transform
                  ${
                    isActive
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700 hover:scale-105 hover:shadow-md"
                  }
                  cursor-pointer`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
