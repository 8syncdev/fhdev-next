import React from 'react';

const ChapterSkeleton: React.FC = React.memo(() => (
    <div className="mb-4 animate-pulse">
        <div className="h-12 bg-gray-700 rounded-lg"></div>
    </div>
));



const LessonSkeleton: React.FC = React.memo(() => (
    <div className="h-8 bg-gray-600 rounded mt-2 animate-pulse"></div>
));


export {
    ChapterSkeleton,
    LessonSkeleton,
}