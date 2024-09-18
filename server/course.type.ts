interface Course {
    title: string;
    description: string;
    duration: number;
    price: number;
    originalPrice?: number;
    image: string;
    link: string;
    categories?: string[];
}

interface CoursesResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Course[];
}

interface Chapter {
    id: number;
    name: string;
}

interface ChaptersResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Chapter[];
}

interface Lesson {
    id: number;
    name: string;
    is_trial: boolean;
}

interface LessonsResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Lesson[];
}

interface LessonContent {
    name: string;
    url_video: string | null;
    url_doc: string | null;
    content: string;
}

interface LessonContentResponse {
    success: boolean;
    detail: LessonContent;
}

interface Feature {
    name: string;
    icon: string;
}

interface Project {
    name: string;
    desc: string;
}

interface CourseDetailProps {
    courseId: string;
    content: {
        name: string;
        img_url: string;
        description: string;
        price: number;
        duration: number;
        content_json: {
            overview: {
                level: string;
                video_content: string;
                lesson_count: number;
                features: Feature[];
            };
            about: {
                desc: string;
                title: string;
                points: string[];
                journey: string[];
                projects: Project[];
                audience: string;
            };
            skills: {
                title: string;
                list: string[];
            };
            highlights: {
                title: string;
                points: string[];
            };
            for_who: {
                title: string;
                list: string[];
            };
            beginner_friendly: {
                title: string;
                desc: string;
                details: string[];
                key_points: string[];
            };
        };
    };
}

interface ChapterWithLessons extends Chapter {
    lessons?: { [page: number]: Lesson[] };
    totalLessonPages?: number;
    currentLessonPage?: number;
}


export type {
    Course,
    CoursesResponse,
    Chapter,
    ChaptersResponse,
    Lesson,
    LessonsResponse,
    LessonContent,
    LessonContentResponse,
    CourseDetailProps,
    ChapterWithLessons
}