import React from "react";
import { cn } from "@/lib/utils";

interface BannerProps {
  className?: string;
  width?: string;
  height?: string;
  animationDuration?: string;
  children: React.ReactNode;
}

const Banner = ({
  className = "",
  width = "200px",
  height = "225px",
  children,
}: BannerProps) => {
  return (
    <div
      className={cn(`absolute z-20 overflow-hidden ${className}`)}
      style={{
        width,
        height,
      }}
    >
      {children}
    </div>
  );
};

export default Banner;
