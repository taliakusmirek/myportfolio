import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "TaliaLabs",
  description: "The official portfolio of Talia Kusmirek, including open-source tools made under the TaliaLabs brand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
