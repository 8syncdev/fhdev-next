'use client'

import React from 'react';
import { CheckIcon } from 'lucide-react';
import { LearningSvg } from '@/components/shared/svg';
import { MotionDiv, fadeIn, staggerContainer } from '@/components/shared/hoc';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

interface FeatureListProps {
  features: string[];
}

const FeatureList: React.FC<FeatureListProps> = React.memo(({ features }) => (
  <ul className="mb-8 space-y-4 text-left">
    {features.map((item, index) => (
      <MotionDiv
        key={index}
        variants={fadeIn({ direction: 'up', type: 'spring', delay: index * 0.1, duration: 0.5 })}
        className="flex flex-row items-start space-x-3"
      >
        <CheckIcon className="w-5 h-5 text-white stroke-2" />
        <span className="font-medium md:font-semibold text-white">{item}</span>
      </MotionDiv>
    ))}
  </ul>
));

FeatureList.displayName = 'FeatureList';

interface SavingSectionProps {
  features?: string[];
  buttonText?: string;
  buttonHref?: string;
}

const SavingSection: React.FC<SavingSectionProps> = ({
  features = [
    "Truy cập toàn bộ khóa học",
    "Tài liệu biên soạn mới",
    "Sách tiếng Anh chuyên ngành song ngữ",
    "Hỗ trợ 24/7",
    "Đảm bảo hoàn tiền trong 30 ngày"
  ],
  buttonText = "Đăng Ký Ngay",
  buttonHref = "/course"
}) => {
  return (
    <MotionDiv
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="container flex justify-center my-32"
    >
      <Card className="pt-10 relative w-full md:max-w-[450px] bg-transparent border-blue-950" role="enrollment-card">
        <MotionDiv
          variants={fadeIn({ direction: 'down', type: 'spring', delay: 0.2, duration: 0.5 })}
          className="absolute -top-10 -left-3 md:-top-8 md:-left-3 lg:-left-10 lg:-top-12 w-24 z-10"
        >
          <LearningSvg className='w-full h-full text-violet-500' />
        </MotionDiv>
        <CardContent className="px-6 md:px-8 lg:px-12 py-12 flex flex-col items-center">
          <FeatureList features={features} />
          <Button
            asChild
            className="bg-gradient-to-r from-pink-500 to-violet-600 text-white hover:from-pink-600 hover:to-violet-700"
          >
            <Link href={buttonHref}>{buttonText}</Link>
          </Button>
          <p className="my-2 text-sm font-semibold text-white">Tư vấn miễn phí!</p>
        </CardContent>
      </Card>
    </MotionDiv>
  );
};

export default React.memo(SavingSection);
