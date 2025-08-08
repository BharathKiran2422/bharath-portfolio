
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

const HandIcon = ({ className }: { className?: string }) => (
    <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path d="M10.166 20.332C8.33268 20.332 7.05401 19.412 6.31935 18.152C5.58468 16.892 5.58468 15.302 6.31935 14.042C7.05401 12.782 8.33268 11.862 10.166 11.862M10.166 20.332V8.97334C10.166 8.33734 10.2327 7.76867 10.366 7.26734L11.8327 2.33134L12.9993 3.49801L14.4993 4.99801L15.666 6.16467L14.4993 9.83134H17.8327C18.916 9.83134 19.8327 10.748 19.8327 11.8313V13.8313C19.8327 14.9147 18.916 15.8313 17.8327 15.8313H13.666L12.4993 19.498C12.166 20.498 11.2493 20.332 10.166 20.332Z"/>
    </svg>
);


export default function CustomCursor() {
    const { theme } = useTheme();
    const [position, setPosition] = useState({ x: 0, y: 0 });
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
            } else if (target.closest('input[type="text"], textarea, [contenteditable="true"]')) {
                setCursorType('text');
            } else {
                setCursorType('default');
            }
        };

        const handleMouseDown = () => setIsMouseDown(true);
        const handleMouseUp = () => setIsMouseDown(false);
        const handleMouseLeave = () => setIsVisible(false);

        document.addEventListener('mousemove', updatePosition);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);
        document.body.addEventListener('mouseleave', handleMouseLeave);
        
        return () => {
            document.removeEventListener('mousemove', updatePosition);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [isClient, isVisible]);

    if (!isClient) {
        return null;
    }

    const cursorClasses = cn(
        'fixed top-0 left-0 z-[9999] pointer-events-none transition-transform duration-200 ease-in-out',
        {
            'opacity-0': !isVisible,
            'opacity-100': isVisible,
            'transform -translate-x-1/2 -translate-y-1/2': true,
        }
    );

    const iconContainerClasses = cn(
        'transition-transform duration-200',
        {
            'scale-125': cursorType === 'pointer',
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
                return <HandIcon className="w-8 h-8 text-primary" />;
            case 'text':
                return <div className={cn("w-0.5 h-6", theme === 'dark' ? 'bg-white' : 'bg-black')} />;
            default:
                return <PointerIcon className="w-6 h-6 text-primary" />;
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
