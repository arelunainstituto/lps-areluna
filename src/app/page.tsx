import Image from "next/image";
import Link from "next/link";
import { REGISTRY, UNIT_LABEL } from "@/data";
import { Arrow } from "@/components/icons";

export default function Home() {
  const units = ["pt", "br"] as const;
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
          <span className="eyebrow">Landing Pages · Google Ads</span>
          <span className="h-px w-10 bg-gold-leaf/60" />
        </div>
        <h1 className="display mt-6 text-4xl text-sand md:text-6xl">
          Protótipos de <span className="text-gold-grad italic">conversão</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-sand/60">
          Páginas por procedimento, desenhadas no Golden Standard da marca.
          Selecione uma unidade e um procedimento para visualizar.
        </p>
      </div>

      <div className="container-x section relative mt-16 grid gap-12 lg:grid-cols-2">
        {units.map((unit) => (
          <div key={unit}>
            <div className="mb-6 flex items-baseline justify-between border-b border-gold-leaf/20 pb-3">
              <h2 className="font-serif text-2xl text-sand">{UNIT_LABEL[unit]}</h2>
              <span className="text-xs uppercase tracking-[0.18em] text-gold-leaf">
                {unit.toUpperCase()}
              </span>
            </div>
            <ul className="space-y-3">
              {Object.values(REGISTRY[unit]).map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/${unit}/${p.slug}`}
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
        ))}
      </div>
    </main>
  );
}
