import React from "react";
import blogPosts from "../data/blogPosts";

const Blog = () => {
  return (
    <div className="p-4 md:p-8 grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
      {/* Cột trái - Bài viết */}
      <div className="lg:col-span-3 flex flex-col gap-6">
        <h1 className="text-2xl font-bold mb-2">Bài viết nổi bật</h1>
        <p className="text-gray-600 mb-4 max-w-3xl">
          Tổng hợp các bài viết chia sẻ kinh nghiệm học online, tự học hiệu quả
          và phát triển kỹ năng trong nhiều lĩnh vực như lập trình, thiết kế,
          ngoại ngữ,...
        </p>

        {blogPosts.map((post, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-300 rounded-xl p-5 shadow-sm hover:shadow-md transition duration-300 flex flex-col md:flex-row gap-4 items-start"
          >
            {/* Nội dung trái: Avatar + Info */}
            <div className="flex-1 flex gap-4">
              {/* Avatar */}
              <img
                src={post.avatar}
                alt={post.author}
                className="w-12 h-12 rounded-full object-cover flex-shrink-0 cursor-pointer"
              />

              {/* Nội dung chính */}
              <div className="flex-1">
                {/* Tác giả + thời gian */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-1 flex-wrap">
                  <span className="font-medium text-black cursor-pointer">
                    {post.author}
                  </span>
                  <span>• {post.timeAgo}</span>
                  <span>• {post.readTime}</span>
                </div>

                {/* Tiêu đề */}
                <h2 className="text-lg font-bold mb-1 cursor-pointer">
                  {post.title}
                </h2>

                {/* Mô tả ngắn */}
                <p className="text-sm text-gray-600 mb-2">{post.excerpt}</p>

                {/* Tag */}
                <span className="inline-block bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Ảnh bài viết (thumbnail) */}
            {post.image && (
              <div className="w-full sm:w-[160px] h-[100px] flex-shrink-0 cursor-pointer">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Cột phải - Sidebar */}
      <div className="lg:col-span-1 space-y-6">
        {/* Chủ đề */}
        <div className="bg-white p-4 rounded-lg shadow border border-gray-500">
          <h3 className="font-semibold text-lg mb-3">
            Xem các bài viết theo chủ đề
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Lập trình",
              "Thiết kế",
              "Ngoại ngữ",
              "Tin học",
              "Kỹ năng mềm",
            ].map((topic) => (
              <span
                key={topic}
                className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 cursor-pointer"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* Quảng cáo */}
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

export default Blog;
