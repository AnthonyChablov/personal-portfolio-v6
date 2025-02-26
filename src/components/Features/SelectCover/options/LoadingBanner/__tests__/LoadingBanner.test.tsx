import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import LoadingBanner from "../LoadingBanner";

describe("Raindrops.tsx", () => {
  it("should render in the dom", () => {
    // Arrange
    const testId = 'cover';

    // Act
    render(<LoadingBanner/>);
    const cover = screen.getByTestId(testId);

    // Assert
    expect(cover).toBeInTheDocument();
  });
});
