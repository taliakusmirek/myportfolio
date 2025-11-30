"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "../../../components/Work/projects";

export default function CaseStudyArticle({ project }: { project: Project }) {
  return (
    <motion.article
      className="rounded-3xl bg-white p-6 md:p-10 ring-1 ring-black/10"
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
    >
      <header className="mb-8">
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
            className="h-7 w-7 text-black/80"
          >
            <path d="M14.016 3.984 20.016 10.02l-5.297 5.3-6-6 5.297-5.334Zm-6.703 6.75 6 6c-.422.469-.844.984-1.266 1.547-.422.563-.75 1.078-.984 1.547-.234.422-.516.75-.844.984-.328.188-.703.328-1.125.422-.375.047-.797.094-1.266.141-.469.047-.938.141-1.406.281-.469.094-.891.281-1.266.563-.375.281-.656.75-.844 1.406-.093.422-.28.703-.563.844-.281.094-.61.07-.984-.07-.562-.234-.844-.61-.844-1.125 0-.094.047-.281.141-.563.093-.375.187-.75.281-1.125.141-.469.234-.938.281-1.406.094-.469.141-.891.188-1.266.094-.422.234-.797.422-1.125.234-.328.563-.61.984-.844.469-.234.984-.563 1.547-.984.563-.469 1.078-.891 1.547-1.266Z"/>
          </svg>
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-black/90">Case Study</h1>
        </div>
      </header>

      <div className="prose prose-slate max-w-none">
        <h2 className="mt-8 text-xl md:text-2xl font-semibold text-black">Overview</h2>
        <p>{project.summary}</p>

        <h2 className="mt-8 text-xl md:text-2xl font-semibold text-black">Problem</h2>
        <p>{project.caseStudy.problem}</p>

        <h2 className="mt-8 text-xl md:text-2xl font-semibold text-black">Solution</h2>
        <p>{project.caseStudy.solution}</p>

        <h2 className="mt-8 text-xl md:text-2xl font-semibold text-black">Results</h2>
        <p>{project.caseStudy.results}</p>

        <h2 className="mt-8 text-xl md:text-2xl font-semibold text-black">What I learned</h2>
        <p>{project.caseStudy.lessonsLearned}</p>
      </div>

      {project.gallery && project.gallery.length > 0 ? (
        <div className="my-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {project.gallery.slice(0, 2).map((src, idx) => (
            <div key={src + idx} className="relative aspect-[16/10] overflow-hidden rounded-2xl ring-1 ring-black/10">
              <Image src={src} alt={`${project.title} ${idx + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      ) : project.cover ? (
        <div className="my-8">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl ring-1 ring-black/10">
            <Image src={project.cover} alt={project.title} fill className="object-cover" />
          </div>
        </div>
      ) : null}

      <footer className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span key={t} className="rounded-full border border-black/10 bg-black/[0.04] px-3 py-1 text-sm text-slate-700">
            {t}
          </span>
        ))}
      </footer>
    </motion.article>
  );
}
