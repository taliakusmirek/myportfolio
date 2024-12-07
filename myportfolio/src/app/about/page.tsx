'use client'
import Image from 'next/image';
import Nav from '../../components/Navigation';
import Footer from '../../components/Footer';
import { useState, useEffect } from 'react';

export default function About() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [cardsVisible, setCardsVisible] = useState<boolean[]>([]);

  const content = [
    {
      title: "advocating AI ethics",
      image: { src: "/cutout/blackbag.png", width: 60, height: 100 },
      text: `As a Core Member of Innovate For Everyone and the United Nations' 'AI For Good' Program, I dedicate time to promoting responsible AI practices...`,
      specialClass: "blackbag-card-adjust",
      hoverText: "My work in AI ethics focuses on ensuring technological advancements address potential biases and promoting responsible innovation that benefits society as a whole."
    },
    {
      title: "building Ophelia",
      image: { src: "/cutout/missdior.png", width: 80, height: 100 },
      text: `At Ophelia, I contribute as a Software Engineer, focusing on the development and optimization of a dating web app...`,
      hoverText: "Developing Ophelia involves creating an intuitive, secure, and engaging platform that reimagines digital dating through innovative technology and user-centric design."
    },
    {
      title: "growing my brand",
      image: { src: "/cutout/scarf.png", width: 60, height: 70 },
      text: `Building a personal brand has been an exciting journey, blending creativity, technical skill, and entrepreneurial vision...`,
      specialClass: "brand-card-adjust",
      hoverText: "My personal brand is a dynamic narrative of innovation, combining technical expertise with my passion for fashion to create fun projects for users to try."
    },
    {
      title: "studying in Boston",
      image: { src: "/cutout/dior.png", width: 80, height: 100 },
      text: `Pursuing a dual concentration in Computer Science and Business Analytics at Boston College...`,
      specialClass: "dior-card-adjust",
      hoverText: "My academic journey at Boston College bridges technical computing skills with strategic business insights, preparing me to be a versatile tech innovator."
    },
  ];

  // Handle the fade-in for each card
  useEffect(() => {
    const timers = content.map((_, index) =>
      setTimeout(() => {
        setCardsVisible((prev) => [...prev, true]);
      }, index * 300) // Adjust delay between card appearances
    );

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  return (
    <div>
      <Nav />
      <main className="p-4 mt-8">
        {/* Title without typewriter effect */}
        <div className="flex justify-center">
          <h1
            className="text-h1-mobile md:text-h1-desktop mt-20 mb-20 text-brand-Bold-Red flex justify-center"
            style={{ whiteSpace: 'nowrap' }}
          >
          i&apos;ve been pretty busy...
          </h1>
        </div>
        <div className="grid justify-items-center gap-8 px-4 sm:px-10 py-10 auto-rows-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-16 pb-16 sm:pb-24">
          {content.map((item, index) => (
            <div
              key={index}
              className={`
                relative border-2 border-brand-Bold-Red rounded-lg p-6 mb-14 
                transition-all duration-300 ease-in-out 
                ${item.specialClass || ''} 
                ${hoveredCard === index ? 'bg-brand-Bold-Red text-white' : ''}
                w-full max-w-[360px] min-h-[200px] 
                ${cardsVisible[index] ? 'fade-in' : 'opacity-0'}
              `}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`
                  absolute top-0 left-1/2 transform -translate-x-1/2 
                  ${
                    item.specialClass === 'brand-card-adjust' 
                      ? '-translate-y-12' 
                    : item.specialClass === 'dior-card-adjust'
                      ? '-translate-y-16'
                    : item.specialClass === 'blackbag-card-adjust'
                      ? '-translate-y-16'
                    : '-translate-y-16'
                  } 
                  px-2.5 flex items-center z-20 w-full
                `}
                style={{ height: `${item.image.height}px` }}
              >
                <h2
                  className={`
                    text-xl font-Rubik 
                    ${hoveredCard === index ? 'text-white' : 'text-brand-Bold-Red'} 
                    text-center whitespace-nowrap
                  `}
                  style={{
                    maxWidth: `${item.image.width + 150}px`,
                  }}
                >
                  {item.title}
                </h2>
                <div 
                  className={`ml-2 flex ${
                    item.specialClass === 'brand-card-adjust' 
                      ? 'justify-end absolute right-2 top-1/2 -translate-y-1/2' 
                    : item.specialClass === 'dior-card-adjust'
                      ? 'ml-8'
                    : item.specialClass === 'blackbag-card-adjust'
                      ? 'ml-6'
                    : ''
                  }`}
                >
                  <Image
                    src={item.image.src}
                    alt={item.title}
                    width={item.image.width}
                    height={item.image.height}
                    className={`${
                      item.specialClass === 'brand-card-adjust' 
                        ? 'mr-0 mt-20' 
                      : item.specialClass === 'blackbag-card-adjust'
                        ? '-mt-4 ml-2'
                      : item.specialClass === 'dior-card-adjust'
                        ? '-mt-10'
                      : '-mt-6 ml-2'
                    }`}
                  />
                </div>
              </div>
              
              <div className="relative">
                {/* Original text */}
                <div 
                  className={`
                    absolute top-10 left-0 right-0 transition-all duration-300 ease-in-out 
                    ${hoveredCard === index 
                      ? 'opacity-0' 
                      : 'opacity-100'
                    }
                  `}
                >
                  <p className={`
                    text-sm 
                    ${hoveredCard === index ? 'text-transparent' : ''}
                    transition-colors duration-300
                  `}>
                    {item.text}
                  </p>
                </div>
                
                {/* Hover text */}
                <div 
                  className={`
                    absolute top-10 left-0 right-0 transition-all duration-300 ease-in-out
                    ${
                      hoveredCard === index 
                        ? 'opacity-100 visible translate-y-0' 
                        : 'opacity-0 invisible translate-y-10'
                    }
                  `}
                >
                  <p className={`
                    text-sm 
                    ${hoveredCard === index ? 'text-white' : 'text-black'}
                    transition-colors duration-300
                  `}>
                    {item.hoverText}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
