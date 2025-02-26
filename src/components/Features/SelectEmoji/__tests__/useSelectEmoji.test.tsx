import { describe, it, expect } from "vitest";
import { filterEmojis } from "../hooks/useEmojiSearch";
import { emojiList } from "../data/emojisListData";

describe("filterEmojis", () => {
  it("should return the searched emoji", () => {
    // Arrange
    const searchTerm = "ghost";
    // Act
    const filteredEmojis = filterEmojis(emojiList, searchTerm);
    // Assert
    expect(filteredEmojis[0].emoji).toBe("👻");
    expect(filteredEmojis[0].id).toBe(1);
  });
});
