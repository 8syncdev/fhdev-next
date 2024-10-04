import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const CustomDialog: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    title: string;
    content: React.ReactNode;
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}> = ({ isOpen, onClose, title, content, size = 'md' }) => (
    <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className={`${size === 'sm' ? 'max-w-sm' :
                size === 'lg' ? 'max-w-lg' :
                    size === 'xl' ? 'max-w-xl' :
                        size === 'full' ? 'max-w-full' :
                            'max-w-md'
            }`}>
            <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
            </DialogHeader>
            {content}
        </DialogContent>
    </Dialog>
);

export default CustomDialog;