import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ShapesFlux from "../Shapes";

describe("Shapes.tsx", () => {
  it("should render in the dom", () => {
    // Arrange
    const testId = 'shapes-cover'

    // Act
    render(<ShapesFlux  />);
    const cover = screen.getByTestId(testId);

    // Assert
    expect(cover).toBeInTheDocument();
  });
});
