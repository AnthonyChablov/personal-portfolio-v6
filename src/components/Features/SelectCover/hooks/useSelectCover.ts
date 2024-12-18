import { useState, useEffect } from "react";
import { coverData } from "../data/coverData";

export const useSelectCover = (defaultCoverId: string) => {
  const [selectedCoverId, setSelectedCoverId] =
    useState<string>(defaultCoverId);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Loading state

  // Effect to handle local storage after client-side mount
  useEffect(() => {
    try {
      const savedCover = localStorage.getItem("selectedCover");
      if (savedCover) {
        setSelectedCoverId(savedCover);
      }
    } catch (error) {
      console.error("Failed to read cover from local storage", error);
    } finally {
      setIsLoading(false); // Stop loading after attempting to fetch emoji
    }
  }, []);

  const handleSelectCover = (coverId: string) => {
    try {
      localStorage.setItem("selectedCover", coverId);
      setSelectedCoverId(coverId);
    } catch (error) {
      console.error("Failed to save emoji to local storage", error);
    }
  };

  // Dynamically find the selected cover component based on the ID
  const selectedCoverComponent = coverData.find(
    (cover) => cover.id === selectedCoverId
  )?.component;

  return {
    isLoading,
    selectedCoverId,
    selectedCoverComponent,
    handleSelectCover,
    coverData,
  };
};
