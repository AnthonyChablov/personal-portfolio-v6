import { render, screen } from "@testing-library/react";
import Footer from "../Footer";
import { describe, it, expect } from "vitest";

describe("Footer.tsx", () => {
  it("should render in the DOM", () => {
    // Arrange

    // Act
    render(<Footer />);
    const footerComponent = screen.getByRole("footer");

    // Assert
    expect(footerComponent).toBeInTheDocument();
  });

  it("should render current date correctly", () => {
    // Arrange
    const currentYear = new Date().getFullYear().toString();

    // Act
    render(<Footer />);
    // Select the footer and the date
    const footerComponent = screen.getByRole("footer");
    const footerDate = screen.getByRole("content-info");

    // Assert
    expect(footerComponent).toBeInTheDocument();
    expect(footerDate).toBeInTheDocument();
    expect(footerDate).toHaveTextContent(
      `© ${currentYear} Created and built by Anthony Chablov`
    );
  });
});
