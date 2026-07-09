import Image from "next/image";
import type { Procedure } from "@/data/types";
import Reveal from "./Reveal";

/**
 * Galeria de transformações (antes / depois).
 * Se `galleryImages` existir, mostra as fotos reais dos casos Areluna
 * (já compostas com antes/depois). Caso contrário, usa um placeholder elegante.
 */
export default function Gallery({ p }: { p: Procedure }) {
  const hasImages = !!p.galleryImages && p.galleryImages.length > 0;

  return (
    <section className="bg-jet py-24 md:py-32">
      <div className="container-x section">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="display text-4xl text-sand md:text-5xl">{p.galleryTitle}</h2>
          <p className="mt-5 text-base leading-relaxed text-sand/65">{p.gallerySub}</p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {p.galleryCaptions.map((cap, i) => (
            <Reveal
              key={cap}
              delay={i * 80}
              className="tick-card group relative aspect-square overflow-hidden rounded-sm border border-gold-leaf/20"
            >
              {hasImages && p.galleryImages![i] ? (
                <Image
                  src={p.galleryImages![i]}
                  alt={`${cap} — caso real Instituto Areluna`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-jet-off via-[#33302b] to-jet" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-[5rem] font-light text-gold-leaf/15">A</span>
                  </div>
                  <div className="absolute inset-x-0 top-0 flex justify-between px-4 py-3 text-[0.62rem] uppercase tracking-[0.2em] text-sand/70">
                    <span>Antes</span>
                    <span className="text-gold-leaf">Depois</span>
                  </div>
                  <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gold-leaf/30" />
                </>
              )}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-5 py-4">
                <p className="font-serif text-lg text-sand">{cap}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-[0.7rem] uppercase tracking-[0.16em] text-sand/35">
          Casos reais de pacientes Areluna · resultados individuais podem variar
        </p>
      </div>
    </section>
  );
}
