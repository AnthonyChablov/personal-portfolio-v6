import AnimatedBanner1 from "../options/GlitchTextBanner";
import DitheredBanner from "../options/DitheredBanner";

export interface Banner {
  id: string;
  name: string;
  component: React.ReactNode;
}

export const bannerData: Banner[] = [
  {
    id: "AnimatedBanner1",
    name: "Animated Banner 1",
    component: <AnimatedBanner1 />,
  },
  {
    id: "DitheredBanner",
    name: "Dithered Banner",
    component: <DitheredBanner />,
  },
  // Add more banners here if needed
];
