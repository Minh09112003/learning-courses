// src/pages/Favorites.jsx
import { useEffect, useState } from "react";
import productsData from "../data/products";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSearch } from "../contexts/SearchContext"; // ✅ dùng context

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const { search } = useSearch(); // ✅ lấy giá trị search từ context

  const ITEMS_PER_PAGE = 6;

  useEffect(() => {
    const savedIds = JSON.parse(localStorage.getItem("favorites")) || [];
    const favs = productsData.filter((p) => savedIds.includes(p.id));
    setFavorites(favs);
  }, []);

  const handleBuyNow = () => {
    toast.warning("Vui lòng đăng nhập để mua khóa học!");
    navigate("/sign-up");
  };

  const handleRemove = (id) => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    const updated = saved.filter((itemId) => itemId !== id);
    localStorage.setItem("favorites", JSON.stringify(updated));

    const updatedFavs = favorites.filter((item) => item.id !== id);
    setFavorites(updatedFavs);

    toast.info("Đã hủy yêu thích khóa học.");
  };

  // ✅ Lọc theo từ khóa tìm kiếm
  const filteredFavorites = favorites.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedFavorites = filteredFavorites.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(filteredFavorites.length / ITEMS_PER_PAGE);

  return (
    <div className="p-4 md:p-8 md:pl-18 min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Khóa học yêu thích</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFavorites.length === 0 ? (
          <p className="text-gray-600">Không tìm thấy khóa học phù hợp.</p>
        ) : (
          paginatedFavorites.map((p) => (
            <div
              key={p.id}
              className="border border-gray-200 p-4 rounded-lg shadow bg-white flex flex-col cursor-pointer 
                transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-40 object-cover rounded"
              />
              <h2 className="text-lg font-semibold mt-2">{p.name}</h2>
              <p className="text-gray-600 text-sm">{p.shortDesc}</p>
              <p className="font-bold text-red-500 mt-2">
                {p.price.toLocaleString()}đ
              </p>

              <div className="mt-3 flex gap-2">
                <button
                  onClick={handleBuyNow}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded 
                    transition-transform duration-200 ease-in-out hover:scale-105 
                    text-sm cursor-pointer"
                >
                  Mua ngay
                </button>
                <button
                  onClick={() => handleRemove(p.id)}
                  className="flex-1 bg-gray-300 hover:bg-gray-400 text-black py-2 rounded 
                    transition-transform duration-200 ease-in-out hover:scale-105 
                    text-sm cursor-pointer"
                >
                  Hủy yêu thích
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-8 gap-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className={`px-3 py-2 rounded-full font-medium transition duration-200 ${
              currentPage === 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-orange-400 text-white hover:bg-orange-500 cursor-pointer"
            }`}
            disabled={currentPage === 1}
          >
            <FaChevronLeft />
          </button>

          <span className="font-semibold text-black">
            Trang {currentPage} / {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            className={`px-3 py-2 rounded-full font-medium transition duration-200 ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-orange-400 text-white hover:bg-orange-500 cursor-pointer"
            }`}
            disabled={currentPage === totalPages}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Favorites;
