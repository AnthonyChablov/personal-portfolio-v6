import { describe, it,  } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SelectEmoji from "../SelectEmoji";

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

  it('should toggle the dropdown menu when button is clicked', async () => {
    // Arrange
    render(<SelectEmoji />);
  
    // Act: Click the button to open the dropdown
    const button = screen.getByRole('button');
    fireEvent.click(button);
  
    // Wait for the dropdown content to appear
    await waitFor(() => {
      const content = screen.queryByTestId('content');
      expect(content).toBeTruthy(); 
    });
  
    // Act again: Click the button to close the dropdown
    fireEvent(button, new MouseEvent('click', { bubbles: true }));
  
    // Wait for the dropdown content to disappear
    await waitFor(() => {
      const content = screen.queryByTestId('content');
      expect(content).toBeNull()
    });
  });

  it('should have the dropdown start closed', async () => {
    // Arrange
    render(<SelectEmoji />);
  
    // Wait for the dropdown content to appear
    await waitFor(() => {
      const content = screen.queryByTestId('content');
      expect(content).toBeNull(); 
    });
    
  });

 
});
