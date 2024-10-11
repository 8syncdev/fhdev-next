'use client'

import React, { useMemo } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MotionDiv } from '@/components/shared/hoc';
import { fadeIn, staggerContainer, bounceIn, zoomIn } from '@/components/shared/hoc/motion/animations';
import { infoDev, infoDevType } from '@/constants/mentors';
import { BlurDeco } from '@/components/shared';
import { Code2, Briefcase, Trophy, ExternalLink, GraduationCap, Award, Star, Book, Clock } from 'lucide-react';

const MentorCard: React.FC<{ mentor: infoDevType; index: number }> = React.memo(({ mentor, index }) => {
    return (
        <MotionDiv
            variants={fadeIn({
                direction: 'up',
                type: 'spring',
                delay: index * 0.1,
                duration: 0.75
            })}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="h-full flex flex-col"
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
        >
            <Card className="h-full bg-transparent border-blue-500/30 shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] transition-all duration-300 flex flex-col">
                <CardHeader className="text-center">
                    <MotionDiv
                        variants={zoomIn({ delay: 0.2, duration: 0.5 })}
                        className="relative w-32 h-32 mx-auto mb-4"
                    >
                        <Image
                            src={mentor.srcImg}
                            alt={mentor.name}
                            layout="fill"
                            objectFit="contain"
                            className="rounded-full bg-background shadow-[0_0_15px_rgba(0,255,255,0.3)] bg-center"
                        />
                    </MotionDiv>
                    <CardTitle className="text-2xl font-bold text-white">{mentor.name}</CardTitle>
                    <CardDescription className="text-cyan-300">{mentor.position}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 flex-grow">
                    <div>
                        <h4 className="text-lg font-semibold text-violet-300 flex items-center gap-2 mb-2">
                            <Code2 size={20} />
                            Ngôn ngữ chính
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {mentor.mainLanguage.map((lang, idx) => (
                                <Badge key={idx} variant="secondary" className="bg-violet-700/30 text-violet-200">
                                    {lang}
                                </Badge>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-pink-300 flex items-center gap-2 mb-2">
                            <Briefcase size={20} />
                            Framework chính
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {mentor.mainFrameWork.map((framework, idx) => (
                                <Badge key={idx} variant="secondary" className="bg-pink-700/30 text-pink-200">
                                    {framework}
                                </Badge>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-yellow-300 flex items-center gap-2 mb-2">
                            <Trophy size={20} />
                            Thành tích
                        </h4>
                        <ul className="space-y-2">
                            {mentor.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <Award size={16} className="text-yellow-400 mt-1 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">{achievement.title}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </CardContent>
                <CardFooter className="mt-auto">
                    <Button variant="outline" className="w-full text-cyan-300 hover:text-cyan-100 border-cyan-500/50 hover:bg-cyan-500/20 group transition-all duration-300">
                        Xem hồ sơ
                        <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                </CardFooter>
            </Card>
        </MotionDiv>
    );
});

MentorCard.displayName = 'MentorCard';

const MentorSection: React.FC = () => {
    const mentors = useMemo(() => infoDev, []);

    return (
        <MotionDiv
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="relative py-16"
        >
            <BlurDeco brightness={10} variant='gradient' />
            <div className="container mx-auto px-4">
                <MotionDiv variants={bounceIn({ delay: 0.2, duration: 0.5 })} className="text-center mb-12">
                    <Badge variant="secondary" className="mb-4 text-violet-400">Đội ngũ giảng viên</Badge>
                    <h2 className="text-4xl font-bold text-white mb-4">Gặp gỡ các chuyên gia hướng dẫn của chúng tôi</h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Học hỏi từ các chuyên gia trong ngành với nhiều năm kinh nghiệm trong lĩnh vực của họ.
                    </p>
                </MotionDiv>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mentors.map((mentor, index) => (
                        <MentorCard key={mentor.name} mentor={mentor} index={index} />
                    ))}
                </div>
            </div>
        </MotionDiv>
    );
};

export default MentorSection;
