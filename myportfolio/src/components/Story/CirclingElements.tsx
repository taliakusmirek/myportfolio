"use client";

import React, { PropsWithChildren } from "react";

interface Props {
  radius?: number; // px
  duration?: number; // seconds per revolution
  easing?: string; // css timing function
  pauseOnHover?: boolean;
  counterRotateChildren?: boolean;
}

export default function CirclingElements({
  radius = 120,
  duration = 12,
  easing = "linear",
  pauseOnHover = true,
  counterRotateChildren = true,
  children,
}: PropsWithChildren<Props>) {
  const count = React.Children.count(children);

  return (
    <div
      className={`relative h-[${radius * 2}px] w-[${radius * 2}px]`}
      style={{ height: radius * 2, width: radius * 2 }}
    >
      <div
        className={`absolute inset-0 animate-spin-slow`}
        style={{
          animationDuration: `${duration}s`,
          animationTimingFunction: easing,
          animationPlayState: pauseOnHover ? "running" : undefined,
        }}
      >
        {React.Children.map(children, (child, i) => {
          const angle = (i / count) * 360;
          return (
            <div
              key={i}
              className="absolute left-1/2 top-1/2"
              style={{ transform: `rotate(${angle}deg) translate(${radius}px) rotate(${counterRotateChildren ? -angle : 0}deg)` }}
            >
              {child}
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .animate-spin-slow { animation-name: circling-rotate; animation-iteration-count: infinite; }
        .animate-spin-slow:hover { animation-play-state: ${pauseOnHover ? "paused" : "running"}; }
        @keyframes circling-rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
