import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import defaultAvatar from "../assets/default-avatar1.png";

const UserDropdown = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsOpen(false);
    window.location.reload();
  };

  return (
    <div className="relative">
      {/* Avatar */}
      <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        <img
          src={defaultAvatar}
          alt="avatar"
          className="w-10 h-10 rounded-full border border-gray-300 object-cover"
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-300 rounded-xl shadow-lg z-50 text-sm overflow-hidden 
               animate-dropdown transition-all duration-200 ease-out origin-top-right scale-95 opacity-0 animate-fade-in">
          {/* Info */}
          <div className="flex items-center gap-3 p-4 border-b border-gray-200">
            <img
              src={defaultAvatar}
              alt="avatar"
              className="w-12 h-12 rounded-full border border-gray-300"
            />
            <div>
              <p className="font-semibold text-gray-800">{user.name}</p>
              <p className="text-gray-500 text-xs">{user.email}</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col p-2">
            <Link
              to="/profile"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              Trang cá nhân
            </Link>
            <Link
              to="/blog"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              Viết blog
            </Link>
            <Link
              to="/change-password"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              Đổi mật khẩu
            </Link>
            <button
              onClick={handleLogout}
              className="text-left px-4 py-2 mt-1 rounded-md cursor-pointer text-red-500 hover:bg-red-500 hover:text-white transition-all duration-200"
            >
              Đăng xuất
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
