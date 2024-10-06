import { ConstCourseType } from "../type";
import { urlImageCourse } from "../../firebase";


const courseASPReact: ConstCourseType = {
  rating: 4.8,
  originalPrice: 20000000,
  price: 12000000,
  duration: 195,
  language: ["c#", "typescript", "javascript"],
  slug: "lap-trinh-du-an-thuc-chien",
  imgSrc: urlImageCourse['csharp'],
  category: "web",
  nameCourse: "LẬP TRÌNH DỰ ÁN THỰC CHIẾN",
  description:
    "Khóa học lập trình ASP.NET từ cơ bản đến nâng cao, trang bị cho bạn các kỹ năng thực chiến.",
  tags: ["ASP.NET", "C#", "Frontend", "Backend", "SQL", "Agile"],
  newest: true,
  popular: true,
  trending: true,
  content: {
    intro:
      "Khóa học lập trình ASP.NET từ cơ bản đến nâng cao, trang bị cho bạn các kỹ năng thực chiến.",
    purposes: [
      "Hiểu rõ các khái niệm cơ bản và nâng cao về ASP.NET và React",
      "Phát triển kỹ năng lập trình frontend và backend",
      "Xây dựng và triển khai các ứng dụng web thực tế",
      "Áp dụng các phương pháp phát triển phần mềm hiện đại như Agile/Scrum",
    ],
    results: [
      "Có khả năng phát triển ứng dụng web hoàn chỉnh",
      "Sử dụng thành thạo các công cụ và công nghệ như ASP.NET, React, SQL",
      "Hiểu và áp dụng các quy trình phát triển phần mềm chuyên nghiệp",
      "Phát triển kỹ năng làm việc nhóm và quản lý dự án",
    ],
    orientedUsers: [
      "Lập trình viên muốn nâng cao kỹ năng và kiến thức",
      "Sinh viên ngành Công nghệ Thông tin",
      "Người muốn chuyển hướng sang lĩnh vực lập trình web",
      "Lập trình viên muốn học thêm về phát triển frontend và backend",
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
      nameLesson: "Module 1: FE Basic",
      duration: 12,
      detailLessons: [
        {
          nameDetailLesson: "Tổng quan về lập trình web",
          duration: 2,
        },
        {
          nameDetailLesson: "Giới thiệu về khóa học, lộ trình học",
          duration: 2,
        },
        {
          nameDetailLesson: "Làm quen một số thẻ trong HTML",
          duration: 2,
        },
        {
          nameDetailLesson: "Tìm hiểu HTML5 các thẻ hay sử dụng trong thực tế",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Dùng các thẻ HTML thực hành tạo một số component đơn giản",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Các cách viết CSS trong dự án (Inline Internal External)",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Module 2: FE Intermediate",
      duration: 18,
      detailLessons: [
        {
          nameDetailLesson: "Cách khởi tạo biến trong JS",
          duration: 2,
        },
        {
          nameDetailLesson: "Datatypes",
          duration: 2,
        },
        {
          nameDetailLesson: "Toán tử trong JS",
          duration: 2,
        },
        {
          nameDetailLesson: "Comment trong JS",
          duration: 2,
        },
        {
          nameDetailLesson: "Tìm hiểu về scope trong JS",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Cách sử dụng vòng lặp if if-else if-else lồng nhau",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Cách sử dụng và phân biệt các vòng lặp for while do-while",
          duration: 2,
        },
        {
          nameDetailLesson: "Thực hành toán tử 3 ngôi",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Tìm hiểu Mảng trong JS những tính chất quan trọng và thực hành",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Module 3: ECMA features & TypeScript",
      duration: 4,
      detailLessons: [
        {
          nameDetailLesson:
            "ES6 và một số tính năng trong các phiên bản ECMAScript",
          duration: 2,
        },
        {
          nameDetailLesson: "TypeScript",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Module 4: ReactJS",
      duration: 22,
      detailLessons: [
        {
          nameDetailLesson: "Tổng quan về ReactJS",
          duration: 2,
        },
        {
          nameDetailLesson: "Xây dựng project ReactJS",
          duration: 2,
        },
        {
          nameDetailLesson: "Cấu trúc folder project",
          duration: 2,
        },
        {
          nameDetailLesson: "Hướng dẫn về JSX sự khác nhau giữa JSX và HTML",
          duration: 2,
        },
        {
          nameDetailLesson: "Component là gì?",
          duration: 2,
        },
        {
          nameDetailLesson: "Props List rendering",
          duration: 2,
        },
        {
          nameDetailLesson: "Props cơ bản",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Cách truyền dữ liệu từ component cha xuống component con",
          duration: 2,
        },
        {
          nameDetailLesson: "Validate props (sử dụng props type)",
          duration: 2,
        },
        {
          nameDetailLesson: "Default props",
          duration: 2,
        },
        {
          nameDetailLesson: "List rendering",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Module 5: Backend .NetCore",
      duration: 64,
      detailLessons: [
        {
          nameDetailLesson: "Hướng dẫn cài đặt môi trường phát triển",
          duration: 2,
        },
        {
          nameDetailLesson: "Tìm hiểu về ngôn ngữ C#",
          duration: 2,
        },
        {
          nameDetailLesson: "Thực hành tạo ứng dụng Console",
          duration: 2,
        },
        {
          nameDetailLesson: "Cấu trúc của một Solution và Project",
          duration: 2,
        },
        {
          nameDetailLesson: "Khái niệm về namespace",
          duration: 2,
        },
        {
          nameDetailLesson: "Viết ứng dụng console app đơn giản",
          duration: 2,
        },
        {
          nameDetailLesson: "Biến và kiểu dữ liệu",
          duration: 2,
        },
        {
          nameDetailLesson: "Naming convention",
          duration: 2,
        },
        {
          nameDetailLesson: "Toán tử trong C#",
          duration: 2,
        },
        {
          nameDetailLesson: "Hàm trong C#",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Tìm hiểu cách sử dụng từ khóa ref và out trong hàm",
          duration: 2,
        },
        {
          nameDetailLesson: "Tìm hiểu hằng số trong C#",
          duration: 2,
        },
        {
          nameDetailLesson: "Thực hành cấu trúc điều kiện if else trong C#",
          duration: 2,
        },
        {
          nameDetailLesson: "Thực hành sử dụng toán tử 3 ngôi trong C#",
          duration: 2,
        },
        {
          nameDetailLesson: "Tìm hiểu cấu trúc điều kiện switch case trong C#",
          duration: 2,
        },
        {
          nameDetailLesson: "Tìm hiểu và thực hành sử dụng enum trong C#",
          duration: 2,
        },
        {
          nameDetailLesson: "Tìm hiểu về Exception và Exception Handling",
          duration: 2,
        },
        {
          nameDetailLesson: "Thực hành các loại vòng lặp trong C#",
          duration: 2,
        },
        {
          nameDetailLesson: "Tìm hiểu về List và cách sử dụng List trong C#",
          duration: 2,
        },
        {
          nameDetailLesson: "Tìm hiểu về Dictionary và cách sử dụng Dictionary",
          duration: 2,
        },
        {
          nameDetailLesson: "Thực hành sử dụng Extention method",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Thực hành sử dụng LinQ với các kiểu dữ liệu nguyên thủy",
          duration: 2,
        },
        {
          nameDetailLesson: "Bài kiểm tra cuối module C# cơ bản",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Thực hành sử dụng lớp String StringBuilder DateTime Math",
          duration: 2,
        },
        {
          nameDetailLesson: "Khái niệm lập trình hướng đối tượng",
          duration: 2,
        },
        {
          nameDetailLesson: "Các thành phần trong class",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Thực hành tạo class và thực hành với các thành phần",
          duration: 2,
        },
        {
          nameDetailLesson: "Thực hành access modifier trong OOP",
          duration: 2,
        },
        {
          nameDetailLesson: "Tính kế thừa trong OOP",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Thực hành sử dụng các từ khóa virtual abstract override",
          duration: 2,
        },
        {
          nameDetailLesson: "Tính đa hình trong OOP",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Tìm hiểu về interface và thực hành interface với các bài toán thực tế",
          duration: 2,
        },
        {
          nameDetailLesson: "Khái niệm về tham chiếu và tham trị",
          duration: 2,
        },
        {
          nameDetailLesson: "Thực hành sử dụng Generic trong C#",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Thực hành sử dụng LinQ và các kiểu dữ liệu tự định nghĩa",
          duration: 2,
        },
        {
          nameDetailLesson: "Bài kiểm tra cuối module OOP",
          duration: 2,
        },
        {
          nameDetailLesson: "Cài đặt môi trường phát triển (Sql server 2019)",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Tổng quan về SQL Server cơ chế lưu trữ dữ liệu trong SQL Server",
          duration: 2,
        },
        {
          nameDetailLesson: "Các kiểu dữ liệu trong SQL Server",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Thực hành tạo table column cài đặt khóa chính khóa ngoại",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Thực hành các phương thức thêm sửa xóa đọc dữ liệu trong bảng",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Thực hành tạo Design Pattern Repository Unit Of Work",
          duration: 2,
        },
        {
          nameDetailLesson: "Tìm hiểu về Authentication và Authorization",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Tìm hiểu về Identity Framework và cách tích hợp vào ứng dụng",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Thực hành viết các API để thêm sửa xóa quyền và người dùng",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Tìm hiểu JWT và áp dụng JWT vào authentication và authorization",
          duration: 2,
        },
        {
          nameDetailLesson: "Thực hành tạo customize authorization",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Thực hành viết các API thực hiện tính năng thêm sửa xóa danh mục sản phẩm",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Thực hành viết các API thực hiện tính năng thêm sửa xóa sản phẩm variant",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Thực hành viết các API thực hiện tính năng phân trang sản phẩm",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Thực hành viết các API thực hiện tính năng hiển thị chi tiết sản phẩm",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Thực hành viết các API thực hiện các nghiệp vụ làm việc với giỏ hàng",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Thực hành viết các API thực hiện nghiệp vụ check out tính toán tồn kho",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Thực hành viết các API thực hiện nghiệp vụ quản lý đơn hàng",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Log và vai trò của log trong ứng dụng thực hành sử dụng log trong ứng dụng",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Tìm hiểu thêm serilog và tích hợp serilog vào ứng dụng",
          duration: 2,
        },
        {
          nameDetailLesson: "Ý nghĩa và vai trò của cache trong ứng dụng",
          duration: 2,
        },
        {
          nameDetailLesson: "Các cơ chế caching",
          duration: 2,
        },
        {
          nameDetailLesson: "Hướng dẫn sử dụng distributed cache với Redis",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Module 6: Web Master và Deployment",
      duration: 4,
      detailLessons: [
        {
          nameDetailLesson: "Hướng dẫn cài đặt IIS Webserver",
          duration: 2,
        },
        {
          nameDetailLesson: "Deploy ứng dụng lên IIS Webserver",
          duration: 2,
        },
        {
          nameDetailLesson: "Deploy ứng dụng với docker và docker compose",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Module 7: Agile/Scrum - Software Development Life Cycle",
      duration: 6,
      detailLessons: [
        {
          nameDetailLesson: "Tìm hiểu về các Quy trình phát triển phần mềm",
          duration: 2,
        },
        {
          nameDetailLesson: "Các mô hình phát triển phần mềm",
          duration: 2,
        },
        {
          nameDetailLesson: "Giới thiệu về Agile/Scrum",
          duration: 2,
        },
        {
          nameDetailLesson: "Tìm hiểu về Jira Trello",
          duration: 2,
        },
        {
          nameDetailLesson: "Áp dụng Agile/Scrum Jara vào 1 dự án thực tế",
          duration: 2,
        },
        {
          nameDetailLesson: "Software Development Life Cycle (SDLC)",
          duration: 2,
        },
        {
          nameDetailLesson: "Các vấn đề trong quản lý một dự án thực tế",
          duration: 2,
        },
        {
          nameDetailLesson: "Cách estimate một task theo chuẩn",
          duration: 2,
        },
        {
          nameDetailLesson: "Phỏng vấn thử ứng viên",
          duration: 2,
        },
      ],
    },
  ],
};

export default courseASPReact;
