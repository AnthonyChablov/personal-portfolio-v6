import { expect, it, describe, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { useLocalStorage } from "../useLocalStorage";


describe('useLocalStorage.tsx', () => { 
    it('should call getItem on initial render with initialValue', () => {
        // Arrange: Spy on window.localStorage.setItem 
        const getItemSpy = vi.spyOn(window.localStorage, 'getItem');

        // Act: Render the hook with initial value 
        renderHook(() => useLocalStorage({ initialValue: true, key: 'new' }));

        // Assert: Ensure setItem was called with correct arguments  
        expect(getItemSpy).toHaveBeenCalledWith( 'new' );

        // Clean up: Restore the spy after the test 
        getItemSpy.mockRestore();
    });

    
})