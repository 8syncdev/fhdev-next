import { CourseDetailProps } from "@/server/course.type";

export const javaDetail: CourseDetailProps["content"] = {
  name: "Khóa học Java cơ bản cho người mới bắt đầu",
  img_url:
    "https://firebasestorage.googleapis.com/v0/b/nextjs-djninex-store.appspot.com/o/image-upload%2Fjava.webp?alt=media&token=37b67ebb-93ed-44e9-8676-a4ce25c63a8e",
  description:
    "Khóa học Java này dành cho những ai mới bắt đầu, giúp bạn nắm vững các khái niệm cơ bản và nâng cao của ngôn ngữ lập trình Java.",
  price: 750000,
  content_json: {
    about: {
      desc: "Khóa học này giúp bạn nắm vững các khái niệm cơ bản và nâng cao của ngôn ngữ lập trình Java, từ đó xây dựng nền tảng vững chắc trong lập trình.",
      title: "Khóa học Java cơ bản cho người mới bắt đầu",
      points: [
        "Hiểu rõ các khái niệm cơ bản và nâng cao của Java",
        "Phát triển kỹ năng lập trình hướng đối tượng với Java",
        "Nắm vững các thuật toán và cấu trúc dữ liệu cơ bản",
        "Áp dụng Java vào các dự án thực tế và xây dựng ứng dụng",
      ],
      journey: [
        "Giới thiệu về Java",
        "Cú pháp cơ bản",
        "Lập trình hướng đối tượng (OOP)",
        "Mảng và Chuỗi",
        "Xử lý ngoại lệ",
        "Làm việc với tập tin và I/O",
        "Cấu trúc dữ liệu và Thuật toán cơ bản",
        "Thư viện chuẩn Java",
        "Lập trình GUI với JavaFX",
      ],
      audience:
        "Người mới học lập trình, sinh viên CNTT, lập trình viên muốn học Java",
      projects: [
        {
          desc: "Xây dựng ứng dụng quản lý sinh viên",
          name: "Dự án cuối khóa",
        },
      ],
    },
    skills: {
      list: [
        "Lập trình hướng đối tượng với Java",
        "Sử dụng Java cho các dự án thực tế",
        "Xử lý ngoại lệ và debug",
        "Phát triển ứng dụng GUI",
        "Lập trình với JDBC và kết nối cơ sở dữ liệu",
        "Sử dụng thư viện chuẩn Java",
      ],
      title: "Kỹ năng đạt được",
    },
    for_who: {
      list: [
        "Người mới bắt đầu học lập trình",
        "Sinh viên CNTT",
        "Lập trình viên muốn học thêm Java",
        "Người muốn nâng cao kỹ năng lập trình Java",
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
          name: "100 giờ video HD",
        },
        {
          icon: "list-check",
          name: "20 bài học",
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
      lesson_count: 20,
      video_content: "100 giờ video HD",
    },
    highlights: {
      title: "Điểm nổi bật",
      points: [
        "Thiết kế bài bản, chi tiết",
        "Nội dung cập nhật theo xu hướng",
        "Hỗ trợ từ cộng đồng học viên và giảng viên",
      ],
    },
    beginner_friendly: {
      desc: "Khóa học dễ tiếp cận với người mới bắt đầu",
      title: "Thân thiện với người mới",
      details: [
        "Bắt đầu từ những kiến thức cơ bản nhất",
        "Lộ trình chi tiết và nhiều bài tập thực hành",
        "Giảng viên có kinh nghiệm",
      ],
      key_points: [
        "Phù hợp cho người mới bắt đầu",
        "Tiếp cận dễ hiểu",
        "Chú trọng thực hành",
      ],
    },
  },
  duration: 100,
};

export const roadmapJavaDetail = [
  {
    id: 1,
    name: "Giới thiệu về Java",
    description: "Tổng quan về ngôn ngữ lập trình Java và thiết lập môi trường",
    lessons: {
      1: [
        { id: 1, name: "Java là gì?", duration: 2 },
        { id: 2, name: "Lịch sử và các phiên bản của Java", duration: 2 },
        { id: 3, name: "Thiết lập môi trường phát triển", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 6,
  },
  {
    id: 2,
    name: "Cú pháp cơ bản",
    description: "Học về cú pháp cơ bản trong Java",
    lessons: {
      1: [
        { id: 4, name: "Biến và kiểu dữ liệu", duration: 2 },
        { id: 5, name: "Toán tử", duration: 2 },
        { id: 6, name: "Câu lệnh điều kiện: If, Switch", duration: 2 },
        { id: 7, name: "Vòng lặp: For, While, Do-While", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 8,
  },
  {
    id: 3,
    name: "Lập trình hướng đối tượng",
    description: "Tìm hiểu về lập trình hướng đối tượng trong Java",
    lessons: {
      1: [
        { id: 8, name: "Khái niệm cơ bản về OOP", duration: 2 },
        { id: 9, name: "Lớp và đối tượng", duration: 2 },
        { id: 10, name: "Phương thức và thuộc tính", duration: 2 },
        { id: 11, name: "Constructor và Destructor", duration: 2 },
        { id: 12, name: "Tính kế thừa", duration: 2 },
        { id: 13, name: "Tính đa hình", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 12,
  },
  {
    id: 4,
    name: "Mảng và Chuỗi",
    description: "Học cách làm việc với mảng và chuỗi trong Java",
    lessons: {
      1: [
        { id: 14, name: "Giới thiệu về Mảng", duration: 2 },
        { id: 15, name: "Các thao tác cơ bản trên Mảng", duration: 2 },
        {
          id: 16,
          name: "Chuỗi trong Java: Khái niệm và các phương thức",
          duration: 2,
        },
        { id: 17, name: "Mảng đa chiều", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 8,
  },
  {
    id: 5,
    name: "Xử lý ngoại lệ",
    description: "Tìm hiểu về cách xử lý ngoại lệ trong Java",
    lessons: {
      1: [
        { id: 18, name: "Giới thiệu về ngoại lệ", duration: 2 },
        {
          id: 19,
          name: "Cách xử lý ngoại lệ: try, catch, finally",
          duration: 2,
        },
        { id: 20, name: "Tạo và ném ngoại lệ tùy chỉnh", duration: 2 },
        { id: 21, name: "Ứng dụng xử lý ngoại lệ trong thực tế", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 8,
  },
  {
    id: 6,
    name: "Làm việc với tập tin và I/O",
    description: "Học cách xử lý tập tin và I/O trong Java",
    lessons: {
      1: [
        { id: 22, name: "Giới thiệu về I/O trong Java", duration: 2 },
        { id: 23, name: "Đọc và ghi tập tin văn bản", duration: 2 },
        { id: 24, name: "Đọc và ghi tập tin nhị phân", duration: 2 },
        { id: 25, name: "Xử lý luồng đầu vào/đầu ra", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 8,
  },
  {
    id: 7,
    name: "Thuật toán và Cấu trúc dữ liệu cơ bản",
    description: "Tìm hiểu về các thuật toán và cấu trúc dữ liệu trong Java",
    lessons: {
      1: [
        { id: 26, name: "Giới thiệu về cấu trúc dữ liệu", duration: 2 },
        { id: 27, name: "Danh sách, Ngăn xếp và Hàng đợi", duration: 2 },
        { id: 28, name: "Các thuật toán tìm kiếm cơ bản", duration: 2 },
        { id: 29, name: "Các thuật toán sắp xếp cơ bản", duration: 2 },
        {
          id: 30,
          name: "Ứng dụng cấu trúc dữ liệu và thuật toán trong Java",
          duration: 2,
        },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 10,
  },
  {
    id: 8,
    name: "Thư viện chuẩn Java",
    description: "Học cách sử dụng thư viện chuẩn của Java",
    lessons: {
      1: [
        { id: 31, name: "Giới thiệu về thư viện chuẩn", duration: 2 },
        { id: 32, name: "Các lớp phổ biến trong thư viện chuẩn", duration: 2 },
        { id: 33, name: "Làm việc với API Java Collections", duration: 2 },
        { id: 34, name: "Sử dụng các tiện ích từ thư viện chuẩn", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 8,
  },
  {
    id: 9,
    name: "Lập trình GUI cơ bản với JavaFX",
    description: "Xây dựng ứng dụng GUI cơ bản với JavaFX",
    lessons: {
      1: [
        { id: 35, name: "Giới thiệu về JavaFX", duration: 2 },
        {
          id: 36,
          name: "Cấu trúc cơ bản của một ứng dụng JavaFX",
          duration: 2,
        },
        { id: 37, name: "Tạo giao diện người dùng cơ bản", duration: 2 },
        { id: 38, name: "Xử lý sự kiện trong JavaFX", duration: 2 },
        { id: 39, name: "Xây dựng ứng dụng GUI cơ bản", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 10,
  },
  {
    id: 10,
    name: "Dự án cuối khóa: Xây dựng ứng dụng quản lý sinh viên",
    description: "Thực hiện dự án xây dựng ứng dụng quản lý sinh viên",
    lessons: {
      1: [
        { id: 40, name: "Phân tích và thiết kế dự án", duration: 2 },
        { id: 41, name: "Thiết kế cơ sở dữ liệu", duration: 2 },
        { id: 42, name: "Xây dựng các lớp và phương thức", duration: 2 },
        { id: 43, name: "Xây dựng giao diện người dùng", duration: 2 },
        { id: 44, name: "Kết nối cơ sở dữ liệu và xử lý dữ liệu", duration: 2 },
        { id: 45, name: "Kiểm thử và hoàn thiện dự án", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 12,
  },
];
