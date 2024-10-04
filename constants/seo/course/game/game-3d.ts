import { ConstCourseType } from "../type";
import { urlImageCourse } from "../../firebase";

const courseUnity3DGame: ConstCourseType = {
  // Use to filter course
  rating: 4.9,
  originalPrice: 5000000,
  price: 2500000,
  duration: 160, // Updated total duration 160 hours
  language: ["c#"],
  slug: "course-unity-3d-game-development",
  imgSrc: urlImageCourse['csharp'],
  category: "game",
  // Course detail
  nameCourse: "Khóa học Lập trình Game Unity 3D cho người mới bắt đầu",
  description:
    "Khóa học này cung cấp kiến thức cơ bản và nâng cao về lập trình game 3D sử dụng Unity, giúp bạn xây dựng nền tảng vững chắc trong lĩnh vực phát triển game.",
  tags: ["Unity", "Game Development", "3D Game"],
  newest: true,
  popular: true,
  trending: true,
  content: {
    intro:
      "Khóa học này cung cấp kiến thức cơ bản và nâng cao về lập trình game 3D sử dụng Unity, giúp bạn xây dựng nền tảng vững chắc trong lĩnh vực phát triển game.",
    purposes: [
      "Hiểu rõ các khái niệm cơ bản và nâng cao của Unity",
      "Phát triển kỹ năng lập trình game 3D với C#",
      "Xây dựng và thiết kế các nhân vật, màn chơi và hệ thống điều khiển trong game",
      "Áp dụng Unity vào các dự án game thực tế",
    ],
    results: [
      "Có khả năng viết mã và phát triển game 3D với Unity",
      "Xây dựng được các trò chơi 3D cơ bản và nâng cao",
      "Giải quyết các vấn đề lập trình game phức tạp",
      "Phát hành và quảng bá game trên các nền tảng",
    ],
    orientedUsers: [
      "Người mới bắt đầu học lập trình game",
      "Sinh viên ngành Công nghệ Thông tin",
      "Lập trình viên muốn học thêm về phát triển game với Unity",
      "Người muốn nâng cao kỹ năng lập trình game của mình",
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
      nameLesson: "Giới thiệu về Unity và Lập trình Game 3D",
      duration: 8, // 4 sessions
      detailLessons: [
        { nameDetailLesson: "Unity là gì?", duration: 2 },
        { nameDetailLesson: "Cài đặt và cấu hình Unity", duration: 2 },
        { nameDetailLesson: "Các thành phần cơ bản trong Unity", duration: 2 },
        {
          nameDetailLesson: "Cách sử dụng tài liệu và tài nguyên học tập",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Làm quen với Unity Editor",
      duration: 12, // 6 sessions
      detailLessons: [
        { nameDetailLesson: "Giao diện Unity Editor", duration: 2 },
        { nameDetailLesson: "Cách sử dụng Scene và Game View", duration: 2 },
        { nameDetailLesson: "Quản lý GameObject và Component", duration: 2 },
        { nameDetailLesson: "Sử dụng Asset Store", duration: 2 },
        { nameDetailLesson: "Làm việc với Prefab và Material", duration: 2 },
        {
          nameDetailLesson: "Cách tạo và quản lý Project trong Unity",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Lập trình C# cơ bản trong Unity",
      duration: 12, // 6 sessions
      detailLessons: [
        {
          nameDetailLesson: "Giới thiệu về C# và Script trong Unity",
          duration: 2,
        },
        { nameDetailLesson: "Các khái niệm cơ bản trong C#", duration: 2 },
        { nameDetailLesson: "Làm việc với MonoBehaviour", duration: 2 },
        { nameDetailLesson: "Xử lý sự kiện và Input", duration: 2 },
        { nameDetailLesson: "Debug và tìm lỗi trong Unity", duration: 2 },
        { nameDetailLesson: "Lập trình các đối tượng tương tác", duration: 2 },
      ],
    },
    {
      nameLesson: "Xây dựng thế giới 3D",
      duration: 20, // 10 sessions
      detailLessons: [
        { nameDetailLesson: "Tạo và thiết kế cảnh 3D", duration: 2 },
        { nameDetailLesson: "Làm việc với Terrain và môi trường", duration: 2 },
        { nameDetailLesson: "Sử dụng ánh sáng và bóng đổ", duration: 2 },
        { nameDetailLesson: "Xử lý va chạm và vật lý", duration: 2 },
        { nameDetailLesson: "Tạo và sử dụng Skybox", duration: 2 },
        { nameDetailLesson: "Tối ưu hóa cảnh 3D", duration: 2 },
        { nameDetailLesson: "Sử dụng Particle System", duration: 2 },
        { nameDetailLesson: "Làm việc với Camera", duration: 2 },
        { nameDetailLesson: "Thêm hiệu ứng và âm thanh", duration: 2 },
        {
          nameDetailLesson: "Quản lý các đối tượng động trong cảnh",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Xây dựng nhân vật chính",
      duration: 16, // 8 sessions
      detailLessons: [
        { nameDetailLesson: "Tạo và thiết kế nhân vật", duration: 2 },
        { nameDetailLesson: "Lập trình chuyển động cho nhân vật", duration: 2 },
        {
          nameDetailLesson: "Xử lý va chạm và vật lý cho nhân vật",
          duration: 2,
        },
        { nameDetailLesson: "Tạo animation cho nhân vật", duration: 2 },
        { nameDetailLesson: "Thiết lập camera theo dõi nhân vật", duration: 2 },
        {
          nameDetailLesson: "Thêm hiệu ứng và âm thanh cho nhân vật",
          duration: 2,
        },
        {
          nameDetailLesson: "Lập trình các hành động đặc biệt cho nhân vật",
          duration: 2,
        },
        { nameDetailLesson: "Xử lý AI cơ bản cho nhân vật", duration: 2 },
      ],
    },
    {
      nameLesson: "Thiết kế màn chơi và quản lý cảnh",
      duration: 16, // 8 sessions
      detailLessons: [
        { nameDetailLesson: "Tạo và thiết kế màn chơi", duration: 2 },
        { nameDetailLesson: "Quản lý cảnh và chuyển cảnh", duration: 2 },
        {
          nameDetailLesson: "Tạo các đối tượng tương tác trong game",
          duration: 2,
        },
        { nameDetailLesson: "Thiết lập checkpoint và respawn", duration: 2 },
        { nameDetailLesson: "Xây dựng các câu đố và nhiệm vụ", duration: 2 },
        {
          nameDetailLesson: "Làm việc với hệ thống thời gian thực",
          duration: 2,
        },
        { nameDetailLesson: "Tối ưu hóa màn chơi", duration: 2 },
        {
          nameDetailLesson: "Sử dụng NavMesh cho AI và điều hướng",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Xây dựng hệ thống điều khiển và UI",
      duration: 16, // 8 sessions
      detailLessons: [
        { nameDetailLesson: "Tạo menu chính và UI cơ bản", duration: 2 },
        { nameDetailLesson: "Thiết kế HUD và hệ thống điểm số", duration: 2 },
        {
          nameDetailLesson: "Lập trình hệ thống điều khiển và Input",
          duration: 2,
        },
        { nameDetailLesson: "Tạo các hiệu ứng UI", duration: 2 },
        { nameDetailLesson: "Làm việc với hệ thống âm thanh", duration: 2 },
        { nameDetailLesson: "Thiết lập hệ thống lưu và tải game", duration: 2 },
        { nameDetailLesson: "Xử lý các loại camera khác nhau", duration: 2 },
        { nameDetailLesson: "Tạo các hiệu ứng đặc biệt cho UI", duration: 2 },
      ],
    },
    {
      nameLesson: "Xây dựng đối thủ và AI nâng cao",
      duration: 20, // 10 sessions
      detailLessons: [
        { nameDetailLesson: "Tạo và thiết kế đối thủ", duration: 2 },
        { nameDetailLesson: "Lập trình chuyển động cho đối thủ", duration: 2 },
        {
          nameDetailLesson: "Xử lý va chạm và vật lý cho đối thủ",
          duration: 2,
        },
        { nameDetailLesson: "Tạo animation cho đối thủ", duration: 2 },
        { nameDetailLesson: "Lập trình AI nâng cao cho đối thủ", duration: 2 },
        {
          nameDetailLesson: "Thêm hiệu ứng và âm thanh cho đối thủ",
          duration: 2,
        },
        {
          nameDetailLesson: "Xử lý hành vi và trạng thái của đối thủ",
          duration: 2,
        },
        {
          nameDetailLesson: "Lập trình chiến lược và tấn công cho đối thủ",
          duration: 2,
        },
        {
          nameDetailLesson: "Xử lý tương tác giữa đối thủ và người chơi",
          duration: 2,
        },
        { nameDetailLesson: "Tối ưu hóa AI cho đối thủ", duration: 2 },
      ],
    },
    {
      nameLesson: "Hoàn thiện game và phát hành",
      duration: 12, // 6 sessions
      detailLessons: [
        { nameDetailLesson: "Tối ưu hóa game", duration: 2 },
        { nameDetailLesson: "Kiểm tra và sửa lỗi", duration: 2 },
        {
          nameDetailLesson: "Chuẩn bị tài liệu và hướng dẫn chơi",
          duration: 2,
        },
        { nameDetailLesson: "Xây dựng phiên bản phát hành", duration: 2 },
        { nameDetailLesson: "Phát hành game trên các nền tảng", duration: 2 },
        { nameDetailLesson: "Lập kế hoạch marketing cho game", duration: 2 },
      ],
    },
    {
      nameLesson: "Dự án cuối khóa: Phát triển game 3D hoàn chỉnh",
      duration: 20, // 10 sessions
      detailLessons: [
        { nameDetailLesson: "Lập kế hoạch và Phân tích yêu cầu", duration: 2 },
        { nameDetailLesson: "Xây dựng và thiết kế màn chơi", duration: 2 },
        { nameDetailLesson: "Lập trình các tính năng chính", duration: 2 },
        { nameDetailLesson: "Kiểm tra và tối ưu hóa game", duration: 2 },
        { nameDetailLesson: "Chuẩn bị phát hành và marketing", duration: 2 },
        {
          nameDetailLesson: "Thực hiện playtesting và thu thập phản hồi",
          duration: 2,
        },
        {
          nameDetailLesson: "Lập trình các yếu tố tương tác nâng cao",
          duration: 2,
        },
        {
          nameDetailLesson: "Xử lý các tình huống và sự kiện trong game",
          duration: 2,
        },
        {
          nameDetailLesson: "Thêm các hiệu ứng đặc biệt và âm thanh",
          duration: 2,
        },
        { nameDetailLesson: "Trình bày và báo cáo dự án", duration: 2 },
      ],
    },
  ],
};

export default courseUnity3DGame;
