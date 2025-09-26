"use client";

import Link from "next/link";
import Image from "next/image";
import type { Project } from "./projects";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <Link
      href={{ pathname: `/work/${project.slug}`, query: { from: 'work' } }}
      className="group relative block rounded-3xl bg-white/90 ring-1 ring-black/[0.06] backdrop-blur-sm overflow-hidden transition-shadow hover:shadow-xl"
    >
      {/* Pink light on hover (anchored to top-right) */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
        style={{
          background:
            "radial-gradient(400px 260px at calc(100% - 40px) 40px, rgba(255,214,234,0.85), rgba(255,214,234,0.45) 35%, rgba(255,255,255,0) 65%)",
        }}
      />

      <div className="p-6 md:p-7">
        <div className="flex items-start gap-3">
          <div>
            <h3 className="font-display text-3xl md:text-4xl text-black/90">{project.title}</h3>
            <p className="inter-body mt-1 text-slate-600">{project.summary}</p>
          </div>
          {/* Arrow at top-right */}
          <span
            className="ml-auto translate-y-1 text-2xl text-black/60 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1"
            aria-hidden
          >
            →
          </span>
        </div>

        {/* Media (prefer card-specific assets on landing) */}
        {project.singleCoverOnly && project.cover ? (
          <div className="mt-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-black/10">
              <Image
                src={project.cover}
                alt={`${project.title} cover`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        ) : project.cardGallery && project.cardGallery.length >= 2 ? (
          <div className="mt-5 grid grid-cols-2 gap-4">
            {project.cardGallery.slice(0, 2).map((src, idx) => (
              <div key={src + idx} className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-black/10">
                <Image
                  src={src}
                  alt={`${project.title} ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        ) : project.cardCover ? (
          <div className="mt-5 grid grid-cols-2 gap-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-black/10">
              <Image
                src={project.cardCover}
                alt={`${project.title} card cover`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-black/10">
              <Image
                src={project.cardCover}
                alt={`${project.title} alt`}
                fill
                className="object-cover scale-[1.06] rotate-[-2deg]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        ) : project.gallery && project.gallery.length >= 2 ? (
          <div className="mt-5 grid grid-cols-2 gap-4">
            {project.gallery.slice(0, 2).map((src, idx) => (
              <div key={src + idx} className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-black/10">
                <Image
                  src={src}
                  alt={`${project.title} ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        ) : project.cover ? (
          <div className="mt-5 grid grid-cols-2 gap-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-black/10">
              <Image
                src={project.cover}
                alt={`${project.title} cover`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-black/10">
              <Image
                src={project.cover}
                alt={`${project.title} alt`}
                fill
                className="object-cover scale-[1.06] rotate-[-2deg]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        ) : null}

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-black/10 bg-black/[0.04] px-3 py-1 text-sm text-slate-700"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
