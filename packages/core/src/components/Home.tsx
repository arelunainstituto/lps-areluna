import Image from "next/image";
import Link from "next/link";
import type { Procedure } from "../data/types";
import { Arrow } from "./icons";

// Índice de landing pages de UMA unidade (país). Cada site (PT/BR)
// renderiza apenas os seus procedimentos. Liga para /{slug}.
export default function Home({
  procedures,
  unitLabel,
}: {
  procedures: Procedure[];
  unitLabel: string;
}) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-jet pb-24">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <Image src="/brand/fundo.png" alt="" fill className="object-cover" priority />
      </div>
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gold-leaf/[0.08] blur-[140px]" />

      <div className="container-x section relative pt-20 text-center">
        <Image
          src="/brand/instituto-gold.png"
          alt="Instituto Areluna"
          width={220}
          height={145}
          priority
          className="mx-auto h-24 w-auto"
        />
        <div className="mt-8 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-gold-leaf/60" />
          <span className="eyebrow">{unitLabel}</span>
          <span className="h-px w-10 bg-gold-leaf/60" />
        </div>
        <h1 className="display mt-6 text-4xl text-sand md:text-6xl">
          Agende a sua <span className="text-gold-grad italic">avaliação</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-sand/60">
          Escolha o tratamento e fale com a nossa equipa. Cada página tem o
          formulário de contacto para agendar sem compromisso.
        </p>
      </div>

      <div className="container-x section relative mx-auto mt-16 max-w-2xl">
        <ul className="space-y-3">
          {procedures.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/${p.slug}`}
                className="tick-card group flex items-center justify-between gap-4 rounded-sm border border-gold-leaf/15 bg-jet-off px-6 py-5 transition-colors hover:border-gold-leaf/45"
              >
                <div>
                  <div className="font-serif text-xl text-sand">
                    {p.eyebrow.split("·")[0].trim()}
                  </div>
                  <div className="mt-1 text-sm text-sand/50">
                    {p.h1Lead} {p.h1Accent}
                  </div>
                </div>
                <Arrow className="h-5 w-5 shrink-0 text-gold-leaf transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
