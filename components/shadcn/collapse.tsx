import React from 'react';
import { ChevronDown } from 'lucide-react';

const Collapse: React.FC<{
    title: string;
    isOpen: boolean;
    onToggle: () => void;
    children: React.ReactNode;
}> = React.memo(({ title, isOpen, onToggle, children }) => (
    <div className="mb-4">
        <div
            className="flex justify-between items-center p-4 bg-gray-800 rounded-lg cursor-pointer transition-colors duration-300 ease-in-out hover:bg-gray-700"
            onClick={onToggle}
        >
            <h3 className="text-lg font-medium">{title}</h3>
            <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                <ChevronDown />
            </div>
        </div>
        <div className={`mt-2 ml-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <ul>
                {children}
            </ul>
        </div>
    </div>
));

export default Collapse;