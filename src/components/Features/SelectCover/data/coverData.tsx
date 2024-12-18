import Dithered from "../options/Dithered";
import GlitchText from "../options/GlitchText";
import Shapes from "../options/Shapes";
import Raindrops from "../options/Raindrops";
import Lazers from "../options/Lazers";
export interface CoverItem {
  id: string;
  name: string;
  component: React.ReactNode;
}

export const coverData: CoverItem[] = [
  {
    id: "GlitchText",
    name: "GlitchText",
    component: <GlitchText />,
  },
  {
    id: "Dithered",
    name: "Dithered",
    component: <Dithered />,
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

  // Add more banners here if needed
];
