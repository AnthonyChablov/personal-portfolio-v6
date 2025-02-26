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
    // Render the hook.
    const { result } = renderHook(() =>
      useSelectEmoji(mockInitialEmojis, defaultEmoji)
    );

    expect(result.current.selectedEmoji).toBe(defaultEmoji);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.allEmojis).toEqual(mockInitialEmojis);
  });

  

  it("should propagate the isLoading state from useLocalStorage", () => {

    const { result } = renderHook(() =>
      useSelectEmoji(mockInitialEmojis, defaultEmoji)
    );

    expect(result.current.isLoading).toBe(false);
  });

  it("should filter emojis based on search term", () => {
    const { result } = renderHook(() => useSelectEmoji(mockInitialEmojis));

    // Set a search term
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
    const { result } = renderHook(() => useSelectEmoji(mockInitialEmojis));
  
    // Select an emoji
    act(() => {
      result.current.selectEmoji("🐶");
    });
  
    // Assert that the local storage value has been updated
    expect(storedValue).toBe("🐶");
  
    // Re-render the hook to see if it gets the updated value
    const { result: updatedResult } = renderHook(() => useSelectEmoji(mockInitialEmojis));
    expect(updatedResult.current.selectedEmoji).toBe("🐶");
  });

  it("should return a different selected emoji when localStorage returns a different emoji", () => {
    let storedValue = "🐱"; // Simulate an initial stored value
  
    // Properly mock useLocalStorage to track updates
    mockedUseLocalStorage.mockImplementation(() => ({
      value: storedValue,
      setStoredValue: (newValue: string) => {
        storedValue = newValue; // Update the mock storage value
      },
      isLoading: false,
    }));
  
    const { result } = renderHook(() => useSelectEmoji(mockInitialEmojis));
  
    // Select an emoji
    act(() => {
      result.current.selectEmoji("🐶");
    });
  
    // Assert that the local storage value has been updated
    expect(storedValue).toBe("🐶");
  
    // Re-render the hook to see if it gets the updated value
    const { result: updatedResult } = renderHook(() =>
      useSelectEmoji(mockInitialEmojis, storedValue)
    );
  
    expect(updatedResult.current.selectedEmoji).toBe("🐶");
  });

  it("should allow selecting a random emoji", () => {
    const { result } = renderHook(() => useSelectEmoji(mockInitialEmojis));

    // Simulate selecting a random emoji
    act(() => {
      result.current.selectRandomEmoji();
    });

    expect(mockInitialEmojis.map((emoji) => emoji.emoji)).toContain(
      result.current.selectedEmoji
    );
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
