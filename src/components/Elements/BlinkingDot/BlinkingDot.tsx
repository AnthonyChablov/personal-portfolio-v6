'use client'
import React from 'react';

interface BlinkingDotProps {
  duration?: number; // Duration in milliseconds
  className?: string;
}

const BlinkingDot = ({ className = "" }: BlinkingDotProps) => {
 

  return (
    <div
      role="blinking-dot"
      className={`
        absolute -top-0.5 -right-0.5 w-[9px] h-[9px]
        bg-orange-500 rounded-full animate-pulse
        transition-opacity duration-450
        ${className}
      `}
    />
  );
};

export default BlinkingDot;