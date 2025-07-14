// src/pages/Profile.jsx
import { useEffect, useState } from "react";
import defaultAvatar from "../assets/default-avatar1.png";
import { FaUserFriends } from "react-icons/fa";
import { BsCalendar3 } from "react-icons/bs";
import ProductModal from "../components/ProductModal";
import HistoryCourses from "../components/HistoryCourses";
import { useSearch } from "../contexts/SearchContext"; // ✅ THÊM DÒNG NÀY

const Profile = () => {
  const [user, setUser] = useState(null);
  const [history, setHistory] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { search } = useSearch(); // ✅ LẤY search từ context

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedHistory = JSON.parse(localStorage.getItem("history")) || [];
    setUser(storedUser);
    setHistory(storedHistory);
  }, []);

  if (!user) return <p className="text-center mt-10">Bạn chưa đăng nhập.</p>;

  return (
    <div className="p-2 grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* LEFT SIDE: 1/4 */}
      <div className="col-span-1 bg-white shadow-md rounded-xl p-6 flex flex-col items-center gap-3 text-center">
        <img
          src={defaultAvatar}
          alt="avatar"
          className="w-24 h-24 rounded-full border border-gray-300 object-cover"
        />
        <p className="text-lg font-semibold text-gray-800">{user.name}</p>
        <p className="text-gray-500 text-sm">{user.email}</p>
        <div className="text-sm text-gray-600 flex items-center gap-2">
          <FaUserFriends className="text-gray-400" />
          <span>0 người theo dõi · 0 đang theo dõi</span>
        </div>
        <div className="text-sm text-gray-600 flex items-center gap-2">
          <BsCalendar3 className="text-gray-400" />
          <span>Tham gia LEARN AI từ 2 ngày trước</span>
        </div>
      </div>

      {/* RIGHT SIDE: 3/4 */}
      <div className="col-span-3">
        <HistoryCourses history={history} onView={setSelectedProduct} search={search} />
      </div>

      {/* MODAL xem chi tiết khóa học */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default Profile;
