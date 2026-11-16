import thumbnailCimarron from "../../../assets/thumbnails/cimarron.webp";
import thumbnailCreser from "../../../assets/thumbnails/creser.webp";
import thumbnailIedcc from "../../../assets/thumbnails/iedcc.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Asociación Cimarrón",
    slug: "cimarron",
    thumbnail: thumbnailCimarron,
    description: "Pagos con Wompi, APIs y almacenamiento · asocimarron.org",
  },
  {
    title: "Fundación CRESER",
    slug: "creser",
    thumbnail: thumbnailCreser,
    description: "Estructura corporativa digital · creserfundacion.org",
  },
  {
    title: "IEDCC",
    slug: "iedcc",
    thumbnail: thumbnailIedcc,
    description: "Estructura corporativa digital · iedcc.org",
  },
] as const satisfies ProjectPreview[];
