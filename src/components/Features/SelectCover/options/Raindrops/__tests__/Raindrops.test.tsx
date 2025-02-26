import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Raindrops from "../Raindrops";

describe("Raindrops.tsx", () => {
  it("should render in the dom", () => {
    // Arrange
    const testId = 'raindrop-cover'

    // Act
    render(<Raindrops  />);
    const cover = screen.getByTestId(testId);

    // Assert
    expect(cover).toBeInTheDocument();
  });
});
