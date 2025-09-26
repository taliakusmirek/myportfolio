'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    name: 'Advocato',
    image: '/images/advocato.png',
    languages: 'Django, TensorFlow, and FastAPI',
    repo: 'https://github.com/taliakusmirek/Advocato-SpainDomesticViolence-Chatbot',
  },
  {
    id: 2,
    name: 'TechMargin',
    image: '/images/techmargin.png',
    languages: 'Python, Next.js',
    repo: 'https://github.com/taliakusmirek/TechMargin',
  },
  {
    id: 3,
    name: 'AI Chrome Blocker',
    image: '/images/ai.png',
    languages: 'Typescript',
    repo: 'https://github.com/taliakusmirek/ai-chrome-blocker',
  },
];

export default function Works() {
  const containerRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    gsap.set('.content', { opacity: 0, y: 50 });

    gsap.to(overlayRef.current, {
      backgroundColor: '#ffffff',
      duration: 0.8,
      onComplete: () => {
        gsap.to(overlayRef.current, { opacity: 0, duration: 0.5, display: 'none' });
        gsap.to('.content', { opacity: 1, y: 0, stagger: 0.3, duration: 0.5, ease: 'power3.out' });
      },
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-transparent text-black">
      {/* Red Flash Overlay */}
      <div ref={overlayRef} className="fixed inset-0 bg-[#F61010] z-50"></div>

      {/* Page Content */}
      <div ref={containerRef} className="content flex flex-col min-h-screen items-center text-black w-screen">
        <section className="section flex flex-col justify-center items-center h-screen w-screen">
          <h1 className="text-[18vw] font-Perandory content">MY WORK</h1>
          <div className="mt-4 content">
            <span className="text-4xl font-bold">↓</span>
          </div>
        </section>

        <div className="section flex flex-col items-center w-screen py-12">
          {projects.map((project) => (
            <div key={project.id} className="content w-[80%] md:w-[60%] p-6 mb-12 border border-black rounded-lg shadow-lg bg-gray-50">
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="block">
                <Image src={project.image} width={400} height={400} alt={project.name} className="mx-auto" />
              </a>
              <h2 className="text-xl font-bold mt-4 text-center font-Gascogne">{project.name}</h2>
            </div>
          ))}
        </div>
      </div>
      {/* Navigation Links */}
      <div className="absolute top-4 right-4 text-xl hidden md:block font-Gascogne">
        <Link href="/">HOME</Link>
      </div>
      <div className="absolute bottom-4 left-4 text-xl hidden md:block font-Gascogne">
        <Link href="/resume">RESUME</Link>
      </div>
      <div className="absolute bottom-4 right-4 text-xl hidden md:block font-Gascogne">
        <Link href="/contact">CONTACT</Link>
      </div>
    </div>
  );
}