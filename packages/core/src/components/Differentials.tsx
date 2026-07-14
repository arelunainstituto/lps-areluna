import type { Procedure } from "../data/types";
import Reveal from "./Reveal";

export default function Differentials({ p }: { p: Procedure }) {
  return (
    <section className="bg-jet py-24 md:py-32">
      <div className="container-x section">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gold-leaf/60" />
            <span className="eyebrow">{p.diffEyebrow}</span>
            <span className="h-px w-8 bg-gold-leaf/60" />
          </div>
          <h2 className="display text-4xl text-sand md:text-5xl">{p.diffTitle}</h2>
          <p className="mt-6 text-base leading-relaxed text-sand/65">{p.diffIntro}</p>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-gold-leaf/15 bg-gold-leaf/10 sm:grid-cols-2 lg:grid-cols-3">
          {p.benefits.map((b, i) => (
            <Reveal
              key={b.title}
              delay={i * 70}
              className="group bg-jet p-8 transition-colors duration-500 hover:bg-jet-off md:p-10"
            >
              <div className="mb-5 font-serif text-2xl text-gold-leaf/40 transition-colors group-hover:text-gold-leaf">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-serif text-2xl font-light text-sand">{b.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-sand/60">{b.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
