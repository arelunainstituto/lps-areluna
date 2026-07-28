import type { Metadata } from "next";
import { Obrigado } from "@areluna/core";

export const metadata: Metadata = {
  title: "Pedido recebido — Instituto Areluna",
  robots: { index: false, follow: false },
};

export default function ObrigadoPage() {
  return <Obrigado unit="pt" />;
}
