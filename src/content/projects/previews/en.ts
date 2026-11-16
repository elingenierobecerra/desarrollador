import thumbnailCimarron from "../../../assets/thumbnails/cimarron.webp";
import thumbnailCreser from "../../../assets/thumbnails/creser.webp";
import thumbnailIedcc from "../../../assets/thumbnails/iedcc.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Asociación Cimarrón",
    slug: "cimarron",
    thumbnail: thumbnailCimarron,
    description: "Wompi payments, APIs and storage · asocimarron.org",
  },
  {
    title: "Fundación CRESER",
    slug: "creser",
    thumbnail: thumbnailCreser,
    description: "Corporate digital structure · creserfundacion.org",
  },
  {
    title: "IEDCC",
    slug: "iedcc",
    thumbnail: thumbnailIedcc,
    description: "Corporate digital structure · iedcc.org",
  },
] as const satisfies ProjectPreview[];
