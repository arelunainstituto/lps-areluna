import type { Procedure } from "../data/types";
import Reveal from "./Reveal";
import RatingBadge from "./RatingBadge";
import { Star } from "./icons";

export default function Testimonials({ p }: { p: Procedure }) {
  return (
    <section className="bg-jet py-24 md:py-32">
      <div className="container-x section">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gold-leaf/60" />
            <span className="eyebrow">Histórias reais</span>
            <span className="h-px w-8 bg-gold-leaf/60" />
          </div>
          <h2 className="display text-4xl text-sand md:text-5xl">
            {p.testimonialsTitle}
          </h2>
          {p.proof && (
            <div className="mt-7 flex flex-col items-center gap-3">
              <RatingBadge proof={p.proof} />
              <span className="text-[0.7rem] uppercase tracking-[0.16em] text-sand/35">
                Avaliações verificadas de pacientes reais
              </span>
            </div>
          )}
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {p.testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 80}
              className="tick-card flex flex-col rounded-sm border border-gold-leaf/15 bg-jet-off p-8"
            >
              <div className="mb-4 flex text-gold-leaf">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="h-4 w-4" />
                ))}
              </div>
              <p className="flex-1 font-serif text-lg font-light italic leading-relaxed text-sand/90">
                “{t.quote}”
              </p>
              <div className="mt-6 border-t border-gold-leaf/15 pt-4">
                <div className="font-medium text-sand">{t.name}</div>
                <div className="text-xs text-sand/50">{t.meta}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex justify-center">
          <a href="#form" className="btn-gold">
            {p.formCta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
