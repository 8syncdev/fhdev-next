'use server'

import { domain } from "./config"
import { get } from "./method.action"
import { Course } from "../components/content"


interface CoursesResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Course[];
}

const getCourses = async (page = 1, pageSize = 10): Promise<CoursesResponse> => {
    const courses = await get(`${domain}/api/course?page=${page}&page_size=${pageSize}`, {}, 'no-store')
    return courses.json()
}

const getCourseDetail = async (courseId: string): Promise<Course> => {
    const courseDetail = await get(`${domain}/api/course/${courseId}`, {}, 'no-store');
    return courseDetail.json();
}


export {
    getCourses,
    getCourseDetail
}

export type {
    Course,
    CoursesResponse
}

