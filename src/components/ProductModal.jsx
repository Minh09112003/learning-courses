import { AiFillStar, AiOutlineClose } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import CommentSection from "./CommentSection";

const ProductModal = ({ product, onClose }) => {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    toast.warning("Vui lòng đăng nhập để mua hàng!");
    navigate("/sign-up");
  };

  const handleAddToFavorites = () => {
    const existing = JSON.parse(localStorage.getItem("favorites")) || [];
    const isExist = existing.find((item) => item.id === product.id);

    if (isExist) {
      toast.info("Sản phẩm đã có trong danh sách yêu thích.");
    } else {
      localStorage.setItem("favorites", JSON.stringify([...existing, product]));
      toast.success("Đã thêm vào danh sách yêu thích!");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="relative w-[90%] sm:max-w-[640px] md:max-w-[768px] bg-white rounded-lg animate-fade-in-scale transition-all duration-300 ease-out">
        
        {/* Nút đóng */}
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white text-red-500 border border-red-300 
          hover:bg-red-500 hover:text-white transition-all duration-200 flex items-center justify-center shadow-md"
        >
          <AiOutlineClose className="text-xl" />
        </button>

        {/* Nội dung */}
        <div className="p-6 max-h-[90vh] overflow-y-auto">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[300px] object-cover rounded mb-4"
          />

          <h2 className="text-2xl font-bold">{product.name}</h2>
          <p className="mt-2 text-gray-700">{product.longDesc}</p>

          <div className="flex justify-between items-end mt-4">
            <p className="text-red-500 font-bold text-xl">
              {product.price.toLocaleString()}đ
            </p>

            <div className="flex items-center gap-1 text-yellow-500 text-lg font-semibold">
              <span className="text-gray-800">{product.rating}</span>
              <AiFillStar className="text-xl" />
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            <button
              onClick={handleBuyNow}
              className="cursor-pointer flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold 
              transition-transform duration-200 ease-in-out transform hover:scale-105 hover:shadow-md"
            >
              Mua ngay
            </button>

            <button
              onClick={handleAddToFavorites}
              className="cursor-pointer flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold 
              flex items-center justify-center gap-[6px] transition-transform duration-200 ease-in-out 
              transform hover:scale-105 hover:shadow-md"
            >
              <FaHeart className="text-base" />
              Yêu thích
            </button>
          </div>

          <CommentSection productId={product.id} />
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
