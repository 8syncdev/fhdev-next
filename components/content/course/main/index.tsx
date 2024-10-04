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
import { TopSellingSection, CourseList, CourseCard } from '@/components/content/home/top-selling';

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

const CourseMain: React.FC = () => {
    const courses: Course[] = allCourses.map((course: ConstCourseType) => ({
        ...course,
        imgSrc: typeof course.imgSrc === 'string' ? course.imgSrc : course.imgSrc.src
    }));

    return (
        <MotionDiv variants={navVariants()} initial="hidden" animate="show">
            <section className="flex flex-col mb-10 my-5">
                <header className="my-12 mb-6 text-center">
                    <p className="font-medium my-4 text-violet-500 text-sm tracking-widest uppercase">Tất Cả Khóa Học</p>
                    <h2 className="text-3xl text-white font-bold">Khám Phá Các Khóa Học Của Chúng Tôi</h2>
                </header>
                <div className="flex flex-col items-center">
                    <p className="mb-10 text-center max-w-[50ch] text-lg lg:text-xl lg:leading-8 text-white">
                        Chúng tôi cung cấp một loạt các khóa học để giúp bạn phát triển kỹ năng lập trình và nâng cao sự nghiệp của mình trong lĩnh vực công nghệ.
                    </p>
                    <CourseList courses={courses} />
                </div>
            </section>
        </MotionDiv>
    );
};

export default CourseMain;

export {
    CourseMain,
}


