"use client";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { emojiList } from "./emojiList";

const DropDownIconButton = () => {
  const [selectedEmoji, setSelectedEmoji] = useState("👻");

  return (
    <div className="relative z-30">
      <DropdownMenu>
        <DropdownMenuTrigger
          className="rounded-2xl bg-transparent outline-none hover:bg-zinc-900/40
      border-none text-7xl h-fit px-0 py-4 flex items-center justify-center transition-all duration-300"
        >
          {selectedEmoji}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-zinc-900 text-zinc-200">
          <div className="flex">
            <DropdownMenuLabel>Select an Icon</DropdownMenuLabel>
          </div>
          <DropdownMenuSeparator />
          <div className="grid grid-cols-5 gap-2 p-2">
            {emojiList.map((emoji) => (
              <DropdownMenuItem
                key={emoji}
                onClick={() => setSelectedEmoji(emoji)}
                className="text-3xl cursor-pointer hover:bg-zinc-800 flex items-center justify-center"
              >
                {emoji}
              </DropdownMenuItem>
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropDownIconButton;
