import React from 'react';
import { cn } from '@/lib/utils';

interface BlinkingDotProps {
  className?: string;
  onClick?: () => void;
}

const BlinkingDot = ({ className = "", onClick }: BlinkingDotProps) => {
  return (
    <>
      <div
        role="button"
        aria-label="Clickable blinking dot"
        onClick={onClick}
        className={cn(`
          absolute -top-0.5 -right-0.5 w-[13px] h-[13px]
          bg-orange-600 rounded-full animate-pulse
          transition-transform duration-500 cursor-pointer
          hover:scale-110 active:scale-90 text-sm
          ${className}
        `)}
      >
      </div>
    </>
  );
};

export default BlinkingDot;
