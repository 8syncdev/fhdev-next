import { CourseDetailProps } from "@/server/course.type";

export const djangoDRFDetail: CourseDetailProps["content"] = {
  name: "Django + DRF",
  img_url:
    "https://firebasestorage.googleapis.com/v0/b/nextjs-djninex-store.appspot.com/o/image-upload%2Fdjango.webp?alt=media&token=cc3432f6-3f26-4ce5-bdd2-a1dce72cf94b", // Image URL left empty as per your instruction
  description:
    "Khóa học toàn diện về Backend Development với Django và Django Rest Framework, từ cơ bản đến nâng cao.",
  price: 9500000,
  content_json: {
    about: {
      desc: "Khóa học toàn diện về Backend Development với Django và Django Rest Framework, từ cơ bản đến nâng cao.",
      title: "Django + DRF",
      points: [
        "Hiểu rõ các khái niệm cơ bản và nâng cao về Django và DRF",
        "Phát triển kỹ năng lập trình backend vững chắc",
        "Xây dựng và triển khai các API mạnh mẽ và bảo mật",
        "Áp dụng Django và DRF vào các dự án thực tế",
      ],
      journey: [
        "Python cơ bản cho Web Development",
        "Giới thiệu Django",
        "Django Models và ORM",
        "Forms và Views",
        "Authentication và Authorization",
        "Django Rest Framework cơ bản",
        "Xây dựng API nâng cao với DRF",
        "Tối ưu hóa và bảo mật ứng dụng",
        "Deployment và quản lý dự án",
      ],
      audience:
        "Lập trình viên muốn nâng cao kỹ năng về backend, sinh viên ngành CNTT, người chuyển sang lập trình backend",
      projects: [
        {
          desc: "Dự án thực tế với Django và DRF",
          name: "Dự án cuối khóa",
        },
      ],
    },
    skills: {
      list: [
        "Lập trình Backend với Django",
        "Sử dụng Django Rest Framework (DRF)",
        "Xây dựng API mạnh mẽ và bảo mật",
        "Quản lý dự án và làm việc nhóm",
      ],
      title: "Kỹ năng đạt được",
    },
    for_who: {
      list: [
        "Lập trình viên muốn học Backend với Django và DRF",
        "Sinh viên ngành CNTT",
        "Người chuyển hướng sang lập trình backend",
        "Lập trình viên muốn học thêm về Django và DRF",
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
          name: "160 giờ học tập",
        },
        {
          icon: "list-check",
          name: "Nhiều bài học chi tiết",
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
      video_content: "160 giờ học tập",
    },
    highlights: {
      title: "Điểm nổi bật",
      points: [
        "Thực hành dự án thực tế",
        "Nội dung bài bản và cập nhật",
        "Tập trung vào kỹ năng thực tế",
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
  duration: 70 * 2.25, // 157.5 hours
};

export const roadmapDjangoDRFDetail = [
  {
    id: 1,
    name: "Python cơ bản cho Web Development",
    description: "Giới thiệu về Python và cách sử dụng trong phát triển web",
    lessons: {
      1: [
        { id: 1, name: "Giới thiệu Python", duration: 2.5 },
        { id: 2, name: "Biến và kiểu dữ liệu", duration: 2 },
        { id: 3, name: "Cấu trúc điều khiển", duration: 2 },
        { id: 4, name: "Hàm và Modules", duration: 2.5 },
        { id: 5, name: "Làm việc với File", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 5 * 2.25,
  },
  {
    id: 2,
    name: "Giới thiệu Django",
    description: "Khái quát về Django và cách thiết lập dự án",
    lessons: {
      1: [
        { id: 6, name: "Cài đặt và thiết lập môi trường", duration: 2.5 },
        { id: 7, name: "Cấu trúc dự án Django", duration: 2 },
        { id: 8, name: "URL routing và Views cơ bản", duration: 2 },
        { id: 9, name: "Templates và Static Files", duration: 2 },
        { id: 10, name: "Models và Migrations", duration: 2.5 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 5 * 2.25,
  },
  {
    id: 3,
    name: "Django Models và ORM",
    description: "Làm việc với Models và ORM trong Django",
    lessons: {
      1: [
        { id: 11, name: "Models cơ bản", duration: 2 },
        { id: 12, name: "Quan hệ trong Models", duration: 2.5 },
        { id: 13, name: "QuerySets và Managers", duration: 2 },
        { id: 14, name: "Custom Model Methods", duration: 2 },
        { id: 15, name: "Signals và Middleware", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 5 * 2.25,
  },
  {
    id: 4,
    name: "Django Forms và Views",
    description: "Forms và Views trong Django",
    lessons: {
      1: [
        { id: 16, name: "Forms cơ bản", duration: 2.5 },
        { id: 17, name: "Class-based Views", duration: 2 },
        { id: 18, name: "Generic Views", duration: 2 },
        { id: 19, name: "Form Validation", duration: 2 },
        { id: 20, name: "Handling File Uploads", duration: 2.5 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 5 * 2.25,
  },
  {
    id: 5,
    name: "Authentication và Authorization trong Django",
    description: "Xác thực và phân quyền trong Django",
    lessons: {
      1: [
        { id: 21, name: "Hệ thống User Authentication", duration: 2.5 },
        { id: 22, name: "Custom User Model", duration: 2 },
        { id: 23, name: "Permissions và Groups", duration: 2 },
        { id: 24, name: "Xác thực và ủy quyền", duration: 2 },
        { id: 25, name: "Xử lý mật khẩu và sessions", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 5 * 2.25,
  },
  {
    id: 6,
    name: "Django Rest Framework (DRF) cơ bản",
    description: "Khái niệm và cách sử dụng DRF cơ bản",
    lessons: {
      1: [
        { id: 26, name: "Giới thiệu DRF", duration: 2.5 },
        { id: 27, name: "Cài đặt và thiết lập DRF", duration: 2 },
        { id: 28, name: "Serializers cơ bản", duration: 2 },
        { id: 29, name: "Views và ViewSets cơ bản", duration: 2 },
        { id: 30, name: "Routers và URL routing trong DRF", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 5 * 2.25,
  },
  {
    id: 7,
    name: "Xây dựng API nâng cao với DRF",
    description: "Tạo và tối ưu API nâng cao với DRF",
    lessons: {
      1: [
        { id: 31, name: "Xác thực và phân quyền trong DRF", duration: 2.5 },
        { id: 32, name: "Throttling và Filtering", duration: 2 },
        { id: 33, name: "Pagination", duration: 2 },
        { id: 34, name: "Versioning", duration: 2 },
        { id: 35, name: "Testing API", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 5 * 2.25,
  },
  {
    id: 8,
    name: "Deployment và tối ưu hóa ứng dụng Django",
    description: "Hướng dẫn triển khai ứng dụng Django",
    lessons: {
      1: [
        { id: 36, name: "Chuẩn bị cho deployment", duration: 2.5 },
        { id: 37, name: "Cài đặt và cấu hình server", duration: 2 },
        { id: 38, name: "Cài đặt Gunicorn và Nginx", duration: 2 },
        { id: 39, name: "Thiết lập CI/CD", duration: 2 },
        { id: 40, name: "Giám sát và tối ưu hóa ứng dụng", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 5 * 2.25,
  },
  {
    id: 9,
    name: "Tối ưu hóa và bảo mật ứng dụng Django",
    description: "Hướng dẫn tối ưu hóa và bảo mật Django",
    lessons: {
      1: [
        { id: 41, name: "Tối ưu hóa QuerySets và Database", duration: 2 },
        { id: 42, name: "Caching với Django", duration: 2 },
        { id: 43, name: "Bảo mật ứng dụng", duration: 2 },
        { id: 44, name: "Xử lý lỗi và Logging", duration: 2.5 },
        { id: 45, name: "Best Practices", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 5 * 2.25,
  },
  {
    id: 10,
    name: "Dự án thực tế - Phần 1",
    description: "Triển khai dự án thực tế với Django",
    lessons: {
      1: [
        { id: 46, name: "Lên kế hoạch dự án", duration: 2.5 },
        { id: 47, name: "Thiết kế và xây dựng Models", duration: 2 },
        { id: 48, name: "Thiết lập và cấu hình dự án", duration: 2 },
        { id: 49, name: "Xây dựng API Endpoints", duration: 2 },
        { id: 50, name: "Tích hợp Authentication", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 5 * 2.25,
  },
  {
    id: 11,
    name: "Dự án thực tế - Phần 2",
    description: "Hoàn thiện và triển khai dự án thực tế",
    lessons: {
      1: [
        { id: 51, name: "Tối ưu hóa và bảo mật dự án", duration: 2 },
        { id: 52, name: "Triển khai dự án", duration: 2.5 },
        { id: 53, name: "Giám sát và bảo trì", duration: 2 },
        { id: 54, name: "Xử lý các vấn đề phát sinh", duration: 2 },
        { id: 55, name: "Hoàn thiện và tài liệu hóa", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 5 * 2.25,
  },
];
