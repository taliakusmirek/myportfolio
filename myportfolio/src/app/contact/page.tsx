'use client';
import Link from 'next/link';
import { useState, useLayoutEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { Linkedin, Github, Instagram, Mail } from 'lucide-react';
import gsap from 'gsap';

export default function Home() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const mainRef = useRef(null);
  const textRef = useRef(null);
  const socialRef = useRef(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(
      mainRef.current, 
      { opacity: 0 }, 
      { opacity: 1, duration: 1 }
    )
    .fromTo(
      textRef.current, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      '-=0.5'
    )
    .fromTo(
      socialRef.current, 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      '-=0.5'
    );

    return () => {
      tl.kill(); // Prevent animations stacking
    };
  }, [pathname]);

  return (
    <div ref={mainRef} className="flex flex-col min-h-screen relative bg-[#F61010] text-black opacity-0">
      <div className="absolute top-4 right-4 md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-lg font-bold">
          ☰
        </button>
      </div>
      
      <div
        className={`fixed inset-0 bg-black text-[#F61010] flex flex-col items-center justify-center space-y-6 text-2xl font-bold font-Gascogne transition-transform duration-300 ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} md:hidden`}
      >
        <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-4 text-3xl">
          ✕
        </button>
        <Link href="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link>
        <Link href="/works" onClick={() => setMenuOpen(false)}>MY WORKS</Link>
        <Link href="/obsessions" onClick={() => setMenuOpen(false)}>OBSESSIONS</Link>
        <Link href="/resume" onClick={() => setMenuOpen(false)}>RESUME</Link>
        <Link href="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link>
      </div>
      
      <div className="absolute top-4 left-4 text-xl hidden md:block font-Gascogne">
        <Link href="https://drive.google.com/file/d/1ZlXPqvFE0gs2E72TYkKF0d6iQtd9Fpte/view?usp=sharing" prefetch={false}>RESUME</Link>
      </div>
      
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-center text-xs font-bold">
        <p>BASED IN BOSTON, MA.</p>
        <p>SOPHOMORE AT BOSTON COLLEGE, DOUBLE MAJORING IN CS AND BUSINESS.</p>
      </div>
      
      <div className="absolute top-4 right-4 text-xl flex flex-col space-y-2 items-end hidden md:flex font-Gascogne">
        <Link href="/" prefetch={false}>HOME</Link>
      </div>
      
      <main className="flex flex-grow flex-col items-center justify-center">
        <h1 ref={textRef} className="text-[20vw] font-gascogne uppercase text-center leading-none opacity-0">
          LET&apos;S CHAT.
        </h1>
        <div ref={socialRef} className="mt-4 flex space-x-6 opacity-0">
          <a href="https://www.linkedin.com/in/talia-kusmirek-b0421b289/">
            <Linkedin size={40} />
          </a>
          <a href="https://github.com/taliakusmirek">
            <Github size={40} />
          </a>
          <a href="https://instagram.com/taliadouceur">
            <Instagram size={40} />
          </a>
          <a href="mailto:kusmire@bc.edu">
            <Mail size={40} />
          </a>
        </div>
      </main>
    </div>
  );
}