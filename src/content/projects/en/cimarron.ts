import image from "../../../assets/images/projects/corporativo/cimarron.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Asociación Cimarrón",
  theme: "dark",
  tags: ["html", "css", "javascript"],
  live: "https://asocimarron.org/",
  description:
    "I created the entire corporate digital structure of Asociación Metropolitana Cimarrón, an Afro-descendant organization in Medellín devoted to human rights, culture and community development.<br/><br/><strong>Reference project.</strong> A platform with online payments, integrations with external APIs and storage distributed across several providers.",
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
        title: "What the project involves",
        text: "The association needed more than an informational site: to receive donations online, publish its programmes and success stories, and manage its content from its own panel.<br/><br/>I defined the architecture and built the platform end to end: a public site with About, Services, Blog, Success Stories and Contact, plus an admin panel with authenticated access.",
      },
    },
    {
      type: "list",
      props: {
        title: "What I built",
        items: [
          "Online payments and donations with the Wompi gateway.",
          "Consumption of external APIs, including LinkedIn's.",
          "Storage redirection across Backblaze B2, Cloudinary and Cloudflare R2.",
          "Blog and publications with dynamic content, managed from the panel.",
          "Admin panel with sign-in.",
          "Responsive site for mobile and desktop, with metadata for search engines and social networks.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "My role",
        items: [
          "Definition of technical guidelines and of the solution architecture.",
          "Design, development, integration and release to production.",
          "Security criteria applied to payments, authentication and file handling.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
