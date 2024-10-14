import { competitiveImg } from "@/constants/image";
import { urlImageCourse } from "../../firebase";
import { ConstCourseType } from "../type";

const competitiveProgrammingCourse: ConstCourseType = {
  rating: 4.5,
  originalPrice: 5500000,
  price: 3300000,
  duration: 71,
  language: ["cpp"],
  slug: "lap-trinh-thi-dau",
  imgSrc: competitiveImg, // Đường dẫn tới ảnh của khóa học
  category: "foundation",
  nameCourse: "Khóa Học Lập Trình Thi Đấu",
  description:
    "Bạn đam mê lập trình và muốn thử thách bản thân trong các cuộc thi? Khóa học này sẽ trang bị cho bạn tất cả các kỹ năng và chiến lược cần thiết để trở thành một lập trình viên thi đấu xuất sắc. Từ các cấu trúc dữ liệu cơ bản đến những thuật toán phức tạp, từ việc quản lý thời gian đến kỹ năng giải quyết vấn đề, mọi thứ đều được bao phủ một cách toàn diện.",
  tags: ["lập trình", "thi đấu", "cấu trúc dữ liệu", "thuật toán"],
  newest: true,
  popular: true,
  trending: true,
  content: {
    intro:
      "Khóa học này sẽ giúp bạn nắm vững các kỹ thuật và chiến lược cần thiết để tham gia các cuộc thi lập trình.",
    purposes: [
      "Nắm vững các cấu trúc dữ liệu và thuật toán cơ bản",
      "Phát triển kỹ năng giải quyết vấn đề",
      "Hiểu và áp dụng các chiến lược thi đấu hiệu quả",
      "Luyện tập qua các bài tập thực tế và thi đấu thử nghiệm",
    ],
    results: [
      "Tự tin tham gia các cuộc thi lập trình",
      "Nắm vững kiến thức về cấu trúc dữ liệu và thuật toán",
      "Phát triển kỹ năng lập trình và giải quyết vấn đề",
      "Có khả năng xây dựng chiến lược thi đấu hiệu quả",
    ],
    orientedUsers: [
      "Sinh viên đam mê lập trình và muốn tham gia các cuộc thi",
      "Người đã có kiến thức cơ bản về lập trình muốn nâng cao kỹ năng",
      "Lập trình viên muốn cải thiện kỹ năng giải quyết vấn đề và thuật toán",
    ],
    whyChoose: [
      "Khóa học được thiết kế bài bản và chi tiết",
      "Giảng viên giàu kinh nghiệm và nhiệt tình",
      "Nội dung cập nhật và phù hợp với xu hướng thi đấu hiện nay",
      "Hỗ trợ và tư vấn nhiệt tình từ cộng đồng học viên",
    ],
  },
  lessons: [
    {
      nameLesson: "Giới thiệu về lập trình thi đấu",
      duration: 3,
      detailLessons: [
        {
          nameDetailLesson: "Lịch sử và tầm quan trọng của lập trình thi đấu",
          duration: 2,
        },
        {
          nameDetailLesson: "Các cuộc thi lập trình nổi tiếng",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Các cấu trúc dữ liệu cơ bản",
      duration: 9,
      detailLessons: [
        {
          nameDetailLesson: "Mảng và Danh sách liên kết",
          duration: 2.25,
        },
        {
          nameDetailLesson: "Ngăn xếp và Hàng đợi",
          duration: 2.25,
        },
        {
          nameDetailLesson: "Cây và Đồ thị",
          duration: 2.25,
        },
        {
          nameDetailLesson: "Bảng băm và bộ nhớ đệm",
          duration: 2.25,
        },
      ],
    },
    {
      nameLesson: "Các thuật toán cơ bản",
      duration: 12,
      detailLessons: [
        {
          nameDetailLesson: "Sắp xếp và Tìm kiếm",
          duration: 3,
        },
        {
          nameDetailLesson: "Đệ quy và Quy hoạch động",
          duration: 3,
        },
        {
          nameDetailLesson: "Thuật toán tham lam và Backtracking",
          duration: 3,
        },
        {
          nameDetailLesson: "Thuật toán đồ thị",
          duration: 3,
        },
      ],
    },
    {
      nameLesson: "Kỹ năng thi đấu",
      duration: 6,
      detailLessons: [
        {
          nameDetailLesson: "Kỹ năng giải quyết vấn đề",
          duration: 2,
        },
        {
          nameDetailLesson: "Quản lý thời gian",
          duration: 2,
        },
        {
          nameDetailLesson: "Chiến lược thi đấu",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Luyện tập và Thực hành",
      duration: 7.5,
      detailLessons: [
        {
          nameDetailLesson: "Bài tập mẫu và Giải thích",
          duration: 3.75,
        },
        {
          nameDetailLesson: "Thi đấu thử nghiệm",
          duration: 3.75,
        },
      ],
    },
    {
      nameLesson: "Thuật toán nâng cao",
      duration: 9,
      detailLessons: [
        {
          nameDetailLesson: "Cây phân đoạn và Cây Fenwick",
          duration: 3,
        },
        {
          nameDetailLesson: "Thuật toán dijkstra và Floyd-Warshall",
          duration: 3,
        },
        {
          nameDetailLesson: "Thuật toán chuỗi",
          duration: 3,
        },
      ],
    },
    {
      nameLesson: "Kỹ năng phỏng vấn và thi đấu trực tuyến",
      duration: 6,
      detailLessons: [
        {
          nameDetailLesson: "Chuẩn bị phỏng vấn",
          duration: 2,
        },
        {
          nameDetailLesson: "Mô phỏng thi đấu trực tuyến",
          duration: 2,
        },
        {
          nameDetailLesson: "Phân tích kết quả và cải thiện",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Các cuộc thi lập trình thực tế",
      duration: 5,
      detailLessons: [
        {
          nameDetailLesson: "Giới thiệu về ACM ICPC",
          duration: 2.5,
        },
        {
          nameDetailLesson: "Giới thiệu về Codeforces",
          duration: 2.5,
        },
      ],
    },
    {
      nameLesson: "Phân tích và tối ưu mã nguồn",
      duration: 4,
      detailLessons: [
        {
          nameDetailLesson: "Phân tích độ phức tạp thuật toán",
          duration: 2,
        },
        {
          nameDetailLesson: "Tối ưu hóa mã nguồn",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Thực hành cuối khóa",
      duration: 6,
      detailLessons: [
        {
          nameDetailLesson: "Dự án cuối khóa",
          duration: 3,
        },
        {
          nameDetailLesson: "Thi đấu cuối khóa",
          duration: 3,
        },
      ],
    },
  ],
};

export default competitiveProgrammingCourse;
