import { ConstCourseType } from "../type";
import { urlImageCourse } from "../../firebase";
const courseJavaBeginner: ConstCourseType = {
  // Use to filter course
  rating: 4.8,
  originalPrice: 1500000,
  price: 750000,
  duration: 100, // Tổng thời lượng 100 giờ
  language: ["java"],
  slug: "course-java-beginner",
  imgSrc: urlImageCourse['java'],
  category: "foundation",
  // Course detail
  nameCourse: "Khóa học Java cơ bản cho người mới bắt đầu",
  description:
    "Khóa học Java này dành cho những ai mới bắt đầu, giúp bạn nắm vững các khái niệm cơ bản và nâng cao của ngôn ngữ lập trình Java.",
  tags: ["Java", "Lập trình", "Người mới bắt đầu"],
  newest: true,
  popular: true,
  trending: true,
  content: {
    intro:
      "Khóa học này giúp bạn nắm vững các khái niệm cơ bản và nâng cao của ngôn ngữ lập trình Java, từ đó xây dựng nền tảng vững chắc trong lập trình.",
    purposes: [
      "Hiểu rõ các khái niệm cơ bản và nâng cao của Java",
      "Phát triển kỹ năng lập trình hướng đối tượng với Java",
      "Nắm vững các thuật toán và cấu trúc dữ liệu cơ bản",
      "Áp dụng Java vào các dự án thực tế và xây dựng ứng dụng",
    ],
    results: [
      "Có khả năng viết và hiểu mã Java một cách dễ dàng",
      "Xây dựng được các ứng dụng Java cơ bản",
      "Giải quyết các vấn đề lập trình phức tạp với Java",
      "Áp dụng thành thạo Java trong các dự án thực tế",
    ],
    orientedUsers: [
      "Người mới bắt đầu học lập trình",
      "Sinh viên ngành Công nghệ Thông tin",
      "Lập trình viên muốn học thêm ngôn ngữ Java",
      "Người muốn nâng cao kỹ năng lập trình Java của mình",
    ],
    whyChoose: [
      "Khóa học được thiết kế bài bản và chi tiết",
      "Giảng viên giàu kinh nghiệm và nhiệt tình",
      "Nội dung cập nhật và phù hợp với xu hướng hiện nay",
      "Hỗ trợ và tư vấn nhiệt tình từ cộng đồng học viên",
    ],
  },

  lessons: [
    {
      nameLesson: "Giới thiệu về Java",
      duration: 6, // 3 buổi
      detailLessons: [
        { nameDetailLesson: "Java là gì?", duration: 2 },
        { nameDetailLesson: "Lịch sử và các phiên bản của Java", duration: 2 },
        { nameDetailLesson: "Thiết lập môi trường phát triển", duration: 2 },
      ],
    },
    {
      nameLesson: "Cú pháp cơ bản",
      duration: 8, // 4 buổi
      detailLessons: [
        { nameDetailLesson: "Biến và kiểu dữ liệu", duration: 2 },
        { nameDetailLesson: "Toán tử", duration: 2 },
        { nameDetailLesson: "Câu lệnh điều kiện: If, Switch", duration: 2 },
        { nameDetailLesson: "Vòng lặp: For, While, Do-While", duration: 2 },
      ],
    },
    {
      nameLesson: "Lập trình hướng đối tượng",
      duration: 12, // 6 buổi
      detailLessons: [
        { nameDetailLesson: "Khái niệm cơ bản về OOP", duration: 2 },
        { nameDetailLesson: "Lớp và đối tượng", duration: 2 },
        { nameDetailLesson: "Phương thức và thuộc tính", duration: 2 },
        { nameDetailLesson: "Constructor và Destructor", duration: 2 },
        { nameDetailLesson: "Tính kế thừa", duration: 2 },
        { nameDetailLesson: "Tính đa hình", duration: 2 },
      ],
    },
    {
      nameLesson: "Mảng và Chuỗi",
      duration: 8, // 4 buổi
      detailLessons: [
        { nameDetailLesson: "Giới thiệu về Mảng", duration: 2 },
        { nameDetailLesson: "Các thao tác cơ bản trên Mảng", duration: 2 },
        {
          nameDetailLesson: "Chuỗi trong Java: Khái niệm và các phương thức",
          duration: 2,
        },
        { nameDetailLesson: "Mảng đa chiều", duration: 2 },
      ],
    },
    {
      nameLesson: "Xử lý ngoại lệ",
      duration: 8, // 4 buổi
      detailLessons: [
        { nameDetailLesson: "Giới thiệu về ngoại lệ", duration: 2 },
        {
          nameDetailLesson: "Cách xử lý ngoại lệ: try, catch, finally",
          duration: 2,
        },
        { nameDetailLesson: "Tạo và ném ngoại lệ tùy chỉnh", duration: 2 },
        {
          nameDetailLesson: "Ứng dụng xử lý ngoại lệ trong thực tế",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Làm việc với tập tin và I/O",
      duration: 8, // 4 buổi
      detailLessons: [
        { nameDetailLesson: "Giới thiệu về I/O trong Java", duration: 2 },
        { nameDetailLesson: "Đọc và ghi tập tin văn bản", duration: 2 },
        { nameDetailLesson: "Đọc và ghi tập tin nhị phân", duration: 2 },
        { nameDetailLesson: "Xử lý luồng đầu vào/đầu ra", duration: 2 },
      ],
    },
    {
      nameLesson: "Thuật toán và Cấu trúc dữ liệu cơ bản",
      duration: 10, // 5 buổi
      detailLessons: [
        { nameDetailLesson: "Giới thiệu về cấu trúc dữ liệu", duration: 2 },
        { nameDetailLesson: "Danh sách, Ngăn xếp và Hàng đợi", duration: 2 },
        { nameDetailLesson: "Các thuật toán tìm kiếm cơ bản", duration: 2 },
        { nameDetailLesson: "Các thuật toán sắp xếp cơ bản", duration: 2 },
        {
          nameDetailLesson:
            "Ứng dụng cấu trúc dữ liệu và thuật toán trong Java",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Thư viện chuẩn Java",
      duration: 8, // 4 buổi
      detailLessons: [
        { nameDetailLesson: "Giới thiệu về thư viện chuẩn", duration: 2 },
        {
          nameDetailLesson: "Các lớp phổ biến trong thư viện chuẩn",
          duration: 2,
        },
        { nameDetailLesson: "Làm việc với API Java Collections", duration: 2 },
        {
          nameDetailLesson: "Sử dụng các tiện ích từ thư viện chuẩn",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Lập trình GUI cơ bản với JavaFX",
      duration: 10, // 5 buổi
      detailLessons: [
        { nameDetailLesson: "Giới thiệu về JavaFX", duration: 2 },
        {
          nameDetailLesson: "Cấu trúc cơ bản của một ứng dụng JavaFX",
          duration: 2,
        },
        { nameDetailLesson: "Tạo giao diện người dùng cơ bản", duration: 2 },
        { nameDetailLesson: "Xử lý sự kiện trong JavaFX", duration: 2 },
        { nameDetailLesson: "Xây dựng ứng dụng GUI cơ bản", duration: 2 },
      ],
    },
    {
      nameLesson: "Lập trình mạng cơ bản",
      duration: 8, // 4 buổi
      detailLessons: [
        { nameDetailLesson: "Giới thiệu về lập trình mạng", duration: 2 },
        { nameDetailLesson: "Làm việc với Socket trong Java", duration: 2 },
        { nameDetailLesson: "Gửi và nhận dữ liệu qua mạng", duration: 2 },
        {
          nameDetailLesson: "Ứng dụng lập trình mạng trong thực tế",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Lập trình hướng đối tượng nâng cao",
      duration: 8, // 4 buổi
      detailLessons: [
        { nameDetailLesson: "Abstract Class", duration: 4 },
        { nameDetailLesson: "Interface", duration: 4 },
      ],
    },
    {
      nameLesson: "Generics và Collections",
      duration: 8, // 4 buổi
      detailLessons: [
        { nameDetailLesson: "Giới thiệu về Generics", duration: 4 },
        { nameDetailLesson: "Collections trong Java", duration: 4 },
      ],
    },
    {
      nameLesson: "Lambda Expressions",
      duration: 8, // 4 buổi
      detailLessons: [
        { nameDetailLesson: "Giới thiệu về Lambda Expressions", duration: 4 },
        {
          nameDetailLesson: "Sử dụng Lambda Expressions trong Java",
          duration: 4,
        },
      ],
    },
    {
      nameLesson: "Stream API",
      duration: 8, // 4 buổi
      detailLessons: [
        { nameDetailLesson: "Giới thiệu về Stream API", duration: 4 },
        { nameDetailLesson: "Các thao tác cơ bản với Stream API", duration: 4 },
      ],
    },
    {
      nameLesson: "Threading và Concurrent Programming",
      duration: 8, // 4 buổi
      detailLessons: [
        { nameDetailLesson: "Giới thiệu về Threading", duration: 4 },
        { nameDetailLesson: "Concurrent Programming trong Java", duration: 4 },
      ],
    },
    {
      nameLesson: "Lập trình với JDBC",
      duration: 8, // 4 buổi
      detailLessons: [
        { nameDetailLesson: "Giới thiệu về JDBC", duration: 4 },
        { nameDetailLesson: "Kết nối cơ sở dữ liệu với JDBC", duration: 4 },
      ],
    },
    {
      nameLesson: "Thiết kế giao diện người dùng với Swing",
      duration: 8, // 4 buổi
      detailLessons: [
        { nameDetailLesson: "Giới thiệu về Swing", duration: 4 },
        { nameDetailLesson: "Tạo giao diện người dùng với Swing", duration: 4 },
      ],
    },
    {
      nameLesson: "Lập trình Web với JSP và Servlets",
      duration: 8, // 4 buổi
      detailLessons: [
        { nameDetailLesson: "Giới thiệu về JSP và Servlets", duration: 4 },
        {
          nameDetailLesson: "Xây dựng ứng dụng Web với JSP và Servlets",
          duration: 4,
        },
      ],
    },
    {
      nameLesson: "Sử dụng API trong Java",
      duration: 8, // 4 buổi
      detailLessons: [
        { nameDetailLesson: "Giới thiệu về API", duration: 4 },
        { nameDetailLesson: "Tạo và sử dụng API trong Java", duration: 4 },
      ],
    },
    {
      nameLesson: "Quản lý bộ nhớ và Hiệu suất",
      duration: 8, // 4 buổi
      detailLessons: [
        { nameDetailLesson: "Quản lý bộ nhớ trong Java", duration: 4 },
        { nameDetailLesson: "Tối ưu hóa hiệu suất ứng dụng", duration: 4 },
      ],
    },
    {
      nameLesson: "Dự án cuối khóa: Xây dựng ứng dụng quản lý sinh viên",
      duration: 12, // 6 buổi
      detailLessons: [
        { nameDetailLesson: "Phân tích và thiết kế dự án", duration: 2 },
        { nameDetailLesson: "Thiết kế cơ sở dữ liệu", duration: 2 },
        { nameDetailLesson: "Xây dựng các lớp và phương thức", duration: 2 },
        { nameDetailLesson: "Xây dựng giao diện người dùng", duration: 2 },
        {
          nameDetailLesson: "Kết nối cơ sở dữ liệu và xử lý dữ liệu",
          duration: 2,
        },
        { nameDetailLesson: "Kiểm thử và hoàn thiện dự án", duration: 2 },
      ],
    },
  ],
};

export default courseJavaBeginner;
