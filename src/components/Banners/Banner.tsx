"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Container from "../Layout/Container";
import ParagraphText from "../Text/ParagraphText";
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
                  `hover:bg-zinc-800 hover:text-zinc-900 ${
                    isHovered ? "inline-block" : "hidden"
                  }`
                )}
              >
                <ParagraphText size="sm" text="Change cover"></ParagraphText>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        }
      </Container>
      {children}
    </div>
  );
};

export default Banner;
