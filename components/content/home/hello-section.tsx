'use client'

import React, { useMemo } from 'react';
import { brand } from '@/constants';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Youtube, Calendar, BookOpen } from 'lucide-react';
import { MotionDiv, fadeIn, staggerContainer } from '@/components/shared/hoc';

interface StatBlockProps {
  color: string;
  number: string;
  text: string;
  icon: React.ReactNode;
}

const StatBlock: React.FC<StatBlockProps> = React.memo(({ color, number, text, icon }) => {
  const colorClass = useMemo(() => {
    switch (color) {
      case 'violet': return 'text-violet-500 dark:text-violet-400';
      case 'green': return 'text-green-600 dark:text-green-400';
      case 'pink': return 'text-pink-500 dark:text-pink-400';
      case 'orange': return 'text-orange-400 dark:text-orange-300';
      default: return '';
    }
  }, [color]);

  return (
    <Card className="bg-blue-750 border-blue-950 h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="flex flex-col items-center justify-center p-4 h-full">
        <div className={`${colorClass} mb-2 text-2xl`}>{icon}</div>
        <p className={`font-bold mb-1 ${colorClass} text-xl sm:text-2xl md:text-3xl lg:text-4xl`}>
          {number}
        </p>
        <p className="text-center text-xs sm:text-sm md:text-base lg:text-lg text-gray-300">{text}</p>
      </CardContent>
    </Card>
  );
});

StatBlock.displayName = 'StatBlock';

const HelloSection: React.FC = () => {
  const stats: StatBlockProps[] = useMemo(() => [
    { color: 'violet', number: '5K+', text: 'Học viên đã đào tạo', icon: <Users /> },
    { color: 'green', number: '10K+', text: 'Người theo dõi trên YouTube', icon: <Youtube /> },
    { color: 'pink', number: '20+', text: 'Năm kinh nghiệm', icon: <Calendar /> },
    { color: 'orange', number: '20+', text: 'Khóa học lập trình', icon: <BookOpen /> },
  ], []);

  return (
    <MotionDiv
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="flex flex-col mb-8 my-4 px-3 sm:px-4 lg:px-6"
    >
      <MotionDiv variants={fadeIn({ direction: 'up', type: 'tween', delay: 0.2, duration: 1 })} className="my-10 mb-5 text-center">
        <Badge variant="secondary" className="font-medium my-3 text-violet-500 text-xs sm:text-sm tracking-wider uppercase">Chào bạn nhé,</Badge>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3">Mình là {brand.author.name}</h2>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mt-2">(Founder of {brand.name})</p>
      </MotionDiv>
      <MotionDiv variants={fadeIn({ direction: 'up', type: 'tween', delay: 0.4, duration: 1 })} className="flex flex-col items-center">
        <p className="mb-8 text-center max-w-[50ch] text-base sm:text-lg md:text-xl lg:text-2xl lg:leading-relaxed text-gray-300">
          Bạn đang cảm thấy bế tắc hoặc quá tải trong hành trình lập trình của mình? Đừng lo lắng, mình sẽ hỗ trợ bạn! Cùng nhau, chúng ta sẽ nâng cao kỹ năng, tăng tiềm năng thu nhập và xây dựng một tương lai tươi sáng hơn.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center mx-auto my-16 w-full">
          {stats.map((stat, index) => (
            <MotionDiv key={index} variants={fadeIn({ direction: 'up', type: 'spring', delay: index * 0.1, duration: 0.5 })} className="h-full">
              <StatBlock {...stat} />
            </MotionDiv>
          ))}
        </div>
      </MotionDiv>
    </MotionDiv>
  );
};

export default React.memo(HelloSection);
