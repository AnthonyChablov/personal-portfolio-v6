import { describe, it,  } from "vitest";
import { render, screen,  } from "@testing-library/react";
import SelectEmoji from "../SelectEmoji";

/* 
  Radix UI Portal Behavior: 
  Radix UI's dropdown menu renders its content in a portal outside of component's DOM tree, 
  which can be tricky to test. 
*/

describe("SelectEmoji", () => {
  it("should render in the dom.", () => {
      // Arrange
      const testId = 'select-emoji'

      // Act
      render(<SelectEmoji/>);
      const cover = screen.getByTestId(testId);

      // Assert
      expect(cover).toBeInTheDocument();
  });
});
