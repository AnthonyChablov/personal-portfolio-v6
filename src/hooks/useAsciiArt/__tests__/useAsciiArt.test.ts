import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { useState } from "react";
import useAsciiArt from "../useAsciiArt"; // Update with the correct import path

// A helper component that uses the hook for testing
const TestComponent = ({ asciiArt }: { asciiArt: string }) => {
  useAsciiArt(asciiArt);
  return null; // We don't need to render anything for the test
};

describe("useAsciiArt hook", () => {
  it("should call console.log with the correct ASCII art", () => {
    // Arrange
    const asciiArt = "Sample ASCII Art";

    // Mock console.log
    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    // Act
    render(<TestComponent asciiArt={asciiArt} />);

    // Assert
    expect(logSpy).toHaveBeenCalledWith(
      "%c" + asciiArt, 
      "font-family: monospace;"
    );

    // Clean up the spy after the test
    logSpy.mockRestore();
  });
});
