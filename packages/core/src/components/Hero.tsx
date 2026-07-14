import Image from "next/image";
import type { Procedure } from "../data/types";
import LeadForm from "./LeadForm";
import RatingBadge from "./RatingBadge";
import { Star } from "./icons";

export default function Hero({ p }: { p: Procedure }) {
  return (
    <section className="relative overflow-hidden bg-jet pb-20 pt-32 md:pb-28 md:pt-36">
      {/* textura de fundo */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <Image src="/brand/fundo.png" alt="" fill className="object-cover" priority />
      </div>
      <div className="hero-vignette pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-[460px] w-[460px] rounded-full bg-gold-leaf/[0.07] blur-[120px]" />

      <div className="container-x section relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Coluna texto */}
        <div className="animate-fade-up">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-gold-leaf/60" />
            <span className="eyebrow">{p.eyebrow}</span>
          </div>

          <h1 className="display text-[2.6rem] text-sand sm:text-6xl lg:text-[4.1rem]">
            {p.h1Lead}{" "}
            <span className="text-gold-grad italic">{p.h1Accent}</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-sand/70 md:text-lg">
            {p.heroSub}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            {p.proof ? (
              <RatingBadge proof={p.proof} />
            ) : (
              <div className="flex items-center gap-2.5">
                <div className="flex text-gold-leaf">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4" />
                  ))}
                </div>
                <span className="text-xs text-sand/55">500+ avaliações 5 estrelas</span>
              </div>
            )}
          </div>
        </div>

        {/* Coluna formulário */}
        <div className="animate-fade-up lg:pl-6" style={{ animationDelay: "120ms" }}>
          <LeadForm
            title={p.formTitle}
            subtitle={p.formSubtitle}
            cta={p.formCta}
            fields={p.formFields}
            footnote={p.formFootnote}
            offerName={p.offerName}
            urgency={p.urgency}
            unit={p.unit}
            slug={p.slug}
            treatment={p.eyebrow.split("·")[0].trim()}
            whatsappHref={p.whatsappHref}
          />
        </div>
      </div>
    </section>
  );
}
