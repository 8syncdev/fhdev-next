'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { brand } from '@/constants'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MotionDiv, fadeIn, staggerContainer } from '@/components/shared/hoc'
import { BlockCode } from '@/components/shared'
import SlidePicDEV from '@/components/dev/slidepic/slide-pic'

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
                <h1 className="text-4xl lg:text-[2.6rem] font-extrabold leading-tight text-white mb-4">
                    Trở thành <span className="text-green-400">kỹ sư phần mềm</span> mà các công ty <span className="text-pink-500">thích tuyển dụng</span>
                </h1>
                <p className="text-gray-300 text-lg mb-6">
                    Tất cả <strong className="text-white">các khóa học lập trình</strong> bạn cần để thành công <strong className="text-white">trong một nơi.</strong>
                </p>
                <Button asChild className="group bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700">
                    <Link href="/course">
                        Bắt đầu ngay
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Button>
            </MotionDiv>
            
            <MotionDiv variants={fadeIn({ direction: 'left', type: 'tween', delay: 0.4, duration: 1 })}>
                {/* <Card className="bg-transparent border-blue-900">
                    <CardHeader>
                        <CardTitle className="text-white">myInfo</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <BlockCode
                            code={{
                                name: brand.author.name,
                                country: brand.author.country,
                                techStack: [...brand.author.techStack],
                                facebook: brand.author.facebook,
                                github: brand.author.github,
                                youtube: brand.author.youtube,
                                tiktok: brand.author.tiktok,
                                website: brand.author.website,
                            }}
                        />
                    </CardContent>
                </Card> */}
                <SlidePicDEV />
            </MotionDiv>
        </MotionDiv>
    )
})

IntroSection.displayName = 'IntroSection'

export default IntroSection