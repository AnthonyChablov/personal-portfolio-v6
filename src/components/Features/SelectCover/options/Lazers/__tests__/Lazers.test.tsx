import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Lazers from "../Lazers";

describe("Lazers.tsx", () => {
  it("should render in the dom", () => {
    // Arrange
    const testId = 'lazer-cover'

    // Act
    render(<Lazers  />);
    const cover = screen.getByTestId(testId);

    // Assert
    expect(cover).toBeInTheDocument();
  });
});
