import { CourseDetailProps } from "@/server/course.type";

export const dataScienceDetail: CourseDetailProps["content"] = {
  name: "Khóa học Khoa học Dữ liệu (Data Science) cho người mới bắt đầu",
  img_url: "", // Image URL left empty as per your instruction
  description:
    "Khóa học này cung cấp kiến thức cơ bản và nâng cao về khoa học dữ liệu, giúp bạn xây dựng nền tảng vững chắc trong lĩnh vực Data Science.",
  price: 2000000,
  content_json: {
    about: {
      desc: "Khóa học Khoa học Dữ liệu (Data Science) cho người mới bắt đầu, cung cấp kiến thức cơ bản và nâng cao giúp bạn xây dựng nền tảng vững chắc trong lĩnh vực Data Science.",
      title: "Khóa học Khoa học Dữ liệu (Data Science) cho người mới bắt đầu",
      points: [
        "Nắm vững kiến thức cơ bản và nâng cao về khoa học dữ liệu",
        "Phát triển kỹ năng lập trình Python",
        "Khai phá dữ liệu và học máy",
        "Xây dựng hệ thống khoa học dữ liệu thực tế",
      ],
      journey: [
        "Giới thiệu về khoa học dữ liệu",
        "Thống kê và xác suất",
        "Học máy cơ bản và nâng cao",
        "Xử lý ngôn ngữ tự nhiên (NLP)",
        "Học sâu (Deep Learning)",
        "Khai phá dữ liệu (Data Mining)",
      ],
      audience:
        "Lập trình viên, sinh viên ngành CNTT, người chuyển hướng sang khoa học dữ liệu",
      projects: [
        {
          desc: "Phân tích dữ liệu khách hàng và dự đoán hành vi",
          name: "Dự án cuối khóa",
        },
      ],
    },
    skills: {
      list: [
        "Lập trình Python cho khoa học dữ liệu",
        "Sử dụng thư viện NumPy, Pandas, Matplotlib",
        "Khai phá dữ liệu và học máy",
        "Triển khai các mô hình Machine Learning",
        "Xử lý ngôn ngữ tự nhiên (NLP)",
        "Học sâu (Deep Learning)",
      ],
      title: "Kỹ năng đạt được",
    },
    for_who: {
      list: [
        "Lập trình viên muốn nâng cao kỹ năng khoa học dữ liệu",
        "Sinh viên muốn nắm vững khoa học dữ liệu",
        "Người chuyển hướng sang khoa học dữ liệu",
        "Nhà phân tích dữ liệu",
      ],
      title: "Đối tượng phù hợp",
    },
    overview: {
      level: "Từ Cơ Bản đến Nâng Cao",
      features: [
        {
          icon: "bar-chart-line",
          name: "Từ Cơ Bản đến Nâng Cao",
        },
        {
          icon: "play-circle-fill",
          name: "74 giờ học tập",
        },
        {
          icon: "list-check",
          name: "Hơn 50 bài học",
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
      lesson_count: 50,
      video_content: "74 giờ học tập",
    },
    highlights: {
      title: "Điểm nổi bật",
      points: [
        "Thực tế và áp dụng ngay",
        "Tập trung vào kỹ năng thực tế",
        "Nội dung cập nhật liên tục",
      ],
    },
    beginner_friendly: {
      desc: "Không cần kiến thức nền",
      title: "Thân thiện với người mới",
      details: [
        "Lộ trình từ mới bắt đầu đến chuyên gia",
        "Thực hành qua nhiều bài tập và dự án",
        "Học mọi lúc, mọi nơi",
      ],
      key_points: [
        "Phù hợp với người mới",
        "Nội dung dễ hiểu",
        "Chú trọng vào thực hành",
      ],
    },
  },
  duration: 74,
};

export const roadmapDataScienceDetail = [
  {
    id: 1,
    name: "Giới thiệu về Khoa học Dữ liệu",
    description: "Tổng quan về khoa học dữ liệu",
    lessons: {
      1: [
        { id: 1, name: "Khoa học dữ liệu là gì?", duration: 2 },
        { id: 2, name: "Vai trò của nhà khoa học dữ liệu", duration: 2 },
        {
          id: 3,
          name: "Các ứng dụng thực tế của khoa học dữ liệu",
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
    name: "Cơ sở lý thuyết về Khoa học Dữ liệu",
    description: "Lý thuyết nền tảng cho khoa học dữ liệu",
    lessons: {
      1: [
        {
          id: 4,
          name: "Các khái niệm cơ bản trong khoa học dữ liệu",
          duration: 2,
        },
        { id: 5, name: "Thống kê và xác suất", duration: 2 },
        { id: 6, name: "Phân tích dữ liệu thăm dò (EDA)", duration: 2 },
        { id: 7, name: "Trực quan hóa dữ liệu", duration: 2 },
        { id: 8, name: "Học máy cơ bản", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 10,
  },
  {
    id: 3,
    name: "Ngôn ngữ lập trình Python cho Khoa học Dữ liệu",
    description: "Học Python và các thư viện phổ biến cho khoa học dữ liệu",
    lessons: {
      1: [
        {
          id: 9,
          name: "Giới thiệu về Python và các thư viện cho khoa học dữ liệu",
          duration: 2,
        },
        { id: 10, name: "Làm việc với NumPy", duration: 2 },
        { id: 11, name: "Làm việc với Pandas", duration: 2 },
        { id: 12, name: "Làm việc với Matplotlib và Seaborn", duration: 2 },
        {
          id: 13,
          name: "Sử dụng Scikit-Learn cho Machine Learning",
          duration: 2,
        },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 10,
  },
  {
    id: 4,
    name: "Khai phá dữ liệu (Data Mining)",
    description: "Tìm hiểu về khai phá dữ liệu",
    lessons: {
      1: [
        { id: 14, name: "Giới thiệu về khai phá dữ liệu", duration: 2 },
        { id: 15, name: "Các thuật toán phân cụm", duration: 2 },
        { id: 16, name: "Các thuật toán phân loại", duration: 2 },
        { id: 17, name: "Các thuật toán liên kết", duration: 2 },
        { id: 18, name: "Tiền xử lý dữ liệu", duration: 2 },
        { id: 19, name: "Đánh giá mô hình khai phá dữ liệu", duration: 2 },
        { id: 20, name: "Tối ưu hóa và tinh chỉnh mô hình", duration: 2 },
        { id: 21, name: "Ứng dụng thực tế của khai phá dữ liệu", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 16,
  },
  {
    id: 5,
    name: "Học máy nâng cao",
    description: "Học về các mô hình Machine Learning nâng cao",
    lessons: {
      1: [
        {
          id: 22,
          name: "Các mô hình nâng cao trong Machine Learning",
          duration: 2,
        },
        {
          id: 23,
          name: "Học tăng cường (Reinforcement Learning)",
          duration: 2,
        },
        { id: 24, name: "Xử lý dữ liệu thiếu và ngoại lệ", duration: 2 },
        { id: 25, name: "Feature Engineering", duration: 2 },
        { id: 26, name: "Kỹ thuật Ensemble", duration: 2 },
        { id: 27, name: "Triển khai mô hình Machine Learning", duration: 2 },
        { id: 28, name: "Xử lý dữ liệu lớn với Machine Learning", duration: 2 },
        {
          id: 29,
          name: "Ứng dụng thực tế của Machine Learning nâng cao",
          duration: 2,
        },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 16,
  },
  {
    id: 6,
    name: "Xử lý ngôn ngữ tự nhiên (NLP)",
    description: "Học về NLP và các kỹ thuật chính",
    lessons: {
      1: [
        { id: 30, name: "Giới thiệu về NLP", duration: 2 },
        { id: 31, name: "Tiền xử lý ngôn ngữ", duration: 2 },
        {
          id: 32,
          name: "Biểu diễn văn bản: TF-IDF, Word Embeddings",
          duration: 2,
        },
        { id: 33, name: "Các thuật toán cơ bản trong NLP", duration: 2 },
        { id: 34, name: "Mô hình ngôn ngữ và GPT", duration: 2 },
        {
          id: 35,
          name: "Ứng dụng NLP: Phân loại văn bản, Trích xuất thông tin",
          duration: 2,
        },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 12,
  },
  {
    id: 7,
    name: "Học sâu (Deep Learning)",
    description: "Tìm hiểu về Deep Learning và các ứng dụng",
    lessons: {
      1: [
        { id: 36, name: "Giới thiệu về Deep Learning", duration: 2 },
        { id: 37, name: "Mạng nơ-ron nhân tạo (ANN)", duration: 2 },
        { id: 38, name: "Mạng nơ-ron tích chập (CNN)", duration: 2 },
        { id: 39, name: "Mạng nơ-ron hồi quy (RNN)", duration: 2 },
        { id: 40, name: "Làm việc với TensorFlow", duration: 2 },
        { id: 41, name: "Làm việc với Keras", duration: 2 },
        { id: 42, name: "Xử lý hình ảnh và nhận dạng", duration: 2 },
        { id: 43, name: "Xử lý chuỗi thời gian và dự báo", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 16,
  },
  {
    id: 8,
    name: "Dự án cuối khóa: Phân tích dữ liệu khách hàng và dự đoán hành vi",
    description: "Dự án cuối khóa về khoa học dữ liệu",
    lessons: {
      1: [
        { id: 44, name: "Lập kế hoạch và Phân tích yêu cầu", duration: 2 },
        { id: 45, name: "Thu thập và chuẩn bị dữ liệu", duration: 2 },
        { id: 46, name: "Phân tích và trực quan hóa dữ liệu", duration: 2 },
        { id: 47, name: "Xây dựng và triển khai mô hình dự đoán", duration: 2 },
        { id: 48, name: "Trình bày và báo cáo dự án", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 10,
  },
];
