import type { Procedure } from "../data/types";
import Reveal from "./Reveal";

export default function Process({ p }: { p: Procedure }) {
  return (
    <section className="bg-marble-light py-24 text-jet md:py-32">
      <div className="container-x section">
        <Reveal className="max-w-2xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-gold-deep/60" />
            <span className="eyebrow !text-gold-deep">{p.processEyebrow}</span>
          </div>
          <h2 className="display text-4xl text-jet md:text-5xl">{p.processTitle}</h2>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {p.steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 90} className="relative">
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-6xl font-light text-gold-deep/30">
                  {s.n}
                </span>
                <span className="h-px flex-1 translate-y-[-10px] bg-jet/10" />
              </div>
              <h3 className="mt-4 font-serif text-2xl font-medium text-jet">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-jet/65">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
