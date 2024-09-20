import { CourseDetailProps } from "@/server/course.type";

export const dataAnalysisDetail: CourseDetailProps["content"] = {
  name: "Khóa học Phân tích Dữ liệu (Data Analysis) cho người mới bắt đầu",
  img_url: "", // Bỏ trống theo yêu cầu
  description:
    "Khóa học này cung cấp kiến thức cơ bản và nâng cao về phân tích dữ liệu, giúp bạn xây dựng nền tảng vững chắc trong lĩnh vực Data Analysis.",
  price: 1200000,
  content_json: {
    about: {
      desc: "Khóa học Phân tích Dữ liệu (Data Analysis) cho người mới bắt đầu, cung cấp kiến thức cơ bản và nâng cao giúp bạn xây dựng nền tảng vững chắc trong lĩnh vực Data Analysis.",
      title: "Phân tích Dữ liệu cho người mới bắt đầu",
      points: [
        "Nắm vững kiến thức cơ bản và nâng cao về phân tích dữ liệu và các kỹ thuật thống kê",
        "Phát triển kỹ năng lập trình Python và sử dụng các thư viện phổ biến cho phân tích dữ liệu",
        "Hiểu và áp dụng các kỹ thuật xử lý, chuẩn bị và trực quan hóa dữ liệu",
        "Xây dựng và triển khai các dự án phân tích dữ liệu thực tế",
      ],
      journey: [
        "Giới thiệu về phân tích dữ liệu",
        "Cơ sở lý thuyết về thống kê",
        "Lập trình Python cho phân tích dữ liệu",
        "Phân tích dữ liệu thăm dò (EDA)",
        "Phân tích dữ liệu nâng cao",
        "Trực quan hóa dữ liệu",
      ],
      audience:
        "Lập trình viên, sinh viên CNTT, nhà phân tích dữ liệu muốn học thêm công cụ và kỹ thuật",
      projects: [
        {
          desc: "Phân tích dữ liệu doanh số bán hàng của một công ty",
          name: "Dự án cuối khóa",
        },
      ],
    },
    skills: {
      list: [
        "Thu thập, xử lý và phân tích dữ liệu",
        "Sử dụng các công cụ phân tích dữ liệu như Excel, SQL, Tableau, Power BI",
        "Trực quan hóa dữ liệu và tạo dashboard",
        "Phân tích dữ liệu nâng cao với các mô hình hồi quy, PCA, phân cụm",
      ],
      title: "Kỹ năng đạt được",
    },
    for_who: {
      list: [
        "Lập trình viên muốn nâng cao kỹ năng về phân tích dữ liệu",
        "Sinh viên CNTT muốn học thêm về Data Analysis",
        "Người muốn chuyển hướng sang phân tích dữ liệu",
        "Nhà phân tích dữ liệu muốn học thêm các kỹ thuật và công cụ",
      ],
      title: "Đối tượng phù hợp",
    },
    overview: {
      level: "Từ cơ bản đến nâng cao",
      features: [
        {
          icon: "bar-chart-line",
          name: "Từ cơ bản đến nâng cao",
        },
        {
          icon: "play-circle-fill",
          name: "70 giờ video HD",
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
      video_content: "70 giờ video HD",
    },
    highlights: {
      title: "Điểm nổi bật",
      points: [
        "Thiết kế bài bản từ cơ bản đến nâng cao",
        "Nội dung cập nhật theo xu hướng hiện tại",
        "Hỗ trợ từ cộng đồng học viên và giảng viên",
      ],
    },
    beginner_friendly: {
      desc: "Khóa học phù hợp cho người mới bắt đầu trong lĩnh vực phân tích dữ liệu.",
      title: "Thân thiện với người mới",
      details: [
        "Bắt đầu từ những kiến thức cơ bản nhất",
        "Lộ trình chi tiết và nhiều bài tập thực hành",
        "Giảng viên có kinh nghiệm",
      ],
      key_points: [
        "Phù hợp người mới bắt đầu",
        "Tiếp cận dễ hiểu",
        "Chú trọng thực hành",
      ],
    },
  },
  duration: 70,
};

export const roadmapDataAnalysisDetail = [
  {
    id: 1,
    name: "Giới thiệu về Phân tích Dữ liệu",
    description:
      "Tìm hiểu về khái niệm cơ bản và các ứng dụng của phân tích dữ liệu",
    lessons: {
      1: [
        { id: 1, name: "Phân tích dữ liệu là gì?", duration: 2 },
        {
          id: 2,
          name: "Lịch sử và vai trò của phân tích dữ liệu",
          duration: 2,
        },
        {
          id: 3,
          name: "Các ứng dụng thực tế của phân tích dữ liệu",
          duration: 2,
        },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 6,
  },
  {
    id: 2,
    name: "Cơ sở lý thuyết về Thống kê",
    description:
      "Nắm vững các khái niệm cơ bản về thống kê và áp dụng chúng vào phân tích dữ liệu",
    lessons: {
      1: [
        { id: 4, name: "Các khái niệm cơ bản trong thống kê", duration: 2 },
        { id: 5, name: "Thống kê mô tả", duration: 2 },
        { id: 6, name: "Thống kê suy luận", duration: 2 },
        { id: 7, name: "Xác suất và phân phối xác suất", duration: 2 },
        { id: 8, name: "Kiểm định giả thuyết", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 10,
  },
  {
    id: 3,
    name: "Ngôn ngữ lập trình Python cho Phân tích Dữ liệu",
    description:
      "Làm việc với Python và các thư viện phổ biến dành cho phân tích dữ liệu",
    lessons: {
      1: [
        {
          id: 9,
          name: "Giới thiệu về Python và các thư viện cho phân tích dữ liệu",
          duration: 2,
        },
        { id: 10, name: "Làm việc với NumPy", duration: 2 },
        { id: 11, name: "Làm việc với Pandas", duration: 2 },
        { id: 12, name: "Làm việc với Matplotlib và Seaborn", duration: 2 },
        { id: 13, name: "Phân tích dữ liệu với Python", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 10,
  },
  {
    id: 4,
    name: "Xử lý và chuẩn bị dữ liệu",
    description:
      "Học các kỹ thuật thu thập, làm sạch và xử lý dữ liệu để chuẩn bị cho phân tích",
    lessons: {
      1: [
        { id: 14, name: "Thu thập và thu thập dữ liệu", duration: 2 },
        { id: 15, name: "Xử lý dữ liệu thiếu và không hợp lệ", duration: 2 },
        { id: 16, name: "Chuẩn hóa và làm sạch dữ liệu", duration: 2 },
        { id: 17, name: "Biến đổi dữ liệu", duration: 2 },
        { id: 18, name: "Tạo đặc trưng từ dữ liệu", duration: 2 },
        { id: 19, name: "Xử lý dữ liệu ngoại lệ", duration: 2 },
        { id: 20, name: "Tích hợp dữ liệu từ nhiều nguồn", duration: 2 },
        { id: 21, name: "Tạo tập dữ liệu cho phân tích", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 16,
  },
  {
    id: 5,
    name: "Phân tích Dữ liệu Thăm dò (EDA)",
    description:
      "Thực hiện phân tích thăm dò dữ liệu (Exploratory Data Analysis) với các kỹ thuật EDA",
    lessons: {
      1: [
        { id: 22, name: "Giới thiệu về EDA", duration: 2 },
        { id: 23, name: "Phân tích một biến", duration: 2 },
        { id: 24, name: "Phân tích hai biến", duration: 2 },
        { id: 25, name: "Phân tích đa biến", duration: 2 },
        { id: 26, name: "Phát hiện mẫu và xu hướng", duration: 2 },
        { id: 27, name: "Trực quan hóa dữ liệu", duration: 2 },
        { id: 28, name: "Sử dụng biểu đồ và đồ thị", duration: 2 },
        { id: 29, name: "Công cụ và kỹ thuật EDA", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 16,
  },
  {
    id: 6,
    name: "Phân tích Dữ liệu Nâng cao",
    description:
      "Học các kỹ thuật phân tích dữ liệu nâng cao như hồi quy, phân cụm và phân tích chuỗi thời gian",
    lessons: {
      1: [
        { id: 30, name: "Hồi quy tuyến tính", duration: 2 },
        { id: 31, name: "Hồi quy logistic", duration: 2 },
        { id: 32, name: "Phân tích thành phần chính (PCA)", duration: 2 },
        { id: 33, name: "Phân tích cụm", duration: 2 },
        { id: 34, name: "Phân tích chuỗi thời gian", duration: 2 },
        { id: 35, name: "Ứng dụng phân tích nâng cao", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 12,
  },
  {
    id: 7,
    name: "Công cụ Phân tích Dữ liệu",
    description:
      "Làm việc với các công cụ phổ biến để phân tích dữ liệu như Excel, SQL, Tableau và Power BI",
    lessons: {
      1: [
        {
          id: 36,
          name: "Giới thiệu các công cụ phân tích dữ liệu",
          duration: 2,
        },
        { id: 37, name: "Làm việc với Excel", duration: 2 },
        { id: 38, name: "Làm việc với SQL", duration: 2 },
        { id: 39, name: "Làm việc với Tableau", duration: 2 },
        { id: 40, name: "Làm việc với Power BI", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 10,
  },
  {
    id: 8,
    name: "Kỹ năng Trực quan hóa Dữ liệu",
    description:
      "Học các kỹ thuật và nguyên tắc trực quan hóa dữ liệu để tạo báo cáo và dashboard hiệu quả",
    lessons: {
      1: [
        { id: 41, name: "Giới thiệu về trực quan hóa dữ liệu", duration: 2 },
        {
          id: 42,
          name: "Nguyên tắc và phương pháp trực quan hóa",
          duration: 2,
        },
        { id: 43, name: "Thiết kế biểu đồ hiệu quả", duration: 2 },
        { id: 44, name: "Tạo dashboard", duration: 2 },
        { id: 45, name: "Trực quan hóa tương tác", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 10,
  },
  {
    id: 9,
    name: "Ứng dụng Thực tế của Phân tích Dữ liệu",
    description:
      "Tìm hiểu các ứng dụng thực tế của phân tích dữ liệu trong các lĩnh vực khác nhau",
    lessons: {
      1: [
        { id: 46, name: "Phân tích dữ liệu trong kinh doanh", duration: 2 },
        { id: 47, name: "Phân tích dữ liệu trong y tế", duration: 2 },
        { id: 48, name: "Phân tích dữ liệu trong tài chính", duration: 2 },
        { id: 49, name: "Phân tích dữ liệu trong giáo dục", duration: 2 },
        { id: 50, name: "Phân tích dữ liệu trong marketing", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 10,
  },
  {
    id: 10,
    name: "Dự án cuối khóa: Phân tích dữ liệu doanh số bán hàng của một công ty",
    description:
      "Thực hiện dự án cuối khóa về phân tích dữ liệu doanh số bán hàng",
    lessons: {
      1: [
        { id: 51, name: "Lập kế hoạch và Phân tích yêu cầu", duration: 2 },
        { id: 52, name: "Thu thập và chuẩn bị dữ liệu", duration: 2 },
        { id: 53, name: "Phân tích và trực quan hóa dữ liệu", duration: 2 },
        { id: 54, name: "Báo cáo kết quả", duration: 2 },
        { id: 55, name: "Trình bày và báo cáo dự án", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 10,
  },
];
