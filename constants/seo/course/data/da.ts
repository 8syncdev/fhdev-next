import { urlImageCourse } from "../../firebase";
import { ConstCourseType } from "../type";

const courseDataAnalysis: ConstCourseType = {
  // Use to filter course
  rating: 4.8,
  originalPrice: 2500000,
  price: 1200000,
  duration: 70, // Thời lượng đã được cập nhật
  language: ["python"],
  slug: "course-data-analysis",
  imgSrc: urlImageCourse['python'],
  category: "data",
  // Course detail
  nameCourse:
    "Khóa học Phân tích Dữ liệu (Data Analysis) cho người mới bắt đầu",
  description:
    "Khóa học này cung cấp kiến thức cơ bản và nâng cao về phân tích dữ liệu, giúp bạn xây dựng nền tảng vững chắc trong lĩnh vực Data Analysis.",
  tags: ["Data Analysis", "Statistics", "Data Visualization"],
  newest: true,
  popular: true,
  trending: true,
  content: {
    intro:
      "Khóa học Phân tích Dữ liệu (Data Analysis) cho người mới bắt đầu, cung cấp kiến thức cơ bản và nâng cao giúp bạn xây dựng nền tảng vững chắc trong lĩnh vực Data Analysis.",
    purposes: [
      "Nắm vững kiến thức cơ bản và nâng cao về phân tích dữ liệu và các kỹ thuật thống kê.",
      "Phát triển kỹ năng lập trình Python và sử dụng các thư viện phổ biến cho phân tích dữ liệu.",
      "Hiểu và áp dụng các kỹ thuật xử lý, chuẩn bị và trực quan hóa dữ liệu.",
      "Xây dựng và triển khai các dự án phân tích dữ liệu thực tế.",
    ],
    results: [
      "Có khả năng thu thập, xử lý và phân tích dữ liệu từ nhiều nguồn khác nhau.",
      "Hiểu và áp dụng các kỹ thuật phân tích dữ liệu thăm dò (EDA) và phân tích nâng cao.",
      "Phát triển kỹ năng làm việc nhóm và quản lý dự án phân tích dữ liệu.",
      "Tự tin triển khai và quản lý các dự án phân tích dữ liệu thực tế.",
    ],
    orientedUsers: [
      "Lập trình viên muốn nâng cao kỹ năng và kiến thức về phân tích dữ liệu và thống kê.",
      "Sinh viên ngành Công nghệ Thông tin muốn nắm vững phân tích dữ liệu và các ứng dụng của nó.",
      "Người muốn chuyển hướng sang lĩnh vực phân tích dữ liệu.",
      "Nhà phân tích dữ liệu muốn học thêm về các kỹ thuật và công cụ phân tích dữ liệu.",
    ],
    whyChoose: [
      "Khóa học được thiết kế bài bản và chi tiết từ cơ bản đến nâng cao.",
      "Giảng viên giàu kinh nghiệm và nhiệt tình.",
      "Nội dung cập nhật và phù hợp với xu hướng hiện nay.",
      "Hỗ trợ và tư vấn nhiệt tình từ cộng đồng học viên.",
    ],
  },
  lessons: [
    {
      nameLesson: "Giới thiệu về Phân tích Dữ liệu",
      duration: 6,
      detailLessons: [
        { nameDetailLesson: "Phân tích dữ liệu là gì?", duration: 2 },
        {
          nameDetailLesson: "Lịch sử và vai trò của phân tích dữ liệu",
          duration: 2,
        },
        {
          nameDetailLesson: "Các ứng dụng thực tế của phân tích dữ liệu",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Cơ sở lý thuyết về Thống kê",
      duration: 10,
      detailLessons: [
        {
          nameDetailLesson: "Các khái niệm cơ bản trong thống kê",
          duration: 2,
        },
        { nameDetailLesson: "Thống kê mô tả", duration: 2 },
        { nameDetailLesson: "Thống kê suy luận", duration: 2 },
        { nameDetailLesson: "Xác suất và phân phối xác suất", duration: 2 },
        {
          nameDetailLesson: "Kiểm định giả thuyết",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Ngôn ngữ lập trình Python cho Phân tích Dữ liệu",
      duration: 10,
      detailLessons: [
        {
          nameDetailLesson:
            "Giới thiệu về Python và các thư viện cho phân tích dữ liệu",
          duration: 2,
        },
        { nameDetailLesson: "Làm việc với NumPy", duration: 2 },
        { nameDetailLesson: "Làm việc với Pandas", duration: 2 },
        { nameDetailLesson: "Làm việc với Matplotlib và Seaborn", duration: 2 },
        {
          nameDetailLesson: "Phân tích dữ liệu với Python",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Xử lý và chuẩn bị dữ liệu",
      duration: 16,
      detailLessons: [
        { nameDetailLesson: "Thu thập và thu thập dữ liệu", duration: 2 },
        {
          nameDetailLesson: "Xử lý dữ liệu thiếu và không hợp lệ",
          duration: 2,
        },
        {
          nameDetailLesson: "Chuẩn hóa và làm sạch dữ liệu",
          duration: 2,
        },
        {
          nameDetailLesson: "Biến đổi dữ liệu",
          duration: 2,
        },
        { nameDetailLesson: "Tạo đặc trưng từ dữ liệu", duration: 2 },
        { nameDetailLesson: "Xử lý dữ liệu ngoại lệ", duration: 2 },
        {
          nameDetailLesson: "Tích hợp dữ liệu từ nhiều nguồn",
          duration: 2,
        },
        {
          nameDetailLesson: "Tạo tập dữ liệu cho phân tích",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Phân tích Dữ liệu Thăm dò (EDA)",
      duration: 16,
      detailLessons: [
        { nameDetailLesson: "Giới thiệu về EDA", duration: 2 },
        { nameDetailLesson: "Phân tích một biến", duration: 2 },
        { nameDetailLesson: "Phân tích hai biến", duration: 2 },
        { nameDetailLesson: "Phân tích đa biến", duration: 2 },
        { nameDetailLesson: "Phát hiện mẫu và xu hướng", duration: 2 },
        { nameDetailLesson: "Trực quan hóa dữ liệu", duration: 2 },
        { nameDetailLesson: "Sử dụng biểu đồ và đồ thị", duration: 2 },
        { nameDetailLesson: "Công cụ và kỹ thuật EDA", duration: 2 },
      ],
    },
    {
      nameLesson: "Phân tích Dữ liệu Nâng cao",
      duration: 12,
      detailLessons: [
        { nameDetailLesson: "Hồi quy tuyến tính", duration: 2 },
        { nameDetailLesson: "Hồi quy logistic", duration: 2 },
        {
          nameDetailLesson: "Phân tích thành phần chính (PCA)",
          duration: 2,
        },
        { nameDetailLesson: "Phân tích cụm", duration: 2 },
        { nameDetailLesson: "Phân tích chuỗi thời gian", duration: 2 },
        {
          nameDetailLesson: "Ứng dụng phân tích nâng cao",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Công cụ Phân tích Dữ liệu",
      duration: 10,
      detailLessons: [
        {
          nameDetailLesson: "Giới thiệu các công cụ phân tích dữ liệu",
          duration: 2,
        },
        { nameDetailLesson: "Làm việc với Excel", duration: 2 },
        { nameDetailLesson: "Làm việc với SQL", duration: 2 },
        { nameDetailLesson: "Làm việc với Tableau", duration: 2 },
        {
          nameDetailLesson: "Làm việc với Power BI",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Kỹ năng Trực quan hóa Dữ liệu",
      duration: 10,
      detailLessons: [
        {
          nameDetailLesson: "Giới thiệu về trực quan hóa dữ liệu",
          duration: 2,
        },
        {
          nameDetailLesson: "Nguyên tắc và phương pháp trực quan hóa",
          duration: 2,
        },
        { nameDetailLesson: "Thiết kế biểu đồ hiệu quả", duration: 2 },
        { nameDetailLesson: "Tạo dashboard", duration: 2 },
        {
          nameDetailLesson: "Trực quan hóa tương tác",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Ứng dụng Thực tế của Phân tích Dữ liệu",
      duration: 10,
      detailLessons: [
        {
          nameDetailLesson: "Phân tích dữ liệu trong kinh doanh",
          duration: 2,
        },
        { nameDetailLesson: "Phân tích dữ liệu trong y tế", duration: 2 },
        { nameDetailLesson: "Phân tích dữ liệu trong tài chính", duration: 2 },
        { nameDetailLesson: "Phân tích dữ liệu trong giáo dục", duration: 2 },
        {
          nameDetailLesson: "Phân tích dữ liệu trong marketing",
          duration: 2,
        },
      ],
    },
    {
      nameLesson:
        "Dự án cuối khóa: Phân tích dữ liệu doanh số bán hàng của một công ty",
      duration: 10,
      detailLessons: [
        { nameDetailLesson: "Lập kế hoạch và Phân tích yêu cầu", duration: 2 },
        { nameDetailLesson: "Thu thập và chuẩn bị dữ liệu", duration: 2 },
        { nameDetailLesson: "Phân tích và trực quan hóa dữ liệu", duration: 2 },
        { nameDetailLesson: "Báo cáo kết quả", duration: 2 },
        { nameDetailLesson: "Trình bày và báo cáo dự án", duration: 2 },
      ],
    },
  ],
};

export default courseDataAnalysis;
