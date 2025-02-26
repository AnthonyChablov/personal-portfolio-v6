import { expect, it, describe, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useSelectCover } from "../useSelectCover"; // Adjust the import path as needed
import { coverData } from "../../data/coverData";

// Import and mock the useLocalStorage hook.
import { useLocalStorage } from "@/hooks/useLocalStorage/useLocalStorage";


// Tell Vitest to mock the module.
vi.mock("@/hooks/useLocalStorage/useLocalStorage");
// Get a typed version of the mocked useLocalStorage.
const mockedUseLocalStorage = vi.mocked(useLocalStorage);
// A mock function to simulate updating the stored value.
const mockSetStoredValue = vi.fn();

beforeEach(() => {
  vi.clearAllMocks();
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("useSelectCover", () => {
  it("should return the default cover and its component when localStorage returns the default cover ID", () => {
    const defaultCoverId = "cover1";
    
    // Simulate useLocalStorage returning default values.
    mockedUseLocalStorage.mockReturnValue({
      value: defaultCoverId,
      setStoredValue: mockSetStoredValue,
      isLoading: false,
    });

    // Render the hook.
    const { result } = renderHook(() => useSelectCover(defaultCoverId));

    // Expected cover is found in coverData by matching id.
    const expectedCover = coverData.find((cover) => cover.id === defaultCoverId)?.component;

    expect(result.current.selectedCoverId).toBe(defaultCoverId);
    expect(result.current.selectedCover).toBe(expectedCover);
    expect(result.current.coverData).toBe(coverData);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.setSelectedCoverId).toBe(mockSetStoredValue);
  });

  it("should return a different selected cover when localStorage returns a different cover ID", () => {
    const defaultCoverId = "cover1";
    const storedCoverId = "cover2";
    mockedUseLocalStorage.mockReturnValue({
      value: storedCoverId,
      setStoredValue: mockSetStoredValue,
      isLoading: false,
    });

    const { result } = renderHook(() => useSelectCover(defaultCoverId));
    const expectedCover = coverData.find((cover) => cover.id === storedCoverId)?.component;

    expect(result.current.selectedCoverId).toBe(storedCoverId);
    expect(result.current.selectedCover).toBe(expectedCover);
  });

  it("should propagate the isLoading state from useLocalStorage", () => {
    const defaultCoverId = "cover1";
    mockedUseLocalStorage.mockReturnValue({
      value: defaultCoverId,
      setStoredValue: mockSetStoredValue,
      isLoading: true,
    });

    const { result } = renderHook(() => useSelectCover(defaultCoverId));
    expect(result.current.isLoading).toBe(true);
  });

  it("should allow updating the selected cover ID via setSelectedCoverId", () => {
    const defaultCoverId = "cover1";
    mockedUseLocalStorage.mockReturnValue({
      value: defaultCoverId,
      setStoredValue: mockSetStoredValue,
      isLoading: false,
    });

    const { result } = renderHook(() => useSelectCover(defaultCoverId));

    // Simulate updating the selected cover ID.
    act(() => {
      result.current.setSelectedCoverId("cover3");
    });

    expect(mockSetStoredValue).toHaveBeenCalledWith("cover3");
  });
});
