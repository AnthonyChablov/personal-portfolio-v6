import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Page from '../page'

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

describe("page.tsx", () => {
  it("should render in the DOM.", () => {
    // Act
    render(<Page/>);
    const activeStatus = screen.getByRole('main');

    // Assert
    expect(activeStatus).toBeInTheDocument();
  });
});
