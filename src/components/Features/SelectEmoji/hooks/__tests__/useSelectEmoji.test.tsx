import { expect, it, describe, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useSelectEmoji } from "../useSelectEmoji"; // Adjust the import path as needed
import { EmojiItem } from "../../data/emojisListData";
import { emojiList } from "../../data/emojisListData";

// Import and mock the useLocalStorage hook.
import { useLocalStorage } from "@/hooks/useLocalStorage/useLocalStorage";

// Tell Vitest to mock the module.
vi.mock("@/hooks/useLocalStorage/useLocalStorage");
// Get a typed version of the mocked useLocalStorage.
const mockedUseLocalStorage = vi.mocked(useLocalStorage);

const mockInitialEmojis: EmojiItem[] = emojiList;
const defaultEmoji = "🐼";
let storedValue = defaultEmoji; // Track stored value

beforeEach(() => {
  vi.clearAllMocks();
  
  mockedUseLocalStorage.mockImplementation(() => ({
    value: storedValue, // Always return the latest stored value
    setStoredValue: (newValue: string) => {
      storedValue = newValue; // Properly assign the new value
    },
    isLoading: false,
  }));
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("useSelectEmoji", () => {
  it("should return the default emoji when localStorage returns the default emoji", () => {
    // Arrange
    const { result } = renderHook(() =>
      useSelectEmoji(mockInitialEmojis, defaultEmoji)
    );

    // Assert
    expect(result.current.selectedEmoji).toBe(defaultEmoji);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.allEmojis).toEqual(mockInitialEmojis);
  });

  it("should propagate the isLoading state from useLocalStorage", () => {
    // Arrange
    const { result } = renderHook(() =>
      useSelectEmoji(mockInitialEmojis, defaultEmoji)
    );

    // Assert
    expect(result.current.isLoading).toBe(false);
  });

  it("should filter emojis based on search term", () => {
    // Arrange
    const { result } = renderHook(() => useSelectEmoji(mockInitialEmojis));

    // Act & Assert for different search terms
    act(() => {
      result.current.setSearchTerm("cat");
    });
    expect(result.current.filteredEmojis[0].emoji).toEqual("🐱");

    act(() => {
      result.current.setSearchTerm("dog");
    });
    expect(result.current.filteredEmojis[0].emoji).toEqual("🐶");

    act(() => {
      result.current.setSearchTerm("rocket");
    });
    expect(result.current.filteredEmojis[0].emoji).toEqual("🚀");
  });

  it("should allow selecting an emoji", () => {
    // Arrange
    const { result } = renderHook(() => useSelectEmoji(mockInitialEmojis));

    // Act
    act(() => {
      result.current.selectEmoji("🐶");
    });

    // Assert
    expect(storedValue).toBe("🐶");

    // Re-render the hook to check if the updated emoji is stored
    const { result: updatedResult } = renderHook(() => useSelectEmoji(mockInitialEmojis));
    expect(updatedResult.current.selectedEmoji).toBe("🐶");
  });

  it("should return a different selected emoji when localStorage returns a different emoji", () => {
    // Arrange
    storedValue = "🐱"; // Simulate an initial stored value
    mockedUseLocalStorage.mockImplementation(() => ({
      value: storedValue,
      setStoredValue: (newValue: string) => {
        storedValue = newValue;
      },
      isLoading: false,
    }));

    const { result } = renderHook(() => useSelectEmoji(mockInitialEmojis));

    // Act
    act(() => {
      result.current.selectEmoji("🐶");
    });

    // Assert
    expect(storedValue).toBe("🐶");

    // Re-render the hook to see if it gets the updated value
    const { result: updatedResult } = renderHook(() =>
      useSelectEmoji(mockInitialEmojis, storedValue)
    );

    expect(updatedResult.current.selectedEmoji).toBe("🐶");
  });

  it("should allow selecting a random emoji", () => {
    // Arrange
    const { result } = renderHook(() => useSelectEmoji(mockInitialEmojis));

    // Act
    act(() => {
      result.current.selectRandomEmoji();
    });

    // Assert
    expect(mockInitialEmojis.map((emoji) => emoji.emoji)).toContain(
      result.current.selectedEmoji
    );
  });

  it("should clear the search term", () => {
    // Arrange
    const { result } = renderHook(() => useSelectEmoji(mockInitialEmojis));

    // Act
    act(() => {
      result.current.setSearchTerm("cat");
      result.current.clearSearch();
    });

    // Assert
    expect(result.current.searchTerm).toBe("");
    expect(result.current.filteredEmojis).toEqual(mockInitialEmojis);
  });
});
