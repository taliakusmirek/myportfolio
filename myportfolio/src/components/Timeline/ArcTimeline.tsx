"use client";

import React from "react";

export type TimelineItem = {
  time: string;
  steps: { content: string; icon?: React.ReactNode }[];
};

interface Props {
  data: TimelineItem[];
}

// Simple curved timeline inspired by arc timeline
export default function ArcTimeline({ data }: Props) {
  return (
    <section id="timeline" className="relative z-10 bg-transparent">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="relative overflow-hidden rounded-3xl bg-white/90 ring-1 ring-black/10 p-6 md:p-10 backdrop-blur-sm">
          <div className="relative h-[300px]">
            {/* Arc line with draw animation */}
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 260 C 320 60, 880 60, 1180 260"
                stroke="#E5E7EB"
                strokeWidth="6"
                strokeLinecap="round"
                style={{ strokeDasharray: 1400, strokeDashoffset: 1400, animation: 'arcDraw 2.4s ease forwards' }}
              />
            </svg>
            {/* Steps positioned along the arc */}
            <div className="absolute inset-0">
              {data.map((item, i) => {
                const t = i / Math.max(1, data.length - 1);
                const left = `calc(${t * 100}% - 0px)`; // center with translateX
                const y = 260 - 200 * Math.sin(Math.PI * t); // px from top
                return (
                  <div key={item.time} className="absolute" style={{ left, top: y }}>
                    <div className="-translate-x-1/2 -translate-y-1/2 animate-[fadeIn_600ms_ease_forwards] opacity-0" style={{ animationDelay: `${400 + i * 150}ms` }}>
                      <div className="rounded-full bg-pink-300/80 text-[10px] px-2 py-1 w-max shadow">{item.time}</div>
                      <div className="mt-2 space-y-1">
                        {item.steps.slice(0, 2).map((s, idx) => (
                          <div key={idx} className="rounded-xl bg-white shadow-sm ring-1 ring-black/10 px-2.5 py-1.5 text-xs text-slate-800 max-w-[200px]">
                            {s.content}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Pink ombre mask around top-right */}
            <div className="pointer-events-none absolute -inset-8" aria-hidden style={{
              background: 'radial-gradient(900px 380px at 85% -20%, rgba(255,214,234,0.35), rgba(255,214,234,0.12) 40%, rgba(255,255,255,0) 70%)'
            }} />
          </div>
        </div>
      </div>
    </section>
  );
}
