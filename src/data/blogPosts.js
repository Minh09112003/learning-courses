// src/data/blogPosts.js
import avt1 from "../assets/avt-blog1.jpg";
import avt2 from "../assets/avt-blog2.jpg";
import avt3 from "../assets/avt-blog3.jpg";
import avt4 from "../assets/avt-blog4.jpg"; // nếu chưa có, bạn có thể dùng avt1 tạm
import img1 from "../assets/blog-img1.jpg";
import img2 from "../assets/blog-img2.jpg";
import img3 from "../assets/blog-img3.jpg"; // thêm ảnh nếu cần
import img4 from "../assets/blog-img4.jpg"; // thêm ảnh nếu cần

const blogPosts = [
  {
    author: "Minh Nguyễn",
    avatar: avt1,
    timeAgo: "6 giờ trước",
    readTime: "3 phút đọc",
    title: "Làm sao để bắt đầu học lập trình hiệu quả?",
    excerpt:
      "Bạn mới bắt đầu học lập trình và không biết nên học từ đâu? Bài viết này sẽ giúp bạn lên kế hoạch học bài bản.",
    category: "Lập trình",
    image: img1,
  },
  {
    author: "Thảo Lê",
    avatar: avt2,
    timeAgo: "1 ngày trước",
    readTime: "2 phút đọc",
    title: "Tự học thiết kế từ con số 0: Hành trình 3 tháng",
    excerpt:
      "Tôi đã bắt đầu học thiết kế đồ họa từ số 0 và đây là những gì tôi rút ra sau 3 tháng nghiêm túc.",
    category: "Thiết kế",
    image: img2,
  },
  {
    author: "Quang Phạm",
    avatar: avt3,
    timeAgo: "2 ngày trước",
    readTime: "4 phút đọc",
    title: "5 sai lầm phổ biến khi học ngoại ngữ online",
    excerpt:
      "Nhiều bạn học tiếng Anh mãi không tiến bộ vì vướng những lỗi này. Cùng xem bạn có mắc phải không nhé!",
    category: "Ngoại ngữ",
    image: img3,
  },
  {
    author: "Trang Hoàng",
    avatar: avt4,
    timeAgo: "3 ngày trước",
    readTime: "2 phút đọc",
    title: "Cách sử dụng máy tính văn phòng hiệu quả",
    excerpt:
      "Bạn đang làm việc văn phòng nhưng chưa tận dụng hết sức mạnh của Excel, Word, PowerPoint? Bài này dành cho bạn.",
    category: "Tin học",
    image: img4,
  },
];

export default blogPosts;
