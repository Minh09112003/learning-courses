// src/components/Sidebar.jsx
import { NavLink } from "react-router-dom";
import { FaRoad, FaHeart } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { FaBook, FaTimes } from "react-icons/fa";

const Sidebar = ({ isOpen, onClose }) => {
  const items = [
    { to: "/", icon: <IoHome className="text-2xl" />, label: "Trang chủ" },
    { to: "/learning-paths", icon: <FaRoad className="text-2xl" />, label: "Lộ trình" },
    { to: "/blog", icon: <FaBook className="text-2xl" />, label: "Bài viết" },
    { to: "/favorites", icon: <FaHeart className="text-2xl text-pink-500" />, label: "Yêu thích" },
  ];

  return (
    <>
      {/* Overlay trên mobile */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Sidebar cho cả mobile & desktop */}
      <aside
        className={`fixed top-16 left-0 z-50 bg-white shadow-md rounded-r-lg transition-transform duration-300
          w-64 p-4
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:fixed md:w-28 md:block md:rounded-lg md:p-4`}
      >
        {/* Nút đóng (chỉ mobile) */}
        <div className="md:hidden flex justify-end mb-4">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-red-500 text-xl"
          >
            <FaTimes />
          </button>
        </div>

        {/* Menu */}
        <nav className="flex flex-col gap-4">
          {items.map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              onClick={onClose}
              className={({ isActive }) =>
                `w-full md:w-20 h-12 md:h-20 rounded-lg flex flex-row md:flex-col items-center justify-start md:justify-center gap-2 md:gap-0 px-3 md:px-0
                transition duration-200 ease-in-out text-sm ${
                  isActive
                    ? "bg-gray-300 text-black font-semibold"
                    : "bg-gray-100 hover:bg-gray-200 hover:-translate-y-1 hover:shadow-md text-gray-700"
                }`
              }
            >
              {item.icon}
              <span className="text-xs md:mt-1 text-center">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
