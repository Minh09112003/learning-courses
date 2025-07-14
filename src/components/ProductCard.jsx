// src/components/ProductCard.jsx
import { AiFillStar } from "react-icons/ai";
import { FaCrown, FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";

const ProductCard = ({ product, onView }) => {
  const addToFavorites = () => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    const isExist = saved.includes(product.id);

    if (isExist) {
      toast.info("Sản phẩm đã có trong danh sách yêu thích.");
    } else {
      const updated = [...saved, product.id];
      localStorage.setItem("favorites", JSON.stringify(updated));
      toast.success("Đã thêm vào danh sách yêu thích!");
    }
  };

  const handleViewDetail = () => {
    onView(product);

    const history = JSON.parse(localStorage.getItem("history")) || [];
    const isExist = history.find((item) => item.id === product.id);
    if (!isExist) {
      localStorage.setItem("history", JSON.stringify([product, ...history]));
    }
  };

  return (
    <div className="relative border border-gray-300 rounded-xl p-3 sm:p-4 text-sm sm:text-base shadow transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-xl">
      {/* Vương miện Pro */}
      {product.isPro && (
        <div className="absolute top-2 right-2 bg-black/50 p-2 rounded-full backdrop-blur-sm">
          <FaCrown className="text-yellow-400 text-xl drop-shadow" />
        </div>
      )}

      {/* Ảnh khóa học */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-50 object-cover rounded"
        loading="lazy"
      />

      {/* Nội dung khóa học */}
      <h2 className="text-lg font-semibold mt-3">{product.name}</h2>
      <p className="text-gray-600 text-sm">{product.shortDesc}</p>
      <p className="font-bold text-red-500 mt-1">
        {product.price.toLocaleString()}đ
      </p>

      {/* Hành động + Đánh giá */}
      <div className="flex justify-between items-center mt-3">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={handleViewDetail}
            className="cursor-pointer bg-blue-500 hover:bg-blue-600 hover:scale-105 transition-transform duration-200 text-white px-3 py-1 text-xs sm:text-sm rounded"
          >
            Xem chi tiết
          </button>
          <button
            type="button"
            onClick={addToFavorites}
            className="cursor-pointer flex items-center gap-1 bg-green-500 hover:bg-green-600 hover:scale-105 transition-transform duration-200 text-white px-3 py-1 text-xs sm:text-sm rounded"
          >
            <FaHeart className="text-sm mt-0.5" />
            Yêu thích
          </button>
        </div>

        <div className="flex items-center gap-1 text-yellow-500 text-lg font-semibold">
          <span className="text-gray-800">{product.rating}</span>
          <AiFillStar className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
