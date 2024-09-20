import { CourseDetailProps } from "@/server/course.type";

export const unity3DGameDetail: CourseDetailProps["content"] = {
  name: "Khóa học Lập trình Game Unity 3D cho người mới bắt đầu",
  img_url: "", // Image URL left empty as per your instruction
  description:
    "Khóa học này cung cấp kiến thức cơ bản và nâng cao về lập trình game 3D sử dụng Unity, giúp bạn xây dựng nền tảng vững chắc trong lĩnh vực phát triển game.",
  price: 2500000,
  content_json: {
    about: {
      desc: "Khóa học này cung cấp kiến thức cơ bản và nâng cao về lập trình game 3D sử dụng Unity, giúp bạn xây dựng nền tảng vững chắc trong lĩnh vực phát triển game.",
      title: "Khóa học Lập trình Game Unity 3D cho người mới bắt đầu",
      points: [
        "Hiểu rõ các khái niệm cơ bản và nâng cao của Unity",
        "Phát triển kỹ năng lập trình game 3D với C#",
        "Xây dựng nhân vật, thế giới 3D và hệ thống điều khiển",
        "Áp dụng Unity vào dự án game thực tế",
      ],
      journey: [
        "Giới thiệu Unity và lập trình game 3D",
        "Làm quen với Unity Editor",
        "Lập trình C# cơ bản trong Unity",
        "Xây dựng thế giới 3D",
        "Phát triển nhân vật và đối thủ",
        "Xây dựng hệ thống điều khiển và UI",
        "AI nâng cao cho đối thủ",
        "Hoàn thiện game và phát hành",
      ],
      audience:
        "Người mới bắt đầu, sinh viên CNTT, lập trình viên muốn học phát triển game 3D với Unity",
      projects: [
        {
          desc: "Phát triển game 3D hoàn chỉnh",
          name: "Dự án cuối khóa",
        },
      ],
    },
    skills: {
      list: [
        "Lập trình C# cho phát triển game 3D",
        "Sử dụng Unity Editor và phát triển thế giới 3D",
        "Phát triển AI nâng cao cho đối thủ",
        "Xây dựng và phát hành game trên nhiều nền tảng",
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
      lesson_count: 60,
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
  duration: 160,
};

export const roadmapUnity3DGameDetail = [
  {
    id: 1,
    name: "Giới thiệu về Unity và Lập trình Game 3D",
    description: "Tổng quan về Unity và lập trình game 3D",
    lessons: {
      1: [
        { id: 1, name: "Unity là gì?", duration: 2 },
        { id: 2, name: "Cài đặt và cấu hình Unity", duration: 2 },
        { id: 3, name: "Các thành phần cơ bản trong Unity", duration: 2 },
        {
          id: 4,
          name: "Cách sử dụng tài liệu và tài nguyên học tập",
          duration: 2,
        },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 8,
  },
  {
    id: 2,
    name: "Làm quen với Unity Editor",
    description: "Hướng dẫn sử dụng Unity Editor và quản lý project",
    lessons: {
      1: [
        { id: 5, name: "Giao diện Unity Editor", duration: 2 },
        { id: 6, name: "Cách sử dụng Scene và Game View", duration: 2 },
        { id: 7, name: "Quản lý GameObject và Component", duration: 2 },
        { id: 8, name: "Sử dụng Asset Store", duration: 2 },
        { id: 9, name: "Làm việc với Prefab và Material", duration: 2 },
        {
          id: 10,
          name: "Cách tạo và quản lý Project trong Unity",
          duration: 2,
        },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 12,
  },
  {
    id: 3,
    name: "Lập trình C# cơ bản trong Unity",
    description: "Học lập trình C# cơ bản cho Unity",
    lessons: {
      1: [
        { id: 11, name: "Giới thiệu về C# và Script trong Unity", duration: 2 },
        { id: 12, name: "Các khái niệm cơ bản trong C#", duration: 2 },
        { id: 13, name: "Làm việc với MonoBehaviour", duration: 2 },
        { id: 14, name: "Xử lý sự kiện và Input", duration: 2 },
        { id: 15, name: "Debug và tìm lỗi trong Unity", duration: 2 },
        { id: 16, name: "Lập trình các đối tượng tương tác", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 12,
  },
  {
    id: 4,
    name: "Xây dựng thế giới 3D",
    description: "Tạo và thiết kế thế giới 3D trong Unity",
    lessons: {
      1: [
        { id: 17, name: "Tạo và thiết kế cảnh 3D", duration: 2 },
        { id: 18, name: "Làm việc với Terrain và môi trường", duration: 2 },
        { id: 19, name: "Sử dụng ánh sáng và bóng đổ", duration: 2 },
        { id: 20, name: "Xử lý va chạm và vật lý", duration: 2 },
        { id: 21, name: "Tạo và sử dụng Skybox", duration: 2 },
        { id: 22, name: "Tối ưu hóa cảnh 3D", duration: 2 },
        { id: 23, name: "Sử dụng Particle System", duration: 2 },
        { id: 24, name: "Làm việc với Camera", duration: 2 },
        { id: 25, name: "Thêm hiệu ứng và âm thanh", duration: 2 },
        { id: 26, name: "Quản lý các đối tượng động trong cảnh", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 20,
  },
  {
    id: 5,
    name: "Xây dựng nhân vật chính",
    description: "Tạo và lập trình cho nhân vật chính",
    lessons: {
      1: [
        { id: 27, name: "Tạo và thiết kế nhân vật", duration: 2 },
        { id: 28, name: "Lập trình chuyển động cho nhân vật", duration: 2 },
        { id: 29, name: "Xử lý va chạm và vật lý cho nhân vật", duration: 2 },
        { id: 30, name: "Tạo animation cho nhân vật", duration: 2 },
        { id: 31, name: "Thiết lập camera theo dõi nhân vật", duration: 2 },
        { id: 32, name: "Thêm hiệu ứng và âm thanh cho nhân vật", duration: 2 },
        {
          id: 33,
          name: "Lập trình các hành động đặc biệt cho nhân vật",
          duration: 2,
        },
        { id: 34, name: "Xử lý AI cơ bản cho nhân vật", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 16,
  },
  {
    id: 6,
    name: "Thiết kế màn chơi và quản lý cảnh",
    description: "Học thiết kế màn chơi và quản lý cảnh trong game",
    lessons: {
      1: [
        { id: 35, name: "Tạo và thiết kế màn chơi", duration: 2 },
        { id: 36, name: "Quản lý cảnh và chuyển cảnh", duration: 2 },
        { id: 37, name: "Tạo các đối tượng tương tác trong game", duration: 2 },
        { id: 38, name: "Thiết lập checkpoint và respawn", duration: 2 },
        { id: 39, name: "Xây dựng các câu đố và nhiệm vụ", duration: 2 },
        { id: 40, name: "Làm việc với hệ thống thời gian thực", duration: 2 },
        { id: 41, name: "Tối ưu hóa màn chơi", duration: 2 },
        { id: 42, name: "Sử dụng NavMesh cho AI và điều hướng", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 16,
  },
  {
    id: 7,
    name: "Xây dựng hệ thống điều khiển và UI",
    description: "Học cách xây dựng hệ thống điều khiển và UI trong Unity",
    lessons: {
      1: [
        { id: 43, name: "Tạo menu chính và UI cơ bản", duration: 2 },
        { id: 44, name: "Thiết kế HUD và hệ thống điểm số", duration: 2 },
        { id: 45, name: "Lập trình hệ thống điều khiển và Input", duration: 2 },
        { id: 46, name: "Tạo các hiệu ứng UI", duration: 2 },
        { id: 47, name: "Làm việc với hệ thống âm thanh", duration: 2 },
        { id: 48, name: "Thiết lập hệ thống lưu và tải game", duration: 2 },
        { id: 49, name: "Xử lý các loại camera khác nhau", duration: 2 },
        { id: 50, name: "Tạo các hiệu ứng đặc biệt cho UI", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 16,
  },
  {
    id: 8,
    name: "Xây dựng đối thủ và AI nâng cao",
    description: "Tạo đối thủ và lập trình AI nâng cao cho đối thủ",
    lessons: {
      1: [
        { id: 51, name: "Tạo và thiết kế đối thủ", duration: 2 },
        { id: 52, name: "Lập trình chuyển động cho đối thủ", duration: 2 },
        { id: 53, name: "Xử lý va chạm và vật lý cho đối thủ", duration: 2 },
        { id: 54, name: "Tạo animation cho đối thủ", duration: 2 },
        { id: 55, name: "Lập trình AI nâng cao cho đối thủ", duration: 2 },
        { id: 56, name: "Thêm hiệu ứng và âm thanh cho đối thủ", duration: 2 },
        {
          id: 57,
          name: "Xử lý hành vi và trạng thái của đối thủ",
          duration: 2,
        },
        {
          id: 58,
          name: "Lập trình chiến lược và tấn công cho đối thủ",
          duration: 2,
        },
        {
          id: 59,
          name: "Xử lý tương tác giữa đối thủ và người chơi",
          duration: 2,
        },
        { id: 60, name: "Tối ưu hóa AI cho đối thủ", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 20,
  },
  {
    id: 9,
    name: "Hoàn thiện game và phát hành",
    description: "Hoàn thiện và phát hành game",
    lessons: {
      1: [
        { id: 61, name: "Tối ưu hóa game", duration: 2 },
        { id: 62, name: "Kiểm tra và sửa lỗi", duration: 2 },
        { id: 63, name: "Chuẩn bị tài liệu và hướng dẫn chơi", duration: 2 },
        { id: 64, name: "Xây dựng phiên bản phát hành", duration: 2 },
        { id: 65, name: "Phát hành game trên các nền tảng", duration: 2 },
        { id: 66, name: "Lập kế hoạch marketing cho game", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 12,
  },
  {
    id: 10,
    name: "Dự án cuối khóa: Phát triển game 3D hoàn chỉnh",
    description: "Dự án cuối khóa về phát triển game 3D",
    lessons: {
      1: [
        { id: 67, name: "Lập kế hoạch và Phân tích yêu cầu", duration: 2 },
        { id: 68, name: "Xây dựng và thiết kế màn chơi", duration: 2 },
        { id: 69, name: "Lập trình các tính năng chính", duration: 2 },
        { id: 70, name: "Kiểm tra và tối ưu hóa game", duration: 2 },
        { id: 71, name: "Chuẩn bị phát hành và marketing", duration: 2 },
        {
          id: 72,
          name: "Thực hiện playtesting và thu thập phản hồi",
          duration: 2,
        },
        {
          id: 73,
          name: "Lập trình các yếu tố tương tác nâng cao",
          duration: 2,
        },
        {
          id: 74,
          name: "Xử lý các tình huống và sự kiện trong game",
          duration: 2,
        },
        { id: 75, name: "Thêm các hiệu ứng đặc biệt và âm thanh", duration: 2 },
        { id: 76, name: "Trình bày và báo cáo dự án", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 20,
  },
];
