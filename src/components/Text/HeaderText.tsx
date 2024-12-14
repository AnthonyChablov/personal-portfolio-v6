import React from "react";
import { cn } from "@/lib/utils";
interface HeaderTextProps {
  className?: string;
  header: string;
}

const HeaderText = ({ className = "", header = "" }: HeaderTextProps) => {
  return (
    <div className={cn(`text-white dark:text-zinc-900 ${className}`)}>
      {header}
    </div>
  );
};

export default HeaderText;
