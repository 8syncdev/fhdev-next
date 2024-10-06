import { ConstCourseType } from "../type";
import { urlImageCourse } from "../../firebase";

const courseSpringReact: ConstCourseType = {
  rating: 4.8,
  originalPrice: 20000000,
  price: 12000000,
  duration: 195,
  language: ["typescript", "javascript", "java"],
  slug: "lap-trinh-du-an-thuc-chien-java",
  imgSrc: urlImageCourse['java'],
  category: "web",
  nameCourse: "LẬP TRÌNH DỰ ÁN THỰC CHIẾN TECH-STACK JAVA",
  description:
    "Khóa học lập trình Java từ cơ bản đến nâng cao, trang bị cho bạn các kỹ năng thực chiến.",
  tags: ["Java", "Spring", "Hibernate", "Frontend", "Backend", "SQL", "Agile"],
  newest: true,
  popular: true,
  trending: true,
  content: {
    intro:
      "Khóa học lập trình Java từ cơ bản đến nâng cao, trang bị cho bạn các kỹ năng thực chiến.",
    purposes: [
      "Nắm vững kiến thức cơ bản và nâng cao về lập trình Java và các framework phổ biến.",
      "Phát triển kỹ năng lập trình full-stack với Java, Spring, Hibernate và ReactJS.",
      "Hiểu và áp dụng quy trình phát triển phần mềm Agile/Scrum trong dự án thực tế.",
      "Xây dựng các ứng dụng web hoàn chỉnh và triển khai chúng lên các server.",
    ],
    results: [
      "Có khả năng phát triển ứng dụng web full-stack với Java và ReactJS.",
      "Hiểu và áp dụng các kỹ thuật tối ưu hóa và bảo mật trong phát triển web.",
      "Phát triển kỹ năng làm việc nhóm và quản lý dự án với phương pháp Agile/Scrum.",
      "Tự tin triển khai và quản lý các dự án lập trình thực tế.",
    ],
    orientedUsers: [
      "Lập trình viên muốn nâng cao kỹ năng và kiến thức về Java và các framework liên quan.",
      "Sinh viên ngành Công nghệ Thông tin muốn nắm vững lập trình web full-stack.",
      "Người muốn chuyển hướng sang lĩnh vực lập trình web full-stack.",
      "Lập trình viên muốn học thêm về phát triển frontend và backend.",
    ],
    whyChoose: [
      "Khóa học được thiết kế bài bản và chi tiết từ cơ bản đến nâng cao.",
      "Giảng viên giàu kinh nghiệm và nhiệt tình.",
      "Nội dung cập nhật và phù hợp với xu hướng hiện nay.",
      "Hỗ trợ và tư vấn nhiệt tình từ cộng đồng học viên.",
    ],
  },

  lessons: [
    {
      nameLesson: "Module 1: FE Basic",
      duration: 12,
      detailLessons: [
        { nameDetailLesson: "Tổng quan về lập trình web", duration: 1 },
        {
          nameDetailLesson: "Giới thiệu về khóa học, lộ trình học",
          duration: 1,
        },
        { nameDetailLesson: "Làm quen một số thẻ trong HTML", duration: 1 },
        {
          nameDetailLesson: "Tìm hiểu HTML5 các thẻ hay sử dụng trong thực tế",
          duration: 1,
        },
        {
          nameDetailLesson:
            "Dùng các thẻ HTML thực hành tạo một số component đơn giản",
          duration: 1,
        },
        {
          nameDetailLesson:
            "Các cách viết CSS trong dự án (Inline Internal External)",
          duration: 1,
        },
        {
          nameDetailLesson: "Các thuộc tính cơ bản hay dùng trong CSS",
          duration: 1,
        },
        { nameDetailLesson: "Cách đặt tên CSS (BEM ...)", duration: 1 },
        {
          nameDetailLesson:
            "Tìm hiểu về Box Model và Position để căn chỉnh CSS cho các thành phần trong HTML",
          duration: 1,
        },
        {
          nameDetailLesson:
            "Thuộc tính display và flex để bố cục website thêm linh hoạt và đẹp mắt",
          duration: 1,
        },
        {
          nameDetailLesson:
            "Phân biệt được các giá trị inline block inline-block",
          duration: 1,
        },
        {
          nameDetailLesson:
            "Responsive trong CSS tầm quan trọng tại sao phải biết cách sử dụng Responsive",
          duration: 1,
        },
        {
          nameDetailLesson:
            "Sử dụng bootstrap để làm 1 vài component hay gặp: card product ...",
          duration: 1,
        },
        {
          nameDetailLesson:
            "Áp dụng các kiến thức để xây dựng layout 1 trang web",
          duration: 1,
        },
        {
          nameDetailLesson: "Deploy và làm bài kiểm tra cuối module",
          duration: 1,
        },
        { nameDetailLesson: "Làm tiếp bài thực hành", duration: 1 },
        { nameDetailLesson: "Hướng dẫn deploy lên github", duration: 1 },
        { nameDetailLesson: "Làm bài kiểm tra cuối module", duration: 1 },
      ],
    },
    {
      nameLesson: "Module 2: FE Intermediate",
      duration: 18,
      detailLessons: [
        { nameDetailLesson: "Cách khởi tạo biến trong JS", duration: 1 },
        { nameDetailLesson: "Datatypes", duration: 1 },
        { nameDetailLesson: "Toán tử trong JS", duration: 1 },
        { nameDetailLesson: "Comment trong JS", duration: 1 },
        { nameDetailLesson: "Tìm hiểu về scope trong JS", duration: 1 },
        {
          nameDetailLesson:
            "Cách sử dụng vòng lặp if if-else if-else lồng nhau",
          duration: 1,
        },
        {
          nameDetailLesson:
            "Cách sử dụng và phân biệt các vòng lặp for while do-while",
          duration: 1,
        },
        { nameDetailLesson: "Thực hành toán tử 3 ngôi", duration: 1 },
        {
          nameDetailLesson:
            "Tìm hiểu Mảng trong JS những tính chất quan trọng và thực hành",
          duration: 1,
        },
        { nameDetailLesson: "Mảng với các ví dụ thực tế", duration: 1 },
        { nameDetailLesson: "Cú pháp khai báo", duration: 1 },
        { nameDetailLesson: "Các thao tác trên array (CRUD)", duration: 1 },
        { nameDetailLesson: "Duyệt mảng", duration: 1 },
        { nameDetailLesson: "Object là gì", duration: 1 },
        { nameDetailLesson: "Các thao tác với object (CRUD)", duration: 1 },
        { nameDetailLesson: "Duyệt object", duration: 1 },
        {
          nameDetailLesson:
            "Điểm khác nhau giữa kiểu dữ liệu tham chiếu và kiểu dữ liệu nguyên thủy",
          duration: 1,
        },
        {
          nameDetailLesson: "Function là gì cách khai báo và sử dụng function",
          duration: 1,
        },
        { nameDetailLesson: "Giới thiệu về callback", duration: 1 },
        { nameDetailLesson: "Tìm hiểu về DOM và Event trong JS", duration: 1 },
        { nameDetailLesson: "Event loop trong JS", duration: 1 },
        {
          nameDetailLesson:
            "Các cách xử lý bất đồng bộ trong JS (callback promise async-await)",
          duration: 1,
        },
        { nameDetailLesson: "Cách sử dụng try-catch", duration: 1 },
        {
          nameDetailLesson: "Local storage session storage cookie",
          duration: 1,
        },
        {
          nameDetailLesson: "Một số thuật toán hay dùng và clean code",
          duration: 1,
        },
        {
          nameDetailLesson: "Kiến thức bổ trợ (location history trên browser)",
          duration: 1,
        },
        { nameDetailLesson: "Debug trong JS", duration: 1 },
        {
          nameDetailLesson: "Thực hành làm project quản lý sinh viên",
          duration: 1,
        },
        {
          nameDetailLesson:
            "Áp dụng các kiến thức HTML CSS và JS đã học để làm 1 project quản lý sinh viên với các chức năng",
          duration: 1,
        },
        { nameDetailLesson: "Thêm mới sinh viên", duration: 1 },
        {
          nameDetailLesson: "In ra toàn bộ thông tin sinh viên đăng có",
          duration: 1,
        },
        { nameDetailLesson: "Update thông tin sinh viên", duration: 1 },
        { nameDetailLesson: "Xóa thông tin sinh viên", duration: 1 },
        { nameDetailLesson: "Tìm kiếm thông tin sinh viên", duration: 1 },
        {
          nameDetailLesson:
            "(Dùng giao diện có thể sử dụng bootstrap để tiết kiệm thời gian)",
          duration: 1,
        },
        { nameDetailLesson: "Xây dựng chức năng sắp xếp", duration: 1 },
        {
          nameDetailLesson: "Thực hành làm project quản lý sinh viên (2)",
          duration: 1,
        },
        { nameDetailLesson: "Tìm hiểu về API cách sử dụng API", duration: 1 },
        {
          nameDetailLesson: "Sử dụng mock API để lưu trữ thông tin",
          duration: 1,
        },
        { nameDetailLesson: "Deploy project làm bài test", duration: 1 },
      ],
    },
    {
      nameLesson: "Module 3: ECMA features & TypeScript",
      duration: 4,
      detailLessons: [
        {
          nameDetailLesson:
            "ES6 và một số tính năng trong các phiên bản ECMAScript",
          duration: 1,
        },
        {
          nameDetailLesson: "Tìm hiểu về các chức năng trong ES6",
          duration: 1,
        },
        {
          nameDetailLesson:
            "Tìm hiểu về một số tính năng trong các phiên bản ECMAScript khác",
          duration: 1,
        },
        { nameDetailLesson: "TypeScript", duration: 1 },
        {
          nameDetailLesson:
            "Tìm hiểu về các kiểu dữ liệu cơ bản trong TypeScript",
          duration: 1,
        },
        { nameDetailLesson: "Generic", duration: 1 },
        { nameDetailLesson: "OOP", duration: 1 },
      ],
    },
    {
      nameLesson: "Module 4: ReactJS",
      duration: 24,
      detailLessons: [
        { nameDetailLesson: "Tổng quan về ReactJS", duration: 2 },
        { nameDetailLesson: "Xây dựng project ReactJS", duration: 2 },
        { nameDetailLesson: "Cấu trúc folder project", duration: 2 },
        {
          nameDetailLesson: "Hướng dẫn về JSX sự khác nhau giữa JSX và HTML",
          duration: 2,
        },
        { nameDetailLesson: "Component là gì?", duration: 2 },
        { nameDetailLesson: "Props List rendering", duration: 2 },
        { nameDetailLesson: "Props cơ bản", duration: 2 },
        {
          nameDetailLesson:
            "Cách truyền dữ liệu từ component cha xuống component con",
          duration: 2,
        },
        {
          nameDetailLesson: "Validate props (sử dụng props type)",
          duration: 2,
        },
        { nameDetailLesson: "Default props", duration: 2 },
        { nameDetailLesson: "List rendering", duration: 2 },
        { nameDetailLesson: "Rendering có điều kiện", duration: 2 },
        { nameDetailLesson: "State và event", duration: 2 },
        { nameDetailLesson: "Event trong ReactJS", duration: 2 },
        { nameDetailLesson: "Cách khai báo sử dụng state", duration: 2 },
        { nameDetailLesson: "So sánh state và props", duration: 2 },
        { nameDetailLesson: "Routing", duration: 2 },
        {
          nameDetailLesson: "Hướng dẫn cài đặt và sử dụng thư viện routing",
          duration: 2,
        },
        {
          nameDetailLesson: "Setup routing cho project thực hành",
          duration: 2,
        },
        {
          nameDetailLesson: "Hướng dẫn setup routing cho project cuối khóa",
          duration: 2,
        },
        { nameDetailLesson: "Tương tác với form", duration: 2 },
        {
          nameDetailLesson: "Sử dụng formik và yup để validate form",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Thư viện Ant Design và demo 1 số component có trong Ant Design",
          duration: 2,
        },
        { nameDetailLesson: "Thực hành làm đăng nhập đăng ký", duration: 2 },
        {
          nameDetailLesson:
            "Tìm hiểu về các hook useEffect useMemo useCallback và react memo",
          duration: 2,
        },
        { nameDetailLesson: "Tìm hiểu về side effect", duration: 2 },
        { nameDetailLesson: "Life cycle trong react", duration: 2 },
        { nameDetailLesson: "Call API trong react", duration: 2 },
        { nameDetailLesson: "Cách sử dụng useEffect", duration: 2 },
        {
          nameDetailLesson:
            "Tìm hiểu công dụng và cách sử dụng useMemo useCallback và react memo",
          duration: 2,
        },
        { nameDetailLesson: "Tìm hiểu về useRef và Context", duration: 2 },
        {
          nameDetailLesson: "Tìm hiểu công dụng và cách sử dụng useRef",
          duration: 2,
        },
        {
          nameDetailLesson:
            "So sánh biến thường biến được tạo từ useRef và biến được tạo từ useState",
          duration: 2,
        },
        {
          nameDetailLesson: "Sử dụng useContext để lưu trữ và sử dụng dữ liệu",
          duration: 2,
        },
        { nameDetailLesson: "Các hook khác và custom hook", duration: 2 },
        { nameDetailLesson: "Tìm hiểu các hook khác", duration: 2 },
        { nameDetailLesson: "Hướng dẫn tạo 1 custom hook", duration: 2 },
        { nameDetailLesson: "Redux và redux toolkit", duration: 2 },
        { nameDetailLesson: "Hướng dẫn cài đặt và sử dụng Redux", duration: 2 },
        { nameDetailLesson: "Thực hành làm CRUD với redux", duration: 2 },
        { nameDetailLesson: "React Query", duration: 2 },
        {
          nameDetailLesson: "Tìm hiểu và hướng dẫn cài đặt sử dụng react query",
          duration: 2,
        },
        {
          nameDetailLesson: "Thực hành làm project Ecommerce CRM",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Xây dựng các Frontend và tích hợp các APIs vào các chức năng chính trong project Ecommerce CRM",
          duration: 2,
        },
        { nameDetailLesson: "Làm bài thi cuối module", duration: 2 },
      ],
    },
    {
      nameLesson: "Module 5: Backend Java",
      duration: 64,
      detailLessons: [
        { nameDetailLesson: "Tổng quan về ngôn ngữ Java", duration: 2 },
        {
          nameDetailLesson: "Các đặc trưng cơ bản của Java so với ngôn ngữ C++",
          duration: 2,
        },
        { nameDetailLesson: "Cài đặt môi trường", duration: 2 },
        {
          nameDetailLesson:
            "Môi trường chạy Java JVM JRE môi trường phát triển Java JDK",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Sử dụng IDE trong chương trình IntelliJ phiên bản Ultimate",
          duration: 2,
        },
        {
          nameDetailLesson: "Cài đặt biến môi trường và giải thích ý nghĩa",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Chương trình Helloworld các phím tắt để chạy chương trình",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Chương trình in ra màn hình và nhập vào từ bàn phím chuỗi và số",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Hướng dẫn sử dụng Git thực hành các thao tác trên Git",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Cấu trúc chuẩn chương trình trong Java câu lệnh khởi lệnh quy tắc đặt tên biến hàm class trong Java",
          duration: 2,
        },
        { nameDetailLesson: "Biến trong Java", duration: 2 },
        {
          nameDetailLesson:
            "8 kiểu dữ liệu nguyên thủy và hệ ký ép kiểu trong Java",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Toán tử số học logic hệ thống số hệ ký ép kiểu toán tử hệ thập lục phân tính toán với kiểu số lớn",
          duration: 2,
        },
        {
          nameDetailLesson: "Tiến trình biểu thức logic trong Java",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Cấu trúc điều khiển rẽ nhánh (if else switch case)",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Cấu trúc điều khiển rẽ nhánh (if else switch case) - Tiếp theo",
          duration: 2,
        },
        { nameDetailLesson: "Cấu trúc lặp (for while do while)", duration: 2 },
        { nameDetailLesson: "Hàm trong Java (hàm và hàm đệ quy)", duration: 2 },
        {
          nameDetailLesson:
            "String trong Java (String pool equals vs ==) StringBuilder StringBuffer",
          duration: 2,
        },
        { nameDetailLesson: "Xử lý chuỗi trong Java", duration: 2 },
        {
          nameDetailLesson:
            "Mảng 1 chiều và n chiều trong Java Xử lý mảng trong Java",
          duration: 2,
        },
        {
          nameDetailLesson: "Bài kiểm tra cuối module lập trình căn bản",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Lý thuyết và thực hành về hướng đối tượng trong Java",
          duration: 2,
        },
        { nameDetailLesson: "Cách viết 1 class trong Java", duration: 2 },
        { nameDetailLesson: "Các thành phần của 1 class", duration: 2 },
        { nameDetailLesson: "Giải bài tập cộng trừ phân số", duration: 2 },
        {
          nameDetailLesson: "Hàm khởi tạo mặc định hàm khởi tạo nhiều tham số",
          duration: 2,
        },
        { nameDetailLesson: "Con trỏ this", duration: 2 },
        { nameDetailLesson: "Tính chất kế thừa trong Java", duration: 2 },
        { nameDetailLesson: "Overloading và override trong Java", duration: 2 },
        {
          nameDetailLesson:
            "Phạm vi truy cập (private default protected public) trong Java",
          duration: 2,
        },
        { nameDetailLesson: "Pakage trong Java", duration: 2 },
        { nameDetailLesson: "Từ khóa static trong Java", duration: 2 },
        { nameDetailLesson: "Inner class trong Java", duration: 2 },
        { nameDetailLesson: "Abstract class trong Java", duration: 2 },
        { nameDetailLesson: "Phương thức abstract trong Java", duration: 2 },
        { nameDetailLesson: "Interface class trong Java", duration: 2 },
        {
          nameDetailLesson:
            "Thực hành 4 tính chất đặc trưng của hướng đối tượng",
          duration: 2,
        },
        { nameDetailLesson: "Equal và Hashcode trong Java", duration: 2 },
        {
          nameDetailLesson: "Collection và Map trong Java và ứng dụng",
          duration: 2,
        },
        { nameDetailLesson: "Sắp xếp trong Java", duration: 2 },
        { nameDetailLesson: "Stream API trong Java", duration: 2 },
        {
          nameDetailLesson: "Xử lý ngoại lệ (exception handling) trong Java",
          duration: 2,
        },
        {
          nameDetailLesson: "Lớp bao kiểu dữ liệu nguyên thủy (wrapper class)",
          duration: 2,
        },
        {
          nameDetailLesson: "Lambda Expression & Functional Interface",
          duration: 2,
        },
        { nameDetailLesson: "Input/Output trong Java", duration: 2 },
        { nameDetailLesson: "Thread và MultiThread trong Java", duration: 2 },
        { nameDetailLesson: "Generic class trong Java", duration: 2 },
        { nameDetailLesson: "Bài kiểm tra cuối module OOP", duration: 2 },
        {
          nameDetailLesson:
            "Cài đặt môi trường MySQL giới thiệu về MySQL làm quen với công cụ",
          duration: 2,
        },
        {
          nameDetailLesson: "Làm quen với CSDL và hệ quản trị CSDL",
          duration: 2,
        },
        { nameDetailLesson: "Các kiểu dữ liệu trong MySQL", duration: 2 },
        {
          nameDetailLesson: "Hướng dẫn câu lệnh INSERT UPDATE DELETE DROP",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Hướng dẫn tạo TABLE COLUMN cài đặt khóa chính UNIQUE...",
          duration: 2,
        },
        { nameDetailLesson: "Hướng dẫn câu lệnh QUERY căn bản", duration: 2 },
        {
          nameDetailLesson: "QUERY dữ liệu căn bản từ (><=<= LIKE IN...)",
          duration: 2,
        },
        { nameDetailLesson: "Thực hành LIMIT OFFSET DISTINCT", duration: 2 },
        { nameDetailLesson: "GROUP BY HAVING ORDER BY", duration: 2 },
        {
          nameDetailLesson: "Các hàm tổng dụng trong SQL (sum avg ...)",
          duration: 2,
        },
        { nameDetailLesson: "Khóa ngoại", duration: 2 },
        {
          nameDetailLesson: "Các phép JOIN (INNER JOIN LEFT JOIN RIGHT JOIN)",
          duration: 2,
        },
        { nameDetailLesson: "Sub Query", duration: 2 },
        {
          nameDetailLesson: "Hướng dẫn sử dụng JDBC kết nối chương trình JAVA",
          duration: 2,
        },
        {
          nameDetailLesson: "Hướng dẫn phân tích phần mềm từ yêu cầu",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Bài tập thiết kế hệ thống quản lý thư viện sử dụng console Java",
          duration: 2,
        },
        { nameDetailLesson: "VIEW FUNCTION PROCEDURE trong SQL", duration: 2 },
        { nameDetailLesson: "Bài kiểm tra cuối module MySQL", duration: 2 },
        { nameDetailLesson: "Tạo dự án sử dụng Servlet", duration: 2 },
        {
          nameDetailLesson: "Khởi niệm về webserver giao thức kiến trúc web...",
          duration: 2,
        },
        { nameDetailLesson: "Cấu hình Servlet", duration: 2 },
        { nameDetailLesson: "Http Header", duration: 2 },
        { nameDetailLesson: "Vòng đời của Servlet", duration: 2 },
        { nameDetailLesson: "Request - Response", duration: 2 },
        { nameDetailLesson: "Phương thức GET - POST", duration: 2 },
        { nameDetailLesson: "Redirect - Forward", duration: 2 },
        {
          nameDetailLesson: "Java Servlet và JDBC làm việc với cơ sở dữ liệu",
          duration: 2,
        },
        { nameDetailLesson: "Java Servlet Cookies", duration: 2 },
        { nameDetailLesson: "Login sử dụng Servlet Cookie", duration: 2 },
        { nameDetailLesson: "Java Servlet Session", duration: 2 },
        {
          nameDetailLesson: "Login và Logout sử dụng Servlet Session",
          duration: 2,
        },
        { nameDetailLesson: "Java Servlet Filter", duration: 2 },
        {
          nameDetailLesson: "Java Servlet Filter dùng XML config",
          duration: 2,
        },
        {
          nameDetailLesson: "Java Servlet Filter sử dụng Java config",
          duration: 2,
        },
        {
          nameDetailLesson: "Java Servlet Filter tính số lượt truy cập website",
          duration: 2,
        },
        { nameDetailLesson: "Java Servlet FilterConfig", duration: 2 },
        { nameDetailLesson: "Phân biệt JSP & Servlet", duration: 2 },
        { nameDetailLesson: "Thực hành về JSP", duration: 2 },
        { nameDetailLesson: "JSP - HttpServletRequest", duration: 2 },
        { nameDetailLesson: "JSP - HttpServletResponse", duration: 2 },
        { nameDetailLesson: "JSP Form", duration: 2 },
        { nameDetailLesson: "JSP và JDBC", duration: 2 },
        { nameDetailLesson: "JSP Filter", duration: 2 },
        { nameDetailLesson: "JSP Session", duration: 2 },
        { nameDetailLesson: "JSP Cookies", duration: 2 },
        { nameDetailLesson: "JSP Upload File", duration: 2 },
        { nameDetailLesson: "JSP - Expression Language (EL)", duration: 2 },
        { nameDetailLesson: "JSP Tag Library (JSTL)", duration: 2 },
        { nameDetailLesson: "JSP - Tự tạo JSTL", duration: 2 },
        { nameDetailLesson: "Hướng dẫn đồ án", duration: 2 },
        { nameDetailLesson: "Hướng dẫn sinh viên chọn đề tài", duration: 2 },
        { nameDetailLesson: "Spring framework là gì ?", duration: 2 },
        { nameDetailLesson: "Springboot là gì", duration: 2 },
        { nameDetailLesson: "Tạo project bằng IntelliJ", duration: 2 },
        {
          nameDetailLesson:
            "Tìm hiểu các thành phần cấu trúc các thành phần trong 1 project Springboot",
          duration: 2,
        },
        {
          nameDetailLesson: "Tìm hiểu công cụ quản lý thư viện maven",
          duration: 2,
        },
        { nameDetailLesson: "Rest API là gì?", duration: 2 },
        { nameDetailLesson: "Postman là gì?", duration: 2 },
        {
          nameDetailLesson:
            "Bài tập: Xây dựng 1 số phương thức giao tiếp bằng @RestController",
          duration: 2,
        },
        { nameDetailLesson: "GET endpoint", duration: 2 },
        { nameDetailLesson: "POST endpoint", duration: 2 },
        { nameDetailLesson: "PUT endpoint", duration: 2 },
        { nameDetailLesson: "DELETE endpoint", duration: 2 },
        {
          nameDetailLesson: "Làm quen và thực hành JSON thực hành xử lý Json",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Bài tập: Xây dựng hệ thống quản lý thư viện buổi 14 bằng Rest API và JDBC",
          duration: 2,
        },
        {
          nameDetailLesson: "Giải thích các thành phần của 1 RestController",
          duration: 2,
        },
        { nameDetailLesson: "Consumer và producer", duration: 2 },
        {
          nameDetailLesson: "Hướng dẫn build dự án vai trò Tomcat",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Làm quen mô hình MVC và trả các Response phân biệt giữa DTO và Entity",
          duration: 2,
        },
        { nameDetailLesson: "Hướng dẫn tổ chức trang SpringBoot", duration: 2 },
        { nameDetailLesson: "Tổng quan về ViewResolve Thymeleaf", duration: 2 },
        {
          nameDetailLesson: "Phân biệt @Controller và @RestController",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Bài tập: Xây dựng chương trình quản lý thư viện từ trên bảng cách sử dụng giao diện HTML lấy dữ liệu từ màn hình",
          duration: 2,
        },
        { nameDetailLesson: "Làm quen thymeleaf", duration: 2 },
        { nameDetailLesson: "Submit form dẫn trình", duration: 2 },
        {
          nameDetailLesson: "Validation validtion form sử dụng SpringBoot",
          duration: 2,
        },
        {
          nameDetailLesson: "Hướng dẫn sử dụng hiệu quả redirect forward....",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Bài tập: Tiếp tục xây dựng và hoàn chỉnh dự án thêm submit form cho các màn hình thêm sửa",
          duration: 2,
        },
        { nameDetailLesson: "Thực hành bootstrap", duration: 2 },
        { nameDetailLesson: "Thực hành Jquery", duration: 2 },
        {
          nameDetailLesson:
            "Sử dụng javascript làm bài tập hiển thị ảnh khi upload",
          duration: 2,
        },
        {
          nameDetailLesson: "Hướng dẫn validation sử dụng jquery",
          duration: 2,
        },
        { nameDetailLesson: "Hướng dẫn sử dụng ajax gọi API", duration: 2 },
        {
          nameDetailLesson:
            "Hướng dẫn sử dụng fragment Thymeleaf để quản lý header footer navigation....",
          duration: 2,
        },
        { nameDetailLesson: "Resource static trong Springboot", duration: 2 },
        { nameDetailLesson: "Đa ngôn ngữ Springboot", duration: 2 },
        { nameDetailLesson: "Giải thích sâu về cơ chế Spring", duration: 2 },
        { nameDetailLesson: "Annotation Spring Annotations", duration: 2 },
        { nameDetailLesson: "Dependency inversion in Spring", duration: 2 },
        {
          nameDetailLesson:
            "IOC Container Application Context and Bean Factory",
          duration: 2,
        },
        { nameDetailLesson: "Nguyên lý SOLID", duration: 2 },
        { nameDetailLesson: "Bài tập bài test cuối module", duration: 2 },
        {
          nameDetailLesson: "Chấm điểm đồ án đợt 1 với các tiêu chí",
          duration: 2,
        },
        { nameDetailLesson: "Chấm điểm danh sách các chức năng", duration: 2 },
        { nameDetailLesson: "Sơ đồ USER-CASE", duration: 2 },
        {
          nameDetailLesson:
            "Hoàn thiện tối thiểu 30% màn hình có chức năng thêm sửa xóa danh sách",
          duration: 2,
        },
        {
          nameDetailLesson: "Tìm hiểu ORM - Object Relational Mapping",
          duration: 2,
        },
        { nameDetailLesson: "JPA - Java Persistance API", duration: 2 },
        { nameDetailLesson: "Tìm hiểu về Hibernate", duration: 2 },
        { nameDetailLesson: "Cách cấu hình dự án", duration: 2 },
        {
          nameDetailLesson:
            "Bài tập: Tiếp tục bài tập buổi trước với yêu cầu chuyển từ JDBC sang ORM",
          duration: 2,
        },
        { nameDetailLesson: "Spring Data JPA", duration: 2 },
        { nameDetailLesson: "Cách cấu hình dự án", duration: 2 },
        {
          nameDetailLesson: "Cách tạo Entity Repository trong SpringData JPA",
          duration: 2,
        },
        { nameDetailLesson: "Sử dụng các hàm mặc định", duration: 2 },
        {
          nameDetailLesson:
            "Bài tập: Tiếp tục bài tập buổi trước với yêu cầu chuyển từ JDBC sang ORM",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Spring data JPA query method query creation Property Expressions",
          duration: 2,
        },
        { nameDetailLesson: "Sử dụng NameQuery", duration: 2 },
        {
          nameDetailLesson:
            "Hướng dẫn custom Query và cách query các câu truy vấn phức tạp",
          duration: 2,
        },
        { nameDetailLesson: "Hướng dẫn tìm kiếm phân trang", duration: 2 },
        { nameDetailLesson: "Transaction trong SpingDataJPA", duration: 2 },
        { nameDetailLesson: "Sử dụng query OneToMany ManyToMany", duration: 2 },
        {
          nameDetailLesson: "Đối chiếu từ SpringData JPA sang Hibernate",
          duration: 2,
        },
        { nameDetailLesson: "Các thông thái object", duration: 2 },
        { nameDetailLesson: "Vòng đời các trạng thái", duration: 2 },
        { nameDetailLesson: "Session Factory và EntityManager", duration: 2 },
        {
          nameDetailLesson: "Chấm điểm đồ án đợt 2 với các tiêu chí",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Hoàn thiện tối thiểu 70% màn hình có chức năng thêm sửa xóa danh sách sử dụng ORM",
          duration: 2,
        },
        { nameDetailLesson: "Tổng quan về Springsecurity", duration: 2 },
        { nameDetailLesson: "Cơ chế filter trong Java servlet", duration: 2 },
        {
          nameDetailLesson:
            "Hướng dẫn cấu hình formlogin sử dụng spring security",
          duration: 2,
        },
        { nameDetailLesson: "PasswordEncoder", duration: 2 },
        { nameDetailLesson: "UserDetailService", duration: 2 },
        { nameDetailLesson: "SpringEmail", duration: 2 },
        {
          nameDetailLesson: "Thực hành: Tạo mới User xác thực user qua email",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Hướng dẫn lấy thông tin người dùng trên backend và thymeleaf",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Cơ chế lưu thông tin user phiên và cấu hình phiên Phân biệt SESSION và COOKIE",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Hướng dẫn phân quyền USER sử dụng config và annotation",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Bài tập: Phân quyền cho ứng dụng quản lý thư viện chức năng quên mật khẩu và thay đổi mật khẩu",
          duration: 2,
        },
        {
          nameDetailLesson: "Hướng dẫn tạo trang chủ sử dụng template",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Hướng dẫn Handler trong trường hợp đăng nhập thành công hoặc lỗi.",
          duration: 2,
        },
        {
          nameDetailLesson:
            "@ControllerAdvise bắt các Exception khi request lỗi",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Bài tập: Tiếp tục thực các chức năng trang chủ của phần mềm quản lý thư viện",
          duration: 2,
        },
        { nameDetailLesson: "Spring Security API", duration: 2 },
        {
          nameDetailLesson:
            "Hướng dẫn cài đặt và các thành phần trong Spring JWT",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Hướng dẫn: Viết giao diện sử dụng javascript JWT gọi API qua backend",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Hướng dẫn sử dụng anotation @Schedule thực hiện các Job chạy ngầm",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Hướng dẫn báo cáo thống kê (giao diện biểu đồ và backend)",
          duration: 2,
        },
        {
          nameDetailLesson:
            "Hướng dẫn xuất báo cáo sử dụng thư viện org.apache.poi",
          duration: 2,
        },
        {
          nameDetailLesson: "các nội dung websocket cache thread log4j2....",
          duration: 2,
        },
        { nameDetailLesson: "Unit test sử dụng JUnit", duration: 2 },
        { nameDetailLesson: "Cách viết Unittest cho các layer", duration: 2 },
        {
          nameDetailLesson:
            "Review đồ án của học viên hướng dẫn giải đáp thắc mắc",
          duration: 2,
        },
      ],
    },
    {
      nameLesson: "Module 6: Web Master và Deployment",
      duration: 4,
      detailLessons: [
        {
          nameDetailLesson: "Làm quen về webserver (Apache nginx)",
          duration: 2,
        },
        {
          nameDetailLesson: "Làm quen container (Tomcat) vòng đời servlet",
          duration: 2,
        },
        { nameDetailLesson: "Deploy hệ thống", duration: 2 },
        { nameDetailLesson: "LoadBalancer RevertProxy...", duration: 2 },
        { nameDetailLesson: "Hướng dẫn sử dụng docker container", duration: 2 },
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
        { nameDetailLesson: "Các mô hình phát triển phần mềm", duration: 2 },
        { nameDetailLesson: "Giới thiệu về Agile/Scrum", duration: 2 },
        { nameDetailLesson: "Tìm hiểu về Jira và Trello", duration: 2 },
        {
          nameDetailLesson: "Áp dụng Agile/Scrum Jira vào 1 dự án thực tế",
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
        { nameDetailLesson: "Cách estimate một task theo chuẩn", duration: 2 },
        { nameDetailLesson: "Phỏng vấn thử ứng viên", duration: 2 },
      ],
    },
  ],
};

export default courseSpringReact;
