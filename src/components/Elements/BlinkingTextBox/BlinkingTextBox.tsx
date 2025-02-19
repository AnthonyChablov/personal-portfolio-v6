import React from 'react';
import { cn } from '@/lib/utils';
import ParagraphText from '@/components/Typography/ParagraphText/ParagraphText';

interface BlinkingDotProps {
  className?: string;
  onClick?: () => void;
}

const BlinkingTextBox = ({ className = "", onClick }: BlinkingDotProps) => {
  return (
    <div className='animate-pulse transition-all duration-700 shadow-sm'>
      <div
        role="text-box"
        aria-label="Clickable blinking text box"
        onClick={onClick}
        className={cn(`
          absolute flex items-center justify-center p-2 -top-8 -right-11
        bg-orange-600 text-white font-medium text-sm rounded-l-none rounded-md
           cursor-pointer w-fit
          hover:scale-105 active:scale-95 active:bg-orange-700  z-20
        ${className}
      `)}
      > 
        <ParagraphText className='text-white' size='xs'>{"Click Me!"}</ParagraphText>
      </div>
      {/* Chat */}
      <div className="
        absolute flex items-center justify-center p-1 -top-2 right-2
      bg-orange-600 text-white font-medium text-sm rotate-45
        cursor-pointer w-3 h-3 z-0
        hover:scale-105 active:scale-95 active:bg-orange-700 shadow-md">
      </div>
    </div>
  );
};

export default BlinkingTextBox;
