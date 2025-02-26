import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { coverData } from "../data/coverData";
import SelectCover from "../SelectCover";

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

    it('should toggle the dropdown menu when button is clicked', async () => {
        // Arrange
        render(<SelectCover />);

        // Act
        const button = screen.getByRole("button", { name: "Change cover" });
        fireEvent.click(button);

        // Assert
        await waitFor(() => {
            expect(screen.queryByTestId("content")).toBeInTheDocument();
        });
    });

    it('should toggle the dropdown menu with all options when button is clicked', async () => {
        // Arrange
        render(<SelectCover />);

        // Act
        const button = screen.getByRole("button", { name: "Change cover" });
        fireEvent(button, new MouseEvent('click', { bubbles: true }));

        // Assert
        await waitFor(() => {
            expect(screen.getAllByTestId("menu-item").length).toBe(coverData.length);
        });
    });

    it('should close the dropdown when the button is double clicked', async () => {
        // Arrange
        render(<SelectCover />);

        // Act
        const button = screen.getByRole("button", { name: "Change cover" });
        fireEvent.doubleClick(button);

        // Assert
        await waitFor(() => {
            expect(screen.queryByTestId("content")).not.toBeInTheDocument();
        });
    });

   
});
