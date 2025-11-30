"use client";

import React from "react";

type HoverAsset = {
  src: string;
  alt?: string;
};

interface HeroProps {
  name?: string; // defaults to Talia Kusmirek
  introTitle?: string;
  assets?: HoverAsset[]; // images or designs that appear on hover
}

// Default copy tailored to you – tweak freely
const DEFAULT_TITLE =
  "A fashion marketer, content creator, and aspiring designer. I specialize in analyzing fashion brands, building marketing strategies, and creating content that engages audiences.";

export default function Hero({
  name = "TALIA K",
  introTitle = DEFAULT_TITLE,
}: HeroProps) {
  
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden">
      <div className="mx-auto flex h-[96vh] max-w-7xl flex-col items-center justify-center px-6 pt-24 pb-10 text-center">
        <div className="select-none">
          <h1 className="font-display leading-[0.8] tracking-[0.22em] text-black/80 whitespace-nowrap text-[22vw] sm:text-[18vw] md:text-[14vw] lg:text-[11vw]">
            {name}
          </h1>
        </div>

        <div className="mt-8 max-w-2xl text-slate-700/90">
          <p className="inter-body text-xs sm:text-sm md:text-base leading-relaxed">
            {introTitle}
          </p>
        </div>
      </div>

      {/* Soft vignette at the edges for depth */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_120px_40px_rgba(255,255,255,0.65)]" />
    </section>
  );
}
