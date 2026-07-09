import type { Procedure } from "./types";
import { PT_PROCEDURES } from "./pt";
import { BR_PROCEDURES } from "./br";

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

export const UNIT_LABEL: Record<"pt" | "br", string> = {
  pt: "Portugal · Porto",
  br: "Brasil · Curitiba",
};
