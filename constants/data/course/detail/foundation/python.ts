import { CourseDetailProps } from "@/server/course.type";

export const pythonDetail: CourseDetailProps['content']  = {
    "name": "Làm Chủ Python Hoàn Toàn",
    "img_url": "https://firebasestorage.googleapis.com/v0/b/nextjs-djninex-store.appspot.com/o/image-upload%2Fpython.webp?alt=media&token=4da2d9fb-d7ae-42c7-8ee2-bc5805a4b1cd",
    "description": "Tất cả những gì bạn cần để lập trình bằng Python trong một khóa học (bao gồm 3 dự án thực tế)",
    "price": 350000,
    "content_json": {
        "about": {
            "desc": "Khóa học toàn diện giúp bạn làm chủ Python từ cơ bản đến nâng cao, áp dụng vào dự án thực tế.",
            "title": "Làm Chủ Python Hoàn Toàn",
            "points": [
                "Từ cơ bản đến nâng cao",
                "API, Django, học máy",
                "Tự động hóa, xử lý file, xây dựng công cụ",
                "3 dự án thực tế",
                "Tăng tự tin ứng dụng Python",
                "Phù hợp mọi trình độ"
            ],
            "journey": [
                "Nền tảng Python",
                "API",
                "Django",
                "Học máy",
                "Tự động hóa",
                "Xử lý file",
                "CLI",
                "Thu thập dữ liệu web"
            ],
            "audience": "Từ người mới đến người muốn nâng cao kỹ năng Python",
            "projects": [
                {
                    "desc": "Tự động hóa tác vụ nhàm chán",
                    "name": "Tự động hóa"
                },
                {
                    "desc": "Ứng dụng học máy thực tế",
                    "name": "Học máy"
                },
                {
                    "desc": "Xây dựng web với Django",
                    "name": "Web"
                }
            ]
        },
        "skills": {
            "list": [
                "Lập trình Python thành thạo",
                "Học máy và khoa học dữ liệu",
                "Web với Django",
                "Tự động hóa",
                "CLI",
                "Thu thập dữ liệu web",
                "Xử lý file đa dạng",
                "Gửi email và SMS",
                "Selenium",
                "API",
                "OOP",
                "Sử dụng và tạo package"
            ],
            "title": "Kỹ năng đạt được"
        },
        "for_who": {
            "list": [
                "Người mới học lập trình",
                "Sinh viên muốn hiểu sâu về Python",
                "Người muốn tự động hóa công việc",
                "Người theo đuổi AI, data science, web dev",
                "Lập trình viên Python muốn nâng cao"
            ],
            "title": "Đối tượng phù hợp"
        },
        "overview": {
            "level": "Từ Cơ Bản đến Chuyên Nghiệp",
            "features": [
                {
                    "icon": "bar-chart-line",
                    "name": "Từ Cơ Bản đến Chuyên Nghiệp"
                },
                {
                    "icon": "play-circle-fill",
                    "name": "12 giờ video HD"
                },
                {
                    "icon": "list-check",
                    "name": "200 bài học"
                },
                {
                    "icon": "cloud-arrow-down",
                    "name": "Nội dung có thể tải về"
                },
                {
                    "icon": "code-square",
                    "name": "Bài tập thực hành"
                },
                {
                    "icon": "infinity",
                    "name": "Truy cập trọn đời"
                },
                {
                    "icon": "clock-history",
                    "name": "Học theo tốc độ của riêng bạn"
                }
            ],
            "lesson_count": 200,
            "video_content": "12 giờ video HD"
        },
        "highlights": {
            "title": "Điểm nổi bật",
            "points": [
                "Thực tế",
                "Tập trung ứng dụng",
                "Kỹ năng cần thiết cho lập trình viên Python hiện đại"
            ]
        },
        "beginner_friendly": {
            "desc": "Không cần kiến thức nền",
            "title": "Thân thiện với người mới",
            "details": [
                "Bắt đầu từ con số 0",
                "Lộ trình từ mới đến chuyên gia",
                "Nhiều bài tập thực hành"
            ],
            "key_points": [
                "Phù hợp người mới",
                "Tiếp cận dễ hiểu",
                "Chú trọng thực hành"
            ]
        }
    },
    "duration": 80
}

export const roadmapPythonDetail = [
  {
    id: 1,
    name: "Giới thiệu về Python",
    description: "Tổng quan về ngôn ngữ lập trình Python",
    lessons: {
      1: [
        { id: 1, name: "Lịch sử, các phiên bản và cài đặt", duration: 2 },
        { id: 2, name: "Giới thiệu về Python và ứng dụng", duration: 2 },
        { id: 3, name: "Cú pháp cơ bản và kiểu dữ liệu", duration: 2 },
        { id: 4, name: "Biến và toán tử trong Python", duration: 2 },
      ]
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 8
  },
  {
    id: 2,
    name: "Cấu trúc điều khiển và Hàm",
    description: "Học về cấu trúc điều khiển và hàm trong Python",
    lessons: {
      1: [
        { id: 5, name: "Cấu trúc điều khiển: If, Else, Elif", duration: 2 },
        { id: 6, name: "Vòng lặp: For, While", duration: 2 },
        { id: 7, name: "Hàm trong Python", duration: 2 },
        { id: 8, name: "Phạm vi biến và thời gian sống", duration: 2 },
        { id: 9, name: "Tham số và đối số trong hàm", duration: 2 },
        { id: 10, name: "Hàm đệ quy và Lambda", duration: 2 },
      ]
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 12
  },
  {
    id: 3,
    name: "Cấu trúc dữ liệu và Thuật toán",
    description: "Tìm hiểu về các cấu trúc dữ liệu và thuật toán trong Python",
    lessons: {
      1: [
        { id: 11, name: "List và các thao tác trên List", duration: 2 },
        { id: 12, name: "Tuple và các thao tác trên Tuple", duration: 2 },
        { id: 13, name: "Dictionary và các thao tác trên Dictionary", duration: 2 },
        { id: 14, name: "Set và các thao tác trên Set", duration: 2 },
        { id: 15, name: "Thuật toán tìm kiếm: Tuyến tính và nhị phân", duration: 2 },
        { id: 16, name: "Thuật toán sắp xếp: Nổi bọt, Chèn, Chọn", duration: 2 },
        { id: 17, name: "Stack và Queue: Khái niệm và cài đặt", duration: 2 },
        { id: 18, name: "Linked List: Đơn và Đôi", duration: 2 },
        { id: 19, name: "Cây: Nhị phân, BST, AVL", duration: 2 },
        { id: 20, name: "Đồ thị và các thuật toán đồ thị cơ bản", duration: 2 },
      ]
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 20
  },
  {
    id: 4,
    name: "Xử lý File và Module",
    description: "Học cách xử lý file và sử dụng module trong Python",
    lessons: {
      1: [
        { id: 21, name: "Đọc và ghi tập tin văn bản", duration: 2 },
        { id: 22, name: "Xử lý tập tin CSV", duration: 2 },
        { id: 23, name: "Xử lý tập tin JSON", duration: 2 },
        { id: 24, name: "Tạo và sử dụng Module", duration: 2 },
        { id: 25, name: "Quản lý thư viện và sử dụng pip", duration: 2 },
      ]
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 10
  },
  {
    id: 5,
    name: "Lập trình Hướng đối tượng",
    description: "Tìm hiểu về lập trình hướng đối tượng trong Python",
    lessons: {
      1: [
        { id: 26, name: "Lớp và Đối tượng trong Python", duration: 2 },
        { id: 27, name: "Các thuộc tính và phương thức", duration: 2 },
        { id: 28, name: "Constructor và Destructor", duration: 2 },
        { id: 29, name: "Kế thừa và Đa hình", duration: 2 },
        { id: 30, name: "Encapsulation và Abstraction", duration: 2 },
        { id: 31, name: "Ghi đè phương thức và Đa hình động", duration: 2 },
        { id: 32, name: "Thực hành xây dựng lớp và đối tượng", duration: 2 },
      ]
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 14
  },
  {
    id: 6,
    name: "Xử lý Ngoại lệ và Debugging",
    description: "Học cách xử lý ngoại lệ và gỡ lỗi trong Python",
    lessons: {
      1: [
        { id: 33, name: "Khái niệm về ngoại lệ", duration: 2 },
        { id: 34, name: "Xử lý ngoại lệ với try, except", duration: 2 },
        { id: 35, name: "Câu lệnh finally và tạo ngoại lệ tùy chỉnh", duration: 2 },
        { id: 36, name: "Debugging với PDB", duration: 2 },
        { id: 37, name: "Logging trong Python", duration: 2 },
        { id: 38, name: "Unit testing với unittest", duration: 2 },
      ]
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 12
  },
  {
    id: 7,
    name: "Thư viện và Framework phổ biến",
    description: "Tìm hiểu về các thư viện và framework phổ biến trong Python",
    lessons: {
      1: [
        { id: 39, name: "Giới thiệu và Sử dụng pip", duration: 2 },
        { id: 40, name: "Thư viện Standard: os, sys, math", duration: 2 },
        { id: 41, name: "Thư viện Numpy: Tính toán khoa học", duration: 2 },
        { id: 42, name: "Thư viện Pandas: Xử lý dữ liệu", duration: 2 },
        { id: 43, name: "Matplotlib và Visualization", duration: 2 },
        { id: 44, name: "Giới thiệu Flask: Xây dựng web đơn giản", duration: 2 },
        { id: 45, name: "Xây dựng ứng dụng web với Flask", duration: 2 },
        { id: 46, name: "Giới thiệu Django: Web framework mạnh mẽ", duration: 2 },
        { id: 47, name: "Xây dựng ứng dụng web với Django", duration: 2 },
      ]
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 18
  },
  {
    id: 8,
    name: "Lập trình Web với Flask và Django",
    description: "Học cách phát triển ứng dụng web với Flask và Django",
    lessons: {
      1: [
        { id: 48, name: "Giới thiệu về Flask", duration: 2 },
        { id: 49, name: "Xây dựng ứng dụng web với Flask", duration: 2 },
        { id: 50, name: "Giới thiệu về Django", duration: 2 },
        { id: 51, name: "Xây dựng ứng dụng web với Django", duration: 2 },
      ]
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 8
  },
  {
    id: 9,
    name: "Xử lý dữ liệu lớn với Python",
    description: "Tìm hiểu cách xử lý dữ liệu lớn bằng Python",
    lessons: {
      1: [
        { id: 52, name: "Giới thiệu về xử lý dữ liệu lớn", duration: 2 },
        { id: 53, name: "Sử dụng Pandas cho xử lý dữ liệu", duration: 2 },
        { id: 54, name: "Phân tích dữ liệu với Numpy", duration: 2 },
        { id: 55, name: "Trực quan hóa dữ liệu với Matplotlib", duration: 2 },
      ]
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 8
  },
  {
    id: 10,
    name: "Machine Learning cơ bản",
    description: "Học về Machine Learning cơ bản với Python",
    lessons: {
      1: [
        { id: 56, name: "Giới thiệu về Machine Learning", duration: 2 },
        { id: 57, name: "Các thuật toán Machine Learning cơ bản", duration: 2 },
        { id: 58, name: "Xây dựng mô hình Machine Learning", duration: 2 },
        { id: 59, name: "Thực hành với Scikit-Learn", duration: 2 },
      ]
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 8
  },
  {
    id: 11,
    name: "Project và Ứng dụng thực tế",
    description: "Thực hành với các dự án và ứng dụng thực tế",
    lessons: {
      1: [
        { id: 60, name: "Lập kế hoạch dự án, học GUI", duration: 2 },
        { id: 61, name: "Xây dựng ứng dụng GUI", duration: 2 },
        { id: 62, name: "Phát triển ứng dụng GUI", duration: 2 },
        { id: 63, name: "Tích hợp ứng dụng với cơ sở dữ liệu", duration: 2 },
      ]
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 8
  },
  {
    id: 12,
    name: "Dự án cuối khóa: Xây dựng ứng dụng quản lý thư viện",
    description: "Áp dụng kiến thức đã học để xây dựng một ứng dụng quản lý thư viện",
    lessons: {
      1: [
        { id: 64, name: "Phân tích và thiết kế dự án", duration: 2 },
        { id: 65, name: "Xây dựng giao diện người dùng với Tkinter", duration: 2 },
        { id: 66, name: "Kết nối và xử lý cơ sở dữ liệu", duration: 2 },
        { id: 67, name: "Kiểm thử và triển khai dự án", duration: 2 },
      ]
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 8
  }
];