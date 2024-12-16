import AnimatedBanner1 from "../BannerOptions/AnimatedBanner1";
import DitheredBanner from "../BannerOptions/DitheredBanner";

export interface Banner {
  name: string;
  component: React.ComponentType;
}

export const bannerData: Banner[] = [
  {
    name: "Animated Banner 1",
    component: AnimatedBanner1,
  },
  {
    name: "Dithered Banner",
    component: DitheredBanner,
  },
  // Add more banners here if needed
];
