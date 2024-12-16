"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../../../ui/button";
import Container from "../../../Layout/Container";
import ParagraphText from "../../../Text/ParagraphText";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useIsHovered from "@/hooks/useIsHovered";

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
  const { isHovered, onMouseEnter, onMouseLeave } = useIsHovered();
  const [isClicked, setIsClicked] = useState(false);

  // Handle click event to toggle the clicked state
  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

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
      <Container className="relative z-40 text-right top-5">
        {
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className={cn(
                  `hover:bg-zinc-800 hover:text-zinc-900 focus:visible  ${
                    isHovered || isClicked ? "visible" : "invisible"
                  } focus:visible`
                )}
                onClick={handleClick}
              >
                <ParagraphText size="sm" text="Change cover" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="bg-zinc-900 text-zinc-200 
              border-zinc-700 h-96 w-screen sm:w-96  
                overflow-y-none overflow-y-scroll"
            >
              <DropdownMenuLabel>
                <ParagraphText text="Select a Banner"></ParagraphText>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-zinc-700" />

              <DropdownMenuItem></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        }
      </Container>
      {children}
    </div>
  );
};

export default Banner;
