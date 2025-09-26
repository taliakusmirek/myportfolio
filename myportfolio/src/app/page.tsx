'use client';
import { motion } from 'framer-motion';
import Hero from '../components/Hero/Hero';
import LatestWork from '../components/Work/LatestWork';
import Contact from '../components/Contact/Contact';
import Story from '../components/Story/Story';
import GooeyYears from '../components/Timeline/GooeyYears';

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent" id="top">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {/* Landing Hero */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
        >
          <Hero />
        </motion.div>

        {/* Years Gooey section before latest work */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
        >
          <GooeyYears />
        </motion.div>

        {/* Latest work */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
        >
          <LatestWork />
        </motion.div>

        {/* Story section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.35 }}
        >
          <Story />
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.45 }}
        >
          <Contact />
        </motion.div>
      </motion.div>
    </main>
  );
}
