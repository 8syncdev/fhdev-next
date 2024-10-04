import { Variants } from 'framer-motion'

type Direction = 'left' | 'right' | 'up' | 'down';
type TransitionType = 'tween' | 'spring' | 'inertia';
type EaseType = 'linear' | 'easeIn' | 'easeOut' | 'easeInOut' | 'circIn' | 'circOut' | 'circInOut' | 'backIn' | 'backOut' | 'backInOut';

interface AnimationParams {
    direction?: Direction;
    type?: TransitionType;
    delay?: number;
    duration?: number;
    stiffness?: number;
    damping?: number;
    ease?: EaseType;
    staggerChildren?: number;
    delayChildren?: number;
}

const defaultParams: AnimationParams = {
    direction: 'up',
    type: 'spring',
    delay: 0.5,
    duration: 0.85,
    stiffness: 100,
    damping: 10,
    ease: 'easeOut',
    staggerChildren: 0.1,
    delayChildren: 0
};

export const navVariants = (params: AnimationParams = defaultParams): Variants => {
    const { delay, duration, stiffness, damping } = { ...defaultParams, ...params };
    return {
        hidden: {
            opacity: 0,
            y: -50,
            transition: {
                type: 'spring',
                stiffness,
                damping,
            },
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness,
                delay,
                duration,
            },
        },
    };
};

export const slideIn = (params: AnimationParams = defaultParams): Variants => {
    const { direction, type, delay, duration, ease } = { ...defaultParams, ...params };
    return {
        hidden: {
            x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
            y: direction === 'up' ? '100%' : direction === 'down' ? '-100%' : 0,
        },
        show: {
            x: 0,
            y: 0,
            transition: {
                type,
                delay,
                duration,
                ease,
            },
        },
    };
};

export const staggerContainer = (params: AnimationParams = defaultParams): Variants => {
    const { staggerChildren, delayChildren } = { ...defaultParams, ...params };
    return {
        hidden: {},
        show: {
            transition: {
                staggerChildren,
                delayChildren,
            },
        },
    };
};

export const textVariant = (params: AnimationParams = defaultParams): Variants => {
    const { delay, duration, type, ease } = { ...defaultParams, ...params };
    return {
        hidden: {
            y: 50,
            opacity: 0,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type,
                duration,
                delay,
                ease,
            },
        },
    };
};

export const textContainer: Variants = {
    hidden: {
        opacity: 0,
    },
    show: (i: number = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
    }),
};

export const textVariant2 = (params: AnimationParams = defaultParams): Variants => {
    const { duration, ease } = { ...defaultParams, ...params };
    return {
        hidden: {
            opacity: 0,
            y: 20,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'tween',
                ease,
                duration,
            },
        },
    };
};

export const fadeIn = (params: AnimationParams = defaultParams): Variants => {
    const { direction, type, delay, duration, ease } = { ...defaultParams, ...params };
    return {
        hidden: {
            x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
            y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
            opacity: 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type,
                delay,
                duration,
                ease,
            },
        },
    };
};

export const planetVariants = (params: AnimationParams = defaultParams): Variants => {
    const { direction, duration, delay, type } = { ...defaultParams, ...params };
    return {
        hidden: {
            x: direction === 'left' ? '-100%' : '100%',
            rotate: 120,
        },
        show: {
            x: 0,
            rotate: 0,
            transition: {
                type,
                duration,
                delay,
            },
        },
    };
};

export const zoomIn = (params: AnimationParams = defaultParams): Variants => {
    const { delay, duration, ease } = { ...defaultParams, ...params };
    return {
        hidden: {
            scale: 0,
            opacity: 0,
        },
        show: {
            scale: 1,
            opacity: 1,
            transition: {
                type: 'spring',
                delay,
                duration,
                ease,
            },
        },
    };
};

export const footerVariants = (params: AnimationParams = defaultParams): Variants => {
    const { stiffness, damping, delay, duration } = { ...defaultParams, ...params };
    return {
        hidden: {
            opacity: 0,
            y: 50,
            transition: {
                type: 'spring',
                stiffness,
                damping,
            },
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness,
                delay,
                duration,
            },
        },
    };
};

export const triggerShow = (params: AnimationParams = defaultParams): Variants => {
    const { duration, delay, stiffness, damping } = { ...defaultParams, ...params };
    return {
        show: {
            opacity: 1,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness,
                damping,
                duration,
                delay,
            }
        },
        hidden: { opacity: 0, scale: 0 },
    };
};

export const rotateIn = (params: AnimationParams = defaultParams): Variants => {
    const { delay, duration, ease } = { ...defaultParams, ...params };
    return {
        hidden: {
            rotate: -180,
            opacity: 0,
        },
        show: {
            rotate: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                delay,
                duration,
                ease,
            },
        },
    };
};

export const bounceIn = (params: AnimationParams = defaultParams): Variants => {
    const { delay, duration, ease } = { ...defaultParams, ...params };
    return {
        hidden: {
            scale: 0,
            opacity: 0,
        },
        show: {
            scale: [0, 1.2, 1],
            opacity: 1,
            transition: {
                type: 'spring',
                delay,
                duration,
                ease,
            },
        },
    };
};