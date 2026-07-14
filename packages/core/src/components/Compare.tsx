import type { Procedure } from "../data/types";
import Reveal from "./Reveal";
import { Check } from "./icons";

/**
 * Bloco de contraste (ex.: rinomodelação × rinoplastia cirúrgica).
 * Faz, na página, a comparação que o lead já faz na cabeça.
 */
export default function Compare({ p }: { p: Procedure }) {
  const c = p.compare;
  if (!c) return null;

  return (
    <section className="bg-jet py-24 md:py-32">
      <div className="container-x section">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="display text-4xl text-sand md:text-5xl">{c.title}</h2>
          <p className="mt-5 text-base leading-relaxed text-sand/65">{c.intro}</p>
        </Reveal>

        <Reveal className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-sm border border-gold-leaf/20">
          <div className="grid grid-cols-[1.3fr_1fr_1fr]">
            <div className="bg-jet-off px-5 py-4" />
            <div className="bg-gold-leaf/10 px-5 py-4 text-center font-serif text-lg text-gold-pale">
              {c.colA}
            </div>
            <div className="bg-jet-off px-5 py-4 text-center font-serif text-lg text-sand/55">
              {c.colB}
            </div>
            {c.rows.map((r, i) => (
              <div key={r.label} className="contents">
                <div
                  className={`px-5 py-4 text-sm text-sand/75 ${
                    i % 2 ? "bg-jet-off/40" : "bg-transparent"
                  }`}
                >
                  {r.label}
                </div>
                <div
                  className={`flex items-center justify-center gap-2 px-5 py-4 text-center text-sm text-sand ${
                    i % 2 ? "bg-gold-leaf/[0.07]" : "bg-gold-leaf/[0.04]"
                  }`}
                >
                  <Check className="h-4 w-4 shrink-0 text-gold-leaf" />
                  {r.a}
                </div>
                <div
                  className={`px-5 py-4 text-center text-sm text-sand/45 ${
                    i % 2 ? "bg-jet-off/40" : "bg-transparent"
                  }`}
                >
                  {r.b}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
