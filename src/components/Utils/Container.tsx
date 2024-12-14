import React from "react";
import { cn } from "@/lib/utils";
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div
      className={cn(
        `max-w-5xl container mx-auto  sm:px-4 md:px-6 lg:px-8  ${className}`
      )}
    >
      {children}
    </div>
  );
};

export default Container;
