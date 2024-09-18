import { ChapterWithLessons, CourseDetailProps } from "@/server/course.type";
import { pythonDetail, roadmapPythonDetail } from "./foundation/python";


export const courseDetailData = {
    '1': pythonDetail
} as {
    [key: string]: CourseDetailProps['content']
}

export const roadmapDetailData = {
    '1': roadmapPythonDetail
} as {
    [key: string]: any
}