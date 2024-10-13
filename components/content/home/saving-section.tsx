'use client'

import React, { useMemo } from 'react';
import { CheckIcon, Clock, Video, Globe, ShieldCheck, ArrowRight } from 'lucide-react';
import { MotionDiv, fadeIn, staggerContainer, zoomIn, bounceIn, rotateIn } from '@/components/shared/hoc';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from 'next/link';
import { BlurDeco } from '@/components/shared';

interface PlanProps {
  title: string;
  originalPrice: string;
  discountedPrice: string;
  duration: string;
  features: string[];
  icon: React.ReactNode;
  color: 'blue' | 'purple' | 'green';
}

const Plan: React.FC<PlanProps> = React.memo(({ title, originalPrice, discountedPrice, duration, features, icon, color }) => {
  const borderColors = {
    blue: 'border-blue-500',
    purple: 'border-purple-500',
    green: 'border-green-500'
  };

  const bgColors = {
    blue: 'bg-blue-900/20',
    purple: 'bg-purple-900/20',
    green: 'bg-green-900/20'
  };

  const textColors = {
    blue: 'text-blue-400',
    purple: 'text-purple-400',
    green: 'text-green-400'
  };

  const buttonColors = {
    blue: 'bg-blue-700 hover:bg-blue-600',
    purple: 'bg-purple-700 hover:bg-purple-600',
    green: 'bg-green-700 hover:bg-green-600'
  };

  return (
    <MotionDiv
      variants={fadeIn({ direction: 'up', type: 'spring', delay: 0.2, duration: 0.5 })}
      className="h-full"
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
    >
      <Card className={`w-full bg-transparent ${borderColors[color]} border-2 rounded-lg overflow-hidden shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] transition-all duration-300 flex flex-col h-full`}>
        <CardHeader className={`${bgColors[color]} p-6`}>
          <MotionDiv
            initial={{ scale: 1, rotate: 0 }}
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className={`w-16 h-16 mx-auto mb-4 rounded-full ${bgColors[color]} flex items-center justify-center`}
          >
            {icon}
          </MotionDiv>
          <CardTitle className={`text-2xl font-bold text-center ${textColors[color]} mb-2`}>{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-6 flex-grow">
          <div className="text-center mb-6">
            <span className="text-gray-500 line-through">{originalPrice}</span>
            <MotionDiv
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <p className={`text-4xl font-bold ${textColors[color]}`}>{discountedPrice}</p>
            </MotionDiv>
            <p className="text-sm text-gray-400">{duration}</p>
          </div>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <li className="flex items-center">
                  <CheckIcon className={`w-5 h-5 ${textColors[color]} mr-2 flex-shrink-0`} />
                  <span className="text-sm text-gray-300">{feature}</span>
                </li>
              </MotionDiv>
            ))}
          </ul>
        </CardContent>
        <div className="p-6 mt-auto">
          <Button className={`w-full ${buttonColors[color]} text-white transition-all duration-300`} asChild>
            <Link href="/contact/reg-combo-course">
              <MotionDiv
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center"
              >
                Đăng Ký Ngay
                <ArrowRight className="ml-2 h-5 w-5" />
              </MotionDiv>
            </Link>
          </Button>
        </div>
      </Card>
    </MotionDiv>
  );
});

Plan.displayName = 'Plan';

const SavingSection: React.FC = () => {
  const plans: PlanProps[] = useMemo(() => [
    {
      title: "BASIC",
      originalPrice: "4500K",
      discountedPrice: "3300K",
      duration: "6 tháng",
      features: [
        "45 buổi học CNTT chuyên sâu",
        "Tập sách song ngữ Anh - Việt",
        "45 slide, tài liệu buổi học",
        "45 bài học qua video"
      ],
      icon: <Clock className="w-8 h-8 text-blue-400" />,
      color: "blue"
    },
    {
      title: "PREMIUM",
      originalPrice: "7500K",
      discountedPrice: "5200K",
      duration: "8 tháng",
      features: [
        "45 buổi học CNTT chuyên sâu",
        "2 buổi tiếng anh",
        "3 tập sách song ngữ Anh - Việt",
        "63 slide, video tài liệu buổi học",
        "Nhóm kèm riêng Vip",
        "Học lại miễn phí 1 lần"
      ],
      icon: <Video className="w-8 h-8 text-purple-400" />,
      color: "purple"
    },
    {
      title: "LUXURY",
      originalPrice: "12000K",
      discountedPrice: "8000K",
      duration: "10 tháng",
      features: [
        "90 buổi học CNTT chuyên sâu",
        "5 buổi tiếng anh",
        "Kiểm tra, sửa chữa từng bài tập",
        "108 slide, video, tài liệu buổi học",
        "Học lại miễn phí 2 lần"
      ],
      icon: <Globe className="w-8 h-8 text-green-400" />,
      color: "green"
    }
  ], []);

  return (
    <MotionDiv
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="container my-16 relative"
    >
      <BlurDeco brightness={10} variant='gradient' />
      <MotionDiv variants={fadeIn({ direction: 'up', type: 'spring', delay: 0.2, duration: 0.5 })}>
        <h2 className="text-3xl font-bold text-center text-white mb-4">Chọn Gói Phù Hợp Với Bạn</h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Đầu tư vào kiến thức của bạn với các gói học tập được thiết kế để phù hợp với mọi nhu cầu và ngân sách. Bắt đầu hành trình học tập của bạn ngay hôm nay!
        </p>
      </MotionDiv>
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
        {plans.map((plan, index) => (
          <MotionDiv
            key={index}
            variants={fadeIn({ direction: 'up', type: 'spring', delay: index * 0.2, duration: 0.5 })}
          >
            <Plan {...plan} />
          </MotionDiv>
        ))}
      </div>
      <MotionDiv 
        variants={bounceIn({ delay: 0.5, duration: 0.7 })}
        className="mt-12 text-center"
      >
        <Badge variant="secondary" className="mb-4 text-violet-400">Cam Kết Chất Lượng</Badge>
        <MotionDiv
          variants={rotateIn({ delay: 0.7, duration: 0.5 })}
          className="flex items-center justify-center mb-4"
        >
          <ShieldCheck className="w-8 h-8 text-green-400 mr-2" />
        </MotionDiv>
        <p className="text-white text-lg font-semibold">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hoàn tiền 100% nếu không hài lòng sau 2-3 buổi học đầu tiên
          </MotionDiv>
        </p>
      </MotionDiv>
    </MotionDiv>
  );
};

export default React.memo(SavingSection);
