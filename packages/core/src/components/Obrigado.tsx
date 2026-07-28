"use client";

import { useEffect } from "react";
import Image from "next/image";
import type { Unit } from "../data/types";
import { PT_CONTACT, BR_CONTACT } from "../data/shared";
import {
  GOOGLE_ADS_ID,
  GOOGLE_ADS_CONVERSION_LABEL,
  META_PIXEL_ID,
} from "../data/tracking";
import { Check } from "./icons";

const COPY = {
  br: {
    sub: "Nossa equipe vai entrar em contato em breve para agendar a sua avaliação especializada. Obrigado pela confiança.",
    hint: "Quer adiantar? Fale conosco agora mesmo.",
  },
  pt: {
    sub: "A nossa equipa vai entrar em contacto em breve para agendar a sua avaliação especializada. Obrigado pela confiança.",
    hint: "Quer adiantar? Fale connosco agora mesmo.",
  },
} as const;

// Página de obrigado: destino do redirect após submeter o formulário.
// É aqui que a conversão da campanha é registada.
export default function Obrigado({ unit }: { unit: Unit }) {
  const whatsapp =
    unit === "pt" ? PT_CONTACT.whatsappHref : BR_CONTACT.whatsappHref;
  const copy = unit === "pt" ? COPY.pt : COPY.br;

  useEffect(() => {
    const w = window as unknown as {
      dataLayer?: unknown[];
      gtag?: (...a: unknown[]) => void;
      fbq?: (...a: unknown[]) => void;
    };

    // GTM: evento para acionar a conversão (configure um acionador de
    // evento personalizado "lead_conversion" no GTM).
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: "lead_conversion", unit });

    // Google Ads direto (só dispara se os IDs estiverem preenchidos).
    if (GOOGLE_ADS_ID && GOOGLE_ADS_CONVERSION_LABEL && typeof w.gtag === "function") {
      w.gtag("event", "conversion", {
        send_to: `${GOOGLE_ADS_ID}/${GOOGLE_ADS_CONVERSION_LABEL}`,
      });
    }
    // Meta Pixel (opcional).
    if (META_PIXEL_ID && typeof w.fbq === "function") {
      w.fbq("track", "Lead");
    }
  }, [unit]);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-jet px-6 py-20 text-center">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <Image src="/brand/fundo.png" alt="" fill className="object-cover" priority />
      </div>
      <div className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-gold-leaf/[0.08] blur-[120px]" />

      <div className="animate-fade-up relative flex flex-col items-center">
        <Image
          src="/brand/instituto-gold.png"
          alt="Instituto Areluna"
          width={176}
          height={116}
          priority
          className="mb-10 h-16 w-auto"
        />

        <span className="mb-7 flex h-16 w-16 items-center justify-center rounded-full border border-gold-leaf/50 text-gold-leaf">
          <Check className="h-8 w-8" />
        </span>

        <h1 className="display text-4xl text-sand md:text-5xl">Pedido recebido.</h1>

        <p className="mt-5 max-w-md text-base leading-relaxed text-sand/70">
          {copy.sub}
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <a href={whatsapp} target="_blank" rel="noreferrer" className="btn-gold">
            Falar agora no WhatsApp
          </a>
          <span className="text-xs uppercase tracking-[0.16em] text-sand/40">
            {copy.hint}
          </span>
        </div>
      </div>

      <p className="relative mt-16 text-[0.7rem] uppercase tracking-[0.18em] text-sand/30">
        Instituto Areluna · Estética &amp; Padrão Europeu
      </p>
    </main>
  );
}
