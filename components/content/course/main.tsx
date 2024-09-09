'use client'
import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { getCourses } from '@/server'
import { CourseList } from '../section/top-selling'
import type { Course, CoursesResponse } from '@/server'
import { CustomPagination } from '@/components/shadcn'
import { Button } from '@/components/ui/button'

const LoadingSpinner: React.FC = () => (
    <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-violet-500"></div>
    </div>
);

const categories = [
    { value: '', label: 'All' },
    { value: 'python', label: 'Python' },
    { value: 'web_frameworks', label: 'Web Frameworks' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'programming_languages', label: 'Programming Languages' },
    { value: 'database', label: 'Database' },
    { value: 'software_engineering', label: 'Software Engineering' },
    { value: 'devops', label: 'DevOps' },
    { value: 'mobile_development', label: 'Mobile Development' },
    { value: 'testing', label: 'Testing' },
];

const CategoryFilter: React.FC<{ onCategoryChange: (category: string) => void, selectedCategory: string }> = React.memo(({ onCategoryChange, selectedCategory }) => {
    return (
        <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((category) => (
                <Button
                    key={category.value}
                    onClick={() => onCategoryChange(category.value)}
                    // variant={selectedCategory === category.value ? "default" : "outline"}
                    className={`border border-blue-900 hover:border-blue-500 hover:bg-blue-500 ${selectedCategory === category.value ? "bg-blue-500" : "bg-transparent"}`}
                >
                    {category.label}
                </Button>
            ))}
        </div>
    );
});

CategoryFilter.displayName = 'CategoryFilter';

const useCourses = (pageSize: number, category: string) => {
    const [courses, setCourses] = useState<Course[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fetchCourses = useCallback(async () => {
        setIsLoading(true);
        try {
            const coursesData: CoursesResponse = await getCourses(currentPage, pageSize);
            const filteredCourses = category
                ? coursesData.results.filter(course => course.categories?.includes(category))
                : coursesData.results;
            setCourses(filteredCourses);
            setTotalPages(Math.ceil(coursesData.count / pageSize));
        } catch (error) {
            console.error('Error fetching courses:', error);
        } finally {
            setIsLoading(false);
        }
    }, [currentPage, pageSize, category]);

    useEffect(() => {
        fetchCourses();
    }, [fetchCourses]);

    const handlePageChange = useCallback((page: number): void => {
        setCurrentPage(page);
    }, []);

    return { courses, currentPage, totalPages, handlePageChange, isLoading };
};

const CourseIndex: React.FC = () => {
    const pageSize: number = 10;
    const [category, setCategory] = useState<string>('');
    const { courses, currentPage, totalPages, handlePageChange, isLoading } = useCourses(pageSize, category);

    const handleCategoryChange = useCallback((newCategory: string) => {
        setCategory(newCategory);
    }, []);

    const memoizedCourseList = useMemo(() => <CourseList courses={courses} />, [courses]);
    const memoizedPagination = useMemo(() => (
        <CustomPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
        />
    ), [currentPage, totalPages, handlePageChange]);

    return (
        <main className='flex flex-col items-center pb-10'>
            <CategoryFilter onCategoryChange={handleCategoryChange} selectedCategory={category} />
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <>
                    {memoizedCourseList}
                    {memoizedPagination}
                </>
            )}
        </main>
    );
};

export default React.memo(CourseIndex);