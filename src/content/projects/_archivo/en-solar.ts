import image from "../../../assets/images/projects/robotica/solar.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Dual-Axis Solar Tracker",
  theme: "light",
  tags: ["arduino", "cpp", "ldr", "servo", "cad", "solar"],
  description:
    "A moving structure that automatically points a solar panel toward the brightest light source throughout the day, maximizing clean energy capture.<br/><br/><strong>Intermediate level.</strong> It raises the technical bar: the code must compare several sensors at once to compute smooth, proportional movements, connecting robotics with renewable energy.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image,
        alt: "Dual-Axis Solar Tracker",
        caption: "Project image: Dual-Axis Solar Tracker",
      },
    },
    {
      type: "text",
      props: {
        title: "What the project involves",
        text: 'Four photoresistors separated by an opaque cross-shaped divider act as the tracker\'s "eyes": depending on the shadow the divider casts, the program compares top against bottom and left against right and moves two servos (azimuth and elevation) until the light is balanced.<br/><br/>Students design the pan-tilt mount in CAD for laser cutting or 3D printing, solve the servo power supply and tune the code with a dead zone and small steps so the panel does not jitter. It is a multi-week project that demands planning, shared responsibilities and integrating mechanics, electronics and programming.',
      },
    },
    {
      type: "list",
      props: {
        title: "Technology skills developed",
        items: [
          "Differential comparison of analog signals.",
          "Coordinated control of two mechanical axes (azimuth and elevation).",
          "Structural design: CAD, laser cutting or 3D printing.",
          "Power management for the prototype.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Core components",
        items: [
          "Arduino Uno or Nano.",
          "4 photoresistors (LDR) split by an opaque cross divider.",
          "4 × 10 kΩ resistors.",
          "2 servos, MG90S or SG90.",
          "Mini solar panel, 5 V - 6 V.",
          "Articulated pan-tilt mount.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Goals achieved with the students",
        items: [
          "They got the panel to follow a light source on two axes with smooth, stable movements.",
          "They measured the voltage of a fixed panel against the tracking panel and backed the difference with their data.",
          "They designed and built their own structure, iterating until it withstood the movement.",
          "They ran the project like an engineering team: schedule, roles and a progress log.",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "The joy of a job well done",
        text: 'This is the project they are proudest of, because it is the most demanding. The day the panel "chases" a flashlight across the classroom there is applause, and ideas to improve it follow right away. I keep a phrase I often hear at the end: "teacher, I didn\'t think we could do it". That discovery of what they can achieve together is, to me, the most important goal reached.',
      },
    },
  ],
} as const satisfies ProjectContent;
