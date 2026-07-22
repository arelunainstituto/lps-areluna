import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "@areluna/core/styles.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Instituto Areluna — Portugal",
  description: "Medicina Dentária & Estética Avançada — padrão europeu.",
  icons: { icon: "/brand/symbol.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT" className={`${cormorant.variable} ${jost.variable}`}>
      <body>{children}</body>
    </html>
  );
}
