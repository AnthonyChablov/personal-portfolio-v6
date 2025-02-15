import React from "react";
import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string; // Optional additional styling
  borderColor?: string; // Optional border color
  borderWidth?: string; // Optional border width
  borderStyle?: "solid" | "dashed" | "dotted"; // Optional border style
  margin?: string; // Optional padding around the divider
}

const Divider = ({
  className = "",
  borderColor = "border-zinc-700", // Default to a gray color if not specified
  borderWidth = "border-t", // Default to a top border
  borderStyle = "solid", // Default to solid border
  margin = "my-0", // Default padding
}: DividerProps) => {
  return (
    <div
      className={cn(
        ` border-${borderStyle} ${borderWidth} ${borderColor} ${margin} ${className}`
      )}
    />
  );
};

export default Divider;
