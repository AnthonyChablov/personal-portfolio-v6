// useBannerSelect.ts
import { useState } from "react";

export interface Cover {
  id: string;
  name: string;
}

export const useSelectCover = (defaultCoverId: string) => {
  const [selectedCoverId, setSelectedCoverId] =
    useState<string>(defaultCoverId);

  const handleSelectCover = (coverId: string) => {
    setSelectedCoverId(coverId);
  };

  return { selectedCoverId, handleSelectCover };
};
