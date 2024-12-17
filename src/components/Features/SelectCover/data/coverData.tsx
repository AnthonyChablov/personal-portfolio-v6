import Dithered from "../options/Dithered";
import GlitchText from "../options/GlitchText";
import ShapesFlux from "../options/ShapesFlux";
import TrippyShapesFlux from "../options/TrippyShapesFlux";

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
    id: "ShapesFlux",
    name: "ShapesFlux",
    component: <ShapesFlux />,
  },
  {
    id: "TrippyShapesFlux",
    name: "TrippyShapesFlux",
    component: <TrippyShapesFlux />,
  },
  // Add more banners here if needed
];
