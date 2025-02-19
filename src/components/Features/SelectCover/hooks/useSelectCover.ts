import { coverData } from "../data/coverData";
import { useLocalStorage } from "@/hooks/useLocalStorage/useLocalStorage";

export const useSelectCover = (defaultCoverId: string) => {
  // Use local storage hook to persist selected cover ID
  const { value: selectedCoverId, setStoredValue: setSelectedCoverId, isLoading } =
    useLocalStorage("selectedCover", defaultCoverId);

  // Find the selected cover component dynamically
  const selectedCover = coverData.find((cover) => cover.id === selectedCoverId)?.component;

  return {
    isLoading,
    selectedCoverId,
    selectedCover,
    setSelectedCoverId, // Update the selected cover ID
    coverData,
  };
};
