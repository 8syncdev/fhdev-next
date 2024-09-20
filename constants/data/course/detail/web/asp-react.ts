import { CourseDetailProps } from "@/server/course.type";

export const aspReactDetail: CourseDetailProps["content"] = {
  name: "LẬP TRÌNH DỰ ÁN THỰC CHIẾN",
  img_url: "", // Image URL left empty as per your instruction
  description:
    "Khóa học lập trình ASP.NET từ cơ bản đến nâng cao, trang bị cho bạn các kỹ năng thực chiến.",
  price: 15000000,
  content_json: {
    about: {
      desc: "Khóa học lập trình ASP.NET từ cơ bản đến nâng cao, trang bị cho bạn các kỹ năng thực chiến.",
      title: "ASP.NET & React Project-Based Learning",
      points: [
        "Hiểu rõ các khái niệm cơ bản và nâng cao về ASP.NET và React",
        "Phát triển kỹ năng lập trình frontend và backend",
        "Xây dựng và triển khai các ứng dụng web thực tế",
        "Áp dụng các phương pháp phát triển phần mềm hiện đại như Agile/Scrum",
      ],
      journey: [
        "Frontend Basics",
        "Frontend Intermediate",
        "ECMA Features & TypeScript",
        "ReactJS",
        "Backend .Net Core",
        "Web Master & Deployment",
        "Agile/Scrum - SDLC",
      ],
      audience:
        "Lập trình viên muốn nâng cao kỹ năng, sinh viên CNTT, người chuyển sang lập trình web",
      projects: [
        {
          desc: "Dự án thực tế với ASP.NET và React",
          name: "Dự án thực chiến",
        },
      ],
    },
    skills: {
      list: [
        "Phát triển ứng dụng web với ASP.NET",
        "Lập trình frontend với ReactJS",
        "Sử dụng SQL Server",
        "Áp dụng quy trình phát triển phần mềm với Agile/Scrum",
      ],
      title: "Kỹ năng đạt được",
    },
    for_who: {
      list: [
        "Lập trình viên muốn học ASP.NET và React",
        "Sinh viên CNTT muốn nâng cao kỹ năng lập trình web",
        "Người chuyển hướng sang lập trình web full-stack",
        "Lập trình viên muốn học thêm phát triển frontend và backend",
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
      lesson_count: 120,
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

export const roadmapAspReactDetail = [
  {
    id: 1,
    name: "Frontend Basic",
    description:
      "Tìm hiểu về HTML, CSS và các khái niệm cơ bản của lập trình web frontend",
    lessons: {
      1: [
        { id: 1, name: "Tổng quan về lập trình web", duration: 2 },
        { id: 2, name: "Giới thiệu về khóa học, lộ trình học", duration: 2 },
        { id: 3, name: "Làm quen một số thẻ trong HTML", duration: 2 },
        {
          id: 4,
          name: "Tìm hiểu HTML5 các thẻ hay sử dụng trong thực tế",
          duration: 2,
        },
        {
          id: 5,
          name: "Thực hành tạo một số component đơn giản với HTML",
          duration: 2,
        },
        {
          id: 6,
          name: "Các cách viết CSS trong dự án (Inline, Internal, External)",
          duration: 2,
        },
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
        { id: 7, name: "Cách khởi tạo biến trong JS", duration: 2 },
        { id: 8, name: "Datatypes", duration: 2 },
        { id: 9, name: "Toán tử trong JS", duration: 2 },
        { id: 10, name: "Comment trong JS", duration: 2 },
        { id: 11, name: "Tìm hiểu về scope trong JS", duration: 2 },
        {
          id: 12,
          name: "Cách sử dụng vòng lặp if-else, if-else lồng nhau",
          duration: 2,
        },
        {
          id: 13,
          name: "Sử dụng và phân biệt các vòng lặp for, while, do-while",
          duration: 2,
        },
        { id: 14, name: "Thực hành toán tử 3 ngôi", duration: 2 },
        { id: 15, name: "Tìm hiểu về Mảng trong JS và thực hành", duration: 2 },
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
          id: 16,
          name: "ES6 và một số tính năng trong ECMAScript",
          duration: 2,
        },
        { id: 17, name: "Tìm hiểu về TypeScript", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 4,
  },
  {
    id: 4,
    name: "ReactJS",
    description: "Làm quen với ReactJS, JSX và quản lý state",
    lessons: {
      1: [
        { id: 18, name: "Tổng quan về ReactJS", duration: 2 },
        { id: 19, name: "Xây dựng project ReactJS", duration: 2 },
        { id: 20, name: "Cấu trúc folder project", duration: 2 },
        {
          id: 21,
          name: "Hướng dẫn về JSX và sự khác nhau giữa JSX và HTML",
          duration: 2,
        },
        { id: 22, name: "Component là gì?", duration: 2 },
        { id: 23, name: "Props List rendering", duration: 2 },
        {
          id: 24,
          name: "Cách truyền dữ liệu từ component cha xuống component con",
          duration: 2,
        },
        { id: 25, name: "Validate props (sử dụng props type)", duration: 2 },
        { id: 26, name: "Default props", duration: 2 },
        { id: 27, name: "List rendering", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 22,
  },
  {
    id: 5,
    name: "Backend .Net Core",
    description: "Khám phá ASP.NET Core và các kỹ thuật backend",
    lessons: {
      1: [
        { id: 28, name: "Cài đặt môi trường phát triển", duration: 2 },
        { id: 29, name: "Tìm hiểu về ngôn ngữ C#", duration: 2 },
        { id: 30, name: "Tạo ứng dụng console", duration: 2 },
        { id: 31, name: "Cấu trúc của một Solution và Project", duration: 2 },
        { id: 32, name: "Viết ứng dụng console app đơn giản", duration: 2 },
        { id: 33, name: "Biến và kiểu dữ liệu trong C#", duration: 2 },
        { id: 34, name: "Toán tử trong C#", duration: 2 },
        { id: 35, name: "Hàm trong C#", duration: 2 },
        {
          id: 36,
          name: "Cấu trúc điều kiện và vòng lặp trong C#",
          duration: 2,
        },
        { id: 37, name: "Tìm hiểu về OOP và các khái niệm", duration: 2 },
        { id: 38, name: "Thực hành các khái niệm OOP trong C#", duration: 2 },
        { id: 39, name: "Làm việc với SQL Server", duration: 2 },
        { id: 40, name: "Tạo và quản lý database với SQL Server", duration: 2 },
        {
          id: 41,
          name: "Tìm hiểu và thực hành CRUD với SQL Server",
          duration: 2,
        },
        { id: 42, name: "Tạo các API với ASP.NET Core", duration: 2 },
        {
          id: 43,
          name: "Tích hợp Authentication và Authorization",
          duration: 2,
        },
        { id: 44, name: "Thực hành với JWT cho Authentication", duration: 2 },
        { id: 45, name: "Quản lý API với REST", duration: 2 },
        { id: 46, name: "Thực hành với Entity Framework", duration: 2 },
        { id: 47, name: "Tối ưu hóa API và bảo mật", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 64,
  },
  {
    id: 6,
    name: "Web Master & Deployment",
    description: "Hướng dẫn triển khai ứng dụng lên server và quản lý hệ thống",
    lessons: {
      1: [
        { id: 48, name: "Cài đặt IIS Webserver", duration: 2 },
        { id: 49, name: "Deploy ứng dụng lên IIS Webserver", duration: 2 },
        {
          id: 50,
          name: "Deploy ứng dụng với Docker và Docker Compose",
          duration: 2,
        },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 4,
  },
  {
    id: 7,
    name: "Agile/Scrum - SDLC",
    description: "Tìm hiểu về quy trình phát triển phần mềm và quản lý dự án",
    lessons: {
      1: [
        { id: 51, name: "Quy trình phát triển phần mềm", duration: 2 },
        { id: 52, name: "Giới thiệu về Agile/Scrum", duration: 2 },
        { id: 53, name: "Tìm hiểu về Jira và Trello", duration: 2 },
        { id: 54, name: "Áp dụng Agile/Scrum vào dự án thực tế", duration: 2 },
        { id: 55, name: "Phỏng vấn thử ứng viên", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 6,
  },
];
