'use client'

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, BarChart, PlayCircle, ListChecks, Download, Code, Infinity, Clock } from 'lucide-react';
import { BlurDeco } from '@/components/shared';

interface Feature {
    name: string;
    icon: string;
}

interface Project {
    name: string;
    desc: string;
}

interface CourseDetailProps {
    content: {
        overview: {
            level: string;
            video_content: string;
            lesson_count: number;
            features: Feature[];
        };
        about: {
            title: string;
            desc: string;
            points: string[];
            journey: string[];
            projects: Project[];
            audience: string;
        };
        skills: {
            title: string;
            list: string[];
        };
        highlights: {
            title: string;
            points: string[];
        };
        for_who: {
            title: string;
            list: string[];
        };
        beginner_friendly: {
            title: string;
            desc: string;
            details: string[];
            key_points: string[];
        };
        roadmap: {
            chapter_id: number;
            chapter_name: string;
            lessons: {
                lesson_id: number;
                lesson_name: string;
                content_type: string[];
            }[];
        }[];
    };
}

const CourseOverview: React.FC<{ content: CourseDetailProps['content']['overview'] }> = ({ content }) => {
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'bar-chart-line': return <BarChart className="mr-4 inline text-violet-500 dark:text-blue-350" size={20} strokeWidth={3.5} />;
            case 'play-circle-fill': return <PlayCircle className="mr-4 inline text-violet-500 dark:text-blue-350" size={20} strokeWidth={3.5} />;
            case 'list-check': return <ListChecks className="mr-4 inline text-violet-500 dark:text-blue-350" size={20} strokeWidth={3.5} />;
            case 'cloud-arrow-down': return <Download className="mr-4 inline text-violet-500 dark:text-blue-350" size={20} strokeWidth={3.5} />;
            case 'code-square': return <Code className="mr-4 inline text-violet-500 dark:text-blue-350" size={20} strokeWidth={3.5} />;
            case 'infinity': return <Infinity className="mr-4 inline text-violet-500 dark:text-blue-350" size={20} strokeWidth={3.5} />;
            case 'clock-history': return <Clock className="mr-4 inline text-violet-500 dark:text-blue-350" size={20} strokeWidth={3.5} />;
            default: return null;
        }
    };

    return (
        <section>
            <BlurDeco variant="gradient" color="violet" />
            <div className="p-6 md:p-10 lg:p-12 whitespace-nowrap border-2 border-gray-800 rounded-md border-t-0">
                <h2 className="font-semibold text-lg uppercase tracking-wide mb-0">Course Overview</h2>
                <div className="h-[5px] bg-gradient-to-r from-pink-500 to-violet-600 w-16 mt-4 mb-10"></div>
                <ul className="space-y-4 font-normal text-blue-550 dark:text-blue-300">
                    {content.features.map((feature, index) => (
                        <li key={index}>
                            {getIcon(feature.icon)}
                            {feature.name}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

const CourseDetail: React.FC<CourseDetailProps> = ({ content }) => {
    const [expandedChapter, setExpandedChapter] = useState<number | null>(null);

    const toggleChapter = (chapterId: number) => {
        setExpandedChapter(expandedChapter === chapterId ? null : chapterId);
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">{content.about.title}</h1>

            <CourseOverview content={content.overview} />

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">About This Course</h2>
                <p className="mb-4">{content.about.desc}</p>
                <ul className="list-disc pl-5 mb-4">
                    {content.about.points.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
                <h3 className="text-xl font-semibold mb-2">Your Learning Journey</h3>
                <ul className="list-disc pl-5 mb-4">
                    {content.about.journey.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ul>
                <h3 className="text-xl font-semibold mb-2">Projects You'll Build</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {content.about.projects.map((project, index) => (
                        <div key={index} className="border p-4 rounded">
                            <h4 className="font-semibold mb-2">{project.name}</h4>
                            <p>{project.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{content.skills.title}</h2>
                <ul className="list-disc pl-5">
                    {content.skills.list.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{content.highlights.title}</h2>
                <ul className="list-disc pl-5">
                    {content.highlights.points.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{content.for_who.title}</h2>
                <ul className="list-disc pl-5">
                    {content.for_who.list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{content.beginner_friendly.title}</h2>
                <p className="mb-4">{content.beginner_friendly.desc}</p>
                <ul className="list-disc pl-5 mb-4">
                    {content.beginner_friendly.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                    ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                    {content.beginner_friendly.key_points.map((point, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{point}</span>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">Course Content</h2>
                {content.roadmap.map((chapter) => (
                    <div key={chapter.chapter_id} className="mb-4">
                        <Button
                            onClick={() => toggleChapter(chapter.chapter_id)}
                            className="w-full text-left flex justify-between items-center"
                        >
                            <span>{chapter.chapter_name}</span>
                            {expandedChapter === chapter.chapter_id ? <ChevronUp /> : <ChevronDown />}
                        </Button>
                        {expandedChapter === chapter.chapter_id && (
                            <ul className="pl-5 mt-2">
                                {chapter.lessons.map((lesson) => (
                                    <li key={lesson.lesson_id} className="mb-1">
                                        {lesson.lesson_name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </section>
        </div>
    );
};

export default CourseDetail;
