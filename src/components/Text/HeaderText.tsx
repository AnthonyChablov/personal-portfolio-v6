import React from "react";
import { cn } from "@/lib/utils";

interface HeaderTextProps {
  className?: string;
  header: string;
  headerLevel?: "h1" | "h2" | "h3" | "h4" | "h5";
}

const HeaderText = ({
  className = "",
  header = "",
  headerLevel = "h1",
}: HeaderTextProps) => {
  const headerSizes = {
    h1: "text-6xl",
    h2: "text-4xl",
    h3: "text-3xl",
    h4: "text-2xl",
    h5: "text-xl",
  };

  const HeaderTag = headerLevel;
  const sizeClass = headerSizes[headerLevel];

  return (
    <div className={cn(`text-zinc-200 dark:text-zinc-900 ${className}`)}>
      <HeaderTag className={sizeClass}>{header}</HeaderTag>
    </div>
  );
};

export default HeaderText;
