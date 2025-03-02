// src/app/layout.tsx

import React from "react";
import "./globals.css";

export const metadata = {
  title: "Talia Kusmirek",
  description: "The portfolio of Talia Kusmirek and all open-source tools of the 'talialabs' brand.",
  icons: "/app/favicon.ico",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Global elements like headers or navigation can go here */}
        <main>{children}</main> {/* The page content will be rendered here */}
      </body>
    </html>
  );
}
