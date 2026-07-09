import Image from "next/image";
import { Phone } from "./icons";
import type { Procedure } from "@/data/types";

export default function Nav({ p }: { p: Procedure }) {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="container-x flex items-center justify-between px-6 py-5 md:px-10">
        <Image
          src="/brand/instituto-gold.png"
          alt="Instituto Areluna"
          width={176}
          height={116}
          priority
          className="h-14 w-auto md:h-16"
        />
        <div className="flex items-center gap-6">
          {p.phoneDisplay && (
            <a
              href={p.phoneHref}
              className="flex items-center gap-2 text-sm text-sand/80 transition hover:text-gold-pale"
            >
              <Phone className="h-4 w-4 text-gold-leaf" />
              {p.phoneDisplay}
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
