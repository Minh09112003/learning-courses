// src/components/Header.jsx
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";

import logo from "../assets/logo.png";
import UserDropdown from "./UserDropdown";
import { useSearch } from "../contexts/SearchContext"; // ✅

const Header = ({ onToggleSidebar }) => {
  const [user, setUser] = useState(null);
  const { search, setSearch } = useSearch(); // ✅ dùng context thay vì props

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm py-4 px-4 md:px-6">
      <div className="flex items-center justify-between">
        {/* LEFT - Logo + Mobile Menu */}
        <div className="flex items-center gap-3">
          <button
            className="text-2xl text-gray-700 md:hidden"
            onClick={onToggleSidebar}
            title="Mở menu"
          >
            <HiMenu />
          </button>

          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-8 h-8" />
            <h1 className="font-bold text-lg hidden md:block">
              LEARN AI VIỆT NAM
            </h1>
          </Link>
        </div>

        {/* CENTER - Search */}
        <div className="flex-1 mx-2 sm:mx-4 max-w-full sm:max-w-xl relative">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Tìm kiếm khoá học, bài viết, video, ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            spellCheck={false}
            className="w-full pl-10 pr-4 py-2 text-sm bg-gray-100 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* RIGHT - Auth / User */}
        <div className="flex items-center gap-4">
          {user ? (
            <UserDropdown user={user} />
          ) : (
            <>
              <Link
                to="/sign-up"
                className="text-sm text-blue-600 font-medium hover:text-blue-800"
              >
                Đăng ký
              </Link>
              <Link
                to="/sign-in"
                className="text-sm bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600"
              >
                Đăng nhập
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
