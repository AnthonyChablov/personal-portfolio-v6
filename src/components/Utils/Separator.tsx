import React from "react";
import { cn } from "@/lib/utils";

interface SeparatorProps {
  py?: string; // Optional vertical padding prop (e.g., "py-4", "py-8")
}

const Separator: React.FC<SeparatorProps> = ({ py = "py-2" }) => {
  return <div className={cn(` ${py}`)}></div>;
};

export default Separator;
