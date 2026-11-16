import image from "../../../assets/images/projects/robotica/caneca.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Caneca Automática",
  theme: "light",
  tags: ["arduino", "cpp", "hcsr04", "servo"],
  description:
    "Contenedor de residuos cuya tapa se abre automáticamente al detectar la proximidad de una mano o un objeto y se cierra tras unos segundos, fomentando la higiene en los espacios escolares.<br/><br/><strong>Nivel básico.</strong> Un proyecto rápido de construir y con resultados inmediatos, que muestra cómo un sensor traduce una variable física (distancia) en una acción mecánica concreta.",
  components: [
    {
      type: "media",
      props: { type: "image", src: image, alt: "Caneca Automática", caption: "Imagen del proyecto: Caneca Automática" },
    },
    {
      type: "text",
      props: {
        title: "Qué conlleva el proyecto",
        text: "Los estudiantes aprenden primero cómo el sensor ultrasónico mide distancias con el eco del sonido y comprueban sus lecturas en el monitor serie. Después definen el umbral de detección, programan los ángulos de apertura y cierre del servomotor y resuelven la parte que más ingenio exige: el mecanismo que levanta la tapa.<br/><br/>Entre palancas de cartón, alambres y pruebas fallidas, descubren que la robótica es tanto mecánica como código. El prototipo final funciona con batería y queda instalado en una papelera real o en una caja estructurada.",
      },
    },
    {
      type: "list",
      props: {
        title: "Competencias tecnológicas desarrolladas",
        items: [
          "Medición de distancias mediante ultrasonido.",
          "Control básico de un servomotor: ángulos de apertura y cierre.",
          "Ensamblaje mecánico sencillo.",
          "Calibración de umbrales y tiempos de espera.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Componentes base",
        items: [
          "Arduino Uno o Nano.",
          "Sensor ultrasónico HC-SR04.",
          "Micro servomotor SG90.",
          "Cables jumper.",
          "Batería de 9 V o portapilas.",
          "Papelera plástica o caja de cartón estructurada.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Objetivos alcanzados con los estudiantes",
        items: [
          "Comprendieron y explicaron cómo una distancia medida se convierte en un movimiento.",
          "Calibraron por ensayo y error el umbral y el tiempo de cierre hasta lograr una tapa confiable.",
          "Diseñaron su propio mecanismo de apertura, proponiendo y comparando soluciones entre equipos.",
          "Relacionaron el prototipo con una necesidad real del colegio: botar residuos sin tocar la tapa.",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "El gusto del deber cumplido",
        text: "Es el proyecto que más rápido contagia entusiasmo: en pocas sesiones la caneca «responde» a la mano y los estudiantes hacen fila para probarla. Verlos llevar su prototipo a otros salones para mostrarlo, y escucharlos decir «esto lo hicimos nosotros», confirma que disfrutan el deber cumplido cuando el resultado es útil y visible para su comunidad.",
      },
    },
  ],
} as const satisfies ProjectContent;
