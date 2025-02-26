import { expect, it, describe, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import Lenis from "lenis";
import useLenis from "../useLenis";

// --- Setup: Mock Lenis ---
// vi.mock must return an object with a default key when mocking a default export.
beforeEach(() => {
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

describe("useLenis.tsx", () => {
  it("should initialize Lenis instance with correct parameters", () => {
    // Act: Render the hook
    renderHook(() => useLenis());

    // Assert: Verify that Lenis was constructed with the expected options
    expect(Lenis).toHaveBeenCalledWith({
      wheelMultiplier: 1,
      touchMultiplier: 1,
    });
  });

  it("should call lenis.destroy on unmount", () => {
    // Arrange: Create mocks for Lenis
    const rafMock = vi.fn();
    const destroyMock = vi.fn();
    vi.mocked(Lenis).mockReturnValueOnce({
      raf: rafMock,
      destroy: destroyMock,
    } as unknown as Lenis);

    // Act: Render the hook and then unmount it
    const { unmount } = renderHook(() => useLenis());
    unmount();

    // Assert: Verify that the destroy method was called during cleanup
    expect(destroyMock).toHaveBeenCalled();
  });
});
