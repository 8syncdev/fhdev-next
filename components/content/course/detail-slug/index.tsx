'use client'

import React, { useMemo, useCallback, useRef } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, DollarSign, BookOpen, Award, Star, Globe, Bookmark, CheckCircle, Target, Users, Zap, Video, Mic, FileText, Code } from 'lucide-react';
import { ConstCourseType } from '@/constants/seo/course/type';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { fadeIn, slideIn, zoomIn, staggerContainer, bounceIn } from '@/components/shared/hoc/motion/animations';
import { MotionDiv } from '@/components/shared/hoc';
import Link from 'next/link';
import { BlurDeco } from '@/components/shared';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import VideoShow from '@/components/dev/video/videoshow';
import { linkFeedback } from '@/constants/video';
import Autoplay from "embla-carousel-autoplay";

interface CourseDetailProps {
  course: ConstCourseType | undefined;
}

const CourseHeader: React.FC<{ course: ConstCourseType }> = React.memo(({ course }) => (
  <MotionDiv variants={staggerContainer()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
    <Card className="bg-transparent border-2 border-blue-500 rounded-lg overflow-hidden shadow-[0_0_25px_rgba(0,255,255,0.5)] hover:shadow-[0_0_35px_rgba(0,255,255,0.7)] transition-all duration-500">
      <CardHeader className="flex flex-col md:flex-row items-center p-6">
        <MotionDiv variants={zoomIn({ duration: 1.2 })} className="w-full md:w-1/3 mb-6 md:mb-0 md:mr-6">
          <Image
            src={course.imgSrc}
            alt={course.nameCourse}
            width={300}
            height={200}
            objectFit="cover"
            className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </MotionDiv>
        <MotionDiv variants={slideIn({ direction: 'right', duration: 1.2 })} className="w-full md:w-2/3">
          <Badge className="mb-2 bg-blue-600 bg-opacity-70 text-white px-3 py-1 rounded-full text-sm font-semibold">{course.category}</Badge>
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
        <AccordionTrigger className="text-xl font-semibold text-white bg-transparent border-2 border-blue-500 p-4 rounded-t-lg shadow-[0_0_10px_rgba(0,255,255,0.3)] hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition-all duration-300">
          {icon}
          {title}
        </AccordionTrigger>
        <AccordionContent className="bg-transparent border-2 border-t-0 border-blue-500 p-4 rounded-b-lg shadow-[0_0_10px_rgba(0,255,255,0.3)] hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition-all duration-300">
          <ul className="list-none text-gray-300">
            {content.map((item, index) => (
              <li key={index} className="flex items-center mb-2">
                <Zap className="mr-2 h-4 w-4 text-blue-400" />
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
        <BookOpen className="mr-2 h-6 w-6 text-blue-400" />
        Nội dung khóa học
      </h2>
      {course.content && (
        <div className="space-y-4">
          <MotionDiv variants={fadeIn({ delay: 0.2 })} className="text-gray-300">{course.content.intro}</MotionDiv>
          <Accordion type="single" collapsible className="w-full" defaultValue="whyChoose">
            {renderAccordionItem("whyChoose", <Star className="mr-2 h-5 w-5 text-yellow-400" />, "Tại sao chọn khóa học này", course.content.whyChoose)}
            {renderAccordionItem("objectives", <Target className="mr-2 h-5 w-5 text-blue-400" />, "Mục tiêu khóa học", course.content.purposes)}
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
    <Card className="bg-transparent border-2 border-blue-500 rounded-lg overflow-hidden shadow-[0_0_25px_rgba(0,255,255,0.5)] hover:shadow-[0_0_35px_rgba(0,255,255,0.7)] transition-all duration-500">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
          <Bookmark className="mr-2 h-6 w-6 text-blue-400" />
          Chi tiết khóa học
        </h2>
        <h3 className="text-xl font-semibold mb-4 text-white">{course.nameCourse}</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center">
              <Clock className="mr-2 h-5 w-5 text-blue-400" />
              <span className="text-gray-300">{course.duration} giờ</span>
            </div>
            <div className="flex items-center flex-wrap">
              <DollarSign className="mr-2 h-5 w-5 text-blue-400" />
              <span className="line-through text-gray-400 mr-2 text-sm">{course.originalPrice}đ</span>
              <span className="font-bold text-white text-lg">{course.price}đ</span>
              <MotionDiv
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Badge className="ml-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">Giảm 30%</Badge>
              </MotionDiv>
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

          <div className="text-gray-300 mb-4">
            <ul className="list-disc pl-5 space-y-2">
              <li>Hệ thống website với <span className="font-semibold text-blue-300">3000 bài tập</span></li>
              <li>Website tích hợp <span className="font-semibold text-blue-300">AI đồng hành</span> trên từng dòng code</li>
              <li>Giáo viên đạt giải quốc tế, quốc gia - <Link href="/mentor" className="text-blue-400 hover:underline">Xem chi tiết</Link></li>
            </ul>
          </div>

          <p className="text-yellow-300 font-semibold mb-4">Chỉ cần trả trước 30% để đăng ký lớp!</p>

          <Link href={`/payment?slug=${course.slug}`}>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
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
                <Badge key={index} className="bg-blue-600 bg-opacity-60 text-white">{tag}</Badge>
              ))}
            </div>
          </div>
          {course.author && (
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white flex items-center">
                <Users className="mr-2 h-5 w-5 text-blue-400" />
                Giảng viên
              </h3>
              <div className="flex items-center space-x-4">
                <Image
                  src={course.author.avatar}
                  alt={course.author.name}
                  width={50}
                  height={50}
                  className="rounded-full border-2 border-blue-400"
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
      <AccordionItem value={`lesson-${lessonIndex}`} className=''>
        <AccordionTrigger className="text-xl bg-transparent border-2 border-blue-500 p-4 rounded-t-lg text-white shadow-[0_0_10px_rgba(0,255,255,0.3)] hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition-all duration-300">
          <div className="flex justify-between items-center w-full">
            <span className="flex items-center">
              <BookOpen className="mr-2 h-5 w-5 text-blue-400" />
              {lesson.nameLesson}
            </span>
            <span className="text-sm text-gray-400 flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              {lesson.duration} giờ
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="bg-transparent border-2 border-t-0 border-blue-500 p-4 rounded-b-lg shadow-[0_0_10px_rgba(0,255,255,0.3)] hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition-all duration-300">
          <ul className="space-y-2">
            {lesson.detailLessons.map((detail: any, detailIndex: number) => (
              <MotionDiv key={detailIndex} variants={fadeIn({ delay: 0.07 * (detailIndex + 1), duration: 0.8 })} whileInView="show">
                <li className="flex justify-between items-center text-gray-300">
                  <span className="flex items-center">
                    {detail.type === 'video' && <Video className="mr-2 h-4 w-4 text-blue-400" />}
                    {detail.type === 'audio' && <Mic className="mr-2 h-4 w-4 text-blue-400" />}
                    {detail.type === 'document' && <FileText className="mr-2 h-4 w-4 text-blue-400" />}
                    {detail.type === 'code' && <Code className="mr-2 h-4 w-4 text-blue-400" />}
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
        <BookOpen className="mr-2 h-6 w-6 text-blue-400" />
        Lộ trình khóa học
      </h2>
      <Accordion type="single" collapsible className="w-full space-y-4" defaultValue="lesson-0">
        {course.lessons.map(renderLesson)}
      </Accordion>
    </MotionDiv>
  );
});

const CertificateSection: React.FC = React.memo(() => (
  <MotionDiv initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={fadeIn({ direction: 'up', type: 'spring', delay: 0.5, duration: 0.5 })} className="mt-12 text-center bg-transparent border-2 border-yellow-500 p-8 rounded-lg shadow-[0_0_15px_rgba(234,179,8,0.3)] hover:shadow-[0_0_25px_rgba(234,179,8,0.5)] transition-all duration-300">
    <Award className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
    <h3 className="text-xl font-bold mb-2 text-white">Chứng chỉ hoàn thành</h3>
    <p className="text-gray-300">Nhận chứng chỉ sau khi hoàn thành khóa học thành công</p>
  </MotionDiv>
));

const VideoFeedBack: React.FC = React.memo(() => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const carouselItems = useMemo(() => linkFeedback.map((item, index) => (
    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
      <MotionDiv
        variants={fadeIn({ direction: 'up', type: 'spring', delay: 0.1 * index, duration: 0.75 })}
        className="p-1"
      >
        <Card className="bg-transparent border-2 border-blue-500 rounded-lg overflow-hidden shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] transition-all duration-300">
          <CardContent className="flex aspect-square items-center justify-center p-2 sm:p-4 md:p-6">
            <VideoShow url={item.url} title={`Feedback ${index + 1}`} openDialog={true} />
          </CardContent>
        </Card>
      </MotionDiv>
    </CarouselItem>
  )), []);

  return (
    <MotionDiv
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={staggerContainer()}
      className="mt-8 sm:mt-10 md:mt-12"
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white flex items-center">
        <Star className="mr-2 h-5 w-5 sm:h-6 sm:w-6 text-yellow-400" />
        Phản hồi từ học viên
      </h2>
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="w-full"
      >
        <CarouselContent className="py-2 sm:py-4">
          {carouselItems}
        </CarouselContent>
        <CarouselPrevious className="left-0 sm:left-2 bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300" />
        <CarouselNext className="right-0 sm:right-2 bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300" />
      </Carousel>
      <style jsx global>{`
        .carousel-item {
          transition: all 0.5s ease;
          opacity: 0.5;
          transform: scale(0.9);
        }
        .carousel-item.active {
          opacity: 1;
          transform: scale(1);
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
        }
        .carousel-item:not(.active):hover {
          opacity: 0.8;
          transform: scale(0.95);
          box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
        }
        @media (max-width: 640px) {
          .carousel-item {
            transform: scale(0.95);
          }
          .carousel-item.active {
            transform: scale(1);
          }
          .carousel-item:not(.active):hover {
            transform: scale(0.98);
          }
        }
      `}</style>
    </MotionDiv>
  );
});

const CourseDetail: React.FC<CourseDetailProps> = ({ course }) => {
  if (!course) {
    return <div className="text-gray-300">Đang tải...</div>;
  }

  return (
    <div className="min-h-screen bg-transparent text-gray-100 p-4 sm:p-6 md:p-8 border-2 rounded-md border-blue-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="">
              <CourseHeader course={course} />
            </div>
            <CourseContent course={course} />
            <CourseOutline course={course} />
            <VideoFeedBack />
            <CertificateSection />
          </div>

          <div className="lg:w-1/3">
            <div className="sticky top-10">
              <CourseDetails course={course} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CourseDetail);
