import React from "react";
import { cn } from "@/lib/utils";
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div
      role="container"
      className={cn(
        `max-w-5xl container mx-auto px-3 md:px-8 lg:px-12  ${className}`
      )}
    >
      {children}
    </div>
  );
};

export default Container;
