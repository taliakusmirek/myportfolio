import React from "react";
import SmartImage from "../shared/SmartImage";
import CirclingElements from "./CirclingElements";
import { alwaysAssets } from "../shared/alwaysAssets";

export default function Story() {
  return (
    <section id="story" className="relative z-10 bg-transparent">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="relative rounded-3xl bg-white/90 ring-1 ring-black/10 p-10 md:p-16 backdrop-blur-sm overflow-hidden min-h-[780px] md:min-h-[920px] grid place-items-center">
          {/* Centered headline */}
          <div className="relative z-10 text-center">
            <h3 className="font-display text-4xl md:text-5xl lg:text-6xl text-black/90">Always building</h3>
            <p className="poly-regular-italic mt-2 text-slate-500 text-lg">(sometimes serious, sometimes just vibes)</p>
          </div>

          {/* Rotating elements around the center */}
          <div className="absolute inset-0 grid place-items-center">
            {/* Subtle radial glow */}
            <div
              className="pointer-events-none absolute h-[560px] w-[560px] rounded-full"
              aria-hidden
              style={{
                background:
                  "radial-gradient(280px 180px at 50% 50%, rgba(255,214,234,0.45), rgba(255,214,234,0.18) 40%, rgba(255,214,234,0) 70%)",
                filter: "blur(14px)",
              }}
            />
            <CirclingElements radius={320} duration={14} easing="linear" pauseOnHover counterRotateChildren>
              {alwaysAssets.map((src,i)=> (
                <div key={i} className="relative h-20 w-20 md:h-24 md:w-24 rounded-2xl overflow-hidden ring-1 ring-black/10 shadow">
                  <SmartImage src={src} alt="placeholder" className="object-cover absolute inset-0 h-full w-full" />
                </div>
              ))}
            </CirclingElements>
          </div>
        </div>
      </div>
    </section>
  );
}
