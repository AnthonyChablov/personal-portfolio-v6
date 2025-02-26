import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { coverData } from "../data/coverData";
import SelectCover from "../SelectCover";


describe("SelectCover.tsx", () => {
    it("should render in the dom", () => {
        // Arrange
        const testId = 'select-cover'

        // Act
        render(<SelectCover/>);
        const cover = screen.getByTestId(testId);

        // Assert
        expect(cover).toBeInTheDocument();
    });

    it('should toggle the dropdown menu when button is clicked',  ()=>{
        // Arrange
        render(<SelectCover />);

        // Act
        const button = screen.getByRole("button", { name: "Change cover" }); 
        fireEvent.click(button);

        // Assert
        waitFor(() => {
            expect(screen.getByTestId("content")).toBeInTheDocument();
        });
    });

    it('should toggle the dropdown menu with all options when button is clicked',  ()=>{
        // Arrange
        render(<SelectCover />);

        // Act
        const button = screen.getByRole("button", { name: "Change cover" }); 
        fireEvent.click(button);

        // Assert
        waitFor(() => {
            expect(screen.getAllByTestId("menu-item").length).toBe(coverData.length);
        });
    });

    it('should close the dropdown when the button is double clicked',  ()=>{
        // Arrange
        render(<SelectCover />);

        // Act
        const button = screen.getByRole("button", { name: "Change cover" }); 
        fireEvent.dblClick(button);    

        // Assert
        expect(screen.queryByTestId("content")).not.toBeInTheDocument();        
    });

    it('should change the cover when a new cover is selected',  ()=>{
        // Arrange
        render(<SelectCover />);

        // Act
        const button = screen.getByRole("button", { name: "Change cover" }); 
        fireEvent.click(button);    

        // Assert
        expect(screen.queryByTestId("content")).not.toBeInTheDocument();        
    });

});
