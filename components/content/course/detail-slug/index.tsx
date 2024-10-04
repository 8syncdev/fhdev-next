'use client'

import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, DollarSign, BookOpen, Award, User, Star, Globe, Bookmark, CheckCircle, Target, Users } from 'lucide-react';
import { ConstCourseType } from '@/constants/seo/course/type';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface CourseDetailProps {
  course: ConstCourseType | undefined;
}

const CourseHeader: React.FC<{ course: ConstCourseType }> = ({ course }) => (
  <Card className="bg-gray-800 bg-opacity-60 border-gray-700 backdrop-blur-sm">
    <CardHeader className="flex flex-col md:flex-row items-center p-6">
      <div className="w-full md:w-1/3 mb-6 md:mb-0 md:mr-6">
        <Image
          src={course.imgSrc}
          alt={course.nameCourse}
          width={300}
          height={200}
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full md:w-2/3">
        <Badge className="mb-2 bg-violet-600 bg-opacity-70">{course.category}</Badge>
        <CardTitle className="text-3xl font-bold mb-4 text-white">{course.nameCourse}</CardTitle>
        <CardDescription className="text-gray-300 mb-6">{course.description}</CardDescription>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center">
            <Clock className="mr-2 h-5 w-5 text-violet-400" />
            <span className="text-gray-300">{course.duration} giờ</span>
          </div>
          <div className="flex items-center">
            <DollarSign className="mr-2 h-5 w-5 text-green-400" />
            <span className="line-through text-gray-400 mr-2">{course.originalPrice}đ</span>
            <span className="font-bold text-white">{course.price}đ</span>
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
        
        <Button className="w-full bg-violet-600 bg-opacity-70 hover:bg-violet-700 hover:bg-opacity-70 transition-colors duration-300">
          <Bookmark className="mr-2 h-5 w-5" /> Đăng ký ngay
        </Button>
      </div>
    </CardHeader>
  </Card>
);

const CourseContent: React.FC<{ course: ConstCourseType }> = ({ course }) => (
  <div className="mt-8">
    <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
      <BookOpen className="mr-2 h-6 w-6 text-violet-400" />
      Nội dung khóa học
    </h2>
    {course.content && (
      <div className="space-y-4">
        <p className="text-gray-300">{course.content.intro}</p>
        <Accordion type="single" collapsible className="w-full" defaultValue="objectives">
          <AccordionItem value="objectives">
            <AccordionTrigger className="text-xl font-semibold text-white bg-gray-800 bg-opacity-60 p-4 rounded-t-lg backdrop-blur-sm">
              <Target className="mr-2 h-5 w-5 text-violet-400" />
              Mục tiêu khóa học
            </AccordionTrigger>
            <AccordionContent className="bg-gray-800 bg-opacity-60 p-4 rounded-b-lg backdrop-blur-sm">
              <ul className="list-none text-gray-300">
                {course.content.purposes.map((purpose, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-400" />
                    {purpose}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="results">
            <AccordionTrigger className="text-xl font-semibold text-white bg-gray-800 bg-opacity-60 p-4 rounded-t-lg backdrop-blur-sm">
              <Award className="mr-2 h-5 w-5 text-yellow-400" />
              Kết quả mong đợi
            </AccordionTrigger>
            <AccordionContent className="bg-gray-800 bg-opacity-60 p-4 rounded-b-lg backdrop-blur-sm">
              <ul className="list-none text-gray-300">
                {course.content.results.map((result, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-400" />
                    {result}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    )}
  </div>
);

const CourseDetails: React.FC<{ course: ConstCourseType }> = ({ course }) => (
  <Card className="bg-gray-800 bg-opacity-60 border-gray-700 backdrop-blur-sm">
    <CardContent className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
        <Bookmark className="mr-2 h-6 w-6 text-violet-400" />
        Chi tiết khóa học
      </h2>
      <div className="space-y-4">
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
);

const CourseOutline: React.FC<{ course: ConstCourseType }> = ({ course }) => (
  <div className="mt-12">
    <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
      <BookOpen className="mr-2 h-6 w-6 text-violet-400" />
      Lộ trình khóa học
    </h2>
    <Accordion type="single" collapsible className="w-full space-y-4" defaultValue="lesson-0">
      {course.lessons.map((lesson, lessonIndex) => (
        <AccordionItem key={lessonIndex} value={`lesson-${lessonIndex}`}>
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
              {lesson.detailLessons.map((detail, detailIndex) => (
                <li key={detailIndex} className="flex justify-between items-center text-gray-300">
                  <span className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-400" />
                    {detail.nameDetailLesson}
                  </span>
                  <span className="text-sm text-gray-400 flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    {detail.duration} giờ
                  </span>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
);

const CertificateSection: React.FC = () => (
  <div className="mt-12 text-center bg-gray-800 bg-opacity-60 p-8 rounded-lg backdrop-blur-sm">
    <Award className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
    <h3 className="text-xl font-bold mb-2 text-white">Chứng chỉ hoàn thành</h3>
    <p className="text-gray-300">Nhận chứng chỉ sau khi hoàn thành khóa học thành công</p>
  </div>
);

const CourseDetail: React.FC<CourseDetailProps> = ({ course }) => {
  if (!course) {
    return <div className="text-gray-300">Đang tải...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 bg-opacity-50 text-gray-100 p-4 sm:p-6 md:p-8 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className=" \top-0 z-10 bg-gray-900 bg-opacity-95 backdrop-blur-sm">
              <CourseHeader course={course} />
            </div>
            <CourseContent course={course} />
            <CourseOutline course={course} />
            <CertificateSection />
          </div>
          
          <div className="lg:w-1/3">
            <div className="sticky top-0 pt-4">
              <CourseDetails course={course} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
