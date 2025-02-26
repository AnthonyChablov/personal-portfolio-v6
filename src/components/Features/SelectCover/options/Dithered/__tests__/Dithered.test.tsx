import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import DitheredBanner from "../Dithered";


describe("Dithered.tsx", () => {
  it("should render in the dom", () => {
    // Arrange
    const testId = 'cover'

    // Act
    render(<DitheredBanner  />);
    const cover = screen.getByTestId(testId);

    // Assert
    expect(cover).toBeInTheDocument();
  });
});
