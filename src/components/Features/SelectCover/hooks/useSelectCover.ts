import { useState } from "react";
import { coverData } from "../data/coverData";

export const useSelectCover = (defaultCoverId: string) => {
  const [selectedCoverId, setSelectedCoverId] =
    useState<string>(defaultCoverId);

  const handleSelectCover = (coverId: string) => {
    setSelectedCoverId(coverId);
  };

  // Dynamically find the selected cover component based on the ID
  const selectedCoverComponent = coverData.find(
    (cover) => cover.id === selectedCoverId
  )?.component;

  return {
    selectedCoverId,
    selectedCoverComponent,
    handleSelectCover,
    coverData,
  };
};
