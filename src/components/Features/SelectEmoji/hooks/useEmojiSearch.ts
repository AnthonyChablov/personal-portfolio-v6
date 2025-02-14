import { useState, useMemo } from "react";
import { EmojiItem } from "@/components/Features/SelectEmoji/data/emojisListData";

// Hook for managing emoji search
export const useEmojiSearch = (initialEmojis: EmojiItem[]) => {
  const [emojis, setEmojis] = useState<EmojiItem[]>(initialEmojis);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Memoized filtered emojis
  const filteredEmojis = useMemo(
    () => filterEmojis(emojis, searchTerm),
    [emojis, searchTerm]
  );

  return {
    emojis,
    setEmojis,
    searchTerm,
    setSearchTerm,
    filteredEmojis,
  };
};


// Utility function for filtering emojis
export const filterEmojis = (
  emojis: EmojiItem[],
  searchTerm: string
): EmojiItem[] => {
  if (!searchTerm) {
    return emojis;
  }
  const normalizedSearch = searchTerm.toLowerCase();
  return emojis.filter(
    ({ emoji, searchTerms }) =>
      emoji.toLowerCase().includes(normalizedSearch) ||
      searchTerms.some((term) => term.toLowerCase().includes(normalizedSearch))
  );
};