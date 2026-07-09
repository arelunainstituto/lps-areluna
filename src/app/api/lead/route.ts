import { NextResponse, type NextRequest } from "next/server";

// ───────────────────────────────────────────────────────────
// Proxy same-origin: o formulário posta para /api/lead e este
// route handler reencaminha para o motor de distribuição.
// Evita CORS, mantém a URL do webhook fora do cliente e adiciona
// contexto de servidor (IP real). Fonte no destino: source='site'.
// ───────────────────────────────────────────────────────────

const WEBHOOK_URL =
  process.env.LEADS_WEBHOOK_URL ??
  "https://distribuicao.institutoareluna.pt/backend/webhooks/leads/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  let payload: Record<string, unknown>;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    undefined;

  const body: Record<string, unknown> = {
    ...payload,
    ...(ip ? { ip } : {}),
    ...(payload.page_url ? {} : { page_url: req.headers.get("referer") ?? undefined }),
  };

  try {
    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      return NextResponse.json(
        { ok: false, error: "webhook_error", status: res.status, detail: detail.slice(0, 500) },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "network_error" }, { status: 502 });
  }
}
