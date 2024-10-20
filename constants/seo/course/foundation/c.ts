import { cImg } from "@/constants/image";
import { urlImageCourse } from "../../firebase";
import { ConstCourseType } from "../type";

const courseCBeginner: ConstCourseType = {
  // Use to filter course
  rating: 4.8,
  originalPrice: 5500000,
  price: 3300000,
  duration: 92, // Thời lượng đã được cập nhật
  language: ["cpp"],
  slug: "course-c-beginner",
  imgSrc: cImg,
  category: "foundation",
  // Course detail
  nameCourse: "Khóa học C cho người mới bắt đầu",
  description:
    "Khóa học C này dành cho những ai mới bắt đầu, giúp bạn nắm vững các khái niệm cơ bản và nâng cao của ngôn ngữ lập trình C.",
  tags: ["C", "Lập trình", "Người mới bắt đầu"],
  newest: true,
  popular: true,
  trending: true,
  content: {
    intro:
      "Khóa học này dành cho những ai mới bắt đầu lập trình và muốn nắm vững ngôn ngữ lập trình C, từ các khái niệm cơ bản đến các kỹ thuật nâng cao.",
    purposes: [
      "Hiểu được các khái niệm cơ bản của ngôn ngữ lập trình C",
      "Phát triển kỹ năng viết mã C chính xác và hiệu quả",
      "Nắm vững các cấu trúc dữ liệu và thuật toán cơ bản",
      "Áp dụng kiến thức vào các dự án thực tế",
    ],
    results: [
      "Có khả năng viết và hiểu mã C một cách dễ dàng",
      "Sẵn sàng tiếp cận các ngôn ngữ lập trình khác dựa trên nền tảng C",
      "Giải quyết các vấn đề lập trình phức tạp hơn",
      "Xây dựng các ứng dụng cơ bản bằng ngôn ngữ C",
    ],
    orientedUsers: [
      "Người mới bắt đầu học lập trình",
      "Sinh viên ngành Công nghệ Thông tin",
      "Những người muốn học ngôn ngữ lập trình cơ bản trước khi chuyển sang các ngôn ngữ khác",
      "Lập trình viên muốn củng cố kiến thức cơ bản về ngôn ngữ C",
    ],
    whyChoose: [
      "Khóa học được thiết kế cho người mới bắt đầu với ngôn ngữ dễ hiểu",
      "Bài giảng chi tiết và có nhiều ví dụ minh họa thực tế",
      "Giảng viên giàu kinh nghiệm và nhiệt tình",
      "Hỗ trợ từ cộng đồng học viên và giảng viên",
    ],
  },
  lessons: [
    {
      nameLesson: "Phần 1: Nhập xuất, Kiểu dữ liệu, Cấu trúc rẽ nhánh, Vòng Lặp, Hàm",
      duration: 44,
      detailLessons: [
        {
          nameDetailLesson: "Bài 1: Nhập xuất, Kiểu Dữ Liệu, Toán tử, Làm quen với fullhousedev",
          duration: 4,
          content: [
            "Nhập xuất trong C sử dụng scanf và printf",
            "Các kiểu dữ liệu cơ bản trong C",
            "Toán tử số học, so sánh và logic",
            "Các hàm toán học phổ biến trong thư viện math.h",
            "Hướng dẫn sử dụng website chấm bài fullhousedev và hệ thống bài tập",
            "Bài tập thực hành: Làm quen với fullhousedev (20 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 2: Hướng dẫn bài tập thực hành, Cấu trúc rẽ nhánh",
          duration: 4,
          content: [
            "Giải đáp và hướng dẫn chi tiết bài tập thực hành",
            "Cấu trúc rẽ nhánh if-else và switch-case",
            "Bảng mã ASCII và ứng dụng",
            "Bài tập thực hành: Kiểu dữ liệu, toán tử, rẽ nhánh (45 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 3: Hướng dẫn bài tập thực hành - Phần 1",
          duration: 4,
          content: [
            "Giải đáp và hướng dẫn chi tiết bài tập thực hành phần 1",
            "Phân tích và tối ưu giải pháp cho các bài toán"
          ]
        },
        {
          nameDetailLesson: "Bài 4: Hướng dẫn bài tập thực hành - Phần 2",
          duration: 4,
          content: [
            "Giải đáp và hướng dẫn chi tiết bài tập thực hành phần 2",
            "Thảo luận về các cách tiếp cận khác nhau cho cùng một bài toán"
          ]
        },
        {
          nameDetailLesson: "Bài 5: Vòng lặp For, While, Do-while",
          duration: 4,
          content: [
            "Vòng lặp For và các biến thể",
            "Các dạng vòng lặp for thường gặp trong lập trình",
            "Câu lệnh break và continue trong vòng lặp",
            "Vòng lặp While và Do-While: đặc điểm và ứng dụng",
            "Kỹ thuật tách chữ số sử dụng vòng lặp while",
            "Cách tạo và kiểm soát vòng lặp vô hạn",
            "Bài tập thực hành: Vòng lặp (40 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 6: Hướng dẫn bài tập thực hành về vòng lặp - Phần 1",
          duration: 4,
          content: [
            "Giải đáp và hướng dẫn chi tiết bài tập thực hành về vòng lặp phần 1",
            "Phân tích hiệu suất của các loại vòng lặp khác nhau"
          ]
        },
        {
          nameDetailLesson: "Bài 7: Vòng lặp lồng nhau & Kỹ thuật vẽ hình bằng vòng lặp",
          duration: 4,
          content: [
            "Cấu trúc và cách sử dụng vòng for lồng nhau",
            "Kỹ thuật vẽ hình học bằng vòng lặp lồng nhau",
            "Phạm vi của biến trong các khối lệnh - Scope rule",
            "Sử dụng Define, Typedef trong C",
            "Giới thiệu về các hệ đếm: nhị phân, bát phân, thập lục phân"
          ]
        },
        {
          nameDetailLesson: "Bài 8: Hướng dẫn bài tập thực hành về vòng lặp - Phần 2",
          duration: 4,
          content: [
            "Giải đáp và hướng dẫn chi tiết bài tập thực hành về vòng lặp phần 2",
            "Thảo luận về các kỹ thuật tối ưu vòng lặp"
          ]
        },
        {
          nameDetailLesson: "Bài 9: Hàm trong C",
          duration: 4,
          content: [
            "Định nghĩa và cách sử dụng hàm trong C",
            "Tham số và đối số của hàm",
            "Kiểu trả về của hàm và cách sử dụng câu lệnh return",
            "Hàm void và ứng dụng",
            "Lý thuyết số: Số nguyên tố, Số chính phương, Số thuận nghịch",
            "Bài tập thực hành: Hàm (40 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 10: Hướng dẫn bài tập thực hành về Hàm",
          duration: 4,
          content: [
            "Giải đáp và hướng dẫn chi tiết bài tập thực hành về Hàm",
            "Thảo luận về các kỹ thuật tối ưu hóa hàm"
          ]
        },
        {
          nameDetailLesson: "Bài 11: Đệ quy",
          duration: 4,
          content: [
            "Khái niệm và cách hoạt động của đệ quy",
            "Các bài toán kinh điển sử dụng đệ quy: Fibonacci, Tháp Hà Nội, Dãy số",
            "So sánh hiệu suất giữa đệ quy và vòng lặp",
            "Bài tập thực hành: Đệ quy (20 bài tập đa dạng)"
          ]
        }
      ]
    },
    {
      nameLesson: "Phần 2: Mảng & Thuật Toán Sắp Xếp, Tìm Kiếm",
      duration: 20,
      detailLessons: [
        {
          nameDetailLesson: "Bài 12: Mảng một chiều",
          duration: 4,
          content: [
            "Khái niệm và cách khai báo mảng một chiều",
            "Các thao tác cơ bản trên mảng: thêm, xóa, sửa phần tử",
            "Các thuật toán xử lý mảng: đảo ngược, xoay vòng, trộn mảng",
            "Bài tập thực hành: Mảng một chiều (30 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 13: Hướng dẫn bài tập thực hành về Mảng một chiều",
          duration: 4,
          content: [
            "Giải đáp và hướng dẫn chi tiết bài tập thực hành về Mảng một chiều",
            "Thảo luận về các kỹ thuật xử lý mảng hiệu quả"
          ]
        },
        {
          nameDetailLesson: "Bài 14: Mảng hai chiều",
          duration: 4,
          content: [
            "Khái niệm và cách khai báo mảng hai chiều",
            "Các thao tác cơ bản trên mảng hai chiều",
            "Các bài toán ma trận: tổng đường chéo, xoay ma trận, ma trận xoắn ốc",
            "Bài tập thực hành: Mảng hai chiều (20 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 15: Thuật toán sắp xếp",
          duration: 4,
          content: [
            "Giới thiệu các thuật toán sắp xếp: Selection Sort, Bubble Sort, Insertion Sort",
            "Phân tích độ phức tạp và so sánh hiệu suất các thuật toán",
            "Bài tập thực hành: Thuật toán sắp xếp (15 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 16: Thuật toán tìm kiếm",
          duration: 4,
          content: [
            "Giới thiệu các thuật toán tìm kiếm: Tìm kiếm tuyến tính, Tìm kiếm nhị phân",
            "Phân tích độ phức tạp và so sánh hiệu suất các thuật toán",
            "Bài tập thực hành: Thuật toán tìm kiếm (15 bài tập đa dạng)"
          ]
        }
      ]
    },
    {
      nameLesson: "Phần 3: Chuỗi Ký Tự",
      duration: 16,
      detailLessons: [
        {
          nameDetailLesson: "Bài 17: Chuỗi ký tự cơ bản",
          duration: 4,
          content: [
            "Khái niệm và cách khai báo chuỗi ký tự trong C",
            "Các hàm xử lý chuỗi cơ bản trong thư viện string.h",
            "Bài tập thực hành: Chuỗi ký tự cơ bản (20 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 18: Hướng dẫn bài tập thực hành về Chuỗi ký tự cơ bản",
          duration: 4,
          content: [
            "Giải đáp và hướng dẫn chi tiết bài tập thực hành về Chuỗi ký tự cơ bản",
            "Thảo luận về các kỹ thuật xử lý chuỗi hiệu quả"
          ]
        },
        {
          nameDetailLesson: "Bài 19: Xử lý chuỗi nâng cao",
          duration: 4,
          content: [
            "Các bài toán xử lý từ: đếm từ, tìm từ dài nhất, ngắn nhất",
            "Các bài toán chuẩn hóa chuỗi: xóa khoảng trắng thừa, viết hoa chữ cái đầu",
            "Bài tập thực hành: Xử lý chuỗi nâng cao (20 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 20: Hướng dẫn bài tập thực hành về Xử lý chuỗi nâng cao",
          duration: 4,
          content: [
            "Giải đáp và hướng dẫn chi tiết bài tập thực hành về Xử lý chuỗi nâng cao",
            "Thảo luận về các ứng dụng thực tế của xử lý chuỗi trong lập trình"
          ]
        }
      ]
    },
    {
      nameLesson: "Phần 4: Con Trỏ, Struct, Danh Sách Liên Kết",
      duration: 16,
      detailLessons: [
        {
          nameDetailLesson: "Bài 21: Lý thuyết con trỏ & Struct",
          duration: 4,
          content: [
            "Khái niệm về con trỏ, địa chỉ, và cách giải tham chiếu",
            "Mối quan hệ giữa con trỏ và hàm",
            "Con trỏ cấp 2, cấp 3 và ứng dụng",
            "Cấu trúc Struct trong C và cách sử dụng",
            "Ví dụ thực tế: Sắp xếp danh sách sinh viên sử dụng struct",
            "Bài tập thực hành: Struct (20 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 22: Hướng dẫn bài tập thực hành về Struct",
          duration: 4,
          content: [
            "Giải đáp và hướng dẫn chi tiết bài tập thực hành về Struct",
            "Thảo luận về các ứng dụng thực tế của Struct trong lập trình"
          ]
        },
        {
          nameDetailLesson: "Bài 23: Danh sách liên kết",
          duration: 4,
          content: [
            "Khái niệm và cấu trúc của Danh sách liên kết đơn",
            "Các thao tác cơ bản trên Danh sách liên kết đơn",
            "Giới thiệu về Danh sách liên kết đôi và so sánh với Danh sách liên kết đơn",
            "Bài tập thực hành: Danh sách liên kết (10 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 24: Hướng dẫn bài tập thực hành về Danh sách liên kết",
          duration: 4,
          content: [
            "Giải đáp và hướng dẫn chi tiết bài tập thực hành về Danh sách liên kết",
            "Thảo luận về ưu nhược điểm của Danh sách liên kết so với các cấu trúc dữ liệu khác"
          ]
        }
      ]
    },
    {
      nameLesson: "Phần 5: File",
      duration: 12,
      detailLessons: [
        {
          nameDetailLesson: "Bài 25: Xử lý File",
          duration: 4,
          content: [
            "Giới thiệu về xử lý File trong C",
            "Các thao tác đọc và ghi File",
            "Xử lý ngoại lệ khi làm việc với File",
            "Bài tập thực hành: Xử lý File (15 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 26: Hướng dẫn bài tập thực hành về Xử lý File",
          duration: 4,
          content: [
            "Giải đáp và hướng dẫn chi tiết bài tập thực hành về Xử lý File",
            "Thảo luận về các kỹ thuật xử lý File hiệu quả trong các ứng dụng thực tế"
          ]
        },
        {
          nameDetailLesson: "Bài 27: Tổng kết khóa học và định hướng học tập",
          duration: 4,
          content: [
            "Ôn tập và tổng hợp kiến thức đã học trong khóa",
            "Thảo luận về các ứng dụng thực tế của C trong công nghiệp",
            "Hướng dẫn các nguồn tài liệu để tiếp tục học tập và nâng cao kỹ năng",
            "Định hướng phát triển nghề nghiệp trong lĩnh vực lập trình C"
          ]
        }
      ]
    }
  ],
}

export default courseCBeginner;
