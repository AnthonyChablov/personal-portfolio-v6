"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Container from "@/components/Layout/Container";
import ParagraphText from "@/components/Text/ParagraphText";
import GlitchText from "./options/GlitchText";
import Dithered from "./options/Dithered";
import ShapeFlux from "./options/ShapesFlux";
import { cn } from "@/lib/utils";
import { coverData } from "./data/coverData";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSelectCover } from "./hooks/useSelectCover";

const SelectCover = () => {
  const { selectedCoverId, handleSelectCover } = useSelectCover("Dithered");

  const renderSelectedCover = () => {
    switch (selectedCoverId) {
      case "GlitchText":
        return <GlitchText />;
      case "Dithered":
        return <Dithered />;
      case "ShapeFlux":
        return <ShapeFlux />;
      default:
        return <Dithered />;
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
      {renderSelectedCover()}
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
              <ParagraphText text="Select a Cover" />
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-zinc-700" />

            {coverData.map((cover) => (
              <DropdownMenuItem
                key={cover.id}
                onClick={() => handleSelectCover(cover.id)}
                className="hover:cursor-pointer hover:text-zinc-800"
              >
                <ParagraphText text={cover.name} />
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </Container>
    </div>
  );
};

export default SelectCover;
