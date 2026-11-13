import image from "../../../assets/images/projects/robotica/semaforo.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Semáforo Inteligente",
  theme: "dark",
  tags: ["arduino", "cpp", "leds", "hcsr04", "buzzer"],
  description:
    "Maqueta funcional de un cruce vial que regula el tráfico vehicular y activa un paso peatonal seguro al detectar personas o al pulsar un botón de solicitud, con alertas sonoras para accesibilidad.<br/><br/><strong>Nivel básico.</strong> Es el proyecto con el que mis estudiantes dominan la estructura de un programa embebido —variables, estados y temporizadores— aplicándola a la seguridad vial y al urbanismo inteligente.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image,
        alt: "Semáforo Inteligente",
        caption: "Imagen del proyecto: Semáforo Inteligente",
      },
    },
    {
      type: "text",
      props: {
        title: "Qué conlleva el proyecto",
        text: "El trabajo comienza lejos del computador: los estudiantes observan un cruce real, dibujan su secuencia de luces y la convierten en un diagrama de estados. Luego montan en protoboard los LEDs vehiculares y peatonales con sus resistencias, conectan el pulsador o el sensor ultrasónico y el zumbador, y programan la secuencia.<br/><br/>El reto central es abandonar <code>delay()</code> y sincronizar los tiempos con <code>millis()</code>, para que el semáforo siga «escuchando» al peatón mientras cuenta. Al final, cada equipo construye su maqueta con materiales reciclados y la sustenta ante el grupo.",
      },
    },
    {
      type: "list",
      props: {
        title: "Competencias tecnológicas desarrolladas",
        items: [
          "Lógica secuencial y condicional (máquina de estados).",
          "Control de salidas digitales: LEDs y zumbador.",
          "Lectura de entradas digitales y analógicas (pulsador, HC-SR04).",
          "Sincronización de tiempos sin bloquear el procesador.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Componentes base",
        items: [
          "Arduino Uno.",
          "LEDs rojo, amarillo y verde (autos); rojo y verde (peatones).",
          "Resistencias de 220 Ω.",
          "Pulsador o sensor ultrasónico HC-SR04.",
          "Zumbador piezoeléctrico (buzzer).",
          "Materiales reciclados para la maqueta.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Objetivos alcanzados con los estudiantes",
        items: [
          "Diseñaron y explicaron con sus propias palabras el diagrama de estados del cruce antes de programarlo.",
          "Lograron un semáforo que atiende la solicitud del peatón sin interrumpir la secuencia vehicular.",
          "Incorporaron la alerta sonora pensando en peatones con discapacidad visual: tecnología con sentido social.",
          "Trabajaron por roles (programación, electrónica y maqueta) y sustentaron el prototipo funcionando.",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "El gusto del deber cumplido",
        text: "El momento que más recuerdo es cuando el botón peatonal funciona por primera vez: el equipo completo se queda mirando cómo los autos «frenan» y el paso se pone en verde, y pide repetirlo una y otra vez. Ese orgullo de ver su propia lógica gobernando un cruce —y de explicárselo a compañeros y familias— es lo que convierte la tarea en un logro que sienten suyo.",
      },
    },
  ],
} as const satisfies ProjectContent;
