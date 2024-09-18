import React from 'react'
import { getCourseDetail } from '@/server'
import { CourseDetail } from '@/components/content/course'


const page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const courseDetail = await getCourseDetail(slug) as any
  return (
    <CourseDetail content={courseDetail} courseId={slug} />
  )
}

export default page