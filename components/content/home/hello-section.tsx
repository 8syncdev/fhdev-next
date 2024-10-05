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
    <Card className="bg-blue-750 border-blue-950 h-full">
      <CardContent className="flex flex-col items-center justify-center p-6 h-full">
        <div className={`${colorClass} mb-2`}>{icon}</div>
        <p className={`font-bold mb-1 ${colorClass} text-2xl md:text-3xl lg:text-4xl`}>
          {number}
        </p>
        <p className="text-center text-sm lg:text-base">{text}</p>
      </CardContent>
    </Card>
  );
});

StatBlock.displayName = 'StatBlock';

const HelloSection: React.FC = () => {
  const stats: StatBlockProps[] = useMemo(() => [
    { color: 'violet', number: '10M+', text: 'Học viên đã đào tạo', icon: <Users size={24} /> },
    { color: 'green', number: '4M', text: 'Người theo dõi trên YouTube', icon: <Youtube size={24} /> },
    { color: 'pink', number: '20+', text: 'Năm kinh nghiệm', icon: <Calendar size={24} /> },
    { color: 'orange', number: '51', text: 'Khóa học lập trình', icon: <BookOpen size={24} /> },
  ], []);

  return (
    <MotionDiv
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="flex flex-col mb-10 my-5"
    >
      <MotionDiv variants={fadeIn({ direction: 'up', type: 'tween', delay: 0.2, duration: 1 })} className="my-12 mb-6 text-center">
        <Badge variant="secondary" className="font-medium my-4 text-violet-500 text-sm tracking-widest uppercase">Chào bạn nhé,</Badge>
        <h2 className="text-3xl">Mình là {brand.author.name} (Founder of {brand.name})</h2>
      </MotionDiv>
      <MotionDiv variants={fadeIn({ direction: 'up', type: 'tween', delay: 0.4, duration: 1 })} className="flex flex-col items-center">
        <p className="mb-10 text-center max-w-[50ch] text-lg lg:text-xl lg:leading-8">
          Bạn đang cảm thấy bế tắc hoặc quá tải trong hành trình lập trình của mình? Đừng lo lắng, mình sẽ hỗ trợ bạn! Cùng nhau, chúng ta sẽ nâng cao kỹ năng, tăng tiềm năng thu nhập và xây dựng một tương lai tươi sáng hơn.
        </p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 justify-center mx-auto my-20 w-full">
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
