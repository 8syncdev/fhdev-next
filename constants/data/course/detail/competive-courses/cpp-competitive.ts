import { CourseDetailProps } from "@/server/course.type";

export const competitiveProgrammingDetail: CourseDetailProps["content"] = {
  name: "Khóa Học Lập Trình Thi Đấu",
  img_url: "", // Bỏ trống theo yêu cầu
  description:
    "Khóa học này trang bị cho bạn các kỹ năng và chiến lược cần thiết để tham gia các cuộc thi lập trình, từ các cấu trúc dữ liệu cơ bản đến thuật toán phức tạp, và phát triển kỹ năng giải quyết vấn đề một cách toàn diện.",
  price: 1500000,
  content_json: {
    about: {
      desc: "Khóa học này sẽ giúp bạn nắm vững các kỹ thuật và chiến lược cần thiết để tham gia các cuộc thi lập trình.",
      title: "Khóa Học Lập Trình Thi Đấu",
      points: [
        "Nắm vững các cấu trúc dữ liệu và thuật toán cơ bản",
        "Phát triển kỹ năng giải quyết vấn đề",
        "Hiểu và áp dụng các chiến lược thi đấu hiệu quả",
        "Luyện tập qua các bài tập thực tế và thi đấu thử nghiệm",
      ],
      journey: [
        "Giới thiệu về lập trình thi đấu",
        "Cấu trúc dữ liệu cơ bản",
        "Thuật toán cơ bản",
        "Kỹ năng thi đấu",
        "Thuật toán nâng cao",
        "Kỹ năng phỏng vấn và thi đấu trực tuyến",
      ],
      audience:
        "Sinh viên đam mê lập trình, lập trình viên muốn cải thiện kỹ năng thuật toán, người có kiến thức cơ bản về lập trình",
      projects: [
        {
          desc: "Dự án và thi đấu cuối khóa",
          name: "Thực hành cuối khóa",
        },
      ],
    },
    skills: {
      list: [
        "Nắm vững cấu trúc dữ liệu và thuật toán",
        "Phát triển kỹ năng giải quyết vấn đề và lập trình hiệu quả",
        "Xây dựng chiến lược thi đấu trong các cuộc thi lập trình",
        "Nâng cao khả năng tối ưu mã nguồn và phân tích thuật toán",
      ],
      title: "Kỹ năng đạt được",
    },
    for_who: {
      list: [
        "Sinh viên muốn tham gia các cuộc thi lập trình",
        "Người đã có kiến thức lập trình cơ bản muốn nâng cao kỹ năng",
        "Lập trình viên muốn cải thiện kỹ năng giải thuật và giải quyết vấn đề",
      ],
      title: "Đối tượng phù hợp",
    },
    overview: {
      level: "Trung cấp đến nâng cao",
      features: [
        {
          icon: "bar-chart-line",
          name: "Trung cấp đến nâng cao",
        },
        {
          icon: "play-circle-fill",
          name: "71 giờ video HD",
        },
        {
          icon: "list-check",
          name: "30 bài học",
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
      lesson_count: 30,
      video_content: "71 giờ video HD",
    },
    highlights: {
      title: "Điểm nổi bật",
      points: [
        "Thiết kế bài bản và chi tiết",
        "Nội dung cập nhật theo xu hướng thi đấu",
        "Hỗ trợ từ cộng đồng học viên",
      ],
    },
    beginner_friendly: {
      desc: "Khóa học phù hợp với người đã có kiến thức lập trình cơ bản và muốn nâng cao kỹ năng thi đấu",
      title: "Phù hợp người có kiến thức lập trình",
      details: [
        "Tập trung vào kỹ năng thi đấu",
        "Lộ trình chi tiết từ cơ bản đến nâng cao",
        "Bài tập và thi đấu thực hành",
      ],
      key_points: [
        "Chú trọng thực hành",
        "Tập trung vào kỹ năng thi đấu",
        "Lộ trình rõ ràng",
      ],
    },
  },
  duration: 71,
};

export const roadmapCompetitiveProgrammingDetail = [
  {
    id: 1,
    name: "Giới thiệu về lập trình thi đấu",
    description: "Tìm hiểu về lịch sử và tầm quan trọng của lập trình thi đấu",
    lessons: {
      1: [
        {
          id: 1,
          name: "Lịch sử và tầm quan trọng của lập trình thi đấu",
          duration: 2,
        },
        { id: 2, name: "Các cuộc thi lập trình nổi tiếng", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 3,
  },
  {
    id: 2,
    name: "Các cấu trúc dữ liệu cơ bản",
    description:
      "Tìm hiểu về các cấu trúc dữ liệu cơ bản như mảng, danh sách liên kết, ngăn xếp, hàng đợi, cây và đồ thị",
    lessons: {
      1: [
        { id: 3, name: "Mảng và Danh sách liên kết", duration: 2.25 },
        { id: 4, name: "Ngăn xếp và Hàng đợi", duration: 2.25 },
        { id: 5, name: "Cây và Đồ thị", duration: 2.25 },
        { id: 6, name: "Bảng băm và bộ nhớ đệm", duration: 2.25 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 9,
  },
  {
    id: 3,
    name: "Các thuật toán cơ bản",
    description:
      "Nắm vững các thuật toán cơ bản trong lập trình như sắp xếp, tìm kiếm, đệ quy, tham lam và thuật toán đồ thị",
    lessons: {
      1: [
        { id: 7, name: "Sắp xếp và Tìm kiếm", duration: 3 },
        { id: 8, name: "Đệ quy và Quy hoạch động", duration: 3 },
        { id: 9, name: "Thuật toán tham lam và Backtracking", duration: 3 },
        { id: 10, name: "Thuật toán đồ thị", duration: 3 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 12,
  },
  {
    id: 4,
    name: "Kỹ năng thi đấu",
    description:
      "Học cách giải quyết vấn đề, quản lý thời gian và xây dựng chiến lược thi đấu trong các cuộc thi lập trình",
    lessons: {
      1: [
        { id: 11, name: "Kỹ năng giải quyết vấn đề", duration: 2 },
        { id: 12, name: "Quản lý thời gian", duration: 2 },
        { id: 13, name: "Chiến lược thi đấu", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 6,
  },
  {
    id: 5,
    name: "Luyện tập và Thực hành",
    description: "Thực hành qua các bài tập và thi đấu thử nghiệm",
    lessons: {
      1: [
        { id: 14, name: "Bài tập mẫu và Giải thích", duration: 3.75 },
        { id: 15, name: "Thi đấu thử nghiệm", duration: 3.75 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 7.5,
  },
  {
    id: 6,
    name: "Thuật toán nâng cao",
    description:
      "Tìm hiểu các thuật toán nâng cao như Cây phân đoạn, Thuật toán Dijkstra và thuật toán chuỗi",
    lessons: {
      1: [
        { id: 16, name: "Cây phân đoạn và Cây Fenwick", duration: 3 },
        { id: 17, name: "Thuật toán Dijkstra và Floyd-Warshall", duration: 3 },
        { id: 18, name: "Thuật toán chuỗi", duration: 3 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 9,
  },
  {
    id: 7,
    name: "Kỹ năng phỏng vấn và thi đấu trực tuyến",
    description:
      "Chuẩn bị phỏng vấn và thi đấu trực tuyến qua các bài thi mô phỏng",
    lessons: {
      1: [
        { id: 19, name: "Chuẩn bị phỏng vấn", duration: 2 },
        { id: 20, name: "Mô phỏng thi đấu trực tuyến", duration: 2 },
        { id: 21, name: "Phân tích kết quả và cải thiện", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 6,
  },
  {
    id: 8,
    name: "Các cuộc thi lập trình thực tế",
    description:
      "Giới thiệu về các cuộc thi lập trình nổi tiếng như ACM ICPC và Codeforces",
    lessons: {
      1: [
        { id: 22, name: "Giới thiệu về ACM ICPC", duration: 2.5 },
        { id: 23, name: "Giới thiệu về Codeforces", duration: 2.5 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 5,
  },
  {
    id: 9,
    name: "Phân tích và tối ưu mã nguồn",
    description:
      "Học cách phân tích độ phức tạp thuật toán và tối ưu hóa mã nguồn",
    lessons: {
      1: [
        { id: 24, name: "Phân tích độ phức tạp thuật toán", duration: 2 },
        { id: 25, name: "Tối ưu hóa mã nguồn", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 4,
  },
  {
    id: 10,
    name: "Thực hành cuối khóa",
    description: "Dự án và thi đấu cuối khóa",
    lessons: {
      1: [
        { id: 26, name: "Dự án cuối khóa", duration: 3 },
        { id: 27, name: "Thi đấu cuối khóa", duration: 3 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 6,
  },
];
