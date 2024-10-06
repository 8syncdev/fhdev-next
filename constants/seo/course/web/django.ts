import { ConstCourseType } from "../type";
import { urlImageCourse } from "../../firebase";

const courseDjangoDRF_BE: ConstCourseType = {
  // Use to filter course
  rating: 4.9,
  originalPrice: 20000000,
  price: 7000000,
  duration: 70 * 2.25, // Trung bình mỗi buổi 2.25 giờ
  language: ["python"],
  slug: "course-django-drf-be",
  imgSrc: urlImageCourse['django'],
  category: "web",
  // Course detail
  nameCourse: "Django + DRF",
  description:
    "Khóa học toàn diện về Backend Development với Django và Django Rest Framework, từ cơ bản đến nâng cao.",
  tags: ["Django", "DRF", "Backend", "Web Development"],
  newest: true,
  popular: true,
  trending: true,
  content: {
    intro:
      "Khóa học toàn diện về Backend Development với Django và Django Rest Framework, từ cơ bản đến nâng cao.",
    purposes: [
      "Hiểu rõ các khái niệm cơ bản và nâng cao về Django và DRF",
      "Phát triển kỹ năng lập trình backend vững chắc",
      "Xây dựng và triển khai các API mạnh mẽ và bảo mật",
      "Áp dụng Django và DRF vào các dự án thực tế",
    ],
    results: [
      "Có khả năng phát triển ứng dụng web backend hoàn chỉnh với Django",
      "Sử dụng thành thạo Django Rest Framework để xây dựng API",
      "Hiểu và áp dụng các phương pháp bảo mật và tối ưu hóa",
      "Phát triển kỹ năng làm việc nhóm và quản lý dự án",
    ],
    orientedUsers: [
      "Lập trình viên muốn nâng cao kỹ năng và kiến thức về backend",
      "Sinh viên ngành Công nghệ Thông tin",
      "Người muốn chuyển hướng sang lĩnh vực lập trình backend",
      "Lập trình viên muốn học thêm về Django và DRF",
    ],
    whyChoose: [
      "Khóa học được thiết kế bài bản và chi tiết",
      "Giảng viên giàu kinh nghiệm và nhiệt tình",
      "Nội dung cập nhật và phù hợp với xu hướng hiện nay",
      "Hỗ trợ và tư vấn nhiệt tình từ cộng đồng học viên",
    ],
  },

  lessons: [
    {
      nameLesson: "Python cơ bản cho Web Development",
      duration: 5 * 2.25, // 5 buổi
      detailLessons: [
        { nameDetailLesson: "Giới thiệu Python", duration: 2.5 },
        { nameDetailLesson: "Biến và kiểu dữ liệu", duration: 2 },
        { nameDetailLesson: "Cấu trúc điều khiển", duration: 2 },
        { nameDetailLesson: "Hàm và Modules", duration: 2.5 },
        { nameDetailLesson: "Làm việc với File", duration: 2 },
      ],
    },
    {
      nameLesson: "Giới thiệu Django",
      duration: 5 * 2.25, // 5 buổi
      detailLessons: [
        { nameDetailLesson: "Cài đặt và thiết lập môi trường", duration: 2.5 },
        { nameDetailLesson: "Cấu trúc dự án Django", duration: 2 },
        { nameDetailLesson: "URL routing và Views cơ bản", duration: 2 },
        { nameDetailLesson: "Templates và Static Files", duration: 2 },
        { nameDetailLesson: "Models và Migrations", duration: 2.5 },
      ],
    },
    {
      nameLesson: "Django Models và ORM",
      duration: 5 * 2.25, // 5 buổi
      detailLessons: [
        { nameDetailLesson: "Models cơ bản", duration: 2 },
        { nameDetailLesson: "Quan hệ trong Models", duration: 2.5 },
        { nameDetailLesson: "QuerySets và Managers", duration: 2 },
        { nameDetailLesson: "Custom Model Methods", duration: 2 },
        { nameDetailLesson: "Signals và Middleware", duration: 2 },
      ],
    },
    {
      nameLesson: "Django Forms và Views",
      duration: 5 * 2.25, // 5 buổi
      detailLessons: [
        { nameDetailLesson: "Forms cơ bản", duration: 2.5 },
        { nameDetailLesson: "Class-based Views", duration: 2 },
        { nameDetailLesson: "Generic Views", duration: 2 },
        { nameDetailLesson: "Form Validation", duration: 2 },
        { nameDetailLesson: "Handling File Uploads", duration: 2.5 },
      ],
    },
    {
      nameLesson: "Authentication và Authorization trong Django",
      duration: 5 * 2.25, // 5 buổi
      detailLessons: [
        { nameDetailLesson: "Hệ thống User Authentication", duration: 2.5 },
        { nameDetailLesson: "Custom User Model", duration: 2 },
        { nameDetailLesson: "Permissions và Groups", duration: 2 },
        { nameDetailLesson: "Xác thực và ủy quyền", duration: 2 },
        { nameDetailLesson: "Xử lý mật khẩu và sessions", duration: 2 },
      ],
    },
    {
      nameLesson: "Django Rest Framework (DRF) cơ bản",
      duration: 5 * 2.25, // 5 buổi
      detailLessons: [
        { nameDetailLesson: "Giới thiệu DRF", duration: 2.5 },
        { nameDetailLesson: "Cài đặt và thiết lập DRF", duration: 2 },
        { nameDetailLesson: "Serializers cơ bản", duration: 2 },
        { nameDetailLesson: "Views và ViewSets cơ bản", duration: 2 },
        { nameDetailLesson: "Routers và URL routing trong DRF", duration: 2 },
      ],
    },
    {
      nameLesson: "Xây dựng API nâng cao với DRF",
      duration: 5 * 2.25, // 5 buổi
      detailLessons: [
        { nameDetailLesson: "Xác thực và phân quyền trong DRF", duration: 2.5 },
        { nameDetailLesson: "Throttling và Filtering", duration: 2 },
        { nameDetailLesson: "Pagination", duration: 2 },
        { nameDetailLesson: "Versioning", duration: 2 },
        { nameDetailLesson: "Testing API", duration: 2 },
      ],
    },
    {
      nameLesson: "Deployment và tối ưu hóa ứng dụng Django",
      duration: 5 * 2.25, // 5 buổi
      detailLessons: [
        { nameDetailLesson: "Chuẩn bị cho deployment", duration: 2.5 },
        { nameDetailLesson: "Cài đặt và cấu hình server", duration: 2 },
        { nameDetailLesson: "Cài đặt Gunicorn và Nginx", duration: 2 },
        { nameDetailLesson: "Thiết lập CI/CD", duration: 2 },
        { nameDetailLesson: "Giám sát và tối ưu hóa ứng dụng", duration: 2 },
      ],
    },
    {
      nameLesson: "Tối ưu hóa và bảo mật ứng dụng Django",
      duration: 5 * 2.25, // 5 buổi
      detailLessons: [
        { nameDetailLesson: "Tối ưu hóa QuerySets và Database", duration: 2 },
        { nameDetailLesson: "Caching với Django", duration: 2 },
        { nameDetailLesson: "Bảo mật ứng dụng", duration: 2 },
        { nameDetailLesson: "Xử lý lỗi và Logging", duration: 2.5 },
        { nameDetailLesson: "Best Practices", duration: 2 },
      ],
    },
    {
      nameLesson: "Dự án thực tế - Phần 1",
      duration: 5 * 2.25, // 5 buổi
      detailLessons: [
        { nameDetailLesson: "Lên kế hoạch dự án", duration: 2.5 },
        { nameDetailLesson: "Thiết kế và xây dựng Models", duration: 2 },
        { nameDetailLesson: "Thiết lập và cấu hình dự án", duration: 2 },
        { nameDetailLesson: "Xây dựng API Endpoints", duration: 2 },
        { nameDetailLesson: "Tích hợp Authentication", duration: 2 },
      ],
    },
    {
      nameLesson: "Dự án thực tế - Phần 2",
      duration: 5 * 2.25, // 5 buổi
      detailLessons: [
        { nameDetailLesson: "Tối ưu hóa và bảo mật dự án", duration: 2 },
        { nameDetailLesson: "Triển khai dự án", duration: 2.5 },
        { nameDetailLesson: "Giám sát và bảo trì", duration: 2 },
        { nameDetailLesson: "Xử lý các vấn đề phát sinh", duration: 2 },
        { nameDetailLesson: "Hoàn thiện và tài liệu hóa", duration: 2 },
      ],
    },
  ],
};

export default courseDjangoDRF_BE;
