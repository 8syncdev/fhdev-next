import { ConstCourseType } from "../type";
import { urlImageCourse } from "../../firebase";
import { fletImg } from "@/constants/image";
const courseMobileFletPython: ConstCourseType = {
  // Use to filter course
  rating: 4.9,
  originalPrice: 5500000,
  price: 3300000,
  duration: 45, // Total duration 45 hours
  language: ["python"],
  slug: "course-mobile-flet-python",
  imgSrc: fletImg,
  category: "mobile",
  // Course detail
  nameCourse: "Khóa học Phát triển ứng dụng di động với Flet và Python",
  description:
    "Khóa học này hướng dẫn bạn cách phát triển ứng dụng di động sử dụng Flet framework và ngôn ngữ lập trình Python, từ cơ bản đến nâng cao.",
  tags: ["Mobile Development", "Flet", "Python"],
  newest: true,
  popular: true,
  trending: true,
  content: {
    intro:
      "Khóa học phát triển ứng dụng di động với Flet và Python từ cơ bản đến nâng cao, trang bị cho bạn các kỹ năng thực chiến.",
    purposes: [
      "Nắm vững kiến thức cơ bản và nâng cao về lập trình di động với Flet và Python.",
      "Phát triển kỹ năng lập trình full-stack với Python và Flet framework.",
      "Hiểu và áp dụng quy trình phát triển phần mềm Agile/Scrum trong dự án thực tế.",
      "Xây dựng các ứng dụng di động hoàn chỉnh và triển khai chúng lên các store.",
    ],
    results: [
      "Có khả năng phát triển ứng dụng di động full-stack với Flet và Python.",
      "Hiểu và áp dụng các kỹ thuật tối ưu hóa và bảo mật trong phát triển di động.",
      "Phát triển kỹ năng làm việc nhóm và quản lý dự án với phương pháp Agile/Scrum.",
      "Tự tin triển khai và quản lý các dự án lập trình thực tế.",
    ],
    orientedUsers: [
      "Lập trình viên muốn nâng cao kỹ năng và kiến thức về Flet và Python.",
      "Sinh viên ngành Công nghệ Thông tin muốn nắm vững lập trình di động full-stack.",
      "Người muốn chuyển hướng sang lĩnh vực lập trình di động.",
      "Lập trình viên muốn học thêm về phát triển frontend và backend.",
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
      nameLesson: "Giới thiệu về Flet và Python",
      duration: 5, // 2.25 buổi
      detailLessons: [
        { nameDetailLesson: "Tổng quan về Flet", duration: 2 },
        { nameDetailLesson: "Cài đặt môi trường phát triển", duration: 2.5 },
        {
          nameDetailLesson: "Lịch sử và phiên bản Flet và Python",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Cơ bản về Python",
      duration: 9, // 4 buổi
      detailLessons: [
        { nameDetailLesson: "Ngôn ngữ lập trình Python", duration: 2 },
        {
          nameDetailLesson: "Các khái niệm cơ bản trong Python",
          duration: 2.5,
        },
        { nameDetailLesson: "Cấu trúc điều kiện và vòng lặp", duration: 2 },
        { nameDetailLesson: "Hàm và thư viện trong Python", duration: 2.5 },
      ],
    },
    {
      nameLesson: "Bắt đầu với Flet",
      duration: 6.5, // 3 buổi
      detailLessons: [
        { nameDetailLesson: "Tạo dự án Flet đầu tiên", duration: 2 },
        { nameDetailLesson: "Cấu trúc dự án Flet", duration: 2.5 },
        { nameDetailLesson: "Thiết kế giao diện đơn giản", duration: 2 },
      ],
    },
    {
      nameLesson: "Xây dựng giao diện người dùng",
      duration: 12.5, // 6 buổi
      detailLessons: [
        {
          nameDetailLesson: "Các thành phần giao diện trong Flet",
          duration: 2,
        },
        { nameDetailLesson: "Sử dụng layout và widgets", duration: 2.5 },
        { nameDetailLesson: "Quản lý trạng thái ứng dụng", duration: 2 },
        { nameDetailLesson: "Xử lý sự kiện và tương tác", duration: 2 },
        { nameDetailLesson: "Thiết kế giao diện đa màn hình", duration: 2.5 },
        { nameDetailLesson: "Tối ưu hóa giao diện người dùng", duration: 2 },
      ],
    },
    {
      nameLesson: "Kết nối với Backend",
      duration: 9, // 4 buổi
      detailLessons: [
        { nameDetailLesson: "Kết nối với API", duration: 2 },
        { nameDetailLesson: "Xử lý dữ liệu từ server", duration: 2.5 },
        { nameDetailLesson: "Quản lý dữ liệu cục bộ", duration: 2 },
        {
          nameDetailLesson: "Sử dụng WebSocket cho cập nhật thời gian thực",
          duration: 2.5,
        },
      ],
    },
    {
      nameLesson: "Quản lý dự án và kiểm thử",
      duration: 9, // 4 buổi
      detailLessons: [
        { nameDetailLesson: "Quản lý mã nguồn với Git", duration: 2 },
        { nameDetailLesson: "Kiểm thử đơn vị và tích hợp", duration: 2.5 },
        { nameDetailLesson: "Sử dụng CI/CD cho dự án", duration: 2 },
        { nameDetailLesson: "Debugging và tối ưu hóa", duration: 2.5 },
      ],
    },
    {
      nameLesson: "Đưa ứng dụng lên Store",
      duration: 6.5, // 3 buổi
      detailLessons: [
        { nameDetailLesson: "Chuẩn bị ứng dụng cho xuất bản", duration: 2 },
        {
          nameDetailLesson: "Đưa ứng dụng lên Google Play Store",
          duration: 2.5,
        },
        { nameDetailLesson: "Đưa ứng dụng lên Apple App Store", duration: 2 },
      ],
    },
    {
      nameLesson: "Dự án thực tế",
      duration: 9, // 4 buổi
      detailLessons: [
        { nameDetailLesson: "Lập kế hoạch dự án thực tế", duration: 2 },
        { nameDetailLesson: "Xây dựng ứng dụng hoàn chỉnh", duration: 2.5 },
        { nameDetailLesson: "Kiểm thử và cải thiện ứng dụng", duration: 2 },
        { nameDetailLesson: "Triển khai và bảo trì ứng dụng", duration: 2.5 },
      ],
    },
  ],
};

export default courseMobileFletPython;
