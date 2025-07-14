// src/data/products.js

const topicCategoryMap = {
  "ReactJS": "Lập trình",
  "Python": "Lập trình",
  "Excel": "Tin học văn phòng",
  "NodeJS": "Lập trình",
  "Tiếng Anh": "Ngoại ngữ",
  "Marketing": "Marketing",
  "JavaScript": "Lập trình",
  "UI/UX": "Thiết kế",
  "Tiếng Hàn": "Ngoại ngữ",
  "Thiết kế web": "Thiết kế",
  "SQL": "Lập trình",
  "Tiếng Nhật": "Ngoại ngữ",
  "SEO": "Marketing",
  "C++": "Lập trình",
  "Data Analysis": "Lập trình",
  "WordPress": "Thiết kế",
  "Angular": "Lập trình",
  "Tin học VP": "Tin học văn phòng",
  "Adobe Illustrator": "Thiết kế",
  "SASS": "Lập trình",
  "Git/GitHub": "Lập trình",
  "Machine Learning": "Lập trình",
  "Spring Boot": "Lập trình",
  "Communication": "Kỹ năng mềm",
  "Digital Marketing": "Marketing",
  "PowerPoint": "Tin học văn phòng",
  "HTML/CSS": "Lập trình",
  "VueJS": "Lập trình",
  "Firebase": "Lập trình",
  "Java": "Lập trình",
  "Product Design": "Thiết kế",
  "Excel nâng cao": "Tin học văn phòng",
  "Laravel": "Lập trình",
  "Figma": "Thiết kế",
  "Project Management": "Kỹ năng mềm",
  "Docker": "Lập trình",
  "Kỹ năng mềm": "Kỹ năng mềm",
  "Adobe Photoshop": "Thiết kế",
  "DevOps": "Lập trình",
  "RESTful API": "Lập trình"
};

const topics = [
  "ReactJS", "Python", "Excel", "NodeJS", "Tiếng Anh", "Marketing", "JavaScript", "UI/UX",
  "Tiếng Hàn", "Thiết kế web", "SQL", "Tiếng Nhật", "SEO", "C++", "Data Analysis", "WordPress",
  "Angular", "Tin học VP", "Adobe Illustrator", "SASS", "Git/GitHub", "Machine Learning",
  "Spring Boot", "Communication", "Digital Marketing", "PowerPoint", "HTML/CSS", "VueJS",
  "Firebase", "Java", "Product Design", "Excel nâng cao", "Laravel", "Figma",
  "Project Management", "Docker", "Kỹ năng mềm", "Adobe Photoshop", "DevOps", "RESTful API"
];

const shortDescs = [
  "Nắm vững kiến thức ReactJS từ cơ bản đến nâng cao.",
  "Học Python từ con số 0, dễ hiểu và thực tiễn.",
  "Thành thạo Excel trong công việc hàng ngày.",
  "Xây dựng ứng dụng backend với NodeJS chuyên sâu.",
  "Phát triển kỹ năng giao tiếp tiếng Anh bài bản.",
  "Chiến lược marketing thực tiễn, dễ áp dụng.",
  "Làm chủ JavaScript qua ví dụ thực tế.",
  "Thiết kế giao diện người dùng chuyên nghiệp.",
  "Tiếng Hàn cho người mới bắt đầu.",
  "Thiết kế web hiện đại với HTML5 & CSS3.",
  "Xử lý dữ liệu hiệu quả với SQL.",
  "Tiếng Nhật giao tiếp và phỏng vấn xin việc.",
  "Tối ưu hóa website cho công cụ tìm kiếm.",
  "Học C++ bài bản, thực hành rõ ràng.",
  "Phân tích dữ liệu chuyên nghiệp với công cụ phổ biến.",
  "Xây dựng website với WordPress từ đầu đến cuối.",
  "Phát triển ứng dụng frontend với Angular.",
  "Thành thạo kỹ năng văn phòng hiện đại.",
  "Sáng tạo với Adobe Illustrator từ cơ bản đến nâng cao.",
  "Sử dụng SASS để viết CSS hiệu quả hơn.",
  "Sử dụng Git & GitHub thành thạo trong dự án.",
  "Giới thiệu nền tảng Machine Learning.",
  "Xây dựng REST API với Spring Boot.",
  "Nâng cao kỹ năng giao tiếp trong doanh nghiệp.",
  "Digital marketing từ chiến lược đến thực thi.",
  "Tạo slide chuyên nghiệp với PowerPoint.",
  "HTML/CSS chuyên sâu, làm chủ responsive.",
  "Xây dựng SPA với VueJS.",
  "Quản lý dữ liệu và auth với Firebase.",
  "Lập trình Java hướng đối tượng.",
  "Thiết kế sản phẩm hấp dẫn và tối ưu trải nghiệm.",
  "Khai thác Excel nâng cao và công thức chuyên sâu.",
  "Xây dựng hệ thống web bằng Laravel.",
  "Sử dụng Figma thiết kế giao diện UX/UI.",
  "Quản lý dự án hiệu quả bằng Agile/Scrum.",
  "Triển khai ứng dụng với Docker.",
  "Nâng cao kỹ năng mềm để phát triển bản thân.",
  "Chỉnh sửa ảnh chuyên nghiệp bằng Photoshop.",
  "DevOps cơ bản đến triển khai thực tế.",
  "Thiết kế và xây dựng RESTful API chuẩn."
];

const prices = [
  450000, 480000, 490000, 470000,
  530000, 550000, 570000, 490000,
  610000, 630000, 650000, 480000,
  670000, 690000, 710000, 730000,
  750000, 770000, 790000, 810000,
  830000, 850000, 870000, 890000,
  910000, 930000, 950000, 970000, 990000,
  740000, 760000, 820000, 840000,
  880000, 920000, 860000, 600000,
  1020000, 1100000
];

const getProduct = (index) => {
  const id = index + 1;
  const topic = topics[index];
  const category = topicCategoryMap[topic] || "Khác";
  const price = prices[index];
  const rating = [3, 3.5, 4, 4.5, 5][Math.floor(Math.random() * 5)];
  const isPro = id % 3 === 0;
  const shortDesc = shortDescs[index];
  const longDesc = `Khoá học "${topic}" được thiết kế dành cho những ai muốn phát triển chuyên môn trong lĩnh vực "${category}". Bạn sẽ học từ lý thuyết cơ bản đến các kỹ năng thực hành chuyên sâu. Bài học sinh động, tài liệu cập nhật và được hướng dẫn bởi giảng viên giàu kinh nghiệm.`;

  return {
    id,
    name: `Khóa học ${topic} ${isPro ? "Pro" : "Cơ bản"} #${id}`,
    category,
    price,
    rating,
    image: new URL(`../assets/courses-webp/course-${id}.webp`, import.meta.url).href,
    isPro,
    shortDesc,
    longDesc,
  };
};

const products = Array.from({ length: 40 }, (_, i) => getProduct(i));

export default products;
