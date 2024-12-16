// useBannerSelect.ts
import { useState } from "react";

export interface Banner {
  id: string;
  name: string;
}

export const useSelectBanner = (defaultBannerId: string) => {
  const [selectedBannerId, setSelectedBannerId] =
    useState<string>(defaultBannerId);

  const handleSelectBanner = (bannerId: string) => {
    setSelectedBannerId(bannerId);
  };

  return { selectedBannerId, handleSelectBanner };
};
