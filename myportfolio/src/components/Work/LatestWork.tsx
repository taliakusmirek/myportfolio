import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "./projects";

export default function LatestWork() {
  return (
    <section id="work" className="relative z-10 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mb-12 text-center">
          <div className="text-slate-400 poly-regular-italic mb-2 text-lg md:text-xl">from 2020 &apos;til today</div>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-black/90">My latest work</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.06 }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
