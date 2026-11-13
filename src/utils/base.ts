// Prefijo bajo el que se publica el sitio (p. ej. "/docente"), tomado de `base` en vite.config.ts.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

// Ruta del navegador -> ruta interna de la app ("/docente/project/x" -> "/project/x").
export const stripBase = (pathname: string) => {
  if (BASE && (pathname === BASE || pathname.startsWith(`${BASE}/`))) {
    return pathname.slice(BASE.length) || "/";
  }
  return pathname;
};

// Ruta interna de la app -> ruta del navegador ("/project/x" -> "/docente/project/x").
export const withBase = (path: string) => `${BASE}${path.startsWith("/") ? path : `/${path}`}`;
