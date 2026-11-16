import image from "../../../assets/images/projects/corporativo/cimarron.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Asociación Cimarrón",
  theme: "dark",
  tags: ["html", "css", "javascript"],
  live: "https://asocimarron.org/",
  description:
    "Creé toda la estructura corporativa digital de la Asociación Metropolitana Cimarrón, organización afrodescendiente de Medellín dedicada a los derechos humanos, la cultura y el desarrollo comunitario.<br/><br/><strong>Proyecto de referencia.</strong> Una plataforma con pagos en línea, integraciones con APIs externas y almacenamiento distribuido entre varios proveedores.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image,
        alt: "Asociación Metropolitana Cimarrón",
        caption: "asocimarron.org",
      },
    },
    {
      type: "text",
      props: {
        title: "Qué conlleva el proyecto",
        text: "La asociación necesitaba algo más que un sitio informativo: recibir donaciones en línea, publicar sus programas y casos de éxito, y administrar su contenido desde un panel propio.<br/><br/>Definí la arquitectura y construí la plataforma de principio a fin: sitio público con Nosotros, Servicios, Blog, Casos de éxito y Contacto, más el panel de administración con acceso autenticado.",
      },
    },
    {
      type: "list",
      props: {
        title: "Qué construí",
        items: [
          "Pagos y donaciones en línea con la pasarela Wompi.",
          "Consumo de APIs externas, entre ellas la de LinkedIn.",
          "Redireccionamiento de almacenamiento entre Backblaze B2, Cloudinary y Cloudflare R2.",
          "Blog y publicaciones con contenido dinámico, administrado desde el panel.",
          "Panel de administración con inicio de sesión.",
          "Sitio adaptable a móvil y escritorio, con metadatos para buscadores y redes sociales.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Mi rol",
        items: [
          "Definición de lineamientos técnicos y de la arquitectura de la solución.",
          "Diseño, desarrollo, integración y puesta en producción.",
          "Aplicación de criterios de seguridad en pagos, autenticación y manejo de archivos.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
