import { CoursesResponse } from "@/server/course.type";

export const getCoursesData: CoursesResponse[] = [
    {
        "count": 20,
        "next": "http://127.0.0.1:8000/api/course?page=2&page_size=10",
        "previous": null,
        "results": [
            {
                "title": "Làm Chủ Python Hoàn Toàn",
                "description": "Tất cả những gì bạn cần để lập trình bằng Python trong một khóa học (bao gồm 3 dự án thực tế)",
                "duration": 80,
                "price": 175000,
                "image": "https://firebasestorage.googleapis.com/v0/b/nextjs-djninex-store.appspot.com/o/image-upload%2Fpython.webp?alt=media&token=4da2d9fb-d7ae-42c7-8ee2-bc5805a4b1cd",
                "link": "/course/1",
                "categories": [
                    "python",
                    "programming_languages"
                ],
                "originalPrice": 350000
            },
            {
                "title": "Làm Chủ Django Hoàn Toàn",
                "description": "Học cách xây dựng ứng dụng web mạnh mẽ với Django - Framework Python phổ biến nhất cho phát triển web",
                "duration": 60,
                "price": 175000,
                "image": "https://firebasestorage.googleapis.com/v0/b/nextjs-djninex-store.appspot.com/o/image-upload%2Fdjango.webp?alt=media&token=cc3432f6-3f26-4ce5-bdd2-a1dce72cf94b",
                "link": "/course/2",
                "categories": [
                    "web_frameworks",
                    "backend"
                ],
                "originalPrice": 350000
            },
            {
                "title": "Next.js: Từ Cơ Bản Đến Nâng Cao",
                "description": "Học cách xây dựng ứng dụng web hiện đại, hiệu suất cao với Next.js - Framework React phổ biến cho phát triển ứng dụng",
                "duration": 50,
                "price": 175000,
                "image": "https://firebasestorage.googleapis.com/v0/b/nextjs-djninex-store.appspot.com/o/image-upload%2Fnextjs.webp?alt=media&token=dbd81265-44f8-4606-b986-2187bc166c63",
                "link": "/course/3",
                "categories": [
                    "web_frameworks",
                    "frontend"
                ],
                "originalPrice": 350000
            },
            {
                "title": "Làm Chủ React.js Hoàn Toàn",
                "description": "Học cách xây dựng ứng dụng web động và tương tác với React.js - Thư viện JavaScript phổ biến cho phát triển giao diện người dùng",
                "duration": 70,
                "price": 175000,
                "image": "https://firebasestorage.googleapis.com/v0/b/nextjs-djninex-store.appspot.com/o/image-upload%2Freactts.webp?alt=media&token=22946621-f501-47ce-9d11-052a902e8fff",
                "link": "/course/4",
                "categories": [
                    "frontend"
                ],
                "originalPrice": 350000
            },
            {
                "title": "Kỹ thuật Python nâng cao",
                "description": "Nâng cao kỹ năng Python của bạn với các kỹ thuật và khái niệm nâng cao",
                "duration": 65,
                "price": 175000,
                "image": "https://firebasestorage.googleapis.com/v0/b/nextjs-djninex-store.appspot.com/o/image-upload%2Fpython.webp?alt=media&token=4da2d9fb-d7ae-42c7-8ee2-bc5805a4b1cd",
                "link": "/course/5",
                "categories": [
                    "python",
                    "programming_languages"
                ],
                "originalPrice": 350000
            },
            {
                "title": "Làm Chủ C++ Từ A Đến Z",
                "description": "Khóa học giúp bạn làm chủ ngôn ngữ lập trình C++ từ cơ bản đến nâng cao, bao gồm các khái niệm quan trọng và các dự án thực tế.",
                "duration": 90,
                "price": 175000,
                "image": "https://firebasestorage.googleapis.com/v0/b/nextjs-djninex-store.appspot.com/o/image-upload%2Fcpp.jpg?alt=media&token=9addc070-a8c5-40e1-8022-dbe6690aa957",
                "link": "/course/6",
                "categories": [
                    "programming_languages"
                ],
                "originalPrice": 350000
            },
            {
                "title": "Lập Trình C# Chuyên Sâu",
                "description": "Học lập trình C# chuyên sâu với các khái niệm từ cơ bản đến nâng cao và thực hành với các dự án thực tế.",
                "duration": 75,
                "price": 175000,
                "image": "https://firebasestorage.googleapis.com/v0/b/nextjs-djninex-store.appspot.com/o/image-upload%2Fcsharp.webp?alt=media&token=4ee87f1f-4bca-4daa-b300-35cd58f0c247",
                "link": "/course/7",
                "categories": [
                    "programming_languages"
                ],
                "originalPrice": 350000
            },
            {
                "title": "Cơ Sở Dữ Liệu Toàn Diện",
                "description": "Tìm hiểu các khái niệm cơ bản và nâng cao về cơ sở dữ liệu, bao gồm SQL, NoSQL, và các hệ quản trị cơ sở dữ liệu phổ biến.",
                "duration": 55,
                "price": 175000,
                "image": "https://firebasestorage.googleapis.com/v0/b/nextjs-djninex-store.appspot.com/o/image-upload%2Fdatabase.webp?alt=media&token=6c1d33e2-bfc9-4bba-aadf-81f574874eef",
                "link": "/course/8",
                "categories": [
                    "database"
                ],
                "originalPrice": 350000
            },
            {
                "title": "Design Pattern Trong Phát Triển Phần Mềm",
                "description": "Học các mẫu thiết kế (design patterns) phổ biến trong phát triển phần mềm, áp dụng vào các dự án thực tế.",
                "duration": 45,
                "price": 175000,
                "image": "https://firebasestorage.googleapis.com/v0/b/nextjs-djninex-store.appspot.com/o/image-upload%2Fdesign-pattern.webp?alt=media&token=92d63d37-b525-47f5-a48c-809daed20079",
                "link": "/course/9",
                "categories": [
                    "software_engineering"
                ],
                "originalPrice": 350000
            },
            {
                "title": "Làm Chủ Docker Hoàn Toàn",
                "description": "Tìm hiểu Docker và cách áp dụng container hóa trong phát triển phần mềm để triển khai ứng dụng dễ dàng.",
                "duration": 40,
                "price": 175000,
                "image": "https://firebasestorage.googleapis.com/v0/b/nextjs-djninex-store.appspot.com/o/image-upload%2Fdocker.webp?alt=media&token=d8089632-5471-4b96-9a66-0fd873829f56",
                "link": "/course/10",
                "categories": [
                    "devops"
                ],
                "originalPrice": 350000
            }
        ]
    },
    {
        "count": 20,
        "next": null,
        "previous": "http://127.0.0.1:8000/api/course?page_size=10",
        "results": [
            {
                "title": "Thuật Toán và Cấu Trúc Dữ Liệu",
                "description": "Học cách tổ chức và tối ưu hóa dữ liệu với các cấu trúc dữ liệu phổ biến và thuật toán hiệu quả.",
                "duration": 70,
                "price": 175000,
                "image": "https://firebasestorage.googleapis.com/v0/b/nextjs-djninex-store.appspot.com/o/image-upload%2Fdsa.webp?alt=media&token=70ca30d4-0abf-40c9-b5ed-408cefab03c3",
                "link": "/course/11",
                "categories": [
                    "software_engineering"
                ],
                "originalPrice": 350000
            },
            {
                "title": "Sử Dụng GitHub Chuyên Nghiệp",
                "description": "Khóa học hướng dẫn cách sử dụng GitHub một cách chuyên nghiệp cho quản lý mã nguồn và hợp tác nhóm.",
                "duration": 40,
                "price": 175000,
                "image": "https://firebasestorage.googleapis.com/v0/b/nextjs-djninex-store.appspot.com/o/image-upload%2Fgithub.webp?alt=media&token=b80c2955-d5ac-4177-9604-608f35b50b53",
                "link": "/course/12",
                "categories": [
                    "software_engineering"
                ],
                "originalPrice": 350000
            },
            {
                "title": "Làm Chủ HTML và CSS",
                "description": "Tìm hiểu cách xây dựng giao diện web hiện đại và đẹp mắt với HTML và CSS.",
                "duration": 50,
                "price": 175000,
                "image": "https://firebasestorage.googleapis.com/v0/b/nextjs-djninex-store.appspot.com/o/image-upload%2Fhtml-css.webp?alt=media&token=b3a7113c-3635-4744-b02c-65b798ea48bf",
                "link": "/course/13",
                "categories": [
                    "frontend"
                ],
                "originalPrice": 350000
            },
            {
                "title": "Lập Trình Java Cơ Bản",
                "description": "Khóa học lập trình Java dành cho người mới bắt đầu với các kiến thức cơ bản và thực hành.",
                "duration": 60,
                "price": 175000,
                "image": "https://firebasestorage.googleapis.com/v0/b/nextjs-djninex-store.appspot.com/o/image-upload%2Fjava.webp?alt=media&token=37b67ebb-93ed-44e9-8676-a4ce25c63a8e",
                "link": "/course/14",
                "categories": [],
                "originalPrice": 350000
            },
            {
                "title": "JavaScript Từ Cơ Bản Đến Nâng Cao",
                "description": "Tìm hiểu về JavaScript - ngôn ngữ phổ biến nhất trong phát triển web với các ứng dụng thực tế.",
                "duration": 70,
                "price": 175000,
                "image": "https://firebasestorage.googleapis.com/v0/b/nextjs-djninex-store.appspot.com/o/image-upload%2Fjavascript.webp?alt=media&token=e4cf49a7-da85-4fe0-9cfc-e6af97583874",
                "link": "/course/15",
                "categories": [],
                "originalPrice": 350000
            },
            {
                "title": "Lập Trình Toàn Diện Với MultiTech",
                "description": "Khóa học toàn diện về nhiều công nghệ khác nhau giúp bạn phát triển kỹ năng lập trình đa dạng.",
                "duration": 100,
                "price": 175000,
                "image": "https://firebasestorage.googleapis.com/v0/b/nextjs-djninex-store.appspot.com/o/image-upload%2Fmultitech.webp?alt=media&token=f40c87f8-0291-4394-aef9-11de833674ab",
                "link": "/course/16",
                "categories": [],
                "originalPrice": 350000
            },
            {
                "title": "Lập Trình Node.js Chuyên Sâu",
                "description": "Học lập trình backend với Node.js từ cơ bản đến nâng cao qua các bài học thực tiễn và dự án thực tế.",
                "duration": 80,
                "price": 175000,
                "image": "https://firebasestorage.googleapis.com/v0/b/nextjs-djninex-store.appspot.com/o/image-upload%2Fnodejs.webp?alt=media&token=927edbca-3291-4e75-a82c-d2032750bccc",
                "link": "/course/17",
                "categories": [],
                "originalPrice": 350000
            },
            {
                "title": "Làm Chủ React Native",
                "description": "Xây dựng ứng dụng di động với React Native từ cơ bản đến nâng cao với các dự án thực tế.",
                "duration": 75,
                "price": 175000,
                "image": "https://firebasestorage.googleapis.com/v0/b/nextjs-djninex-store.appspot.com/o/image-upload%2Freact-native.webp?alt=media&token=4870a343-53e7-4f2b-ba3f-c4c5078d0a43",
                "link": "/course/18",
                "categories": [],
                "originalPrice": 350000
            },
            {
                "title": "Kiểm Thử Với React Testing",
                "description": "Học cách kiểm thử ứng dụng React với các công cụ và phương pháp kiểm thử hiện đại.",
                "duration": 50,
                "price": 175000,
                "image": "https://firebasestorage.googleapis.com/v0/b/nextjs-djninex-store.appspot.com/o/image-upload%2Freact-testing.webp?alt=media&token=73b0dd26-7fb7-4282-aae2-653440834597",
                "link": "/course/19",
                "categories": [],
                "originalPrice": 350000
            },
            {
                "title": "Làm Chủ TypeScript Với React",
                "description": "Học cách sử dụng TypeScript trong các dự án React để xây dựng ứng dụng mạnh mẽ và an toàn hơn.",
                "duration": 65,
                "price": 175000,
                "image": "https://firebasestorage.googleapis.com/v0/b/nextjs-djninex-store.appspot.com/o/image-upload%2Freactts.webp?alt=media&token=22946621-7fba-4976-8df4-bcdb63e530a1",
                "link": "/course/20",
                "categories": [],
                "originalPrice": 350000
            }
        ]
    }
]
