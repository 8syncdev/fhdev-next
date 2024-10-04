import { ConstCourseType } from "../type";
import { urlImageCourse } from "../../firebase";

const courseDataStructuresAlgorithms: ConstCourseType = {
  // Use to filter course
  rating: 4.9,
  originalPrice: 2500000,
  price: 1250000,
  duration: 100, // Tổng thời lượng 100 giờ
  language: ["cpp"],
  slug: "course-data-structures-algorithms",
  imgSrc: urlImageCourse['cpp'],
  category: "foundation",
  // Course detail
  nameCourse: "Khóa học Cấu trúc dữ liệu và Giải thuật cho người mới bắt đầu",
  description:
    "Khóa học này giúp bạn nắm vững các khái niệm cơ bản và nâng cao của cấu trúc dữ liệu và giải thuật, từ đó xây dựng nền tảng vững chắc trong lập trình.",
  tags: ["Data Structures", "Algorithms", "Programming"],
  newest: true,
  popular: true,
  trending: true,
  content: {
    intro:
      "Khóa học này giúp bạn nắm vững các khái niệm cơ bản và nâng cao của cấu trúc dữ liệu và giải thuật, từ đó xây dựng nền tảng vững chắc trong lập trình.",
    purposes: [
      "Hiểu rõ các cấu trúc dữ liệu cơ bản và nâng cao",
      "Phát triển kỹ năng giải quyết vấn đề hiệu quả",
      "Nắm vững các thuật toán tìm kiếm và sắp xếp",
      "Áp dụng các thuật toán và cấu trúc dữ liệu vào các dự án thực tế",
    ],
    results: [
      "Có khả năng phân tích và lựa chọn cấu trúc dữ liệu phù hợp",
      "Sử dụng thành thạo các thuật toán tìm kiếm và sắp xếp",
      "Phát triển các ứng dụng phần mềm sử dụng các cấu trúc dữ liệu và thuật toán",
      "Giải quyết các vấn đề lập trình phức tạp một cách hiệu quả",
    ],
    orientedUsers: [
      "Sinh viên ngành Công nghệ Thông tin",
      "Những người mới bắt đầu học lập trình",
      "Lập trình viên muốn nâng cao kiến thức về cấu trúc dữ liệu và giải thuật",
      "Người muốn tham gia các cuộc thi lập trình",
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
      nameLesson: "Giới thiệu về Cấu trúc dữ liệu và Giải thuật",
      duration: 6, // 3 buổi
      detailLessons: [
        { nameDetailLesson: "Cấu trúc dữ liệu là gì?", duration: 2 },
        { nameDetailLesson: "Giải thuật là gì?", duration: 2 },
        {
          nameDetailLesson:
            "Phân loại và Ứng dụng của Cấu trúc dữ liệu và Giải thuật",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Mảng và Danh sách liên kết",
      duration: 10, // 5 buổi
      detailLessons: [
        {
          nameDetailLesson: "Mảng và Các thao tác cơ bản trên Mảng",
          duration: 2,
        },
        {
          nameDetailLesson: "Tạo, Truy cập và Sửa đổi Phần tử trong Mảng",
          duration: 2,
        },
        {
          nameDetailLesson: "Danh sách liên kết đơn: Khái niệm và Cài đặt",
          duration: 2,
        },
        {
          nameDetailLesson: "Danh sách liên kết kép: Khái niệm và Cài đặt",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Các thao tác trên danh sách liên kết: Thêm, Xóa, Duyệt",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Ngăn xếp và Hàng đợi",
      duration: 8, // 4 buổi
      detailLessons: [
        {
          nameDetailLesson: "Giới thiệu về Ngăn xếp: Khái niệm và Ứng dụng",
          duration: 2,
        },
        {
          nameDetailLesson: "Các thao tác trên Ngăn xếp: Push, Pop, Peek",
          duration: 2,
        },
        {
          nameDetailLesson: "Giới thiệu về Hàng đợi: Khái niệm và Ứng dụng",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Các thao tác trên Hàng đợi: Enqueue, Dequeue, Peek",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Cây (Tree)",
      duration: 10, // 5 buổi
      detailLessons: [
        {
          nameDetailLesson: "Giới thiệu về Cây: Khái niệm và Cấu trúc",
          duration: 2,
        },
        { nameDetailLesson: "Cây nhị phân: Khái niệm và Cài đặt", duration: 2 },
        {
          nameDetailLesson:
            "Cây nhị phân tìm kiếm (BST): Khái niệm và Ứng dụng",
          duration: 2,
        },
        {
          nameDetailLesson: "Cây AVL và Cây đỏ đen: Cấu trúc và Tính chất",
          duration: 2,
        },
        {
          nameDetailLesson: "Các thao tác trên Cây: Thêm, Xóa, Duyệt",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Đồ thị (Graph)",
      duration: 10, // 5 buổi
      detailLessons: [
        {
          nameDetailLesson: "Giới thiệu về Đồ thị: Khái niệm và Cấu trúc",
          duration: 2,
        },
        {
          nameDetailLesson: "Đại diện đồ thị: Ma trận kề và Danh sách kề",
          duration: 2,
        },
        {
          nameDetailLesson: "Các thuật toán đồ thị cơ bản: BFS, DFS",
          duration: 2,
        },
        {
          nameDetailLesson: "Thuật toán Dijkstra và Thuật toán Floyd-Warshall",
          duration: 2,
        },
        { nameDetailLesson: "Ứng dụng của Đồ thị trong Thực tế", duration: 2 },
      ],
    },
    {
      nameLesson: "Các thuật toán tìm kiếm và sắp xếp",
      duration: 12, // 6 buổi
      detailLessons: [
        {
          nameDetailLesson:
            "Thuật toán tìm kiếm tuyến tính: Khái niệm và Cài đặt",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Thuật toán tìm kiếm nhị phân: Khái niệm và Cài đặt",
          duration: 2,
        },
        {
          nameDetailLesson: "Thuật toán sắp xếp nổi bọt: Khái niệm và Cài đặt",
          duration: 2,
        },
        {
          nameDetailLesson: "Thuật toán sắp xếp chọn: Khái niệm và Cài đặt",
          duration: 2,
        },
        {
          nameDetailLesson: "Thuật toán sắp xếp chèn: Khái niệm và Cài đặt",
          duration: 2,
        },
        {
          nameDetailLesson: "Thuật toán sắp xếp trộn: Khái niệm và Cài đặt",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Đệ quy và Quy hoạch động",
      duration: 8, // 4 buổi
      detailLessons: [
        {
          nameDetailLesson: "Khái niệm Đệ quy và Các loại Đệ quy",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Các bài toán đệ quy cơ bản: Tính giai thừa, Dãy Fibonacci",
          duration: 2,
        },
        {
          nameDetailLesson: "Quy hoạch động: Khái niệm và Ứng dụng",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Các bài toán quy hoạch động cơ bản: Bài toán Cái Balo, Bài toán Chuỗi",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Thuật toán tham lam và Backtracking",
      duration: 6, // 3 buổi
      detailLessons: [
        {
          nameDetailLesson:
            "Khái niệm Thuật toán tham lam và Các bài toán cơ bản",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Thuật toán tham lam: Bài toán Cây Khung nhỏ nhất, Bài toán Đường đi ngắn nhất",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Khái niệm Backtracking và Ứng dụng trong Bài toán N-Queens",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Dự án: Xây dựng ứng dụng tìm đường ngắn nhất",
      duration: 8, // 4 buổi
      detailLessons: [
        {
          nameDetailLesson: "Lập kế hoạch dự án và Phân tích yêu cầu",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Thiết kế và cài đặt thuật toán tìm đường: Thuật toán Dijkstra, Thuật toán A*",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Xây dựng giao diện người dùng: Hiển thị đồ thị, Tô màu đường đi",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Kiểm tra và gỡ lỗi: Tìm và sửa lỗi, Tối ưu hóa hiệu suất",
          duration: 2,
        },
      ],
    },
    // Các bài học mở rộng
    {
      nameLesson: "Hệ thống số và phép toán trên bit",
      duration: 6, // 3 buổi
      detailLessons: [
        {
          nameDetailLesson:
            "Giới thiệu về hệ thống số: nhị phân, thập lục phân",
          duration: 2,
        },
        {
          nameDetailLesson: "Phép toán trên bit: AND, OR, XOR, NOT",
          duration: 2,
        },
        {
          nameDetailLesson: "Các bài toán ứng dụng phép toán trên bit",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Cấu trúc dữ liệu nâng cao: Heap và Hash Table",
      duration: 6, // 3 buổi
      detailLessons: [
        {
          nameDetailLesson: "Heap: Khái niệm và Cài đặt",
          duration: 2,
        },
        {
          nameDetailLesson: "Các thao tác trên Heap: Thêm, Xóa, Duyệt",
          duration: 2,
        },
        {
          nameDetailLesson: "Hash Table: Khái niệm và Cài đặt",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Lý thuyết đồ thị nâng cao",
      duration: 6, // 3 buổi
      detailLessons: [
        {
          nameDetailLesson: "Giới thiệu về lý thuyết đồ thị nâng cao",
          duration: 2,
        },
        {
          nameDetailLesson: "Thuật toán Prim và Kruskal",
          duration: 2,
        },
        {
          nameDetailLesson: "Đồ thị Euler và Đồ thị Hamilton",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Xử lý chuỗi và thuật toán văn bản",
      duration: 6, // 3 buổi
      detailLessons: [
        {
          nameDetailLesson: "Khái niệm xử lý chuỗi",
          duration: 2,
        },
        {
          nameDetailLesson: "Thuật toán tìm kiếm mẫu: KMP, Boyer-Moore",
          duration: 2,
        },
        {
          nameDetailLesson: "Thuật toán Rabin-Karp",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Các thuật toán nén dữ liệu",
      duration: 6, // 3 buổi
      detailLessons: [
        {
          nameDetailLesson: "Giới thiệu về nén dữ liệu",
          duration: 2,
        },
        {
          nameDetailLesson: "Thuật toán Huffman",
          duration: 2,
        },
        {
          nameDetailLesson: "Thuật toán LZW",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Các thuật toán đồ họa cơ bản",
      duration: 6, // 3 buổi
      detailLessons: [
        {
          nameDetailLesson: "Giới thiệu về thuật toán đồ họa",
          duration: 2,
        },
        {
          nameDetailLesson: "Thuật toán vẽ đường thẳng: Bresenham, DDA",
          duration: 2,
        },
        {
          nameDetailLesson: "Thuật toán tô màu: Flood Fill, Scanline Fill",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Các thuật toán tối ưu hóa",
      duration: 6, // 3 buổi
      detailLessons: [
        {
          nameDetailLesson: "Giới thiệu về thuật toán tối ưu hóa",
          duration: 2,
        },
        {
          nameDetailLesson: "Thuật toán Simplex cho bài toán LP",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Thuật toán tối ưu hóa toàn cục: Genetic Algorithms",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Dự án cuối khóa: Ứng dụng tìm kiếm và sắp xếp dữ liệu",
      duration: 8, // 4 buổi
      detailLessons: [
        {
          nameDetailLesson: "Lập kế hoạch và Phân tích yêu cầu dự án",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Thiết kế và cài đặt thuật toán tìm kiếm và sắp xếp",
          duration: 2,
        },
        {
          nameDetailLesson: "Xây dựng giao diện người dùng cho ứng dụng",
          duration: 2,
        },
        {
          nameDetailLesson: "Kiểm tra, tối ưu hóa và triển khai ứng dụng",
          duration: 2,
        },
      ],
    },
  ],
};

export default courseDataStructuresAlgorithms;
