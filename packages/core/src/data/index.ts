import type { Procedure } from "./types";
import { PT_PROCEDURES } from "./pt";
import { BR_PROCEDURES } from "./br";
import { UNIT_LABEL } from "./units";

// Registo combinado (ambas as unidades). Os apps NÃO importam isto —
// cada site importa só o seu país via "@areluna/core/pt" ou "/br", para
// não embarcar o conteúdo do outro país. Mantido para ferramentas/testes.
export const REGISTRY: Record<"pt" | "br", Record<string, Procedure>> = {
  pt: PT_PROCEDURES,
  br: BR_PROCEDURES,
};

export function getProcedure(unit: string, slug: string): Procedure | null {
  const u = REGISTRY[unit as "pt" | "br"];
  if (!u) return null;
  return u[slug] ?? null;
}

export function allParams() {
  const out: { unit: string; slug: string }[] = [];
  (["pt", "br"] as const).forEach((unit) => {
    Object.keys(REGISTRY[unit]).forEach((slug) => out.push({ unit, slug }));
  });
  return out;
}

export { UNIT_LABEL };
