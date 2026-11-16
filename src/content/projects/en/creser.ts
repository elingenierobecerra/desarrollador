import image from "../../../assets/images/projects/corporativo/creser.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Fundación CRESER",
  theme: "dark",
  tags: ["html", "css", "javascript"],
  live: "https://www.creserfundacion.org/",
  description:
    "I created the entire corporate digital structure of Fundación CRESER, a comprehensive psychology centre in Medellín: from the information architecture to the web platform running in production.<br/><br/><strong>Reference project.</strong> It shows how I take an organization from scratch to a complete institutional presence, with quality, security and maintainability in mind.",
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
        title: "What the project involves",
        text: "The foundation needed to present its psychology, neuropsychology and organizational wellbeing services, along with its BAMBÚ and ES CRESER programmes, and to open clear channels for booking appointments and receiving donations.<br/><br/>I defined the site structure, its sections and user journeys, and built it end to end: Home, About, Services, Programmes, Team, Contact and Donate.",
      },
    },
    {
      type: "list",
      props: {
        title: "What I built",
        items: [
          "Information architecture and corporate structure of the site.",
          "Responsive site for mobile and desktop, with metadata for search engines and social networks.",
          "Donation flow: one-off or monthly gifts, bank transfer, card and in-kind donations.",
          "Appointment booking through WhatsApp and direct contact channels.",
          "Embedded location map and links to the foundation's social networks.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "My role",
        items: [
          "Definition of technical guidelines and of the solution structure.",
          "Design, development and release to production.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
