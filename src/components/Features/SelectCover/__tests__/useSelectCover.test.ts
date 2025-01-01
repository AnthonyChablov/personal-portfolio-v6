import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { useSelectCover } from "../hooks/useSelectCover"; // Adjust the path as needed
import { coverData } from "../data/coverData";

describe("useSelectCover hook", () => {
  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks();
    localStorage.clear();
  });

  it("should initialize with the default cover ID if no saved cover exists in localStorage", () => {
    const defaultCoverId = "cover-1";
    const { result } = renderHook(() => useSelectCover(defaultCoverId));

    expect(result.current.isLoading).toBe(true);

    // Wait for the useEffect to run
    act(() => {
      vi.useFakeTimers();
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.selectedCoverId).toBe(defaultCoverId);
  });

  it("should load the saved cover from localStorage if it exists", () => {
    const savedCoverId = "cover-2";
    localStorage.setItem("selectedCover", savedCoverId);

    const { result } = renderHook(() => useSelectCover("cover-1"));

    // Wait for the useEffect to run
    act(() => {
      vi.runAllTimers();
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.selectedCoverId).toBe(savedCoverId);
  });

  it("should update selectedCoverId and localStorage when handleSelectCover is called", () => {
    const { result } = renderHook(() => useSelectCover("cover-1"));

    act(() => {
      result.current.handleSelectCover("cover-3");
    });

    expect(result.current.selectedCoverId).toBe("cover-3");
    expect(localStorage.getItem("selectedCover")).toBe("cover-3");
  });

  it("should return the correct selected cover component", () => {
    const selectedCoverId = coverData[0].id;
    const { result } = renderHook(() => useSelectCover(selectedCoverId));

    // Wait for the useEffect to run
    act(() => {
      vi.runAllTimers();
    });

    const selectedComponent = coverData.find(
      (cover) => cover.id === selectedCoverId
    )?.component;

    expect(result.current.selectedCoverComponent).toBe(selectedComponent);
  });

  it("should handle localStorage errors gracefully", () => {
    vi.spyOn(localStorage, "setItem").mockImplementation(() => {
      throw new Error("localStorage error");
    });

    const { result } = renderHook(() => useSelectCover("cover-1"));

    act(() => {
      result.current.handleSelectCover("cover-3");
    });

    expect(result.current.selectedCoverId).toBe("cover-3"); // Should still update state
    expect(localStorage.getItem("selectedCover")).toBeNull();
  });
});
