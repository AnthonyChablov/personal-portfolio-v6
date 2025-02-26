import Dithered from "../options/Dithered/Dithered";
import GlitchText from "../options/GlitchText/GlitchText";
import Shapes from "../options/Shapes/Shapes";
import Raindrops from "../options/Raindrops/Raindrops";
import Lazers from "../options/Lazers/Lazers";
import Ambient from "../options/Ambient/Ambient";

export interface CoverItem {
  id: string;
  name: string;
  component: React.ReactNode;
}

export const coverData: CoverItem[] = [
  {
    id: "Dithered",
    name: "Dithered",
    component: <Dithered />,
  },
  {
    id: "GlitchText",
    name: "GlitchText",
    component: <GlitchText />,
  },
  {
    id: "Shapes",
    name: "Shapes",
    component: <Shapes />,
  },
  {
    id: "Lazers",
    name: "Lazers",
    component: <Lazers />,
  },
  {
    id: "Raindrops",
    name: "Raindrops",
    component: <Raindrops />,
  },
  {
    id: "Ambient",
    name: "Ambient",
    component: <Ambient />,
  },

  // Add more banners here if needed
];
