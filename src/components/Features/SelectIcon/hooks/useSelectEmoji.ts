import { useState, useMemo } from "react";
import { EmojiItem } from "@/components/Features/SelectIcon/data/emojisListData";

// Utility function for filtering emojis
export const filterEmojis = (
  emojis: EmojiItem[],
  searchTerm: string
): EmojiItem[] => {
  if (!searchTerm) return emojis;

  const normalizedSearch = searchTerm.toLowerCase();

  return emojis.filter(
    ({ emoji, searchTerms }) =>
      emoji.toLowerCase().includes(normalizedSearch) ||
      searchTerms.some((term) => term.toLowerCase().includes(normalizedSearch))
  );
};

// Hook for managing emoji search
export const useEmojiSearch = (initialEmojis: EmojiItem[]) => {
  const [emojis, setEmojis] = useState<EmojiItem[]>(initialEmojis);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Memoized filtered emojis
  const filteredEmojis = useMemo(
    () => filterEmojis(emojis, searchTerm),
    [emojis, searchTerm]
  );

  // Reset emojis to original list
  const resetEmojis = () => {
    setEmojis(initialEmojis);
    setSearchTerm("");
  };

  // Shuffle emojis
  const shuffleEmojis = () => {
    const shuffledEmojis = [...emojis].sort(() => Math.random() - 0.5);
    setEmojis(shuffledEmojis);
  };

  return {
    emojis,
    setEmojis,
    searchTerm,
    setSearchTerm,
    filteredEmojis,
    resetEmojis,
    shuffleEmojis,
  };
};

// Hook for managing emoji selection with local storage
export const useEmojiSelection = (
  initialEmojis: EmojiItem[],
  defaultEmoji = "👻"
) => {
  // Use local storage to persist the selected emoji
  const [selectedEmoji, setSelectedEmoji] = useState<string>(() => {
    try {
      const savedEmoji = localStorage.getItem("selectedEmoji");
      return savedEmoji || defaultEmoji;
    } catch {
      return defaultEmoji;
    }
  });

  // Select random emoji
  const selectRandomEmoji = () => {
    const randomNumber = Math.floor(Math.random() * initialEmojis.length);
    const newEmoji = initialEmojis[randomNumber].emoji;
    setSelectedEmoji(newEmoji);
  };

  // Update local storage when emoji changes
  const updateSelectedEmoji = (emoji: string) => {
    try {
      localStorage.setItem("selectedEmoji", emoji);
      setSelectedEmoji(emoji);
    } catch (error) {
      console.error("Failed to save emoji to local storage", error);
    }
  };

  return {
    selectedEmoji,
    setSelectedEmoji: updateSelectedEmoji,
    selectRandomEmoji,
  };
};

// Combine hooks for comprehensive emoji management
export const useSelectEmoji = (initialEmojis: EmojiItem[]) => {
  const emojiSearch = useEmojiSearch(initialEmojis);
  const emojiSelection = useEmojiSelection(initialEmojis);

  return {
    ...emojiSearch,
    ...emojiSelection,
  };
};
