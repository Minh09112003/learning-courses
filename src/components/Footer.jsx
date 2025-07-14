// src/components/Footer.jsx
import { FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#1f1f1f] text-white py-10 px-6 w-full">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-8">
        {/* Cột 1: Thông tin liên hệ */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="logo" className="w-8 h-8 rounded-md" />
            <h2 className="font-semibold text-lg">Học Để Đi Làm</h2>
          </div>
          <p className="text-sm text-gray-300 mb-1">Điện thoại: 0918 305 220</p>
          <p className="text-sm text-gray-300 mb-1">Email: diepdaiminh@gmail.com</p>
          <p className="text-sm text-gray-300 mb-4">
            Địa chỉ: 328/28/2C, Phạm Văn Chiêu, Hồ Chí Minh
          </p>
        </div>

        {/* Cột 2: Về Learn AI */}
        <div>
          <h3 className="font-semibold mb-4">VỀ LEARN AI</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Giới thiệu</li>
            <li>Liên hệ</li>
            <li>Điều khoản</li>
            <li>Bảo mật</li>
          </ul>
        </div>

        {/* Cột 3: Sản phẩm */}
        <div>
          <h3 className="font-semibold mb-4">SẢN PHẨM</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Trình luyện ReactJS tương tác</li>
            <li>Học HTML5 qua trò chơi kéo thả</li>
            <li>Mô phỏng Backend với NodeJS</li>
            <li>Trò chơi kết nối câu lệnh SQL</li>
            <li>Trải nghiệm AI trong dự đoán dữ liệu</li>
            <li>Thử thách bảo mật Web căn bản</li>
          </ul>
        </div>

        {/* Cột 4: Công cụ */}
        <div>
          <h3 className="font-semibold mb-4">CÔNG CỤ</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Tạo CV lập trình</li>
            <li>Rút gọn link</li>
            <li>Clip-path tool</li>
            <li>Snippet nhanh</li>
            <li>CSS Grid tool</li>
            <li>AI cảnh báo chạm mặt</li>
          </ul>
        </div>

        {/* Cột 5: Thông tin công ty */}
        <div>
          <h3 className="font-semibold mb-4">
            CÔNG TY GIÁO DỤC THƯƠNG MẠI ĐIỆN TỬ LEARN AI
          </h3>
          <p className="text-sm text-gray-300 mb-1">
            <span className="font-semibold text-white">Mã số thuế:</span> 012345678910
          </p>
          <p className="text-sm text-gray-300 mb-1">
            <span className="font-semibold text-white">Ngày thành lập:</span> 10/07/2025
          </p>
          <p className="text-sm text-gray-300">
            <span className="font-semibold text-white">Lĩnh vực hoạt động:</span> Chia sẻ
            kiến thức lập trình, công nghệ. Learn AI xây dựng nội dung học tập chất lượng
            để hỗ trợ cộng đồng người học tại Việt Nam.
          </p>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        <div className="flex justify-center gap-4 mb-2">
          <FaYoutube className="text-red-600 text-lg cursor-pointer" />
          <FaFacebookF className="text-blue-500 text-lg cursor-pointer" />
          <FaTiktok className="text-white text-lg cursor-pointer" />
        </div>
        <p>© 2025 - 2028 LEARN AI. Nền tảng học online hàng đầu Việt Nam</p>
      </div>
    </footer>
  );
};

export default Footer;
