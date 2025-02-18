'use client'
import React, { useState, useEffect } from 'react';

interface BlinkingDotProps {
  duration?: number; // Duration in milliseconds
  className?: string;
}

const BlinkingDot = ({ duration = 30000, className = "" }: BlinkingDotProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!isVisible) return null;

  return (
    <div
      role="blinking-dot"
      className={`
        absolute -top-2 -right-4 w-[9px] h-[9px]
        bg-orange-500 rounded-full animate-pulse
        transition-opacity duration-450
        ${className}
      `}
    />
  );
};

export default BlinkingDot;