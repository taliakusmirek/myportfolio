"use client";

import React from "react";

export default function DotPatternBG() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        backgroundColor: "#ffffff",
        backgroundImage:
          "radial-gradient(rgba(0,0,0,0.14) 1.6px, transparent 1.6px), radial-gradient(rgba(0,0,0,0.08) 1.6px, transparent 1.6px)",
        backgroundSize: "20px 20px, 20px 20px",
        backgroundPosition: "0 0, 10px 10px",
        backgroundRepeat: "repeat",
      }}
    />
  );
}
