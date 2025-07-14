import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebookF, FaTiktok } from "react-icons/fa";
import { toast } from "react-toastify";
import signupBg from "../assets/signup-background.jpg";

const SignUp = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.password.trim()) {
      return setError("Vui lòng điền đầy đủ thông tin.");
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      return setError("Email không hợp lệ.");
    }

    if (form.password.length < 6) {
      return setError("Mật khẩu phải có ít nhất 6 ký tự.");
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      // Lưu user vào localStorage
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
        })
      );

      toast.success("Đăng ký thành công! Chào mừng bạn 🎉");
      navigate("/");
    }, 1500);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${signupBg})` }}
    >
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Đăng ký tài khoản
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Họ và tên"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            name="password"
            placeholder="Mật khẩu"
            value={form.password}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-blue-600 text-white py-2 rounded-lg font-semibold transition cursor-pointer ${
              isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
            }`}
          >
            {isLoading ? "Đang đăng ký..." : "Đăng ký"}
          </button>
        </form>

        <div className="mt-6">
          <p className="text-center text-gray-500 mb-3">Hoặc đăng ký bằng</p>
          <div className="flex justify-center gap-4">
            <button className="flex items-center justify-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out text-sm cursor-pointer">
              <FaGoogle />
              Google
            </button>
            <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out text-sm cursor-pointer">
              <FaFacebookF />
              Facebook
            </button>
            <button className="flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out text-sm cursor-pointer">
              <FaTiktok />
              TikTok
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-gray-600 mt-6">
          Đã có tài khoản?{" "}
          <Link
            to="/sign-in"
            className="text-blue-600 hover:underline hover:text-blue-800 font-medium"
          >
            Đăng nhập ngay
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
