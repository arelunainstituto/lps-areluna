import type { Procedure } from "@/data/types";
import Reveal from "./Reveal";
import { Check } from "./icons";

/**
 * Mecanismo único (Schwartz "Concentration"): o diferencial que destrói as
 * alternativas — laboratório próprio (PT) ou instituto-vs-influencer (BR).
 */
export default function Mechanism({ p }: { p: Procedure }) {
  const m = p.mechanism;
  if (!m) return null;

  return (
    <section className="relative overflow-hidden border-y border-gold-leaf/15 bg-abyssal py-24 md:py-32">
      <div className="pointer-events-none absolute -left-32 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-gold-leaf/[0.06] blur-[130px]" />
      <div className="container-x section relative grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-gold-leaf/60" />
            <span className="eyebrow">{m.eyebrow}</span>
          </div>
          <h2 className="display text-4xl text-sand md:text-5xl">{m.title}</h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-sand/70">
            {m.body}
          </p>
          {m.enemyLine && (
            <p className="mt-6 border-l-2 border-gold-leaf/60 pl-5 font-serif text-lg italic text-gold-pale">
              {m.enemyLine}
            </p>
          )}
        </Reveal>

        <Reveal delay={120}>
          <div className="grid gap-px overflow-hidden rounded-sm border border-gold-leaf/20 bg-gold-leaf/10 sm:grid-cols-2">
            {m.points.map((pt) => (
              <div key={pt.title} className="bg-abyssal p-7">
                <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-full border border-gold-leaf/40 text-gold-leaf">
                  <Check className="h-4 w-4" />
                </span>
                <h3 className="font-serif text-xl font-light text-sand">{pt.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sand/60">{pt.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
