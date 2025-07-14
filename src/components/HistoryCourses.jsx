// src/components/HistoryCourses.jsx
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ITEMS_PER_PAGE = 6;

const HistoryCourses = ({ history, onView, search }) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [history, search]);

  // 🔍 Lọc theo search
  const filtered = history.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-gray-800">Lịch sử xem</h2>

      {filtered.length === 0 ? (
        <p className="text-gray-500">Không tìm thấy khóa học nào phù hợp.</p>
      ) : (
        <>
          {/* Grid courses */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginated.map((product) => (
              <div key={product.id} className="min-h-[360px]">
                <ProductCard product={product} onView={() => onView(product)} />
              </div>
            ))}
          </div>

          {/* Pagination */}
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

            {/* Current page */}
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
        </>
      )}
    </div>
  );
};

export default HistoryCourses;
