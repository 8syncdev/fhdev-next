import { ConstCourseType } from "../type";
import { urlImageCourse } from "../../firebase";

const courseDataStructuresAlgorithms: ConstCourseType = {
  // Use to filter course
  rating: 4.9,
  originalPrice: 5500000,
  price: 3300000,
  duration: 300, // Tổng thời lượng 300 giờ
  language: ["cpp"],
  slug: "course-data-structures-algorithms",
  imgSrc: urlImageCourse['dsa'],
  category: "foundation",
  // Course detail
  nameCourse: "Khóa học Cấu trúc dữ liệu và Giải thuật cho người mới bắt đầu",
  description:
    "Khóa học CTDL&GT giúp bạn nắm vững các khái niệm cơ bản và nâng cao về cấu trúc dữ liệu và giải thuật. Bạn sẽ học cách áp dụng kiến thức vào giải quyết các bài toán thực tế, nâng cao kỹ năng tư duy logic và tối ưu hóa code. Khóa học bao gồm các chủ đề về mảng, danh sách liên kết, ngăn xếp, hàng đợi, cây, đồ thị, và các thuật toán tìm kiếm, sắp xếp.",
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
      "Giảng viên có nhiều năm kinh nghiệm giảng dạy và làm việc thực tế",
      "Nội dung khóa học được cập nhật liên tục, bám sát xu hướng công nghệ",
      "Học viên được thực hành qua nhiều bài tập và dự án thực tế",
      "Hỗ trợ 1-1 từ giảng viên và cộng đồng học viên",
      "Chứng chỉ sau khi hoàn thành khóa học",
      "Cơ hội việc làm và thực tập tại các công ty đối tác",
      "100% giảng viên, trợ giảng đạt giải lập trình cấp tỉnh, quốc gia",
      "Hệ thống website chấm bài tự động, xếp hạng, đo lường từng bài tập",
      "Số lượng bài tập lên tới 300-500 bài",
      "Tài liệu biên soạn chuyên sâu xem trước",
      "Hỗ trợ giải đáp thắc mắc của học viên 24/7",
      "Kiểm tra, sửa chữa từng dòng code cho học viên",
      "Video xem lại sau mỗi buổi học",
    ],
  },
  lessons: [
    {
      nameLesson: "Phần 1: Giới thiệu về Cấu trúc dữ liệu và Giải thuật",
      duration: 6,
      detailLessons: [
        {
          nameDetailLesson: "Bài 1: Cấu trúc dữ liệu là gì?",
          duration: 2,
          content: [
            "Định nghĩa và vai trò của cấu trúc dữ liệu trong lập trình",
            "Các loại cấu trúc dữ liệu cơ bản",
            "Ví dụ minh họa và ứng dụng thực tế"
          ]
        },
        {
          nameDetailLesson: "Bài 2: Giải thuật là gì?",
          duration: 2,
          content: [
            "Khái niệm về giải thuật và tầm quan trọng trong lập trình",
            "Các đặc điểm của một giải thuật tốt",
            "Phân tích độ phức tạp của giải thuật"
          ]
        },
        {
          nameDetailLesson: "Bài 3: Phân loại và Ứng dụng của Cấu trúc dữ liệu và Giải thuật",
          duration: 2,
          content: [
            "Phân loại cấu trúc dữ liệu: tuyến tính và phi tuyến tính",
            "Phân loại giải thuật: tìm kiếm, sắp xếp, đệ quy, etc.",
            "Ứng dụng của CTDL&GT trong các lĩnh vực khác nhau"
          ]
        }
      ]
    },
    {
      nameLesson: "Phần 2: Mảng và Danh sách liên kết",
      duration: 10,
      detailLessons: [
        {
          nameDetailLesson: "Bài 4: Mảng và Các thao tác cơ bản trên Mảng",
          duration: 2,
          content: [
            "Định nghĩa và đặc điểm của mảng",
            "Cách khai báo và sử dụng mảng trong C++",
            "Các thao tác cơ bản: truy cập, thêm, xóa phần tử"
          ]
        },
        {
          nameDetailLesson: "Bài 5: Tạo, Truy cập và Sửa đổi Phần tử trong Mảng",
          duration: 2,
          content: [
            "Cách tạo mảng động và mảng tĩnh",
            "Kỹ thuật truy cập và sửa đổi phần tử trong mảng",
            "Bài tập thực hành: Xử lý mảng (10 bài tập)"
          ]
        },
        {
          nameDetailLesson: "Bài 6: Danh sách liên kết đơn: Khái niệm và Cài đặt",
          duration: 2,
          content: [
            "Định nghĩa và cấu trúc của danh sách liên kết đơn",
            "Cài đặt danh sách liên kết đơn trong C++",
            "So sánh ưu nhược điểm của danh sách liên kết đơn với mảng"
          ]
        },
        {
          nameDetailLesson: "Bài 7: Danh sách liên kết kép: Khái niệm và Cài đặt",
          duration: 2,
          content: [
            "Định nghĩa và cấu trúc của danh sách liên kết kép",
            "Cài đặt danh sách liên kết kép trong C++",
            "So sánh danh sách liên kết kép với danh sách liên kết đơn"
          ]
        },
        {
          nameDetailLesson: "Bài 8: Các thao tác trên danh sách liên kết: Thêm, Xóa, Duyệt",
          duration: 2,
          content: [
            "Cài đặt các thao tác thêm, xóa node trong danh sách liên kết",
            "Các phương pháp duyệt danh sách liên kết",
            "Bài tập thực hành: Xử lý danh sách liên kết (15 bài tập)"
          ]
        }
      ]
    },
    {
      nameLesson: "Phần 3: Ngăn xếp và Hàng đợi",
      duration: 8,
      detailLessons: [
        {
          nameDetailLesson: "Bài 9: Giới thiệu về Ngăn xếp: Khái niệm và Ứng dụng",
          duration: 2,
          content: [
            "Định nghĩa và đặc điểm của ngăn xếp",
            "Các ứng dụng của ngăn xếp trong lập trình",
            "Cài đặt ngăn xếp sử dụng mảng và danh sách liên kết"
          ]
        },
        {
          nameDetailLesson: "Bài 10: Các thao tác trên Ngăn xếp: Push, Pop, Peek",
          duration: 2,
          content: [
            "Cài đặt các thao tác Push, Pop, Peek trên ngăn xếp",
            "Xử lý các trường hợp đặc biệt: ngăn xếp rỗng, ngăn xếp đầy",
            "Bài tập thực hành: Ứng dụng ngăn xếp (10 bài tập)"
          ]
        },
        {
          nameDetailLesson: "Bài 11: Giới thiệu về Hàng đợi: Khái niệm và Ứng dụng",
          duration: 2,
          content: [
            "Định nghĩa và đặc điểm của hàng đợi",
            "Các ứng dụng của hàng đợi trong lập trình",
            "Cài đặt hàng đợi sử dụng mảng và danh sách liên kết"
          ]
        },
        {
          nameDetailLesson: "Bài 12: Các thao tác trên Hàng đợi: Enqueue, Dequeue, Peek",
          duration: 2,
          content: [
            "Cài đặt các thao tác Enqueue, Dequeue, Peek trên hàng đợi",
            "Xử lý các trường hợp đặc biệt: hàng đợi rỗng, hàng đợi đầy",
            "Bài tập thực hành: Ứng dụng hàng đợi (10 bài tập)"
          ]
        }
      ]
    },
    {
      nameLesson: "Phần 4: Cây (Tree)",
      duration: 10,
      detailLessons: [
        {
          nameDetailLesson: "Bài 13: Giới thiệu về Cây: Khái niệm và Cấu trúc",
          duration: 2,
          content: [
            "Định nghĩa và thuật ngữ cơ bản về cây",
            "Các loại cây: cây nhị phân, cây tìm kiếm nhị phân, cây cân bằng",
            "Ứng dụng của cây trong lập trình và cuộc sống"
          ]
        },
        {
          nameDetailLesson: "Bài 14: Cây nhị phân: Khái niệm và Cài đặt",
          duration: 2,
          content: [
            "Định nghĩa và đặc điểm của cây nhị phân",
            "Cài đặt cấu trúc cây nhị phân trong C++",
            "Các phép duyệt cây: tiền thứ tự, trung thứ tự, hậu thứ tự"
          ]
        },
        {
          nameDetailLesson: "Bài 15: Cây nhị phân tìm kiếm (BST): Khái niệm và Ứng dụng",
          duration: 2,
          content: [
            "Định nghĩa và tính chất của cây nhị phân tìm kiếm",
            "Cài đặt các thao tác trên BST: thêm, xóa, tìm kiếm",
            "Ứng dụng của BST trong các bài toán thực tế"
          ]
        },
        {
          nameDetailLesson: "Bài 16: Cây AVL và Cây đỏ đen: Cấu trúc và Tính chất",
          duration: 2,
          content: [
            "Giới thiệu về cây cân bằng và tầm quan trọng",
            "Cấu trúc và tính chất của cây AVL",
            "Cấu trúc và tính chất của cây đỏ đen"
          ]
        },
        {
          nameDetailLesson: "Bài 17: Các thao tác trên Cây: Thêm, Xóa, Duyệt",
          duration: 2,
          content: [
            "Cài đặt thao tác thêm node vào cây",
            "Cài đặt thao tác xóa node khỏi cây",
            "Bài tập thực hành: Xử lý cây (15 bài tập)"
          ]
        }
      ]
    },
    {
      nameLesson: "Phần 5: Đồ thị (Graph)",
      duration: 10,
      detailLessons: [
        {
          nameDetailLesson: "Bài 18: Giới thiệu về Đồ thị: Khái niệm và Cấu trúc",
          duration: 2,
          content: [
            "Định nghĩa và thuật ngữ cơ bản về đồ thị",
            "Các loại đồ thị: có hướng, vô hướng, có trọng số",
            "Ứng dụng của đồ thị trong các bài toán thực tế"
          ]
        },
        {
          nameDetailLesson: "Bài 19: Đại diện đồ thị: Ma trận kề và Danh sách kề",
          duration: 2,
          content: [
            "Cách biểu diễn đồ thị bằng ma trận kề",
            "Cách biểu diễn đồ thị bằng danh sách kề",
            "So sánh ưu nhược điểm của hai phương pháp biểu diễn"
          ]
        },
        {
          nameDetailLesson: "Bài 20: Các thuật toán đồ thị cơ bản: BFS, DFS",
          duration: 2,
          content: [
            "Thuật toán duyệt đồ thị theo chiều rộng (BFS)",
            "Thuật toán duyệt đồ thị theo chiều sâu (DFS)",
            "Cài đặt và ứng dụng của BFS và DFS"
          ]
        },
        {
          nameDetailLesson: "Bài 21: Thuật toán Dijkstra và Thuật toán Floyd-Warshall",
          duration: 2,
          content: [
            "Bài toán đường đi ngắn nhất trên đồ thị",
            "Thuật toán Dijkstra: ý tưởng và cài đặt",
            "Thuật toán Floyd-Warshall: ý tưởng và cài đặt"
          ]
        },
        {
          nameDetailLesson: "Bài 22: Ứng dụng của Đồ thị trong Thực tế",
          duration: 2,
          content: [
            "Ứng dụng đồ thị trong bài toán tìm đường đi",
            "Ứng dụng đồ thị trong mạng xã hội",
            "Bài tập thực hành: Xử lý đồ thị (15 bài tập)"
          ]
        }
      ]
    },
    {
      nameLesson: "Phần 6: Các thuật toán tìm kiếm và sắp xếp",
      duration: 12,
      detailLessons: [
        {
          nameDetailLesson: "Bài 23: Thuật toán tìm kiếm tuyến tính: Khái niệm và Cài đặt",
          duration: 2,
          content: [
            "Giới thiệu về thuật toán tìm kiếm tuyến tính",
            "Cài đặt thuật toán tìm kiếm tuyến tính trong C++",
            "Phân tích độ phức tạp và ứng dụng"
          ]
        },
        {
          nameDetailLesson: "Bài 24: Thuật toán tìm kiếm nhị phân: Khái niệm và Cài đặt",
          duration: 2,
          content: [
            "Giới thiệu về thuật toán tìm kiếm nhị phân",
            "Cài đặt thuật toán tìm kiếm nhị phân trong C++",
            "So sánh hiệu suất với tìm kiếm tuyến tính"
          ]
        },
        {
          nameDetailLesson: "Bài 25: Thuật toán sắp xếp nổi bọt: Khái niệm và Cài đặt",
          duration: 2,
          content: [
            "Giới thiệu về thuật toán sắp xếp nổi bọt",
            "Cài đặt thuật toán sắp xếp nổi bọt trong C++",
            "Phân tích độ phức tạp và ưu nhược điểm"
          ]
        },
        {
          nameDetailLesson: "Bài 26: Thuật toán sắp xếp chọn: Khái niệm và Cài đặt",
          duration: 2,
          content: [
            "Giới thiệu về thuật toán sắp xếp chọn",
            "Cài đặt thuật toán sắp xếp chọn trong C++",
            "So sánh với thuật toán sắp xếp nổi bọt"
          ]
        },
        {
          nameDetailLesson: "Bài 27: Thuật toán sắp xếp chèn: Khái niệm và Cài đặt",
          duration: 2,
          content: [
            "Giới thiệu về thuật toán sắp xếp chèn",
            "Cài đặt thuật toán sắp xếp chèn trong C++",
            "Ứng dụng và so sánh với các thuật toán khác"
          ]
        },
        {
          nameDetailLesson: "Bài 28: Thuật toán sắp xếp trộn: Khái niệm và Cài đặt",
          duration: 2,
          content: [
            "Giới thiệu về thuật toán sắp xếp trộn",
            "Cài đặt thuật toán sắp xếp trộn trong C++",
            "Phân tích độ phức tạp và ứng dụng thực tế"
          ]
        }
      ]
    },
    {
      nameLesson: "Phần 7: Đệ quy và Quy hoạch động",
      duration: 8,
      detailLessons: [
        {
          nameDetailLesson: "Bài 29: Khái niệm Đệ quy và Các loại Đệ quy",
          duration: 2,
          content: [
            "Định nghĩa và nguyên lý hoạt động của đệ quy",
            "Các loại đệ quy: đơn, đa, đuôi",
            "Ưu nhược điểm của phương pháp đệ quy"
          ]
        },
        {
          nameDetailLesson: "Bài 30: Các bài toán đệ quy cơ bản: Tính giai thừa, Dãy Fibonacci",
          duration: 2,
          content: [
            "Cài đặt bài toán tính giai thừa bằng đệ quy",
            "Cài đặt bài toán tính dãy Fibonacci bằng đệ quy",
            "Bài tập thực hành: Giải các bài toán bằng đệ quy (10 bài tập)"
          ]
        },
        {
          nameDetailLesson: "Bài 31: Quy hoạch động: Khái niệm và Ứng dụng",
          duration: 2,
          content: [
            "Định nghĩa và nguyên lý của quy hoạch động",
            "So sánh quy hoạch động với đệ quy",
            "Các bước giải quyết bài toán bằng quy hoạch động"
          ]
        },
        {
          nameDetailLesson: "Bài 32: Các bài toán quy hoạch động cơ bản: Bài toán Cái Balo, Bài toán Chuỗi",
          duration: 2,
          content: [
            "Giải quyết bài toán Cái Balo bằng quy hoạch động",
            "Giải quyết bài toán Chuỗi con chung dài nhất",
            "Bài tập thực hành: Giải các bài toán bằng quy hoạch động (10 bài tập)"
          ]
        }
      ]
    },
    {
      nameLesson: "Phần 8: Thuật toán tham lam và Backtracking",
      duration: 6,
      detailLessons: [
        {
          nameDetailLesson: "Bài 33: Khái niệm Thuật toán tham lam và Các bài toán cơ bản",
          duration: 2,
          content: [
            "Định nghĩa và nguyên lý của thuật toán tham lam",
            "Ưu nhược điểm của phương pháp tham lam",
            "Các bài toán cơ bản giải bằng thuật toán tham lam"
          ]
        },
        {
          nameDetailLesson: "Bài 34: Thuật toán tham lam: Bài toán Cây Khung nhỏ nhất, Bài toán Đường đi ngắn nhất",
          duration: 2,
          content: [
            "Giải quyết bài toán Cây Khung nhỏ nhất bằng thuật toán Kruskal",
            "Giải quyết bài toán Đường đi ngắn nhất bằng thuật toán Dijkstra",
            "Bài tập thực hành: Giải các bài toán bằng thuật toán tham lam (10 bài tập)"
          ]
        },
        {
          nameDetailLesson: "Bài 35: Khái niệm Backtracking và Ứng dụng trong Bài toán N-Queens",
          duration: 2,
          content: [
            "Định nghĩa và nguyên lý của phương pháp Backtracking",
            "Cài đặt thuật toán giải bài toán N-Queens",
            "Bài tập thực hành: Giải các bài toán bằng Backtracking (10 bài tập)"
          ]
        }
      ]
    },
    {
      nameLesson: "Phần 9: Dự án: Xây dựng ứng dụng tìm đường ngắn nhất",
      duration: 8,
      detailLessons: [
        {
          nameDetailLesson: "Bài 36: Lập kế hoạch dự án và Phân tích yêu cầu",
          duration: 2,
          content: [
            "Xác định mục tiêu và phạm vi của dự án",
            "Phân tích yêu cầu chức năng và phi chức năng",
            "Thiết kế cấu trúc dữ liệu và lựa chọn thuật toán phù hợp"
          ]
        },
        {
          nameDetailLesson: "Bài 37: Thiết kế và cài đặt thuật toán tìm đường: Thuật toán Dijkstra, Thuật toán A*",
          duration: 2,
          content: [
            "Cài đặt thuật toán Dijkstra cho bài toán tìm đường ngắn nhất",
            "Cài đặt thuật toán A* cho bài toán tìm đường ngắn nhất",
            "So sánh hiệu suất của hai thuật toán"
          ]
        },
        {
          nameDetailLesson: "Bài 38: Xây dựng giao diện người dùng: Hiển thị đồ thị, Tô màu đường đi",
          duration: 2,
          content: [
            "Thiết kế giao diện người dùng cho ứng dụng",
            "Cài đặt chức năng hiển thị đồ thị",
            "Cài đặt chức năng tô màu đường đi ngắn nhất"
          ]
        },
        {
          nameDetailLesson: "Bài 39: Kiểm tra và gỡ lỗi: Tìm và sửa lỗi, Tối ưu hóa hiệu suất",
          duration: 2,
          content: [
            "Kiểm tra và gỡ lỗi cho ứng dụng",
            "Tối ưu hóa hiệu suất của thuật toán và giao diện",
            "Hoàn thiện và trình bày dự án"
          ]
        }
      ]
    },
    {
      nameLesson: "Phần 10: Hệ thống số và phép toán trên bit",
      duration: 6,
      detailLessons: [
        {
          nameDetailLesson: "Bài 40: Giới thiệu về hệ thống số: nhị phân, thập lục phân",
          duration: 2,
          content: [
            "Giới thiệu về các hệ thống số: nhị phân, thập phân, thập lục phân",
            "Cách chuyển đổi giữa các hệ số",
            "Ứng dụng của các hệ số trong lập trình"
          ]
        },
        {
          nameDetailLesson: "Bài 41: Phép toán trên bit: AND, OR, XOR, NOT",
          duration: 2,
          content: [
            "Giới thiệu về các phép toán trên bit",
            "Cài đặt các phép toán AND, OR, XOR, NOT trong C++",
            "Ứng dụng của phép toán trên bit trong tối ưu hóa"
          ]
        },
        {
          nameDetailLesson: "Bài 42: Các bài toán ứng dụng phép toán trên bit",
          duration: 2,
          content: [
            "Giải quyết bài toán tìm số xuất hiện một lần trong mảng",
            "Giải quyết bài toán đếm số bit 1 trong một số nguyên",
            "Bài tập thực hành: Giải các bài toán sử dụng phép toán trên bit (10 bài tập)"
          ]
        }
      ]
    },
    {
      nameLesson: "Phần 11: Cấu trúc dữ liệu nâng cao: Heap và Hash Table",
      duration: 6,
      detailLessons: [
        {
          nameDetailLesson: "Bài 43: Heap: Khái niệm và Cài đặt",
          duration: 2,
          content: [
            "Định nghĩa và tính chất của Heap",
            "Cài đặt cấu trúc Heap trong C++",
            "Ứng dụng của Heap trong các bài toán sắp xếp và tìm kiếm"
          ]
        },
        {
          nameDetailLesson: "Bài 44: Các thao tác trên Heap: Thêm, Xóa, Duyệt",
          duration: 2,
          content: [
            "Cài đặt thao tác thêm phần tử vào Heap",
            "Cài đặt thao tác xóa phần tử khỏi Heap",
            "Bài tập thực hành: Xử lý Heap (10 bài tập)"
          ]
        },
        {
          nameDetailLesson: "Bài 45: Hash Table: Khái niệm và Cài đặt",
          duration: 2,
          content: [
            "Định nghĩa và nguyên lý hoạt động của Hash Table",
            "Cài đặt Hash Table trong C++",
            "Xử lý va chạm trong Hash Table"
          ]
        }
      ]
    },
    {
      nameLesson: "Phần 12: Lý thuyết đồ thị nâng cao",
      duration: 6,
      detailLessons: [
        {
          nameDetailLesson: "Bài 46: Giới thiệu về lý thuyết đồ thị nâng cao",
          duration: 2,
          content: [
            "Các khái niệm nâng cao trong lý thuyết đồ thị",
            "Đồ thị có trọng số và đồ thị đa đồ thị",
            "Ứng dụng của đồ thị nâng cao trong các bài toán thực tế"
          ]
        },
        {
          nameDetailLesson: "Bài 47: Thuật toán Prim và Kruskal",
          duration: 2,
          content: [
            "Giới thiệu về bài toán Cây khung nhỏ nhất",
            "Cài đặt thuật toán Prim",
            "Cài đặt thuật toán Kruskal"
          ]
        },
        {
          nameDetailLesson: "Bài 48: Đồ thị Euler và Đồ thị Hamilton",
          duration: 2,
          content: [
            "Định nghĩa và tính chất của đồ thị Euler",
            "Định nghĩa và tính chất của đồ thị Hamilton",
            "Bài tập thực hành: Giải các bài toán về đồ thị Euler và Hamilton (10 bài tập)"
          ]
        }
      ]
    },
    {
      nameLesson: "Phần 13: Xử lý chuỗi và thuật toán văn bản",
      duration: 6,
      detailLessons: [
        {
          nameDetailLesson: "Bài 49: Khái niệm xử lý chuỗi",
          duration: 2,
          content: [
            "Giới thiệu về xử lý chuỗi và ý nghĩa trong lập trình",
            "Các thao tác cơ bản trên chuỗi trong C++",
            "Bài tập thực hành: Xử lý chuỗi cơ bản (10 bài tập)"
          ]
        },
        {
          nameDetailLesson: "Bài 50: Thuật toán tìm kiếm mẫu: KMP, Boyer-Moore",
          duration: 2,
          content: [
            "Giới thiệu về bài toán tìm kiếm mẫu",
            "Cài đặt thuật toán KMP (Knuth-Morris-Pratt)",
            "Cài đặt thuật toán Boyer-Moore"
          ]
        },
        {
          nameDetailLesson: "Bài 51: Thuật toán Rabin-Karp",
          duration: 2,
          content: [
            "Giới thiệu về thuật toán Rabin-Karp",
            "Cài đặt thuật toán Rabin-Karp",
            "So sánh hiệu suất của các thuật toán tìm kiếm mẫu"
          ]
        },
      ],
    },
    {
      nameLesson: "Phần 14: Các thuật toán nén dữ liệu",
      duration: 6,
      detailLessons: [
        {
          nameDetailLesson: "Bài 52: Giới thiệu về nén dữ liệu",
          duration: 2,
          content: [
            "Khái niệm và ý nghĩa của nén dữ liệu",
            "Các loại thuật toán nén dữ liệu: nén có mất mát và không mất mát",
            "Ứng dụng của nén dữ liệu trong thực tế"
          ]
        },
        {
          nameDetailLesson: "Bài 53: Thuật toán Huffman",
          duration: 2,
          content: [
            "Nguyên lý hoạt động của thuật toán Huffman",
            "Cài đặt thuật toán Huffman",
            "Bài tập thực hành: Nén và giải nén dữ liệu sử dụng Huffman (5 bài tập)"
          ]
        },
        {
          nameDetailLesson: "Bài 54: Thuật toán LZW",
          duration: 2,
          content: [
            "Nguyên lý hoạt động của thuật toán LZW (Lempel-Ziv-Welch)",
            "Cài đặt thuật toán LZW",
            "So sánh hiệu suất giữa Huffman và LZW",
            "Bài tập thực hành: Nén và giải nén dữ liệu sử dụng LZW (5 bài tập)"
          ]
        },
      ],
    },
    {
      nameLesson: "Phần 15: Các thuật toán đồ họa cơ bản",
      duration: 6,
      detailLessons: [
        {
          nameDetailLesson: "Bài 55: Giới thiệu về thuật toán đồ họa",
          duration: 2,
          content: [
            "Khái niệm và ứng dụng của thuật toán đồ họa",
            "Các khái niệm cơ bản trong đồ họa máy tính",
            "Giới thiệu về hệ tọa độ và biểu diễn điểm, đường thẳng"
          ]
        },
        {
          nameDetailLesson: "Bài 56: Thuật toán vẽ đường thẳng: Bresenham, DDA",
          duration: 2,
          content: [
            "Nguyên lý và cài đặt thuật toán Bresenham",
            "Nguyên lý và cài đặt thuật toán DDA (Digital Differential Analyzer)",
            "So sánh hiệu suất giữa Bresenham và DDA",
            "Bài tập thực hành: Vẽ đường thẳng sử dụng Bresenham và DDA (5 bài tập)"
          ]
        },
        {
          nameDetailLesson: "Bài 57: Thuật toán tô màu: Flood Fill, Scanline Fill",
          duration: 2,
          content: [
            "Nguyên lý và cài đặt thuật toán Flood Fill",
            "Nguyên lý và cài đặt thuật toán Scanline Fill",
            "So sánh ưu nhược điểm của Flood Fill và Scanline Fill",
            "Bài tập thực hành: Tô màu hình đơn giản sử dụng Flood Fill và Scanline Fill (5 bài tập)"
          ]
        },
      ],
    },
    {
      nameLesson: "Phần 16: Các thuật toán tối ưu hóa",
      duration: 6,
      detailLessons: [
        {
          nameDetailLesson: "Bài 58: Giới thiệu về thuật toán tối ưu hóa",
          duration: 2,
          content: [
            "Khái niệm và ý nghĩa của tối ưu hóa trong lập trình",
            "Các loại bài toán tối ưu hóa: tối ưu hóa rời rạc và liên tục",
            "Giới thiệu về các phương pháp tối ưu hóa phổ biến"
          ]
        },
        {
          nameDetailLesson: "Bài 59: Thuật toán Simplex cho bài toán LP",
          duration: 2,
          content: [
            "Giới thiệu về bài toán Quy hoạch tuyến tính (Linear Programming - LP)",
            "Nguyên lý và cài đặt thuật toán Simplex",
            "Bài tập thực hành: Giải bài toán LP sử dụng Simplex (5 bài tập)"
          ]
        },
        {
          nameDetailLesson: "Bài 60: Thuật toán tối ưu hóa toàn cục: Genetic Algorithms",
          duration: 2,
          content: [
            "Giới thiệu về thuật toán di truyền (Genetic Algorithms)",
            "Các thành phần cơ bản của thuật toán di truyền",
            "Cài đặt thuật toán di truyền cho một bài toán tối ưu hóa đơn giản",
            "Bài tập thực hành: Áp dụng thuật toán di truyền (5 bài tập)"
          ]
        },
      ],
    },
    {
      nameLesson: "Phần 17: Dự án cuối khóa: Ứng dụng tìm kiếm và sắp xếp dữ liệu",
      duration: 8,
      detailLessons: [
        {
          nameDetailLesson: "Bài 61: Lập kế hoạch và Phân tích yêu cầu dự án",
          duration: 2,
          content: [
            "Xác định mục tiêu và phạm vi của dự án",
            "Phân tích yêu cầu chức năng và phi chức năng",
            "Lập kế hoạch thực hiện dự án"
          ]
        },
        {
          nameDetailLesson: "Bài 62: Thiết kế và cài đặt thuật toán tìm kiếm và sắp xếp",
          duration: 2,
          content: [
            "Lựa chọn và cài đặt thuật toán tìm kiếm phù hợp",
            "Lựa chọn và cài đặt thuật toán sắp xếp phù hợp",
            "Tối ưu hóa hiệu suất của các thuật toán"
          ]
        },
        {
          nameDetailLesson: "Bài 63: Xây dựng giao diện người dùng cho ứng dụng",
          duration: 2,
          content: [
            "Thiết kế giao diện người dùng thân thiện",
            "Cài đặt giao diện sử dụng thư viện đồ họa",
            "Kết nối giao diện với các thuật toán đã cài đặt"
          ]
        },
        {
          nameDetailLesson: "Bài 64: Kiểm tra, tối ưu hóa và triển khai ứng dụng",
          duration: 2,
          content: [
            "Kiểm tra và sửa lỗi ứng dụng",
            "Tối ưu hóa hiệu suất tổng thể của ứng dụng",
            "Đóng gói và triển khai ứng dụng",
            "Trình bày và đánh giá dự án cuối khóa"
          ]
        },
      ],
    },
  ],
};

export default courseDataStructuresAlgorithms;
