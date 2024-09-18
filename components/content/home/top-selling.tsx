import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { urlImageCourse, urlImageCourseDetails } from '@/seo';

export interface Course {
    title: string;
    description: string;
    duration: number;
    price: number;
    originalPrice?: number;
    image: string;
    link: string;
    categories?: string[];
}



const CourseCard: React.FC<{ course: Course }> = ({ course }) => (
    <div className="border border-blue-900 transition-colors duration-200 ease-in-out overflow-hidden rounded-lg relative max-w-[350px]">
        <div className="h-[196px] relative">
            <Link href={course.link} className="relative w-full h-full inline-block">
                <Image
                    src={course.image}
                    alt={course.title}
                    layout="fill"
                    objectFit="cover"
                />
            </Link>
        </div>
        <div className="p-6">
            <div className="flex justify-between items-start">
                <h3 className="mb-2 leading-4">
                    <Link href={course.link} className="text-white hover:text-violet-60 no-underline transition-colors duration-200 ease-in-out font-semibold text-lg hover:no-underline">
                        {course.title}
                    </Link>
                </h3>
                <div className="ml-1">
                    <div className="bg-blue-600 font-medium md:font-bold inline px-3 py-1 rounded-2xl text-sm text-pink-530">
                        {course.duration}
                    </div>
                </div>
            </div>
            <p className="text-base mb-3 text-white text-ellipsis line-clamp-3">{course.description}</p>
            <p className="font-bold text-white mb-0" data-testid="price">
                {course.price}
                {course.originalPrice && (
                    <span className="ml-2 line-through font-normal text-gray-350 text-sm">
                        {course.originalPrice}
                    </span>
                )}
            </p>
        </div>
    </div>
);

const CourseList: React.FC<{ courses: Course[] }> = ({ courses }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
        ))}
    </div>
);

const TopSellingSection: React.FC = () => {
    const courses: Course[] = urlImageCourseDetails

    return (
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
                    <Link href="/course" className="group inline-block px-6 py-3 text-sm no-underline uppercase text-center text-white tracking-wider font-medium md:font-semibold rounded-full bg-violet-500 hover:bg-violet-400 transition-all duration-200 ease-out hover:text-white hover:no-underline">
                        Xem Tất Cả Khóa Học
                    </Link>
                    <p className="my-6 text-base text-white">
                        Không chắc nên bắt đầu từ đâu? Hãy xem <Link href="/p/learning-paths" className="font-semibold underline">lộ trình học tập</Link> của chúng tôi.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TopSellingSection;

export {
    TopSellingSection,
    CourseList,
    CourseCard
}
