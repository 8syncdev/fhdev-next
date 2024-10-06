import React, { memo } from 'react'
import Image, { StaticImageData } from 'next/image'
import './style.css'
import { urlImageCourse } from '@/constants/seo/firebase/image-upload'

const SlidePicDEV = memo(({ listImgProps = [] }: { listImgProps?: (string | StaticImageData)[] }) => {
    const defaultTechList = [
        urlImageCourse['nodejs'],
        urlImageCourse['javascript'],
        urlImageCourse['html-css'],
        urlImageCourse['typescript'],
        urlImageCourse['react-ts'],
        urlImageCourse['database'],
        urlImageCourse['python'],
        urlImageCourse['java'],
        urlImageCourse['csharp']
    ]

    const listImg = listImgProps.length > 0 ? listImgProps : defaultTechList

    return (
        <div className="slider">
            <div className="rotator">
                {listImg.map((item, index) => (
                    <div key={index} className="items grid place-items-center p-1 lg:w-[10rem] w-[6rem]">
                        <Image src={item} alt='' width={120} height={120} className='object-contain w-full h-full rounded-md' />
                    </div>
                ))}
            </div>
        </div>
    )
})

SlidePicDEV.displayName = 'SlidePicDEV'

export default SlidePicDEV