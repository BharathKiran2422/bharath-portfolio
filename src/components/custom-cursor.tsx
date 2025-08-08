
"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

const PointerIcon = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("transform -rotate-[30deg]", className)}
  >
    <path d="M7.34246 20.0001L18.6567 13.109C19.8526 12.3503 19.8526 10.6497 18.6567 9.89101L7.34246 3.00003C6.01249 2.15256 4.34246 3.06456 4.34246 4.60913V18.3909C4.34246 19.9354 6.01249 20.8474 7.34246 20.0001Z" />
  </svg>
);

const TargetIcon = ({ className }: { className?: string }) => (
    <svg 
        width="28" 
        height="28" 
        viewBox="0 0 28 28" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className={cn("animate-spin-slow", className)}
    >
        <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="2" strokeOpacity="0.5"/>
        <circle cx="14" cy="14" r="6" stroke="currentColor" strokeWidth="2" strokeOpacity="0.8"/>
        <path d="M14 0V4" stroke="currentColor" strokeWidth="2"/>
        <path d="M14 24V28" stroke="currentColor" strokeWidth="2"/>
        <path d="M28 14L24 14" stroke="currentColor" strokeWidth="2"/>
        <path d="M0 14H4" stroke="currentColor" strokeWidth="2"/>
    </svg>
);


export default function CustomCursor() {
    const { theme } = useTheme();
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [cursorType, setCursorType] = useState('default');
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient) return;
        
        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('a, button, [role="button"], input[type="submit"], .cursor-pointer')) {
                setCursorType('pointer');
            } else if (target.closest('input, textarea, [contenteditable="true"]')) {
                setCursorType('text');
            } else {
                setCursorType('default');
            }
        };

        const handleMouseDown = () => setIsMouseDown(true);
        const handleMouseUp = () => setIsMouseDown(false);
        const handleMouseLeave = () => setIsVisible(false);

        document.addEventListener('mousemove', updatePosition);
        document.addEventListener('mouseover', handleMouseOver, { capture: true });
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);
        document.body.addEventListener('mouseleave', handleMouseLeave);
        
        return () => {
            document.removeEventListener('mousemove', updatePosition);
            document.removeEventListener('mouseover', handleMouseOver, { capture: true });
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [isClient, isVisible]);

    if (!isClient) {
        return null;
    }

    const cursorClasses = cn(
        'fixed top-0 left-0 z-[9999] pointer-events-none transition-transform duration-75 ease-out',
        'flex items-center justify-center',
        {
            'opacity-0': !isVisible,
            'opacity-100': isVisible,
            'w-8 h-8 -translate-x-4 -translate-y-4': cursorType === 'pointer',
            'w-6 h-6 -translate-x-3 -translate-y-3': cursorType !== 'pointer',
        }
    );

    const iconContainerClasses = cn(
        'transition-transform duration-200',
        {
            'scale-110': cursorType === 'pointer',
            'scale-100': cursorType !== 'pointer',
            'scale-90': isMouseDown,
        }
    );
    
    const dotClasses = cn(
        'w-2 h-2 rounded-full fixed top-0 left-0 z-[9998] pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-all duration-100',
        theme === 'dark' ? 'bg-white' : 'bg-black',
        {
             'opacity-0 scale-0': !isVisible || cursorType !== 'default',
             'opacity-50 scale-100': isVisible && cursorType === 'default'
        }
    )

    const renderCursorIcon = () => {
        switch (cursorType) {
            case 'pointer':
                return <TargetIcon className="w-full h-full text-primary" />;
            case 'text':
                return <div className={cn("w-0.5 h-6", theme === 'dark' ? 'bg-white' : 'bg-black')} />;
            default:
                return <PointerIcon className="w-full h-full text-primary" />;
        }
    };

    return (
        <>
            <div
                className={cursorClasses}
                style={{
                    transform: `translate(${position.x}px, ${position.y}px)`,
                }}
            >
                <div className={iconContainerClasses}>
                    {renderCursorIcon()}
                </div>
            </div>
            <div
                 className={dotClasses}
                 style={{
                    transform: `translate(${position.x}px, ${position.y}px)`,
                 }}
            />
        </>
    );
}
