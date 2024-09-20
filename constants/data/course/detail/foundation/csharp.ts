import { CourseDetailProps } from "@/server/course.type";

export const csharpDetail: CourseDetailProps["content"] = {
  name: "Khóa học C# cho người mới bắt đầu",
  img_url:
    "https://firebasestorage.googleapis.com/v0/b/nextjs-djninex-store.appspot.com/o/image-upload%2Fcsharp.webp?alt=media&token=4ee87f1f-4bca-4daa-b300-35cd58f0c247",
  description:
    "Khóa học C# này dành cho những ai mới bắt đầu, giúp bạn nắm vững các khái niệm cơ bản và nâng cao của ngôn ngữ lập trình C#.",
  price: 1000000,
  content_json: {
    about: {
      desc: "Khóa học này dành cho những ai mới bắt đầu lập trình và muốn nắm vững ngôn ngữ lập trình C#, từ các khái niệm cơ bản đến các kỹ thuật nâng cao.",
      title: "Khóa học C# cho người mới bắt đầu",
      points: [
        "Hiểu được các khái niệm cơ bản của ngôn ngữ lập trình C#",
        "Phát triển kỹ năng viết mã C# chính xác và hiệu quả",
        "Nắm vững các cấu trúc dữ liệu và thuật toán cơ bản",
        "Áp dụng kiến thức vào các dự án thực tế",
      ],
      journey: [
        "Giới thiệu về C#",
        "Biến và Kiểu dữ liệu",
        "Toán tử và Biểu thức",
        "Cấu trúc điều khiển",
        "Hàm và Phương thức",
        "Mảng và Chuỗi",
        "Lập trình Hướng đối tượng (OOP)",
        "Xử lý Ngoại lệ",
        "Làm việc với File",
        "Sử dụng LINQ",
        "Generics và Collections",
        "Delegates và Events",
        "Threading và Asynchronous Programming",
        "Lập trình với Entity Framework",
        "Lập trình Web với ASP.NET",
      ],
      audience:
        "Người mới học lập trình, sinh viên ngành CNTT, lập trình viên muốn củng cố kiến thức C#",
      projects: [
        {
          desc: "Xây dựng ứng dụng quản lý danh bạ",
          name: "Dự án cuối khóa",
        },
      ],
    },
    skills: {
      list: [
        "Lập trình C# từ cơ bản đến nâng cao",
        "Xử lý ngoại lệ và debug",
        "Lập trình hướng đối tượng",
        "Tối ưu hóa hiệu suất và quản lý bộ nhớ",
        "Lập trình web với ASP.NET",
        "Sử dụng LINQ",
        "Quản lý dự án và ứng dụng thực tế",
      ],
      title: "Kỹ năng đạt được",
    },
    for_who: {
      list: [
        "Người mới học lập trình",
        "Sinh viên ngành CNTT",
        "Lập trình viên muốn củng cố kiến thức cơ bản về C#",
        "Người muốn học ngôn ngữ lập trình cơ bản trước khi chuyển sang các ngôn ngữ khác",
      ],
      title: "Đối tượng phù hợp",
    },
    overview: {
      level: "Từ cơ bản đến chuyên nghiệp",
      features: [
        {
          icon: "bar-chart-line",
          name: "Từ cơ bản đến nâng cao",
        },
        {
          icon: "play-circle-fill",
          name: "100 giờ video HD",
        },
        {
          icon: "list-check",
          name: "40 bài học",
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
      lesson_count: 40,
      video_content: "100 giờ video HD",
    },
    highlights: {
      title: "Điểm nổi bật",
      points: [
        "Dành cho người mới bắt đầu",
        "Bài giảng chi tiết và ví dụ thực tế",
        "Hỗ trợ từ cộng đồng học viên và giảng viên",
      ],
    },
    beginner_friendly: {
      desc: "Khóa học dễ tiếp cận với người mới bắt đầu",
      title: "Thân thiện với người mới",
      details: [
        "Không cần kiến thức lập trình trước",
        "Lộ trình chi tiết từ cơ bản đến nâng cao",
        "Nhiều bài tập thực hành",
      ],
      key_points: [
        "Phù hợp người mới",
        "Tiếp cận dễ hiểu",
        "Chú trọng thực hành",
      ],
    },
  },
  duration: 100,
};

export const roadmapCsharpDetail = [
  {
    id: 1,
    name: "Giới thiệu về C#",
    description: "Tổng quan về ngôn ngữ lập trình C# và thiết lập môi trường",
    lessons: {
      1: [
        { id: 1, name: "C# là gì?", duration: 2 },
        { id: 2, name: "Thiết lập môi trường", duration: 2 },
        { id: 3, name: "Cú pháp cơ bản", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 6,
  },
  {
    id: 2,
    name: "Biến và Kiểu dữ liệu",
    description: "Học về các loại biến và kiểu dữ liệu trong C#",
    lessons: {
      1: [
        { id: 4, name: "Biến", duration: 2 },
        { id: 5, name: "Kiểu dữ liệu cơ bản", duration: 2 },
        { id: 6, name: "Kiểu dữ liệu phức hợp", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 6,
  },
  {
    id: 3,
    name: "Toán tử và Biểu thức",
    description: "Tìm hiểu về toán tử và các loại biểu thức trong C#",
    lessons: {
      1: [
        { id: 7, name: "Toán tử số học", duration: 2 },
        { id: 8, name: "Toán tử logic", duration: 2 },
        { id: 9, name: "Biểu thức điều kiện", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 6,
  },
  {
    id: 4,
    name: "Cấu trúc điều khiển",
    description: "Học cách sử dụng cấu trúc điều khiển trong C#",
    lessons: {
      1: [
        { id: 10, name: "Câu lệnh If", duration: 2 },
        { id: 11, name: "Câu lệnh Switch", duration: 2 },
        { id: 12, name: "Vòng lặp", duration: 2 },
        { id: 13, name: "Vòng lặp nâng cao", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 8,
  },
  {
    id: 5,
    name: "Hàm và Phương thức",
    description: "Tìm hiểu về hàm và phương thức trong C#",
    lessons: {
      1: [
        { id: 14, name: "Định nghĩa hàm", duration: 2 },
        { id: 15, name: "Tham số và Đối số", duration: 2 },
        { id: 16, name: "Giá trị trả về", duration: 2 },
        { id: 17, name: "Phương thức tĩnh và động", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 8,
  },
  {
    id: 6,
    name: "Mảng và Chuỗi",
    description: "Học cách sử dụng mảng và chuỗi trong C#",
    lessons: {
      1: [
        { id: 18, name: "Mảng", duration: 2 },
        { id: 19, name: "Chuỗi", duration: 2 },
        { id: 20, name: "Xử lý chuỗi nâng cao", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 6,
  },
  {
    id: 7,
    name: "Lập trình Hướng đối tượng (OOP)",
    description: "Học về lập trình hướng đối tượng trong C#",
    lessons: {
      1: [
        { id: 21, name: "Lớp và Đối tượng", duration: 2 },
        { id: 22, name: "Encapsulation", duration: 2 },
        { id: 23, name: "Inheritance", duration: 2 },
        { id: 24, name: "Polymorphism", duration: 2 },
        { id: 25, name: "Các mô hình thiết kế", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 10,
  },
  {
    id: 8,
    name: "Xử lý Ngoại lệ",
    description: "Học cách xử lý ngoại lệ trong C#",
    lessons: {
      1: [
        { id: 26, name: "Try-Catch-Finally", duration: 2 },
        { id: 27, name: "Tạo và Ném Ngoại lệ", duration: 2 },
        { id: 28, name: "Quản lý ngoại lệ", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 6,
  },
  {
    id: 9,
    name: "Làm việc với File",
    description: "Học cách đọc và ghi file trong C#",
    lessons: {
      1: [
        { id: 29, name: "Đọc từ File", duration: 2 },
        { id: 30, name: "Ghi vào File", duration: 2 },
        { id: 31, name: "Xử lý File nâng cao", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 6,
  },
  {
    id: 10,
    name: "Sử dụng LINQ",
    description: "Tìm hiểu và thực hành với LINQ",
    lessons: {
      1: [
        { id: 32, name: "Giới thiệu LINQ", duration: 2 },
        { id: 33, name: "Các câu truy vấn cơ bản", duration: 2 },
        { id: 34, name: "LINQ nâng cao", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 6,
  },
  {
    id: 11,
    name: "Lập trình hướng đối tượng nâng cao",
    description:
      "Học lập trình hướng đối tượng nâng cao với Abstract Class, Interface, Design Patterns",
    lessons: {
      1: [
        { id: 35, name: "Abstract Class", duration: 2 },
        { id: 36, name: "Interface", duration: 2 },
        { id: 37, name: "Design Patterns nâng cao", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 6,
  },
  {
    id: 12,
    name: "Generics và Collections",
    description: "Học cách sử dụng Generics và Collections trong C#",
    lessons: {
      1: [
        { id: 38, name: "Giới thiệu về Generics", duration: 2 },
        { id: 39, name: "Collections trong C#", duration: 2 },
        { id: 40, name: "Generics nâng cao", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 6,
  },
  {
    id: 13,
    name: "Delegates và Events",
    description: "Tìm hiểu về Delegates và cách xử lý Events",
    lessons: {
      1: [
        { id: 41, name: "Giới thiệu về Delegates", duration: 2 },
        { id: 42, name: "Sử dụng Events", duration: 2 },
        { id: 43, name: "Delegates nâng cao", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 6,
  },
  {
    id: 14,
    name: "Threading và Asynchronous Programming",
    description: "Học cách lập trình bất đồng bộ và quản lý Thread trong C#",
    lessons: {
      1: [
        { id: 44, name: "Giới thiệu về Threading", duration: 2 },
        {
          id: 45,
          name: "Asynchronous Programming với async/await",
          duration: 2,
        },
        { id: 46, name: "Quản lý Threading", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 6,
  },
  {
    id: 15,
    name: "Lập trình với Entity Framework",
    description: "Học cách sử dụng Entity Framework trong C#",
    lessons: {
      1: [
        { id: 47, name: "Giới thiệu về Entity Framework", duration: 2 },
        { id: 48, name: "Thực hành với Entity Framework", duration: 2 },
        { id: 49, name: "Entity Framework nâng cao", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 6,
  },
  {
    id: 16,
    name: "Thiết kế giao diện người dùng với WinForms",
    description: "Học cách thiết kế giao diện người dùng bằng WinForms",
    lessons: {
      1: [
        { id: 50, name: "Giới thiệu về WinForms", duration: 2 },
        { id: 51, name: "Thiết kế giao diện với WinForms", duration: 2 },
        { id: 52, name: "Tối ưu hóa giao diện", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 6,
  },
  {
    id: 17,
    name: "Lập trình Web với ASP.NET",
    description: "Học cách xây dựng ứng dụng web với ASP.NET",
    lessons: {
      1: [
        { id: 53, name: "Giới thiệu về ASP.NET", duration: 2 },
        { id: 54, name: "Xây dựng ứng dụng Web với ASP.NET", duration: 2 },
        { id: 55, name: "ASP.NET nâng cao", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 6,
  },
  {
    id: 18,
    name: "Sử dụng API trong C#",
    description: "Học cách tạo và sử dụng API trong C#",
    lessons: {
      1: [
        { id: 56, name: "Giới thiệu về API", duration: 2 },
        { id: 57, name: "Tạo và sử dụng API trong C#", duration: 2 },
        { id: 58, name: "API nâng cao", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 6,
  },
  {
    id: 19,
    name: "Quản lý bộ nhớ và Hiệu suất",
    description: "Học cách quản lý bộ nhớ và tối ưu hóa hiệu suất trong C#",
    lessons: {
      1: [
        { id: 59, name: "Quản lý bộ nhớ trong C#", duration: 2 },
        { id: 60, name: "Tối ưu hóa hiệu suất ứng dụng", duration: 2 },
        { id: 61, name: "Hiệu suất nâng cao", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 6,
  },
  {
    id: 20,
    name: "Bảo mật trong C#",
    description: "Học cách bảo mật ứng dụng C#",
    lessons: {
      1: [
        { id: 62, name: "Các nguyên tắc bảo mật cơ bản", duration: 2 },
        { id: 63, name: "Thực hành bảo mật trong ứng dụng", duration: 2 },
        { id: 64, name: "Bảo mật nâng cao", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 6,
  },
  {
    id: 21,
    name: "Dự án: Xây dựng ứng dụng quản lý danh bạ",
    description: "Thực hiện dự án cuối khóa xây dựng ứng dụng quản lý danh bạ",
    lessons: {
      1: [
        { id: 65, name: "Lập kế hoạch dự án", duration: 2 },
        { id: 66, name: "Thiết kế giao diện người dùng", duration: 2 },
        { id: 67, name: "Xây dựng logic ứng dụng", duration: 2 },
        { id: 68, name: "Thêm chức năng và Tối ưu hóa", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 8,
  },
];
