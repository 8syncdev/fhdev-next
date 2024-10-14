import { urlImageCourse } from "../../firebase";
import { ConstCourseType } from "../type";

const coursePythonFoundation: ConstCourseType = {
  // Use to filter course
  rating: 4.7,
  originalPrice: 5500000,
  price: 3300000,
  duration: 108, // Updated to 36-45 sessions * 3 hours/session = 108-135 hours
  language: ["python"],
  slug: "course-python-foundation",
  imgSrc: urlImageCourse['python'],
  category: "foundation",
  // Course detail
  nameCourse: "Khóa học Python Cơ bản đến Nâng cao",
  description:
    "Khóa học lập trình Python từ cơ bản đến nâng cao, cung cấp các kiến thức về chuỗi, hàm, các module, file, cơ sở dữ liệu, OOP cơ bản và nâng cao, thực hiện các project, tìm hiểu các framework (Django).",
  tags: ["Python", "Programming", "Software Development"],
  newest: true,
  popular: true,
  trending: true,
  content: {
    intro:
      "Khóa học toàn diện về ngôn ngữ lập trình Python, từ cơ bản đến nâng cao, giúp bạn xây dựng nền tảng vững chắc trong Python.",
    purposes: [
      "Hiểu rõ các khái niệm cơ bản và nâng cao của Python",
      "Phát triển kỹ năng lập trình hướng đối tượng với Python",
      "Nắm vững các cấu trúc dữ liệu và thuật toán cơ bản",
      "Áp dụng Python vào các dự án thực tế và xây dựng ứng dụng",
    ],
    results: [
      "Có khả năng viết và hiểu mã Python một cách dễ dàng",
      "Xây dựng được các ứng dụng Python cơ bản và nâng cao",
      "Giải quyết các vấn đề lập trình phức tạp với Python",
      "Áp dụng thành thạo Python trong các dự án thực tế",
    ],
    orientedUsers: [
      "Người mới bắt đầu học lập trình",
      "Sinh viên ngành Công nghệ Thông tin",
      "Lập trình viên muốn học thêm ngôn ngữ Python",
      "Người muốn nâng cao kỹ năng lập trình Python của mình",
    ],
    whyChoose: [
      "Số lượng buổi học: 36-45 buổi (2-3 tiếng/ buổi)",
      "Hoàn thành 8-12 project",
      "100% giảng viên, trợ giảng đạt giải lập trình cấp tỉnh, quốc gia",
      "Hỗ trợ giải đáp thắc mắc của học viên 24/7",
      "Hệ thống website chấm bài tự động, xếp hạng, đo lường từng bài tập",
      "Số lượng bài tập lên tới 300-500 bài",
      "Tài liệu biên soạn chuyên sâu xem trước",
      "Kiểm tra, sửa chữa từng dòng code cho học viên",
    ],
  },

  lessons: [
    {
      nameLesson: "Giới thiệu về Python",
      duration: 8, // 4 buổi
      detailLessons: [
        { nameDetailLesson: "Lịch sử, các phiên bản và cài đặt", duration: 2 },
        { nameDetailLesson: "Giới thiệu về Python và ứng dụng", duration: 2 },
        { nameDetailLesson: "Cú pháp cơ bản và kiểu dữ liệu", duration: 2 },
        { nameDetailLesson: "Biến và toán tử trong Python", duration: 2 },
      ],
    },
    {
      nameLesson: "Cấu trúc điều khiển và Hàm",
      duration: 12, // 6 buổi
      detailLessons: [
        {
          nameDetailLesson: "Cấu trúc điều khiển: If, Else, Elif",
          duration: 2,
        },
        { nameDetailLesson: "Vòng lặp: For, While", duration: 2 },
        { nameDetailLesson: "Hàm trong Python", duration: 2 },
        { nameDetailLesson: "Phạm vi biến và thời gian sống", duration: 2 },
        { nameDetailLesson: "Tham số và đối số trong hàm", duration: 2 },
        { nameDetailLesson: "Hàm đệ quy và Lambda", duration: 2 },
      ],
    },
    {
      nameLesson: "Cấu trúc dữ liệu và Thuật toán",
      duration: 16, // 8 buổi
      detailLessons: [
        { nameDetailLesson: "List và các thao tác trên List", duration: 2 },
        { nameDetailLesson: "Tuple và các thao tác trên Tuple", duration: 2 },
        {
          nameDetailLesson: "Dictionary và các thao tác trên Dictionary",
          duration: 2,
        },
        { nameDetailLesson: "Set và các thao tác trên Set", duration: 2 },
        {
          nameDetailLesson: "Thuật toán tìm kiếm: Tuyến tính và nhị phân",
          duration: 2,
        },
        {
          nameDetailLesson: "Thuật toán sắp xếp: Nổi bọt, Chèn, Chọn",
          duration: 2,
        },
        {
          nameDetailLesson: "Stack và Queue: Khái niệm và cài đặt",
          duration: 2,
        },
        { nameDetailLesson: "Linked List: Đơn và Đôi", duration: 2 },
        { nameDetailLesson: "Cây: Nhị phân, BST, AVL", duration: 2 },
        {
          nameDetailLesson: "Đồ thị và các thuật toán đồ thị cơ bản",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Xử lý File và Module",
      duration: 10, // 5 buổi
      detailLessons: [
        { nameDetailLesson: "Đọc và ghi tập tin văn bản", duration: 2 },
        { nameDetailLesson: "Xử lý tập tin CSV", duration: 2 },
        { nameDetailLesson: "Xử lý tập tin JSON", duration: 2 },
        { nameDetailLesson: "Tạo và sử dụng Module", duration: 2 },
        { nameDetailLesson: "Quản lý thư viện và sử dụng pip", duration: 2 },
      ],
    },
    {
      nameLesson: "Lập trình Hướng đối tượng",
      duration: 14, // 7 buổi
      detailLessons: [
        { nameDetailLesson: "Lớp và Đối tượng trong Python", duration: 2 },
        { nameDetailLesson: "Các thuộc tính và phương thức", duration: 2 },
        { nameDetailLesson: "Constructor và Destructor", duration: 2 },
        { nameDetailLesson: "Kế thừa và Đa hình", duration: 2 },
        { nameDetailLesson: "Encapsulation và Abstraction", duration: 2 },
        { nameDetailLesson: "Ghi đè phương thức và Đa hình động", duration: 2 },
        {
          nameDetailLesson: "Thực hành xây dựng lớp và đối tượng",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Xử lý Ngoại lệ và Debugging",
      duration: 8, // 4 buổi
      detailLessons: [
        { nameDetailLesson: "Khái niệm về ngoại lệ", duration: 2 },
        { nameDetailLesson: "Xử lý ngoại lệ với try, except", duration: 2 },
        {
          nameDetailLesson: "Câu lệnh finally và tạo ngoại lệ tùy chỉnh",
          duration: 2,
        },
        { nameDetailLesson: "Debugging với PDB", duration: 2 },
        { nameDetailLesson: "Logging trong Python", duration: 2 },
        { nameDetailLesson: "Unit testing với unittest", duration: 2 },
      ],
    },
    {
      nameLesson: "Thư viện và Framework phổ biến",
      duration: 16, // 8 buổi
      detailLessons: [
        { nameDetailLesson: "Giới thiệu và Sử dụng pip", duration: 2 },
        { nameDetailLesson: "Thư viện Standard: os, sys, math", duration: 2 },
        { nameDetailLesson: "Thư viện Numpy: Tính toán khoa học", duration: 2 },
        { nameDetailLesson: "Thư viện Pandas: Xử lý dữ liệu", duration: 2 },
        { nameDetailLesson: "Matplotlib và Visualization", duration: 2 },
        {
          nameDetailLesson: "Giới thiệu Flask: Xây dựng web đơn giản",
          duration: 2,
        },
        { nameDetailLesson: "Xây dựng ứng dụng web với Flask", duration: 2 },
        {
          nameDetailLesson: "Giới thiệu Django: Web framework mạnh mẽ",
          duration: 2,
        },
        { nameDetailLesson: "Xây dựng ứng dụng web với Django", duration: 2 },
      ],
    },
    {
      nameLesson: "Lập trình Web với Flask và Django",
      duration: 10, // 5 buổi
      detailLessons: [
        { nameDetailLesson: "Giới thiệu về Flask", duration: 2 },
        { nameDetailLesson: "Xây dựng ứng dụng web với Flask", duration: 2 },
        { nameDetailLesson: "Giới thiệu về Django", duration: 2 },
        { nameDetailLesson: "Xây dựng ứng dụng web với Django", duration: 2 },
      ],
    },
    {
      nameLesson: "Xử lý dữ liệu lớn với Python",
      duration: 10, // 5 buổi
      detailLessons: [
        { nameDetailLesson: "Giới thiệu về xử lý dữ liệu lớn", duration: 2 },
        { nameDetailLesson: "Sử dụng Pandas cho xử lý dữ liệu", duration: 2 },
        { nameDetailLesson: "Phân tích dữ liệu với Numpy", duration: 2 },
        {
          nameDetailLesson: "Trực quan hóa dữ liệu với Matplotlib",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Machine Learning cơ bản",
      duration: 10, // 5 buổi
      detailLessons: [
        { nameDetailLesson: "Giới thiệu về Machine Learning", duration: 2 },
        {
          nameDetailLesson: "Các thuật toán Machine Learning cơ bản",
          duration: 2,
        },
        { nameDetailLesson: "Xây dựng mô hình Machine Learning", duration: 2 },
        { nameDetailLesson: "Thực hành với Scikit-Learn", duration: 2 },
      ],
    },
    {
      nameLesson: "Project và Ứng dụng thực tế",
      duration: 10, // 5 buổi
      detailLessons: [
        { nameDetailLesson: "Lập kế hoạch dự án, học GUI", duration: 2 },
        { nameDetailLesson: "Xây dựng ứng dụng GUI", duration: 2 },
        { nameDetailLesson: "Phát triển ứng dụng GUI", duration: 2 },
        {
          nameDetailLesson: "Tích hợp ứng dụng với cơ sở dữ liệu",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Dự án cuối khóa: Xây dựng ứng dụng quản lý thư viện",
      duration: 10, // 5 buổi
      detailLessons: [
        { nameDetailLesson: "Phân tích và thiết kế dự án", duration: 2 },
        {
          nameDetailLesson: "Xây dựng giao diện người dùng với Tkinter",
          duration: 2,
        },
        { nameDetailLesson: "Kết nối và xử lý cơ sở dữ liệu", duration: 2 },
        { nameDetailLesson: "Kiểm thử và triển khai dự án", duration: 2 },
      ],
    },
  ],
};

export default coursePythonFoundation;
