import Dithered from "../options/Dithered";
import GlitchText from "../options/GlitchText";
import ShapeFlux from "../options/ShapesFlux";

export interface Cover {
  id: string;
  name: string;
  component: React.ReactNode;
}

export const coverData: Cover[] = [
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
    id: "ShapeFlux",
    name: "ShapeFlux",
    component: <ShapeFlux />,
  },
  // Add more banners here if needed
];
