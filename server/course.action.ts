'use server'

import { domain } from "./config"
import { get } from "./method.action"
import { Course } from "../components/content"
import { getCoursesData, courseDetailData, roadmapDetailData } from "../constants/data"
import { ChaptersResponse, LessonsResponse, LessonContentResponse, CoursesResponse, CourseDetailProps, ChapterWithLessons } from "./course.type"



const getCourses = async (page = 1, pageSize = 10): Promise<CoursesResponse> => {
    try {
        const courses = await get(`${domain}/api/course?page=${page}&page_size=${pageSize}`, {}, 'no-store')
        return courses.json()
    } catch (error) {
        console.error("Error fetching courses from server:", error)
        return getCoursesData[page - 1]
    }
}

const getCourseDetail = async (courseId: string): Promise<CourseDetailProps['content']> => {
    try {
        const courseDetail = await get(`${domain}/api/course/${courseId}`, {}, 'no-store');
        return courseDetail.json();
    }
    catch (error) {
        console.error("Error fetching course detail from server:", error)
        return courseDetailData[courseId]
    }
    
}

const getRoadmapDetail = async (courseId: string): Promise<any> => {
    return roadmapDetailData[courseId]
}

const getChapters = async (courseId: string, page = 1, pageSize = 10): Promise<ChaptersResponse> => {
    const chapters = await get(`${domain}/api/course/${courseId}/chapters?page=${page}&page_size=${pageSize}`, {}, 'no-store');
    return chapters.json();
}

const getLessons = async (chapterId: string, page = 1, pageSize = 10): Promise<LessonsResponse> => {
    const lessons = await get(`${domain}/api/course/chapters/${chapterId}/lessons?page=${page}&page_size=${pageSize}`, {}, 'no-store');
    return lessons.json();
}

const getLessonContent = async (lessonId: string): Promise<LessonContentResponse> => {
    const lessonContent = await get(`${domain}/api/course/lessons/${lessonId}/content`, {}, 'no-store');
    return lessonContent.json();
}

export {
    getCourses,
    getCourseDetail,
    getChapters,
    getLessons,
    getLessonContent,
    getRoadmapDetail
}


