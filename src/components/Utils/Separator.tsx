import React from "react";
import { cn } from "@/lib/utils";

interface SeparatorProps {
  size?: "small" | "medium" | "large"; // Optional size prop
  className?: string;
}

const Separator: React.FC<SeparatorProps> = ({
  size = "small",
  className = "",
}) => {
  // Map size to padding classes
  const sizeClasses = {
    small: "py-3",
    medium: "py-5",
    large: "py-9",
  };

  return <div className={cn(sizeClasses[size] + " " + className)}></div>;
};

export default Separator;
