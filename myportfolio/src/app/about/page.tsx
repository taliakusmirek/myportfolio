'use client';
import Link from 'next/link';
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

        <section className="section flex flex-col justify-center items-start text-left px-16 min-w-screen">
          <h2 className="text-3xl font-bold font-Inter">PAST ROLES</h2>
          <p className="mt-4 text-xl font-Inter">
            software engineer intern @ <a href="https://opheliadating.com/" target="_blank" className="font-bold no-underline">ophelia</a><br />
            first american scholar @ <a href="https://www.linkedin.com/posts/talia-kusmirek-b0421b289_aiforgood-un-aiforgood-activity-7188588038422167554-R5gy/" target="_blank" className="font-bold no-underline">ai for good @ united nations</a><br />
            research student @ <a href="https://cybersecurity.sites.ccsu.edu/" target="_blank" className="font-bold no-underline">ccsu</a><br />
            front-end software engineer intern @ <a href="https://www.techforgoodinc.org/" target="_blank" className="font-bold no-underline">tech for good inc.</a>
          </p>
        </section>

        <section className="section flex flex-col justify-center items-start text-left px-16 min-w-screen">
          <h2 className="text-3xl font-bold font-Inter">CURRENT ROLES</h2>
          <p className="mt-4 text-xl font-Inter">
            tech team @ <a href="https://bc.campuslabs.com/engage/organization/computer-science-society" target="_blank" className="font-bold no-underline">bccss</a><br />
            tech lead @ <a href="https://bcmig.onrender.com/" target="_blank" className="font-bold no-underline">mig</a><br />
            core team member @ <a href="https://www.innoforeveryone.org/" target="_blank" className="font-bold no-underline">innovation for everyone</a><br />
            mentor @ <a href="https://aiforgood.itu.int/innovate-for-impact/" target="_blank" className="font-bold no-underline">ai for good</a>
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
