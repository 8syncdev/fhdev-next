'use client'
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { StarSvg } from '@/components/svg';
import Link from 'next/link';

interface Review {
    text: string;
    author: string;
    image: string;
}

interface ReviewCardProps {
    review: Review;
    isActive: boolean;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, isActive }) => (
    <div className={`lg:pl-2 min-w-0 w-full md:w-1/3 flex-shrink-0 flex-grow-0 transition-all duration-300 ${isActive ? 'scale-105 opacity-100' : 'scale-95 opacity-50'} px-2`}>
        <div className="sm:inline-block sm:w-full border border-blue-600 rounded-2xl overflow-hidden">
            <figure className="h-full p-5 lg:p-11">
                <blockquote>
                    <p className="text-base dark:text-white line-clamp-4">{review.text}</p>
                </blockquote>
                <div className="h-1 bg-violet-400 w-16 my-6 rounded-full"></div>
                <figcaption className="flex items-center gap-x-4">
                    <Image alt={review.author} width={40} height={40} className="h-10 w-10 rounded-full bg-gray-50" src={review.image} />
                    <div>
                        <div className="font-semibold text-white text-sm line-clamp-1">{review.author}</div>
                        <div className="flex items-center gap-x-1">
                            {Array(5).fill(null).map((_, index) => (
                                <StarSvg key={index} className='text-yellow-500 h-5 w-5' />
                            ))}
                        </div>
                    </div>
                </figcaption>
            </figure>
        </div>
    </div>
);

interface CarouselButtonProps {
    direction: 'prev' | 'next';
    onClick: () => void;
}

const CarouselButton: React.FC<CarouselButtonProps> = ({ direction, onClick }) => (
    <button onClick={onClick} className={`z-10 bg-violet-500 text-white rounded-full absolute flex items-center justify-center top-1/2 -translate-y-1/2 cursor-pointer w-8 h-8 ${direction === 'prev' ? 'left-4' : 'right-4'}`}>
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d={direction === 'prev' ? "M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" : "M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"}></path>
        </svg>
    </button>
);

interface CarouselIndicatorsProps {
    totalSlides: number;
    currentSlide: number;
    onIndicatorClick: (index: number) => void;
}

const CarouselIndicators: React.FC<CarouselIndicatorsProps> = ({ totalSlides, currentSlide, onIndicatorClick }) => (
    <div className="z-10 absolute bottom-0 left-0 right-0 mt-5 flex items-center justify-center">
        {[...Array(totalSlides)].map((_, index) => (
            <button
                key={index}
                className={`w-3 h-3 flex items-center mx-1 bg-violet-400 rounded-full ${index === currentSlide ? 'opacity-100' : 'opacity-50'}`}
                onClick={() => onIndicatorClick(index)}
                type="button"
            ></button>
        ))}
    </div>
);

const reviews: Review[] = [
    {
        text: "Khóa học này thực sự tuyệt vời! Tôi đã học được rất nhiều về lập trình và cảm thấy tự tin hơn trong kỹ năng của mình.",
        author: "Nguyễn Văn A",
        image: "/images/reviewers/nguyen-van-a.jpg"
    },
    {
        text: "Giảng viên rất nhiệt tình và kiến thức được truyền đạt một cách dễ hiểu. Tôi đã có thể áp dụng ngay những gì học được vào công việc.",
        author: "Trần Thị B",
        image: "/images/reviewers/tran-thi-b.jpg"
    },
    {
        text: "Đây là một trong những khóa học online tốt nhất mà tôi từng tham gia. Nội dung phong phú và cập nhật với xu hướng công nghệ hiện tại.",
        author: "Lê Văn C",
        image: "/images/reviewers/le-van-c.jpg"
    }
];

interface ReviewSectionProps {
    autoPlayInterval?: number;
    autoscroll?: boolean;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ autoPlayInterval = 5000, autoscroll = false }) => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const totalSlides = reviews.length;
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (autoscroll) {
            const interval = setInterval(() => {
                setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
            }, autoPlayInterval);

            return () => clearInterval(interval);
        }
    }, [totalSlides, autoPlayInterval, autoscroll]);

    useEffect(() => {
        if (carouselRef.current) {
            const slideWidth = carouselRef.current.offsetWidth / 3;
            carouselRef.current.style.transform = `translateX(-${(currentSlide - 1) * slideWidth}px)`;
        }
    }, [currentSlide]);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
    };

    return (
        <section className="flex flex-col mb-10 my-5">
            <header className="my-12 mb-6 text-center">
                <p className="font-medium my-4 text-violet-500 text-sm tracking-widest uppercase">Đánh giá từ học viên</p>
                <h2 className="text-3xl text-white">Học viên nói gì về chúng tôi</h2>
            </header>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2">
                <div className="flex items-center justify-center">
                    <span className="font-bold mx-1 text-lg text-white">4.8</span>
                    <span className="mx-2 flex items-center">
                        {Array(5).fill(null).map((_, index) => (
                            <StarSvg key={index} className='text-yellow-500 h-5 w-5' />
                        ))}
                    </span>
                </div>
                <div className="text-white">
                    <span className="font-bold mr-1">4.8</span>trên 5 dựa trên{' '}
                    <Link target="_blank" href="#" className="underline decoration-primary">
                        <span className="font-bold text-white">3661</span> đánh giá
                    </Link>
                </div>
            </div>
            <div className="relative mt-10 overflow-hidden py-10">
                <div className="mx-auto max-w-7xl px-4">
                    <div ref={carouselRef} className="flex transition-transform duration-300 ease-in-out -mx-2">
                        {[...reviews].map((review, index) => (
                            <ReviewCard key={index} review={review} isActive={index % totalSlides === currentSlide} />
                        ))}
                    </div>
                </div>
                <CarouselButton direction="prev" onClick={prevSlide} />
                <CarouselButton direction="next" onClick={nextSlide} />
                <CarouselIndicators totalSlides={totalSlides} currentSlide={currentSlide} onIndicatorClick={setCurrentSlide} />
            </div>
            <div className="flex justify-center mt-8">
                <Link href="/reviews" className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded">
                    Xem thêm đánh giá
                </Link>
            </div>
        </section>
    );
};

export default ReviewSection;
