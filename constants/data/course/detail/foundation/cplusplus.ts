import { CourseDetailProps } from "@/server/course.type";

export const cppBeginnerDetail: CourseDetailProps["content"] = {
  name: "Khóa học C++ cho người mới bắt đầu",
  img_url:
    "https://firebasestorage.googleapis.com/v0/b/nextjs-djninex-store.appspot.com/o/image-upload%2Fcpp.jpg?alt=media&token=9addc070-a8c5-40e1-8022-dbe6690aa957",
  description:
    "Khóa học C++ này dành cho những ai mới bắt đầu, giúp bạn nắm vững các khái niệm cơ bản và nâng cao của ngôn ngữ lập trình C++.",
  price: 600000,
  content_json: {
    about: {
      desc: "Khóa học này dành cho những ai mới bắt đầu lập trình và muốn nắm vững ngôn ngữ lập trình C++, từ các khái niệm cơ bản đến các kỹ thuật nâng cao.",
      title: "Khóa học C++ cho người mới bắt đầu",
      points: [
        "Hiểu được các khái niệm cơ bản của ngôn ngữ lập trình C++",
        "Phát triển kỹ năng viết mã C++ chính xác và hiệu quả",
        "Nắm vững các cấu trúc dữ liệu và thuật toán cơ bản",
        "Áp dụng kiến thức vào các dự án thực tế",
      ],
      journey: [
        "Giới thiệu về C++",
        "Cú pháp cơ bản",
        "Cấu trúc điều khiển",
        "Hàm",
        "Mảng và Chuỗi",
        "Con trỏ và Tham chiếu",
        "Lập trình Hướng đối tượng",
        "Thư viện mẫu chuẩn (STL)",
      ],
      audience:
        "Người mới bắt đầu học lập trình, sinh viên ngành CNTT, những người muốn học ngôn ngữ lập trình cơ bản trước khi chuyển sang ngôn ngữ khác.",
      projects: [
        {
          desc: "Xây dựng trò chơi rắn săn mồi",
          name: "Dự án: Rắn săn mồi",
        },
      ],
    },
    skills: {
      list: [
        "Viết và hiểu mã C++ một cách dễ dàng",
        "Sẵn sàng tiếp cận các ngôn ngữ lập trình khác dựa trên nền tảng C++",
        "Giải quyết các vấn đề lập trình phức tạp",
        "Xây dựng các ứng dụng cơ bản bằng ngôn ngữ C++",
      ],
      title: "Kỹ năng đạt được",
    },
    for_who: {
      list: [
        "Người mới học lập trình",
        "Sinh viên ngành Công nghệ Thông tin",
        "Người muốn học ngôn ngữ lập trình cơ bản",
        "Lập trình viên muốn củng cố kiến thức về C++",
      ],
      title: "Đối tượng phù hợp",
    },
    overview: {
      level: "Người mới bắt đầu",
      features: [
        {
          icon: "bar-chart-line",
          name: "Từ cơ bản đến nâng cao",
        },
        {
          icon: "play-circle-fill",
          name: "118 giờ nội dung",
        },
        {
          icon: "list-check",
          name: "32 bài học",
        },
        {
          icon: "cloud-arrow-down",
          name: "Nội dung có thể tải về",
        },
        {
          icon: "code-square",
          name: "Bài tập thực hành",
        },
        {
          icon: "infinity",
          name: "Truy cập trọn đời",
        },
        {
          icon: "clock-history",
          name: "Học theo tốc độ của riêng bạn",
        },
      ],
      lesson_count: 32,
      video_content: "118 giờ nội dung",
    },
    highlights: {
      title: "Điểm nổi bật",
      points: [
        "Thiết kế cho người mới bắt đầu",
        "Nhiều ví dụ minh họa thực tế",
        "Hỗ trợ từ giảng viên và cộng đồng",
      ],
    },
    beginner_friendly: {
      desc: "Không yêu cầu kiến thức nền tảng",
      title: "Thân thiện với người mới bắt đầu",
      details: [
        "Bắt đầu từ cơ bản",
        "Lộ trình từ mới đến chuyên nghiệp",
        "Nhiều bài tập thực hành",
      ],
      key_points: [
        "Phù hợp người mới bắt đầu",
        "Giải thích dễ hiểu",
        "Thực hành nhiều",
      ],
    },
  },
  duration: 118,
};

export const roadmapCppBeginnerDetail = [
  {
    id: 1,
    name: "Giới thiệu về C++",
    description:
      "Khóa học cung cấp tổng quan về ngôn ngữ C++ và thiết lập môi trường lập trình.",
    lessons: {
      1: [
        { id: 1, name: "C++ là gì?", duration: 2 },
        { id: 2, name: "Thiết lập môi trường", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 4,
  },
  {
    id: 2,
    name: "Cú pháp cơ bản",
    description: "Học về các biến, kiểu dữ liệu và toán tử trong C++.",
    lessons: {
      1: [
        { id: 3, name: "Biến và kiểu dữ liệu", duration: 2 },
        { id: 4, name: "Toán tử", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 4,
  },
  {
    id: 3,
    name: "Cấu trúc điều khiển",
    description:
      "Khám phá các cấu trúc điều khiển trong C++, như If, Switch và vòng lặp.",
    lessons: {
      1: [
        { id: 5, name: "Câu lệnh If", duration: 2 },
        { id: 6, name: "Câu lệnh Switch", duration: 2 },
        { id: 7, name: "Vòng lặp", duration: 4 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 8,
  },
  {
    id: 4,
    name: "Hàm",
    description: "Tìm hiểu về cách định nghĩa và sử dụng hàm trong C++.",
    lessons: {
      1: [
        { id: 8, name: "Định nghĩa hàm", duration: 2 },
        { id: 9, name: "Tham số hàm", duration: 2 },
        { id: 10, name: "Giá trị trả về", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 8,
  },
  {
    id: 5,
    name: "Mảng và Chuỗi",
    description: "Học về mảng và chuỗi trong ngôn ngữ lập trình C++.",
    lessons: {
      1: [
        { id: 11, name: "Giới thiệu về Mảng", duration: 2 },
        { id: 12, name: "Mảng đa chiều", duration: 2 },
        { id: 13, name: "Xử lý Chuỗi", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 6,
  },
  {
    id: 6,
    name: "Con trỏ và Tham chiếu",
    description: "Tìm hiểu về con trỏ và tham chiếu trong C++.",
    lessons: {
      1: [
        { id: 14, name: "Giới thiệu về Con trỏ", duration: 2 },
        { id: 15, name: "Toán tử Con trỏ", duration: 2 },
        { id: 16, name: "Tham chiếu", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 6,
  },
  {
    id: 7,
    name: "Lập trình Hướng đối tượng",
    description:
      "Khám phá các khái niệm về lập trình hướng đối tượng trong C++.",
    lessons: {
      1: [
        { id: 17, name: "Lớp và Đối tượng", duration: 2 },
        { id: 18, name: "Constructor và Destructor", duration: 2 },
        { id: 19, name: "Kế thừa", duration: 2 },
        { id: 20, name: "Đa hình", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 8,
  },
  {
    id: 8,
    name: "Các khái niệm OOP nâng cao",
    description:
      "Khám phá các khái niệm nâng cao trong lập trình hướng đối tượng.",
    lessons: {
      1: [
        { id: 21, name: "Nạp chồng toán tử", duration: 2 },
        { id: 22, name: "Templates", duration: 2 },
        { id: 23, name: "Xử lý ngoại lệ", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 6,
  },
  {
    id: 9,
    name: "Thư viện mẫu chuẩn (STL)",
    description: "Khám phá Thư viện mẫu chuẩn (STL) trong C++.",
    lessons: {
      1: [
        { id: 24, name: "Giới thiệu về STL", duration: 2 },
        { id: 25, name: "Containers trong STL", duration: 2 },
        { id: 26, name: "Vector", duration: 2 },
        { id: 27, name: "List", duration: 2 },
        { id: 28, name: "Deque", duration: 2 },
        { id: 29, name: "Set và Multiset", duration: 2 },
        { id: 30, name: "Map và Multimap", duration: 2 },
        { id: 31, name: "Iterators trong STL", duration: 2 },
        { id: 32, name: "Algorithms trong STL", duration: 2 },
        { id: 33, name: "Functors và Lambda Expressions", duration: 2 },
        { id: 34, name: "Ứng dụng của STL trong dự án", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 22,
  },
  {
    id: 10,
    name: "File I/O",
    description: "Làm việc với các tập tin trong C++.",
    lessons: {
      1: [
        { id: 35, name: "Đọc từ File", duration: 2 },
        { id: 36, name: "Ghi vào File", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 4,
  },
  {
    id: 11,
    name: "Quản lý bộ nhớ",
    description: "Quản lý bộ nhớ hiệu quả trong C++.",
    lessons: {
      1: [
        { id: 37, name: "Cấp phát bộ nhớ động", duration: 2 },
        { id: 38, name: "Con trỏ thông minh", duration: 2 },
        { id: 39, name: "Rò rỉ bộ nhớ và cách tránh", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 6,
  },
  {
    id: 12,
    name: "Đa luồng",
    description: "Khám phá lập trình đa luồng trong C++.",
    lessons: {
      1: [
        { id: 40, name: "Giới thiệu về Đa luồng", duration: 2 },
        { id: 41, name: "Quản lý Luồng", duration: 2 },
        { id: 42, name: "Đồng bộ hóa", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 6,
  },
  {
    id: 13,
    name: "Mạng máy tính",
    description: "Tìm hiểu về mạng máy tính và lập trình mạng trong C++.",
    lessons: {
      1: [
        { id: 43, name: "Các khái niệm cơ bản về Mạng", duration: 2 },
        { id: 44, name: "Lập trình Socket", duration: 2 },
        { id: 45, name: "HTTP và Web Requests", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 6,
  },
  {
    id: 14,
    name: "Dự án: Xây dựng trò chơi rắn săn mồi",
    description: "Xây dựng trò chơi rắn săn mồi như một dự án thực tế.",
    lessons: {
      1: [
        { id: 46, name: "Lập kế hoạch dự án", duration: 2 },
        { id: 47, name: "Thiết kế giao diện trò chơi", duration: 2 },
        { id: 48, name: "Thiết lập môi trường phát triển", duration: 2 },
        { id: 49, name: "Xây dựng logic trò chơi cơ bản", duration: 2 },
        { id: 50, name: "Xử lý va chạm và kết thúc trò chơi", duration: 2 },
        { id: 51, name: "Thêm chức năng cho trò chơi", duration: 2 },
        { id: 52, name: "Tối ưu hóa hiệu suất trò chơi", duration: 2 },
        { id: 53, name: "Kiểm tra và gỡ lỗi", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 16,
  },
  {
    id: 15,
    name: "Gỡ lỗi và quản lý lỗi trong C++",
    description: "Khám phá các phương pháp gỡ lỗi và xử lý lỗi trong C++.",
    lessons: {
      1: [
        { id: 54, name: "Giới thiệu về gỡ lỗi", duration: 2 },
        { id: 55, name: "Các công cụ gỡ lỗi", duration: 2 },
        { id: 56, name: "Xử lý lỗi runtime", duration: 2 },
        { id: 57, name: "Xử lý lỗi biên dịch", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 8,
  },
  {
    id: 16,
    name: "Thư viện Boost",
    description: "Tìm hiểu về thư viện Boost trong C++.",
    lessons: {
      1: [
        { id: 58, name: "Giới thiệu về Boost", duration: 2 },
        { id: 59, name: "Sử dụng Boost cho các dự án", duration: 2 },
        { id: 60, name: "Thư viện Boost phổ biến", duration: 2 },
        { id: 61, name: "Ứng dụng Boost trong dự án thực tế", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 8,
  },
  {
    id: 17,
    name: "C++11 và các phiên bản mới",
    description: "Khám phá các tính năng mới của C++11 và các phiên bản sau.",
    lessons: {
      1: [
        { id: 62, name: "Giới thiệu về C++11", duration: 2 },
        { id: 63, name: "Các tính năng mới trong C++11", duration: 2 },
        { id: 64, name: "C++14, C++17 và C++20", duration: 2 },
        { id: 65, name: "Ứng dụng các tính năng mới", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 8,
  },
  {
    id: 18,
    name: "Thiết kế phần mềm và cấu trúc dữ liệu",
    description:
      "Học về thiết kế phần mềm và các cấu trúc dữ liệu nâng cao trong C++.",
    lessons: {
      1: [
        { id: 66, name: "Thiết kế phần mềm", duration: 2 },
        { id: 67, name: "Cấu trúc dữ liệu nâng cao", duration: 2 },
        { id: 68, name: "Thiết kế giải thuật", duration: 2 },
        { id: 69, name: "Ứng dụng vào dự án thực tế", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 8,
  },
  {
    id: 19,
    name: "Lập trình di động với C++",
    description: "Khám phá cách lập trình di động bằng C++.",
    lessons: {
      1: [
        { id: 70, name: "Giới thiệu lập trình di động", duration: 2 },
        { id: 71, name: "Phát triển ứng dụng Android", duration: 2 },
        { id: 72, name: "Phát triển ứng dụng iOS", duration: 2 },
        { id: 73, name: "Công cụ lập trình di động", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 8,
  },
  {
    id: 20,
    name: "Lập trình hệ thống",
    description: "Tìm hiểu về lập trình hệ thống trong C++.",
    lessons: {
      1: [
        { id: 74, name: "Giới thiệu lập trình hệ thống", duration: 2 },
        { id: 75, name: "Giao tiếp với phần cứng", duration: 2 },
        { id: 76, name: "Lập trình driver cơ bản", duration: 2 },
        { id: 77, name: "Tối ưu hiệu suất hệ thống", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 8,
  },
  {
    id: 21,
    name: "Kỹ thuật lập trình hiệu quả",
    description: "Khám phá các kỹ thuật lập trình hiệu quả trong C++.",
    lessons: {
      1: [
        { id: 78, name: "Quản lý bộ nhớ hiệu quả", duration: 2 },
        { id: 79, name: "Tối ưu hóa mã nguồn", duration: 2 },
        { id: 80, name: "Lập trình đa luồng cơ bản", duration: 2 },
        { id: 81, name: "Xử lý ngoại lệ nâng cao", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 8,
  },
  {
    id: 22,
    name: "Phương pháp kiểm thử",
    description: "Khám phá các phương pháp kiểm thử trong lập trình C++.",
    lessons: {
      1: [
        { id: 82, name: "Kiểm thử đơn vị", duration: 2 },
        { id: 83, name: "Kiểm thử tích hợp", duration: 2 },
        { id: 84, name: "Kiểm thử hệ thống", duration: 2 },
        { id: 85, name: "Công cụ kiểm thử", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 8,
  },
  {
    id: 23,
    name: "Xử lý tín hiệu và điều khiển",
    description: "Tìm hiểu về xử lý tín hiệu và điều khiển thiết bị trong C++.",
    lessons: {
      1: [
        { id: 86, name: "Giới thiệu về xử lý tín hiệu", duration: 2 },
        { id: 87, name: "Điều khiển thiết bị qua mã C++", duration: 2 },
        { id: 88, name: "Ứng dụng thực tế", duration: 2 },
        { id: 89, name: "Dự án nhỏ về xử lý tín hiệu", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 8,
  },
  {
    id: 24,
    name: "Các dự án nhỏ với C++",
    description: "Thực hành với các dự án nhỏ trong C++.",
    lessons: {
      1: [
        { id: 90, name: "Xây dựng trò chơi đơn giản", duration: 2 },
        { id: 91, name: "Ứng dụng quản lý sinh viên", duration: 2 },
        { id: 92, name: "Ứng dụng tính toán khoa học", duration: 2 },
        { id: 93, name: "Ứng dụng điều khiển thiết bị", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 8,
  },
];
