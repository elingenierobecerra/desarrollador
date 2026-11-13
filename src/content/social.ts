export const social = [
  { url: "mailto:elingenierobecerra@gmail.com", name: "mail" },
  { url: "https://github.com/elingenierobecerra", name: "github" },
  { url: "https://www.linkedin.com/in/elingenierobecerra", name: "linkedin" },
  //{ url: "https://www.instagram.com/", name: "instagram" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
