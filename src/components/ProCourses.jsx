// src/components/ProCourses.jsx
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ITEMS_PER_PAGE = 3;

const ProCourses = ({ products, onView }) => {
  const [proPage, setProPage] = useState(1);

  const totalProPages = Math.max(1, Math.ceil(products.length / ITEMS_PER_PAGE));
  const sorted = [...products].sort((a, b) => b.price - a.price);
  const paginated = sorted.slice(
    (proPage - 1) * ITEMS_PER_PAGE,
    proPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    if (proPage > totalProPages) {
      setProPage(1);
    }
  }, [products, proPage, totalProPages]);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalProPages) {
      setProPage(page);
    }
  };

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">🔥 Khóa học Pro</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {paginated.map((p) => (
          <ProductCard key={p.id} product={p} onView={() => onView(p)} />
        ))}
      </div>

      {totalProPages > 1 && (
        <div className="flex justify-center items-center mt-6 gap-4">
          {/* Prev button */}
          <button
            type="button"
            onClick={() => goToPage(proPage - 1)}
            disabled={proPage === 1}
            className={`px-3 py-2 rounded-full font-medium transition duration-200 ${
              proPage === 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-orange-400 text-white hover:bg-orange-500 cursor-pointer"
            }`}
          >
            <FaChevronLeft />
          </button>

          <span className="font-semibold text-gray-800">
            Trang {proPage} / {totalProPages}
          </span>

          {/* Next button */}
          <button
            type="button"
            onClick={() => goToPage(proPage + 1)}
            disabled={proPage === totalProPages}
            className={`px-3 py-2 rounded-full font-medium transition duration-200 ${
              proPage === totalProPages
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-orange-400 text-white hover:bg-orange-500 cursor-pointer"
            }`}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProCourses;
