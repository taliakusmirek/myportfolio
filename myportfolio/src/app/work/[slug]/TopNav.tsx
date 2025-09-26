"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function TopNav() {
  const router = useRouter();
  const params = useSearchParams();
  const from = params.get("from");

  const goBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push(from === "work" ? "/#work" : "/#top");
    }
  };

  return (
    <div className="sticky top-4 z-40 mx-auto flex w-fit items-center gap-4 rounded-full bg-black text-white px-4 py-2 shadow-xl">
      <button onClick={goBack} className="rounded-full bg-white/10 px-3 py-1 hover:bg-white/20" aria-label="Close">×</button>
      <Link href="/#contact" className="rounded-full bg-pink-300 px-4 py-1 text-black hover:bg-pink-200">Start new project</Link>
    </div>
  );
}
