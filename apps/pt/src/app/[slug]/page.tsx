import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPage } from "@areluna/core";
import { PT_PROCEDURES } from "@areluna/core/pt";

export function generateStaticParams() {
  return Object.keys(PT_PROCEDURES).map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const p = PT_PROCEDURES[params.slug];
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
  const p = PT_PROCEDURES[params.slug];
  if (!p) notFound();
  return <LandingPage p={p} />;
}
