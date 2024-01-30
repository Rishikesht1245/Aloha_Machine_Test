import { Highlights } from "../interfaces/data";
import higlight1 from "../assets/highlight1.png";
import higlight2 from "../assets/highlight2.png";
import higlight3 from "../assets/highlight3.png";

export const highlightsData: Highlights[] = [
  {
    id: "1",
    type: "Surfing",
    image: higlight1,
    alt: "Surfing",
    description: "Best Hawaiian islands for surfing.",
  },
  {
    id: "2",
    type: "Hula",
    image: higlight2,
    alt: "Hula",
    description: "Try it yourself.",
  },
  {
    id: "3",
    type: "Vulcanoes",
    image: higlight3,
    alt: "Vulcanoes",
    description: "Volcanic conditions can change at any time.",
  },
];
