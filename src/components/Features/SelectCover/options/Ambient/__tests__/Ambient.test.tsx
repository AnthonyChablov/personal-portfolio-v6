import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Ambient from "../Ambient";


describe("Ambient.tsx", () => {
  it("should render in the dom", () => {
    // Arrange
    const testId = 'ambient-cover'

    // Act
    render(<Ambient  />);
    const ambient = screen.getByTestId(testId);

    // Assert
    expect(ambient).toBeInTheDocument();
  });
});
