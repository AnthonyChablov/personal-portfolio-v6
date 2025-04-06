import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Loading from "../loading";

describe("loading.tsx", () => {
  it("should render in the DOM with the correct header text", () => {
    // Arrange
    // Act
    render(<Loading  />);
    const loadingComponent = screen.getByTestId('loading-spinner');
    
    // Assert
    expect(loadingComponent).toBeInTheDocument();
  });

});
