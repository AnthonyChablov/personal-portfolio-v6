import { useEmojiSearch } from "./useEmojiSearch";
import { useEmojiSelection } from "./useEmojiSelection";
import { EmojiItem } from "../data/emojisListData";

// Combine hooks for comprehensive emoji management
export const useSelectEmoji = (initialEmojis: EmojiItem[]) => {
  const emojiSearch = useEmojiSearch(initialEmojis);
  const emojiSelection = useEmojiSelection(initialEmojis);
  return {
    ...emojiSearch,
    ...emojiSelection,
  };
};
