'use client'

import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, BarChart, PlayCircle, ListChecks, Download, Code, Infinity, Clock, Star, HelpCircle, CheckCircle } from 'lucide-react';
import { BlurDeco } from '@/components/shared';
import { ContentCourse } from './components'
import { CourseDetailProps } from '@/server/course.type';



const CourseOverview: React.FC<{ content: CourseDetailProps['content']['content_json']['overview'] }> = ({ content }) => {
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
        <section className='relative'>
            <BlurDeco variant="gradient" color="violet" zIndex={1}/>
            <div className="p-6 md:p-10 lg:p-12 whitespace-nowrap border-2 border-gray-800 rounded-md border-t-0">
                <h2 className="font-semibold text-lg uppercase tracking-wide mb-0">Tổng quan</h2>
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

const AboutSection: React.FC<{ content: CourseDetailProps['content']['content_json']['about'] }> = ({ content }) => (
    <section className="mb-8">
        <div className="grid grid-cols-1 gap-8 my-10">
            <div className="">
                <div className="grid place-items-center w-12 h-12 rounded-full my-3 bg-primary/20">
                    <div className="bg-violet-400 rounded-full">
                        <HelpCircle size={30} className='text-violet-950'/>
                    </div>
                </div>
                <span className="text-violet-60 mb-3 inline-block font-medium md:font-semibold">Thông tin khóa học 🩷</span>
                <h2 className="text-3xl font-bold text-white">{content.title}</h2>
                <div className="max-w-prose">
                    <p>{content.desc}</p>
                    {content.points.map((point, index) => (
                        <p key={index} className="flex items-start mt-2">
                            <CheckCircle className="mr-2 text-green-500 flex-shrink-0" size={20} />
                            <span>{point}</span>
                        </p>
                    ))}
                </div>
            </div>
        </div>
        <h3 className="text-xl font-semibold mb-4">Lộ trình chi tiết</h3>
        <ul className="space-y-3 mb-6">
            {content.journey.map((step, index) => (
                <li key={index} className="flex items-start bg-gray-800 p-3 rounded-lg">
                    <span className="bg-violet-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">{index + 1}</span>
                    <span>{step}</span>
                </li>
            ))}
        </ul>
        <h3 className="text-xl font-semibold mb-4">Dự án bạn được hướng dẫn</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.projects.map((project, index) => (
                <div key={index} className="border border-gray-700 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <h4 className="font-semibold mb-3 text-lg">{project.name}</h4>
                    <p className="text-gray-300">{project.desc}</p>
                </div>
            ))}
        </div>
    </section>
);

const SkillsSection: React.FC<{ content: CourseDetailProps['content']['content_json']['skills'] }> = ({ content }) => (
    <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{content.title}</h2>
        <ul className="list-disc pl-5">
            {content.list.map((skill, index) => (
                <li key={index}>{skill}</li>
            ))}
        </ul>
    </section>
);

const HighlightsSection: React.FC<{ content: CourseDetailProps['content']['content_json']['highlights'] }> = ({ content }) => (
    <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{content.title}</h2>
        <ul className="list-disc pl-5">
            {content.points.map((point, index) => (
                <li key={index}>{point}</li>
            ))}
        </ul>
    </section>
);

const ForWhoSection: React.FC<{ content: CourseDetailProps['content']['content_json']['for_who'] }> = ({ content }) => (
    <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{content.title}</h2>
        <ul className="list-disc pl-5">
            {content.list.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </section>
);

const BeginnerFriendlySection: React.FC<{ content: CourseDetailProps['content']['content_json']['beginner_friendly'] }> = ({ content }) => (
    <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{content.title}</h2>
        <p className="mb-4">{content.desc}</p>
        <ul className="list-disc pl-5 mb-4">
            {content.details.map((detail, index) => (
                <li key={index}>{detail}</li>
            ))}
        </ul>
        <div className="flex flex-wrap gap-2">
            {content.key_points.map((point, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{point}</span>
            ))}
        </div>
    </section>
);

const CourseHeader: React.FC<{ content: CourseDetailProps['content'] }> = ({ content }) => (
    <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className='flex-1 group'>
            <h1 className="text-3xl font-bold mb-6 text-white">{content.name}</h1>
            <p className="mb-4">{content.description}</p>
            <div className="flex items-center mb-4">
                <span className="mr-2">4.8</span>
                <Star className="text-yellow-400" />
                <span className="ml-2">3661 đánh giá</span>
            </div>
            <div className='cta bg-background/80 border-2 border-blue-950 p-4 rounded-lg group-hover:border-blue-400 transition-colors duration-300 ease-in-out'>
                <p className="mb-2">Đăng ký để truy cập khóa học vĩnh viễn</p>
                <div>
                    <Button className="w-full h-14 text-xl">
                        Đăng ký
                    </Button>
                </div>
            </div>
        </div>
        <div className='flex-1'>
            <CourseOverview content={content.content_json.overview} />
        </div>
    </div>
);



const CourseDetail: React.FC<CourseDetailProps> = ({ courseId, content }) => {
    if (!content || !content.content_json) {
        return null; // or return a loading state or error message
    }

    const {
        about,
        skills,
        highlights,
        for_who,
        beginner_friendly
    } = content.content_json;

    return (
        <div className="max-w-4xl mx-auto p-6">
            <CourseHeader content={content} />
            {about && <AboutSection content={about} />}
            {skills && <SkillsSection content={skills} />}
            {highlights && <HighlightsSection content={highlights} />}
            {for_who && <ForWhoSection content={for_who} />}
            {beginner_friendly && <BeginnerFriendlySection content={beginner_friendly} />}
            <ContentCourse courseId={courseId} />
        </div>
    );
};

export default CourseDetail;
