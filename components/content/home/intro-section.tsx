'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { brand } from '@/constants'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MotionDiv, fadeIn, staggerContainer } from '@/components/shared/hoc'
import { BlockCode } from '@/components/shared'
import SlidePicDEV from '@/components/dev/slidepic/slide-pic'
import { pet } from '@/constants/image'

const IntroSection: React.FC = React.memo(() => {
    return (
        <MotionDiv
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="container grid gap-6 md:grid-cols-2 items-center py-12"
        >
            <MotionDiv variants={fadeIn({ direction: 'right', type: 'tween', delay: 0.2, duration: 1 })}>
                <h1 className="text-4xl lg:text-[2.8rem] font-extrabold leading-tight text-white mb-4">
                    Fullhouse Dev trung tâm duy nhất <span className="text-fuchsia-400">100% giáo viên đạt giải</span> <span className="text-emerald-300">quốc gia</span>, <span className="text-amber-300">quốc tế</span>
                </h1>
                <p className="text-gray-300 text-lg mb-3">
                    Hệ thống website với <span className="font-semibold text-lime-300">3000 bài tập</span> tích hợp <span className="font-semibold text-cyan-300">AI đồng hành</span> trên từng dòng code
                </p>
                <div className="flex items-center">
                    <div className="transition-transform hover:scale-105">
                        <Button asChild className="group bg-gradient-to-r from-fuchsia-500 to-cyan-500 hover:from-fuchsia-600 hover:to-cyan-600 text-lg py-6 px-8">
                            <Link href="/course">
                                Bắt đầu ngay
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </div>
                    <div className="transition-transform hover:scale-105">
                        <Image
                            src={pet}
                            alt="Pet"
                            className="w-48 h-48 ml-6"
                        />
                    </div>
                </div>
            </MotionDiv>
            
            <MotionDiv variants={fadeIn({ direction: 'left', type: 'tween', delay: 0.4, duration: 1 })}>
                <SlidePicDEV />
            </MotionDiv>
        </MotionDiv>
    )
})

IntroSection.displayName = 'IntroSection'

export default IntroSection