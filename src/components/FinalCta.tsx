import Image from "next/image";
import type { Procedure } from "@/data/types";
import Reveal from "./Reveal";
import { WhatsApp } from "./icons";

export default function FinalCta({ p }: { p: Procedure }) {
  return (
    <section className="relative overflow-hidden bg-jet py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <Image src="/brand/fundo.png" alt="" fill className="object-cover" />
      </div>
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-leaf/[0.08] blur-[140px]" />

      <div className="container-x section relative text-center">
        <Reveal>
          <Image
            src="/brand/symbol.png"
            alt=""
            width={72}
            height={72}
            className="mx-auto mb-8 h-16 w-16 opacity-90"
          />
          <h2 className="display mx-auto max-w-3xl text-4xl text-sand md:text-6xl">
            {p.finalTitle}
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-sand/65 md:text-lg">
            {p.finalSub}
          </p>
          <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
            <a href="#form" className="btn-gold">
              {p.finalCta}
            </a>
            {p.whatsappHref && (
              <a href={p.whatsappHref} className="btn-ghost" target="_blank" rel="noreferrer">
                <WhatsApp className="h-4 w-4" />
                Falar no WhatsApp
              </a>
            )}
          </div>
          {p.urgency && (
            <p className="mt-6 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-gold-leaf">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-gold-leaf" />
              {p.urgency}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
