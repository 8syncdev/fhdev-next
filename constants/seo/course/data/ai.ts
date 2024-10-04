import { urlImageCourse } from "../../firebase";
import { ConstCourseType } from "../type";

const courseAI: ConstCourseType = {
  // Use to filter course
  rating: 4.9,
  originalPrice: 3000000,
  price: 1500000,
  duration: 66, // Thời lượng đã được cập nhật
  language: ["python"],
  slug: "course-ai",
  imgSrc: urlImageCourse['python'],
  category: "data",
  // Course detail
  nameCourse: "Khóa học Trí tuệ nhân tạo (AI) cho người mới bắt đầu",
  description:
    "Khóa học này cung cấp kiến thức cơ bản và nâng cao về trí tuệ nhân tạo, giúp bạn xây dựng nền tảng vững chắc trong lĩnh vực AI.",
  tags: ["AI", "Machine Learning", "Deep Learning"],
  newest: true,
  popular: true,
  trending: true,
  content: {
    intro:
      "Khóa học Trí tuệ nhân tạo (AI) cho người mới bắt đầu, cung cấp kiến thức cơ bản và nâng cao giúp bạn xây dựng nền tảng vững chắc trong lĩnh vực AI.",
    purposes: [
      "Nắm vững kiến thức cơ bản và nâng cao về trí tuệ nhân tạo, máy học và học sâu.",
      "Phát triển kỹ năng lập trình Python và sử dụng các thư viện phổ biến cho AI.",
      "Hiểu và áp dụng các thuật toán và mô hình AI trong các dự án thực tế.",
      "Xây dựng và triển khai các ứng dụng AI hoàn chỉnh.",
    ],
    results: [
      "Có khả năng phát triển các mô hình AI và triển khai chúng vào ứng dụng thực tế.",
      "Hiểu và áp dụng các kỹ thuật xử lý và tối ưu hóa dữ liệu trong AI.",
      "Phát triển kỹ năng làm việc nhóm và quản lý dự án AI với phương pháp Agile/Scrum.",
      "Tự tin triển khai và quản lý các dự án AI thực tế.",
    ],
    orientedUsers: [
      "Lập trình viên muốn nâng cao kỹ năng và kiến thức về AI, máy học và học sâu.",
      "Sinh viên ngành Công nghệ Thông tin muốn nắm vững lập trình AI và các ứng dụng của nó.",
      "Người muốn chuyển hướng sang lĩnh vực trí tuệ nhân tạo.",
      "Nhà khoa học dữ liệu muốn học thêm về các mô hình và thuật toán AI.",
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
      nameLesson: "Giới thiệu về Trí tuệ nhân tạo",
      duration: 6,
      detailLessons: [
        { nameDetailLesson: "Trí tuệ nhân tạo là gì?", duration: 2 },
        {
          nameDetailLesson: "Lịch sử và các giai đoạn phát triển của AI",
          duration: 2,
        },
        { nameDetailLesson: "Các ứng dụng thực tế của AI", duration: 2 },
      ],
    },
    {
      nameLesson: "Cơ sở lý thuyết về AI",
      duration: 10,
      detailLessons: [
        { nameDetailLesson: "Các khái niệm cơ bản trong AI", duration: 2 },
        { nameDetailLesson: "Tìm kiếm và tối ưu hóa", duration: 2 },
        { nameDetailLesson: "Lập luận và suy diễn", duration: 2 },
        { nameDetailLesson: "Xử lý ngôn ngữ tự nhiên (NLP)", duration: 2 },
        {
          nameDetailLesson:
            "Học máy (Machine Learning) và Học sâu (Deep Learning)",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Ngôn ngữ lập trình Python cho AI",
      duration: 10,
      detailLessons: [
        {
          nameDetailLesson: "Giới thiệu về Python và các thư viện cho AI",
          duration: 2,
        },
        { nameDetailLesson: "Làm việc với NumPy", duration: 2 },
        { nameDetailLesson: "Làm việc với Pandas", duration: 2 },
        { nameDetailLesson: "Làm việc với Matplotlib và Seaborn", duration: 2 },
        {
          nameDetailLesson: "Sử dụng Scikit-Learn cho Machine Learning",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Học máy cơ bản",
      duration: 16,
      detailLessons: [
        { nameDetailLesson: "Giới thiệu về Machine Learning", duration: 2 },
        { nameDetailLesson: "Các thuật toán Supervised Learning", duration: 2 },
        {
          nameDetailLesson: "Các thuật toán Unsupervised Learning",
          duration: 2,
        },
        {
          nameDetailLesson: "Học tăng cường (Reinforcement Learning)",
          duration: 2,
        },
        { nameDetailLesson: "Xử lý và chuẩn bị dữ liệu", duration: 2 },
        { nameDetailLesson: "Đánh giá và chọn mô hình", duration: 2 },
        {
          nameDetailLesson: "Điều chỉnh tham số và cải thiện mô hình",
          duration: 2,
        },
        {
          nameDetailLesson: "Triển khai mô hình Machine Learning",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Học sâu cơ bản",
      duration: 16,
      detailLessons: [
        { nameDetailLesson: "Giới thiệu về Deep Learning", duration: 2 },
        { nameDetailLesson: "Mạng nơ-ron nhân tạo (ANN)", duration: 2 },
        { nameDetailLesson: "Mạng nơ-ron tích chập (CNN)", duration: 2 },
        { nameDetailLesson: "Mạng nơ-ron hồi quy (RNN)", duration: 2 },
        { nameDetailLesson: "Làm việc với TensorFlow", duration: 2 },
        { nameDetailLesson: "Làm việc với Keras", duration: 2 },
        { nameDetailLesson: "Xử lý hình ảnh và nhận dạng", duration: 2 },
        { nameDetailLesson: "Xử lý chuỗi thời gian và dự báo", duration: 2 },
      ],
    },
    {
      nameLesson: "Xử lý ngôn ngữ tự nhiên (NLP)",
      duration: 12,
      detailLessons: [
        { nameDetailLesson: "Giới thiệu về NLP", duration: 2 },
        { nameDetailLesson: "Tiền xử lý ngôn ngữ", duration: 2 },
        {
          nameDetailLesson: "Biểu diễn văn bản: TF-IDF, Word Embeddings",
          duration: 2,
        },
        { nameDetailLesson: "Các thuật toán cơ bản trong NLP", duration: 2 },
        { nameDetailLesson: "Mô hình ngôn ngữ và GPT", duration: 2 },
        {
          nameDetailLesson:
            "Ứng dụng NLP: Phân loại văn bản, Trích xuất thông tin",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Học máy nâng cao",
      duration: 10,
      detailLessons: [
        {
          nameDetailLesson:
            "Các thuật toán nâng cao: Gradient Boosting, XGBoost",
          duration: 2,
        },
        { nameDetailLesson: "Kỹ thuật xử lý dữ liệu nâng cao", duration: 2 },
        { nameDetailLesson: "Triển khai và giám sát mô hình", duration: 2 },
        { nameDetailLesson: "Đánh giá và cải thiện mô hình", duration: 2 },
        {
          nameDetailLesson: "Ứng dụng thực tế của học máy nâng cao",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Học sâu nâng cao",
      duration: 10,
      detailLessons: [
        {
          nameDetailLesson: "Các mô hình mạng nơ-ron nâng cao: LSTM, GRU",
          duration: 2,
        },
        {
          nameDetailLesson: "GANs (Generative Adversarial Networks)",
          duration: 2,
        },
        { nameDetailLesson: "Làm việc với mô hình Transformer", duration: 2 },
        {
          nameDetailLesson: "Triển khai và tối ưu hóa mô hình Deep Learning",
          duration: 2,
        },
        {
          nameDetailLesson: "Ứng dụng thực tế của Deep Learning nâng cao",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Dự án cuối khóa: Xây dựng ứng dụng AI thực tế",
      duration: 10,
      detailLessons: [
        { nameDetailLesson: "Lập kế hoạch và Phân tích yêu cầu", duration: 2 },
        { nameDetailLesson: "Thiết kế và xây dựng mô hình AI", duration: 2 },
        { nameDetailLesson: "Triển khai ứng dụng AI", duration: 2 },
        { nameDetailLesson: "Kiểm thử và tối ưu hóa ứng dụng", duration: 2 },
        { nameDetailLesson: "Trình bày và báo cáo dự án", duration: 2 },
      ],
    },
  ],
};

export default courseAI;
