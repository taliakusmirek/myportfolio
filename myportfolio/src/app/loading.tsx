import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const helloWords = [
  { lang: 'English', word: 'Hello' },
  { lang: 'Spanish', word: 'Hola' },
  { lang: 'French', word: 'Bonjour' },
  { lang: 'Polish', word: 'Cześć' },
  { lang: 'German', word: 'Hallo' },
  { lang: 'Italian', word: 'Ciao' },
  { lang: 'Japanese', word: 'こんにちは' },
  { lang: 'Mandarin', word: '你好' },
];

import LogoImage from '@/cutout/logo.png';
import Cutout1 from '@/cutout/dior.png';
import Cutout2 from '@/cutout/blackbag.png';
import Cutout3 from '@/cutout/miumiu.png';
import Cutout4 from '@/cutout/flat.png';
import Cutout5 from '@/cutout/watch.png';
import Cutout6 from '@/cutout/scarf.png';
import Cutout7 from '@/cutout/missdior.png';
import Cutout8 from '@/cutout/blazer.png';


const LoadingScreen = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  const [showCutouts, setShowCutouts] = useState(false);

  const cutoutImages = [
    Cutout1, Cutout2, Cutout3, Cutout4, 
    Cutout5, Cutout6, Cutout7, Cutout8
  ];

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % helloWords.length);
    }, 800);

    const logoTimeout = setTimeout(() => {
      setShowLogo(true);
    }, helloWords.length * 1000);

    const cutoutsTimeout = setTimeout(() => {
      setShowCutouts(true);
    }, (helloWords.length * 1000) + 1000);

    return () => {
      clearInterval(wordInterval);
      clearTimeout(logoTimeout);
      clearTimeout(cutoutsTimeout);
    };
  }, []);

  const calculatePosition = (index: number, total: number) => {
    const angle = (index / total) * Math.PI * 2;
    const radius = 300; // Adjust this value to change the circle size
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
      rotate: angle * (180 / Math.PI)
    };
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Hello Words */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentWordIndex}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold absolute"
        >
          {helloWords[currentWordIndex].word}
          <div className="text-sm mt-2 text-center opacity-50">
            {helloWords[currentWordIndex].lang}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Logo */}
      <AnimatePresence>
        {showLogo && (
          <motion.img
            src={LogoImage}
            alt="Logo"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute w-64 h-64 z-10"
          />
        )}
      </AnimatePresence>

      {/* Rotating Cutouts */}
      {showCutouts && cutoutImages.map((Cutout, index) => {
        const { x, y, rotate } = calculatePosition(index, cutoutImages.length);
        return (
          <motion.img
            key={index}
            src={Cutout}
            alt={`Cutout ${index + 1}`}
            initial={{ 
              opacity: 0, 
              rotate: 0, 
              scale: 0.5,
              x: 0,
              y: 0
            }}
            animate={{ 
              opacity: 1, 
              rotate: rotate, 
              scale: 1,
              x,
              y
            }}
            transition={{ 
              duration: 2, 
              delay: index * 0.2, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
            className="absolute w-32 h-32"
          />
        );
      })}
    </div>
  );
};

export default LoadingScreen;