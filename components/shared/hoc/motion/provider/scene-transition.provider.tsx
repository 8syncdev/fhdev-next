'use client'

import React, { useCallback, useMemo, useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import SceneTransition from '../animation/scene-transition'
import { fadeIn } from '../animations'

interface SceneTransitionProviderProps {
    children: React.ReactNode;
}

const SceneTransitionProvider: React.FC<SceneTransitionProviderProps> = React.memo(({ children }) => {
    const pathName = usePathname()
    const timeDuration = 1.4 // Match the default timeDuration in SceneTransition
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
            pathName={pathName ? pathName : ''} 
            timeDuration={timeDuration * 0.5}
        />
    ), [pathName, timeDuration])

    const contentVariants = useMemo(() => fadeIn({
        direction: 'up',
        type: 'tween',
        delay: timeDuration * 0.5,
        duration: 0.5
    }), [timeDuration])

    const renderContent = useCallback(() => (
        <React.Fragment key={pathName}>
            {!isTransitionComplete && memoizedSceneTransition}
            {showContent && (
                <motion.div
                    variants={contentVariants}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="relative z-50"
                >
                    {children}
                </motion.div>
            )}
        </React.Fragment>
    ), [pathName, isTransitionComplete, memoizedSceneTransition, contentVariants, children, showContent])

    return (
        <AnimatePresence mode='wait'>
            {renderContent()}
        </AnimatePresence>
    )
})

SceneTransitionProvider.displayName = 'SceneTransitionProvider'

export default SceneTransitionProvider
