import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Divider from "../Divider";

describe("Divider.tsx", () => {
  it("should render in the DOM", () => {
    // Arrange
    const testID = "divider";

    // Act
    render(<Divider />);
    const dividerComponent = screen.getByTestId(testID);

    // Assert
    expect(dividerComponent).toBeInTheDocument();
  });

  it("should render with custom classnames", () => {
    // Arrange
    const className = "divider-classname";
    const borderColour = "border-zinc-700";
    const borderWidth = "border-b";
    const borderStyle = "solid";
    const margin = "my-1";

    // Act
    render(
      <Divider
        className={className}
        borderColor={borderColour}
        borderWidth={borderWidth}
        borderStyle={borderStyle}
        margin={margin}
      />
    );
    const dividerComponent = screen.getByTestId("divider");

    // Assert
    expect(dividerComponent).toHaveClass(className);
  });
});
