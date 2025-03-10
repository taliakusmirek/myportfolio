'use client';
import Link from 'next/link';
import { useState, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { usePathname } from 'next/navigation';

export default function Obsessions() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    ).fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' }
    );
  
    return () => {
      tl.kill();
    };
  }, [pathname]);
  
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    
    if (menuOpen) {
      tl.to(menuRef.current, { x: 0, opacity: 1, duration: 0.3, ease: 'power2.out' });
    } else {
      tl.to(menuRef.current, { x: '100%', opacity: 0, duration: 0.3, ease: 'power2.in' });
    }
  
    return () => {
      tl.kill();
    };
  }, [menuOpen]);
  

  return (
    <div className="relative flex flex-col min-h-screen bg-[#F61010] text-black overflow-hidden">
      {/* Mobile Menu Button */}
      <div className="absolute top-4 right-4 md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-lg font-bold">☰</button>
      </div>
      
      {/* Mobile Dropdown Menu */}
      <div
        ref={menuRef}
        className={`fixed inset-0 bg-black text-[#F61010] flex flex-col items-center justify-center space-y-6 text-2xl font-bold md:hidden ${
          menuOpen ? 'z-50 pointer-events-auto' : 'z-[-1] pointer-events-none'
        }`}
        style={{ transform: 'translateX(100%)', opacity: 0 }}
      >
        <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-4 text-3xl">✕</button>
        <Link href="/about">ABOUT</Link>
        <Link href="/works">MY WORKS</Link>
        <Link href="/obsessions">OBSESSIONS</Link>
        <Link href="/resume">RESUME</Link>
        <Link href="/contact">CONTACT</Link>
      </div>

      {/* Main Content */}
      <div ref={containerRef} className="relative flex flex-row min-h-screen px-16 pt-16">
        <div className="z-10">
          <h1 ref={titleRef} className="text-[18vw] font-perandory leading-none mb-12">OBSESSIONS</h1>
          <div ref={textRef} className="flex flex-col space-y-4 text-xl font-Inter">
            <div className="flex justify-start items-baseline">
              <p className="font-bold w-48">FAVORITE FOOD</p>
              <p className="ml-8">carbonara</p>
            </div>
            <div className="flex justify-start items-baseline">
              <p className="font-bold w-48">FAVORITE MOVIE</p>
              <p className="ml-8">the parent trap</p>
            </div>
            <div className="flex justify-start items-baseline">
              <p className="font-bold w-48">FAVORITE CITY</p>
              <p className="ml-8">geneva</p>
            </div>
            <div className="flex justify-start items-baseline">
              <p className="font-bold w-48">FAVORITE SONG</p>
              <p className="ml-8">L-O-V-E by Nat King Cole</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="absolute top-4 right-4 text-xl hidden md:block font-Gascogne">
        <Link href="/">HOME</Link>
      </div>
      <div className="absolute bottom-4 left-4 text-xl hidden md:block font-Gascogne">
        <Link href="https://drive.google.com/file/d/1ZlXPqvFE0gs2E72TYkKF0d6iQtd9Fpte/view?usp=sharing" prefetch={false}>RESUME</Link>
      </div>
      <div className="absolute bottom-4 right-4 text-xl hidden md:block font-Gascogne">
        <Link href="/contact">CONTACT</Link>
      </div>
    </div>
  );
}