import avt1 from "../assets/avt-comment-1.jpg";
import avt2 from "../assets/avt-comment-2.jpg";
import avt3 from "../assets/avt-comment-3.jpg";
import avt4 from "../assets/avt-comment-4.jpg";
import avt5 from "../assets/avt-comment-5.jpg";
import avt6 from "../assets/avt-comment-6.jpg";
import avt7 from "../assets/avt-comment-7.jpg";
import avt8 from "../assets/avt-comment-8.jpg";
import avt9 from "../assets/avt-comment-9.jpg";
import avt10 from "../assets/avt-comment-10.jpg";
import avt11 from "../assets/avt-comment-11.jpg";
import avt12 from "../assets/avt-comment-12.jpg";
import avt13 from "../assets/avt-comment-13.jpg";
import avt14 from "../assets/avt-comment-14.jpg";
import avt15 from "../assets/avt-comment-15.jpg";

const avatars = [
  avt1, avt2, avt3, avt4, avt5,
  avt6, avt7, avt8, avt9, avt10,
  avt11, avt12, avt13, avt14, avt15
];

const names = [
  "Nguyễn Văn A", "Trần Thị B", "Lê Văn C", "Phạm Thị D", "Hoàng Văn E",
  "Nguyễn Thị F", "Trần Văn G", "Vũ Thị H", "Lâm Văn I", "Đỗ Thị K",
  "Bùi Văn L", "Lê Thị M", "Ngô Văn N", "Phan Thị O", "Trịnh Văn P",
  "Đặng Thị Q", "Mai Văn R", "Đỗ Thị S", "Tăng Văn T", "Lương Thị U",
  "Chu Văn V", "Đỗ Thị W", "Nguyễn Văn X", "Lê Thị Y", "Hồ Văn Z",
  "Phạm Thị A1", "Trần Văn A2", "Nguyễn Thị A3", "Võ Văn A4", "Phan Thị A5",
  "Mai Văn A6", "Đỗ Thị A7", "Nguyễn Văn A8", "Hà Thị A9", "Lý Văn B1",
  "Trần Thị B2", "Vũ Văn C1", "Phạm Thị D1", "Hoàng Văn E1", "Nguyễn Thị F1"
];

const texts = [
  "Khóa học rất hay và dễ hiểu!",
  "Giảng viên nhiệt tình, thân thiện.",
  "Rất phù hợp cho người mới bắt đầu.",
  "Thực hành nhiều, dễ hiểu.",
  "Học xong làm dự án được luôn.",
  "Tài liệu đầy đủ, chi tiết.",
  "Giọng giảng viên dễ nghe.",
  "Nội dung rõ ràng, thực tế.",
  "Học không chán, rất thích!",
  "Có bài tập thực hành rất tốt.",
  "Khóa học rất chất lượng!",
  "Học xong tự tin apply việc.",
  "Cập nhật nội dung mới liên tục.",
  "Giảng viên phản hồi rất nhanh.",
  "Học rất vui và không áp lực.",
  "Giải thích rõ ràng từng phần.",
  "Khóa học này quá tuyệt!",
  "Tôi đã học xong và rất hài lòng.",
  "Dễ tiếp cận, dễ hiểu.",
  "Cảm ơn khóa học rất nhiều!",
  "Lộ trình học rõ ràng, hợp lý.",
  "Chất lượng hình ảnh và âm thanh tốt.",
  "Khóa học mang lại giá trị thật.",
  "Sẽ giới thiệu bạn bè học nữa.",
  "Nội dung súc tích, dễ theo dõi.",
  "Học từ cơ bản đến nâng cao.",
  "Tương tác với giảng viên dễ dàng.",
  "Không tiếc khi mua khóa này.",
  "Cảm giác như được dạy riêng.",
  "Học dễ hiểu, bài tập hay.",
  "Khóa học rất chi tiết, đáng giá.",
  "Đã học xong và rất hài lòng.",
  "Sẽ tiếp tục học thêm khóa khác!"
];

const times = ["1 giờ trước", "2 giờ trước", "3 giờ trước", "4 giờ trước", "5 giờ trước", "6 giờ trước", "7 giờ trước", "1 ngày trước", "2 ngày trước", "3 ngày trước"];

const commentsData = Array.from({ length: 40 }, (_, i) => {
  const productId = i + 1;
  const commentCount = productId % 3 === 0 ? 3 : 2;
  const comments = Array.from({ length: commentCount }, (_, j) => {
    const index = (productId * (j + 1)) % avatars.length;
    const nameIndex = (productId * (j + 3)) % names.length;
    const textIndex = (productId * (j + 5)) % texts.length;
    const timeIndex = (productId * (j + 2)) % times.length;

    return {
      id: productId * 10 + j,
      avatar: avatars[index],
      name: names[nameIndex],
      text: texts[textIndex],
      time: times[timeIndex],
    };
  });
  return {
    productId,
    comments,
  };
});

export default commentsData;