"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type YearBlock = {
  title: string;
  items: string[];
};

const DATA: YearBlock[] = [
  {
    title: "2025",
    items: [
      "Simihaze Beauty — planned and optimized fall social campaigns across Instagram and TikTok, growing engagement and followers.",
      "@taliadoux — scaled a personal fashion education brand to 20K+ followers and 9M+ views through daily short‑form content.",
      "CIRA v2 — expanded a fashion‑tech MVP with skincare/makeup scanning and a Chrome extension informed by user research.",
    ],
  },
  {
    title: "2024",
    items: [
      "Djerf Avenue — led a reputation and crisis‑communications audit with a 6–12 month roadmap for workplace and brand repair.",
      "Rhode — analysed London launch pop‑up, OOH, and Sephora rollout to design a playbook for sustained UK conversion.",
    ],
  },
  {
    title: "2023",
    items: [
      "Ran early community experiments in content, testing hooks, pacing, and storytelling formats across platforms.",
      "Delivered freelance design and web projects, learning to ship fast while keeping a strategic lens on brand and product.",
    ],
  },
  {
    title: "2022",
    items: [
      "Started blending product thinking, data, and fashion — first experiments with technical projects and creative direction.",
    ],
  },
];

function YearCard({ year, z }: { year: YearBlock; z: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 0.6, 1]);
  // Derive a boxShadow string MotionValue for smooth shadow ramp during scroll
  const boxShadow = useTransform(
    scrollYProgress,
    [0, 1],
    ["0 16px 40px rgba(0,0,0,0.04)", "0 16px 40px rgba(0,0,0,0.08)"]
  );

  return (
    <section className="relative h-[180vh]">
      <motion.div
        ref={ref}
        className="sticky top-20 md:top-24 will-change-transform"
        style={{ zIndex: z, y, scale, opacity }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mb-4 md:mb-6">
          <h3 className="font-display tracking-tight text-[16vw] leading-[0.9] text-black/90 md:text-[10vw]">
            {year.title}
          </h3>
        </div>
        <motion.div
          className="rounded-3xl bg-white ring-1 ring-black/10 p-6 md:p-8"
          style={{ boxShadow }}
          whileHover={{ y: -2, boxShadow: "0 20px 50px rgba(0,0,0,0.12)" }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <ul className="list-disc pl-5 text-slate-800 text-base md:text-lg leading-relaxed">
            {year.items.map((t) => (
              <li key={t} className="mb-2 last:mb-0">{t}</li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default function GooeyYears() {
  return (
    <section id="timeline" className="relative z-10 bg-transparent">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        {/* Stacked scroll: each section is tall, card is sticky with scroll transforms */}
        <div className="relative">
          {DATA.map((year, idx) => (
            <YearCard key={year.title} year={year} z={DATA.length - idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
