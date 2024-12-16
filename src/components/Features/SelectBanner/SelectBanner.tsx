"use client";
import React, { useState } from "react";
import Banner from "./Banner/Banner";
import useIsHovered from "@/hooks/useIsHovered";
import { Button } from "@/components/ui/button";
import Container from "@/components/Layout/Container";
import ParagraphText from "@/components/Text/ParagraphText";
import { cn } from "@/lib/utils";
import { bannerData } from "./_data/bannerData";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const SelectBanner = () => {
  const { isHovered, onMouseEnter, onMouseLeave } = useIsHovered();
  const [isClicked, setIsClicked] = useState(false);
  const [selectedBanner, setSelectedBanner] =
    useState<React.ComponentType | null>(null);

  // Handle click event to toggle the clicked state
  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  // Handle banner selection
  const handleBannerSelect = (BannerComponent: React.ComponentType) => {
    setSelectedBanner(BannerComponent);
  };

  // Render the selected banner based on the state
  const renderBannerPreview = () => {
    if (selectedBanner) {
      const SelectedBanner = selectedBanner; // Use the selected banner component
      return <SelectedBanner />;
    }
    return null;
  };

  return (
    <div>
      <Banner
        width="100%"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Container className="relative z-40 text-right top-5">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className={cn(
                  `hover:bg-zinc-800 hover:text-zinc-900 focus:visible  ${
                    isHovered || isClicked ? "visible" : "invisible"
                  } focus:visible 
                  ease-in-out transition-all duration-300 transform hover:scale-110`
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
                <ParagraphText text="Select a Banner" />
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-zinc-700" />

              {/* Dynamically generate DropdownMenuItems */}
              {bannerData.map((banner, index) => (
                <DropdownMenuItem
                  key={index}
                  onClick={() => handleBannerSelect(banner.component)}
                >
                  <ParagraphText text={banner.name} />
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </Container>

        {/* Render Preview of the Selected Banner */}
        {renderBannerPreview()}
      </Banner>
    </div>
  );
};

export default SelectBanner;
