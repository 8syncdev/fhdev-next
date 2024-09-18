import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { getChapters, getLessons, getLessonContent, getRoadmapDetail } from '@/server';
import type { ChaptersResponse, LessonsResponse, LessonContent, LessonContentResponse, ChapterWithLessons } from '@/server/course.type';
import CustomPagination from '@/components/shadcn/pagination';
import { CustomDialog } from '@/components/shadcn';
import { ChapterSkeleton } from '@/components/loading';
import { VideoShow } from '@/components/dev';
import ListChapter from './list-chapter';

const ContentCourse: React.FC<{ courseId: string }> = React.memo(({ courseId }) => {
    const [chapters, setChapters] = useState<ChapterWithLessons[]>([]);
    const [expandedChapter, setExpandedChapter] = useState<number | null>(null);
    const [isLoadingChapters, setIsLoadingChapters] = useState(true);
    const [isLoadingLessons, setIsLoadingLessons] = useState(false);
    const [currentChapterPage, setCurrentChapterPage] = useState(1);
    const [totalChapterPages, setTotalChapterPages] = useState(1);
    const [fetchedChapterPages, setFetchedChapterPages] = useState<Set<number>>(new Set());
    const [dialogState, setDialogState] = useState<{isOpen: boolean; title: string; content: React.ReactNode | null}>({
        isOpen: false,
        title: '',
        content: null
    });

    const fetchChapters = useCallback(async (page: number) => {
        if (fetchedChapterPages.has(page)) return;

        setIsLoadingChapters(true);
        try {
            const chaptersData: ChaptersResponse = await getChapters(courseId, page);
            if (chaptersData.results.length === 0) {
                const staticData = await getRoadmapDetail(courseId);
                setChapters(staticData);
                setTotalChapterPages(1);
            } else {
                setChapters(prevChapters => {
                    const newChapters = [...prevChapters];
                    const startIndex = (page - 1) * 10;
                    chaptersData.results.forEach((chapter, index) => {
                        newChapters[startIndex + index] = {
                            ...chapter,
                            currentLessonPage: 1,
                            totalLessonPages: 1
                        };
                    });
                    return newChapters;
                });
                setTotalChapterPages(Math.ceil(chaptersData.count / 10));
            }
            setFetchedChapterPages(prev => new Set(prev).add(page));
        } catch (error) {
            console.error("Error fetching chapters:", error);
            const staticData = await getRoadmapDetail(courseId);
            setChapters(staticData);
            setTotalChapterPages(1);
        } finally {
            setIsLoadingChapters(false);
        }
    }, [courseId, fetchedChapterPages]);

    useEffect(() => {
        fetchChapters(1);
    }, [fetchChapters]);

    const toggleChapter = useCallback(async (chapterId: number) => {
        setExpandedChapter(prevExpanded => prevExpanded === chapterId ? null : chapterId);
        
        const chapter = chapters.find(chapter => chapter.id === chapterId);
        if (chapter?.lessons && chapter.lessons[1]) return;

        setIsLoadingLessons(true);
        try {
            const lessonsData: LessonsResponse = await getLessons(chapterId.toString(), 1);
            setChapters(prevChapters =>
                prevChapters.map(chapter =>
                    chapter.id === chapterId
                        ? { 
                            ...chapter, 
                            lessons: {
                                ...chapter.lessons,
                                [1]: lessonsData.results
                            },
                            totalLessonPages: Math.ceil(lessonsData.count / 10),
                            currentLessonPage: 1
                        }
                        : chapter
                )
            );
        } catch (error) {
            console.error("Error fetching lessons:", error);
        } finally {
            setIsLoadingLessons(false);
        }
    }, [chapters]);

    const handleChapterPageChange = useCallback((page: number) => {
        if (page >= 1 && page <= totalChapterPages && page !== currentChapterPage) {
            setCurrentChapterPage(page);
            fetchChapters(page);
        }
    }, [currentChapterPage, totalChapterPages, fetchChapters]);

    const handleLessonPageChange = useCallback((page: number, chapterId: number) => {
        setChapters(prevChapters => 
            prevChapters.map(chapter => 
                chapter.id === chapterId
                    ? { ...chapter, currentLessonPage: page }
                    : chapter
            )
        );

        const chapter = chapters.find(chapter => chapter.id === chapterId);
        if (chapter?.lessons && chapter.lessons[page]) return;

        setIsLoadingLessons(true);
        getLessons(chapterId.toString(), page)
            .then((lessonsData: LessonsResponse) => {
                setChapters(prevChapters =>
                    prevChapters.map(chapter =>
                        chapter.id === chapterId
                            ? { 
                                ...chapter, 
                                lessons: {
                                    ...chapter.lessons,
                                    [page]: lessonsData.results
                                },
                                totalLessonPages: Math.ceil(lessonsData.count / 10),
                                currentLessonPage: page
                            }
                            : chapter
                    )
                );
            })
            .catch(error => {
                console.error("Error fetching lessons:", error);
            })
            .finally(() => {
                setIsLoadingLessons(false);
            });
    }, [chapters]);

    const handlePreviewLesson = useCallback(async (lessonId: number) => {
        try {
            const lessonContentResponse: LessonContentResponse = await getLessonContent(lessonId.toString());
            const lessonContent: LessonContent = {
                name: lessonContentResponse.detail.name,
                url_video: lessonContentResponse.detail.url_video,
                url_doc: lessonContentResponse.detail.url_doc,
                content: lessonContentResponse.detail.content
            };
            if (lessonContent.url_video) {
                setDialogState({
                    isOpen: true,
                    title: 'Xem thử bài học',
                    content: <VideoShow url={lessonContent.url_video} title={lessonContent.name} />
                });
            } else {
                console.error("No video URL available for this lesson");
            }
        } catch (error) {
            console.error("Error fetching lesson content:", error);
        }
    }, []);

    const currentChapters = useMemo(() => 
        chapters.slice((currentChapterPage - 1) * 10, currentChapterPage * 10),
        [chapters, currentChapterPage]
    );

    const renderChapterSkeletons = useMemo(() => 
        Array(10).fill(0).map((_, index) => <ChapterSkeleton key={index} />),
        []
    );

    return (
        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Lộ trình khóa học</h2>
            {isLoadingChapters && currentChapters.length === 0 ? (
                renderChapterSkeletons
            ) : (
                <>
                    <ListChapter
                        chapters={currentChapters}
                        expandedChapter={expandedChapter}
                        toggleChapter={toggleChapter}
                        isLoadingLessons={isLoadingLessons}
                        handleLessonPageChange={handleLessonPageChange}
                        handlePreviewLesson={handlePreviewLesson}
                    />
                    <CustomPagination
                        currentPage={currentChapterPage}
                        totalPages={totalChapterPages}
                        onPageChange={handleChapterPageChange}
                    />
                </>
            )}
            <CustomDialog
                isOpen={dialogState.isOpen}
                onClose={() => setDialogState(prev => ({ ...prev, isOpen: false }))}
                title={dialogState.title}
                content={dialogState.content}
                size='xl'
            />
        </section>
    );
});

ContentCourse.displayName = 'ContentCourse';

export default ContentCourse;