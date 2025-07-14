// src/pages/LearningPathDetail.jsx
import { useParams, Link } from "react-router-dom";
import learningPaths from "../data/learningPaths";
import products from "../data/products";
import { FaArrowLeft, FaStar } from "react-icons/fa";

const LearningPathDetail = () => {
  const { pathId } = useParams();
  const path = learningPaths.find((p) => p.link.endsWith(pathId));

  if (!path) {
    return (
      <div className="p-8 text-red-600 font-semibold">
        Lộ trình không tồn tại!
      </div>
    );
  }

  const relatedCourses = products.filter((product) =>
    path.categories.includes(product.category)
  );

  return (
    <div className="p-4 md:p-8 grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
      {/* Cột trái: Nội dung lộ trình */}
      <div className="lg:col-span-3 flex flex-col gap-6">
        {/* Nút quay lại */}
        <Link
          to="/learning-paths"
          className="text-blue-600 hover:underline text-base font-medium inline-flex items-center gap-1"
          style={{ marginTop: "10px" }}
        >
          <FaArrowLeft />
          Quay lại Lộ trình
        </Link>

        {/* Tiêu đề + Ảnh + Mô tả */}
        <h1 className="text-3xl font-bold text-blue-700">{path.title}</h1>
        {path.image && (
          <img
            src={path.image}
            alt={path.title}
            className="w-full rounded-lg shadow-md max-h-[300px] object-cover"
          />
        )}
        <p className="text-gray-700 leading-relaxed">{path.description}</p>

        {/* Khóa học liên quan */}
        {relatedCourses.length > 0 && (
          <>
            <h2 className="text-2xl font-semibold text-gray-800 mt-6">
              Các khóa học liên quan
            </h2>

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
              {relatedCourses.map((course) => (
                <div
                  key={course.id}
                  className="border border-gray-200 rounded-lg p-4 bg-white shadow hover:shadow-lg transition duration-300"
                >
                  <div className="flex gap-4 items-start">
                    <img
                      src={course.image}
                      alt={course.name}
                      className="w-24 h-24 rounded-lg object-cover shrink-0"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 mb-1 cursor-pointer">
                        {course.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {course.shortDesc}
                      </p>
                      <div className="text-sm text-gray-800">
                        <span className="text-blue-600 font-medium">
                          {course.price
                            ? `${course.price.toLocaleString()} đ`
                            : "Miễn phí"}
                        </span>
                        {" · "}
                        <span className="text-yellow-500 flex items-center gap-1">
                          {course.rating}
                          <FaStar className="text-xs" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Cột phải: Quảng cáo */}
      <div className="lg:col-span-1 space-y-6 mt-[120px]">
        <div className="bg-gradient-to-br from-purple-600 to-pink-500 p-4 rounded-lg text-white shadow">
          <h4 className="font-bold text-xl mb-2">Khoá học HTML & CSS PRO</h4>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Thực chiến với 8 dự án thực tế</li>
            <li>300+ bài tập luyện kỹ năng HTML/CSS</li>
            <li>Tặng kèm 3 mini game tự luyện</li>
            <li>Truy cập bộ 20+ file thiết kế Figma</li>
          </ul>
          <button
            className="mt-3 bg-white text-purple-700 font-semibold px-4 py-1.5 rounded
             hover:bg-purple-100 hover:scale-105 hover:shadow-md 
             transition-all duration-300 transform cursor-pointer"
          >
            Tìm hiểu thêm →
          </button>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-4 rounded-lg text-white shadow">
          <h4 className="font-bold text-xl mb-2">Khoá học Ngoại ngữ Online</h4>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Luyện nghe - nói với giảng viên bản xứ</li>
            <li>Phát âm chuẩn với công nghệ AI</li>
            <li>Hơn 200 bài luyện phản xạ giao tiếp</li>
            <li>Tặng Ebook học từ vựng cấp tốc</li>
          </ul>
          <button
            className="mt-3 bg-white text-blue-700 font-semibold px-4 py-1.5 rounded
             hover:bg-blue-100 hover:scale-105 hover:shadow-md 
             transition-all duration-300 transform cursor-pointer"
          >
            Khám phá ngay →
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearningPathDetail;
