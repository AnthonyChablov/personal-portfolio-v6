import React from "react";
import { cn } from "@/lib/utils";

interface SeparatorProps {
  size?: "extraSmall" | "small" | "medium" | "large" | "extraLarge"; // Optional size prop
  className?: string;
}

const Separator: React.FC<SeparatorProps> = ({
  size = "small",
  className = "",
}) => {
  // Map size to padding classes
  const sizeClasses = {
    extraSmall: "py-1",
    small: "py-3",
    medium: "py-6",
    large: "py-9",
    extraLarge: "py-20",
  };

  return <div className={cn(sizeClasses[size] + "" + className)}></div>;
};

export default Separator;
