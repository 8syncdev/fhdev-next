import { CourseDetailProps } from "@/server/course.type";

export const nextJsDetail: CourseDetailProps["content"] = {
  name: "Khóa học Next.js từ cơ bản đến nâng cao",
  img_url:
    "https://firebasestorage.googleapis.com/v0/b/nextjs-djninex-store.appspot.com/o/image-upload%2Fnextjs.webp?alt=media&token=dbd81265-44f8-4606-b986-2187bc166c63",
  description:
    "Khóa học toàn diện về Next.js bao gồm các phiên bản 13, 14, và 15. Ngoài ra, học viên sẽ được học nền tảng HTML, CSS, JavaScript và TypeScript.",
  price: 9500000,
  content_json: {
    about: {
      desc: "Khóa học toàn diện về Next.js bao gồm các phiên bản 13, 14, và 15. Ngoài ra, học viên sẽ được học nền tảng HTML, CSS, JavaScript và TypeScript.",
      title: "Khóa học Next.js từ cơ bản đến nâng cao",
      points: [
        "Hiểu rõ các khái niệm cơ bản và nâng cao về Next.js",
        "Phát triển kỹ năng lập trình frontend với HTML, CSS, JavaScript và TypeScript",
        "Xây dựng và triển khai các ứng dụng web hoàn chỉnh với Next.js",
        "Áp dụng các phương pháp tối ưu hóa và bảo mật trong phát triển web",
      ],
      journey: [
        "HTML cơ bản và nâng cao",
        "CSS cơ bản và nâng cao",
        "JavaScript cơ bản và nâng cao",
        "TypeScript cơ bản và nâng cao",
        "Next.js cơ bản và nâng cao",
        "Styling, Authentication và Deployment trong Next.js",
        "Thực hiện dự án thực tế",
      ],
      audience:
        "Lập trình viên muốn nâng cao kỹ năng về Next.js, sinh viên CNTT, người chuyển hướng sang lập trình web",
      projects: [
        {
          desc: "Dự án thực tế với Next.js",
          name: "Dự án cuối khóa",
        },
      ],
    },
    skills: {
      list: [
        "Lập trình Frontend với HTML, CSS, JavaScript, TypeScript",
        "Sử dụng thành thạo Next.js",
        "Xây dựng ứng dụng web với SEO và hiệu suất tối ưu",
        "Quản lý dự án và làm việc nhóm",
      ],
      title: "Kỹ năng đạt được",
    },
    for_who: {
      list: [
        "Lập trình viên muốn học Next.js",
        "Sinh viên ngành CNTT",
        "Người muốn chuyển hướng sang lập trình web",
        "Lập trình viên muốn học thêm về frontend và backend",
      ],
      title: "Đối tượng phù hợp",
    },
    overview: {
      level: "Từ Cơ Bản đến Nâng Cao",
      features: [
        {
          icon: "bar-chart-line",
          name: "Từ Cơ Bản đến Nâng Cao",
        },
        {
          icon: "play-circle-fill",
          name: "160 giờ học tập",
        },
        {
          icon: "list-check",
          name: "Nhiều bài học chi tiết",
        },
        {
          icon: "cloud-arrow-down",
          name: "Nội dung có thể tải về",
        },
        {
          icon: "code-square",
          name: "Bài tập thực hành",
        },
        {
          icon: "infinity",
          name: "Truy cập trọn đời",
        },
        {
          icon: "clock-history",
          name: "Học theo tốc độ của riêng bạn",
        },
      ],
      lesson_count: 60,
      video_content: "160 giờ học tập",
    },
    highlights: {
      title: "Điểm nổi bật",
      points: [
        "Thực hành dự án thực tế",
        "Nội dung bài bản và cập nhật",
        "Tập trung vào kỹ năng thực tế",
      ],
    },
    beginner_friendly: {
      desc: "Không cần kiến thức nền",
      title: "Thân thiện với người mới",
      details: [
        "Bắt đầu từ cơ bản đến nâng cao",
        "Nhiều bài tập thực hành và dự án",
        "Học theo tốc độ của riêng bạn",
      ],
      key_points: [
        "Phù hợp với người mới",
        "Nội dung dễ hiểu",
        "Tập trung thực hành",
      ],
    },
  },
  duration: 70 * 2.25, // 157.5 hours
};

export const roadmapNextJsDetail = [
  {
    id: 1,
    name: "HTML cơ bản",
    description: "Học nền tảng HTML và các thẻ phổ biến",
    lessons: {
      1: [
        { id: 1, name: "Giới thiệu HTML", duration: 2.5 },
        { id: 2, name: "Cấu trúc HTML", duration: 2 },
        { id: 3, name: "Các thẻ HTML phổ biến", duration: 2 },
        { id: 4, name: "Form và input", duration: 2.5 },
        { id: 5, name: "HTML5 APIs", duration: 2.5 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 5 * 2.25,
  },
  {
    id: 2,
    name: "CSS cơ bản",
    description: "Học cách sử dụng CSS cơ bản",
    lessons: {
      1: [
        { id: 6, name: "Giới thiệu CSS", duration: 2 },
        { id: 7, name: "CSS Selectors và Properties", duration: 2 },
        { id: 8, name: "Box Model", duration: 2 },
        { id: 9, name: "Flexbox cơ bản", duration: 2 },
        { id: 10, name: "CSS Grid cơ bản", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 5 * 2.25,
  },
  {
    id: 3,
    name: "CSS nâng cao",
    description: "Học các kỹ thuật CSS nâng cao",
    lessons: {
      1: [
        { id: 11, name: "Responsive Design", duration: 2 },
        { id: 12, name: "CSS Animations", duration: 2 },
        { id: 13, name: "CSS Transitions", duration: 2 },
        { id: 14, name: "Sass và SCSS", duration: 2 },
        { id: 15, name: "CSS Frameworks", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 5 * 2.25,
  },
  {
    id: 4,
    name: "JavaScript cơ bản",
    description: "Học các khái niệm cơ bản của JavaScript",
    lessons: {
      1: [
        { id: 16, name: "Cú pháp cơ bản", duration: 2 },
        { id: 17, name: "DOM Manipulation", duration: 2 },
        { id: 18, name: "Event Handling", duration: 2 },
        { id: 19, name: "AJAX và Fetch API", duration: 2 },
        { id: 20, name: "Promises và Async/Await", duration: 2.5 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 5 * 2.25,
  },
  {
    id: 5,
    name: "JavaScript nâng cao",
    description: "Học các kỹ thuật nâng cao trong JavaScript",
    lessons: {
      1: [
        { id: 21, name: "ES6+ Features", duration: 2 },
        { id: 22, name: "Modules và Bundling", duration: 2 },
        { id: 23, name: "Error Handling", duration: 2 },
        { id: 24, name: "Debugging JavaScript", duration: 2 },
        { id: 25, name: "Functional Programming", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 5 * 2.25,
  },
  {
    id: 6,
    name: "TypeScript cơ bản",
    description: "Học các khái niệm cơ bản của TypeScript",
    lessons: {
      1: [
        { id: 26, name: "Giới thiệu TypeScript", duration: 2 },
        { id: 27, name: "Type Annotations", duration: 2 },
        { id: 28, name: "Interfaces và Types", duration: 2 },
        { id: 29, name: "Classes và Inheritance", duration: 2 },
        { id: 30, name: "Generics", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 5 * 2.25,
  },
  {
    id: 7,
    name: "TypeScript nâng cao",
    description: "Học các kỹ thuật nâng cao trong TypeScript",
    lessons: {
      1: [
        { id: 31, name: "Decorators", duration: 2 },
        { id: 32, name: "Advanced Types", duration: 2 },
        { id: 33, name: "TypeScript với React", duration: 2 },
        { id: 34, name: "TypeScript với Node.js", duration: 2 },
        { id: 35, name: "Best Practices với TypeScript", duration: 2.5 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 5 * 2.25,
  },
  {
    id: 8,
    name: "Next.js cơ bản",
    description: "Học các khái niệm cơ bản của Next.js",
    lessons: {
      1: [
        { id: 36, name: "Giới thiệu Next.js", duration: 2 },
        { id: 37, name: "Cài đặt và cấu hình dự án", duration: 2 },
        { id: 38, name: "Routing trong Next.js", duration: 2 },
        { id: 39, name: "Data Fetching trong Next.js", duration: 2 },
        { id: 40, name: "API Routes", duration: 2.5 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 5 * 2.25,
  },
  {
    id: 9,
    name: "Next.js nâng cao",
    description: "Học các kỹ thuật nâng cao trong Next.js",
    lessons: {
      1: [
        { id: 41, name: "Dynamic Routing", duration: 2 },
        { id: 42, name: "Static Site Generation (SSG)", duration: 2 },
        { id: 43, name: "Server-side Rendering (SSR)", duration: 2 },
        { id: 44, name: "Incremental Static Regeneration (ISR)", duration: 2 },
        { id: 45, name: "Middleware trong Next.js", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 5 * 2.25,
  },
  {
    id: 10,
    name: "Styling trong Next.js",
    description: "Học cách styling trong Next.js",
    lessons: {
      1: [
        { id: 46, name: "CSS Modules", duration: 2 },
        { id: 47, name: "Styled JSX", duration: 2 },
        { id: 48, name: "Styled Components", duration: 2 },
        { id: 49, name: "Tailwind CSS với Next.js", duration: 2 },
        { id: 50, name: "Sass và SCSS với Next.js", duration: 2 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 5 * 2.25,
  },
  {
    id: 11,
    name: "Authentication trong Next.js",
    description: "Học các kỹ thuật xác thực trong Next.js",
    lessons: {
      1: [
        { id: 51, name: "Xây dựng hệ thống Auth với NextAuth.js", duration: 2 },
        { id: 52, name: "JWT và OAuth", duration: 2 },
        { id: 53, name: "Xác thực người dùng", duration: 2 },
        { id: 54, name: "Bảo mật trong Next.js", duration: 2 },
        { id: 55, name: "Xử lý các vấn đề liên quan đến Auth", duration: 2.5 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 5 * 2.25,
  },
  {
    id: 12,
    name: "Deployment và tối ưu hóa trong Next.js",
    description: "Học cách deploy và tối ưu hóa ứng dụng Next.js",
    lessons: {
      1: [
        { id: 56, name: "Deployment với Vercel", duration: 2 },
        { id: 57, name: "Optimizing Performance", duration: 2 },
        { id: 58, name: "SEO trong Next.js", duration: 2 },
        { id: 59, name: "Image Optimization", duration: 2 },
        { id: 60, name: "Analyzing và Monitoring", duration: 2.5 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 5 * 2.25,
  },
  {
    id: 13,
    name: "Dự án thực tế - Phần 1",
    description: "Triển khai dự án thực tế với Next.js",
    lessons: {
      1: [
        { id: 61, name: "Lên kế hoạch dự án", duration: 2 },
        { id: 62, name: "Thiết kế UI/UX", duration: 2 },
        { id: 63, name: "Xây dựng phần Frontend", duration: 2 },
        { id: 64, name: "Kết nối Backend", duration: 2 },
        { id: 65, name: "Kiểm thử và Debugging", duration: 2.5 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 5 * 2.25,
  },
  {
    id: 14,
    name: "Dự án thực tế - Phần 2",
    description: "Hoàn thiện dự án thực tế với Next.js",
    lessons: {
      1: [
        { id: 66, name: "Hoàn thiện Frontend", duration: 2 },
        { id: 67, name: "Hoàn thiện Backend", duration: 2 },
        { id: 68, name: "Tích hợp Auth và API", duration: 2 },
        { id: 69, name: "Tối ưu hóa và Bảo mật", duration: 2 },
        { id: 70, name: "Triển khai và theo dõi", duration: 2.5 },
      ],
    },
    totalLessonPages: 1,
    currentLessonPage: 1,
    duration: 5 * 2.25,
  },
];
