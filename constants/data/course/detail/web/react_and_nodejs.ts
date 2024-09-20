import { CourseDetailProps } from "@/server/course.type";

export const nodeReactDetail: CourseDetailProps["content"] = {
  name: "LẬP TRÌNH DỰ ÁN THỰC CHIẾN TECH-STACK NODEJS & MERN",
  img_url:
    "https://firebasestorage.googleapis.com/v0/b/nextjs-djninex-store.appspot.com/o/image-upload%2Fnodejs.webp?alt=media&token=927edbca-3291-4e75-a82c-d2032750bccc",
  description:
    "Khóa học lập trình NodeJS và MERN từ cơ bản đến nâng cao, trang bị cho bạn các kỹ năng thực chiến.",
  price: 1500000,
  content_json: {
    about: {
      desc: "Khóa học lập trình NodeJS và MERN từ cơ bản đến nâng cao, trang bị cho bạn các kỹ năng thực chiến.",
      title: "NodeJS & MERN Tech-Stack",
      points: [
        "Nắm vững kiến thức cơ bản và nâng cao về lập trình NodeJS và các framework phổ biến trong MERN stack",
        "Phát triển kỹ năng lập trình full-stack với MongoDB, Express, React, và NodeJS",
        "Hiểu và áp dụng quy trình phát triển phần mềm Agile/Scrum trong dự án thực tế",
        "Xây dựng các ứng dụng web hoàn chỉnh và triển khai chúng lên các server",
      ],
      journey: [
        "Frontend Basics",
        "Frontend Intermediate",
        "ECMA Features & TypeScript",
        "ReactJS",
        "Cơ sở dữ liệu & Phân tích thiết kế hệ thống",
        "NodeJS & Express",
        "Xây dựng ứng dụng MERN stack",
        "Web Master + Docker",
        "Agile/Scrum",
      ],
      audience:
        "Lập trình viên muốn nâng cao kỹ năng về NodeJS và các framework liên quan, sinh viên CNTT, người chuyển sang lập trình full-stack",
      projects: [
        {
          desc: "Dự án cuối khóa với MERN Stack",
          name: "Dự án thực chiến",
        },
      ],
    },
    skills: {
      list: [
        "Phát triển ứng dụng full-stack với MERN",
        "Phát triển web frontend với ReactJS",
        "Lập trình backend với NodeJS và Express",
        "Quản lý dự án với Agile/Scrum",
        "Bảo mật và tối ưu hóa ứng dụng",
      ],
      title: "Kỹ năng đạt được",
    },
    for_who: {
      list: [
        "Lập trình viên muốn học NodeJS và các framework liên quan",
        "Sinh viên CNTT muốn nắm vững lập trình full-stack",
        "Người chuyển sang lập trình web full-stack",
        "Lập trình viên muốn học thêm frontend và backend",
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
          name: "195 giờ học tập",
        },
        {
          icon: "list-check",
          name: "Chi tiết và cập nhật liên tục",
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
      lesson_count: 100,
      video_content: "195 giờ học tập",
    },
    highlights: {
      title: "Điểm nổi bật",
      points: [
        "Thực hành dự án thực tế",
        "Nội dung cập nhật theo xu hướng",
        "Tập trung kỹ năng thực chiến",
      ],
    },
    beginner_friendly: {
      desc: "Không cần kiến thức nền",
      title: "Thân thiện với người mới",
      details: [
        "Bắt đầu từ cơ bản đến nâng cao",
        "Nhiều bài tập thực hành và dự án",
        "Học theo tốc độ của riêng bạn",
      ],
      key_points: [
        "Phù hợp với người mới",
        "Nội dung dễ hiểu",
        "Tập trung thực hành",
      ],
    },
  },
  duration: 195,
};

export const roadmapNodeReactDetail = [
  {
    id: 1,
    name: "Frontend Basic",
    description:
      "Tìm hiểu về HTML, CSS và các khái niệm cơ bản của lập trình web frontend",
    lessons: {
      1: [
        { id: 1, name: "Tổng quan giới thiệu về lập trình web", duration: 1 },
        { id: 2, name: "Giới thiệu về khóa học lộ trình", duration: 1 },
        { id: 3, name: "Giới thiệu git github và lệnh cơ bản", duration: 1 },
        { id: 4, name: "Giới thiệu và làm quen với HTML", duration: 1 },
        { id: 5, name: "HTML tags Basic CSS", duration: 1 },
        { id: 6, name: "Giới thiệu về Box Model và Position", duration: 1 },
        { id: 7, name: "Display property và cách bố cục website", duration: 1 },
        { id: 8, name: "Giới thiệu Responsive Design", duration: 1 },
        { id: 9, name: "Phân biệt inline, block, inline-block", duration: 1 },
        { id: 10, name: "Thực hành Responsive với CSS", duration: 1 },
        { id: 11, name: "Deploy lên GitHub", duration: 1 },
        { id: 12, name: "Kiểm tra cuối module", duration: 1 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 12,
  },
  {
    id: 2,
    name: "Frontend Intermediate",
    description:
      "Khám phá các tính năng trung cấp của JavaScript, DOM và sự kiện",
    lessons: {
      1: [
        { id: 13, name: "Cách khai báo biến trong JS", duration: 1 },
        { id: 14, name: "Datatypes và toán tử trong JS", duration: 1 },
        { id: 15, name: "Các vòng lặp và điều kiện", duration: 1 },
        { id: 16, name: "Array và Object trong JS", duration: 1 },
        { id: 17, name: "Duyệt mảng và object", duration: 1 },
        { id: 18, name: "Function trong JavaScript", duration: 1 },
        { id: 19, name: "DOM và Event Handling", duration: 1 },
        {
          id: 20,
          name: "Xử lý bất đồng bộ với Promise và Async/Await",
          duration: 1,
        },
        { id: 21, name: "Local storage session storage cookie", duration: 1 },
        { id: 22, name: "Tìm hiểu về Event loop", duration: 1 },
        { id: 23, name: "Thực hành CRUD với JS", duration: 1 },
        { id: 24, name: "Tìm hiểu về API và mock API", duration: 1 },
        { id: 25, name: "Deploy project", duration: 1 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 18,
  },
  {
    id: 3,
    name: "ECMA Features & TypeScript",
    description: "Nâng cao kiến thức với ES6+ và TypeScript",
    lessons: {
      1: [
        {
          id: 26,
          name: "Tìm hiểu và thực hành các chức năng trong ES6",
          duration: 1,
        },
        { id: 27, name: "Nullish operator và optional chaining", duration: 1 },
        { id: 28, name: "TypeScript và Type Annotations", duration: 1 },
        { id: 29, name: "Interfaces và Type Aliases", duration: 1 },
        { id: 30, name: "Generics và cách sử dụng", duration: 1 },
        { id: 31, name: "Modules và namespaces trong TypeScript", duration: 1 },
        { id: 32, name: "Sử dụng TypeScript Compiler", duration: 1 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 6,
  },
  {
    id: 4,
    name: "ReactJS",
    description: "Làm quen với ReactJS, JSX và state management",
    lessons: {
      1: [
        { id: 33, name: "Tổng quan về ReactJS", duration: 1 },
        { id: 34, name: "Cấu trúc folder project với CRA", duration: 1 },
        { id: 35, name: "Tìm hiểu về JSX", duration: 1 },
        { id: 36, name: "Component và Props", duration: 1 },
        { id: 37, name: "State và Props", duration: 1 },
        { id: 38, name: "Event Handling trong React", duration: 1 },
        { id: 39, name: "Sử dụng Router", duration: 1 },
        { id: 40, name: "Form Handling và Validation với Formik", duration: 1 },
        { id: 41, name: "Thực hành làm form đăng nhập", duration: 1 },
        { id: 42, name: "Giới thiệu về life cycle", duration: 1 },
        { id: 43, name: "Sử dụng useEffect và useState", duration: 1 },
        { id: 44, name: "Quản lý state với Redux", duration: 1 },
        { id: 45, name: "Thực hành với project blog", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 24,
  },
  {
    id: 5,
    name: "Cơ sở dữ liệu & Phân tích thiết kế hệ thống",
    description: "Tìm hiểu về MongoDB, thiết kế CSDL và bảo mật",
    lessons: {
      1: [
        { id: 46, name: "NoSQL và MongoDB", duration: 1 },
        { id: 47, name: "Insert, find, update, delete", duration: 1 },
        { id: 48, name: "Thiết kế database cho dự án MERN", duration: 1 },
        { id: 49, name: "Indexing và bảo mật trong MongoDB", duration: 1 },
        { id: 50, name: "Test thực hành thiết kế CSDL", duration: 1 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 18,
  },
  {
    id: 6,
    name: "NodeJS & Express",
    description: "Khám phá NodeJS và xây dựng ứng dụng web với Express",
    lessons: {
      1: [
        { id: 51, name: "NodeJS là gì?", duration: 1 },
        { id: 52, name: "Tạo ứng dụng NodeJS", duration: 1 },
        { id: 53, name: "Express và xây dựng ứng dụng web", duration: 1 },
        { id: 54, name: "Route Controller Service View", duration: 1 },
        { id: 55, name: "Sử dụng JWT cho Authentication", duration: 1 },
        { id: 56, name: "Kết nối MongoDB với Express", duration: 1 },
        { id: 57, name: "Middleware và xử lý request", duration: 1 },
        { id: 58, name: "Thực hành đăng ký đăng nhập với JWT", duration: 1 },
        { id: 59, name: "Deploy NodeJS project", duration: 1 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 18,
  },
  {
    id: 7,
    name: "Xây dựng ứng dụng MERN stack",
    description:
      "Xây dựng ứng dụng MERN stack với các chức năng quản lý người dùng, thi trực tuyến, bảo mật",
    lessons: {
      1: [
        { id: 60, name: "Xây dựng ứng dụng MERN", duration: 1 },
        { id: 61, name: "Quản lý người dùng", duration: 1 },
        { id: 62, name: "Giao diện thi trực tuyến", duration: 1 },
        { id: 63, name: "Tích hợp hệ thống chấm điểm tự động", duration: 1 },
        { id: 64, name: "Bảo mật và giám sát trực tuyến", duration: 1 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 24,
  },
  {
    id: 8,
    name: "Web Master + Docker",
    description: "Tìm hiểu và sử dụng Docker",
    lessons: {
      1: [
        { id: 65, name: "Cài đặt và sử dụng Docker", duration: 1 },
        { id: 66, name: "Docker Image và Container", duration: 1 },
        { id: 67, name: "Docker Compose và Docker Hub", duration: 1 },
        { id: 68, name: "Docker Security", duration: 1 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 4,
  },
  {
    id: 9,
    name: "Agile/Scrum (Software Development Life Cycle)",
    description: "Tìm hiểu về Agile/Scrum và quy trình phát triển phần mềm",
    lessons: {
      1: [
        { id: 69, name: "Quy trình phát triển phần mềm", duration: 1 },
        { id: 70, name: "Giới thiệu về Agile/Scrum", duration: 1 },
        { id: 71, name: "Tìm hiểu về Jira và Trello", duration: 1 },
        { id: 72, name: "Estimate task theo chuẩn", duration: 1 },
        { id: 73, name: "Phỏng vấn thử ứng viên", duration: 1 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 6,
  },
];
