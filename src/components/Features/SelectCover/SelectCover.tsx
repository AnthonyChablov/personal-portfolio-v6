"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Container from "@/components/Layout/Container";
import ParagraphText from "@/components/Text/ParagraphText";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSelectCover } from "./hooks/useSelectCover";
import EmojiLoadingBanner from "./options/LoadingBanner";

const SelectCover = () => {
  const { selectedCoverComponent, handleSelectCover, coverData, isLoading } =
    useSelectCover("Dithered");

  return (
    <div
      className={cn(`absolute w-full z-20 overflow-hidden`)}
      style={{
        width: "100%",
        height: "225px",
      }}
    >
      {isLoading ? <EmojiLoadingBanner /> : selectedCoverComponent}
      <Container className="relative z-40 text-right top-5">
        <DropdownMenu >
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
                border-zinc-700 w-screen sm:w-96 h-dvh max-h-64 overflow-y-auto pb-16"
          >
            <DropdownMenuLabel>
              <ParagraphText text="Select a Cover" />
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-zinc-700" />
            <div className=" 
                "
            >
            {coverData.map((cover) => (
              <DropdownMenuItem
                key={cover.id}
                onClick={() => handleSelectCover(cover.id)}
                className="hover:cursor-pointer hover:text-zinc-800"
              >
                <ParagraphText text={cover.name} />
              </DropdownMenuItem>
            ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </Container>
    </div>
  );
};

export default SelectCover;
