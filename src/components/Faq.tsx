"use client";

import { useState } from "react";
import type { Procedure } from "@/data/types";
import { Plus } from "./icons";

export default function Faq({ p }: { p: Procedure }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-marble-light py-24 text-jet md:py-32">
      <div className="container-x section grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-gold-deep/60" />
            <span className="eyebrow !text-gold-deep">Dúvidas frequentes</span>
          </div>
          <h2 className="display text-4xl text-jet md:text-5xl">
            Tudo o que precisa de saber
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-jet/60">
            Não encontrou a sua resposta? A nossa equipa esclarece tudo na
            avaliação, sem compromisso.
          </p>
          <a href="#form" className="btn-gold mt-8">
            Marcar avaliação
          </a>
        </div>

        <div className="divide-y divide-jet/10 border-y border-jet/10">
          {p.faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="font-serif text-lg text-jet md:text-xl">
                    {item.q}
                  </span>
                  <Plus
                    className={`h-5 w-5 shrink-0 text-gold-deep transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm leading-relaxed text-jet/65">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
