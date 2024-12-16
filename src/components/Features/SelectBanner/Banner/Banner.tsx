"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface BannerProps {
  className?: string;
  width?: string;
  height?: string;
  animationDuration?: string;
  children: React.ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const Banner = ({
  className = "",
  width = "200px",
  height = "225px",
  children,
  onMouseEnter,
  onMouseLeave,
}: BannerProps) => {
  return (
    <div
      className={cn(`absolute w-full z-20 overflow-hidden ${className}`)}
      style={{
        width,
        height,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};

export default Banner;
