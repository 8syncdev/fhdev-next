'use client'

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { allCourses } from '@/constants/seo/course';
import { ConstCourseType } from '@/constants/seo/course/type';
import { MotionDiv, navVariants, slideIn } from '@/components/shared/hoc';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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

const CourseCard: React.FC<{ course: Course }> = ({ course }) => (
    <MotionDiv variants={slideIn({ direction: 'up' })} initial="hidden" animate="show" className="h-full">
        <Card className="overflow-hidden max-w-[350px] bg-transparent border-blue-900 flex flex-col h-full">
            <div className="h-[196px] relative">
                <Link href={`/course/${course.slug}`} className="relative w-full h-full inline-block">
                    <Image
                        src={course.imgSrc}
                        alt={course.nameCourse}
                        layout="fill"
                        objectFit="cover"
                    />
                </Link>
                <Badge className="absolute top-2 right-2 bg-gradient-to-r from-pink-500 to-violet-600">
                    {course.duration} giờ
                </Badge>
            </div>
            <CardHeader className="flex-grow">
                <CardTitle>
                    <Link href={`/course/${course.slug}`} className="text-white hover:text-violet-60 no-underline transition-colors duration-200 ease-in-out">
                        {course.nameCourse}
                    </Link>
                </CardTitle>
                <CardDescription className="text-white">{course.description}</CardDescription>
            </CardHeader>
            <CardFooter>
                <p className="font-bold text-white mb-0" data-testid="price">
                    {course.price.toLocaleString()} VND
                    {course.originalPrice && (
                        <span className="ml-2 line-through font-normal text-gray-350 text-sm">
                            {course.originalPrice.toLocaleString()} VND
                        </span>
                    )}
                </p>
            </CardFooter>
        </Card>
    </MotionDiv>
);

const CourseList: React.FC<{ courses: Course[] }> = ({ courses }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
        ))}
    </div>
);

const TopSellingSection: React.FC = () => {
    const courses: Course[] = allCourses.slice(0, 4).map((course: ConstCourseType) => ({
        ...course,
        imgSrc: typeof course.imgSrc === 'string' ? course.imgSrc : course.imgSrc.src
    }));

    return (
        <MotionDiv variants={navVariants()} initial="hidden" animate="show">
            <section className="flex flex-col mb-10 my-5">
                <header className="my-12 mb-6 text-center">
                    <p className="font-medium my-4 text-violet-500 text-sm tracking-widest uppercase">Các Khóa Học Bán Chạy Nhất</p>
                    <h2 className="text-3xl text-white font-bold">Nâng Cao Kỹ Năng Lập Trình Của Bạn</h2>
                </header>
                <div className="flex flex-col items-center">
                    <p className="mb-10 text-center max-w-[50ch] text-lg lg:text-xl lg:leading-8 text-white">
                        Cho dù bạn đang tìm kiếm cơ hội chuyển sang sự nghiệp trong lĩnh vực công nghệ hay muốn thăng tiến trong vai trò hiện tại, các khóa học của chúng tôi sẽ cung cấp cho bạn kiến thức và kinh nghiệm cần thiết để thành công.
                    </p>
                    <CourseList courses={courses} />
                    <div className="mt-14 text-center">
                        <Button asChild className="bg-violet-500 hover:bg-violet-400 text-white">
                            <Link href="/course">Xem Tất Cả Khóa Học</Link>
                        </Button>
                        <p className="my-6 text-base text-white">
                            Không chắc nên bắt đầu từ đâu? Hãy xem <Link href="/roadmap" className="font-semibold underline">lộ trình học tập</Link> của chúng tôi.
                        </p>
                    </div>
                </div>
            </section>
        </MotionDiv>
    );
};

export default TopSellingSection;

export {
    TopSellingSection,
    CourseList,
    CourseCard
}
