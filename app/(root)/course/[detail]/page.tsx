import CourseDetail from '@/components/content/course/detail-slug'
import { allCourses } from '@/constants/seo/course';
import { ConstCourseType } from '@/constants/seo/course/type';
import React from 'react'

const CourseDetailPage = ({ params }: { params: { detail: string } }) => {
  const course = allCourses.find((course) => course.slug === params.detail);
  return (
    <CourseDetail course={course} />
  )
}

export default CourseDetailPage