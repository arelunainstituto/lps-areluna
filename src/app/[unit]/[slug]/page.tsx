import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allParams, getProcedure } from "@/data";
import LandingPage from "@/components/LandingPage";

export function generateStaticParams() {
  return allParams();
}

export function generateMetadata({
  params,
}: {
  params: { unit: string; slug: string };
}): Metadata {
  const p = getProcedure(params.unit, params.slug);
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
  params: { unit: string; slug: string };
}) {
  const p = getProcedure(params.unit, params.slug);
  if (!p) notFound();
  return <LandingPage p={p} />;
}
