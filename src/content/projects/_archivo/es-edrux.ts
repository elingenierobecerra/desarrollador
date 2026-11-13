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
    "Edrux es una plataforma web full stack desarrollada en Bogotá que digitaliza procesos clave del negocio y expone la información operacional a través de una interfaz moderna y responsiva.<br/><br/>Desarrollada con Next.js y Node.js sobre una plataforma de datos SQL, incorpora autenticación, módulos por rol e integraciones con los sistemas existentes de la empresa (ERP), con reportes en Power BI para la toma de decisiones.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoEdrux,
        caption: "Recorrido del producto (medio de referencia)",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: edrux0,
        alt: "Vista general de módulos (imagen de referencia)",
        caption: "Vista general de módulos (imagen de referencia)",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: edrux1,
        alt: "Flujos de captura de datos (imagen de referencia)",
        caption: "Flujos de captura de datos (imagen de referencia)",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: edrux2,
        alt: "Vistas de reportes (imagen de referencia)",
        caption: "Vistas de reportes (imagen de referencia)",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: edrux3,
        alt: "Diseño responsivo (imagen de referencia)",
        caption: "Diseño responsivo (imagen de referencia)",
      },
    },
  ],
} as const satisfies ProjectContent;
