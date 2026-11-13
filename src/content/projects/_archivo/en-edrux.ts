import videoEdrux from "../../../assets/videos/pokedex.mp4";

import edrux0 from "../../../assets/images/projects/pokedex/pokedex-0.webp";
import edrux1 from "../../../assets/images/projects/pokedex/pokedex-1.webp";
import edrux2 from "../../../assets/images/projects/pokedex/pokedex-2.webp";
import edrux3 from "../../../assets/images/projects/pokedex/pokedex-3.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Edrux",
  theme: "dark",
  tags: ["next", "node", "javascript", "erp"],
  description:
    "Edrux is a full stack web platform built in Bogotá that digitizes key business processes and exposes operational data through a modern, responsive interface.<br/><br/>Developed with Next.js and Node.js on a SQL data platform, it includes authentication, role-based modules and integrations with the company's existing systems (ERP), with Power BI reports for decision making.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoEdrux,
        caption: "Product walkthrough (reference media)",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: edrux0,
        alt: "Module overview (reference image)",
        caption: "Module overview (reference image)",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: edrux1,
        alt: "Data entry flows (reference image)",
        caption: "Data entry flows (reference image)",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: edrux2,
        alt: "Reporting views (reference image)",
        caption: "Reporting views (reference image)",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: edrux3,
        alt: "Responsive design (reference image)",
        caption: "Responsive design (reference image)",
      },
    },
  ],
} as const satisfies ProjectContent;
