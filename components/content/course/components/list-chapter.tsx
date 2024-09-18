import React from 'react';
import { Collapse } from '@/components/shadcn';
import ListLesson from './list-lesson';
import { Chapter, Lesson } from '@/server/course.type';

// Extend the Chapter type to include lessons
interface ChapterWithLessons extends Chapter {
    lessons?: { [page: number]: Lesson[] };
    totalLessonPages?: number;
    currentLessonPage?: number;
}

const ListChapter: React.FC<{
    chapters: ChapterWithLessons[];
    expandedChapter: number | null;
    toggleChapter: (chapterId: number) => void;
    isLoadingLessons: boolean;
    handleLessonPageChange: (page: number, chapterId: number) => void;
    handlePreviewLesson: (lessonId: number) => void;
}> = React.memo(({
    chapters,
    expandedChapter,
    toggleChapter,
    isLoadingLessons,
    handleLessonPageChange,
    handlePreviewLesson
}) => (
    <>
        {chapters.map((chapter) => (
            <Collapse
                key={chapter.id}
                title={chapter.name}
                isOpen={expandedChapter === chapter.id}
                onToggle={() => toggleChapter(chapter.id)}
            >
                <ListLesson
                    chapter={chapter}
                    isExpanded={expandedChapter === chapter.id}
                    isLoading={isLoadingLessons}
                    onPageChange={(page) => handleLessonPageChange(page, chapter.id)}
                    onPreviewLesson={handlePreviewLesson}
                />
            </Collapse>
        ))}
    </>
));

export default ListChapter;