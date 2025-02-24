import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import BlinkingTextBox from "../BlinkingTextBox";

describe("BlinkingTextBox.tsx", () => {
  it("should render in the DOM.", () => {

    // Act
    render(<BlinkingTextBox />);
    const textBox = screen.getByTestId('text-box');

    // Assert
    expect(textBox).toBeInTheDocument();
  });

  it("should apply classname", () => {
    // Arrange
    const className = 'custom-classname'

    // Act
    render(<BlinkingTextBox  className={className}/>);
    const textBox = screen.getByTestId('text-box');

    // Assert
    expect(textBox).toHaveClass(className);
  });

 
});
