import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ActiveStatus from "../ActiveStatus";

describe("Indicator.tsx", () => {
  it("should render in the DOM.", () => {
    // Act
    render(<ActiveStatus />);
    const activeStatus = screen.getByRole('active-status');

    // Assert
    expect(activeStatus).toBeInTheDocument();
  });

});
