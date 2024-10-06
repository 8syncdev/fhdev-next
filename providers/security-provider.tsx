'use client'
import React, { useEffect, ReactNode } from 'react'

const buildPreventKey = (): void => {
    document.addEventListener('contextmenu', (event: Event) => event.preventDefault());

    document.onkeydown = (e: KeyboardEvent): boolean => {
        const keyCode = e.keyCode || e.which;

        // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U keys
        if (
            keyCode === 123 ||
            (e.ctrlKey && e.shiftKey && (keyCode === 73 || keyCode === 74)) ||
            (e.ctrlKey && keyCode === 85)
        ) {
            return false;
        }
        return true;
    }
}

interface SecurityProviderProps {
    children: ReactNode;
    onSecurity?: 'true' | 'false';
}

const SecurityProvider: React.FC<SecurityProviderProps> = ({
    children,
    onSecurity = 'true'
}) => {
    useEffect(() => {
        if (onSecurity === 'true') {
            buildPreventKey();
        }
    }, [onSecurity]);

    return <>{children}</>;
}

export default SecurityProvider
