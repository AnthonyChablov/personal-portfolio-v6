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
// A mock function to simulate updating the stored value.
const mockSetStoredValue = vi.fn();

const mockInitialEmojis: EmojiItem[] = emojiList

beforeEach(() => {
  vi.clearAllMocks();
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("useSelectEmoji", () => {
  it("should return the default emoji when localStorage returns the default emoji", () => {
    const defaultEmoji = "🐼";

    // Simulate useLocalStorage returning the default emoji.
    mockedUseLocalStorage.mockReturnValue({
      value: defaultEmoji,
      setStoredValue: mockSetStoredValue,
      isLoading: false,
    });

    // Render the hook.
    const { result } = renderHook(() => useSelectEmoji(mockInitialEmojis, defaultEmoji));

    expect(result.current.selectedEmoji).toBe(defaultEmoji);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.allEmojis).toEqual(mockInitialEmojis);
  });

  it("should return a different selected emoji when localStorage returns a different emoji", () => {
    const defaultEmoji = "🐼";
    const storedEmoji = "🐱";

    mockedUseLocalStorage.mockReturnValue({
      value: storedEmoji,
      setStoredValue: mockSetStoredValue,
      isLoading: false,
    });

    const { result } = renderHook(() => useSelectEmoji(mockInitialEmojis, defaultEmoji));

    expect(result.current.selectedEmoji).toBe(storedEmoji);
  });

  it("should propagate the isLoading state from useLocalStorage", () => {
    const defaultEmoji = "🐼";

    mockedUseLocalStorage.mockReturnValue({
      value: defaultEmoji,
      setStoredValue: mockSetStoredValue,
      isLoading: true,
    });

    const { result } = renderHook(() => useSelectEmoji(mockInitialEmojis, defaultEmoji));

    expect(result.current.isLoading).toBe(true);
  });

  it("should filter emojis based on search term", () => {
    const { result } = renderHook(() => useSelectEmoji(mockInitialEmojis));

    // Set a search term
    act(() => {
      result.current.setSearchTerm("cat");
    });

    expect(result.current.filteredEmojis).toEqual([
      { emoji: '🐱', searchTerms: ['cat', 'animal'] },
    ]);
  });

  it("should allow selecting an emoji", () => {
    const { result } = renderHook(() => useSelectEmoji(mockInitialEmojis));

    // Simulate selecting a different emoji
    act(() => {
      result.current.selectEmoji("🐶");
    });

    expect(result.current.selectedEmoji).toBe("🐶");
    expect(mockSetStoredValue).toHaveBeenCalledWith("🐶");
  });

  it("should allow selecting a random emoji", () => {
    const { result } = renderHook(() => useSelectEmoji(mockInitialEmojis));

    // Simulate selecting a random emoji
    act(() => {
      result.current.selectRandomEmoji();
    });

    expect(mockInitialEmojis.map((emoji) => emoji.emoji)).toContain(result.current.selectedEmoji);
  });

  it("should clear the search term", () => {
    const { result } = renderHook(() => useSelectEmoji(mockInitialEmojis));

    // Set a search term and then clear it
    act(() => {
      result.current.setSearchTerm("cat");
      result.current.clearSearch();
    });

    expect(result.current.searchTerm).toBe("");
    expect(result.current.filteredEmojis).toEqual(mockInitialEmojis);
  });
});
