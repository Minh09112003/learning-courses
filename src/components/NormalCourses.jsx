// src/components/NormalCourses.jsx
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ITEMS_PER_PAGE = 6;

const NormalCourses = ({ products, onView }) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [products]);

  const sortedProducts = [...products].sort((a, b) => b.price - a.price);
  const totalPages = Math.max(1, Math.ceil(sortedProducts.length / ITEMS_PER_PAGE));
  const paginated = sortedProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">📚 Khóa học thường</h2>

      {/* Danh sách sản phẩm */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {paginated.map((product) => (
          <ProductCard key={product.id} product={product} onView={() => onView(product)} />
        ))}
      </div>

      {/* Phân trang */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-6 gap-4">
          {/* Prev */}
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-2 rounded-full font-medium transition duration-200 ${
              currentPage === 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-orange-400 text-white hover:bg-orange-500 cursor-pointer"
            }`}
          >
            <FaChevronLeft />
          </button>

          {/* Current Page */}
          <span className="font-semibold text-gray-800">
            Trang {currentPage} / {totalPages}
          </span>

          {/* Next */}
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-2 rounded-full font-medium transition duration-200 ${
              currentPage === totalPages
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

export default NormalCourses;
