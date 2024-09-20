import { CourseDetailProps } from "@/server/course.type";

export const unity2DGameDetail: CourseDetailProps["content"] = {
  name: "Khóa học Lập trình Game Unity 2D thể loại game platformer cho người mới bắt đầu",
  img_url: "", // Image URL left empty as per your instruction
  description:
    "Khóa học này cung cấp kiến thức cơ bản và nâng cao về lập trình game 2D sử dụng Unity, giúp bạn xây dựng nền tảng vững chắc trong lĩnh vực phát triển game.",
  price: 1500000,
  content_json: {
    about: {
      desc: "Khóa học này cung cấp kiến thức cơ bản và nâng cao về lập trình game 2D sử dụng Unity, giúp bạn xây dựng nền tảng vững chắc trong lĩnh vực phát triển game.",
      title:
        "Khóa học Lập trình Game Unity 2D thể loại game platformer cho người mới bắt đầu",
      points: [
        "Hiểu rõ các khái niệm cơ bản và nâng cao của Unity",
        "Phát triển kỹ năng lập trình game với C#",
        "Xây dựng nhân vật, màn chơi và hệ thống điều khiển",
        "Áp dụng Unity vào dự án game thực tế",
      ],
      journey: [
        "Giới thiệu Unity và lập trình game",
        "Làm quen với Unity Editor",
        "Lập trình C# trong Unity",
        "Xây dựng nhân vật chính và đối thủ",
        "Thiết kế màn chơi",
        "Phát triển UI và hệ thống điều khiển",
        "AI cơ bản cho đối thủ",
        "Hoàn thiện và phát hành game",
      ],
      audience:
        "Người mới bắt đầu, sinh viên CNTT, lập trình viên muốn học thêm về phát triển game",
      projects: [
        {
          desc: "Phát triển game platformer hoàn chỉnh",
          name: "Dự án cuối khóa",
        },
      ],
    },
    skills: {
      list: [
        "Lập trình C# cho phát triển game",
        "Sử dụng Unity Editor",
        "Xây dựng và thiết kế nhân vật, màn chơi",
        "Phát triển AI cơ bản cho đối thủ",
        "Tối ưu hóa và phát hành game",
      ],
      title: "Kỹ năng đạt được",
    },
    for_who: {
      list: [
        "Người mới bắt đầu lập trình game",
        "Sinh viên ngành CNTT",
        "Lập trình viên muốn học phát triển game với Unity",
        "Người muốn nâng cao kỹ năng lập trình game",
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
          name: "92 giờ học tập",
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
      video_content: "92 giờ học tập",
    },
    highlights: {
      title: "Điểm nổi bật",
      points: [
        "Ứng dụng ngay vào thực tiễn",
        "Nội dung chi tiết và bài bản",
        "Tập trung thực hành",
      ],
    },
    beginner_friendly: {
      desc: "Không cần kiến thức nền",
      title: "Thân thiện với người mới",
      details: [
        "Bắt đầu từ cơ bản đến nâng cao",
        "Nhiều bài tập thực hành",
        "Học mọi lúc, mọi nơi",
      ],
      key_points: [
        "Phù hợp người mới",
        "Nội dung dễ hiểu",
        "Tập trung thực hành",
      ],
    },
  },
  duration: 92,
};

export const roadmapUnity2DGameDetail = [
  {
    id: 1,
    name: "Giới thiệu về Unity và Lập trình Game",
    description: "Tổng quan về Unity và lập trình game",
    lessons: {
      1: [
        { id: 1, name: "Unity là gì?", duration: 2 },
        { id: 2, name: "Cài đặt và cấu hình Unity", duration: 2 },
        { id: 3, name: "Các thành phần cơ bản trong Unity", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 6,
  },
  {
    id: 2,
    name: "Làm quen với Unity Editor",
    description: "Hướng dẫn sử dụng Unity Editor",
    lessons: {
      1: [
        { id: 4, name: "Giao diện Unity Editor", duration: 2 },
        { id: 5, name: "Cách sử dụng Scene và Game View", duration: 2 },
        { id: 6, name: "Quản lý GameObject và Component", duration: 2 },
        { id: 7, name: "Sử dụng Asset Store", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 8,
  },
  {
    id: 3,
    name: "Lập trình C# cơ bản trong Unity",
    description: "Học lập trình C# cho Unity",
    lessons: {
      1: [
        { id: 8, name: "Giới thiệu về C# và Script trong Unity", duration: 2 },
        { id: 9, name: "Các khái niệm cơ bản trong C#", duration: 2 },
        { id: 10, name: "Làm việc với MonoBehaviour", duration: 2 },
        { id: 11, name: "Xử lý sự kiện và Input", duration: 2 },
        { id: 12, name: "Debug và tìm lỗi trong Unity", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 10,
  },
  {
    id: 4,
    name: "Xây dựng nhân vật chính",
    description: "Tạo và lập trình cho nhân vật chính",
    lessons: {
      1: [
        { id: 13, name: "Tạo và thiết kế nhân vật", duration: 2 },
        { id: 14, name: "Lập trình chuyển động cho nhân vật", duration: 2 },
        { id: 15, name: "Xử lý va chạm và vật lý", duration: 2 },
        { id: 16, name: "Tạo animation cho nhân vật", duration: 2 },
        { id: 17, name: "Thiết lập camera theo dõi nhân vật", duration: 2 },
        { id: 18, name: "Thêm hiệu ứng và âm thanh cho nhân vật", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 12,
  },
  {
    id: 5,
    name: "Thiết kế màn chơi và quản lý cảnh",
    description: "Học thiết kế màn chơi và quản lý cảnh trong game",
    lessons: {
      1: [
        { id: 19, name: "Tạo và thiết kế màn chơi", duration: 2 },
        { id: 20, name: "Làm việc với Tilemap", duration: 2 },
        { id: 21, name: "Quản lý cảnh và chuyển cảnh", duration: 2 },
        { id: 22, name: "Tạo các đối tượng tương tác trong game", duration: 2 },
        { id: 23, name: "Thiết lập checkpoint và respawn", duration: 2 },
        { id: 24, name: "Tối ưu hóa màn chơi", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 12,
  },
  {
    id: 6,
    name: "Xây dựng hệ thống điều khiển và UI",
    description: "Học cách xây dựng hệ thống điều khiển và UI",
    lessons: {
      1: [
        { id: 25, name: "Tạo menu chính và UI cơ bản", duration: 2 },
        { id: 26, name: "Thiết kế HUD và hệ thống điểm số", duration: 2 },
        { id: 27, name: "Lập trình hệ thống điều khiển và Input", duration: 2 },
        { id: 28, name: "Tạo các hiệu ứng UI", duration: 2 },
        { id: 29, name: "Làm việc với hệ thống âm thanh", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 10,
  },
  {
    id: 7,
    name: "Xây dựng đối thủ và AI cơ bản",
    description: "Tạo đối thủ và lập trình AI cơ bản",
    lessons: {
      1: [
        { id: 30, name: "Tạo và thiết kế đối thủ", duration: 2 },
        { id: 31, name: "Lập trình chuyển động cho đối thủ", duration: 2 },
        { id: 32, name: "Xử lý va chạm và vật lý cho đối thủ", duration: 2 },
        { id: 33, name: "Tạo animation cho đối thủ", duration: 2 },
        { id: 34, name: "Lập trình AI cơ bản cho đối thủ", duration: 2 },
        { id: 35, name: "Thêm hiệu ứng và âm thanh cho đối thủ", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 12,
  },
  {
    id: 8,
    name: "Hoàn thiện game và phát hành",
    description: "Hoàn thiện và phát hành game",
    lessons: {
      1: [
        { id: 36, name: "Tối ưu hóa game", duration: 2 },
        { id: 37, name: "Kiểm tra và sửa lỗi", duration: 2 },
        { id: 38, name: "Chuẩn bị tài liệu và hướng dẫn chơi", duration: 2 },
        { id: 39, name: "Xây dựng phiên bản phát hành", duration: 2 },
        { id: 40, name: "Phát hành game trên các nền tảng", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 10,
  },
  {
    id: 9,
    name: "Dự án cuối khóa: Phát triển game platformer hoàn chỉnh",
    description: "Dự án cuối khóa về game platformer",
    lessons: {
      1: [
        { id: 41, name: "Lập kế hoạch và Phân tích yêu cầu", duration: 2 },
        { id: 42, name: "Xây dựng và thiết kế màn chơi", duration: 2 },
        { id: 43, name: "Lập trình các tính năng chính", duration: 2 },
        { id: 44, name: "Kiểm tra và tối ưu hóa game", duration: 2 },
        { id: 45, name: "Chuẩn bị phát hành và marketing", duration: 2 },
        { id: 46, name: "Trình bày và báo cáo dự án", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 12,
  },
];
