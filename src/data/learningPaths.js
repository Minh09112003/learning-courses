// src/data/learningPaths.js

const learningPaths = [
  {
    id: 1,
    title: "Lộ trình học Lập trình",
    description:
      "Từ cơ bản đến nâng cao các công nghệ như ReactJS, Python, NodeJS, giúp bạn xây dựng ứng dụng web và backend chuyên nghiệp.",
    image: new URL("../assets/courses-webp/course-1.webp", import.meta.url).href,
    link: "/learning-paths/programming",
    categories: ["Lập trình"],
  },
  {
  id: 2,
  title: "Lộ trình học Ngoại ngữ",
  description:
    "Phát triển kỹ năng giao tiếp tiếng Anh, Nhật, Hàn với giáo trình chuẩn và giảng viên bản ngữ.",
  image: new URL("../assets/courses-webp/course-5.webp", import.meta.url).href,
  link: "/learning-paths/language",
  categories: ["Ngoại ngữ"],
},
  {
    id: 3,
    title: "Lộ trình học Thiết kế",
    description:
      "Làm chủ các công cụ thiết kế hiện đại như UI/UX, Figma, Photoshop, WordPress để tạo ra sản phẩm sáng tạo và chuyên nghiệp.",
    image: new URL("../assets/courses-webp/course-8.webp", import.meta.url).href,
    link: "/learning-paths/design",
    categories: ["Thiết kế"],
  },
  {
    id: 4,
    title: "Lộ trình học Tin học",
    description:
      "Thành thạo Excel, PowerPoint, Word và các kỹ năng văn phòng thiết yếu để nâng cao hiệu suất làm việc.",
    image: new URL("../assets/courses-webp/course-3.webp", import.meta.url).href,
    link: "/learning-paths/office",
    categories: ["Tin học văn phòng"],
  },
  {
    id: 5,
    title: "Lộ trình học Marketing",
    description:
      "Nắm bắt các kỹ năng Marketing từ cơ bản đến chuyên sâu như Digital Marketing, SEO, chiến lược thương hiệu và quảng cáo.",
    image: new URL("../assets/courses-webp/course-6.webp", import.meta.url).href,
    link: "/learning-paths/marketing",
    categories: ["Marketing"],
  },
];

export default learningPaths;
