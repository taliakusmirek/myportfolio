import { useState } from 'react';
import { motion } from 'framer-motion';

interface Achievement {
  id: string;
  text: string;
  completed: boolean;
}

const achievements: Achievement[] = [
  { id: '1', text: 'Visit the US', completed: true },
  { id: '2', text: 'Work for a startup', completed: true },
  { id: '3', text: 'Live in big city', completed: true },
  { id: '4', text: 'Publish own app', completed: true },
  { id: '5', text: 'Move to the US', completed: false },
  { id: '6', text: 'Visit Asia', completed: false },
  { id: '7', text: 'Build an own hardware product', completed: false },
  { id: '8', text: 'Plant an olive tree', completed: false },
];

export function Achievements() {
  const [items, setItems] = useState(achievements);

  const toggleAchievement = (id: string) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  return (
    <div className="w-full max-w-md">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-1">Bucketlist</h2>
        <p className="text-gray-600">Things I did or aim to do in the future.</p>
      </div>
      <div className="space-y-3">
        {items.map((item) => (
          <motion.div
            key={item.id}
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.button
              className={`w-5 h-5 border-2 rounded flex items-center justify-center
                ${item.completed ? 'bg-blue-500 border-blue-500' : 'border-gray-300'}`}
              onClick={() => toggleAchievement(item.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {item.completed && (
                <motion.svg
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-3 h-3 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <motion.path
                    d="M20 6L9 17l-5-5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.svg>
              )}
            </motion.button>
            <span className={`${item.completed ? 'text-gray-500 line-through' : 'text-black'}`}>
              {item.text}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
