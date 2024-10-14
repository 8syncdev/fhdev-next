import { urlImageCourse } from "../../firebase";
import { ConstCourseType } from "../type";

const courseCppBeginner: ConstCourseType = {
  // Use to filter course
  rating: 4.8,
  originalPrice: 5500000,
  price: 3300000,
  duration: 118,
  language: ["cpp"],
  slug: "course-cpp-beginner",
  imgSrc: urlImageCourse['cpp'],
  category: "foundation",
  // Course detail
  nameCourse: "Khóa học C++ cho người mới bắt đầu",
  description:
    "Khóa học C++ này dành cho những ai mới bắt đầu, giúp bạn nắm vững các khái niệm cơ bản và nâng cao của ngôn ngữ lập trình C++. Bao gồm các kiến thức cơ bản như vòng lặp, for, hàm cho đến nâng cao con trỏ, string, struct. Ngoài ra, nội dung còn có thư viện STL như vector, set, map, thuật toán tìm kiếm, sắp xếp, ngăn xếp, hàng đợi, OOP.",
  tags: ["C++", "Lập trình", "Người mới bắt đầu"],
  newest: true,
  popular: true,
  trending: true,
  content: {
    intro:
      "Khóa học này dành cho những ai mới bắt đầu lập trình và muốn nắm vững ngôn ngữ lập trình C++, từ các khái niệm cơ bản đến các kỹ thuật nâng cao.",
    purposes: [
      "Hiểu được các khái niệm cơ bản của ngôn ngữ lập trình C++",
      "Phát triển kỹ năng viết mã C++ chính xác và hiệu quả",
      "Nắm vững các cấu trúc dữ liệu và thuật toán cơ bản",
      "Áp dụng kiến thức vào các dự án thực tế",
    ],
    results: [
      "Có khả năng viết và hiểu mã C++ một cách dễ dàng",
      "Sẵn sàng tiếp cận các ngôn ngữ lập trình khác dựa trên nền tảng C++",
      "Giải quyết các vấn đề lập trình phức tạp hơn",
      "Xây dựng các ứng dụng cơ bản bằng ngôn ngữ C++",
    ],
    orientedUsers: [
      "Người mới bắt đầu học lập trình",
      "Sinh viên ngành Công nghệ Thông tin",
      "Những người muốn học ngôn ngữ lập trình cơ bản trước khi chuyển sang các ngôn ngữ khác",
      "Lập trình viên muốn củng cố kiến thức cơ bản về ngôn ngữ C++",
    ],
    whyChoose: [
      "100% giảng viên, trợ giảng đạt giải lập trình cấp tỉnh, quốc gia",
      "Hệ thống website chấm bài tự động, xếp hạng, đo lường từng bài tập",
      "Số lượng bài tập lên tới 600-800 bài",
      "Tài liệu biên soạn chuyên sâu xem trước",
      "Hỗ trợ giải đáp thắc mắc của học viên 24/7",
      "Kiểm tra, sửa chữa từng dòng code cho học viên",
      "Video xem lại sau mỗi buổi học",
    ],
  },
  lessons: [
    {
      nameLesson: "Giới thiệu về C++",
      duration: 4,
      detailLessons: [
        { nameDetailLesson: "C++ là gì?", duration: 2 },
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
      duration: 8,
      detailLessons: [
        { nameDetailLesson: "Câu lệnh If", duration: 2 },
        { nameDetailLesson: "Câu lệnh Switch", duration: 2 },
        { nameDetailLesson: "Vòng lặp", duration: 4 },
      ],
    },
    {
      nameLesson: "Hàm",
      duration: 8,
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
      nameLesson: "Lập trình Hướng đối tượng",
      duration: 8,
      detailLessons: [
        { nameDetailLesson: "Lớp và Đối tượng", duration: 2 },
        { nameDetailLesson: "Constructor và Destructor", duration: 2 },
        { nameDetailLesson: "Kế thừa", duration: 2 },
        { nameDetailLesson: "Đa hình", duration: 2 },
      ],
    },
    {
      nameLesson: "Các khái niệm OOP nâng cao",
      duration: 6,
      detailLessons: [
        { nameDetailLesson: "Nạp chồng toán tử", duration: 2 },
        { nameDetailLesson: "Templates", duration: 2 },
        { nameDetailLesson: "Xử lý ngoại lệ", duration: 2 },
      ],
    },
    {
      nameLesson: "Thư viện mẫu chuẩn (STL)",
      duration: 22,
      detailLessons: [
        { nameDetailLesson: "Giới thiệu về STL", duration: 2 },
        { nameDetailLesson: "Containers trong STL", duration: 2 },
        { nameDetailLesson: "Vector", duration: 2 },
        { nameDetailLesson: "List", duration: 2 },
        { nameDetailLesson: "Deque", duration: 2 },
        { nameDetailLesson: "Set và Multiset", duration: 2 },
        { nameDetailLesson: "Map và Multimap", duration: 2 },
        { nameDetailLesson: "Iterators trong STL", duration: 2 },
        { nameDetailLesson: "Algorithms trong STL", duration: 2 },
        { nameDetailLesson: "Functors và Lambda Expressions", duration: 2 },
        { nameDetailLesson: "Ứng dụng của STL trong dự án", duration: 2 },
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
      nameLesson: "Quản lý bộ nhớ",
      duration: 6,
      detailLessons: [
        { nameDetailLesson: "Cấp phát bộ nhớ động", duration: 2 },
        { nameDetailLesson: "Con trỏ thông minh", duration: 2 },
        { nameDetailLesson: "Rò rỉ bộ nhớ và cách tránh", duration: 2 },
      ],
    },
    {
      nameLesson: "Đa luồng",
      duration: 6,
      detailLessons: [
        { nameDetailLesson: "Giới thiệu về Đa luồng", duration: 2 },
        { nameDetailLesson: "Quản lý Luồng", duration: 2 },
        { nameDetailLesson: "Đồng bộ hóa", duration: 2 },
      ],
    },
    {
      nameLesson: "Mạng máy tính",
      duration: 6,
      detailLessons: [
        { nameDetailLesson: "Các khái niệm cơ bản về Mạng", duration: 2 },
        { nameDetailLesson: "Lập trình Socket", duration: 2 },
        { nameDetailLesson: "HTTP và Web Requests", duration: 2 },
      ],
    },
    {
      nameLesson: "Dự án: Xây dựng trò chơi rắn săn mồi",
      duration: 16,
      detailLessons: [
        { nameDetailLesson: "Lập kế hoạch dự án", duration: 2 },
        { nameDetailLesson: "Thiết kế giao diện trò chơi", duration: 2 },
        {
          nameDetailLesson: "Thiết lập môi trường phát triển",
          duration: 2,
        },
        { nameDetailLesson: "Xây dựng logic trò chơi cơ bản", duration: 2 },
        {
          nameDetailLesson: "Xử lý va chạm và kết thúc trò chơi",
          duration: 2,
        },
        { nameDetailLesson: "Thêm chức năng cho trò chơi", duration: 2 },
        { nameDetailLesson: "Tối ưu hóa hiệu suất trò chơi", duration: 2 },
        { nameDetailLesson: "Kiểm tra và gỡ lỗi", duration: 2 },
      ],
    },
    // Các buổi học mở rộng
    {
      nameLesson: "Gỡ lỗi và quản lý lỗi trong C++",
      duration: 8,
      detailLessons: [
        { nameDetailLesson: "Giới thiệu về gỡ lỗi", duration: 2 },
        { nameDetailLesson: "Các công cụ gỡ lỗi", duration: 2 },
        { nameDetailLesson: "Xử lý lỗi runtime", duration: 2 },
        { nameDetailLesson: "Xử lý lỗi biên dịch", duration: 2 },
      ],
    },
    {
      nameLesson: "Thư viện Boost",
      duration: 8,
      detailLessons: [
        { nameDetailLesson: "Giới thiệu về Boost", duration: 2 },
        { nameDetailLesson: "Sử dụng Boost cho các dự án", duration: 2 },
        { nameDetailLesson: "Thư viện Boost phổ biến", duration: 2 },
        {
          nameDetailLesson: "Ứng dụng Boost trong dự án thực tế",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "C++11 và các phiên bản mới",
      duration: 8,
      detailLessons: [
        { nameDetailLesson: "Giới thiệu về C++11", duration: 2 },
        { nameDetailLesson: "Các tính năng mới trong C++11", duration: 2 },
        { nameDetailLesson: "C++14, C++17 và C++20", duration: 2 },
        { nameDetailLesson: "Ứng dụng các tính năng mới", duration: 2 },
      ],
    },
    {
      nameLesson: "Thiết kế phần mềm và cấu trúc dữ liệu",
      duration: 8,
      detailLessons: [
        { nameDetailLesson: "Thiết kế phần mềm", duration: 2 },
        { nameDetailLesson: "Cấu trúc dữ liệu nâng cao", duration: 2 },
        { nameDetailLesson: "Thiết kế giải thuật", duration: 2 },
        { nameDetailLesson: "Ứng dụng vào dự án thực tế", duration: 2 },
      ],
    },
    {
      nameLesson: "Lập trình di động với C++",
      duration: 8,
      detailLessons: [
        { nameDetailLesson: "Giới thiệu lập trình di động", duration: 2 },
        { nameDetailLesson: "Phát triển ứng dụng Android", duration: 2 },
        { nameDetailLesson: "Phát triển ứng dụng iOS", duration: 2 },
        { nameDetailLesson: "Công cụ lập trình di động", duration: 2 },
      ],
    },
    {
      nameLesson: "Lập trình hệ thống",
      duration: 8,
      detailLessons: [
        { nameDetailLesson: "Giới thiệu lập trình hệ thống", duration: 2 },
        { nameDetailLesson: "Giao tiếp với phần cứng", duration: 2 },
        { nameDetailLesson: "Lập trình driver cơ bản", duration: 2 },
        { nameDetailLesson: "Tối ưu hiệu suất hệ thống", duration: 2 },
      ],
    },
    {
      nameLesson: "Kỹ thuật lập trình hiệu quả",
      duration: 8,
      detailLessons: [
        { nameDetailLesson: "Quản lý bộ nhớ hiệu quả", duration: 2 },
        { nameDetailLesson: "Tối ưu hóa mã nguồn", duration: 2 },
        { nameDetailLesson: "Lập trình đa luồng cơ bản", duration: 2 },
        { nameDetailLesson: "Xử lý ngoại lệ nâng cao", duration: 2 },
      ],
    },
    {
      nameLesson: "Phương pháp kiểm thử",
      duration: 8,
      detailLessons: [
        { nameDetailLesson: "Kiểm thử đơn vị", duration: 2 },
        { nameDetailLesson: "Kiểm thử tích hợp", duration: 2 },
        { nameDetailLesson: "Kiểm thử hệ thống", duration: 2 },
        { nameDetailLesson: "Công cụ kiểm thử", duration: 2 },
      ],
    },
    {
      nameLesson: "Xử lý tín hiệu và điều khiển",
      duration: 8,
      detailLessons: [
        { nameDetailLesson: "Giới thiệu về xử lý tín hiệu", duration: 2 },
        { nameDetailLesson: "Điều khiển thiết bị qua mã C++", duration: 2 },
        { nameDetailLesson: "Ứng dụng thực tế", duration: 2 },
        { nameDetailLesson: "Dự án nhỏ về xử lý tín hiệu", duration: 2 },
      ],
    },
    {
      nameLesson: "Các dự án nhỏ với C++",
      duration: 8,
      detailLessons: [
        { nameDetailLesson: "Xây dựng trò chơi đơn giản", duration: 2 },
        { nameDetailLesson: "Ứng dụng quản lý sinh viên", duration: 2 },
        { nameDetailLesson: "Ứng dụng tính toán khoa học", duration: 2 },
        { nameDetailLesson: "Ứng dụng điều khiển thiết bị", duration: 2 },
      ],
    },
  ],
};

export default courseCppBeginner;
