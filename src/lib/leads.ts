import type { LeadField, Unit } from "@/data/types";

// ───────────────────────────────────────────────────────────
// ARELUNA — construção do payload de lead para o motor de
// distribuição (distribuicao.institutoareluna.pt).
// O formulário posta para /api/lead (mesma origem) e o route
// handler reencaminha para o webhook. Ver src/app/api/lead/route.ts.
// ───────────────────────────────────────────────────────────

// country é normalizado no destino para "Portugal"/"Brasil"/etc.
export const COUNTRY_BY_UNIT: Record<Unit, string> = {
  pt: "Portugal",
  br: "Brasil",
};

// form_name — usado no destino para roteamento. Ex.: "lp-implantes-dentarios-pt".
export function buildFormName(unit: Unit, slug: string): string {
  return `lp-${slug}-${unit}`;
}

// Mapeia os campos do formulário (nomes em PT/BR: nome, telemovel,
// telefone, email, regiao…) para os canónicos aceites pelo normalizer.
// O que não encaixar em name/email/phone volta como "extra" e é
// preservado no raw_payload do destino (auditoria).
export function extractContact(fields: LeadField[], data: FormData) {
  let name = "";
  let email = "";
  let phone = "";
  const extras: Record<string, string> = {};

  for (const f of fields) {
    const value = (data.get(f.name) ?? "").toString().trim();
    if (!value) continue;

    if (f.type === "email" || /e-?mail/i.test(f.name)) {
      email = email || value.toLowerCase();
    } else if (f.type === "tel" || /(tele|phone|whats|celular|telem)/i.test(f.name)) {
      phone = phone || value;
    } else if (!name && (f.type === "text" || /(nome|name)/i.test(f.name))) {
      name = value;
    } else {
      extras[f.name] = value;
    }
  }

  return { name, email, phone, extras };
}

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

// Identificadores de clique de anúncio — preservados no raw_payload.
const CLICK_ID_KEYS = [
  "gclid",
  "gad_source",
  "wbraid",
  "gbraid",
  "fbclid",
  "msclkid",
  "ttclid",
] as const;

// Captura UTMs + click ids + contexto da página (client-side).
export function collectTracking(): Record<string, string> {
  const out: Record<string, string> = {};
  if (typeof window === "undefined") return out;

  const params = new URLSearchParams(window.location.search);
  for (const key of [...UTM_KEYS, ...CLICK_ID_KEYS]) {
    const value = params.get(key);
    if (value) out[key] = value;
  }

  out.page_url = window.location.href;
  if (document.referrer) out.referrer = document.referrer;
  out.device = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
    ? "mobile"
    : "desktop";

  return out;
}

export interface BuildLeadPayloadInput {
  unit: Unit;
  slug: string;
  treatment?: string;
  fields: LeadField[];
  data: FormData;
  externalId: string;
}

// Monta o payload "rico" recomendado (LP → distribuição).
export function buildLeadPayload({
  unit,
  slug,
  treatment,
  fields,
  data,
  externalId,
}: BuildLeadPayloadInput): Record<string, string> {
  const { name, email, phone, extras } = extractContact(fields, data);

  return {
    name,
    email,
    phone,
    country: COUNTRY_BY_UNIT[unit],
    form_name: buildFormName(unit, slug),
    ...(treatment ? { tratamento: treatment } : {}),
    external_id: externalId,
    ...extras, // ex.: regiao (BR) — preservado no raw_payload
    ...collectTracking(),
  };
}

// external_id único por submissão. Estável entre retentativas do mesmo
// envio (gerado uma vez e memoizado no formulário), novo a cada page load.
export function newExternalId(slug: string): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return `lp-${slug}-${crypto.randomUUID()}`;
  }
  return `lp-${slug}-${Date.now().toString(36)}-${Math.round(
    Math.random() * 1e9,
  ).toString(36)}`;
}
