import { useState, useMemo } from "react";
import { EmojiItem } from "@/components/Features/DropdownIconButton/emojisList";

export const useSelectEmoji = (
  initialEmojis: EmojiItem[],
  defaultEmoji = "👻"
) => {
  const [selectedEmoji, setSelectedEmoji] = useState<string>(defaultEmoji);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [emojis, setEmojis] = useState<EmojiItem[]>(initialEmojis);

  // Shuffle emojis randomly
  const shuffleEmojis = () => {
    const shuffledEmojis = [...emojis].sort(() => Math.random() - 0.5);
    setEmojis(shuffledEmojis);
  };

  const selectRandomEmoji = () => {
    const randomNumber = Math.floor(Math.random() * initialEmojis.length);
    setSelectedEmoji(initialEmojis[randomNumber].emoji);
  };

  // Filter emojis based on search term
  const filteredEmojis = useMemo(() => {
    return emojis.filter(
      ({ emoji, searchTerms }) =>
        emoji.toLowerCase().includes(searchTerm.toLowerCase()) ||
        searchTerms.some((term) =>
          term.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
  }, [emojis, searchTerm]);

  // Reset emojis to original list
  const resetEmojis = () => {
    setEmojis(initialEmojis);
    setSearchTerm("");
  };

  return {
    selectedEmoji,
    setSelectedEmoji,
    searchTerm,
    setSearchTerm,
    selectRandomEmoji,
    emojis,
    filteredEmojis,
    shuffleEmojis,
    resetEmojis,
  };
};
