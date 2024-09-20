import { CourseDetailProps } from "@/server/course.type";

export const dsaDetail: CourseDetailProps["content"] = {
  name: "Khóa học Cấu trúc dữ liệu và Giải thuật cho người mới bắt đầu",
  img_url:
    "https://firebasestorage.googleapis.com/v0/b/nextjs-djninex-store.appspot.com/o/image-upload%2Fdsa.webp?alt=media&token=70ca30d4-0abf-40c9-b5ed-408cefab03c3",
  description:
    "Khóa học này giúp bạn nắm vững các khái niệm cơ bản và nâng cao của cấu trúc dữ liệu và giải thuật, từ đó xây dựng nền tảng vững chắc trong lập trình.",
  price: 1250000,
  content_json: {
    about: {
      desc: "Khóa học này giúp bạn nắm vững các khái niệm cơ bản và nâng cao của cấu trúc dữ liệu và giải thuật, từ đó xây dựng nền tảng vững chắc trong lập trình.",
      title: "Cấu trúc dữ liệu và Giải thuật cho người mới bắt đầu",
      points: [
        "Hiểu rõ các cấu trúc dữ liệu cơ bản và nâng cao",
        "Phát triển kỹ năng giải quyết vấn đề hiệu quả",
        "Nắm vững các thuật toán tìm kiếm và sắp xếp",
        "Áp dụng các thuật toán và cấu trúc dữ liệu vào các dự án thực tế",
      ],
      journey: [
        "Cấu trúc dữ liệu cơ bản và ứng dụng",
        "Thuật toán tìm kiếm và sắp xếp",
        "Giải thuật đệ quy và Quy hoạch động",
        "Thuật toán đồ thị và đồ thị nâng cao",
        "Thuật toán tham lam và Backtracking",
      ],
      audience:
        "Sinh viên ngành CNTT, người học lập trình, lập trình viên muốn nâng cao kỹ năng giải thuật",
      projects: [
        {
          desc: "Xây dựng ứng dụng tìm đường ngắn nhất",
          name: "Dự án thực tế",
        },
      ],
    },
    skills: {
      list: [
        "Phân tích và thiết kế cấu trúc dữ liệu phù hợp",
        "Xử lý các thuật toán tìm kiếm và sắp xếp",
        "Lập trình ứng dụng thực tế sử dụng cấu trúc dữ liệu và thuật toán",
        "Giải quyết vấn đề lập trình phức tạp",
      ],
      title: "Kỹ năng đạt được",
    },
    for_who: {
      list: [
        "Sinh viên ngành CNTT",
        "Người mới học lập trình",
        "Lập trình viên muốn nâng cao kiến thức",
        "Người muốn tham gia các cuộc thi lập trình",
      ],
      title: "Đối tượng phù hợp",
    },
    overview: {
      level: "Từ cơ bản đến nâng cao",
      features: [
        {
          icon: "bar-chart-line",
          name: "Từ cơ bản đến nâng cao",
        },
        {
          icon: "play-circle-fill",
          name: "100 giờ video HD",
        },
        {
          icon: "list-check",
          name: "60 bài học",
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
      video_content: "100 giờ video HD",
    },
    highlights: {
      title: "Điểm nổi bật",
      points: [
        "Thiết kế bài bản và chi tiết",
        "Nội dung cập nhật",
        "Hỗ trợ nhiệt tình từ cộng đồng học viên",
      ],
    },
    beginner_friendly: {
      desc: "Khóa học dễ tiếp cận và phù hợp với người mới bắt đầu",
      title: "Thân thiện với người mới",
      details: [
        "Bắt đầu từ các kiến thức cơ bản",
        "Lộ trình chi tiết và nhiều ví dụ thực tiễn",
        "Nhiều bài tập và dự án thực hành",
      ],
      key_points: [
        "Phù hợp người mới bắt đầu",
        "Tiếp cận dễ hiểu",
        "Chú trọng thực hành",
      ],
    },
  },
  duration: 100,
};

export const roadmapDsaDetail = [
  {
    id: 1,
    name: "Giới thiệu về Cấu trúc dữ liệu và Giải thuật",
    description:
      "Tổng quan về các khái niệm và ứng dụng của cấu trúc dữ liệu và giải thuật",
    lessons: {
      1: [
        { id: 1, name: "Cấu trúc dữ liệu là gì?", duration: 2 },
        { id: 2, name: "Giải thuật là gì?", duration: 2 },
        {
          id: 3,
          name: "Phân loại và Ứng dụng của Cấu trúc dữ liệu và Giải thuật",
          duration: 2,
        },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 6,
  },
  {
    id: 2,
    name: "Mảng và Danh sách liên kết",
    description: "Học về mảng và danh sách liên kết trong cấu trúc dữ liệu",
    lessons: {
      1: [
        { id: 4, name: "Mảng và Các thao tác cơ bản trên Mảng", duration: 2 },
        {
          id: 5,
          name: "Tạo, Truy cập và Sửa đổi Phần tử trong Mảng",
          duration: 2,
        },
        {
          id: 6,
          name: "Danh sách liên kết đơn: Khái niệm và Cài đặt",
          duration: 2,
        },
        {
          id: 7,
          name: "Danh sách liên kết kép: Khái niệm và Cài đặt",
          duration: 2,
        },
        {
          id: 8,
          name: "Các thao tác trên danh sách liên kết: Thêm, Xóa, Duyệt",
          duration: 2,
        },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 10,
  },
  {
    id: 3,
    name: "Ngăn xếp và Hàng đợi",
    description: "Tìm hiểu về cấu trúc ngăn xếp và hàng đợi trong lập trình",
    lessons: {
      1: [
        {
          id: 9,
          name: "Giới thiệu về Ngăn xếp: Khái niệm và Ứng dụng",
          duration: 2,
        },
        {
          id: 10,
          name: "Các thao tác trên Ngăn xếp: Push, Pop, Peek",
          duration: 2,
        },
        {
          id: 11,
          name: "Giới thiệu về Hàng đợi: Khái niệm và Ứng dụng",
          duration: 2,
        },
        {
          id: 12,
          name: "Các thao tác trên Hàng đợi: Enqueue, Dequeue, Peek",
          duration: 2,
        },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 8,
  },
  {
    id: 4,
    name: "Cây (Tree)",
    description: "Học về cấu trúc cây nhị phân, cây tìm kiếm và cây AVL",
    lessons: {
      1: [
        {
          id: 13,
          name: "Giới thiệu về Cây: Khái niệm và Cấu trúc",
          duration: 2,
        },
        { id: 14, name: "Cây nhị phân: Khái niệm và Cài đặt", duration: 2 },
        {
          id: 15,
          name: "Cây nhị phân tìm kiếm (BST): Khái niệm và Ứng dụng",
          duration: 2,
        },
        {
          id: 16,
          name: "Cây AVL và Cây đỏ đen: Cấu trúc và Tính chất",
          duration: 2,
        },
        {
          id: 17,
          name: "Các thao tác trên Cây: Thêm, Xóa, Duyệt",
          duration: 2,
        },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 10,
  },
  {
    id: 5,
    name: "Đồ thị (Graph)",
    description: "Tìm hiểu về đồ thị và các thuật toán trên đồ thị",
    lessons: {
      1: [
        {
          id: 18,
          name: "Giới thiệu về Đồ thị: Khái niệm và Cấu trúc",
          duration: 2,
        },
        {
          id: 19,
          name: "Đại diện đồ thị: Ma trận kề và Danh sách kề",
          duration: 2,
        },
        { id: 20, name: "Các thuật toán đồ thị cơ bản: BFS, DFS", duration: 2 },
        {
          id: 21,
          name: "Thuật toán Dijkstra và Thuật toán Floyd-Warshall",
          duration: 2,
        },
        { id: 22, name: "Ứng dụng của Đồ thị trong Thực tế", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 10,
  },
  {
    id: 6,
    name: "Các thuật toán tìm kiếm và sắp xếp",
    description:
      "Nắm vững các thuật toán tìm kiếm và sắp xếp cơ bản và nâng cao",
    lessons: {
      1: [
        {
          id: 23,
          name: "Thuật toán tìm kiếm tuyến tính: Khái niệm và Cài đặt",
          duration: 2,
        },
        {
          id: 24,
          name: "Thuật toán tìm kiếm nhị phân: Khái niệm và Cài đặt",
          duration: 2,
        },
        {
          id: 25,
          name: "Thuật toán sắp xếp nổi bọt: Khái niệm và Cài đặt",
          duration: 2,
        },
        {
          id: 26,
          name: "Thuật toán sắp xếp chọn: Khái niệm và Cài đặt",
          duration: 2,
        },
        {
          id: 27,
          name: "Thuật toán sắp xếp chèn: Khái niệm và Cài đặt",
          duration: 2,
        },
        {
          id: 28,
          name: "Thuật toán sắp xếp trộn: Khái niệm và Cài đặt",
          duration: 2,
        },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 12,
  },
  {
    id: 7,
    name: "Đệ quy và Quy hoạch động",
    description: "Học về đệ quy và ứng dụng quy hoạch động trong giải thuật",
    lessons: {
      1: [
        { id: 29, name: "Khái niệm Đệ quy và Các loại Đệ quy", duration: 2 },
        {
          id: 30,
          name: "Các bài toán đệ quy cơ bản: Tính giai thừa, Dãy Fibonacci",
          duration: 2,
        },
        { id: 31, name: "Quy hoạch động: Khái niệm và Ứng dụng", duration: 2 },
        {
          id: 32,
          name: "Các bài toán quy hoạch động cơ bản: Bài toán Cái Balo, Bài toán Chuỗi",
          duration: 2,
        },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 8,
  },
  {
    id: 8,
    name: "Thuật toán tham lam và Backtracking",
    description: "Tìm hiểu về thuật toán tham lam và phương pháp backtracking",
    lessons: {
      1: [
        {
          id: 33,
          name: "Khái niệm Thuật toán tham lam và Các bài toán cơ bản",
          duration: 2,
        },
        {
          id: 34,
          name: "Thuật toán tham lam: Bài toán Cây Khung nhỏ nhất, Bài toán Đường đi ngắn nhất",
          duration: 2,
        },
        {
          id: 35,
          name: "Khái niệm Backtracking và Ứng dụng trong Bài toán N-Queens",
          duration: 2,
        },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 6,
  },
  {
    id: 9,
    name: "Dự án: Xây dựng ứng dụng tìm đường ngắn nhất",
    description:
      "Thực hiện dự án xây dựng ứng dụng tìm đường sử dụng thuật toán đồ thị",
    lessons: {
      1: [
        {
          id: 36,
          name: "Lập kế hoạch dự án và Phân tích yêu cầu",
          duration: 2,
        },
        {
          id: 37,
          name: "Thiết kế và cài đặt thuật toán tìm đường: Thuật toán Dijkstra, Thuật toán A*",
          duration: 2,
        },
        {
          id: 38,
          name: "Xây dựng giao diện người dùng: Hiển thị đồ thị, Tô màu đường đi",
          duration: 2,
        },
        {
          id: 39,
          name: "Kiểm tra và gỡ lỗi: Tìm và sửa lỗi, Tối ưu hóa hiệu suất",
          duration: 2,
        },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 8,
  },
  {
    id: 10,
    name: "Cấu trúc dữ liệu nâng cao: Heap và Hash Table",
    description: "Học về các cấu trúc dữ liệu nâng cao như Heap và Hash Table",
    lessons: {
      1: [
        { id: 40, name: "Heap: Khái niệm và Cài đặt", duration: 2 },
        {
          id: 41,
          name: "Các thao tác trên Heap: Thêm, Xóa, Duyệt",
          duration: 2,
        },
        { id: 42, name: "Hash Table: Khái niệm và Cài đặt", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 6,
  },
  {
    id: 11,
    name: "Dự án cuối khóa: Ứng dụng tìm kiếm và sắp xếp dữ liệu",
    description: "Thực hiện dự án cuối khóa về tìm kiếm và sắp xếp dữ liệu",
    lessons: {
      1: [
        {
          id: 43,
          name: "Lập kế hoạch và Phân tích yêu cầu dự án",
          duration: 2,
        },
        {
          id: 44,
          name: "Thiết kế và cài đặt thuật toán tìm kiếm và sắp xếp",
          duration: 2,
        },
        {
          id: 45,
          name: "Xây dựng giao diện người dùng cho ứng dụng",
          duration: 2,
        },
        {
          id: 46,
          name: "Kiểm tra, tối ưu hóa và triển khai ứng dụng",
          duration: 2,
        },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 8,
  },
];
