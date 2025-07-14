import React, { useState } from "react";
import { toast } from "react-toastify";

const ChangePassword = () => {
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { newPassword, confirmPassword } = form;

    if (!newPassword || !confirmPassword) {
      return toast.error("Vui lòng nhập mật khẩu mới và xác nhận.");
    }

    if (newPassword.length < 6) {
      return toast.error("Mật khẩu mới phải có ít nhất 6 ký tự.");
    }

    if (newPassword !== confirmPassword) {
      return toast.error("Xác nhận mật khẩu không khớp.");
    }

    // Giả lập đổi mật khẩu thành công
    toast.success("Đổi mật khẩu thành công!");
    setForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Đổi mật khẩu</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="password"
            name="currentPassword"
            placeholder="Mật khẩu hiện tại"
            value={form.currentPassword}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="password"
            name="newPassword"
            placeholder="Mật khẩu mới"
            value={form.newPassword}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Xác nhận mật khẩu"
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Xác nhận
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
