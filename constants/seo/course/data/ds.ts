import { tensorflowImg } from "@/constants/image";
import { urlImageCourse } from "../../firebase";
import { ConstCourseType } from "../type";

const courseDataScience: ConstCourseType = {
  // Use to filter course
  rating: 4.8,
  originalPrice: 5500000,
  price: 2500000,
  duration: 74, // Thời lượng đã được cập nhật
  language: ["python"],
  slug: "course-data-science",
  imgSrc: tensorflowImg,
  category: "data",
  // Course detail
  nameCourse: "Khóa học Khoa học Dữ liệu (Data Science) cho người mới bắt đầu",
  description:
    "Khóa học này cung cấp kiến thức cơ bản và nâng cao về khoa học dữ liệu, giúp bạn xây dựng nền tảng vững chắc trong lĩnh vực Data Science.",
  tags: ["Data Science", "Machine Learning", "Data Analysis"],
  newest: true,
  popular: true,
  trending: true,
  content: {
    intro:
      "Khóa học Khoa học Dữ liệu (Data Science) cho người mới bắt đầu, cung cấp kiến thức cơ bản và nâng cao giúp bạn xây dựng nền tảng vững chắc trong lĩnh vực Data Science.",
    purposes: [
      "Nắm vững kiến thức cơ bản và nâng cao về khoa học dữ liệu và các công cụ phổ biến.",
      "Phát triển kỹ năng lập trình Python và sử dụng các thư viện cho khoa học dữ liệu.",
      "Hiểu và áp dụng các kỹ thuật khai phá dữ liệu và học máy.",
      "Xây dựng và triển khai các hệ thống khoa học dữ liệu thực tế.",
    ],
    results: [
      "Có khả năng thu thập, xử lý và phân tích dữ liệu từ nhiều nguồn khác nhau.",
      "Hiểu và áp dụng các kỹ thuật khai phá dữ liệu và học máy.",
      "Phát triển kỹ năng làm việc nhóm và quản lý dự án khoa học dữ liệu.",
      "Tự tin triển khai và quản lý các dự án khoa học dữ liệu thực tế.",
    ],
    orientedUsers: [
      "Lập trình viên muốn nâng cao kỹ năng và kiến thức về khoa học dữ liệu.",
      "Sinh viên ngành Công nghệ Thông tin muốn nắm vững khoa học dữ liệu và các ứng dụng của nó.",
      "Người muốn chuyển hướng sang lĩnh vực khoa học dữ liệu.",
      "Nhà phân tích dữ liệu muốn học thêm về các kỹ thuật và công cụ khoa học dữ liệu.",
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
      nameLesson: "Giới thiệu về Khoa học Dữ liệu",
      duration: 6,
      detailLessons: [
        { nameDetailLesson: "Khoa học dữ liệu là gì?", duration: 2 },
        {
          nameDetailLesson: "Vai trò của nhà khoa học dữ liệu",
          duration: 2,
        },
        {
          nameDetailLesson: "Các ứng dụng thực tế của khoa học dữ liệu",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Cơ sở lý thuyết về Khoa học Dữ liệu",
      duration: 10,
      detailLessons: [
        {
          nameDetailLesson: "Các khái niệm cơ bản trong khoa học dữ liệu",
          duration: 2,
        },
        { nameDetailLesson: "Thống kê và xác suất", duration: 2 },
        { nameDetailLesson: "Phân tích dữ liệu thăm dò (EDA)", duration: 2 },
        { nameDetailLesson: "Trực quan hóa dữ liệu", duration: 2 },
        {
          nameDetailLesson: "Học máy cơ bản",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Ngôn ngữ lập trình Python cho Khoa học Dữ liệu",
      duration: 10,
      detailLessons: [
        {
          nameDetailLesson:
            "Giới thiệu về Python và các thư viện cho khoa học dữ liệu",
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
      nameLesson: "Khai phá dữ liệu (Data Mining)",
      duration: 16,
      detailLessons: [
        { nameDetailLesson: "Giới thiệu về khai phá dữ liệu", duration: 2 },
        { nameDetailLesson: "Các thuật toán phân cụm", duration: 2 },
        {
          nameDetailLesson: "Các thuật toán phân loại",
          duration: 2,
        },
        {
          nameDetailLesson: "Các thuật toán liên kết",
          duration: 2,
        },
        { nameDetailLesson: "Tiền xử lý dữ liệu", duration: 2 },
        { nameDetailLesson: "Đánh giá mô hình khai phá dữ liệu", duration: 2 },
        {
          nameDetailLesson: "Tối ưu hóa và tinh chỉnh mô hình",
          duration: 2,
        },
        {
          nameDetailLesson: "Ứng dụng thực tế của khai phá dữ liệu",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Học máy nâng cao",
      duration: 16,
      detailLessons: [
        {
          nameDetailLesson: "Các mô hình nâng cao trong Machine Learning",
          duration: 2,
        },
        {
          nameDetailLesson: "Học tăng cường (Reinforcement Learning)",
          duration: 2,
        },
        { nameDetailLesson: "Xử lý dữ liệu thiếu và ngoại lệ", duration: 2 },
        { nameDetailLesson: "Feature Engineering", duration: 2 },
        { nameDetailLesson: "Kỹ thuật Ensemble", duration: 2 },
        {
          nameDetailLesson: "Triển khai mô hình Machine Learning",
          duration: 2,
        },
        {
          nameDetailLesson: "Xử lý dữ liệu lớn với Machine Learning",
          duration: 2,
        },
        {
          nameDetailLesson: "Ứng dụng thực tế của Machine Learning nâng cao",
          duration: 2,
        },
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
      nameLesson: "Học sâu (Deep Learning)",
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
      nameLesson:
        "Dự án cuối khóa: Phân tích dữ liệu khách hàng và dự đoán hành vi",
      duration: 10,
      detailLessons: [
        { nameDetailLesson: "Lập kế hoạch và Phân tích yêu cầu", duration: 2 },
        { nameDetailLesson: "Thu thập và chuẩn bị dữ liệu", duration: 2 },
        { nameDetailLesson: "Phân tích và trực quan hóa dữ liệu", duration: 2 },
        {
          nameDetailLesson: "Xây dựng và triển khai mô hình dự đoán",
          duration: 2,
        },
        { nameDetailLesson: "Trình bày và báo cáo dự án", duration: 2 },
      ],
    },
  ],
};

export default courseDataScience;
