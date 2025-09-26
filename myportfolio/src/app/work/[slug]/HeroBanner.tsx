"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "../../../components/Work/projects";

interface Props {
  project: Project;
}

export default function HeroBanner({ project }: Props) {
  return (
    <motion.section
      className="mb-8 rounded-3xl ring-1 ring-black/10 bg-white/90 backdrop-blur-sm p-6 md:p-8"
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <h1 className="font-display text-4xl md:text-5xl text-black/90">{project.title}</h1>
          <p className="inter-body mt-2 text-slate-700">{project.summary}</p>

          {project.stats && (
            <div className="mt-4 grid grid-cols-1 gap-3 text-sm text-slate-700 md:grid-cols-3">
              {project.stats.role && (
                <div className="rounded-xl border border-black/10 bg-white px-3 py-2">
                  <div className="text-xs uppercase tracking-wide text-slate-500">Role</div>
                  <div className="mt-0.5 font-medium text-black/80">{project.stats.role}</div>
                </div>
              )}
              {project.stats.timeline && (
                <div className="rounded-xl border border-black/10 bg-white px-3 py-2">
                  <div className="text-xs uppercase tracking-wide text-slate-500">Timeline</div>
                  <div className="mt-0.5 font-medium text-black/80">{project.stats.timeline}</div>
                </div>
              )}
              {!!project.stats.tools?.length && (
                <div className="rounded-xl border border-black/10 bg-white px-3 py-2">
                  <div className="text-xs uppercase tracking-wide text-slate-500">Tools</div>
                  <div className="mt-0.5 font-medium text-black/80">{project.stats.tools.join(", ")}</div>
                </div>
              )}
            </div>
          )}
        </div>

        {!!project.links?.length && (
          <div className="mt-2 flex gap-2 md:mt-0">
            {project.links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border border-black/20 bg-transparent text-black px-4 py-2 text-sm transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </motion.section>
  );
}
