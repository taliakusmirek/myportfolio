import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-transparent">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <div className="text-center">
          <p className="poly-regular-italic text-slate-500">Tap this &apos;tiny&apos; button to chat with me</p>

          {/* Big Connect button */}
          <Link
            href="mailto:kusmire@bc.edu"
            className="group relative mx-auto mt-6 block w-fit select-none rounded-full px-32 py-20 text-7xl md:text-8xl font-semibold text-pink-300 transition-all duration-300"
          >
            <span className="relative z-10">Connect</span>
            {/* Button base (black at rest) */}
            <span className="absolute inset-0 rounded-full bg-[#2b2b2b] shadow-[0_26px_46px_rgba(0,0,0,0.45),inset_0_-3px_0_rgba(255,255,255,0.12)] transition-colors duration-300" aria-hidden />
            {/* Under-glow strip (always visible, stronger on hover) */}
            <span
              className="pointer-events-none absolute -bottom-3 left-6 right-6 h-5 rounded-full bg-pink-300/90 blur-md opacity-90 group-hover:opacity-100"
              aria-hidden
            />
            {/* Outer glow (subtle at rest, stronger on hover) */}
            <span
              className="pointer-events-none absolute -inset-8 rounded-full opacity-70 group-hover:opacity-100"
              aria-hidden
              style={{
                background:
                  "radial-gradient(700px 260px at 50% 60%, rgba(255,214,234,0.75), rgba(255,214,234,0.45) 35%, rgba(255,255,255,0) 65%)",
                filter: "blur(14px)",
              }}
            />
          </Link>
        </div>

        {/* Footer contact bar (full width) */}
        <div className="mt-10 w-full">
          <div className="mx-auto max-w-6xl rounded-2xl bg-white/90 px-6 py-6 ring-1 ring-black/10">
            <div className="flex items-center justify-between gap-6">
              <div className="flex items-center gap-2 mr-8">
                <a href="https://instagram.com/taliadoux" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="group rounded-xl bg-gradient-to-tr from-purple-500 via-pink-500 to-pink-300 p-2 text-white transition-transform hover:-translate-y-1">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="white" aria-hidden className="h-7 w-7"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zm6-3.25a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 18 6.25z"/></svg>
                </a>
                <a href="https://github.com/taliakusmirek" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="group rounded-xl bg-[#0f172a] p-2 text-white transition-transform hover:-translate-y-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7"><path d="M12 .5A11.5 11.5 0 0 0 .5 12 11.5 11.5 0 0 0 8 23.2c.4.1.6-.2.6-.4v-2c-2.5.5-3.1-1.1-3.1-1.1-.4-1-.9-1.3-.9-1.3-.8-.6.1-.6.1-.6.9.1 1.3 1 1.3 1 .8 1.3 2.1.9 2.6.7.1-.6.3-1 .6-1.2-2-.2-4.1-1-4.1-4.5 0-1 .4-1.9 1-2.5-.1-.3-.4-1.2.1-2.5 0 0 .8-.3 2.6 1a9 9 0 0 1 4.6 0c1.8-1.3 2.6-1 2.6-1 .5 1.3.2 2.2.1 2.5.6.6 1 1.5 1 2.5 0 3.5-2.1 4.2-4.1 4.5.3.2.6.8.6 1.6v2.3c0 .2.2.5.6.4A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/talia-kusmirek-b0421b289/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="group rounded-xl bg-[#0A66C2] p-2 text-white transition-transform hover:-translate-y-1">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden className="h-7 w-7"><path d="M20.45 20.45h-3.55v-5.6c0-1.34-.03-3.07-1.87-3.07-1.88 0-2.17 1.47-2.17 2.98v5.69H9.31V9h3.41v1.56h.05c.47-.89 1.63-1.83 3.35-1.83 3.58 0 4.24 2.36 4.24 5.43v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.55V9H3.56v11.45Z"/></svg>
                </a>
              </div>
              <a href="mailto:kusmire@bc.edu" className="flex items-center gap-3 rounded-xl px-3 py-2 text-slate-800 hover:text-black">
                <span className="text-2xl md:text-3xl">✉️</span>
                <span className="inter-body text-2xl md:text-3xl">kusmire@bc.edu</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
