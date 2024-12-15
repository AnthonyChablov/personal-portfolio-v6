import React from "react";
import { cn } from "@/lib/utils";

interface ParagraphTextProps {
  className?: string;
  text: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
}

const ParagraphText = ({
  className = "",
  text = "",
  size = "lg",
}: ParagraphTextProps) => {
  const paragraphSizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
  };

  const sizeClass = paragraphSizes[size];

  return (
    <div
      className={cn(`text-zinc-300 dark:text-zinc-900 font-light ${className}`)}
    >
      <p className={sizeClass}>{text}</p>
    </div>
  );
};

export default ParagraphText;
