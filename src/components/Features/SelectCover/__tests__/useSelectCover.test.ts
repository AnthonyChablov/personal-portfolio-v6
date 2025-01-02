import { describe, it, expect, vi, beforeEach } from "vitest";
import { selectCover } from "../hooks/useSelectCover";
import { coverData } from "../data/coverData";

describe("selectCover", () => {
  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks();
    localStorage.clear();
  });

  it("should return the correct cover component when a valid cover ID is provided", () => {
    // Arrange
    const validCoverId = "Dithered";
    const expectedCover = coverData.find((cover) => cover.id === validCoverId)?.component;

    // Act
    const selectedCover = selectCover(validCoverId);

    // Assert
    expect(selectedCover).toBe(expectedCover);
  });
});
