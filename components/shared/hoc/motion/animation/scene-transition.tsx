'use client'

import React, { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import { brand } from '@/constants'

const mapPathName: Record<string, string> = {
    '/': 'Trang Chủ',
    'about': 'Giới Thiệu',
    'course': 'Khóa Học',
}

const getNameTransition = (pathName: string): string => {
    const key = Object.keys(mapPathName).find(k => pathName.includes(k))
    return key ? mapPathName[key] : '8 Sync Dev'
}

interface SceneTransitionProps {
    pathName: string;
    timeDuration?: number;
}

const SceneTransition: React.FC<SceneTransitionProps> = ({ pathName, timeDuration = 1 }) => {
    // const transitionName = useMemo(() => getNameTransition(pathName), [pathName])
    const transitionName = 'Loading ...'

    const sharedMotionProps = {
        initial: { height: "140vh" },
        animate: { height: "0vh" },
        transition: { duration: timeDuration, ease: "easeOut" }
    }

    return (
        <>
            <motion.div
                className="h-screen w-screen fixed rounded-b-[100px] z-40 bg-black/50"
                {...sharedMotionProps}
                exit={{ height: "140vh" }}
            />
            <motion.div
                className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: timeDuration + 0.3, ease: "easeOut" }}
            >
                <div>
                    <p className='mb-10 text-neon text-3xl'>{transitionName}</p>
                    <p className='text-2xl text-neon text-center'>Admin: {brand.author.name}</p>
                </div>
            </motion.div>
            <motion.div
                className="h-screen w-screen fixed rounded-t-[100px] bottom-0 z-30 bg-black/50"
                {...sharedMotionProps}
                animate={{ height: "0vh", transition: { delay: timeDuration, ease: 'easeOut' } }}
            />
        </>
    )
}

export default memo(SceneTransition)
