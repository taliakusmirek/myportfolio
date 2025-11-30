'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useLayoutEffect, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePathname } from 'next/navigation';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionsRef = useRef<Element[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const sections = containerRef.current.querySelectorAll('.section');
    sectionsRef.current = Array.from(sections);

    const ctx = gsap.context(() => {
      const totalWidth = sections.length * window.innerWidth; // Fix width calculation

      gsap.to(sections, {
        x: () => `-${totalWidth - window.innerWidth}px`,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${totalWidth}`,
          anticipatePin: 1,
          invalidateOnRefresh: true, // Fix resizing issues
        },
      });

      gsap.from('.section h1, .section h2, .section p', {
        opacity: 0,
        y: 50,
        duration: 1.2,
        stagger: 0.3,
        ease: 'power2.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Re-run animation on route change
  const pathname = usePathname();

useEffect(() => {
  const handleRouteChange = () => {
    setTimeout(() => ScrollTrigger.refresh(), 500);
  };

  handleRouteChange(); // Call when the pathname changes

}, [pathname]);

  return (
    <div className="flex flex-col min-h-screen relative bg-[#F61010] text-black">
      {/* Mobile Menu */}
      <div className="absolute top-4 right-4 md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-lg font-bold">☰</button>
      </div>

      <div
        className={`fixed inset-0 bg-black text-[#F61010] flex flex-col items-center justify-center space-y-6 text-2xl font-bold font-Gascogne transition-transform duration-300 ${
          menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } md:hidden`}
      >
        <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-4 text-3xl">✕</button>
        <Link href="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link>
        <Link href="/works" onClick={() => setMenuOpen(false)}>MY WORK</Link>
        <Link href="/obsessions" onClick={() => setMenuOpen(false)}>OBSESSIONS</Link>
        <Link href="/resume" onClick={() => setMenuOpen(false)}>RESUME</Link>
        <Link href="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link>
      </div>

      {/* Horizontal Scroll Container */}
      <div ref={containerRef} className="flex min-h-screen overflow-x-hidden bg-[#F61010] text-black">
        <section className="section flex flex-col justify-start items-start px-16 pt-16 min-w-screen">
          <h1 className="text-[18vw] font-Perandory">ABOUT</h1>
        </section>

        <section className="section flex flex-col lg:flex-row justify-center items-start gap-10 px-16 min-w-screen">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold font-Inter mb-4">The Full Story</h2>
            <h3 className="text-2xl font-semibold font-Inter mb-4">How It Started</h3>
            <p className="mt-2 text-lg font-Inter leading-relaxed">
              I spent the past few years developing a strong foundation in data, product thinking, and AI, while simultaneously growing my
              presence in the fashion and creator space. I’ve worked with brands like Simihaze Beauty as a digital strategist, built an
              Instagram community of over 20,000 women, and produced content that has reached 9M+ views in just five months.
            </p>
          </div>

          {/* Stacked photos */}
          <div className="relative hidden lg:block min-w-[320px] h-[360px]">
            {/* Top-left photo + pin */}
            <div className="absolute -top-4 left-0">
              <div className="mx-auto mb-2 h-4 w-4 rounded-full bg-[#f973b8] shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
              <div className="h-56 w-40 rounded-3xl overflow-hidden ring-1 ring-black/10 shadow-md bg-white">
                <Image src="/images/top.jpeg" alt="Talia portrait" fill className="object-cover" />
              </div>
            </div>

            {/* Top-right photo + pin */}
            <div className="absolute top-16 -right-6 rotate-[-6deg]">
              <div className="mx-auto mb-2 h-4 w-4 rounded-full bg-[#f973b8] shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
              <div className="h-60 w-44 rounded-3xl overflow-hidden ring-1 ring-black/10 shadow-md bg-white">
                <Image src="/images/landing.jpg" alt="Fashion detail" fill className="object-cover" />
              </div>
            </div>

            {/* Bottom-left photo + pin */}
            <div className="absolute bottom-0 left-10 rotate-[4deg]">
              <div className="mx-auto mb-2 h-4 w-4 rounded-full bg-[#f973b8] shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
              <div className="h-52 w-40 rounded-3xl overflow-hidden ring-1 ring-black/10 shadow-md bg-white">
                <Image src="/images/creator.png" alt="Instagram work" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="section flex flex-col justify-center items-start text-left px-16 min-w-screen max-w-3xl">
          <h2 className="text-3xl font-bold font-Inter mb-4">My Mission</h2>
          <p className="mt-2 text-lg font-Inter leading-relaxed">
            Today, I focus on creative direction, social media strategy, and digital marketing for fashion and beauty brands, applying my
            technical background to make campaigns smarter, more measurable, and more scalable. I’m especially passionate about:
          </p>
          <ul className="mt-4 text-lg font-Inter leading-relaxed list-disc list-inside space-y-2">
            <li>Fashion brand storytelling</li>
            <li>Influencer &amp; creator strategy</li>
            <li>Content systems that scale</li>
            <li>Brand launch strategy</li>
            <li>Data-driven marketing (UTMs, funnels, measurement)</li>
            <li>Using tech + AI to optimize marketing workflows</li>
          </ul>
        </section>

        <section className="section flex flex-col justify-center items-start text-left px-16 min-w-screen max-w-3xl">
          <p className="mt-2 text-lg font-Inter leading-relaxed">
            Across my work — from Q&amp;A web experiences to brand audits, launch strategies, and content direction — I bridge creativity with
            analytical thinking.
          </p>
          <p className="mt-4 text-lg font-Inter leading-relaxed">
            I approach every project like both a strategist and a builder: thoughtful, iterative, and grounded in results.
          </p>
        </section>
      </div>

      {/* Navigation Links */}
      <div className="absolute top-4 right-4 text-xl hidden md:flex flex-col items-end font-Gascogne">
        <Link href="/" prefetch={false}>HOME</Link>
      </div>
      <div className="absolute bottom-4 left-4 text-xl hidden md:block font-Gascogne">
        <Link href="https://drive.google.com/file/d/1ZlXPqvFE0gs2E72TYkKF0d6iQtd9Fpte/view?usp=sharing" prefetch={false}>RESUME</Link>
      </div>
      <div className="absolute bottom-4 right-4 text-xl hidden md:block font-Gascogne">
        <Link href="/contact" prefetch={false}>CONTACT</Link>
      </div>
    </div>
  );
}
