import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ActiveStatus from "../ActiveStatus";

describe("ActiveStatus.tsx", () => {
  it("should render in the DOM.", () => {
    // Arrange
    const status = 'online';

    // Act
    render(<ActiveStatus activeStatus={status} />);
    const activeStatus = screen.getByTestId('active-status');

    // Assert
    expect(activeStatus).toBeInTheDocument();
  });

  it("should display online active status", () => {
    // Arrange
    const status = 'online';

    // Act
    render(<ActiveStatus activeStatus={status} />);
    const activeStatus = screen.getByTestId('active-status');

    // Assert
    expect(activeStatus).toBeInTheDocument();
    expect(activeStatus).toHaveClass('bg-green-500');
  });

  it("should display away active status", () => {
    // Arrange
    const status = 'away';

    // Act
    render(<ActiveStatus activeStatus={status} />);
    const activeStatus = screen.getByTestId('active-status');

    // Assert
    expect(activeStatus).toBeInTheDocument();
    expect(activeStatus).toHaveClass('bg-yellow-500');
  });

  it("should display unavailable active status", () => {
    // Arrange
    const status = 'unavailable';

    // Act
    render(<ActiveStatus activeStatus={status} />);
    const activeStatus = screen.getByTestId('active-status');

    // Assert
    expect(activeStatus).toBeInTheDocument();
    expect(activeStatus).toHaveClass('bg-red-500');
  });

  it("should default to online active status when there are no props passed in", () => {

    // Act
    render(<ActiveStatus />);

    const activeStatus = screen.getByTestId('active-status');

    // Assert
    expect(activeStatus).toBeInTheDocument();
    expect(activeStatus).toHaveClass('bg-green-500');
  });

  it("should apply custom className", () => {
    // Arrange
    const customClass = 'custom-class';

    // Act
    render(<ActiveStatus className={customClass} />);
    const activeStatus = screen.getByTestId('active-status');

    // Assert
    expect(activeStatus).toBeInTheDocument();
    expect(activeStatus).toHaveClass(customClass);
  });

});
