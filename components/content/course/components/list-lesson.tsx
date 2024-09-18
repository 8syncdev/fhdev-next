import React, { useMemo } from 'react';
import { LessonSkeleton } from '@/components/loading';
import { Button } from '@/components/ui/button';
import CustomPagination from '@/components/shadcn/pagination';
import { Chapter, Lesson } from '@/server/course.type';

// Extend the Chapter type to include lessons
interface ChapterWithLessons extends Chapter {
    lessons?: { [page: number]: Lesson[] };
    totalLessonPages?: number;
    currentLessonPage?: number;
}

const ListLesson: React.FC<{
    chapter: ChapterWithLessons;
    isExpanded: boolean;
    isLoading: boolean;
    onPageChange: (page: number) => void;
    onPreviewLesson: (lessonId: number) => void;
}> = React.memo(({
    chapter,
    isExpanded,
    isLoading,
    onPageChange,
    onPreviewLesson
}) => {
    const renderLessonSkeletons = useMemo(() =>
        Array(10).fill(0).map((_, index) => <LessonSkeleton key={index} />),
        []
    );

    if (isExpanded && isLoading) {
        return renderLessonSkeletons;
    }

    return (
        <>
            {chapter.lessons && chapter.lessons[chapter.currentLessonPage || 1]?.map((lesson) => (
                <li key={lesson.id} className="p-2 bg-gray-700 rounded mt-2 transition-colors duration-300 ease-in-out hover:bg-gray-600 flex justify-between items-center">
                    <span>{lesson.name}</span>
                    {lesson.is_trial && (
                        <Button variant="outline" size="sm" onClick={() => onPreviewLesson(lesson.id)}>
                            Xem thử
                        </Button>
                    )}
                </li>
            ))}
            {isExpanded && chapter.totalLessonPages && chapter.totalLessonPages > 1 && (
                <CustomPagination
                    currentPage={chapter.currentLessonPage || 1}
                    totalPages={chapter.totalLessonPages}
                    onPageChange={onPageChange}
                />
            )}
        </>
    );
});

export default ListLesson;