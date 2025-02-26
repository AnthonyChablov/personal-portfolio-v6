import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import GlitchText from "../GlitchText";


describe("GlitchText.tsx", () => {
  it("should render in the dom", () => {
    // Arrange
    const testId = 'glitch-cover'

    // Act
    render(<GlitchText  />);
    const cover = screen.getByTestId(testId);

    // Assert
    expect(cover).toBeInTheDocument();
  });
});
