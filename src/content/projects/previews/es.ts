import thumbnailSemaforo from "../../../assets/thumbnails/semaforo.webp";
import thumbnailCaneca from "../../../assets/thumbnails/caneca.webp";
import thumbnailAlarma from "../../../assets/thumbnails/alarma.webp";
import thumbnailSolar from "../../../assets/thumbnails/solar.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Semáforo Inteligente",
    slug: "semaforo",
    thumbnail: thumbnailSemaforo,
    description: "Paso peatonal automatizado · Nivel básico",
  },
  {
    title: "Caneca Automática",
    slug: "caneca",
    thumbnail: thumbnailCaneca,
    description: "Tapa sin contacto con ultrasonido · Nivel básico",
  },
  {
    title: "Alarma Domótica",
    slug: "alarma",
    thumbnail: thumbnailAlarma,
    description: "Seguridad por movimiento y luz · Nivel básico",
  },
  {
    title: "Seguidor Solar de Dos Ejes",
    slug: "solar",
    thumbnail: thumbnailSolar,
    description: "Eficiencia energética · Nivel intermedio",
  },
] as const satisfies ProjectPreview[];
