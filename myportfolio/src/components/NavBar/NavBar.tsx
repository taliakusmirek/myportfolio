"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type SectionKey = "top" | "work" | "story" | "contact";

function NavBarCore() {
  const [active, setActive] = useState<SectionKey>("top");

  useEffect(() => {
    const ids: SectionKey[] = ["top", "work", "story", "contact"];
    const raw = ids.map((id) => ({ id, el: document.getElementById(id) as HTMLElement | null }));
    const els = raw.filter((x): x is { id: SectionKey; el: HTMLElement } => x.el !== null);

    if (els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const id = (visible.target as HTMLElement).id as SectionKey;
          setActive(id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    els.forEach(({ el }) => {
      try { io.observe(el); } catch {}
    });
    return () => io.disconnect();
  }, []);

  const pill = (href: string, key: SectionKey, label: string) => {
    const isActive = active === key;
    return (
      <Link href={href} className="relative rounded-full px-3 py-1 overflow-hidden">
        <span
          className={
            "absolute inset-0 rounded-full bg-pink-300/60 transition-all duration-300 " +
            (isActive ? "opacity-100 scale-100" : "opacity-0 scale-75")
          }
          aria-hidden
        />
        <span
          className={
            "relative z-10 transition-colors duration-300 " +
            (isActive ? "text-pink-300" : "text-white hover:text-white/90")
          }
        >
          {label}
        </span>
      </Link>
    );
  };

  return (
    <nav className="pointer-events-auto fixed left-1/2 top-4 z-50 -translate-x-1/2">
      <div className="flex items-center gap-1 rounded-full bg-black/90 px-2 py-1 text-sm text-white shadow-xl ring-1 ring-white/10">
        {pill("#top", "top", "Hey")}
        {pill("#work", "work", "Work")}
        {pill("#story", "story", "Story")}
        {pill("#contact", "contact", "Contact")}
      </div>
    </nav>
  );
}

export default function NavBar() {
  const pathname = usePathname();
  if (pathname?.startsWith("/work/")) return null;
  return <NavBarCore />;
}
