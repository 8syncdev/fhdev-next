import { ConstCourseType } from "../type";
import { urlImageCourse } from "../../firebase";


const courseNodeReact: ConstCourseType = {
  rating: 4.8,
  originalPrice: 20000000,
  price: 15000000,
  duration: 195,
  language: ["typescript", "javascript"],
  slug: "lap-trinh-du-an-thuc-chien-nodejs-mern",
  imgSrc: urlImageCourse['react-ts'],
  category: "web",
  nameCourse: "LẬP TRÌNH DỰ ÁN THỰC CHIẾN TECH-STACK NODEJS & MERN",
  description:
    "Khóa học lập trình NodeJS và MERN từ cơ bản đến nâng cao, trang bị cho bạn các kỹ năng thực chiến.",
  tags: [
    "NodeJS",
    "MERN",
    "MongoDB",
    "Express",
    "React",
    "Node",
    "Frontend",
    "Backend",
    "Agile",
  ],
  newest: true,
  popular: true,
  trending: true,
  content: {
    intro:
      "Khóa học lập trình NodeJS và MERN từ cơ bản đến nâng cao, trang bị cho bạn các kỹ năng thực chiến.",
    purposes: [
      "Nắm vững kiến thức cơ bản và nâng cao về lập trình NodeJS và các framework phổ biến trong MERN stack.",
      "Phát triển kỹ năng lập trình full-stack với MongoDB, Express, React, và NodeJS.",
      "Hiểu và áp dụng quy trình phát triển phần mềm Agile/Scrum trong dự án thực tế.",
      "Xây dựng các ứng dụng web hoàn chỉnh và triển khai chúng lên các server.",
    ],
    results: [
      "Có khả năng phát triển ứng dụng web full-stack với NodeJS và ReactJS.",
      "Hiểu và áp dụng các kỹ thuật tối ưu hóa và bảo mật trong phát triển web.",
      "Phát triển kỹ năng làm việc nhóm và quản lý dự án với phương pháp Agile/Scrum.",
      "Tự tin triển khai và quản lý các dự án lập trình thực tế.",
    ],
    orientedUsers: [
      "Lập trình viên muốn nâng cao kỹ năng và kiến thức về NodeJS và các framework liên quan.",
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
        {
          nameDetailLesson: "Tổng quan giới thiệu về lập trình web",
          duration: 1,
        },
        { nameDetailLesson: "Giới thiệu về khóa học lộ trình", duration: 1 },
        {
          nameDetailLesson:
            "Giới thiệu git github và lệnh cơ bản để thao tác với git",
          duration: 1,
        },
        {
          nameDetailLesson: "Giới thiệu và làm quen một số thẻ trong HTML",
          duration: 1,
        },
        { nameDetailLesson: "HTML tags Basic CSS", duration: 1 },
        {
          nameDetailLesson:
            "Giới thiệu về HTML các thẻ hay sử dụng trong thực tế",
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
          nameDetailLesson:
            "Giới thiệu các thuộc tính cơ bản hay dùng trong CSS",
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
            "Giới thiệu về thuộc tính display và để bố cục website thêm linh hoạt và đẹp mắt",
          duration: 1,
        },
        {
          nameDetailLesson:
            "Phân biệt được các giá trị inline block inline-block",
          duration: 1,
        },
        {
          nameDetailLesson:
            "Giới thiệu về Responsive trong CSS tầm quan trọng và tại sao phải biết cách chỉnh responsive",
          duration: 1,
        },
        {
          nameDetailLesson:
            "Làm thế nào để mọi website dễ sử dụng được các thiết bị khác nhau đặc biệt là các website có nhiều layout hay gặp: card product ...",
          duration: 1,
        },
        {
          nameDetailLesson:
            "Sử dụng các thiết kế tính ứng về dynamic layout một trang web",
          duration: 1,
        },
        { nameDetailLesson: "Deploy và làm tiếp bài thực hành", duration: 1 },
        { nameDetailLesson: "Hướng dẫn deploy lên github", duration: 1 },
        { nameDetailLesson: "Làm bài kiểm tra cuối module", duration: 1 },
      ],
    },
    {
      nameLesson: "Module 2: FE Intermediate",
      duration: 18,
      detailLessons: [
        { nameDetailLesson: "Cách khai tạo biến trong JS", duration: 1 },
        { nameDetailLesson: "Datatypes", duration: 1 },
        { nameDetailLesson: "Toán tử trong JS", duration: 1 },
        { nameDetailLesson: "Comment trong JS", duration: 1 },
        { nameDetailLesson: "Giới thiệu về scope trong JS", duration: 1 },
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
        { nameDetailLesson: "Giới thiệu về toán tử 3 ngôi", duration: 1 },
        { nameDetailLesson: "Array là gì?", duration: 1 },
        { nameDetailLesson: "Cú pháp khai báo", duration: 1 },
        { nameDetailLesson: "Các thao tác trên array (CRUD)", duration: 1 },
        { nameDetailLesson: "Duyệt mảng", duration: 1 },
        {
          nameDetailLesson:
            "Tập trung vào bài tập thực hành để học viên quen hơn",
          duration: 1,
        },
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
        { nameDetailLesson: "DOM và Event trong JS", duration: 1 },
        { nameDetailLesson: "Tìm hiểu về Event loop trong JS", duration: 1 },
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
          nameDetailLesson:
            "Giới thiệu thêm các kiến thức bổ trợ (location history trên browser)",
          duration: 1,
        },
        { nameDetailLesson: "Debug trong JS", duration: 1 },
        {
          nameDetailLesson:
            "Áp dụng các kiến thức HTML CSS và JS đã học để làm 1 project quản lý sinh viên với các chức năng",
          duration: 1,
        },
        { nameDetailLesson: "+C: Thêm mới sinh viên", duration: 1 },
        {
          nameDetailLesson: "+R: In ra toàn bộ thông tin sinh viên đang có",
          duration: 1,
        },
        { nameDetailLesson: "+U: Update thông tin sinh viên", duration: 1 },
        { nameDetailLesson: "+D: Xóa thông tin sinh viên", duration: 1 },
        { nameDetailLesson: "+S: Tìm kiếm thông tin sinh viên", duration: 1 },
        {
          nameDetailLesson:
            "(Dùng giao diện có sử dụng bootstrap để tiết kiệm thời gian)",
          duration: 1,
        },
        {
          nameDetailLesson:
            "(Nếu còn thời gian có thể làm thêm chức năng sắp xếp)",
          duration: 1,
        },
        {
          nameDetailLesson: "Giới thiệu API là gì cách sử dụng API",
          duration: 1,
        },
        {
          nameDetailLesson: "Sử dụng mock api để lưu trữ thông tin",
          duration: 1,
        },
        { nameDetailLesson: "Deploy project làm bài test", duration: 1 },
      ],
    },
    {
      nameLesson: "Module 3: ECMA features & TypeScript",
      duration: 6,
      detailLessons: [
        {
          nameDetailLesson: "Tìm hiểu và thực hành các chức năng trong ES6",
          duration: 1,
        },
        {
          nameDetailLesson:
            "Một số tính năng trong các phiên bản ECMAScript khác (nullish operator optional chaining)",
          duration: 1,
        },
        {
          nameDetailLesson:
            "Tìm hiểu về các kiểu dữ liệu cơ bản trong TypeScript",
          duration: 1,
        },
        {
          nameDetailLesson: "Kiểu dữ liệu tĩnh (Type Annotations)",
          duration: 1,
        },
        { nameDetailLesson: "Interfaces và Type Aliases", duration: 1 },
        { nameDetailLesson: "Generics", duration: 1 },
        {
          nameDetailLesson:
            "Tìm hiểu về cách sử dụng modules và namespaces để tổ chức mã và giải quyết vấn đề xung đột tên",
          duration: 1,
        },
        {
          nameDetailLesson:
            "Hiểu về cách sử dụng decorator để thêm metadata vào các lớp và phương thức trong TypeScript",
          duration: 1,
        },
        {
          nameDetailLesson:
            "Tìm hiểu về các loại kiểu dữ liệu phức tạp như union types intersection types conditional types mapped types và các kỹ thuật tiên tiến khác",
          duration: 1,
        },
        {
          nameDetailLesson:
            "Sử dụng TypeScript Compiler (tsc) để biên dịch mã TypeScript thành JavaScript",
          duration: 1,
        },
      ],
    },
    {
      nameLesson: "Module 4: ReactJS",
      duration: 24,
      detailLessons: [
        { nameDetailLesson: "Tổng quan về ReactJS", duration: 1 },
        { nameDetailLesson: "Xây dựng project ReactJS", duration: 1 },
        {
          nameDetailLesson: "Cấu trúc folder project (tạo bằng toolchain CRA)",
          duration: 1,
        },
        {
          nameDetailLesson: "Tìm hiểu về JSX so sánh JSX và HTML",
          duration: 1,
        },
        { nameDetailLesson: "Component là gì?", duration: 1 },
        {
          nameDetailLesson: "Thực hành tạo các Component hay được dùng",
          duration: 1,
        },
        { nameDetailLesson: "Props cơ bản", duration: 1 },
        {
          nameDetailLesson:
            "Cách truyền dữ liệu từ component cha xuống component con",
          duration: 1,
        },
        {
          nameDetailLesson: "Validate props (sử dụng props type)",
          duration: 1,
        },
        { nameDetailLesson: "Default props", duration: 1 },
        { nameDetailLesson: "List rendering", duration: 1 },
        { nameDetailLesson: "Rendering có điều kiện", duration: 1 },
        { nameDetailLesson: "Event trong ReactJS", duration: 1 },
        { nameDetailLesson: "Cách khai báo sử dụng state", duration: 1 },
        { nameDetailLesson: "So sánh state và props", duration: 1 },
        {
          nameDetailLesson: "Hướng dẫn cài đặt và sử dụng thư viện routing",
          duration: 1,
        },
        {
          nameDetailLesson: "Setup routing cho project thực hành",
          duration: 1,
        },
        {
          nameDetailLesson: "Hướng dẫn setup routing cho project cuối khóa",
          duration: 1,
        },
        {
          nameDetailLesson: "Sử dụng formik và yup để validate form",
          duration: 1,
        },
        {
          nameDetailLesson:
            "Giới thiệu thư viện Ant Design và demo 1 số component có trong Ant Design",
          duration: 1,
        },
        {
          nameDetailLesson:
            "Giới thiệu thư viện Reactstrap và demo 1 số component có trong Reactstrap",
          duration: 1,
        },
        {
          nameDetailLesson: "Thực hành làm form đăng nhập đăng ký",
          duration: 1,
        },
        { nameDetailLesson: "Tìm hiểu về side effect", duration: 1 },
        {
          nameDetailLesson: "Giới thiệu về life cycle trong react",
          duration: 1,
        },
        {
          nameDetailLesson:
            "Sử dụng useEffect (sự khác nhau giữa các dependency khi truyền vào useEffect)",
          duration: 1,
        },
        {
          nameDetailLesson:
            "Tìm hiểu công dụng và cách sử dụng useMemo useCallback và react memo",
          duration: 1,
        },
        {
          nameDetailLesson: "Tìm hiểu công dụng và cách sử dụng useRef",
          duration: 1,
        },
        {
          nameDetailLesson:
            "So sánh biến thường biến được tạo từ useRef và biến được tạo từ useState",
          duration: 1,
        },
        {
          nameDetailLesson: "Sử dụng useContext để lưu trữ và sử dụng dữ liệu",
          duration: 1,
        },
        { nameDetailLesson: "Giới thiệu các hook khác", duration: 1 },
        { nameDetailLesson: "Hướng dẫn tạo 1 custom hook", duration: 1 },
        { nameDetailLesson: "Hướng dẫn cài đặt và sử dụng Redux", duration: 1 },
        { nameDetailLesson: "Thực hành làm CRUD với redux", duration: 1 },
        {
          nameDetailLesson: "Tìm hiểu và hướng dẫn cài đặt sử dụng react query",
          duration: 1,
        },
        { nameDetailLesson: "Thực hành làm project blog", duration: 2 },
        {
          nameDetailLesson: "Các chức năng có trong project blog",
          duration: 1,
        },
        { nameDetailLesson: "Quản lý bài viết", duration: 1 },
        { nameDetailLesson: "Bình luận và phản hồi", duration: 1 },
        { nameDetailLesson: "Tìm kiếm và lọc", duration: 1 },
        { nameDetailLesson: "Thống kê và báo cáo", duration: 1 },
        { nameDetailLesson: "Bảng tin và thông báo", duration: 1 },
        {
          nameDetailLesson:
            "Hỗ trợ giải đáp và hướng dẫn bạn làm các nội dung liên quan đến frontend trong project cuối khóa",
          duration: 1,
        },
        {
          nameDetailLesson: "Test cuối module + ES6 và TypeScript",
          duration: 1,
        },
      ],
    },
    {
      nameLesson: "Module 5: CSDL và PTTKHT",
      duration: 18,
      detailLessons: [
        { nameDetailLesson: "Hiểu về NoSQL và MongoDB", duration: 1 },
        { nameDetailLesson: "Hướng dẫn tạo Database tạo bảng", duration: 1 },
        {
          nameDetailLesson: "Tìm hiểu và cấu trúc dữ liệu trong MongoDB",
          duration: 1,
        },
        {
          nameDetailLesson:
            "Thực hành và thao tác với các câu lệnh hay được sử dụng trong MongoDB: insert find update delete",
          duration: 1,
        },
        {
          nameDetailLesson: "Nắm chắc về indexing và tối ưu performance",
          duration: 1,
        },
        { nameDetailLesson: "Bảo mật trong MongoDB", duration: 1 },
        {
          nameDetailLesson: "Các bước phân tích thiết kế CSDL Chuẩn",
          duration: 1,
        },
        {
          nameDetailLesson: "Làm bài Test thực hành thiết kế cơ sở dữ liệu",
          duration: 1,
        },
        {
          nameDetailLesson: "Thiết kế database cho dự án MERN stack",
          duration: 1,
        },
        {
          nameDetailLesson:
            "Hỗ trợ support học viên tạo database cho project cuối khóa",
          duration: 1,
        },
        { nameDetailLesson: "Phân chia chức năng giúp học viên", duration: 1 },
        { nameDetailLesson: "Giải đáp các câu hỏi", duration: 1 },
      ],
    },
    {
      nameLesson: "Module 6: NodeJS Introduction & Express",
      duration: 18,
      detailLessons: [
        { nameDetailLesson: "Giới thiệu mô hình client-server", duration: 1 },
        { nameDetailLesson: "NodeJS là gì?", duration: 1 },
        { nameDetailLesson: "Tạo ứng dụng NodeJS", duration: 1 },
        {
          nameDetailLesson: "Hướng dẫn cài đặt và sử dụng postman",
          duration: 1,
        },
        { nameDetailLesson: "Giới thiệu express", duration: 1 },
        {
          nameDetailLesson: "Xây dựng ứng dụng web cơ bản với express",
          duration: 1,
        },
        {
          nameDetailLesson:
            "Nắm vững các thành phần cơ bản trong một ứng dụng backend: Route Controller Service View",
          duration: 1,
        },
        { nameDetailLesson: "Vòng đời của request response", duration: 1 },
        {
          nameDetailLesson: "Thực hành phân tích và xử lý các request response",
          duration: 1,
        },
        {
          nameDetailLesson:
            "Tìm hiểu và thực hành về các method cơ bản: GET POST PUT DELETE PATCH",
          duration: 1,
        },
        {
          nameDetailLesson: "Sử dụng mongoose để connect MongoDB với Express",
          duration: 1,
        },
        {
          nameDetailLesson: "Sử dụng prisma để connect MongoDB với Express",
          duration: 1,
        },
        {
          nameDetailLesson: "Thực hành connect database với backend",
          duration: 1,
        },
        { nameDetailLesson: "Giới thiệu về middleware", duration: 1 },
        {
          nameDetailLesson: "Nắm chắc về cách hoạt động của middleware",
          duration: 1,
        },
        {
          nameDetailLesson:
            "Tạo và thực hiện một số chức năng sử dụng middleware",
          duration: 1,
        },
        {
          nameDetailLesson: "Authentication & Authorization là gì?",
          duration: 1,
        },
        { nameDetailLesson: "Tìm hiểu và hướng dẫn sử dụng JWT", duration: 1 },
        {
          nameDetailLesson:
            "Thực hành làm chức năng đăng ký đăng nhập logout sử dụng JWT",
          duration: 1,
        },
        { nameDetailLesson: "Hiểu về cách hoạt động của OAuth", duration: 1 },
        {
          nameDetailLesson: "Thực hành làm chức năng login bằng Google",
          duration: 1,
        },
        { nameDetailLesson: "Xử lý upload read file", duration: 1 },
        { nameDetailLesson: "Thực hành làm chức năng upload ảnh", duration: 1 },
        {
          nameDetailLesson:
            "Giới thiệu các bài toán liên quan đến vấn đề real time",
          duration: 1,
        },
        {
          nameDetailLesson: "Hướng dẫn cài đặt và sử dụng Socket IO",
          duration: 1,
        },
        {
          nameDetailLesson:
            "Giới thiệu các thư viện hay được sử dụng kèm với Express",
          duration: 1,
        },
        { nameDetailLesson: "Hướng dẫn deploy 1 project", duration: 1 },
        {
          nameDetailLesson: "Hướng dẫn deploy backend NodeJS lên server",
          duration: 1,
        },
        { nameDetailLesson: "Test cuối module + thực hành", duration: 1 },
      ],
    },
    {
      nameLesson: "Module 7: Build MERN stack application",
      duration: 24,
      detailLessons: [
        {
          nameDetailLesson: "Hướng dẫn xây dựng 1 ứng dụng MERN.",
          duration: 1,
        },
        {
          nameDetailLesson:
            "Quản lý người dùng: Đăng ký và đăng nhập cho học sinh giáo viên và quản trị viên.",
          duration: 1,
        },
        {
          nameDetailLesson: "Quản lý thông tin cá nhân lịch sử thi và điểm số.",
          duration: 1,
        },
        {
          nameDetailLesson:
            "Quản lý kỳ thi: Tạo và quản lý thông tin của các kỳ thi.",
          duration: 1,
        },
        {
          nameDetailLesson:
            "Thiết lập các tham số như thời gian ngày thi số lượng câu hỏi và mức độ khó.",
          duration: 1,
        },
        {
          nameDetailLesson:
            "Giao diện thi trực tuyến: Giao diện thi đa dạng và hỗ trợ cho nhiều loại câu hỏi như trắc nghiệm điện tử kéo và thả và câu hỏi luận.",
          duration: 1,
        },
        {
          nameDetailLesson:
            "Hỗ trợ hình ảnh âm thanh và video để làm cho trải nghiệm thi đa dạng hóa.",
          duration: 1,
        },
        {
          nameDetailLesson:
            "Hệ thống chấm điểm tự động: Tích hợp công nghệ chấm điểm tự động cho các loại câu hỏi trắc nghiệm và điện tử.",
          duration: 1,
        },
        {
          nameDetailLesson:
            "Cung cấp kết quả thi tức thì cho thí sinh và giáo viên.",
          duration: 1,
        },
        {
          nameDetailLesson:
            "Giám sát trực tuyến và bảo mật: Hệ thống giám sát trực tuyến để đảm bảo tính trung thực của kỳ thi.",
          duration: 1,
        },
        {
          nameDetailLesson:
            "Mô hình bảo mật chặt chẽ để bảo vệ dữ liệu thí sinh và ngăn chặn gian lận.",
          duration: 1,
        },
        {
          nameDetailLesson:
            "Tương tác thí sinh - giáo viên: Hệ thống tương tác bổ sung về kết quả và thông tin kỳ thi.",
          duration: 1,
        },
        {
          nameDetailLesson:
            "Hỗ trợ thí sinh gửi phản hồi hoặc kiến nghị về kết quả.",
          duration: 1,
        },
        {
          nameDetailLesson:
            "Thống kê và báo cáo: Tạo báo cáo chi tiết về kết quả thi và hiệu suất của thí sinh.",
          duration: 1,
        },
        {
          nameDetailLesson:
            "Hỗ trợ quản lý viên trong việc đánh giá và cải thiện quy trình tổ chức thi.",
          duration: 1,
        },
        {
          nameDetailLesson:
            "Hỗ trợ kỹ thuật và trợ giúp: Hệ thống hỗ trợ kỹ thuật và trợ giúp trực tuyến cho thí sinh và giáo viên.",
          duration: 1,
        },
        { nameDetailLesson: "Tích hợp thanh toán.", duration: 1 },
      ],
    },
    {
      nameLesson: "Module 8: Web Master + OS",
      duration: 4,
      detailLessons: [
        {
          nameDetailLesson: "Hướng dẫn cài đặt và sử dụng Docker.",
          duration: 1,
        },
        {
          nameDetailLesson:
            "Tìm hiểu về các khái niệm từ cơ bản cho đến nâng cao trong Docker:",
          duration: 1,
        },
        { nameDetailLesson: "Container", duration: 1 },
        { nameDetailLesson: "Docker Image", duration: 1 },
        { nameDetailLesson: "Docker Container Lifecycle", duration: 1 },
        { nameDetailLesson: "Docker Hub", duration: 1 },
        { nameDetailLesson: "Docker Compose", duration: 1 },
        { nameDetailLesson: "Docker Network", duration: 1 },
        { nameDetailLesson: "Docker Volume", duration: 1 },
        { nameDetailLesson: "Docker Registry", duration: 1 },
        {
          nameDetailLesson: "Docker CLI (Command Line Interface)",
          duration: 1,
        },
        { nameDetailLesson: "Dockerfile Instructions", duration: 1 },
        { nameDetailLesson: "Docker Swarm (Optional)", duration: 1 },
        { nameDetailLesson: "Docker Security", duration: 1 },
      ],
    },
    {
      nameLesson: "Module 9: Agile/Scrum (Software Development Life Cycle)",
      duration: 6,
      detailLessons: [
        {
          nameDetailLesson: "Tìm hiểu về các Quy trình phát triển phần mềm",
          duration: 1,
        },
        { nameDetailLesson: "Các mô hình phát triển phần mềm", duration: 1 },
        { nameDetailLesson: "Giới thiệu về Agile/Scrum", duration: 1 },
        { nameDetailLesson: "Tìm hiểu về Jira và Trello", duration: 1 },
        {
          nameDetailLesson: "Áp dụng Agile/Scrum Jira vào 1 dự án thực tế",
          duration: 1,
        },
        {
          nameDetailLesson: "Software Development Life Cycle (SDLC)",
          duration: 1,
        },
        {
          nameDetailLesson: "Các vấn đề trong quản lý một dự án thực tế",
          duration: 1,
        },
        { nameDetailLesson: "Cách estimate một task theo chuẩn", duration: 1 },
        { nameDetailLesson: "Phỏng vấn thử ứng viên", duration: 1 },
      ],
    },
  ],
};

export default courseNodeReact;
