import React, { Suspense } from "react";
import Link from "next/link";
import { projects } from "../../../components/Work/projects";
import TopNav from "./TopNav";
import HeroBanner from "./HeroBanner";
import CaseStudyArticle from "./CaseStudyArticle";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function WorkDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-20">
        <Link href="/" className="text-blue-600 underline">Go home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent">
      <Suspense fallback={null}>
        <TopNav />
      </Suspense>

      <main className="mx-auto max-w-5xl px-6 py-16">
        <HeroBanner project={project} />
        <CaseStudyArticle project={project} />
      </main>
    </div>
  );
}
