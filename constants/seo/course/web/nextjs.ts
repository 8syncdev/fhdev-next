import { ConstCourseType } from "../type";
import { urlImageCourse } from "../../firebase";
const courseNextJs: ConstCourseType = {
  // Use to filter course
  rating: 4.8,
  originalPrice: 20000000,
  price: 9500000,
  duration: 70 * 2.25, // Trung bình mỗi buổi 2.25 giờ
  language: ["javascript", "typescript"],
  slug: "course-nextjs-fullstack",
  imgSrc: urlImageCourse['nextjs'],
  category: "web",
  // Course detail
  nameCourse: "Khóa học Next.js từ cơ bản đến nâng cao",
  description:
    "Khóa học toàn diện về Next.js bao gồm các phiên bản 13, 14, và 15. Ngoài ra, học viên sẽ được học nền tảng HTML, CSS, JavaScript và TypeScript.",
  tags: [
    "Next.js",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Web Development",
  ],
  newest: true,
  popular: true,
  trending: true,
  content: {
    intro:
      "Khóa học toàn diện về Next.js bao gồm các phiên bản 13, 14, và 15. Ngoài ra, học viên sẽ được học nền tảng HTML, CSS, JavaScript và TypeScript.",
    purposes: [
      "Hiểu rõ các khái niệm cơ bản và nâng cao về Next.js",
      "Phát triển kỹ năng lập trình frontend với HTML, CSS, JavaScript và TypeScript",
      "Xây dựng và triển khai các ứng dụng web hoàn chỉnh với Next.js",
      "Áp dụng các phương pháp tối ưu hóa và bảo mật trong phát triển web",
    ],
    results: [
      "Có khả năng phát triển ứng dụng web hoàn chỉnh với Next.js",
      "Sử dụng thành thạo HTML, CSS, JavaScript và TypeScript",
      "Hiểu và áp dụng các kỹ thuật tối ưu hóa và bảo mật web",
      "Phát triển kỹ năng làm việc nhóm và quản lý dự án",
    ],
    orientedUsers: [
      "Lập trình viên muốn nâng cao kỹ năng và kiến thức về Next.js",
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
      nameLesson: "HTML cơ bản",
      duration: 5 * 2.25, // 5 buổi
      detailLessons: [
        { nameDetailLesson: "Giới thiệu HTML", duration: 2.5 },
        { nameDetailLesson: "Cấu trúc HTML", duration: 2 },
        { nameDetailLesson: "Các thẻ HTML phổ biến", duration: 2 },
        { nameDetailLesson: "Form và input", duration: 2.5 },
        { nameDetailLesson: "HTML5 APIs", duration: 2.5 },
      ],
    },
    {
      nameLesson: "CSS cơ bản",
      duration: 5 * 2.25, // 5 buổi
      detailLessons: [
        { nameDetailLesson: "Giới thiệu CSS", duration: 2 },
        { nameDetailLesson: "CSS Selectors và Properties", duration: 2 },
        { nameDetailLesson: "Box Model", duration: 2 },
        { nameDetailLesson: "Flexbox cơ bản", duration: 2 },
        { nameDetailLesson: "CSS Grid cơ bản", duration: 2 },
      ],
    },
    {
      nameLesson: "CSS nâng cao",
      duration: 5 * 2.25, // 5 buổi
      detailLessons: [
        { nameDetailLesson: "Responsive Design", duration: 2 },
        { nameDetailLesson: "CSS Animations", duration: 2 },
        { nameDetailLesson: "CSS Transitions", duration: 2 },
        { nameDetailLesson: "Sass và SCSS", duration: 2 },
        { nameDetailLesson: "CSS Frameworks", duration: 2 },
      ],
    },
    {
      nameLesson: "JavaScript cơ bản",
      duration: 5 * 2.25, // 5 buổi
      detailLessons: [
        { nameDetailLesson: "Cú pháp cơ bản", duration: 2 },
        { nameDetailLesson: "DOM Manipulation", duration: 2 },
        { nameDetailLesson: "Event Handling", duration: 2 },
        { nameDetailLesson: "AJAX và Fetch API", duration: 2 },
        { nameDetailLesson: "Promises và Async/Await", duration: 2.5 },
      ],
    },
    {
      nameLesson: "JavaScript nâng cao",
      duration: 5 * 2.25, // 5 buổi
      detailLessons: [
        { nameDetailLesson: "ES6+ Features", duration: 2 },
        { nameDetailLesson: "Modules và Bundling", duration: 2 },
        { nameDetailLesson: "Error Handling", duration: 2 },
        { nameDetailLesson: "Debugging JavaScript", duration: 2 },
        { nameDetailLesson: "Functional Programming", duration: 2 },
      ],
    },
    {
      nameLesson: "TypeScript cơ bản",
      duration: 5 * 2.25, // 5 buổi
      detailLessons: [
        { nameDetailLesson: "Giới thiệu TypeScript", duration: 2 },
        { nameDetailLesson: "Type Annotations", duration: 2 },
        { nameDetailLesson: "Interfaces và Types", duration: 2 },
        { nameDetailLesson: "Classes và Inheritance", duration: 2 },
        { nameDetailLesson: "Generics", duration: 2 },
      ],
    },
    {
      nameLesson: "TypeScript nâng cao",
      duration: 5 * 2.25, // 5 buổi
      detailLessons: [
        { nameDetailLesson: "Decorators", duration: 2 },
        { nameDetailLesson: "Advanced Types", duration: 2 },
        { nameDetailLesson: "TypeScript với React", duration: 2 },
        { nameDetailLesson: "TypeScript với Node.js", duration: 2 },
        { nameDetailLesson: "Best Practices với TypeScript", duration: 2.5 },
      ],
    },
    {
      nameLesson: "Next.js cơ bản",
      duration: 5 * 2.25, // 5 buổi
      detailLessons: [
        { nameDetailLesson: "Giới thiệu Next.js", duration: 2 },
        { nameDetailLesson: "Cài đặt và cấu hình dự án", duration: 2 },
        { nameDetailLesson: "Routing trong Next.js", duration: 2 },
        { nameDetailLesson: "Data Fetching trong Next.js", duration: 2 },
        { nameDetailLesson: "API Routes", duration: 2.5 },
      ],
    },
    {
      nameLesson: "Next.js nâng cao",
      duration: 5 * 2.25, // 5 buổi
      detailLessons: [
        { nameDetailLesson: "Dynamic Routing", duration: 2 },
        { nameDetailLesson: "Static Site Generation (SSG)", duration: 2 },
        { nameDetailLesson: "Server-side Rendering (SSR)", duration: 2 },
        {
          nameDetailLesson: "Incremental Static Regeneration (ISR)",
          duration: 2,
        },
        { nameDetailLesson: "Middleware trong Next.js", duration: 2 },
      ],
    },
    {
      nameLesson: "Styling trong Next.js",
      duration: 5 * 2.25, // 5 buổi
      detailLessons: [
        { nameDetailLesson: "CSS Modules", duration: 2 },
        { nameDetailLesson: "Styled JSX", duration: 2 },
        { nameDetailLesson: "Styled Components", duration: 2 },
        { nameDetailLesson: "Tailwind CSS với Next.js", duration: 2 },
        { nameDetailLesson: "Sass và SCSS với Next.js", duration: 2 },
      ],
    },
    {
      nameLesson: "Authentication trong Next.js",
      duration: 5 * 2.25, // 5 buổi
      detailLessons: [
        {
          nameDetailLesson: "Xây dựng hệ thống Auth với NextAuth.js",
          duration: 2,
        },
        { nameDetailLesson: "JWT và OAuth", duration: 2 },
        { nameDetailLesson: "Xác thực người dùng", duration: 2 },
        { nameDetailLesson: "Bảo mật trong Next.js", duration: 2 },
        {
          nameDetailLesson: "Xử lý các vấn đề liên quan đến Auth",
          duration: 2.5,
        },
      ],
    },
    {
      nameLesson: "Deployment và tối ưu hóa trong Next.js",
      duration: 5 * 2.25, // 5 buổi
      detailLessons: [
        { nameDetailLesson: "Deployment với Vercel", duration: 2 },
        { nameDetailLesson: "Optimizing Performance", duration: 2 },
        { nameDetailLesson: "SEO trong Next.js", duration: 2 },
        { nameDetailLesson: "Image Optimization", duration: 2 },
        { nameDetailLesson: "Analyzing và Monitoring", duration: 2.5 },
      ],
    },
    {
      nameLesson: "Dự án thực tế - Phần 1",
      duration: 5 * 2.25, // 5 buổi
      detailLessons: [
        { nameDetailLesson: "Lên kế hoạch dự án", duration: 2 },
        { nameDetailLesson: "Thiết kế UI/UX", duration: 2 },
        { nameDetailLesson: "Xây dựng phần Frontend", duration: 2 },
        { nameDetailLesson: "Kết nối Backend", duration: 2 },
        { nameDetailLesson: "Kiểm thử và Debugging", duration: 2.5 },
      ],
    },
    {
      nameLesson: "Dự án thực tế - Phần 2",
      duration: 5 * 2.25, // 5 buổi
      detailLessons: [
        { nameDetailLesson: "Hoàn thiện Frontend", duration: 2 },
        { nameDetailLesson: "Hoàn thiện Backend", duration: 2 },
        { nameDetailLesson: "Tích hợp Auth và API", duration: 2 },
        { nameDetailLesson: "Tối ưu hóa và Bảo mật", duration: 2 },
        { nameDetailLesson: "Triển khai và theo dõi", duration: 2.5 },
      ],
    },
  ],
};

export default courseNextJs;
