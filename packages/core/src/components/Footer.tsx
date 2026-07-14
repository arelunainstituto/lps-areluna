import Image from "next/image";
import type { Procedure } from "../data/types";
import { Phone, WhatsApp } from "./icons";

export default function Footer({ p }: { p: Procedure }) {
  return (
    <footer className="border-t border-gold-leaf/15 bg-abyssal py-16">
      <div className="container-x section grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Image
            src="/brand/areluna-gold.png"
            alt="Areluna"
            width={200}
            height={128}
            className="h-20 w-auto"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-sand/50">
            {p.unit === "br"
              ? "Estética Avançada · Padrão Europeu. Um instituto sério, com excelência clínica e experiência do paciente."
              : "Medicina Dentária & Estética Avançada. O padrão europeu em excelência clínica e experiência do paciente."}
          </p>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Contacto</h4>
          {p.phoneDisplay && (
            <a
              href={p.phoneHref}
              className="flex items-center gap-2 text-sm text-sand/75 transition hover:text-gold-pale"
            >
              <Phone className="h-4 w-4 text-gold-leaf" />
              {p.phoneDisplay}
            </a>
          )}
          {p.whatsappHref ? (
            <a
              href={p.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-3 flex items-center gap-2 text-sm text-sand/75 transition hover:text-gold-pale"
            >
              <WhatsApp className="h-4 w-4 text-gold-leaf" />
              WhatsApp
            </a>
          ) : (
            <a
              href="#form"
              className="mt-3 flex items-center gap-2 text-sm text-sand/75 transition hover:text-gold-pale"
            >
              <WhatsApp className="h-4 w-4 text-gold-leaf" />
              Marcar pelo formulário
            </a>
          )}
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-sand/55">
            {p.address}
          </p>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Informação legal</h4>
          <ul className="space-y-2 text-xs leading-relaxed text-sand/45">
            {p.regulatory.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-x section mt-12 flex flex-col items-center justify-between gap-3 border-t border-sand/10 pt-7 text-[0.7rem] text-sand/40 md:flex-row">
        <span>© {new Date().getFullYear()} Instituto Areluna. Todos os direitos reservados.</span>
        <span>Resultados clínicos podem variar de pessoa para pessoa.</span>
      </div>
    </footer>
  );
}
