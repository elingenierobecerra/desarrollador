import cimarron0 from "../../../assets/images/projects/streakon/streakon-0.webp";
import cimarron1 from "../../../assets/images/projects/streakon/streakon-1.webp";
import cimarron2 from "../../../assets/images/projects/streakon/streakon-2.webp";
import cimarron3 from "../../../assets/images/projects/streakon/streakon-3.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Cimarrón",
  theme: "light",
  tags: ["erp", "node", "next", "sql"],
  description:
    "Cimarrón es una plataforma interna de gestión empresarial desarrollada en Bogotá para centralizar operaciones, datos maestros y reportes entre áreas.<br/><br/>Lideré el desarrollo full stack con Node.js y Next.js sobre una base de datos SQL, reemplazando hojas de cálculo y procesos manuales con flujos de trabajo por roles, trazabilidad y tableros que le dan a la dirección una visión del negocio en tiempo real.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: cimarron0,
        alt: "Tablero principal (imagen de referencia)",
        caption: "Tablero principal (imagen de referencia)",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cimarron1,
        alt: "Módulos operativos (imagen de referencia)",
        caption: "Módulos operativos (imagen de referencia)",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cimarron2,
        alt: "Reportes e indicadores (imagen de referencia)",
        caption: "Reportes e indicadores (imagen de referencia)",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cimarron3,
        alt: "Roles y permisos (imagen de referencia)",
        caption: "Roles y permisos (imagen de referencia)",
      },
    },
  ],
} as const satisfies ProjectContent;
