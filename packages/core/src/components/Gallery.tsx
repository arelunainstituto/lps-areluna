import Image from "next/image";
import type { Procedure } from "../data/types";
import Reveal from "./Reveal";

const labelBase =
  "pointer-events-none absolute z-10 text-[0.62rem] uppercase tracking-[0.2em]";

// Chip de fundo para legibilidade dos rótulos sobre as fotos.
const chip = "rounded p-1 leading-none";
const chipBg = { backgroundColor: "hsl(0deg 0% 15.99% / 50%)" } as const;

/**
 * Rótulo antes/depois sobreposto ao card.
 * "v" → divisória vertical, ANTES à esquerda / DEPOIS à direita.
 * "h" → divisória horizontal, ANTES em cima / DEPOIS embaixo.
 */
function AntesDepois({ split }: { split: "v" | "h" }) {
  if (split === "h") {
    return (
      <>
        <div className="pointer-events-none absolute inset-x-0 top-1/2 z-10 h-px w-full -translate-y-1/2 bg-gold-leaf/40" />
        <span style={chipBg} className={`${labelBase} left-4 top-3 ${chip} text-sand/90`}>
          Antes
        </span>
        <span style={chipBg} className={`${labelBase} left-4 top-1/2 mt-2 ${chip} text-gold-pale`}>
          Depois
        </span>
      </>
    );
  }
  return (
    <>
      <div className="pointer-events-none absolute left-1/2 top-0 z-10 h-full w-px -translate-x-1/2 bg-gold-leaf/30" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex justify-between px-4 py-3 text-[0.62rem] uppercase tracking-[0.2em]">
        <span style={chipBg} className={`${chip} text-sand/90`}>
          Antes
        </span>
        <span style={chipBg} className={`${chip} text-gold-pale`}>
          Depois
        </span>
      </div>
    </>
  );
}

/**
 * Galeria de transformações (antes / depois).
 * Se `galleryImages` existir, mostra as fotos reais dos casos Areluna
 * (já compostas com antes/depois). Caso contrário, usa um placeholder elegante.
 * Com `gallerySplit`, sobrepõe o rótulo ANTES/DEPOIS orientado à foto real.
 */
export default function Gallery({ p }: { p: Procedure }) {
  return (
    <section className="bg-jet py-24 md:py-32">
      <div className="container-x section">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="display text-4xl text-sand md:text-5xl">{p.galleryTitle}</h2>
          <p className="mt-5 text-base leading-relaxed text-sand/65">{p.gallerySub}</p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {p.galleryCaptions.map((cap, i) => {
            const src = p.galleryImages?.[i];
            const split = p.gallerySplit?.[i];
            return (
              <Reveal
                key={cap}
                delay={i * 80}
                className="tick-card group relative aspect-square overflow-hidden rounded-sm border border-gold-leaf/20"
              >
                {src ? (
                  <>
                    <Image
                      src={src}
                      alt={`${cap} — caso real Instituto Areluna`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    {split && <AntesDepois split={split} />}
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-jet-off via-[#33302b] to-jet" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-serif text-[5rem] font-light text-gold-leaf/15">A</span>
                    </div>
                    <AntesDepois split="v" />
                  </>
                )}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/80 to-transparent px-5 py-4">
                  <p className="font-serif text-lg text-sand">{cap}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <p className="mt-8 text-center text-[0.7rem] uppercase tracking-[0.16em] text-sand/35">
          Casos reais de pacientes Areluna · resultados individuais podem variar
        </p>
      </div>
    </section>
  );
}
