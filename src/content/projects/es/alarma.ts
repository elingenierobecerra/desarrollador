import image from "../../../assets/images/projects/robotica/alarma.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Alarma Domótica",
  theme: "dark",
  tags: ["arduino", "cpp", "pir", "ldr", "buzzer"],
  description:
    "Prototipo de seguridad para el hogar o el aula que detecta intrusos mediante movimiento o cambios bruscos de iluminación y activa una alerta visual y sonora.<br/><br/><strong>Nivel básico.</strong> Introduce a los jóvenes en los fundamentos de la domótica y la seguridad electrónica, enseñándoles a filtrar las lecturas de los sensores para evitar falsas alarmas.",
  components: [
    {
      type: "media",
      props: { type: "image", src: image, alt: "Alarma Domótica", caption: "Imagen del proyecto: Alarma Domótica" },
    },
    {
      type: "text",
      props: {
        title: "Qué conlleva el proyecto",
        text: "El proyecto combina dos mundos: un sensor digital (PIR), que responde «hay o no hay movimiento», y uno analógico (LDR), que entrega un rango de valores de luz. Los estudiantes arman el divisor de voltaje con la resistencia de 10 kΩ, registran lecturas reales del salón y con esos datos deciden sus propios umbrales.<br/><br/>Después programan las condiciones con operadores lógicos (AND / OR) y enfrentan el problema que hace valioso el proyecto: la alarma se dispara sola. Depurar esas falsas alarmas —promediando lecturas, esperando la estabilización del PIR, ajustando la sensibilidad— es donde más aprenden.",
      },
    },
    {
      type: "list",
      props: {
        title: "Competencias tecnológicas desarrolladas",
        items: [
          "Lectura de sensores digitales (PIR) y analógicos (LDR).",
          "Calibración de umbrales de sensibilidad.",
          "Uso de operadores lógicos AND / OR.",
          "Filtrado de lecturas para evitar falsas alarmas.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Componentes base",
        items: [
          "Arduino Uno.",
          "Sensor de movimiento infrarrojo pasivo PIR HC-SR501.",
          "Fotorresistencia (LDR) y resistencia de 10 kΩ.",
          "LED de alto brillo.",
          "Buzzer activo.",
          "Protoboard.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Objetivos alcanzados con los estudiantes",
        items: [
          "Diferenciaron con claridad una señal digital de una analógica usando sus propios datos.",
          "Definieron los umbrales a partir de mediciones reales, no de valores copiados.",
          "Redujeron las falsas alarmas aplicando filtros y condiciones lógicas combinadas.",
          "Pusieron a prueba las alarmas de otros equipos y argumentaron mejoras: aprendieron a evaluar y a recibir crítica.",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "El gusto del deber cumplido",
        text: "Aquí la satisfacción llega después de la frustración, y por eso es más profunda. Cuando por fin la alarma deja de sonar sin motivo y solo se activa ante el «intruso» que ellos mismos simulan, celebran como quien resuelve un misterio. Les gusta especialmente retarse entre equipos para intentar burlar la alarma del otro; ese juego serio es su forma de comprobar que el trabajo quedó bien hecho.",
      },
    },
  ],
} as const satisfies ProjectContent;
