import { BlockCode, Section } from '@/components/shared'
import React from 'react'
import Link from 'next/link'
import {
    brand,
    arrowIcon
} from '@/constants'
import Image from 'next/image'
import { ArrowSvg } from '@/components/svg'



const IntroSection: React.FC<{}> = () => {
    return (
        <Section
            columns={2}
        >
            <div className="p-2 pb-20 md:pb-10 flex flex-col justify-center items-start lg:pt-10 xl:max-w-xl">
                <h1 className="text-4xl lg:text-[2.6rem] md:font-extrabold lg:leading-[2.9rem] font-bold text-white leading-10">
                    Trở thành<span className="text-green-400 mx-2">kỹ sư phần mềm</span>mà các công ty<span className="text-pink-500 mx-2">thích tuyển dụng</span>
                </h1>
                <p className="leading-relaxed text-gray-300 text-lg my-5 md:my-7 md:text-xl">
                    Tất cả<strong className="text-white mx-1">các khóa học lập trình</strong>bạn cần để thành công<strong className="text-white mx-1">trong một nơi.</strong>
                </p>
                <Link href="#" className="group inline-block px-6 py-3 text-sm no-underline uppercase text-center text-white tracking-wider font-medium md:font-semibold rounded-full bg-gradient-to-r from-pink-500 to-violet-600 transition-all duration-200 ease-out hover:text-white hover:no-underline" role="button">
                    Bắt đầu ngay
                    <ArrowSvg className="w-4 h-4 inline-block transition-all duration-200 ease-out group-hover:ml-3" />
                </Link>
            </div>
            <div>
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
                    title='myInfo'
                />
            </div>

        </Section>
    )
}

export default IntroSection