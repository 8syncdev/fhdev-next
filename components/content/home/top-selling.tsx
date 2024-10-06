'use client'

import React, { useMemo, useCallback } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { allCourses } from '@/constants/seo/course';
import { ConstCourseType } from '@/constants/seo/course/type';
import { MotionDiv, navVariants, fadeIn, staggerContainer, bounceIn, zoomIn } from '@/components/shared/hoc';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, DollarSign } from 'lucide-react';

export interface Course {
    nameCourse: string;
    description: string;
    duration: number;
    price: number;
    originalPrice: number;
    imgSrc: string | StaticImageData;
    slug: string;
    category: string;
}

const CourseCard: React.FC<{ course: Course; index: number }> = React.memo(({ course, index }) => {
    const discountPercentage = Math.round((1 - course.price / course.originalPrice) * 100);

    return (
        <MotionDiv
            variants={fadeIn({
                direction: 'up', type: 'spring', delay: index * 0.1, duration: 0.75
            })}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="h-full"
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
        >
            <Card className="overflow-hidden max-w-[300px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[280px] xl:max-w-[300px] bg-transparent border-blue-900 flex flex-col h-full shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] transition-all duration-300">
                <div className="h-[160px] sm:h-[140px] md:h-[180px] lg:h-[160px] xl:h-[180px] relative overflow-hidden">
                    <Link href={`/course/${course.slug}`} className="relative w-full h-full inline-block">
                        <Image
                            src={course.imgSrc}
                            alt={course.nameCourse}
                            layout="fill"
                            objectFit="contain"
                            className="bg-white transition-transform duration-300 hover:scale-105"
                        />
                    </Link>
                    <Badge className="absolute top-2 right-2 bg-gradient-to-r from-pink-500 to-violet-600 text-white font-semibold text-xs py-1 px-2 rounded-full shadow-md">
                        {course.duration}h
                    </Badge>
                    <Badge className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        -{discountPercentage}%
                    </Badge>
                </div>
                <CardHeader className="flex-grow p-4">
                    <CardTitle className="text-lg">
                        <Link href={`/course/${course.slug}`} className="text-white hover:text-cyan-300 no-underline transition-colors duration-200 ease-in-out font-semibold">
                            {course.nameCourse}
                        </Link>
                    </CardTitle>
                    <CardDescription className="text-gray-300 text-sm line-clamp-2 mt-2">{course.description}</CardDescription>
                </CardHeader>
                <CardFooter className="bg-transparent p-4 rounded-b-lg">
                    <div className="flex items-center justify-between w-full text-sm">
                        <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1 text-yellow-400" />
                            <span className="font-medium text-yellow-400">{course.duration}h</span>
                        </div>
                        <div className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-1 text-green-400" />
                            <span className="font-medium text-green-400">{course.price.toLocaleString()}đ</span>
                            <span className="text-xs line-through text-gray-400 ml-1">{course.originalPrice.toLocaleString()}đ</span>
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </MotionDiv>
    );
});

const CourseList: React.FC<{ courses: Course[] }> = React.memo(({ courses }) => (
    <MotionDiv
        variants={staggerContainer({ staggerChildren: 0.1, delayChildren: 0.1 })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8"
    >
        {courses.map((course, index) => (
            <CourseCard key={course.slug} course={course} index={index} />
        ))}
    </MotionDiv>
));

const TopSellingSection: React.FC = () => {
    const courses: Course[] = useMemo(() => allCourses.slice(0, 4).map((course: ConstCourseType) => ({
        ...course,
        imgSrc: typeof course.imgSrc === 'string' ? course.imgSrc : course.imgSrc.src
    })), []);

    const renderHeader = useCallback(() => (
        <header className="my-8 mb-6 text-center">
            <MotionDiv variants={bounceIn({ delay: 0.2, duration: 0.7 })}>
                <p className="font-medium mb-2 text-violet-400 text-sm tracking-wider uppercase">Các Khóa Học Bán Chạy Nhất</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold">Nâng Cao Kỹ Năng Lập Trình Của Bạn</h2>
            </MotionDiv>
        </header>
    ), []);

    return (
        <MotionDiv
            variants={navVariants()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
        >
            <section className="flex flex-col mb-10 my-5 px-4 sm:px-6 lg:px-8">
                {renderHeader()}
                <div className="flex flex-col items-center">
                    <MotionDiv variants={fadeIn({ direction: 'up', type: 'spring', delay: 0.5, duration: 0.8 })}>
                        <p className="mb-8 text-center max-w-[50ch] text-base sm:text-lg lg:text-xl lg:leading-8 text-gray-300">
                            Cho dù bạn đang tìm kiếm cơ hội chuyển sang sự nghiệp trong lĩnh vực công nghệ hay muốn thăng tiến trong vai trò hiện tại, các khóa học của chúng tôi sẽ cung cấp cho bạn kiến thức và kinh nghiệm cần thiết để thành công.
                        </p>
                    </MotionDiv>
                    <CourseList courses={courses} />
                    <div className="mt-12 text-center">
                        <MotionDiv variants={bounceIn({ delay: 0.7, duration: 0.5 })}>
                            <Button asChild className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full shadow-[0_0_15px_rgba(0,255,255,0.5)] hover:shadow-[0_0_25px_rgba(0,255,255,0.7)] transition-all duration-300">
                                <Link href="/course">Xem Tất Cả Khóa Học</Link>
                            </Button>
                        </MotionDiv>
                        <MotionDiv variants={fadeIn({ direction: 'up', delay: 0.9, duration: 0.5 })}>
                            <p className="mt-4 text-sm sm:text-base text-gray-300">
                                Không chắc nên bắt đầu từ đâu? Hãy xem <Link href="/roadmap" className="font-semibold underline text-cyan-400 hover:text-cyan-300 transition-colors duration-200">lộ trình học tập</Link> của chúng tôi.
                            </p>
                        </MotionDiv>
                    </div>
                </div>
            </section>
        </MotionDiv>
    );
};

export default React.memo(TopSellingSection);

export {
    TopSellingSection,
    CourseList,
    CourseCard
}
