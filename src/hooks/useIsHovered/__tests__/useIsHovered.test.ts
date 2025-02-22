import { expect, it, describe,  } from "vitest";
import { renderHook, act } from "@testing-library/react";
import useIsHovered from "../useIsHovered";

describe('useIsHovered.tsx', () => { 
    it('should initialize initial state to false' , ()=>{
        // Arrange: Render the hook
        const { result } = renderHook(() => useIsHovered());

        // Assert: Check that isHovered is initially false
        expect(result.current.isHovered).toBe(false);
    });

    it('should change the state to true when mouse enters' , ()=>{
        // Arrange: Render the hook
        const { result } = renderHook(() => useIsHovered());

        act(() => {
            result.current.onMouseEnter();
        });

        // Assert: Check that isHovered is initially false
        expect(result.current.isHovered).toBe(true);
    });

    it('should change the state back false when mouse leaves' , ()=>{
        // Arrange: Render the hook
        const { result } = renderHook(() => useIsHovered());
        
        act(() => {
            result.current.onMouseEnter();            
            result.current.onMouseLeave();

        });

        // Assert: Check that isHovered is initially false
        expect(result.current.isHovered).toBe(false);
    });
});