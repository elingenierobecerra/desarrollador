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
    "Cimarrón is an internal business management platform built in Bogotá to centralize operations, master data and reporting across teams.<br/><br/>I led the full stack development with Node.js and Next.js on top of a SQL database, replacing spreadsheets and manual processes with role-based workflows, audit trails and dashboards that give management a real-time view of the business.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: cimarron0,
        alt: "Main dashboard (reference image)",
        caption: "Main dashboard (reference image)",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cimarron1,
        alt: "Operational modules (reference image)",
        caption: "Operational modules (reference image)",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cimarron2,
        alt: "Reports and KPIs (reference image)",
        caption: "Reports and KPIs (reference image)",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cimarron3,
        alt: "Roles and permissions (reference image)",
        caption: "Roles and permissions (reference image)",
      },
    },
  ],
} as const satisfies ProjectContent;
