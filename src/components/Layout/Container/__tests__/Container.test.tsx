import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Container from "../Container";

describe("Container.tsx", () => {
  it("should render in the DOM", () => {
    // Arrange
    const role = "container";

    // Act
    render(
      <Container>
        <></>
      </Container>
    );
    const containerComponent = screen.getByRole(role);

    // Assert
    expect(containerComponent).toBeInTheDocument();
  });

  it("should render with custom classnames", () => {
    // Arrange
    const customClassName = "custom-class-name";
    const role = "container";

    // Act
    render(
      <Container className={`${customClassName}`}>
        <></>
      </Container>
    );
    const containerComponent = screen.getByRole(role);

    // Assert
    expect(containerComponent).toHaveClass(`${customClassName}`);
  });

  it("should render with children", () => {
    // Arrange
    const role = "child";
    const child = <div role={`${role}`}>child</div>;

    // Act
    render(<Container>{child}</Container>);
    const containerChild = screen.getByRole("child");

    // Assert
    expect(containerChild).toBeInTheDocument();
  });
});
