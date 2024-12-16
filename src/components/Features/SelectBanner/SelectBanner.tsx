"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Container from "@/components/Layout/Container";
import ParagraphText from "@/components/Text/ParagraphText";
import GlitchTextBanner from "./options/GlitchTextBanner";
import DitheredBanner from "./options/DitheredBanner";
import { cn } from "@/lib/utils";
import { bannerData } from "./data/bannerData";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSelectBanner } from "./hooks/useSelectBanner";

const SelectBanner = () => {
  const { selectedBannerId, handleSelectBanner } =
    useSelectBanner("DitheredBanner");

  const renderSelectedBanner = () => {
    switch (selectedBannerId) {
      case "AnimatedBanner1":
        return <GlitchTextBanner />;
      case "DitheredBanner":
        return <DitheredBanner />;
      default:
        return <DitheredBanner />;
    }
  };

  return (
    <div
      className={cn(`absolute w-full z-20 overflow-hidden`)}
      style={{
        width: "100%",
        height: "225px",
      }}
    >
      {renderSelectedBanner()}
      <Container className="relative z-40 text-right top-5">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className={cn(
                ` bg-transparent hover:text-zinc-900 hover:bg-zinc-900/40 rounded-md shadow-none
                  ease-in-out transition-all duration-300 transform hover:scale-110`
              )}
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

            {bannerData.map((banner) => (
              <DropdownMenuItem
                key={banner.id}
                onClick={() => handleSelectBanner(banner.id)}
                className="hover:cursor-pointer hover:text-zinc-800"
              >
                <ParagraphText text={banner.name} />
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </Container>
    </div>
  );
};

export default SelectBanner;
