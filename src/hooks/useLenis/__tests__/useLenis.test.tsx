import { expect, it, describe, vi } from "vitest";
import { renderHook} from "@testing-library/react";
import Lenis from "lenis";
import useLenis from "../useLenis";

// Mock localStorage
beforeEach(() => {
    // Mocking Lenis and requestAnimationFrame
    vi.mock("lenis", () => ({
        default: vi.fn().mockImplementation(() => ({
          raf: vi.fn(),
          destroy: vi.fn(),
        })),
    }));
});

afterEach(() => {
    vi.restoreAllMocks();
    vi.clearAllMocks();
});

describe('useLenis.tsx', () => { 
    it("should initialize Lenis instance and call raf", () => {
        // Act: Render the hook
        renderHook(() => useLenis());
    
        // Assert: Check if Lenis constructor is called
        expect(Lenis).toHaveBeenCalledWith({
          wheelMultiplier: 1,
          touchMultiplier: 1,
        });
    });
})