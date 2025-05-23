"use client";
import React from "react";
import { useSelectEmoji } from "@/components/Features/SelectEmoji/hooks/useSelectEmoji";
import ParagraphText from "../../Typography/ParagraphText/ParagraphText";
import { emojiList } from "./data/emojisListData";
import { Input } from "@/components/ui/input";
import { Button } from "../../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Loading from "@/components/ui/loading";
import BlinkingTextBox from "@/components/Elements/BlinkingTextBox/BlinkingTextBox";
import ActiveStatus from "@/components/Elements/ActiveStatus/ActiveStatus";

const SelectEmoji = () => {
  const {
    selectedEmoji,
    selectEmoji,
    searchTerm,
    setSearchTerm,
    selectRandomEmoji,
    filteredEmojis,
    isLoading,
  } = useSelectEmoji(emojiList);

  return (
    <div className="relative inset-0 z-50 w-fit" data-testid='select-emoji'>
      <DropdownMenu>      
        <DropdownMenuTrigger
          className=" 
            rounded-lg bg-transparent hover:cursor-pointer
          text-zinc-200 hover:bg-zinc-900/40 hover:text-zinc-300
            border-none text-7xl  px-0 py-4 flex flex-col items-center 
            justify-center w-28 h-fit focus:outline-hidden focus:bg-none
            ease-in-out transition-all duration-300 transform hover:scale-110
          "
        >        
          <BlinkingTextBox/>
          {isLoading ? <Loading /> : selectedEmoji}
          <ActiveStatus/>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          data-testid='content'
          className="bg-zinc-900 text-zinc-200 
          border-zinc-700 w-screen sm:w-96"
        >
          <>
            <div className="flex">
              <DropdownMenuLabel>
                <ParagraphText text="Select an Emoji"></ParagraphText>
              </DropdownMenuLabel>
            </div>
            <DropdownMenuSeparator className="bg-zinc-700" />
            <div className="flex space-x-4 py-4 px-4">
              {/* Input Button */}
              <div className="flex items-center justify-center w-full">
                <Input
                  placeholder="Search emojis..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className=" bg-zinc-800 border-zinc-700 text-zinc-200 placeholder:text-zinc-400 w-full"
                />
              </div>
              {/* Shuffle Button */}
              <Button
                onClick={selectRandomEmoji}
                className="text-zinc-200 hover:bg-zinc-800 hover:text-zinc-300 hover:cursor-pointer"
              >
                <svg
                  fill="currentColor"
                  height="800"
                  width="800"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 49.7 49.7"
                >
                  <g>
                    <path d="M27,13.85h9v8.964l13.7-9.964L36,2.886v8.964h-9c-7.168,0-13,5.832-13,13c0,6.065-4.935,11-11,11H1c-0.553,0-1,0.447-1,1   s0.447,1,1,1h2c7.168,0,13-5.832,13-13C16,18.785,20.935,13.85,27,13.85z M38,6.814l8.3,6.036L38,18.886V6.814z" />
                    <path d="M1,13.85h2c2.713,0,5.318,0.994,7.336,2.799c0.191,0.171,0.43,0.255,0.667,0.255c0.274,0,0.548-0.112,0.745-0.333   c0.368-0.412,0.333-1.044-0.078-1.412C9.285,13.025,6.206,11.85,3,11.85H1c-0.553,0-1,0.447-1,1S0.447,13.85,1,13.85z" />
                    <path d="M36,35.85h-9c-2.685,0-5.27-0.976-7.278-2.748c-0.411-0.365-1.044-0.327-1.411,0.089c-0.365,0.414-0.326,1.046,0.089,1.411   c2.374,2.095,5.429,3.248,8.601,3.248h9v8.964l13.7-9.964L36,26.886V35.85z M38,30.814l8.3,6.036L38,42.886V30.814z" />
                  </g>
                </svg>
              </Button>
            </div>
            <div
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 
                md:gap-2 p-2 hm max-h-64 overflow-y-auto"
            >
              {filteredEmojis.map((emoji) => (
                <DropdownMenuItem
                  data-testid='dropdown-menu'
                  key={emoji.id}
                  onClick={() => selectEmoji(emoji.emoji)}
                  className="
                    text-3xl cursor-pointer hover:bg-zinc-800 
                    flex items-center justify-center h-fit
                    ease-in-out transition-all duration-300 "
                >
                  {emoji.emoji}
                </DropdownMenuItem>
              ))}
            </div>
          </>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SelectEmoji;
