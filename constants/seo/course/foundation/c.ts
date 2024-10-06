import { cImg } from "@/constants/image";
import { urlImageCourse } from "../../firebase";
import { ConstCourseType } from "../type";

const courseCBeginner: ConstCourseType = {
  // Use to filter course
  rating: 4.8,
  originalPrice: 5500000,
  price: 2500000,
  duration: 92, // Thời lượng đã được cập nhật
  language: ["cpp"],
  slug: "course-c-beginner",
  imgSrc: cImg,
  category: "foundation",
  // Course detail
  nameCourse: "Khóa học C cho người mới bắt đầu",
  description:
    "Khóa học C này dành cho những ai mới bắt đầu, giúp bạn nắm vững các khái niệm cơ bản và nâng cao của ngôn ngữ lập trình C.",
  tags: ["C", "Lập trình", "Người mới bắt đầu"],
  newest: true,
  popular: true,
  trending: true,
  content: {
    intro:
      "Khóa học này dành cho những ai mới bắt đầu lập trình và muốn nắm vững ngôn ngữ lập trình C, từ các khái niệm cơ bản đến các kỹ thuật nâng cao.",
    purposes: [
      "Hiểu được các khái niệm cơ bản của ngôn ngữ lập trình C",
      "Phát triển kỹ năng viết mã C chính xác và hiệu quả",
      "Nắm vững các cấu trúc dữ liệu và thuật toán cơ bản",
      "Áp dụng kiến thức vào các dự án thực tế",
    ],
    results: [
      "Có khả năng viết và hiểu mã C một cách dễ dàng",
      "Sẵn sàng tiếp cận các ngôn ngữ lập trình khác dựa trên nền tảng C",
      "Giải quyết các vấn đề lập trình phức tạp hơn",
      "Xây dựng các ứng dụng cơ bản bằng ngôn ngữ C",
    ],
    orientedUsers: [
      "Người mới bắt đầu học lập trình",
      "Sinh viên ngành Công nghệ Thông tin",
      "Những người muốn học ngôn ngữ lập trình cơ bản trước khi chuyển sang các ngôn ngữ khác",
      "Lập trình viên muốn củng cố kiến thức cơ bản về ngôn ngữ C",
    ],
    whyChoose: [
      "Khóa học được thiết kế cho người mới bắt đầu với ngôn ngữ dễ hiểu",
      "Bài giảng chi tiết và có nhiều ví dụ minh họa thực tế",
      "Giảng viên giàu kinh nghiệm và nhiệt tình",
      "Hỗ trợ từ cộng đồng học viên và giảng viên",
    ],
  },
  lessons: [
    {
      nameLesson: "Giới thiệu về C",
      duration: 4,
      detailLessons: [
        { nameDetailLesson: "C là gì?", duration: 2 },
        { nameDetailLesson: "Thiết lập môi trường", duration: 2 },
      ],
    },
    {
      nameLesson: "Cú pháp cơ bản",
      duration: 4,
      detailLessons: [
        { nameDetailLesson: "Biến và kiểu dữ liệu", duration: 2 },
        { nameDetailLesson: "Toán tử", duration: 2 },
      ],
    },
    {
      nameLesson: "Cấu trúc điều khiển",
      duration: 6,
      detailLessons: [
        { nameDetailLesson: "Câu lệnh If", duration: 2 },
        { nameDetailLesson: "Câu lệnh Switch", duration: 2 },
        { nameDetailLesson: "Vòng lặp", duration: 2 },
      ],
    },
    {
      nameLesson: "Hàm",
      duration: 6,
      detailLessons: [
        { nameDetailLesson: "Định nghĩa hàm", duration: 2 },
        { nameDetailLesson: "Tham số hàm", duration: 2 },
        { nameDetailLesson: "Giá trị trả về", duration: 2 },
      ],
    },
    {
      nameLesson: "Mảng và Chuỗi",
      duration: 6,
      detailLessons: [
        { nameDetailLesson: "Giới thiệu về Mảng", duration: 2 },
        { nameDetailLesson: "Mảng đa chiều", duration: 2 },
        { nameDetailLesson: "Xử lý Chuỗi", duration: 2 },
      ],
    },
    {
      nameLesson: "Con trỏ và Tham chiếu",
      duration: 6,
      detailLessons: [
        { nameDetailLesson: "Giới thiệu về Con trỏ", duration: 2 },
        { nameDetailLesson: "Toán tử Con trỏ", duration: 2 },
        { nameDetailLesson: "Tham chiếu", duration: 2 },
      ],
    },
    {
      nameLesson: "Cấu trúc dữ liệu",
      duration: 6,
      detailLessons: [
        { nameDetailLesson: "Struct", duration: 2 },
        { nameDetailLesson: "Union", duration: 2 },
        { nameDetailLesson: "Enum", duration: 2 },
      ],
    },
    {
      nameLesson: "Quản lý bộ nhớ",
      duration: 4,
      detailLessons: [
        { nameDetailLesson: "Cấp phát bộ nhớ động", duration: 2 },
        { nameDetailLesson: "Rò rỉ bộ nhớ và cách tránh", duration: 2 },
      ],
    },
    {
      nameLesson: "File I/O",
      duration: 4,
      detailLessons: [
        { nameDetailLesson: "Đọc từ File", duration: 2 },
        { nameDetailLesson: "Ghi vào File", duration: 2 },
      ],
    },
    {
      nameLesson: "Lập trình Hướng đối tượng trong C",
      duration: 4,
      detailLessons: [
        { nameDetailLesson: "Khái niệm Hướng đối tượng", duration: 2 },
        { nameDetailLesson: "Thực hiện OOP trong C", duration: 2 },
      ],
    },
    {
      nameLesson: "Dự án: Xây dựng máy tính bỏ túi đơn giản",
      duration: 6,
      detailLessons: [
        { nameDetailLesson: "Lập kế hoạch dự án", duration: 2 },
        { nameDetailLesson: "Thiết kế giao diện máy tính", duration: 2 },
        { nameDetailLesson: "Xây dựng logic tính toán cơ bản", duration: 2 },
      ],
    },
    // Các buổi học mở rộng
    {
      nameLesson: "Gỡ lỗi và quản lý lỗi trong C",
      duration: 8,
      detailLessons: [
        { nameDetailLesson: "Giới thiệu về gỡ lỗi", duration: 2 },
        { nameDetailLesson: "Các công cụ gỡ lỗi", duration: 2 },
        { nameDetailLesson: "Xử lý lỗi runtime", duration: 2 },
        { nameDetailLesson: "Xử lý lỗi biên dịch", duration: 2 },
      ],
    },
    {
      nameLesson: "Thư viện chuẩn C",
      duration: 6,
      detailLessons: [
        { nameDetailLesson: "Giới thiệu về thư viện chuẩn", duration: 2 },
        { nameDetailLesson: "Sử dụng các hàm trong thư viện", duration: 2 },
        {
          nameDetailLesson: "Xây dựng chương trình với thư viện chuẩn",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Lập trình socket cơ bản",
      duration: 6,
      detailLessons: [
        { nameDetailLesson: "Giới thiệu về lập trình socket", duration: 2 },
        { nameDetailLesson: "Xây dựng server và client", duration: 2 },
        { nameDetailLesson: "Truyền thông qua socket", duration: 2 },
      ],
    },
    {
      nameLesson: "Kỹ thuật lập trình hiệu quả",
      duration: 6,
      detailLessons: [
        { nameDetailLesson: "Quản lý bộ nhớ hiệu quả", duration: 2 },
        { nameDetailLesson: "Tối ưu hóa mã nguồn", duration: 2 },
        { nameDetailLesson: "Lập trình đa luồng cơ bản", duration: 2 },
      ],
    },
    {
      nameLesson: "Phương pháp kiểm thử",
      duration: 6,
      detailLessons: [
        { nameDetailLesson: "Kiểm thử đơn vị", duration: 2 },
        { nameDetailLesson: "Kiểm thử tích hợp", duration: 2 },
        { nameDetailLesson: "Kiểm thử hệ thống", duration: 2 },
      ],
    },
    {
      nameLesson: "Xử lý tín hiệu và điều khiển",
      duration: 6,
      detailLessons: [
        { nameDetailLesson: "Giới thiệu về xử lý tín hiệu", duration: 2 },
        { nameDetailLesson: "Điều khiển thiết bị qua mã C", duration: 2 },
        { nameDetailLesson: "Ứng dụng thực tế", duration: 2 },
      ],
    },
    {
      nameLesson: "Các bài toán kinh điển trong lập trình C",
      duration: 8,
      detailLessons: [
        { nameDetailLesson: "Bài toán Tháp Hà Nội", duration: 2 },
        { nameDetailLesson: "Bài toán Dijkstra", duration: 2 },
        { nameDetailLesson: "Bài toán Quay lui", duration: 2 },
        { nameDetailLesson: "Bài toán Sinh tổ hợp", duration: 2 },
      ],
    },
    {
      nameLesson: "Các dự án nhỏ với C",
      duration: 8,
      detailLessons: [
        { nameDetailLesson: "Xây dựng trò chơi đơn giản", duration: 2 },
        { nameDetailLesson: "Ứng dụng quản lý sinh viên", duration: 2 },
        { nameDetailLesson: "Ứng dụng tính toán khoa học", duration: 2 },
        { nameDetailLesson: "Ứng dụng điều khiển thiết bị", duration: 2 },
      ],
    },
    {
      nameLesson: "Lập trình hệ thống cơ bản",
      duration: 8,
      detailLessons: [
        { nameDetailLesson: "Giới thiệu về lập trình hệ thống", duration: 2 },
        { nameDetailLesson: "Giao tiếp với phần cứng", duration: 2 },
        { nameDetailLesson: "Lập trình driver cơ bản", duration: 2 },
        { nameDetailLesson: "Tối ưu hiệu suất hệ thống", duration: 2 },
      ],
    },
    {
      nameLesson: "Dự án cuối khóa: Ứng dụng quản lý sách",
      duration: 8,
      detailLessons: [
        { nameDetailLesson: "Lập kế hoạch và thiết kế", duration: 2 },
        { nameDetailLesson: "Phát triển tính năng cơ bản", duration: 2 },
        { nameDetailLesson: "Thêm tính năng nâng cao", duration: 2 },
        { nameDetailLesson: "Kiểm thử và triển khai", duration: 2 },
      ],
    },
  ],
};

export default courseCBeginner;
