import { CourseDetailProps } from "@/server/course.type";

export const cBeginnerDetail: CourseDetailProps["content"] = {
  name: "Khóa học C cho người mới bắt đầu",
  img_url: "",
  description:
    "Khóa học C này dành cho những ai mới bắt đầu, giúp bạn nắm vững các khái niệm cơ bản và nâng cao của ngôn ngữ lập trình C.",
  price: 750000,
  content_json: {
    about: {
      desc: "Khóa học này dành cho những ai mới bắt đầu lập trình và muốn nắm vững ngôn ngữ lập trình C, từ các khái niệm cơ bản đến các kỹ thuật nâng cao.",
      title: "Khóa học C cho người mới bắt đầu",
      points: [
        "Hiểu được các khái niệm cơ bản của ngôn ngữ lập trình C",
        "Phát triển kỹ năng viết mã C chính xác và hiệu quả",
        "Nắm vững các cấu trúc dữ liệu và thuật toán cơ bản",
        "Áp dụng kiến thức vào các dự án thực tế",
      ],
      journey: [
        "Giới thiệu về C",
        "Cú pháp cơ bản",
        "Cấu trúc điều khiển",
        "Hàm",
        "Mảng và Chuỗi",
        "Con trỏ và Tham chiếu",
        "Cấu trúc dữ liệu",
        "Quản lý bộ nhớ",
        "File I/O",
        "Lập trình Hướng đối tượng trong C",
      ],
      audience:
        "Người mới bắt đầu học lập trình, sinh viên ngành CNTT, những người muốn học ngôn ngữ lập trình cơ bản trước khi chuyển sang ngôn ngữ khác.",
      projects: [
        {
          desc: "Xây dựng máy tính bỏ túi đơn giản",
          name: "Dự án: Máy tính bỏ túi",
        },
      ],
    },
    skills: {
      list: [
        "Viết và hiểu mã C một cách dễ dàng",
        "Sẵn sàng tiếp cận các ngôn ngữ lập trình khác dựa trên nền tảng C",
        "Giải quyết các vấn đề lập trình phức tạp",
        "Xây dựng các ứng dụng cơ bản bằng ngôn ngữ C",
      ],
      title: "Kỹ năng đạt được",
    },
    for_who: {
      list: [
        "Người mới học lập trình",
        "Sinh viên ngành Công nghệ Thông tin",
        "Người muốn học ngôn ngữ lập trình cơ bản",
        "Lập trình viên muốn củng cố kiến thức về C",
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
          name: "92 giờ nội dung",
        },
        {
          icon: "list-check",
          name: "30 bài học",
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
      lesson_count: 30,
      video_content: "92 giờ nội dung",
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
  duration: 92,
};

export const roadmapCBeginnerDetail = [
  {
    id: 1,
    name: "Giới thiệu về C",
    description:
      "Khóa học cung cấp tổng quan về ngôn ngữ C và thiết lập môi trường lập trình.",
    lessons: {
      1: [
        { id: 1, name: "C là gì?", duration: 2 },
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
    description: "Học về các biến, kiểu dữ liệu và toán tử trong C.",
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
      "Khám phá các cấu trúc điều khiển trong C, như If, Switch và vòng lặp.",
    lessons: {
      1: [
        { id: 5, name: "Câu lệnh If", duration: 2 },
        { id: 6, name: "Câu lệnh Switch", duration: 2 },
        { id: 7, name: "Vòng lặp", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 6,
  },
  {
    id: 4,
    name: "Hàm",
    description: "Tìm hiểu về cách định nghĩa và sử dụng hàm trong C.",
    lessons: {
      1: [
        { id: 8, name: "Định nghĩa hàm", duration: 2 },
        { id: 9, name: "Tham số hàm", duration: 2 },
        { id: 10, name: "Giá trị trả về", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 6,
  },
  {
    id: 5,
    name: "Mảng và Chuỗi",
    description: "Học về mảng và chuỗi trong ngôn ngữ lập trình C.",
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
    description: "Tìm hiểu về con trỏ và tham chiếu trong C.",
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
    name: "Cấu trúc dữ liệu",
    description: "Học cách làm việc với các cấu trúc dữ liệu trong C.",
    lessons: {
      1: [
        { id: 17, name: "Struct", duration: 2 },
        { id: 18, name: "Union", duration: 2 },
        { id: 19, name: "Enum", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 6,
  },
  {
    id: 8,
    name: "Quản lý bộ nhớ",
    description: "Khám phá các khái niệm liên quan đến quản lý bộ nhớ trong C.",
    lessons: {
      1: [
        { id: 20, name: "Cấp phát bộ nhớ động", duration: 2 },
        { id: 21, name: "Rò rỉ bộ nhớ và cách tránh", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 4,
  },
  {
    id: 9,
    name: "File I/O",
    description: "Học cách làm việc với các file trong ngôn ngữ lập trình C.",
    lessons: {
      1: [
        { id: 22, name: "Đọc từ File", duration: 2 },
        { id: 23, name: "Ghi vào File", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 4,
  },
  {
    id: 10,
    name: "Lập trình Hướng đối tượng trong C",
    description: "Khám phá cách thực hiện lập trình hướng đối tượng trong C.",
    lessons: {
      1: [
        { id: 24, name: "Khái niệm Hướng đối tượng", duration: 2 },
        { id: 25, name: "Thực hiện OOP trong C", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 4,
  },
  {
    id: 11,
    name: "Dự án: Xây dựng máy tính bỏ túi đơn giản",
    description: "Xây dựng dự án thực tế để củng cố kiến thức đã học.",
    lessons: {
      1: [
        { id: 26, name: "Lập kế hoạch dự án", duration: 2 },
        { id: 27, name: "Thiết kế giao diện máy tính", duration: 2 },
        { id: 28, name: "Xây dựng logic tính toán cơ bản", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 6,
  },
  {
    id: 12,
    name: "Gỡ lỗi và quản lý lỗi trong C",
    description: "Tìm hiểu cách gỡ lỗi và quản lý lỗi trong C.",
    lessons: {
      1: [
        { id: 29, name: "Giới thiệu về gỡ lỗi", duration: 2 },
        { id: 30, name: "Các công cụ gỡ lỗi", duration: 2 },
        { id: 31, name: "Xử lý lỗi runtime", duration: 2 },
        { id: 32, name: "Xử lý lỗi biên dịch", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 8,
  },
  {
    id: 13,
    name: "Thư viện chuẩn C",
    description: "Học cách sử dụng thư viện chuẩn trong C.",
    lessons: {
      1: [
        { id: 33, name: "Giới thiệu về thư viện chuẩn", duration: 2 },
        { id: 34, name: "Sử dụng các hàm trong thư viện", duration: 2 },
        {
          id: 35,
          name: "Xây dựng chương trình với thư viện chuẩn",
          duration: 2,
        },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 6,
  },
  {
    id: 14,
    name: "Lập trình socket cơ bản",
    description: "Khám phá lập trình socket cơ bản trong C.",
    lessons: {
      1: [
        { id: 36, name: "Giới thiệu về lập trình socket", duration: 2 },
        { id: 37, name: "Xây dựng server và client", duration: 2 },
        { id: 38, name: "Truyền thông qua socket", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 6,
  },
  {
    id: 15,
    name: "Kỹ thuật lập trình hiệu quả",
    description: "Tìm hiểu các kỹ thuật lập trình hiệu quả trong C.",
    lessons: {
      1: [
        { id: 39, name: "Quản lý bộ nhớ hiệu quả", duration: 2 },
        { id: 40, name: "Tối ưu hóa mã nguồn", duration: 2 },
        { id: 41, name: "Lập trình đa luồng cơ bản", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 6,
  },
  {
    id: 16,
    name: "Phương pháp kiểm thử",
    description: "Khám phá các phương pháp kiểm thử trong lập trình C.",
    lessons: {
      1: [
        { id: 42, name: "Kiểm thử đơn vị", duration: 2 },
        { id: 43, name: "Kiểm thử tích hợp", duration: 2 },
        { id: 44, name: "Kiểm thử hệ thống", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 6,
  },
  {
    id: 17,
    name: "Xử lý tín hiệu và điều khiển",
    description: "Tìm hiểu về xử lý tín hiệu và điều khiển trong C.",
    lessons: {
      1: [
        { id: 45, name: "Giới thiệu về xử lý tín hiệu", duration: 2 },
        { id: 46, name: "Điều khiển thiết bị qua mã C", duration: 2 },
        { id: 47, name: "Ứng dụng thực tế", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 6,
  },
  {
    id: 18,
    name: "Các bài toán kinh điển trong lập trình C",
    description: "Giải quyết các bài toán kinh điển trong lập trình C.",
    lessons: {
      1: [
        { id: 48, name: "Bài toán Tháp Hà Nội", duration: 2 },
        { id: 49, name: "Bài toán Dijkstra", duration: 2 },
        { id: 50, name: "Bài toán Quay lui", duration: 2 },
        { id: 51, name: "Bài toán Sinh tổ hợp", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 8,
  },
  {
    id: 19,
    name: "Các dự án nhỏ với C",
    description: "Thực hành với các dự án nhỏ trong C.",
    lessons: {
      1: [
        { id: 52, name: "Xây dựng trò chơi đơn giản", duration: 2 },
        { id: 53, name: "Ứng dụng quản lý sinh viên", duration: 2 },
        { id: 54, name: "Ứng dụng tính toán khoa học", duration: 2 },
        { id: 55, name: "Ứng dụng điều khiển thiết bị", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 8,
  },
  {
    id: 20,
    name: "Lập trình hệ thống cơ bản",
    description: "Tìm hiểu về lập trình hệ thống trong C.",
    lessons: {
      1: [
        { id: 56, name: "Giới thiệu về lập trình hệ thống", duration: 2 },
        { id: 57, name: "Giao tiếp với phần cứng", duration: 2 },
        { id: 58, name: "Lập trình driver cơ bản", duration: 2 },
        { id: 59, name: "Tối ưu hiệu suất hệ thống", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 8,
  },
  {
    id: 21,
    name: "Dự án cuối khóa: Ứng dụng quản lý sách",
    description:
      "Áp dụng kiến thức đã học để xây dựng một ứng dụng quản lý sách.",
    lessons: {
      1: [
        { id: 60, name: "Lập kế hoạch và thiết kế", duration: 2 },
        { id: 61, name: "Phát triển tính năng cơ bản", duration: 2 },
        { id: 62, name: "Thêm tính năng nâng cao", duration: 2 },
        { id: 63, name: "Kiểm thử và triển khai", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 8,
  },
];
