import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebookF, FaTiktok } from "react-icons/fa";
import signinBg from "../assets/signin-background.jpg";
import { toast } from "react-toastify";

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email.trim() || !form.password.trim()) {
      return setError("Vui lòng điền đầy đủ thông tin.");
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      // ✅ Tự tạo user tạm và lưu luôn vào localStorage
      const fakeUser = {
        name: "Người dùng",
        email: form.email,
        password: form.password,
      };

      localStorage.setItem("user", JSON.stringify(fakeUser));

      toast.success("Đăng nhập thành công!");
      navigate("/");
    }, 1500);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${signinBg})` }}
    >
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
          Đăng nhập tài khoản
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="password"
            name="password"
            placeholder="Mật khẩu"
            value={form.password}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full text-white py-2 rounded-lg font-semibold transition ${
              isLoading
                ? "bg-orange-300 cursor-not-allowed opacity-50"
                : "bg-orange-500 hover:bg-orange-600 cursor-pointer"
            }`}
          >
            {isLoading ? "Đang đăng nhập..." : "Đăng nhập"}
          </button>
        </form>

        <div className="mt-6">
          <p className="text-center text-gray-500 mb-3">Hoặc đăng nhập bằng</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out text-sm cursor-pointer">
              <FaGoogle />
              Google
            </button>
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out text-sm cursor-pointer">
              <FaFacebookF />
              Facebook
            </button>
            <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out text-sm cursor-pointer">
              <FaTiktok />
              TikTok
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-gray-600 mt-6">
          Chưa có tài khoản?{" "}
          <Link
            to="/sign-up"
            className="text-orange-500 hover:underline hover:text-orange-700 font-medium"
          >
            Đăng ký ngay
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
