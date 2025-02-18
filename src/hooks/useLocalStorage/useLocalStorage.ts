import { useState } from "react";

interface UseLocalStorageProps<T> {
  key: string; // Key for local storage
  initialValue: T; // Default value if nothing is in local storage
}

export const useLocalStorage = <T>({
  key,
  initialValue,
}: UseLocalStorageProps<T>) => {
  // Getting
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.error("Error reading local storage:", error);
      return initialValue;
    }
  });

  // Setting
  // Update local storage when the stored value changes
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error("Error saving to local storage:", error);
    }
  };

  return [storedValue, setValue] as const;
};
