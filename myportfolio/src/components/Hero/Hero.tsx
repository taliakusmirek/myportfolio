"use client";

import React, { useMemo } from "react";
import SmartImage from "../shared/SmartImage";
import { alwaysAssets } from "../shared/alwaysAssets";

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
const DEFAULT_TITLE = "I design products people love and grow\ncommunities through social media storytelling.";

export default function Hero({
  name = "Talia Kusmirek",
  introTitle = DEFAULT_TITLE,
  assets,
}: HeroProps) {
  const letters = useMemo(() => name.split(""), [name]);

  // Default to shared assets used in Story/Always Building
  const defaultAssets: HoverAsset[] = useMemo(
    () => alwaysAssets.map((src) => ({ src })),
    []
  );

  const usedAssets = assets?.length ? assets : defaultAssets;

  // Build a mapping of non-space letters so we can avoid repeating photos
  const nonSpaceIndexMap = useMemo(() => {
    let idx = 0;
    return letters.map((ch) => {
      if (ch === " ") return -1;
      const current = idx;
      idx += 1;
      return current;
    });
  }, [letters]);

  // Prepare visuals for each non-space letter: first use photos (no repeats), then SVG icons
  const iconSet = useMemo(
    () => [
      (
        <svg key="icon-plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-auto w-[26vw] sm:w-[22vw] md:w-[18vw] lg:w-[14vw] text-black/80">
          <path d="M11 4a1 1 0 1 1 2 0v7h7a1 1 0 1 1 0 2h-7v7a1 1 0 1 1-2 0v-7H4a1 1 0 1 1 0-2h7V4Z"/>
        </svg>
      ),
      (
        <svg key="icon-pen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-auto w-[26vw] sm:w-[22vw] md:w-[18vw] lg:w-[14vw] text-black/80">
          <path d="M18.364 2.636a3 3 0 0 1 0 4.243l-1.414 1.414-4.243-4.243 1.414-1.414a3 3 0 0 1 4.243 0ZM11.293 5.707 3 14v7h7l8.293-8.293-7-7Z"/>
        </svg>
      ),
      (
        <svg key="icon-grid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-auto w-[26vw] sm:w-[22vw] md:w-[18vw] lg:w-[14vw] text-black/80">
          <path d="M3 3h7v7H3V3Zm11 0h7v7h-7V3ZM3 14h7v7H3v-7Zm11 0h7v7h-7v-7Z"/>
        </svg>
      ),
      (
        <svg key="icon-lines" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-auto w-[26vw] sm:w-[22vw] md:w-[18vw] lg:w-[14vw] text-black/80">
          <path d="M4 4h16v2H4V4Zm0 14h16v2H4v-2Zm0-7h16v2H4v-2Z"/>
        </svg>
      ),
    ],
    []
  );

  const visualsForNonSpace = useMemo(() => {
    const photos = usedAssets; // mapped from alwaysAssets
    const totalNonSpace = nonSpaceIndexMap.filter((x) => x !== -1).length;
    const visuals: (React.ReactNode)[] = [];
    let photoIdx = 0;
    let iconIdx = 0;
    for (let i = 0; i < totalNonSpace; i++) {
      // Interleave: even positions prefer photo (if any remain), odd positions prefer icon
      const usePhoto = (i % 2 === 0 && photoIdx < photos.length) || iconIdx >= iconSet.length;
      if (usePhoto && photoIdx < photos.length) {
        visuals.push(
          <SmartImage
            key={`img-${photoIdx}`}
            src={photos[photoIdx].src}
            alt={photos[photoIdx].alt ?? "hover visual"}
            width={480}
            height={320}
            className="h-auto w-[32vw] sm:w-[26vw] md:w-[20vw] lg:w-[16vw]"
          />
        );
        photoIdx++;
      } else {
        const icon = iconSet[iconIdx % iconSet.length];
        visuals.push(<React.Fragment key={`icon-${iconIdx}`}>{icon}</React.Fragment>);
        iconIdx++;
      }
    }
    return visuals;
  }, [nonSpaceIndexMap, usedAssets, iconSet]);

  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden">
      <div className="mx-auto max-w-7xl pr-6 pl-3 sm:pl-4 md:pl-5 lg:pl-6 xl:pl-6 h-[96vh] flex flex-col justify-end pb-4 pt-24">
        <div className="max-w-3xl text-slate-700/90 md:-translate-x-2 lg:-translate-x-4 xl:-translate-x-6">
          <p className="inter-body text-lg md:text-xl leading-relaxed whitespace-pre-line">
            {introTitle}
          </p>
        </div>

        <div className="mt-10 select-none md:-translate-x-2 lg:-translate-x-4 xl:-translate-x-6">
          <h1 className="font-display leading-[0.78] tracking-tight text-black/90 whitespace-nowrap text-[28vw] sm:text-[24vw] md:text-[20vw] lg:text-[15vw] xl:text-[13.5vw]">
            {letters.map((ch, i) => {
              // Spaces are rendered plainly to keep natural spacing
              if (ch === " ")
                return (
                  <span key={`sp-${i}`} className="inline-block w-[0.4em]" aria-hidden>
                    {" "}
                  </span>
                );

              const mappedIdx = nonSpaceIndexMap[i];
              return (
                <span key={i} className="relative inline-block group align-baseline hover-trigger">
                  <span className="inline-block transition-colors duration-200 group-hover:text-black">
                    {ch}
                  </span>

                  {/* Hover visual */}
                  <span
                    className={
                      "pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out drop-shadow-hero"
                    }
                    aria-hidden
                    style={{ rotate: (i % 2 === 0 ? -6 : 6) + "deg" }}
                  >
                    {mappedIdx === -1 ? null : visualsForNonSpace[mappedIdx]}
                  </span>
                </span>
              );
            })}
          </h1>
        </div>
      </div>

      {/* Soft vignette at the edges for depth */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_120px_40px_rgba(255,255,255,0.65)]" />
    </section>
  );
}
