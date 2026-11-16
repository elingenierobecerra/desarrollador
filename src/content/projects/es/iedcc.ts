import image from "../../../assets/images/projects/corporativo/iedcc.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "IEDCC",
  theme: "dark",
  tags: ["html", "css", "javascript"],
  live: "https://iedcc.org/",
  description:
    "Creé toda la estructura corporativa digital de la Iglesia Evangélica Discípulos de Cristo de Colombia (IEDCC): identidad institucional en línea, organización de contenidos y plataforma web en producción.<br/><br/><strong>Proyecto de referencia.</strong> Una organización con presencia nacional que necesitaba un punto único y ordenado de información y contacto.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image,
        alt: "IEDCC",
        caption: "iedcc.org",
      },
    },
    {
      type: "text",
      props: {
        title: "Qué conlleva el proyecto",
        text: "La organización requería comunicar su misión, visión y valores, dar a conocer sus servicios y mantener informada a su comunidad sobre reuniones, discipulados y la Escuela Bíblica.<br/><br/>Definí la estructura del sitio y la construí de principio a fin: Inicio, Nosotros, Servicios, Anuncios, Iglesias, Publicaciones, Ubicación y Contacto.",
      },
    },
    {
      type: "list",
      props: {
        title: "Qué construí",
        items: [
          "Arquitectura de la información y estructura corporativa del sitio.",
          "Sitio adaptable a móvil y escritorio, con metadatos para buscadores y redes sociales.",
          "Sección de anuncios para la programación de actividades y la Escuela Bíblica.",
          "Formulario de contacto y enlaces directos de teléfono, correo y WhatsApp.",
          "Mapa de ubicación integrado y enlaces a las redes de la organización.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Mi rol",
        items: [
          "Definición de lineamientos técnicos y de la estructura de la solución.",
          "Diseño, desarrollo y puesta en producción.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
