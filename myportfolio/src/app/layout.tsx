// src/app/layout.tsx

import React from "react";
import "./globals.css";
import NavBar from "../components/NavBar/NavBar";
import DotPatternBG from "../components/Background/DotPattern";

export const metadata = {
  title: "Talia Kusmirek",
  description: "The portfolio of Talia Kusmirek and all open-source tools of the 'talialabs' brand.",
  icons: "/favicon.svg",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <NavBar />
        {/* Background sky video (lowest) */}
        <div className="bg-video -z-10" aria-hidden>
          <video autoPlay loop muted playsInline preload="auto">
            <source src="/videos/sky.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Dot pattern above video, below content */}
        <DotPatternBG />
        {/* Global elements like headers or navigation can go here */}
        <main className="relative z-10">{children}</main> {/* The page content will be rendered here */}
      </body>
    </html>
  );
}
