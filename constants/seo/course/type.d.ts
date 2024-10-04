import { StaticImageData } from "next/image";

export type CategoryType = 'web' | 'mobile' | 'desktop' | 'data' | 'foundation' | 'game' | 'blog' | 'roadmap'

type ConstCourseType = {
    // Use to filter course
    rating: number;
    originalPrice: number;
    price: number;
    duration: number;
    language: string[];
    slug: string;
    imgSrc: StaticImageData | string;
    category: CategoryType;
    // Course detail
    nameCourse: string;
    description: string;
    tags: string[];
    newest: boolean;
    popular: boolean;
    trending: boolean;
    // Content
    content?: {
        intro: string;
        purposes: string[];
        results: string[];
        orientedUsers: string[];
        whyChoose: string[];
    },
    lessons: Lesson[]
    author?: {
        name: string;
        avatar: StaticImageData;
        description: string;
        linkProfile: string;
    }
}

type Lesson = {
    nameLesson: string;
    duration: number;
    detailLessons: DetailLesson[]
}

type DetailLesson = {
    nameDetailLesson: string;
    duration: number;
}

export {
    ConstCourseType,
    Lesson,
    DetailLesson
}

