import type { Proof } from "../data/types";
import { Star } from "./icons";

/**
 * Prova concreta: nota + nº de avaliações no Google.
 * NOTA: substituir por print/embed real do Google Reviews na produção
 * (a prova "mostrada" converte mais que a "afirmada").
 */
export default function RatingBadge({
  proof,
  variant = "dark",
}: {
  proof: Proof;
  variant?: "dark" | "inline";
}) {
  return (
    <div className="inline-flex items-center gap-3">
      <span className="font-serif text-3xl font-light text-gold-grad leading-none">
        {proof.rating}
      </span>
      <span className="flex flex-col">
        <span className="flex text-gold-leaf">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5" />
          ))}
        </span>
        <span
          className={`mt-0.5 text-xs ${
            variant === "dark" ? "text-sand/55" : "text-jet/55"
          }`}
        >
          <b className="font-medium">{proof.count}</b> {proof.caption}
        </span>
      </span>
    </div>
  );
}
