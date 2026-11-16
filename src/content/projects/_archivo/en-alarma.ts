import image from "../../../assets/images/projects/robotica/alarma.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Home Automation Alarm",
  theme: "dark",
  tags: ["arduino", "cpp", "pir", "ldr", "buzzer"],
  description:
    "A security prototype for the home or classroom that detects intruders through motion or sudden lighting changes and triggers a visual and audible alert.<br/><br/><strong>Basic level.</strong> It introduces young people to the fundamentals of home automation and electronic security, teaching them to filter sensor readings to avoid false alarms.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image,
        alt: "Home Automation Alarm",
        caption: "Project image: Home Automation Alarm",
      },
    },
    {
      type: "text",
      props: {
        title: "What the project involves",
        text: 'The project combines two worlds: a digital sensor (PIR), which answers "motion or no motion", and an analog one (LDR), which returns a range of light values. Students build the voltage divider with the 10 kΩ resistor, log real readings from the classroom and use that data to choose their own thresholds.<br/><br/>They then program the conditions with logical operators (AND / OR) and face the problem that makes the project valuable: the alarm goes off by itself. Debugging those false alarms — averaging readings, waiting for the PIR to settle, tuning sensitivity — is where they learn the most.',
      },
    },
    {
      type: "list",
      props: {
        title: "Technology skills developed",
        items: [
          "Reading digital (PIR) and analog (LDR) sensors.",
          "Calibrating sensitivity thresholds.",
          "Using AND / OR logical operators.",
          "Filtering readings to avoid false alarms.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Core components",
        items: [
          "Arduino Uno.",
          "HC-SR501 passive infrared (PIR) motion sensor.",
          "Photoresistor (LDR) and 10 kΩ resistor.",
          "High-brightness LED.",
          "Active buzzer.",
          "Breadboard.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Goals achieved with the students",
        items: [
          "They clearly told a digital signal from an analog one using their own data.",
          "They set thresholds from real measurements, not copied values.",
          "They reduced false alarms by applying filters and combined logical conditions.",
          "They tested other teams' alarms and argued for improvements: they learned to evaluate and to take feedback.",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "The joy of a job well done",
        text: 'Here satisfaction comes after frustration, which makes it deeper. When the alarm finally stops ringing for no reason and only triggers for the "intruder" they simulate themselves, they celebrate like someone solving a mystery. They especially enjoy challenging each other to sneak past another team\'s alarm; that serious game is their way of proving the job was done well.',
      },
    },
  ],
} as const satisfies ProjectContent;
