'use client';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const menuLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
  
      tl.from(titleRef.current, { opacity: 0, y: 50, duration: 1, ease: 'power3.out' })
        .from(subtitleRef.current, { opacity: 0, y: 30, duration: 1.2, ease: 'power3.out' })
        .from(menuLinksRef.current, { opacity: 0, y: 20, duration: 1, stagger: 0.1, ease: 'power3.out' });
    });
  
    return () => ctx.revert(); 
  }, [pathname]); 

  return (
    <div className="flex flex-col min-h-screen relative bg-[#F61010] text-black">
      <div className="absolute top-4 right-4 md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-lg font-bold">
          ☰
        </button>
      </div>
      
      {/* Fullscreen Mobile Dropdown Menu */}
      <div
  className={`fixed inset-0 bg-black text-[#F61010] flex flex-col items-center justify-center space-y-6 text-2xl font-bold font-Gascogne transition-transform duration-300 ${
    menuOpen ? 'translate-x-0 opacity-100 z-50 pointer-events-auto' : 'translate-x-full opacity-0 z-[-1] pointer-events-none'
  } md:hidden`}
>
  <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-4 text-3xl">
    ✕
  </button>
  {['/about', '/works', '/obsessions', '/resume', '/contact'].map((href, index) => (
    <Link
    key={index}
    href={href}
    onClick={() => setMenuOpen(false)}
    ref={(el) => {
      menuLinksRef.current[index] = el;
    }}
  >
    {href.replace('/', '').toUpperCase()}
  </Link>
  
  ))}
</div>

      
      <div className="absolute top-4 left-4 text-xl hidden md:block font-Gascogne">
        <Link href="/about" prefetch={false}>ABOUT</Link>
      </div>
      
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-center text-xs font-bold" ref={subtitleRef}>
        <p>BASED IN BOSTON, MA.</p>
        <p>SOPHOMORE AT BOSTON COLLEGE, DOUBLE MAJORING IN CS AND BUSINESS.</p>
      </div>
      
      <div className="absolute top-4 right-4 text-xl flex flex-col space-y-2 items-end hidden md:flex font-Gascogne">
        <Link href="/works" prefetch={false}>MY WORK</Link>
        <Link href="/obsessions" prefetch={false}>OBSESSIONS</Link>
      </div>
      
      <main className="flex flex-grow items-center justify-center">
        <h1 ref={titleRef} className="text-[18vw] font-gascogne uppercase text-center leading-none">
          TALIA <br /> KUSMIREK
        </h1>
      </main>
      
      <div className="absolute bottom-4 left-4 text-xl hidden md:block font-Gascogne">
        <Link href="https://drive.google.com/file/d/1ZlXPqvFE0gs2E72TYkKF0d6iQtd9Fpte/view?usp=sharing" prefetch={false}>RESUME</Link>
      </div>
      
      <div className="absolute bottom-4 right-4 text-xl hidden md:block font-Gascogne">
        <Link href="/contact" prefetch={false}>CONTACT</Link>
      </div>
    </div>
  );
}