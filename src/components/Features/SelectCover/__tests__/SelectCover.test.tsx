import { render, screen, } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SelectCover from "../SelectCover";

/* 
  Radix UI Portal Behavior: 
  Radix UI's dropdown menu renders its content in a portal outside of component's DOM tree, 
  which can be tricky to test. 
*/

describe("SelectCover.tsx", () => {
    it("should render in the dom", () => {
        // Arrange
        const testId = 'select-cover';

        // Act
        render(<SelectCover />);
        const cover = screen.getByTestId(testId);

        // Assert
        expect(cover).toBeInTheDocument();
    });
});
