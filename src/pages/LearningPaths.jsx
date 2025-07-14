// src/pages/LearningPaths.jsx
import React from "react";
import learningPaths from "../data/learningPaths";
import {
  FaCode,
  FaLanguage,
  FaPaintBrush,
  FaChartLine,
  FaMicrosoft,
  FaUserTie,
} from "react-icons/fa";

const LearningPaths = () => {
  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-4">Lộ trình học dành cho bạn</h1>
      <p className="text-gray-600 mb-8 max-w-4xl px-2 sm:px-0">
        Hãy chọn một lộ trình phù hợp với định hướng phát triển của bạn. Mỗi lộ
        trình được thiết kế bài bản, giúp bạn học tập hiệu quả và tiết kiệm thời
        gian.
      </p>

      <div className="grid gap-4 sm:gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {learningPaths.map((path, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-300 p-4 rounded-lg shadow hover:shadow-md hover:-translate-y-1 transition-transform duration-300 cursor-pointer flex flex-col gap-3"
          >
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 rounded-full border-gray-300 bg-white shadow-md border flex items-center justify-center overflow-hidden shrink-0">
                <img
                  src={path.image}
                  alt={path.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  <span className="inline-flex items-center gap-2 flex-wrap">
                    {path.title}
                    {path.title.includes("Lập trình") && (
                      <FaCode className="text-blue-500" />
                    )}
                    {path.title.includes("Ngoại ngữ") && (
                      <FaLanguage className="text-green-500" />
                    )}
                    {path.title.includes("Thiết kế") && (
                      <FaPaintBrush className="text-pink-500" />
                    )}
                    {path.title.includes("Marketing") && (
                      <FaChartLine className="text-yellow-500" />
                    )}
                    {path.title.includes("Tin học") && (
                      <FaMicrosoft className="text-purple-500" />
                    )}
                    {path.title.includes("Kỹ năng mềm") && (
                      <FaUserTie className="text-gray-500" />
                    )}
                  </span>
                </h3>

                <p className="text-gray-600 text-sm mt-1">{path.description}</p>
              </div>
            </div>

            <div className="pt-1">
              <a
                href={path.link}
                className="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded shadow hover:scale-105 hover:bg-blue-700 w-full sm:w-auto text-center"
              >
                Xem chi tiết
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningPaths;
