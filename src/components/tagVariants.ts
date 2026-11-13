export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "redis"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "node"
  | "next"
  | "kubernetes"
  | "postgresql"
  | "ogl"
  | "glsl"
  | "php"
  | "sql"
  | "powerbi"
  | "excel"
  | "erp"
  | "arduino"
  | "cpp"
  | "leds"
  | "hcsr04"
  | "buzzer"
  | "servo"
  | "pir"
  | "ldr"
  | "cad"
  | "solar";

export const tagLabels = {
  three: "Three.js",
  websockets: "WebSockets",
  react: "React",
  redis: "Redis",
  gray: "Gray",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  node: "Node.js",
  next: "Next.js",
  kubernetes: "Kubernetes",
  postgresql: "PostgreSQL",
  ogl: "OGL.js",
  glsl: "GLSL",
  php: "PHP",
  sql: "SQL",
  powerbi: "Power BI",
  excel: "Excel",
  erp: "ERP",
  arduino: "Arduino",
  cpp: "C++",
  leds: "LEDs",
  hcsr04: "HC-SR04",
  buzzer: "Buzzer",
  servo: "Servo",
  pir: "PIR",
  ldr: "LDR",
  cad: "CAD 3D",
  solar: "Solar",
} as const satisfies Record<TagVariant, string>;
