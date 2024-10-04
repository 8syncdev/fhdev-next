'use client'

import React, { useCallback, useMemo, useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import SceneTransition from '../animation/scene-transition'

interface SceneTransitionProviderProps {
    children: React.ReactNode;
}

const SceneTransitionProvider: React.FC<SceneTransitionProviderProps> = React.memo(({ children }) => {
    const pathName = usePathname()
    const timeDuration = 1.4// Match the default timeDuration in SceneTransition
    const [isTransitionComplete, setIsTransitionComplete] = useState(true)
    const [showContent, setShowContent] = useState(true)

    useEffect(() => {
        setIsTransitionComplete(false)
        setShowContent(false)
        
        const timer = setTimeout(() => {
            setIsTransitionComplete(true)
            setShowContent(true)
        }, timeDuration * 1000) // Convert to milliseconds

        return () => clearTimeout(timer)
    }, [pathName, timeDuration])

    const memoizedSceneTransition = useMemo(() => (
        <SceneTransition 
            pathName={pathName} 
            timeDuration={timeDuration*0.5}
        />
    ), [pathName, timeDuration])

    const memoizedMotionDivProps = useMemo(() => ({
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: timeDuration * 0.5 },
        className: 'relative z-50'
    }), [timeDuration])

    const renderContent = useCallback(() => (
        <React.Fragment key={pathName}>
            {!isTransitionComplete && memoizedSceneTransition}
            {showContent && (
                <motion.div {...memoizedMotionDivProps}>
                    {children}
                </motion.div>
            )}
        </React.Fragment>
    ), [pathName, isTransitionComplete, memoizedSceneTransition, memoizedMotionDivProps, children, showContent])

    return (
        <AnimatePresence mode='wait'>
            {renderContent()}
        </AnimatePresence>
    )
})

SceneTransitionProvider.displayName = 'SceneTransitionProvider'

export default SceneTransitionProvider
