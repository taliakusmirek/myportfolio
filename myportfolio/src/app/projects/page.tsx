'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '../../components/Navigation';
import Footer from '../../components/Footer';

// Define types for project and category
interface Project {
  title: string;
  imageSrc: string;
  description: string;
  techStack: string;
  dateRange: string;
  githubLink?: string; // Optional GitHub link
  imageWidth?: number;
  imageHeight?: number;
}

interface Category {
  name: string;
  imageSrc: string;
  projects: Project[];
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Define categories with proper types
  const categories: Category[] = [
    {
      name: 'fashion',
      imageSrc: '/cutout/miumiu.png',
      projects: [
        { 
          title: 'myCloset', 
          imageSrc: '/cutout/christian.png', 
          description: `A digital wardrobe management application designed to revolutionize 
          personal fashion organization and styling.
    
          The app aims to provide users with an intuitive interface to catalog 
          their clothing items, create outfit combinations, and track their 
          wardrobe inventory.
    
          Features include item categorization, outfit planning, and style recommendations.`,
          techStack: 'React Native, TypeScript, Firebase',
          dateRange: 'Winter 2024',
          githubLink: undefined,
          imageWidth: 150,
          imageHeight: 150
        },
        { 
          title: 'Focal', 
          imageSrc: '/cutout/bucket.png', 
          description: `An innovative fashion recommendation platform that leverages 
          machine learning to provide personalized style suggestions.
    
          The application analyzes user preferences, body type, and current 
          fashion trends to curate unique outfit recommendations.
    
          Designed to help users discover new styles and build confidence 
          in their fashion choices.`,
          techStack: 'Python, Machine Learning, React',
          dateRange: 'Winter 2025',
          githubLink: undefined,
          imageWidth: 150,
          imageHeight: 150
        },
        { 
          title: 'W.F.B.', 
          imageSrc: '/cutout/jean.png', 
          description: `A sustainable fashion marketplace that connects conscious 
          consumers with eco-friendly and ethical fashion brands.
    
          The platform focuses on promoting sustainable fashion choices, 
          providing transparency about clothing production, and supporting 
          environmentally responsible designers.
    
          Features include brand stories, sustainability ratings, and 
          curated collections of ethical fashion.`,
          techStack: 'Django, PostgreSQL, React',
          dateRange: 'Spring 2025',
          githubLink: undefined,
          imageWidth: 150,
          imageHeight: 150
        },
        { 
          title: 'Trends Tracker', 
          imageSrc: '/cutout/bow.png', 
          description: `A comprehensive fashion trend analysis and forecasting tool 
          that aggregates data from social media, fashion weeks, and 
          online shopping platforms.
    
          Utilizes advanced data analytics to predict upcoming fashion trends, 
          providing insights for designers, retailers, and fashion enthusiasts.
    
          Offers real-time trend visualization and predictive trend mapping.`,
          techStack: 'Data Science, React, Machine Learning',
          dateRange: 'Spring 2025',
          githubLink: undefined,
          imageWidth: 150,
          imageHeight: 150
        },
      ],
    },
    {
      name: 'tech',
      imageSrc: '/cutout/scarf.png',
      projects: [
        { 
          title: 'Rust Security Chatbot', 
          imageSrc: '/cutout/chloe.png', 
          description: `This project implements a chatbot interface that allows users to input Rust code snippets 
          and receive security-related feedback. 
    
          The backend is built with Rust, utilizing an HTTP server and thread pool implementation. 
          The front end is a simple HTML/JavaScript interface that communicates with the Rust backend.`,
          techStack: 'Rust, HTML, JavaScript',
          dateRange: 'Summer 2024',
          githubLink: 'https://github.com/taliakusmirek/Rust-Based-Chatbot-for-Security-Auditing',
          imageWidth: 150,
          imageHeight: 150
        },
        { 
          title: 'Nebula: Vector DB', 
          imageSrc: '/cutout/ysl.png', 
          description: 'Work in progress! Github link up soon.',
          techStack: 'Rust, C, RestAPI, Docker',
          dateRange: 'Ongoing',
          githubLink: undefined,
          imageWidth: 150,
          imageHeight: 150
        },
        { 
          title: 'Advocato', 
          imageSrc: '/cutout/prada.png', 
          description: `Advocato is an online platform designed to support the assessment and management 
          of domestic violence cases in Spain. 
    
          Built with Django, this project aligns with the United Nations Sustainable Development Goals (SDG), 
          particularly SDG 5: Gender Equality and SDG 16: Peace, Justice, and Strong Institutions. 
    
          Advocato aims to improve the accuracy and comprehensiveness of domestic violence risk assessments, 
          starting with Spain and potentially expanding to other regions.`,
          techStack: 'Django, Python, Tensorflow',
          dateRange: 'Fall 2023',
          githubLink: 'https://github.com/taliakusmirek/Advocato-SpainDomesticViolence-Chatbot',
          imageWidth: 150,
          imageHeight: 150
        },
        { 
          title: 'Carbon Emissions Predictor', 
          imageSrc: '/cutout/pradabag.png', 
          description: `This project aims to predict carbon emissions using a machine learning model. 
    
          I used historical data from the Carbon Majors Emissions dataset available on Kaggle. 
    
          The main goal was to create an accurate predictive model and evaluate its performance.`,
          techStack: 'Machine Learning, Python, Pandas, Tensorflow',
          dateRange: 'Winter 2023',
          githubLink: 'https://github.com/taliakusmirek/Carbon-Emissions-Predictor',
          imageWidth: 150,
          imageHeight: 150
        },
      ],
    }
  ];

  const handleCategoryClick = (category: string) => {
    // Toggle category selection
    setSelectedCategory(prevCategory => 
      prevCategory === category ? null : category
    );
    setSelectedProject(null);
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <div className="flex justify-center items-center mt-16">
            <ul className="flex space-x-20">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className={`flex flex-col items-center cursor-pointer transition-all duration-500 ease-in-out ${
                    selectedCategory === category.name
                      ? 'opacity-75'
                      : 'opacity-100'
                  }`}
                  onClick={() => handleCategoryClick(category.name)}
                >
                  <div>
                    <Image src={category.imageSrc} alt={category.name} width={100} height={100} />
                    <span className="text-base-mobile sm:text-base-desktop font-Script mt-2">{category.name}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* If a category is selected, show the projects */}
          {selectedCategory && (
            <div className="mt-16 flex flex-col items-center space-y-6 sm:flex-row sm:space-y-0 sm:space-x-10">
              {categories.find((c) => c.name === selectedCategory)?.projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center cursor-pointer border-2 border-brand-Bold-Red rounded-lg p-2 shadow-md w-48 h-auto"
                  onClick={() => handleProjectClick(project)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-center items-center h-32 w-full">
                    <Image
                      src={project.imageSrc}
                      alt={project.title}
                      width={project.imageWidth || 150}
                      height={project.imageHeight || 150}
                      className="object-contain max-h-full max-w-full"
                    />
                  </div>
                  <span className="text-sm mt-2 text-brand-Bold-Red text-center">{project.title}</span>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </main>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
            >
              <h2 
                className={`text-lg font-bold text-brand-Bold-Red font-Script ${
                  selectedProject.githubLink 
                    ? 'cursor-pointer hover:underline' 
                    : ''
                }`}
                onClick={() => {
                  if (selectedProject.githubLink) {
                    window.open(selectedProject.githubLink, '_blank', 'noopener,noreferrer');
                  }
                }}
              >
                {selectedProject.title}
              </h2>
              <p className="text-xs-mobile text-xs-desktop pb-2">{selectedProject.dateRange}</p>
              <p className="text-xs-mobile text-xs-desktop pb-6 text-brand-Bold-Red">{selectedProject.techStack}</p>
              <p>{selectedProject.description}</p>
              <div className="flex justify-end mt-8">
                <button
                  className="text-brand-Bold-Red hover:bg-gray-200 border-brand-Bold-Red border-2 px-4 py-2 rounded"
                  onClick={handleCloseProjectDetails}
                >
                  close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}