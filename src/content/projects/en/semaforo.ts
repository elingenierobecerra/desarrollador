import image from "../../../assets/images/projects/robotica/semaforo.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Smart Traffic Light",
  theme: "dark",
  tags: ["arduino", "cpp", "leds", "hcsr04", "buzzer"],
  description:
    "Working scale model of an intersection that regulates vehicle traffic and triggers a safe pedestrian crossing when people are detected or a request button is pressed, with audible alerts for accessibility.<br/><br/><strong>Basic level.</strong> This is the project where my students master the structure of an embedded program — variables, states and timers — applied to road safety and smart urban design.",
  components: [
    {
      type: "media",
      props: { type: "image", src: image, alt: "Smart Traffic Light", caption: "Project image: Smart Traffic Light" },
    },
    {
      type: "text",
      props: {
        title: "What the project involves",
        text: 'The work starts away from the computer: students observe a real intersection, sketch its light sequence and turn it into a state diagram. They then wire the vehicle and pedestrian LEDs with their resistors on a breadboard, connect the push button or ultrasonic sensor and the buzzer, and program the sequence.<br/><br/>The core challenge is leaving <code>delay()</code> behind and timing everything with <code>millis()</code>, so the light keeps "listening" to the pedestrian while it counts. Finally, each team builds its model from recycled materials and presents it to the class.',
      },
    },
    {
      type: "list",
      props: {
        title: "Technology skills developed",
        items: [
          "Sequential and conditional logic (state machine).",
          "Digital output control: LEDs and buzzer.",
          "Reading digital and analog inputs (push button, HC-SR04).",
          "Non-blocking timing.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Core components",
        items: [
          "Arduino Uno.",
          "Red, yellow and green LEDs (cars); red and green (pedestrians).",
          "220 Ω resistors.",
          "Push button or HC-SR04 ultrasonic sensor.",
          "Piezo buzzer.",
          "Recycled materials for the model.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Goals achieved with the students",
        items: [
          "They designed and explained the intersection's state diagram in their own words before coding it.",
          "They achieved a traffic light that serves the pedestrian request without breaking the vehicle sequence.",
          "They added the audible alert with visually impaired pedestrians in mind: technology with social purpose.",
          "They worked in roles (programming, electronics and model building) and presented a working prototype.",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "The joy of a job well done",
        text: 'The moment I remember most is when the pedestrian button works for the first time: the whole team watches the cars "stop" and the crossing turn green, and asks to run it again and again. That pride in seeing their own logic run an intersection — and explaining it to classmates and families — is what turns an assignment into an achievement they feel is theirs.',
      },
    },
  ],
} as const satisfies ProjectContent;
