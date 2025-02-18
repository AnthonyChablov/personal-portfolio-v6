import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import {BlinkingDot} from "../BlinkingDot";

describe("BlinkingDot.tsx", () => {
  it("should render in the DOM.", () => {

    // Act
    render(<BlinkingDot />);
    const blinkingDot = screen.getByRole('blinking-dot');

    // Assert
    expect(blinkingDot).toBeInTheDocument();
  });

  it("should apply classname", () => {
    // Arrange
    const className = 'custom-classname'

    // Act
    render(<BlinkingDot  className={className}/>);
    const blinkingDot = screen.getByRole('blinking-dot');

    // Assert
    expect(blinkingDot).toHaveClass(className);
  });

 
});
