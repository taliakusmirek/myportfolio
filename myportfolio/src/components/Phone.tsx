import { motion } from 'framer-motion';
import Image from 'next/image';

interface Project {
  id: string;
  name: string;
  icon: string;
  link: string;
}

const projects: Project[] = [
  { id: 'ai-chatbot', name: 'AI Chatbot', icon: '/icons/ai.svg', link: '/projects/ai-chatbot' },
  { id: 'design-system', name: 'Design System', icon: '/icons/design.svg', link: '/projects/design-system' },
  { id: 'growth-analytics', name: 'Growth Analytics', icon: '/icons/growth.svg', link: '/projects/growth-analytics' },
  { id: 'portfolio', name: 'Portfolio', icon: '/icons/design.svg', link: '/projects/portfolio' },
  { id: 'mobile-app', name: 'Mobile App', icon: '/icons/ai.svg', link: '/projects/mobile-app' },
  { id: 'data-viz', name: 'Data Visualization', icon: '/icons/growth.svg', link: '/projects/data-viz' },
];

export function Phone() {
  return (
    <div className="relative w-[300px] h-[600px] rounded-[40px] bg-black p-4 shadow-xl transform hover:scale-105 transition-transform duration-300">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[25px] bg-black rounded-b-[20px]" />
      <div className="w-full h-full bg-white rounded-[32px] p-6">
        <div className="grid grid-cols-3 gap-4">
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.link}
              className="relative w-16 h-16 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center hover:shadow-lg"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Image
                src={project.icon}
                alt={project.name}
                fill
                className="object-cover"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
