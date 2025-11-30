import React from "react";
import SmartImage from "../shared/SmartImage";
import { alwaysAssets } from "../shared/alwaysAssets";

export default function Story() {
  return (
    <section id="story" className="relative z-10 bg-transparent">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="relative rounded-3xl bg-white/90 ring-1 ring-black/10 p-10 md:p-16 backdrop-blur-sm overflow-hidden grid place-items-center">
          {/* Headline + subcopy */}
          <div className="relative z-10 max-w-xl text-center">
            <h3 className="font-display text-4xl md:text-5xl lg:text-6xl text-black/90">Always styling</h3>
            <p className="poly-regular-italic mt-3 text-slate-500 text-lg">
              Building brands, stories, and looks that actually feel wearable.
            </p>
          </div>

          {/* Scattered images around the text instead of a perfect circle */}
          <div className="relative mt-10 min-h-[520px] md:min-h-[620px] w-full">
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden
              style={{
                background:
                  "radial-gradient(260px 180px at 20% 20%, rgba(255,214,234,0.35), rgba(255,214,234,0))",
              }}
            />

            <div className="absolute inset-0">
              {alwaysAssets.map((src, i) => {
                const positions = [
                  "top-4 left-6",
                  "top-16 right-10",
                  "top-40 left-1/2 -translate-x-1/2",
                  "bottom-16 left-8",
                  "bottom-10 right-6",
                  "top-1/2 right-1/4",
                ];
                const pos = positions[i % positions.length];
                return (
                  <div key={i} className={`absolute ${pos}`}>
                    <div className="mx-auto mb-2 h-3 w-3 rounded-full bg-[#f973b8] shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
                    <div className="h-24 w-24 md:h-40 md:w-40 rounded-2xl overflow-hidden ring-1 ring-black/10 shadow-md bg-white">
                      <SmartImage
                        src={src}
                        alt="style moment"
                        className="object-cover absolute inset-0 h-full w-full"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
