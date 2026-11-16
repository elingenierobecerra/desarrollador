import image from "../../../assets/images/projects/corporativo/iedcc.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "IEDCC",
  theme: "dark",
  tags: ["html", "css", "javascript"],
  live: "https://iedcc.org/",
  description:
    "I created the entire corporate digital structure of the Iglesia Evangélica Discípulos de Cristo de Colombia (IEDCC): online institutional identity, content organization and the web platform running in production.<br/><br/><strong>Reference project.</strong> An organization with a national presence that needed a single, well-ordered point of information and contact.",
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
        title: "What the project involves",
        text: "The organization needed to communicate its mission, vision and values, present its services and keep its community informed about meetings, discipleship groups and the Bible School.<br/><br/>I defined the site structure and built it end to end: Home, About, Services, Announcements, Churches, Publications, Location and Contact.",
      },
    },
    {
      type: "list",
      props: {
        title: "What I built",
        items: [
          "Information architecture and corporate structure of the site.",
          "Responsive site for mobile and desktop, with metadata for search engines and social networks.",
          "Announcements section for the activity schedule and the Bible School.",
          "Contact form and direct phone, email and WhatsApp links.",
          "Embedded location map and links to the organization's social networks.",
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
