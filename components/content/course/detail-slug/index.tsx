'use client'

import React, { useMemo, useCallback } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, DollarSign, BookOpen, Award, Star, Globe, Bookmark, CheckCircle, Target, Users } from 'lucide-react';
import { ConstCourseType } from '@/constants/seo/course/type';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { fadeIn, slideIn, zoomIn, staggerContainer } from '@/components/shared/hoc/motion/animations';
import { MotionDiv } from '@/components/shared/hoc';
import Link from 'next/link';
interface CourseDetailProps {
  course: ConstCourseType | undefined;
}

const CourseHeader: React.FC<{ course: ConstCourseType }> = React.memo(({ course }) => (
  <MotionDiv variants={staggerContainer()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
    <Card className="bg-gray-800 bg-opacity-60 border-gray-700 backdrop-blur-sm">
      <CardHeader className="flex flex-col md:flex-row items-center p-6">
        <MotionDiv variants={zoomIn({ duration: 1.2 })} className="w-full md:w-1/3 mb-6 md:mb-0 md:mr-6">
          <Image
            src={course.imgSrc}
            alt={course.nameCourse}
            width={300}
            height={200}
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </MotionDiv>
        <MotionDiv variants={slideIn({ direction: 'right', duration: 1.2 })} className="w-full md:w-2/3">
          <Badge className="mb-2 bg-violet-600 bg-opacity-70">{course.category}</Badge>
          <CardTitle className="text-3xl font-bold mb-4 text-white">{course.nameCourse}</CardTitle>
          <CardDescription className="text-gray-300 mb-6">{course.description}</CardDescription>
        </MotionDiv>
      </CardHeader>
    </Card>
  </MotionDiv>
));

const CourseContent: React.FC<{ course: ConstCourseType }> = React.memo(({ course }) => {
  const staggerContainerVariants = useMemo(() => staggerContainer({
    staggerChildren: 0.3,
    delayChildren: 0.5,
    type: 'spring',
    stiffness: 100,
    damping: 15,
    delay: 0.7,
  }), []);

  const renderAccordionItem = useCallback((value: string, icon: React.ReactNode, title: string, content: string[]) => (
    <MotionDiv variants={fadeIn({ direction: 'up', type: 'tween', delay: 0.3, duration: 1 })}>
      <AccordionItem value={value}>
        <AccordionTrigger className="text-xl font-semibold text-white bg-gray-800 bg-opacity-60 p-4 rounded-t-lg backdrop-blur-sm">
          {icon}
          {title}
        </AccordionTrigger>
        <AccordionContent className="bg-gray-800 bg-opacity-60 p-4 rounded-b-lg backdrop-blur-sm">
          <ul className="list-none text-gray-300">
            {content.map((item, index) => (
              <li key={index} className="flex items-center mb-2">
                <CheckCircle className="mr-2 h-4 w-4 text-green-400" />
                {item}
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </MotionDiv>
  ), []);

  return (
    <MotionDiv initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={staggerContainerVariants} className="mt-8">
      <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
        <BookOpen className="mr-2 h-6 w-6 text-violet-400" />
        Nội dung khóa học
      </h2>
      {course.content && (
        <div className="space-y-4">
          <MotionDiv variants={fadeIn({ delay: 0.2 })} className="text-gray-300">{course.content.intro}</MotionDiv>
          <Accordion type="single" collapsible className="w-full" defaultValue="whyChoose">
            {renderAccordionItem("whyChoose", <Star className="mr-2 h-5 w-5 text-yellow-400" />, "Tại sao chọn khóa học này", course.content.whyChoose)}
            {renderAccordionItem("objectives", <Target className="mr-2 h-5 w-5 text-violet-400" />, "Mục tiêu khóa học", course.content.purposes)}
            {renderAccordionItem("results", <Award className="mr-2 h-5 w-5 text-yellow-400" />, "Kết quả mong đợi", course.content.results)}
            {renderAccordionItem("orientedUsers", <Users className="mr-2 h-5 w-5 text-blue-400" />, "Đối tượng hướng đến", course.content.orientedUsers)}
          </Accordion>
        </div>
      )}
    </MotionDiv>
  );
});

const CourseDetails: React.FC<{ course: ConstCourseType }> = React.memo(({ course }) => (
  <MotionDiv initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={fadeIn({ duration: 1 })}>
    <Card className="bg-gray-800 bg-opacity-60 border-gray-700 backdrop-blur-sm">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
          <Bookmark className="mr-2 h-6 w-6 text-violet-400" />
          Chi tiết khóa học
        </h2>
        <h3 className="text-xl font-semibold mb-4 text-white">{course.nameCourse}</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center">
              <Clock className="mr-2 h-5 w-5 text-violet-400" />
              <span className="text-gray-300">{course.duration} giờ</span>
            </div>
            <div className="flex items-center flex-wrap">
              <DollarSign className="mr-2 h-5 w-5 text-green-400" />
              <span className="line-through text-gray-400 mr-2 text-sm">{course.originalPrice}đ</span>
              <span className="font-bold text-white text-sm">{course.price}đ</span>
            </div>
            <div className="flex items-center">
              <Globe className="mr-2 h-5 w-5 text-blue-400" />
              <span className="text-gray-300">{course.language.join(', ')}</span>
            </div>
            <div className="flex items-center">
              <Star className="mr-2 h-5 w-5 text-yellow-400" />
              <span className="text-gray-300">{course.rating} / 5</span>
            </div>
          </div>

          <Link href={`/payment?slug=${course.slug}`}>
            <Button className="w-full bg-violet-600 bg-opacity-70 hover:bg-violet-700 hover:bg-opacity-70 transition-colors duration-300">
              <Bookmark className="mr-2 h-5 w-5" /> Đăng ký ngay
            </Button>
          </Link>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-white flex items-center">
              <BookOpen className="mr-2 h-5 w-5 text-blue-400" />
              Thẻ
            </h3>
            <div className="flex flex-wrap gap-2">
              {course.tags.map((tag, index) => (
                <Badge key={index} className="bg-gray-700 bg-opacity-60 text-white">{tag}</Badge>
              ))}
            </div>
          </div>
          {course.author && (
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white flex items-center">
                <Users className="mr-2 h-5 w-5 text-green-400" />
                Giảng viên
              </h3>
              <div className="flex items-center space-x-4">
                <Image
                  src={course.author.avatar}
                  alt={course.author.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium text-white">{course.author.name}</p>
                  <p className="text-sm text-gray-400">{course.author.description}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  </MotionDiv>
));

const CourseOutline: React.FC<{ course: ConstCourseType }> = React.memo(({ course }) => {
  const renderLesson = useCallback((lesson: any, lessonIndex: number) => (
    <MotionDiv key={lessonIndex} variants={fadeIn({ delay: 0.15 * (lessonIndex + 1), duration: 1 })}>
      <AccordionItem value={`lesson-${lessonIndex}`}>
        <AccordionTrigger className="text-xl bg-gray-800 bg-opacity-60 p-4 rounded-t-lg text-white backdrop-blur-sm">
          <div className="flex justify-between items-center w-full">
            <span className="flex items-center">
              <BookOpen className="mr-2 h-5 w-5 text-violet-400" />
              {lesson.nameLesson}
            </span>
            <span className="text-sm text-gray-400 flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              {lesson.duration} giờ
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="bg-gray-800 bg-opacity-60 p-4 rounded-b-lg backdrop-blur-sm">
          <ul className="space-y-2">
            {lesson.detailLessons.map((detail: any, detailIndex: number) => (
              <MotionDiv key={detailIndex} variants={fadeIn({ delay: 0.07 * (detailIndex + 1), duration: 0.8 })} whileInView="show">
                <li className="flex justify-between items-center text-gray-300">
                  <span className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-400" />
                    {detail.nameDetailLesson}
                  </span>
                  <span className="text-sm text-gray-400 flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    {detail.duration} giờ
                  </span>
                </li>
              </MotionDiv>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </MotionDiv>
  ), []);

  return (
    <MotionDiv initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={staggerContainer()} className="mt-12">
      <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
        <BookOpen className="mr-2 h-6 w-6 text-violet-400" />
        Lộ trình khóa học
      </h2>
      <Accordion type="single" collapsible className="w-full space-y-4" defaultValue="lesson-0">
        {course.lessons.map(renderLesson)}
      </Accordion>
    </MotionDiv>
  );
});

const CertificateSection: React.FC = React.memo(() => (
  <MotionDiv initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={fadeIn({ duration: 1.2 })} className="mt-12 text-center bg-gray-800 bg-opacity-60 p-8 rounded-lg backdrop-blur-sm">
    <Award className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
    <h3 className="text-xl font-bold mb-2 text-white">Chứng chỉ hoàn thành</h3>
    <p className="text-gray-300">Nhận chứng chỉ sau khi hoàn thành khóa học thành công</p>
  </MotionDiv>
));

const CourseDetail: React.FC<CourseDetailProps> = ({ course }) => {
  if (!course) {
    return <div className="text-gray-300">Đang tải...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 bg-opacity-50 text-gray-100 p-4 sm:p-6 md:p-8 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="">
              <CourseHeader course={course} />
            </div>
            <CourseContent course={course} />
            <CourseOutline course={course} />
            <CertificateSection />
          </div>

          <div className="lg:w-1/3">
            <div className="sticky top-14 pt-4">
              <CourseDetails course={course} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CourseDetail);
