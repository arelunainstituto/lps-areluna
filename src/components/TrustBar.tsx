import type { Procedure } from "@/data/types";

export default function TrustBar({ p }: { p: Procedure }) {
  return (
    <section className="border-y border-gold-leaf/15 bg-jet-off">
      <div className="container-x section grid grid-cols-2 divide-x divide-gold-leaf/10 py-10 md:grid-cols-4">
        {p.stats.map((s) => (
          <div key={s.label} className="px-4 text-center md:px-8">
            <div className="text-gold-grad font-serif text-4xl font-light md:text-5xl">
              {s.value}
            </div>
            <div className="mt-2 text-[0.72rem] uppercase tracking-[0.16em] text-sand/55">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
