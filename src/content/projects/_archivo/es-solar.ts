import image from "../../../assets/images/projects/robotica/solar.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Seguidor Solar de Dos Ejes",
  theme: "light",
  tags: ["arduino", "cpp", "ldr", "servo", "cad", "solar"],
  description:
    "Estructura móvil que orienta automáticamente un panel solar hacia la fuente de mayor intensidad lumínica a lo largo del día, maximizando la captación de energía limpia.<br/><br/><strong>Nivel intermedio.</strong> Eleva el reto técnico: el código debe comparar varios sensores a la vez para calcular movimientos proporcionales y suaves, conectando la robótica con las energías renovables.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image,
        alt: "Seguidor Solar de Dos Ejes",
        caption: "Imagen del proyecto: Seguidor Solar de Dos Ejes",
      },
    },
    {
      type: "text",
      props: {
        title: "Qué conlleva el proyecto",
        text: "Cuatro fotorresistencias separadas por una cruceta opaca funcionan como los «ojos» del seguidor: según la sombra que proyecta la cruceta, el programa compara arriba contra abajo e izquierda contra derecha y mueve dos servomotores (azimut y elevación) hasta equilibrar la luz.<br/><br/>Los estudiantes diseñan el soporte pan-tilt en CAD para corte láser o impresión 3D, resuelven la alimentación de los servos y afinan el código con zona muerta y pasos pequeños para que el panel no tiemble. Es un proyecto de varias semanas que exige planear, repartir responsabilidades e integrar mecánica, electrónica y programación.",
      },
    },
    {
      type: "list",
      props: {
        title: "Competencias tecnológicas desarrolladas",
        items: [
          "Comparación diferencial de señales analógicas.",
          "Control coordinado de dos ejes mecánicos (azimut y elevación).",
          "Diseño estructural: CAD, corte láser o impresión 3D.",
          "Gestión energética del prototipo.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Componentes base",
        items: [
          "Arduino Uno o Nano.",
          "4 fotorresistencias (LDR) divididas por una cruceta opaca.",
          "4 resistencias de 10 kΩ.",
          "2 servomotores MG90S o SG90.",
          "Mini panel solar de 5 V - 6 V.",
          "Soporte articulado pan-tilt.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Objetivos alcanzados con los estudiantes",
        items: [
          "Lograron que el panel siguiera una fuente de luz en dos ejes con movimientos suaves y estables.",
          "Midieron el voltaje del panel fijo frente al panel con seguimiento y sustentaron la diferencia con sus datos.",
          "Diseñaron y fabricaron su propia estructura, iterando hasta que resistiera el movimiento.",
          "Gestionaron el proyecto como un equipo de ingeniería: cronograma, roles y bitácora de avances.",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "El gusto del deber cumplido",
        text: "Es el proyecto que más orgullo les deja, porque es el más exigente. El día en que el panel «persigue» la linterna por todo el salón hay aplausos, y enseguida aparecen las ideas para mejorarlo. Me quedo con una frase que suelo escuchar al final: «profe, no pensé que fuéramos capaces». Ese descubrimiento de lo que pueden lograr juntos es, para mí, el objetivo más importante alcanzado.",
      },
    },
  ],
} as const satisfies ProjectContent;
