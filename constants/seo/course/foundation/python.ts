import { urlImageCourse } from "../../firebase";
import { ConstCourseType } from "../type";

const coursePythonFoundation: ConstCourseType = {
  // Use to filter course
  rating: 4.7,
  originalPrice: 5500000,
  price: 3300000,
  duration: 108, // Updated to 36-45 sessions * 3 hours/session = 108-135 hours
  language: ["python"],
  slug: "course-python-foundation",
  imgSrc: urlImageCourse['python'],
  category: "foundation",
  // Course detail
  nameCourse: "Khóa học Python Cơ bản đến Nâng cao",
  description:
    "Khóa học lập trình Python từ cơ bản đến nâng cao, cung cấp các kiến thức về chuỗi, hàm, các module, file, cơ sở dữ liệu, OOP cơ bản và nâng cao, thực hiện các project, tìm hiểu các framework (Django).",
  tags: ["Python", "Programming", "Software Development"],
  newest: true,
  popular: true,
  trending: true,
  content: {
    intro:
      "Khóa học toàn diện về ngôn ngữ lập trình Python, từ cơ bản đến nâng cao, giúp bạn xây dựng nền tảng vững chắc trong Python.",
    purposes: [
      "Hiểu rõ các khái niệm cơ bản và nâng cao của Python",
      "Phát triển kỹ năng lập trình hướng đối tượng với Python",
      "Nắm vững các cấu trúc dữ liệu và thuật toán cơ bản",
      "Áp dụng Python vào các dự án thực tế và xây dựng ứng dụng",
    ],
    results: [
      "Có khả năng viết và hiểu mã Python một cách dễ dàng",
      "Xây dựng được các ứng dụng Python cơ bản và nâng cao",
      "Giải quyết các vấn đề lập trình phức tạp với Python",
      "Áp dụng thành thạo Python trong các dự án thực tế",
    ],
    orientedUsers: [
      "Người mới bắt đầu học lập trình",
      "Sinh viên ngành Công nghệ Thông tin",
      "Lập trình viên muốn học thêm ngôn ngữ Python",
      "Người muốn nâng cao kỹ năng lập trình Python của mình",
    ],
    whyChoose: [
      "Số lượng buổi học: 36-45 buổi (2-3 tiếng/ buổi)",
      "Hoàn thành 8-12 project",
      "100% giảng viên, trợ giảng đạt giải lập trình cấp tỉnh, quốc gia",
      "Hỗ trợ giải đáp thắc mắc của học viên 24/7",
      "Hệ thống website chấm bài tự động, xếp hạng, đo lường từng bài tập",
      "Số lượng bài tập lên tới 300-500 bài",
      "Tài liệu biên soạn chuyên sâu xem trước",
      "Kiểm tra, sửa chữa từng dòng code cho học viên",
    ],
  },

  lessons: [
    {
      nameLesson: "Phần 1: Giới thiệu và Cơ bản về Python",
      duration: 20,
      detailLessons: [
        {
          nameDetailLesson: "Bài 1: Giới thiệu về Python và Cài đặt môi trường",
          duration: 4,
          content: [
            "Lịch sử và các phiên bản của Python",
            "Cài đặt Python và môi trường phát triển (IDE)",
            "Cú pháp cơ bản và quy tắc viết code trong Python",
            "Giới thiệu về các kiểu dữ liệu cơ bản",
            "Hướng dẫn sử dụng website chấm bài fullhousedev và hệ thống bài tập",
            "Bài tập thực hành: Làm quen với Python và fullhousedev (15 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 2: Biến, Toán tử và Kiểu dữ liệu",
          duration: 4,
          content: [
            "Khai báo và sử dụng biến trong Python",
            "Các kiểu dữ liệu: int, float, string, boolean",
            "Toán tử số học, so sánh và logic",
            "Ép kiểu và chuyển đổi kiểu dữ liệu",
            "Bài tập thực hành: Biến và Toán tử (20 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 3: Cấu trúc điều khiển",
          duration: 4,
          content: [
            "Câu lệnh if-else và elif",
            "Vòng lặp for và while",
            "Câu lệnh break, continue và pass",
            "Comprehensions trong Python",
            "Bài tập thực hành: Cấu trúc điều khiển (25 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 4: Hàm trong Python",
          duration: 4,
          content: [
            "Định nghĩa và gọi hàm",
            "Tham số và đối số trong hàm",
            "Giá trị trả về của hàm",
            "Biến local và global",
            "Lambda functions",
            "Bài tập thực hành: Hàm (20 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 5: Hướng dẫn bài tập thực hành",
          duration: 4,
          content: [
            "Giải đáp và hướng dẫn chi tiết bài tập thực hành",
            "Thảo luận về các cách tiếp cận khác nhau cho cùng một bài toán",
            "Phân tích và tối ưu giải pháp cho các bài toán"
          ]
        }
      ]
    },
    {
      nameLesson: "Phần 2: Cấu trúc dữ liệu và Thuật toán",
      duration: 24,
      detailLessons: [
        {
          nameDetailLesson: "Bài 6: List và Tuple",
          duration: 4,
          content: [
            "Khái niệm và cách sử dụng List",
            "Các phương thức của List",
            "Slicing trong List",
            "Tuple và sự khác biệt với List",
            "Bài tập thực hành: List và Tuple (20 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 7: Dictionary và Set",
          duration: 4,
          content: [
            "Khái niệm và cách sử dụng Dictionary",
            "Các phương thức của Dictionary",
            "Set và các thao tác trên Set",
            "So sánh giữa List, Tuple, Dictionary và Set",
            "Bài tập thực hành: Dictionary và Set (20 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 8: Thuật toán tìm kiếm và sắp xếp",
          duration: 4,
          content: [
            "Thuật toán tìm kiếm tuyến tính và nhị phân",
            "Thuật toán sắp xếp: Bubble sort, Selection sort, Insertion sort",
            "Đánh giá độ phức tạp của thuật toán",
            "Bài tập thực hành: Thuật toán (15 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 9: Cấu trúc dữ liệu Stack và Queue",
          duration: 4,
          content: [
            "Khái niệm và cài đặt Stack",
            "Khái niệm và cài đặt Queue",
            "Ứng dụng của Stack và Queue",
            "Bài tập thực hành: Stack và Queue (15 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 10: Linked List",
          duration: 4,
          content: [
            "Khái niệm và cài đặt Linked List đơn",
            "Các thao tác trên Linked List: thêm, xóa, tìm kiếm",
            "Giới thiệu về Linked List đôi",
            "Bài tập thực hành: Linked List (15 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 11: Hướng dẫn bài tập thực hành",
          duration: 4,
          content: [
            "Giải đáp và hướng dẫn chi tiết bài tập thực hành",
            "Thảo luận về các cách tiếp cận khác nhau cho cùng một bài toán",
            "Phân tích và tối ưu giải pháp cho các bài toán"
          ]
        }
      ]
    },
    {
      nameLesson: "Phần 3: Xử lý File và Module",
      duration: 16,
      detailLessons: [
        {
          nameDetailLesson: "Bài 12: Xử lý File văn bản",
          duration: 4,
          content: [
            "Mở và đóng file",
            "Đọc và ghi file văn bản",
            "Xử lý ngoại lệ khi làm việc với file",
            "Bài tập thực hành: Xử lý file văn bản (15 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 13: Xử lý File CSV và JSON",
          duration: 4,
          content: [
            "Đọc và ghi file CSV",
            "Xử lý dữ liệu từ file CSV",
            "Làm việc với JSON trong Python",
            "Bài tập thực hành: Xử lý file CSV và JSON (15 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 14: Module và Package",
          duration: 4,
          content: [
            "Tạo và sử dụng Module",
            "Import Module và Package",
            "Namespace và Scope",
            "Bài tập thực hành: Module và Package (10 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 15: Hướng dẫn bài tập thực hành",
          duration: 4,
          content: [
            "Giải đáp và hướng dẫn chi tiết bài tập thực hành",
            "Thảo luận về các cách tiếp cận khác nhau cho cùng một bài toán",
            "Phân tích và tối ưu giải pháp cho các bài toán"
          ]
        }
      ]
    },
    {
      nameLesson: "Phần 4: Lập trình Hướng đối tượng",
      duration: 20,
      detailLessons: [
        {
          nameDetailLesson: "Bài 16: Lớp và Đối tượng",
          duration: 4,
          content: [
            "Khái niệm về Lập trình Hướng đối tượng",
            "Định nghĩa lớp và tạo đối tượng",
            "Thuộc tính và phương thức",
            "Constructor và Destructor",
            "Bài tập thực hành: Lớp và Đối tượng (15 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 17: Kế thừa và Đa hình",
          duration: 4,
          content: [
            "Kế thừa trong Python",
            "Ghi đè phương thức",
            "Đa hình và ứng dụng",
            "Bài tập thực hành: Kế thừa và Đa hình (15 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 18: Encapsulation và Abstraction",
          duration: 4,
          content: [
            "Encapsulation và Access modifiers",
            "Getter và Setter methods",
            "Abstract classes và Interface",
            "Bài tập thực hành: Encapsulation và Abstraction (15 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 19: Magic Methods và Operator Overloading",
          duration: 4,
          content: [
            "Magic Methods trong Python",
            "Operator Overloading",
            "Ứng dụng của Magic Methods",
            "Bài tập thực hành: Magic Methods (10 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 20: Hướng dẫn bài tập thực hành",
          duration: 4,
          content: [
            "Giải đáp và hướng dẫn chi tiết bài tập thực hành",
            "Thảo luận về các cách tiếp cận khác nhau cho cùng một bài toán",
            "Phân tích và tối ưu giải pháp cho các bài toán"
          ]
        }
      ]
    },
    {
      nameLesson: "Phần 5: Xử lý Ngoại lệ và Debugging",
      duration: 12,
      detailLessons: [
        {
          nameDetailLesson: "Bài 21: Xử lý Ngoại lệ",
          duration: 4,
          content: [
            "Khái niệm về ngoại lệ",
            "Cú pháp try-except",
            "Raise và tạo ngoại lệ tùy chỉnh",
            "Finally và cleanup actions",
            "Bài tập thực hành: Xử lý Ngoại lệ (15 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 22: Debugging và Testing",
          duration: 4,
          content: [
            "Kỹ thuật debugging trong Python",
            "Sử dụng PDB (Python Debugger)",
            "Unit testing với unittest",
            "Bài tập thực hành: Debugging và Testing (10 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 23: Hướng dẫn bài tập thực hành",
          duration: 4,
          content: [
            "Giải đáp và hướng dẫn chi tiết bài tập thực hành",
            "Thảo luận về các cách tiếp cận khác nhau cho cùng một bài toán",
            "Phân tích và tối ưu giải pháp cho các bài toán"
          ]
        }
      ]
    },
    {
      nameLesson: "Phần 6: Thư viện và Framework phổ biến",
      duration: 24,
      detailLessons: [
        {
          nameDetailLesson: "Bài 24: Numpy và Pandas",
          duration: 4,
          content: [
            "Giới thiệu về Numpy và ứng dụng",
            "Làm việc với mảng trong Numpy",
            "Giới thiệu về Pandas và xử lý dữ liệu",
            "DataFrame và Series trong Pandas",
            "Bài tập thực hành: Numpy và Pandas (15 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 25: Matplotlib và Seaborn",
          duration: 4,
          content: [
            "Giới thiệu về Matplotlib",
            "Vẽ đồ thị cơ bản với Matplotlib",
            "Seaborn và các loại biểu đồ thống kê",
            "Bài tập thực hành: Matplotlib và Seaborn (15 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 26: Flask - Web Framework",
          duration: 4,
          content: [
            "Giới thiệu về Flask",
            "Routing và xử lý request",
            "Templates và Jinja2",
            "Làm việc với cơ sở dữ liệu trong Flask",
            "Bài tập thực hành: Flask (10 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 27: Django - Web Framework",
          duration: 4,
          content: [
            "Giới thiệu về Django",
            "Model-View-Template (MVT) trong Django",
            "ORM và làm việc với cơ sở dữ liệu",
            "Django Admin và Authentication",
            "Bài tập thực hành: Django (10 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 28: Scikit-learn và Machine Learning cơ bản",
          duration: 4,
          content: [
            "Giới thiệu về Machine Learning",
            "Các thuật toán Machine Learning cơ bản",
            "Sử dụng Scikit-learn cho bài toán phân loại và hồi quy",
            "Bài tập thực hành: Scikit-learn (10 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 29: Hướng dẫn bài tập thực hành",
          duration: 4,
          content: [
            "Giải đáp và hướng dẫn chi tiết bài tập thực hành",
            "Thảo luận về các cách tiếp cận khác nhau cho cùng một bài toán",
            "Phân tích và tối ưu giải pháp cho các bài toán"
          ]
        }
      ]
    },
    {
      nameLesson: "Phần 7: Dự án cuối khóa",
      duration: 20,
      detailLessons: [
        {
          nameDetailLesson: "Bài 30: Lập kế hoạch và Thiết kế dự án",
          duration: 4,
          content: [
            "Giới thiệu về dự án cuối khóa: Xây dựng ứng dụng quản lý thư viện",
            "Phân tích yêu cầu và thiết kế hệ thống",
            "Lập kế hoạch phát triển và phân chia công việc",
            "Thảo luận về các công nghệ sẽ sử dụng trong dự án"
          ]
        },
        {
          nameDetailLesson: "Bài 31: Xây dựng Backend",
          duration: 4,
          content: [
            "Thiết kế cơ sở dữ liệu",
            "Xây dựng API với Flask hoặc Django",
            "Implement các chức năng cơ bản: CRUD sách, quản lý người dùng",
            "Xử lý authentication và authorization"
          ]
        },
        {
          nameDetailLesson: "Bài 32: Xây dựng Frontend",
          duration: 4,
          content: [
            "Thiết kế giao diện người dùng với Tkinter hoặc PyQt",
            "Implement các chức năng tìm kiếm, mượn/trả sách",
            "Kết nối Frontend với Backend thông qua API"
          ]
        },
        {
          nameDetailLesson: "Bài 33: Tích hợp và Kiểm thử",
          duration: 4,
          content: [
            "Tích hợp các module của dự án",
            "Viết unit test cho các chức năng quan trọng",
            "Thực hiện kiểm thử tích hợp và hệ thống",
            "Debug và sửa lỗi"
          ]
        },
        {
          nameDetailLesson: "Bài 34: Hoàn thiện và Trình bày dự án",
          duration: 4,
          content: [
            "Hoàn thiện các chức năng còn thiếu",
            "Tối ưu hóa hiệu suất ứng dụng",
            "Chuẩn bị tài liệu và hướng dẫn sử dụng",
            "Trình bày dự án và nhận phản hồi"
          ]
        }
      ]
    },
    {
      nameLesson: "Phần 8: Tổng kết khóa học",
      duration: 4,
      detailLessons: [
        {
          nameDetailLesson: "Bài 35: Ôn tập và Định hướng",
          duration: 4,
          content: [
            "Ôn tập các kiến thức quan trọng đã học",
            "Thảo luận về các xu hướng công nghệ trong Python",
            "Hướng dẫn tự học và phát triển kỹ năng",
            "Định hướng nghề nghiệp cho lập trình viên Python",
            "Tổng kết khóa học và nhận xét"
          ]
        }
      ]
    }
  ],
};

export default coursePythonFoundation;
