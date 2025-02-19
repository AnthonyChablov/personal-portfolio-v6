import { useState, useEffect } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        const storedValue = localStorage.getItem(key);
        if (storedValue !== null) {
          setValue(JSON.parse(storedValue));
        } else {
          localStorage.setItem(key, JSON.stringify(initialValue));
        }
      }
    } catch (error) {
      console.error(`Failed to read ${key} from local storage`, error);
    } finally {
      setIsLoading(false);
    }
  }, [key, initialValue]);

  const setStoredValue = (newValue: T) => {
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem(key, JSON.stringify(newValue));
        setValue(newValue);
      }
    } catch (error) {
      console.error(`Failed to write ${key} to local storage`, error);
    }
  };

  return { value, setStoredValue, isLoading };
}
