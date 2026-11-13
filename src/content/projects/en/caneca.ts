import image from "../../../assets/images/projects/robotica/caneca.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Touchless Trash Bin",
  theme: "light",
  tags: ["arduino", "cpp", "hcsr04", "servo"],
  description:
    "A waste bin whose lid opens automatically when a hand or object approaches and closes after a few seconds, promoting hygiene in school spaces.<br/><br/><strong>Basic level.</strong> Quick to build with immediate results, it shows how a sensor turns a physical variable (distance) into a concrete mechanical action.",
  components: [
    {
      type: "media",
      props: { type: "image", src: image, alt: "Touchless Trash Bin", caption: "Project image: Touchless Trash Bin" },
    },
    {
      type: "text",
      props: {
        title: "What the project involves",
        text: "Students first learn how the ultrasonic sensor measures distance using sound echoes and check its readings on the serial monitor. They then define the detection threshold, program the servo's open and close angles, and solve the part that demands the most ingenuity: the mechanism that lifts the lid.<br/><br/>Between cardboard levers, wires and failed attempts, they discover that robotics is as much mechanics as code. The final prototype runs on battery and is installed in a real bin or a structured box.",
      },
    },
    {
      type: "list",
      props: {
        title: "Technology skills developed",
        items: [
          "Distance measurement with ultrasound.",
          "Basic servo control: open and close angles.",
          "Simple mechanical assembly.",
          "Calibrating thresholds and wait times.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Core components",
        items: [
          "Arduino Uno or Nano.",
          "HC-SR04 ultrasonic sensor.",
          "SG90 micro servo.",
          "Jumper wires.",
          "9 V battery or battery holder.",
          "Plastic bin or structured cardboard box.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Goals achieved with the students",
        items: [
          "They understood and explained how a measured distance becomes a movement.",
          "Through trial and error they calibrated the threshold and closing time until the lid was reliable.",
          "They designed their own opening mechanism, proposing and comparing solutions across teams.",
          "They linked the prototype to a real school need: disposing of waste without touching the lid.",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "The joy of a job well done",
        text: 'This is the project that spreads enthusiasm fastest: within a few sessions the bin "responds" to a hand and students line up to try it. Seeing them carry their prototype to other classrooms to show it off, and hearing them say "we made this", confirms they enjoy a job well done when the result is useful and visible to their community.',
      },
    },
  ],
} as const satisfies ProjectContent;
