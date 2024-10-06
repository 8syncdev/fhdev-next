import { urlImageCourse } from "../../firebase";
import { ConstCourseType } from "../type";

const courseDataEngineering: ConstCourseType = {
  // Use to filter course
  rating: 4.7,
  originalPrice: 5500000,
  price: 2500000,
  duration: 68, // Thời lượng đã được cập nhật
  language: ["python"],
  slug: "course-data-engineering",
  imgSrc: urlImageCourse['python'],
  category: "data",
  // Course detail
  nameCourse:
    "Khóa học Kỹ thuật Dữ liệu (Data Engineering) cho người mới bắt đầu",
  description:
    "Khóa học này cung cấp kiến thức cơ bản và nâng cao về kỹ thuật dữ liệu, giúp bạn xây dựng nền tảng vững chắc trong lĩnh vực Data Engineering.",
  tags: ["Data Engineering", "ETL", "Data Pipeline"],
  newest: true,
  popular: true,
  trending: true,
  content: {
    intro:
      "Khóa học Kỹ thuật Dữ liệu (Data Engineering) cho người mới bắt đầu, cung cấp kiến thức cơ bản và nâng cao giúp bạn xây dựng nền tảng vững chắc trong lĩnh vực Data Engineering.",
    purposes: [
      "Nắm vững kiến thức cơ bản và nâng cao về kỹ thuật dữ liệu và các công cụ phổ biến.",
      "Phát triển kỹ năng lập trình Python và sử dụng các thư viện cho kỹ thuật dữ liệu.",
      "Hiểu và áp dụng các kỹ thuật ETL và xử lý dữ liệu lớn.",
      "Xây dựng và triển khai các hệ thống quản lý dữ liệu thực tế.",
    ],
    results: [
      "Có khả năng thu thập, xử lý và quản lý dữ liệu từ nhiều nguồn khác nhau.",
      "Hiểu và áp dụng các kỹ thuật ETL và quản lý dữ liệu lớn.",
      "Phát triển kỹ năng làm việc nhóm và quản lý dự án kỹ thuật dữ liệu.",
      "Tự tin triển khai và quản lý các dự án kỹ thuật dữ liệu thực tế.",
    ],
    orientedUsers: [
      "Lập trình viên muốn nâng cao kỹ năng và kiến thức về kỹ thuật dữ liệu.",
      "Sinh viên ngành Công nghệ Thông tin muốn nắm vững kỹ thuật dữ liệu và các ứng dụng của nó.",
      "Người muốn chuyển hướng sang lĩnh vực kỹ thuật dữ liệu.",
      "Nhà phân tích dữ liệu muốn học thêm về các kỹ thuật và công cụ kỹ thuật dữ liệu.",
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
      nameLesson: "Giới thiệu về Kỹ thuật Dữ liệu",
      duration: 6,
      detailLessons: [
        { nameDetailLesson: "Kỹ thuật dữ liệu là gì?", duration: 2 },
        {
          nameDetailLesson: "Vai trò của kỹ sư dữ liệu",
          duration: 2,
        },
        {
          nameDetailLesson: "Các ứng dụng thực tế của kỹ thuật dữ liệu",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Cơ sở dữ liệu và Kho dữ liệu",
      duration: 10,
      detailLessons: [
        { nameDetailLesson: "Giới thiệu về cơ sở dữ liệu", duration: 2 },
        { nameDetailLesson: "SQL và NoSQL", duration: 2 },
        { nameDetailLesson: "Thiết kế cơ sở dữ liệu", duration: 2 },
        { nameDetailLesson: "Tối ưu hóa truy vấn", duration: 2 },
        {
          nameDetailLesson: "Kho dữ liệu và OLAP",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Ngôn ngữ lập trình Python cho Kỹ thuật Dữ liệu",
      duration: 10,
      detailLessons: [
        {
          nameDetailLesson:
            "Giới thiệu về Python và các thư viện cho kỹ thuật dữ liệu",
          duration: 2,
        },
        { nameDetailLesson: "Làm việc với NumPy và Pandas", duration: 2 },
        { nameDetailLesson: "Làm việc với SQLAlchemy", duration: 2 },
        { nameDetailLesson: "Xử lý dữ liệu với Dask", duration: 2 },
        {
          nameDetailLesson: "Sử dụng Airflow để quản lý luồng dữ liệu",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "ETL và ELT",
      duration: 16,
      detailLessons: [
        { nameDetailLesson: "Khái niệm ETL và ELT", duration: 2 },
        { nameDetailLesson: "Thiết kế quy trình ETL", duration: 2 },
        {
          nameDetailLesson: "Công cụ ETL: Apache NiFi, Talend",
          duration: 2,
        },
        {
          nameDetailLesson: "Thực hành ETL với Python",
          duration: 2,
        },
        { nameDetailLesson: "Quản lý và giám sát quy trình ETL", duration: 2 },
        { nameDetailLesson: "Tối ưu hóa quy trình ETL", duration: 2 },
        {
          nameDetailLesson: "Xử lý dữ liệu thời gian thực với Kafka",
          duration: 2,
        },
        {
          nameDetailLesson: "Lưu trữ dữ liệu đã xử lý",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Kỹ thuật Dữ liệu Lớn",
      duration: 16,
      detailLessons: [
        { nameDetailLesson: "Giới thiệu về Dữ liệu Lớn", duration: 2 },
        { nameDetailLesson: "Hadoop và hệ sinh thái Hadoop", duration: 2 },
        { nameDetailLesson: "Spark: Lập trình và tối ưu hóa", duration: 2 },
        { nameDetailLesson: "Quản lý cụm dữ liệu với Kubernetes", duration: 2 },
        {
          nameDetailLesson: "Apache Kafka và xử lý luồng dữ liệu",
          duration: 2,
        },
        { nameDetailLesson: "Xử lý dữ liệu lớn với PySpark", duration: 2 },
        { nameDetailLesson: "Tích hợp dữ liệu từ nhiều nguồn", duration: 2 },
        {
          nameDetailLesson: "Ứng dụng thực tế của kỹ thuật dữ liệu lớn",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Lưu trữ và Quản lý Dữ liệu",
      duration: 12,
      detailLessons: [
        { nameDetailLesson: "Các phương pháp lưu trữ dữ liệu", duration: 2 },
        { nameDetailLesson: "Data Lakes và Data Warehouses", duration: 2 },
        {
          nameDetailLesson: "Quản lý dữ liệu trong đám mây",
          duration: 2,
        },
        { nameDetailLesson: "Sao lưu và phục hồi dữ liệu", duration: 2 },
        { nameDetailLesson: "Quản lý bảo mật dữ liệu", duration: 2 },
        {
          nameDetailLesson: "Quản lý phiên bản dữ liệu",
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
      nameLesson: "Ứng dụng Thực tế của Kỹ thuật Dữ liệu",
      duration: 10,
      detailLessons: [
        {
          nameDetailLesson: "Kỹ thuật dữ liệu trong kinh doanh",
          duration: 2,
        },
        { nameDetailLesson: "Kỹ thuật dữ liệu trong y tế", duration: 2 },
        { nameDetailLesson: "Kỹ thuật dữ liệu trong tài chính", duration: 2 },
        { nameDetailLesson: "Kỹ thuật dữ liệu trong giáo dục", duration: 2 },
        {
          nameDetailLesson: "Kỹ thuật dữ liệu trong marketing",
          duration: 2,
        },
      ],
    },
    {
      nameLesson:
        "Dự án cuối khóa: Xây dựng hệ thống quản lý dữ liệu cho một công ty",
      duration: 10,
      detailLessons: [
        { nameDetailLesson: "Lập kế hoạch và Phân tích yêu cầu", duration: 2 },
        { nameDetailLesson: "Thiết kế và xây dựng hệ thống ETL", duration: 2 },
        {
          nameDetailLesson: "Triển khai hệ thống quản lý dữ liệu",
          duration: 2,
        },
        { nameDetailLesson: "Giám sát và tối ưu hóa hệ thống", duration: 2 },
        { nameDetailLesson: "Trình bày và báo cáo dự án", duration: 2 },
      ],
    },
  ],
};

export default courseDataEngineering;
