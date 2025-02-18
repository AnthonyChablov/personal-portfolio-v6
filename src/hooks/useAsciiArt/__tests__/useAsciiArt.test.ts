import { expect, it, describe, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { asciiArt } from "../data/asciiArt";
import useAsciiArt from "../useAsciiArt";

describe('useAsciiArt.ts', () => { 
    it('should print ASCII art to console with styling', () => {
        // Arrange
        const consoleSpy = vi.spyOn(console, 'log');
        const ascii = asciiArt;

        // Act
        renderHook(() => useAsciiArt(ascii));

        // Assert
        expect(consoleSpy).toHaveBeenCalledWith(
            expect.stringContaining("Hello World"),
            "font-family: monospace;"
        );
        
        // Clean up
        consoleSpy.mockRestore();
    });

    // Alternative approach using mock.calls if you need more specific checks
    it('should print ASCII art with correct formatting', () => {
        // Arrange
        const consoleSpy = vi.spyOn(console, 'log');
        const ascii = asciiArt;

        // Act
        renderHook(() => useAsciiArt(ascii));

        // Assert
        // Check for the ascii art
        expect(consoleSpy.mock.calls[0][0]).toContain(ascii);
        
        // Clean up
        consoleSpy.mockRestore();
    });
})