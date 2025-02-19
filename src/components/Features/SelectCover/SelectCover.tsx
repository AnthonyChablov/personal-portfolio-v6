"use client";
import React from "react";
import Container from "@/components/Layout/Container/Container";
import ParagraphText from "@/components/Text/ParagraphText/ParagraphText";
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
  const { selectedCover, setSelectedCoverId, coverData, isLoading } =
    useSelectCover("Dithered");

  return (
    <div
      className={cn(`absolute w-full z-20 overflow-hidden`)}
      style={{
        width: "100%",
        height: "225px",
      }}
    >
      {isLoading ? <EmojiLoadingBanner /> : selectedCover}
      <Container className="relative z-40 text-right top-5">
        <DropdownMenu>
          <DropdownMenuTrigger
            className=" 
            rounded-sm bg-transparent 
          text-zinc-200 hover:bg-zinc-900/40 hover:text-zinc-300
            border-none px-4 py-1 h-fit focus:outline-none focus:bg-none
            ease-in-out transition-all duration-300 transform hover:scale-110 
          "
          > 
            <ParagraphText size="sm" text="Change cover" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="bg-zinc-900 text-zinc-200 
                border-zinc-700 w-screen sm:w-96 "
          >
            <DropdownMenuLabel>
              <ParagraphText text="Select a Cover" />
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-zinc-700" />
            <div
              className="h-dvh max-h-64 overflow-y-auto"
            >
              {coverData.map((cover) => (
                <DropdownMenuItem
                  key={cover.id}
                  onClick={() => setSelectedCoverId(cover.id)}
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
