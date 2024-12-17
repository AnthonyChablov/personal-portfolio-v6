import { useState, useMemo } from "react";
import { EmojiItem } from "../data/emojisListData";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export const useSelectEmoji = (
  initialEmojis: EmojiItem[],
  defaultEmoji = "👻"
) => {
  // Use local storage to persist the selected emoji
  const [selectedEmoji, setSelectedEmoji] = useLocalStorage<string>({
    key: "selectedEmoji",
    initialValue: defaultEmoji,
  });

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [emojis, setEmojis] = useState<EmojiItem[]>(initialEmojis);

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
