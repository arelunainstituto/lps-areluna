import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPage } from "@areluna/core";
import { BR_PROCEDURES } from "@areluna/core/br";

export function generateStaticParams() {
  return Object.keys(BR_PROCEDURES).map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const p = BR_PROCEDURES[params.slug];
  if (!p) return {};
  return {
    title: p.metaTitle,
    description: p.metaDescription,
    openGraph: {
      title: p.metaTitle,
      description: p.metaDescription,
      type: "website",
    },
  };
}

export default function ProcedurePage({
  params,
}: {
  params: { slug: string };
}) {
  const p = BR_PROCEDURES[params.slug];
  if (!p) notFound();
  return <LandingPage p={p} />;
}
