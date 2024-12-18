import { useState, useMemo, useEffect } from "react";
import { EmojiItem } from "@/components/Features/SelectIcon/data/emojisListData";

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

// Hook for managing emoji selection with local storage
export const useEmojiSelection = (
  initialEmojis: EmojiItem[],
  defaultEmoji = "👻"
) => {
  // Use state with a function to defer initialization
  const [selectedEmoji, setSelectedEmoji] = useState<string>(defaultEmoji);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Loading state
  // Effect to handle local storage after client-side mount
  useEffect(() => {
    try {
      const savedEmoji = localStorage.getItem("selectedEmoji");
      if (savedEmoji) {
        setSelectedEmoji(savedEmoji);
      }
    } catch (error) {
      console.error("Failed to read emoji from local storage", error);
    } finally {
      setIsLoading(false); // Stop loading after attempting to fetch emoji
    }
  }, []);

  // Select random emoji
  const selectRandomEmoji = () => {
    const randomNumber = Math.floor(Math.random() * initialEmojis.length);
    const newEmoji = initialEmojis[randomNumber].emoji;
    updateSelectedEmoji(newEmoji);
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
    isLoading,
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
