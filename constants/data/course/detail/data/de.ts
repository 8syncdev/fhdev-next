import { CourseDetailProps } from "@/server/course.type";

export const dataEngineeringDetail: CourseDetailProps["content"] = {
  name: "Khóa học Kỹ thuật Dữ liệu (Data Engineering) cho người mới bắt đầu",
  img_url: "", // Bỏ trống theo yêu cầu
  description:
    "Khóa học này cung cấp kiến thức cơ bản và nâng cao về kỹ thuật dữ liệu, giúp bạn xây dựng nền tảng vững chắc trong lĩnh vực Data Engineering.",
  price: 1700000,
  content_json: {
    about: {
      desc: "Khóa học Kỹ thuật Dữ liệu (Data Engineering) cho người mới bắt đầu, cung cấp kiến thức cơ bản và nâng cao giúp bạn xây dựng nền tảng vững chắc trong lĩnh vực Data Engineering.",
      title: "Kỹ thuật Dữ liệu cho người mới bắt đầu",
      points: [
        "Nắm vững kiến thức cơ bản và nâng cao về kỹ thuật dữ liệu và các công cụ phổ biến",
        "Phát triển kỹ năng lập trình Python và sử dụng các thư viện cho kỹ thuật dữ liệu",
        "Hiểu và áp dụng các kỹ thuật ETL và xử lý dữ liệu lớn",
        "Xây dựng và triển khai các hệ thống quản lý dữ liệu thực tế",
      ],
      journey: [
        "Giới thiệu về kỹ thuật dữ liệu",
        "Cơ sở dữ liệu và Kho dữ liệu",
        "Ngôn ngữ lập trình Python cho kỹ thuật dữ liệu",
        "ETL và ELT",
        "Kỹ thuật dữ liệu lớn",
        "Trực quan hóa dữ liệu",
      ],
      audience:
        "Lập trình viên, sinh viên CNTT, nhà phân tích dữ liệu muốn học thêm công cụ và kỹ thuật kỹ thuật dữ liệu",
      projects: [
        {
          desc: "Xây dựng hệ thống quản lý dữ liệu cho một công ty",
          name: "Dự án cuối khóa",
        },
      ],
    },
    skills: {
      list: [
        "Xây dựng hệ thống ETL và quản lý dữ liệu lớn",
        "Sử dụng các công cụ kỹ thuật dữ liệu phổ biến: Apache Kafka, Spark, Hadoop",
        "Trực quan hóa dữ liệu và tạo dashboard",
        "Tối ưu hóa và giám sát hệ thống quản lý dữ liệu",
      ],
      title: "Kỹ năng đạt được",
    },
    for_who: {
      list: [
        "Lập trình viên muốn nâng cao kỹ năng về kỹ thuật dữ liệu",
        "Sinh viên CNTT muốn học thêm về Data Engineering",
        "Người muốn chuyển hướng sang kỹ thuật dữ liệu",
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
          name: "68 giờ video HD",
        },
        {
          icon: "list-check",
          name: "25 bài học",
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
      lesson_count: 25,
      video_content: "68 giờ video HD",
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
      desc: "Khóa học phù hợp cho người mới bắt đầu trong lĩnh vực kỹ thuật dữ liệu.",
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
  duration: 68,
};

export const roadmapDataEngineeringDetail = [
  {
    id: 1,
    name: "Giới thiệu về Kỹ thuật Dữ liệu",
    description: "Tìm hiểu về khái niệm cơ bản và vai trò của kỹ thuật dữ liệu",
    lessons: {
      1: [
        { id: 1, name: "Kỹ thuật dữ liệu là gì?", duration: 2 },
        { id: 2, name: "Vai trò của kỹ sư dữ liệu", duration: 2 },
        {
          id: 3,
          name: "Các ứng dụng thực tế của kỹ thuật dữ liệu",
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
    name: "Cơ sở dữ liệu và Kho dữ liệu",
    description:
      "Nắm vững các khái niệm và phương pháp làm việc với cơ sở dữ liệu và kho dữ liệu",
    lessons: {
      1: [
        { id: 4, name: "Giới thiệu về cơ sở dữ liệu", duration: 2 },
        { id: 5, name: "SQL và NoSQL", duration: 2 },
        { id: 6, name: "Thiết kế cơ sở dữ liệu", duration: 2 },
        { id: 7, name: "Tối ưu hóa truy vấn", duration: 2 },
        { id: 8, name: "Kho dữ liệu và OLAP", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 10,
  },
  {
    id: 3,
    name: "Ngôn ngữ lập trình Python cho Kỹ thuật Dữ liệu",
    description:
      "Làm việc với Python và các thư viện phổ biến dành cho kỹ thuật dữ liệu",
    lessons: {
      1: [
        {
          id: 9,
          name: "Giới thiệu về Python và các thư viện cho kỹ thuật dữ liệu",
          duration: 2,
        },
        { id: 10, name: "Làm việc với NumPy và Pandas", duration: 2 },
        { id: 11, name: "Làm việc với SQLAlchemy", duration: 2 },
        { id: 12, name: "Xử lý dữ liệu với Dask", duration: 2 },
        {
          id: 13,
          name: "Sử dụng Airflow để quản lý luồng dữ liệu",
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
    name: "ETL và ELT",
    description:
      "Tìm hiểu về ETL/ELT và các công cụ, quy trình để thu thập và xử lý dữ liệu",
    lessons: {
      1: [
        { id: 14, name: "Khái niệm ETL và ELT", duration: 2 },
        { id: 15, name: "Thiết kế quy trình ETL", duration: 2 },
        { id: 16, name: "Công cụ ETL: Apache NiFi, Talend", duration: 2 },
        { id: 17, name: "Thực hành ETL với Python", duration: 2 },
        { id: 18, name: "Quản lý và giám sát quy trình ETL", duration: 2 },
        { id: 19, name: "Tối ưu hóa quy trình ETL", duration: 2 },
        { id: 20, name: "Xử lý dữ liệu thời gian thực với Kafka", duration: 2 },
        { id: 21, name: "Lưu trữ dữ liệu đã xử lý", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 16,
  },
  {
    id: 5,
    name: "Kỹ thuật Dữ liệu Lớn",
    description:
      "Học cách xử lý và quản lý dữ liệu lớn với các công cụ như Spark, Hadoop",
    lessons: {
      1: [
        { id: 22, name: "Giới thiệu về Dữ liệu Lớn", duration: 2 },
        { id: 23, name: "Hadoop và hệ sinh thái Hadoop", duration: 2 },
        { id: 24, name: "Spark: Lập trình và tối ưu hóa", duration: 2 },
        { id: 25, name: "Quản lý cụm dữ liệu với Kubernetes", duration: 2 },
        { id: 26, name: "Apache Kafka và xử lý luồng dữ liệu", duration: 2 },
        { id: 27, name: "Xử lý dữ liệu lớn với PySpark", duration: 2 },
        { id: 28, name: "Tích hợp dữ liệu từ nhiều nguồn", duration: 2 },
        {
          id: 29,
          name: "Ứng dụng thực tế của kỹ thuật dữ liệu lớn",
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
    name: "Lưu trữ và Quản lý Dữ liệu",
    description: "Học cách lưu trữ và quản lý dữ liệu trong các hệ thống lớn",
    lessons: {
      1: [
        { id: 30, name: "Các phương pháp lưu trữ dữ liệu", duration: 2 },
        { id: 31, name: "Data Lakes và Data Warehouses", duration: 2 },
        { id: 32, name: "Quản lý dữ liệu trong đám mây", duration: 2 },
        { id: 33, name: "Sao lưu và phục hồi dữ liệu", duration: 2 },
        { id: 34, name: "Quản lý bảo mật dữ liệu", duration: 2 },
        { id: 35, name: "Quản lý phiên bản dữ liệu", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 12,
  },
  {
    id: 7,
    name: "Kỹ năng Trực quan hóa Dữ liệu",
    description:
      "Học các kỹ thuật trực quan hóa dữ liệu để tạo báo cáo và dashboard",
    lessons: {
      1: [
        { id: 36, name: "Giới thiệu về trực quan hóa dữ liệu", duration: 2 },
        {
          id: 37,
          name: "Nguyên tắc và phương pháp trực quan hóa",
          duration: 2,
        },
        { id: 38, name: "Thiết kế biểu đồ hiệu quả", duration: 2 },
        { id: 39, name: "Tạo dashboard", duration: 2 },
        { id: 40, name: "Trực quan hóa tương tác", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 10,
  },
  {
    id: 8,
    name: "Ứng dụng Thực tế của Kỹ thuật Dữ liệu",
    description:
      "Tìm hiểu các ứng dụng thực tế của kỹ thuật dữ liệu trong nhiều lĩnh vực",
    lessons: {
      1: [
        { id: 41, name: "Kỹ thuật dữ liệu trong kinh doanh", duration: 2 },
        { id: 42, name: "Kỹ thuật dữ liệu trong y tế", duration: 2 },
        { id: 43, name: "Kỹ thuật dữ liệu trong tài chính", duration: 2 },
        { id: 44, name: "Kỹ thuật dữ liệu trong giáo dục", duration: 2 },
        { id: 45, name: "Kỹ thuật dữ liệu trong marketing", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 10,
  },
  {
    id: 9,
    name: "Dự án cuối khóa: Xây dựng hệ thống quản lý dữ liệu cho một công ty",
    description:
      "Thực hiện dự án cuối khóa về xây dựng hệ thống quản lý dữ liệu",
    lessons: {
      1: [
        { id: 46, name: "Lập kế hoạch và Phân tích yêu cầu", duration: 2 },
        { id: 47, name: "Thiết kế và xây dựng hệ thống ETL", duration: 2 },
        { id: 48, name: "Triển khai hệ thống quản lý dữ liệu", duration: 2 },
        { id: 49, name: "Giám sát và tối ưu hóa hệ thống", duration: 2 },
        { id: 50, name: "Trình bày và báo cáo dự án", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 10,
  },
];
