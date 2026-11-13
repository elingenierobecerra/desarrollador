import thumbnailSemaforo from "../../../assets/thumbnails/semaforo.webp";
import thumbnailCaneca from "../../../assets/thumbnails/caneca.webp";
import thumbnailAlarma from "../../../assets/thumbnails/alarma.webp";
import thumbnailSolar from "../../../assets/thumbnails/solar.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Smart Traffic Light",
    slug: "semaforo",
    thumbnail: thumbnailSemaforo,
    description: "Automated pedestrian crossing · Basic level",
  },
  {
    title: "Touchless Trash Bin",
    slug: "caneca",
    thumbnail: thumbnailCaneca,
    description: "Touchless ultrasonic lid · Basic level",
  },
  {
    title: "Home Automation Alarm",
    slug: "alarma",
    thumbnail: thumbnailAlarma,
    description: "Motion and light security · Basic level",
  },
  {
    title: "Dual-Axis Solar Tracker",
    slug: "solar",
    thumbnail: thumbnailSolar,
    description: "Energy efficiency · Intermediate level",
  },
] as const satisfies ProjectPreview[];
