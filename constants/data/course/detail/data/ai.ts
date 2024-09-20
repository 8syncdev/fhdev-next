import { CourseDetailProps } from "@/server/course.type";

export const aiDetail: CourseDetailProps["content"] = {
  name: "Khóa học Trí tuệ nhân tạo (AI) cho người mới bắt đầu",
  img_url: "", // Bỏ trống theo yêu cầu
  description:
    "Khóa học này cung cấp kiến thức cơ bản và nâng cao về trí tuệ nhân tạo, giúp bạn xây dựng nền tảng vững chắc trong lĩnh vực AI.",
  price: 1500000,
  content_json: {
    about: {
      desc: "Khóa học Trí tuệ nhân tạo (AI) cho người mới bắt đầu, cung cấp kiến thức cơ bản và nâng cao giúp bạn xây dựng nền tảng vững chắc trong lĩnh vực AI.",
      title: "Trí tuệ nhân tạo cho người mới bắt đầu",
      points: [
        "Nắm vững kiến thức cơ bản và nâng cao về trí tuệ nhân tạo, máy học và học sâu",
        "Phát triển kỹ năng lập trình Python và sử dụng các thư viện AI phổ biến",
        "Hiểu và áp dụng các thuật toán AI vào các dự án thực tế",
        "Xây dựng và triển khai ứng dụng AI hoàn chỉnh",
      ],
      journey: [
        "Giới thiệu về trí tuệ nhân tạo",
        "Cơ sở lý thuyết về AI",
        "Lập trình Python cho AI",
        "Học máy và học sâu cơ bản",
        "Học máy và học sâu nâng cao",
        "Xử lý ngôn ngữ tự nhiên (NLP)",
      ],
      audience:
        "Lập trình viên, sinh viên ngành CNTT, người muốn chuyển hướng sang AI, nhà khoa học dữ liệu",
      projects: [
        {
          desc: "Xây dựng ứng dụng AI thực tế",
          name: "Dự án cuối khóa",
        },
      ],
    },
    skills: {
      list: [
        "Phát triển mô hình AI và triển khai ứng dụng AI thực tế",
        "Hiểu các kỹ thuật xử lý và tối ưu hóa dữ liệu trong AI",
        "Làm việc với các thư viện AI phổ biến: NumPy, TensorFlow, Keras",
        "Triển khai các mô hình học máy và học sâu",
        "Phát triển kỹ năng làm việc nhóm và quản lý dự án AI",
      ],
      title: "Kỹ năng đạt được",
    },
    for_who: {
      list: [
        "Lập trình viên muốn nâng cao kỹ năng về AI, máy học và học sâu",
        "Sinh viên CNTT muốn nắm vững lập trình AI",
        "Người muốn chuyển hướng sang lĩnh vực trí tuệ nhân tạo",
        "Nhà khoa học dữ liệu muốn học thêm về AI",
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
          name: "66 giờ video HD",
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
      video_content: "66 giờ video HD",
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
      desc: "Khóa học dễ tiếp cận và phù hợp với người mới bắt đầu trong AI và lập trình Python.",
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
  duration: 66,
};

export const roadmapAIDetail = [
  {
    id: 1,
    name: "Giới thiệu về Trí tuệ nhân tạo",
    description:
      "Tìm hiểu về khái niệm cơ bản và các ứng dụng của trí tuệ nhân tạo",
    lessons: {
      1: [
        { id: 1, name: "Trí tuệ nhân tạo là gì?", duration: 2 },
        {
          id: 2,
          name: "Lịch sử và các giai đoạn phát triển của AI",
          duration: 2,
        },
        { id: 3, name: "Các ứng dụng thực tế của AI", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 6,
  },
  {
    id: 2,
    name: "Cơ sở lý thuyết về AI",
    description:
      "Nắm vững các khái niệm cơ bản và kỹ thuật nền tảng của trí tuệ nhân tạo",
    lessons: {
      1: [
        { id: 4, name: "Các khái niệm cơ bản trong AI", duration: 2 },
        { id: 5, name: "Tìm kiếm và tối ưu hóa", duration: 2 },
        { id: 6, name: "Lập luận và suy diễn", duration: 2 },
        { id: 7, name: "Xử lý ngôn ngữ tự nhiên (NLP)", duration: 2 },
        { id: 8, name: "Học máy và Học sâu", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 10,
  },
  {
    id: 3,
    name: "Ngôn ngữ lập trình Python cho AI",
    description:
      "Làm việc với Python và các thư viện phổ biến dành cho trí tuệ nhân tạo",
    lessons: {
      1: [
        {
          id: 9,
          name: "Giới thiệu về Python và các thư viện cho AI",
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
    name: "Học máy cơ bản",
    description: "Tìm hiểu về các thuật toán học máy cơ bản và cách triển khai",
    lessons: {
      1: [
        { id: 14, name: "Giới thiệu về Machine Learning", duration: 2 },
        { id: 15, name: "Các thuật toán Supervised Learning", duration: 2 },
        { id: 16, name: "Các thuật toán Unsupervised Learning", duration: 2 },
        {
          id: 17,
          name: "Học tăng cường (Reinforcement Learning)",
          duration: 2,
        },
        { id: 18, name: "Xử lý và chuẩn bị dữ liệu", duration: 2 },
        { id: 19, name: "Đánh giá và chọn mô hình", duration: 2 },
        {
          id: 20,
          name: "Điều chỉnh tham số và cải thiện mô hình",
          duration: 2,
        },
        { id: 21, name: "Triển khai mô hình Machine Learning", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 16,
  },
  {
    id: 5,
    name: "Học sâu cơ bản",
    description: "Học về mạng nơ-ron và cách triển khai mô hình học sâu cơ bản",
    lessons: {
      1: [
        { id: 22, name: "Giới thiệu về Deep Learning", duration: 2 },
        { id: 23, name: "Mạng nơ-ron nhân tạo (ANN)", duration: 2 },
        { id: 24, name: "Mạng nơ-ron tích chập (CNN)", duration: 2 },
        { id: 25, name: "Mạng nơ-ron hồi quy (RNN)", duration: 2 },
        { id: 26, name: "Làm việc với TensorFlow", duration: 2 },
        { id: 27, name: "Làm việc với Keras", duration: 2 },
        { id: 28, name: "Xử lý hình ảnh và nhận dạng", duration: 2 },
        { id: 29, name: "Xử lý chuỗi thời gian và dự báo", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 16,
  },
  {
    id: 6,
    name: "Xử lý ngôn ngữ tự nhiên (NLP)",
    description:
      "Nắm vững các kỹ thuật xử lý ngôn ngữ tự nhiên với các mô hình AI",
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
    name: "Học máy nâng cao",
    description:
      "Tìm hiểu về các thuật toán học máy nâng cao và cách triển khai vào thực tế",
    lessons: {
      1: [
        {
          id: 36,
          name: "Các thuật toán nâng cao: Gradient Boosting, XGBoost",
          duration: 2,
        },
        { id: 37, name: "Kỹ thuật xử lý dữ liệu nâng cao", duration: 2 },
        { id: 38, name: "Triển khai và giám sát mô hình", duration: 2 },
        { id: 39, name: "Đánh giá và cải thiện mô hình", duration: 2 },
        { id: 40, name: "Ứng dụng thực tế của học máy nâng cao", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 10,
  },
  {
    id: 8,
    name: "Học sâu nâng cao",
    description: "Học về các mô hình học sâu nâng cao và triển khai thực tế",
    lessons: {
      1: [
        {
          id: 41,
          name: "Các mô hình mạng nơ-ron nâng cao: LSTM, GRU",
          duration: 2,
        },
        { id: 42, name: "GANs (Generative Adversarial Networks)", duration: 2 },
        { id: 43, name: "Làm việc với mô hình Transformer", duration: 2 },
        {
          id: 44,
          name: "Triển khai và tối ưu hóa mô hình Deep Learning",
          duration: 2,
        },
        {
          id: 45,
          name: "Ứng dụng thực tế của Deep Learning nâng cao",
          duration: 2,
        },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 10,
  },
  {
    id: 9,
    name: "Dự án cuối khóa: Xây dựng ứng dụng AI thực tế",
    description:
      "Thực hiện dự án thực tế về xây dựng và triển khai ứng dụng AI",
    lessons: {
      1: [
        { id: 46, name: "Lập kế hoạch và Phân tích yêu cầu", duration: 2 },
        { id: 47, name: "Thiết kế và xây dựng mô hình AI", duration: 2 },
        { id: 48, name: "Triển khai ứng dụng AI", duration: 2 },
        { id: 49, name: "Kiểm thử và tối ưu hóa ứng dụng", duration: 2 },
        { id: 50, name: "Trình bày và báo cáo dự án", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 10,
  },
];
