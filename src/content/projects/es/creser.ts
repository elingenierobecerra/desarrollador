import image from "../../../assets/images/projects/corporativo/creser.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Fundación CRESER",
  theme: "dark",
  tags: ["html", "css", "javascript"],
  live: "https://www.creserfundacion.org/",
  description:
    "Creé toda la estructura corporativa digital de la Fundación CRESER, centro de psicología integral en Medellín: desde la arquitectura de la información hasta la plataforma web publicada en producción.<br/><br/><strong>Proyecto de referencia.</strong> Muestra cómo llevo una organización desde cero hasta una presencia institucional completa, con criterios de calidad, seguridad y mantenibilidad.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image,
        alt: "Fundación CRESER",
        caption: "creserfundacion.org",
      },
    },
    {
      type: "text",
      props: {
        title: "Qué conlleva el proyecto",
        text: "La fundación necesitaba presentar sus servicios de psicología, neuropsicología y bienestar organizacional, junto con sus programas BAMBÚ y ES CRESER, y abrir canales claros para agendar citas y recibir donaciones.<br/><br/>Definí la estructura del sitio, sus secciones y recorridos, y la construí de principio a fin: Inicio, Nosotros, Servicios, Programas, Equipo, Contacto y Donar.",
      },
    },
    {
      type: "list",
      props: {
        title: "Qué construí",
        items: [
          "Arquitectura de la información y estructura corporativa del sitio.",
          "Sitio adaptable a móvil y escritorio, con metadatos para buscadores y redes sociales.",
          "Flujo de donaciones: aporte único o mensual, transferencia, tarjeta y donaciones en especie.",
          "Agendamiento de citas por WhatsApp y canales de contacto directo.",
          "Mapa de ubicación integrado y enlaces a las redes de la fundación.",
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
