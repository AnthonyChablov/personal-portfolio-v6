import { useState, useMemo } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage/useLocalStorage';
import { EmojiItem } from '../data/emojisListData';

const STORAGE_KEY = 'selectedEmoji';

export function useSelectEmoji(initialEmojis: EmojiItem[], defaultEmoji = '🐼') {
  // Local state for search
  const [searchTerm, setSearchTerm] = useState('');
  
  
  // Local storage for selected emoji
  const {
    value: selectedEmoji,
    setStoredValue: setSelectedEmoji,
    isLoading
  } = useLocalStorage(STORAGE_KEY, defaultEmoji);

  // Memoized filtered emojis
  const filteredEmojis = useMemo(() => 
    searchTerm ? initialEmojis.filter(emoji => searchEmoji(emoji, searchTerm)) : initialEmojis,
    [initialEmojis, searchTerm]
  );

  // Handler for selecting an emoji
  const selectEmoji = (emoji: string) => {
    setSelectedEmoji(emoji);
  };

  // Handler for selecting a random emoji
  const selectRandomEmoji = () => {
    const randomIndex = Math.floor(Math.random() * initialEmojis.length);
    selectEmoji(initialEmojis[randomIndex].emoji);
  };

  // Handler for clearing the search
  const clearSearch = () => {
    setSearchTerm('');
  };

  return {
    // Search-related
    searchTerm,
    setSearchTerm,
    clearSearch,
    filteredEmojis,
    
    // Selection-related
    selectedEmoji,
    selectEmoji,
    selectRandomEmoji,
    
    // State
    isLoading,
    
    // Full emoji list
    allEmojis: initialEmojis
  };
}

// Normalizes text by converting to lowercase and removing leading/trailing whitespace
const normalizeText = (text: string) => text.toLowerCase().trim();

const searchEmoji = (emoji: EmojiItem, searchTerm: string): boolean => {
  // Normalize the search term once to avoid repeated operations
  const normalizedSearch = normalizeText(searchTerm);
  
  return (
    // Check if the normalized emoji character contains the search term
    normalizeText(emoji.emoji).includes(normalizedSearch) ||
    // Check if any of the emoji's search terms contain the search term
    emoji.searchTerms.some(term => 
      normalizeText(term).includes(normalizedSearch)
    )
  );
};
