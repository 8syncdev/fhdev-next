import { CourseDetailProps } from "@/server/course.type";

export const springReactDetail: CourseDetailProps["content"] = {
  name: "LẬP TRÌNH DỰ ÁN THỰC CHIẾN TECH-STACK JAVA",
  img_url: "", // Omitted as per request
  description:
    "Khóa học lập trình Java từ cơ bản đến nâng cao, trang bị cho bạn các kỹ năng thực chiến.",
  price: 15000000,
  content_json: {
    about: {
      desc: "Khóa học lập trình Java từ cơ bản đến nâng cao, trang bị cho bạn các kỹ năng thực chiến.",
      title: "LẬP TRÌNH DỰ ÁN THỰC CHIẾN TECH-STACK JAVA",
      points: [
        "Nắm vững kiến thức cơ bản và nâng cao về lập trình Java và các framework phổ biến.",
        "Phát triển kỹ năng lập trình full-stack với Java, Spring, Hibernate và ReactJS.",
        "Hiểu và áp dụng quy trình phát triển phần mềm Agile/Scrum trong dự án thực tế.",
        "Xây dựng các ứng dụng web hoàn chỉnh và triển khai chúng lên các server.",
      ],
      journey: [
        "Lập trình Java cơ bản và nâng cao",
        "Full-stack phát triển với Java, ReactJS",
        "Spring, Hibernate",
        "Agile/Scrum",
        "Phát triển ứng dụng web",
        "Quản lý dự án thực tế",
      ],
      audience:
        "Lập trình viên, sinh viên ngành CNTT, người muốn chuyển hướng lập trình web full-stack.",
      projects: [
        {
          desc: "Xây dựng ứng dụng quản lý sinh viên với frontend và backend",
          name: "Quản lý sinh viên",
        },
        {
          desc: "Xây dựng hệ thống quản lý thư viện dùng REST API và JDBC",
          name: "Quản lý thư viện",
        },
        {
          desc: "Phát triển ứng dụng Ecommerce CRM tích hợp API",
          name: "Ecommerce CRM",
        },
      ],
    },
    skills: {
      list: [
        "Lập trình full-stack với Java và ReactJS",
        "Xây dựng ứng dụng web với Spring, Hibernate",
        "Quản lý dự án với Agile/Scrum",
        "Tích hợp API và bảo mật web",
        "Sử dụng Docker và CI/CD",
      ],
      title: "Kỹ năng đạt được",
    },
    for_who: {
      list: [
        "Lập trình viên muốn nâng cao kỹ năng với Java",
        "Sinh viên CNTT muốn học lập trình full-stack",
        "Người muốn chuyển sang lập trình web full-stack",
        "Người muốn học về ReactJS, Spring, và Hibernate",
      ],
      title: "Đối tượng phù hợp",
    },
    overview: {
      level: "Từ cơ bản đến nâng cao",
      features: [
        {
          icon: "play-circle-fill",
          name: "195 giờ học",
        },
        {
          icon: "list-check",
          name: "Hàng trăm bài học từ cơ bản đến nâng cao",
        },
        {
          icon: "code-square",
          name: "Bài tập thực hành liên tục",
        },
        {
          icon: "infinity",
          name: "Truy cập trọn đời",
        },
        {
          icon: "cloud-arrow-down",
          name: "Tài liệu có thể tải về",
        },
      ],
      lesson_count: 100,
      video_content: "195 giờ video học",
    },
    highlights: {
      title: "Điểm nổi bật",
      points: [
        "Ứng dụng thực tế",
        "Lộ trình rõ ràng",
        "Giảng viên giàu kinh nghiệm",
      ],
    },
    beginner_friendly: {
      desc: "Không cần kiến thức nền tảng về Java, phù hợp với cả người mới bắt đầu",
      title: "Thân thiện với người mới",
      details: [
        "Bắt đầu từ những kiến thức cơ bản",
        "Có lộ trình học chi tiết và dễ hiểu",
        "Nhiều bài tập thực hành giúp nắm vững kiến thức",
      ],
      key_points: [
        "Phù hợp người mới bắt đầu",
        "Giải thích dễ hiểu và rõ ràng",
        "Chú trọng thực hành",
      ],
    },
  },
  duration: 195,
};

export const roadmapSpringReactDetail = [
  {
    id: 1,
    name: "Module 1: FE Basic",
    description:
      "Tổng quan về lập trình web và các thành phần cơ bản của HTML và CSS.",
    lessons: {
      1: [
        { id: 1, name: "Tổng quan về lập trình web", duration: 1 },
        { id: 2, name: "Giới thiệu về khóa học, lộ trình học", duration: 1 },
        { id: 3, name: "Làm quen một số thẻ trong HTML", duration: 1 },
        {
          id: 4,
          name: "Tìm hiểu HTML5 và các thẻ hay dùng trong thực tế",
          duration: 1,
        },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 12,
  },
  {
    id: 2,
    name: "Module 2: FE Intermediate",
    description:
      "Học các khái niệm trung cấp về Javascript và áp dụng chúng vào dự án thực tế.",
    lessons: {
      1: [
        { id: 5, name: "Cách khởi tạo biến trong JS", duration: 1 },
        { id: 6, name: "Datatypes trong JS", duration: 1 },
        { id: 7, name: "Toán tử trong JS", duration: 1 },
        { id: 8, name: "Comment trong JS", duration: 1 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 18,
  },
  {
    id: 3,
    name: "Module 3: ECMA Features & TypeScript",
    description:
      "Tìm hiểu các tính năng ECMAScript và TypeScript cho phát triển dự án lớn.",
    lessons: {
      1: [
        { id: 9, name: "ES6 và các tính năng quan trọng", duration: 1 },
        { id: 10, name: "TypeScript cơ bản", duration: 1 },
        { id: 11, name: "OOP trong TypeScript", duration: 1 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 4,
  },
  {
    id: 4,
    name: "Module 4: ReactJS",
    description: "Học cách phát triển ứng dụng ReactJS từ cơ bản đến nâng cao.",
    lessons: {
      1: [
        { id: 12, name: "Tổng quan về ReactJS", duration: 2 },
        { id: 13, name: "Xây dựng project ReactJS", duration: 2 },
        { id: 14, name: "Cấu trúc folder project", duration: 2 },
        {
          id: 15,
          name: "Hướng dẫn về JSX và sự khác nhau với HTML",
          duration: 2,
        },
        { id: 16, name: "Component là gì?", duration: 2 },
        { id: 17, name: "Props cơ bản và List rendering", duration: 2 },
        {
          id: 18,
          name: "Truyền dữ liệu giữa component cha và con",
          duration: 2,
        },
        { id: 19, name: "State và Event trong ReactJS", duration: 2 },
        {
          id: 20,
          name: "Cách sử dụng hook useEffect và useState",
          duration: 2,
        },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 24,
  },
  {
    id: 5,
    name: "Module 5: Backend Java",
    description: "Phát triển backend với Java và các công cụ hỗ trợ.",
    lessons: {
      1: [
        { id: 21, name: "Tổng quan về ngôn ngữ Java", duration: 2 },
        { id: 22, name: "Cài đặt môi trường Java", duration: 2 },
        { id: 23, name: "Giới thiệu JVM, JRE, JDK", duration: 2 },
        { id: 24, name: "Lập trình cơ bản với Java", duration: 2 },
        { id: 25, name: "String và xử lý chuỗi trong Java", duration: 2 },
        { id: 26, name: "OOP trong Java", duration: 2 },
        { id: 27, name: "Làm việc với cơ sở dữ liệu MySQL", duration: 2 },
        { id: 28, name: "Giới thiệu về Spring Framework", duration: 2 },
        { id: 29, name: "Xây dựng API RESTful với Spring Boot", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 64,
  },
  {
    id: 6,
    name: "Module 6: Web Master và Deployment",
    description:
      "Học cách triển khai và quản lý hệ thống web trong môi trường thực tế.",
    lessons: {
      1: [
        {
          id: 30,
          name: "Làm quen với web server Apache và Nginx",
          duration: 2,
        },
        { id: 31, name: "Làm quen với container (Tomcat)", duration: 2 },
        { id: 32, name: "Deploy hệ thống", duration: 2 },
        { id: 33, name: "LoadBalancer và Reverse Proxy", duration: 2 },
        { id: 34, name: "Sử dụng Docker và Docker Compose", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 4,
  },
  {
    id: 7,
    name: "Module 7: Agile/Scrum - Software Development Life Cycle",
    description: "Tìm hiểu về quy trình phát triển phần mềm với Agile/Scrum.",
    lessons: {
      1: [
        {
          id: 35,
          name: "Giới thiệu về quy trình phát triển phần mềm",
          duration: 2,
        },
        { id: 36, name: "Các mô hình phát triển phần mềm", duration: 2 },
        { id: 37, name: "Agile/Scrum là gì?", duration: 2 },
        { id: 38, name: "Tìm hiểu về Jira và Trello", duration: 2 },
        { id: 39, name: "Áp dụng Agile/Scrum vào dự án thực tế", duration: 2 },
        { id: 40, name: "Software Development Life Cycle (SDLC)", duration: 2 },
        { id: 41, name: "Các vấn đề trong quản lý dự án", duration: 2 },
        { id: 42, name: "Cách estimate task", duration: 2 },
        { id: 43, name: "Phỏng vấn thử ứng viên", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 6,
  },
];
