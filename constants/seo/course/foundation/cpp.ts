import { urlImageCourse } from "../../firebase";
import { ConstCourseType } from "../type";

const courseCppBeginner: ConstCourseType = {
  // Use to filter course
  rating: 4.8,
  originalPrice: 5500000,
  price: 3300000,
  duration: 118,
  language: ["cpp"],
  slug: "course-cpp-beginner",
  imgSrc: urlImageCourse['cpp'],
  category: "foundation",
  // Course detail
  nameCourse: "Khóa học C++ cho người mới bắt đầu",
  description:
    "Khóa học C++ này dành cho những ai mới bắt đầu, giúp bạn nắm vững các khái niệm cơ bản và nâng cao của ngôn ngữ lập trình C++. Bao gồm các kiến thức cơ bản như vòng lặp, for, hàm cho đến nâng cao con trỏ, string, struct. Ngoài ra, nội dung còn có thư viện STL như vector, set, map, thuật toán tìm kiếm, sắp xếp, ngăn xếp, hàng đợi, OOP.",
  tags: ["C++", "Lập trình", "Người mới bắt đầu"],
  newest: true,
  popular: true,
  trending: true,
  content: {
    intro:
      "Khóa học này dành cho những ai mới bắt đầu lập trình và muốn nắm vững ngôn ngữ lập trình C++, từ các khái niệm cơ bản đến các kỹ thuật nâng cao.",
    purposes: [
      "Hiểu được các khái niệm cơ bản của ngôn ngữ lập trình C++",
      "Phát triển kỹ năng viết mã C++ chính xác và hiệu quả",
      "Nắm vững các cấu trúc dữ liệu và thuật toán cơ bản",
      "Áp dụng kiến thức vào các dự án thực tế",
    ],
    results: [
      "Có khả năng viết và hiểu mã C++ một cách dễ dàng",
      "Sẵn sàng tiếp cận các ngôn ngữ lập trình khác dựa trên nền tảng C++",
      "Giải quyết các vấn đề lập trình phức tạp hơn",
      "Xây dựng các ứng dụng cơ bản bằng ngôn ngữ C++",
    ],
    orientedUsers: [
      "Người mới bắt đầu học lập trình",
      "Sinh viên ngành Công nghệ Thông tin",
      "Những người muốn học ngôn ngữ lập trình cơ bản trước khi chuyển sang các ngôn ngữ khác",
      "Lập trình viên muốn củng cố kiến thức cơ bản về ngôn ngữ C++",
    ],
    whyChoose: [
      "100% giảng viên, trợ giảng đạt giải lập trình cấp tỉnh, quốc gia",
      "Hệ thống website chấm bài tự động, xếp hạng, đo lường từng bài tập",
      "Số lượng bài tập lên tới 600-800 bài",
      "Tài liệu biên soạn chuyên sâu xem trước",
      "Hỗ trợ giải đáp thắc mắc của học viên 24/7",
      "Kiểm tra, sửa chữa từng dòng code cho học viên",
      "Video xem lại sau mỗi buổi học",
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
            "Nhập xuất trong C++ sử dụng cin và cout",
            "Các kiểu dữ liệu cơ bản và phức tạp trong C++",
            "Toán tử số học, so sánh và logic",
            "Các hàm toán học phổ biến trong thư viện cmath",
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
            "Sử dụng Define, Typedef, Using trong C++",
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
          nameDetailLesson: "Bài 9: Hàm trong C++",
          duration: 4,
          content: [
            "Định nghĩa và cách sử dụng hàm trong C++",
            "Tham số và đối số của hàm",
            "Kiểu trả về của hàm và cách sử dụng câu lệnh return",
            "Hàm void và ứng dụng",
            "Lý thuyết số: Số nguyên tố, Số chính phương, Số thuận nghịch",
            "Kỹ thuật phân tích thừa số nguyên tố",
            "Số hoàn hảo và cách xác định",
            "Phương pháp tính tổng ước và đếm ước của số nguyên",
            "Lý thuyết đồng dư và ứng dụng",
            "Thuật toán tìm ước chung lớn nhất và bội chung nhỏ nhất",
            "Bài tập thực hành: Hàm và Lý thuyết số (40 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 10: Hướng dẫn bài tập thực hành về hàm - Phần 1",
          duration: 4,
          content: [
            "Giải đáp và hướng dẫn chi tiết bài tập thực hành về hàm phần 1",
            "Phân tích cách tối ưu hóa hàm trong các bài toán"
          ]
        },
        {
          nameDetailLesson: "Bài 11: Hướng dẫn bài tập thực hành về hàm - Phần 2",
          duration: 4,
          content: [
            "Giải đáp và hướng dẫn chi tiết bài tập thực hành về hàm phần 2",
            "Thảo luận về các kỹ thuật nâng cao trong việc sử dụng hàm"
          ]
        }
      ]
    },
    {
      nameLesson: "Phần 2: Mảng 1 Chiều, Vector, Đệ Quy",
      duration: 20,
      detailLessons: [
        {
          nameDetailLesson: "Bài 12: Mảng 1 Chiều & Range-based for loop (C++11)",
          duration: 4,
          content: [
            "Khái niệm và cách sử dụng Mảng 1 Chiều",
            "Phương pháp duyệt mảng sử dụng chỉ số",
            "Cú pháp và ứng dụng của vòng lặp Range-based for loop",
            "15 dạng bài tập phổ biến và kỹ thuật giải quyết trên mảng 1 chiều",
            "Bài tập thực hành: Mảng 1 chiều cơ bản (30 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 13: Hướng dẫn bài tập thực hành về mảng 1 chiều",
          duration: 4,
          content: [
            "Giải đáp và hướng dẫn chi tiết bài tập thực hành về mảng 1 chiều",
            "Thảo luận về các kỹ thuật tối ưu trong xử lý mảng"
          ]
        },
        {
          nameDetailLesson: "Bài 14: Vector, Iterator, Pair, Auto & Kỹ thuật đệ quy",
          duration: 4,
          content: [
            "Cấu trúc dữ liệu Vector và cách sử dụng Iterator",
            "Kiểu dữ liệu Pair và từ khóa Auto trong C++",
            "Giới thiệu về bộ nhớ ngăn xếp và khái niệm Stack frame",
            "Kỹ thuật đệ quy và phân tích các bài toán đệ quy thường gặp",
            "Bài tập thực hành: Vector và Pair (10 bài tập đa dạng)",
            "Bài tập thực hành: Đệ quy (20 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 15: Hướng dẫn bài tập thực hành về Vector, Pair và Đệ quy",
          duration: 4,
          content: [
            "Giải đáp và hướng dẫn chi tiết bài tập thực hành về Vector và Pair",
            "Phân tích và hướng dẫn giải các bài toán đệ quy",
            "Thảo luận về ưu nhược điểm của đệ quy và cách tối ưu"
          ]
        }
      ]
    },
    {
      nameLesson: "Phần 3: Thuật toán Sắp xếp, Tìm Kiếm, Set & Map",
      duration: 32,
      detailLessons: [
        {
          nameDetailLesson: "Bài 16: Các thuật toán sắp xếp & Sàng số nguyên tố",
          duration: 4,
          content: [
            "Giới thiệu và phân tích các thuật toán sắp xếp: chọn, chèn, nổi bọt, quicksort",
            "Cài đặt và so sánh hiệu suất các thuật toán sắp xếp",
            "Thuật toán Sàng số nguyên tố Eratosthenes",
            "Kỹ thuật Mảng cộng dồn và ứng dụng"
          ]
        },
        {
          nameDetailLesson: "Bài 17: Set & Map",
          duration: 4,
          content: [
            "Cấu trúc dữ liệu Set, Multiset, và Unordered_set",
            "Cấu trúc dữ liệu Map, Multimap, và Unordered_map",
            "Phân tích và giải quyết các dạng bài tập sử dụng Set & Map",
            "Bài tập thực hành: Set & Map (25 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 18: Hướng dẫn bài tập thực hành về Set & Map",
          duration: 4,
          content: [
            "Giải đáp và hướng dẫn chi tiết bài tập thực hành về Set & Map",
            "Thảo luận về các kỹ thuật tối ưu khi sử dụng Set & Map"
          ]
        },
        {
          nameDetailLesson: "Bài 19: Hàm sort, binary_search, lower_bound, upper_bound",
          duration: 4,
          content: [
            "Sử dụng hàm sort và stable_sort trong C++",
            "Cách xây dựng hàm so sánh (comparison function) cho hàm sort",
            "Kỹ thuật sắp xếp với nhiều tiêu chí",
            "Thuật toán tìm kiếm nhị phân binary_search và các biến thể",
            "Ứng dụng của lower_bound và upper_bound",
            "Bài tập thực hành: Hàm sort, comparison function, lower_bound, upper_bound (20 bài tập)",
            "Bài tập thực hành: Sắp xếp & Tìm kiếm (40 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 20: Hướng dẫn bài tập thực hành về Sắp xếp và Tìm kiếm",
          duration: 4,
          content: [
            "Giải đáp và hướng dẫn chi tiết bài tập thực hành về Sắp xếp và Tìm kiếm",
            "Phân tích các trường hợp đặc biệt trong sắp xếp và tìm kiếm",
            "Bài tập thực hành: Mảng 1 chiều nâng cao (40 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 21: Hướng dẫn bài tập thực hành về Sắp xếp và Tìm kiếm - Phần 2",
          duration: 4,
          content: [
            "Tiếp tục giải đáp và hướng dẫn chi tiết bài tập thực hành về Sắp xếp và Tìm kiếm",
            "Thảo luận về các thuật toán sắp xếp và tìm kiếm nâng cao"
          ]
        },
        {
          nameDetailLesson: "Bài 22: Hướng dẫn bài tập thực hành về Mảng 1 chiều nâng cao - Phần 1",
          duration: 4,
          content: [
            "Giải đáp và hướng dẫn chi tiết bài tập thực hành về Mảng 1 chiều nâng cao phần 1",
            "Phân tích các kỹ thuật xử lý mảng nâng cao"
          ]
        },
        {
          nameDetailLesson: "Bài 23: Hướng dẫn bài tập thực hành về Mảng 1 chiều nâng cao - Phần 2",
          duration: 4,
          content: [
            "Tiếp tục giải đáp và hướng dẫn chi tiết bài tập thực hành về Mảng 1 chiều nâng cao phần 2",
            "Thảo luận về các ứng dụng thực tế của mảng 1 chiều trong lập trình"
          ]
        }
      ]
    },
    {
      nameLesson: "Phần 4: Mảng 2 Chiều & Chuỗi Ký Tự (String)",
      duration: 24,
      detailLessons: [
        {
          nameDetailLesson: "Bài 24: Mảng 2 Chiều & Ma trận",
          duration: 4,
          content: [
            "Khái niệm và cách sử dụng Mảng 2 chiều",
            "Các dạng bài toán phổ biến trên Mảng 2 chiều",
            "Ma trận và các phép toán cơ bản trên ma trận",
            "Kỹ thuật duyệt các ô liền kề trên mảng 2 chiều (loang)",
            "Bài tập thực hành: Mảng 2 chiều & Ma trận (40 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 25: Hướng dẫn bài tập thực hành về Mảng 2 chiều & Ma trận xoắn ốc",
          duration: 4,
          content: [
            "Giải thuật tạo và duyệt Ma trận xoắn ốc",
            "Bài toán tìm đường đi có tổng lớn nhất (maximum path sum)",
            "Bài toán đếm số đảo trên lưới (Count Island)",
            "Giải đáp và hướng dẫn chi tiết bài tập thực hành về Mảng 2 chiều"
          ]
        },
        {
          nameDetailLesson: "Bài 26: Hướng dẫn bài tập thực hành về Mảng 2 chiều - Phần 2",
          duration: 4,
          content: [
            "Tiếp tục giải đáp và hướng dẫn chi tiết bài tập thực hành về Mảng 2 chiều",
            "Thảo luận về các ứng dụng thực tế của Mảng 2 chiều trong lập trình"
          ]
        },
        {
          nameDetailLesson: "Bài 27: Chuỗi ký tự (String) trong C++",
          duration: 4,
          content: [
            "Khái niệm và cách sử dụng String trong C++",
            "Các phương thức duyệt và xử lý String",
            "Kỹ thuật sử dụng mảng, vector, set, map với kiểu string",
            "Phân tích và giải quyết bài toán liên quan đến tần suất của từ và ký tự",
            "Bài tập thực hành: Chuỗi ký tự cơ bản (30 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 28: Hướng dẫn bài tập thực hành về String & Stringstream",
          duration: 4,
          content: [
            "Giới thiệu và ứng dụng của Stringstream trong C++",
            "Các bài toán xử lý từ: chuẩn hóa tên, tạo email, tách từ",
            "Giải đáp và hướng dẫn chi tiết bài tập thực hành về String",
            "Bài tập thực hành: Chuỗi ký tự nâng cao (40 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 29: Hướng dẫn bài tập thực hành về String nâng cao",
          duration: 4,
          content: [
            "Tiếp tục giải đáp và hướng dẫn chi tiết bài tập thực hành về String nâng cao",
            "Thảo luận về các kỹ thuật xử lý chuỗi hiệu quả trong các bài toán thực tế"
          ]
        }
      ]
    },
    {
      nameLesson: "Phần 5: Con Trỏ, Struct, Danh Sách Liên Kết",
      duration: 16,
      detailLessons: [
        {
          nameDetailLesson: "Bài 30: Lý thuyết con trỏ & Struct",
          duration: 4,
          content: [
            "Khái niệm về con trỏ, địa chỉ, tham chiếu và cách giải tham chiếu",
            "Mối quan hệ giữa con trỏ và hàm",
            "Con trỏ cấp 2, cấp 3 và ứng dụng",
            "Cấu trúc Struct trong C++ và cách sử dụng",
            "Ví dụ thực tế: Sắp xếp danh sách sinh viên sử dụng struct",
            "Bài tập thực hành: Struct (20 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 31: Hướng dẫn bài tập thực hành về Struct",
          duration: 4,
          content: [
            "Giải đáp và hướng dẫn chi tiết bài tập thực hành về Struct",
            "Thảo luận về các ứng dụng thực tế của Struct trong lập trình"
          ]
        },
        {
          nameDetailLesson: "Bài 32: Danh sách liên kết",
          duration: 4,
          content: [
            "Khái niệm và cấu trúc của Danh sách liên kết đơn",
            "Các thao tác cơ bản trên Danh sách liên kết đơn",
            "Giới thiệu về Danh sách liên kết đôi và so sánh với Danh sách liên kết đơn",
            "Bài tập thực hành: Danh sách liên kết (10 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 33: Hướng dẫn bài tập thực hành về Danh sách liên kết",
          duration: 4,
          content: [
            "Giải đáp và hướng dẫn chi tiết bài tập thực hành về Danh sách liên kết",
            "Thảo luận về ưu nhược điểm của Danh sách liên kết so với các cấu trúc dữ liệu khác"
          ]
        }
      ]
    },
    {
      nameLesson: "Phần 6: Lập Trình Hướng Đối Tượng & File",
      duration: 28,
      detailLessons: [
        {
          nameDetailLesson: "Bài 34: Lập trình hướng đối tượng",
          duration: 4,
          content: [
            "Giới thiệu về Lập trình hướng đối tượng (OOP)",
            "Các khái niệm cơ bản trong OOP: Đối tượng, Lớp, Thuộc tính, Phương thức",
            "Nạp chồng toán tử trong C++",
            "Khái niệm về hàm bạn và lớp bạn",
            "Từ khóa static và ứng dụng trong OOP",
            "Hướng dẫn thiết kế lớp và các bài toán áp dụng",
            "Bài tập thực hành: OOP (30 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 35: Hướng dẫn bài tập thực hành về OOP",
          duration: 4,
          content: [
            "Giải đáp và hướng dẫn chi tiết bài tập thực hành về OOP",
            "Thảo luận về các nguyên tắc thiết kế trong OOP"
          ]
        },
        {
          nameDetailLesson: "Bài 36: Kế thừa & Đa hình",
          duration: 4,
          content: [
            "Khái niệm và cách thực hiện Kế thừa trong C++",
            "Đa hình và các loại đa hình trong OOP",
            "Hàm ảo và cách sử dụng",
            "Bài tập thực hành: Kế thừa & Đa hình (20 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 37: Hướng dẫn bài tập thực hành về Kế thừa & Đa hình",
          duration: 4,
          content: [
            "Giải đáp và hướng dẫn chi tiết bài tập thực hành về Kế thừa & Đa hình",
            "Thảo luận về các ứng dụng thực tế của Kế thừa và Đa hình trong lập trình"
          ]
        },
        {
          nameDetailLesson: "Bài 38: Xử lý File",
          duration: 4,
          content: [
            "Giới thiệu về xử lý File trong C++",
            "Các thao tác đọc và ghi File",
            "Xử lý ngoại lệ khi làm việc với File",
            "Bài tập thực hành: Xử lý File (15 bài tập đa dạng)"
          ]
        },
        {
          nameDetailLesson: "Bài 39: Hướng dẫn bài tập thực hành về Xử lý File",
          duration: 4,
          content: [
            "Giải đáp và hướng dẫn chi tiết bài tập thực hành về Xử lý File",
            "Thảo luận về các kỹ thuật xử lý File hiệu quả trong các ứng dụng thực tế"
          ]
        },
        {
          nameDetailLesson: "Bài 40: Tổng kết khóa học và định hướng học tập",
          duration: 4,
          content: [
            "Ôn tập và tổng hợp kiến thức đã học trong khóa",
            "Thảo luận về các ứng dụng thực tế của C++ trong công nghiệp",
            "Hướng dẫn các nguồn tài liệu để tiếp tục học tập và nâng cao kỹ năng",
            "Định hướng phát triển nghề nghiệp trong lĩnh vực lập trình C++"
          ]
        }
      ]
    }
  ]
};

export default courseCppBeginner;
