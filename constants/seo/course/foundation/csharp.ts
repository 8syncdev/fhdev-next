import { urlImageCourse } from "../../firebase";
import { ConstCourseType } from "../type";

const courseCSharpBeginner: ConstCourseType = {
  // Use to filter course
  rating: 4.9,
  originalPrice: 5500000,
  price: 3300000,
  duration: 100, // Tổng thời lượng 100 giờ
  language: ["c#"],
  slug: "course-csharp-beginner",
  imgSrc: urlImageCourse['csharp'],
  category: "foundation",
  // Course detail
  nameCourse: "Khóa học C# cho người mới bắt đầu",
  description:
    "Khóa học C# này dành cho những ai mới bắt đầu, giúp bạn nắm vững các khái niệm cơ bản và nâng cao của ngôn ngữ lập trình C#.",
  tags: ["C#", "Lập trình", "Người mới bắt đầu"],
  newest: true,
  popular: true,
  trending: true,
  content: {
    intro:
      "Khóa học này dành cho những ai mới bắt đầu lập trình và muốn nắm vững ngôn ngữ lập trình C#, từ các khái niệm cơ bản đến các kỹ thuật nâng cao.",
    purposes: [
      "Hiểu được các khái niệm cơ bản của ngôn ngữ lập trình C#",
      "Phát triển kỹ năng viết mã C# chính xác và hiệu quả",
      "Nắm vững các cấu trúc dữ liệu và thuật toán cơ bản",
      "Áp dụng kiến thức vào các dự án thực tế",
    ],
    results: [
      "Có khả năng viết và hiểu mã C# một cách dễ dàng",
      "Sẵn sàng tiếp cận các ngôn ngữ lập trình khác dựa trên nền tảng C#",
      "Giải quyết các vấn đề lập trình phức tạp hơn",
      "Xây dựng các ứng dụng cơ bản bằng ngôn ngữ C#",
    ],
    orientedUsers: [
      "Người mới bắt đầu học lập trình",
      "Sinh viên ngành Công nghệ Thông tin",
      "Những người muốn học ngôn ngữ lập trình cơ bản trước khi chuyển sang các ngôn ngữ khác",
      "Lập trình viên muốn củng cố kiến thức cơ bản về ngôn ngữ C#",
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
      nameLesson: "Giới thiệu về C#",
      duration: 6, // 3 buổi
      detailLessons: [
        { nameDetailLesson: "C# là gì?", duration: 2 },
        { nameDetailLesson: "Thiết lập môi trường", duration: 2 },
        { nameDetailLesson: "Cú pháp cơ bản", duration: 2 },
      ],
    },
    {
      nameLesson: "Biến và Kiểu dữ liệu",
      duration: 6, // 3 buổi
      detailLessons: [
        { nameDetailLesson: "Biến", duration: 2 },
        { nameDetailLesson: "Kiểu dữ liệu cơ bản", duration: 2 },
        { nameDetailLesson: "Kiểu dữ liệu phức hợp", duration: 2 },
      ],
    },
    {
      nameLesson: "Toán tử và Biểu thức",
      duration: 6, // 3 buổi
      detailLessons: [
        { nameDetailLesson: "Toán tử số học", duration: 2 },
        { nameDetailLesson: "Toán tử logic", duration: 2 },
        { nameDetailLesson: "Biểu thức điều kiện", duration: 2 },
      ],
    },
    {
      nameLesson: "Cấu trúc điều khiển",
      duration: 8, // 4 buổi
      detailLessons: [
        { nameDetailLesson: "Câu lệnh If", duration: 2 },
        { nameDetailLesson: "Câu lệnh Switch", duration: 2 },
        { nameDetailLesson: "Vòng lặp", duration: 2 },
        { nameDetailLesson: "Vòng lặp nâng cao", duration: 2 },
      ],
    },
    {
      nameLesson: "Hàm và Phương thức",
      duration: 8, // 4 buổi
      detailLessons: [
        { nameDetailLesson: "Định nghĩa hàm", duration: 2 },
        { nameDetailLesson: "Tham số và Đối số", duration: 2 },
        { nameDetailLesson: "Giá trị trả về", duration: 2 },
        { nameDetailLesson: "Phương thức tĩnh và động", duration: 2 },
      ],
    },
    {
      nameLesson: "Mảng và Chuỗi",
      duration: 6, // 3 buổi
      detailLessons: [
        { nameDetailLesson: "Mảng", duration: 2 },
        { nameDetailLesson: "Chuỗi", duration: 2 },
        { nameDetailLesson: "Xử lý chuỗi nâng cao", duration: 2 },
      ],
    },
    {
      nameLesson: "Lập trình Hướng đối tượng (OOP)",
      duration: 10, // 5 buổi
      detailLessons: [
        { nameDetailLesson: "Lớp và Đối tượng", duration: 2 },
        { nameDetailLesson: "Encapsulation", duration: 2 },
        { nameDetailLesson: "Inheritance", duration: 2 },
        { nameDetailLesson: "Polymorphism", duration: 2 },
        { nameDetailLesson: "Các mô hình thiết kế", duration: 2 },
      ],
    },
    {
      nameLesson: "Xử lý Ngoại lệ",
      duration: 6, // 3 buổi
      detailLessons: [
        { nameDetailLesson: "Try-Catch-Finally", duration: 2 },
        { nameDetailLesson: "Tạo và Ném Ngoại lệ", duration: 2 },
        { nameDetailLesson: "Quản lý ngoại lệ", duration: 2 },
      ],
    },
    {
      nameLesson: "Làm việc với File",
      duration: 6, // 3 buổi
      detailLessons: [
        { nameDetailLesson: "Đọc từ File", duration: 2 },
        { nameDetailLesson: "Ghi vào File", duration: 2 },
        { nameDetailLesson: "Xử lý File nâng cao", duration: 2 },
      ],
    },
    {
      nameLesson: "Sử dụng LINQ",
      duration: 6, // 3 buổi
      detailLessons: [
        { nameDetailLesson: "Giới thiệu LINQ", duration: 2 },
        { nameDetailLesson: "Các câu truy vấn cơ bản", duration: 2 },
        { nameDetailLesson: "LINQ nâng cao", duration: 2 },
      ],
    },

    // Các bài học mở rộng
    {
      nameLesson: "Lập trình hướng đối tượng nâng cao",
      duration: 6, // 3 buổi
      detailLessons: [
        { nameDetailLesson: "Abstract Class", duration: 2 },
        { nameDetailLesson: "Interface", duration: 2 },
        { nameDetailLesson: "Design Patterns nâng cao", duration: 2 },
      ],
    },
    {
      nameLesson: "Generics và Collections",
      duration: 6, // 3 buổi
      detailLessons: [
        { nameDetailLesson: "Giới thiệu về Generics", duration: 2 },
        { nameDetailLesson: "Collections trong C#", duration: 2 },
        { nameDetailLesson: "Generics nâng cao", duration: 2 },
      ],
    },
    {
      nameLesson: "Delegates và Events",
      duration: 6, // 3 buổi
      detailLessons: [
        { nameDetailLesson: "Giới thiệu về Delegates", duration: 2 },
        { nameDetailLesson: "Sử dụng Events", duration: 2 },
        { nameDetailLesson: "Delegates nâng cao", duration: 2 },
      ],
    },
    {
      nameLesson: "Threading và Asynchronous Programming",
      duration: 6, // 3 buổi
      detailLessons: [
        { nameDetailLesson: "Giới thiệu về Threading", duration: 2 },
        {
          nameDetailLesson: "Asynchronous Programming với async/await",
          duration: 2,
        },
        { nameDetailLesson: "Quản lý Threading", duration: 2 },
      ],
    },
    {
      nameLesson: "Lập trình với Entity Framework",
      duration: 6, // 3 buổi
      detailLessons: [
        { nameDetailLesson: "Giới thiệu về Entity Framework", duration: 2 },
        { nameDetailLesson: "Thực hành với Entity Framework", duration: 2 },
        { nameDetailLesson: "Entity Framework nâng cao", duration: 2 },
      ],
    },
    {
      nameLesson: "Thiết kế giao diện người dùng với WinForms",
      duration: 6, // 3 buổi
      detailLessons: [
        { nameDetailLesson: "Giới thiệu về WinForms", duration: 2 },
        { nameDetailLesson: "Thiết kế giao diện với WinForms", duration: 2 },
        { nameDetailLesson: "Tối ưu hóa giao diện", duration: 2 },
      ],
    },
    {
      nameLesson: "Lập trình Web với ASP.NET",
      duration: 6, // 3 buổi
      detailLessons: [
        { nameDetailLesson: "Giới thiệu về ASP.NET", duration: 2 },
        { nameDetailLesson: "Xây dựng ứng dụng Web với ASP.NET", duration: 2 },
        { nameDetailLesson: "ASP.NET nâng cao", duration: 2 },
      ],
    },
    {
      nameLesson: "Sử dụng API trong C#",
      duration: 6, // 3 buổi
      detailLessons: [
        { nameDetailLesson: "Giới thiệu về API", duration: 2 },
        { nameDetailLesson: "Tạo và sử dụng API trong C#", duration: 2 },
        { nameDetailLesson: "API nâng cao", duration: 2 },
      ],
    },
    {
      nameLesson: "Quản lý bộ nhớ và Hiệu suất",
      duration: 6, // 3 buổi
      detailLessons: [
        { nameDetailLesson: "Quản lý bộ nhớ trong C#", duration: 2 },
        { nameDetailLesson: "Tối ưu hóa hiệu suất ứng dụng", duration: 2 },
        { nameDetailLesson: "Hiệu suất nâng cao", duration: 2 },
      ],
    },
    {
      nameLesson: "Bảo mật trong C#",
      duration: 6, // 3 buổi
      detailLessons: [
        { nameDetailLesson: "Các nguyên tắc bảo mật cơ bản", duration: 2 },
        { nameDetailLesson: "Thực hành bảo mật trong ứng dụng", duration: 2 },
        { nameDetailLesson: "Bảo mật nâng cao", duration: 2 },
      ],
    },
    {
      nameLesson: "Dự án: Xây dựng ứng dụng quản lý danh bạ",
      duration: 8, // 4 buổi
      detailLessons: [
        { nameDetailLesson: "Lập kế hoạch dự án", duration: 2 },
        { nameDetailLesson: "Thiết kế giao diện người dùng", duration: 2 },
        { nameDetailLesson: "Xây dựng logic ứng dụng", duration: 2 },
        { nameDetailLesson: "Thêm chức năng và Tối ưu hóa", duration: 2 },
      ],
    },
  ],
};

export default courseCSharpBeginner;
