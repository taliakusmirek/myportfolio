'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '../../components/Navigation';
import Footer from '../../components/Footer';

// Define types for project and category
interface Project {
  title: string;
  imageSrc: string;
  description: string;
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
      name: "fashion",
      imageSrc: "/cutout/miumiu.png",
      projects: [
        { title: "Project 1", imageSrc: "/cutout/fashion1.png", description: "This is a fashion project description." },
        { title: "Project 2", imageSrc: "/cutout/fashion2.png", description: "This is another fashion project description." }
      ]
    },
    {
      name: "tech",
      imageSrc: "/cutout/scarf.png",
      projects: [
        { title: "Tech Project 1", imageSrc: "/cutout/tech1.png", description: "This is a tech project description." },
        { title: "Tech Project 2", imageSrc: "/cutout/tech2.png", description: "This is another tech project description." }
      ]
    }
  ];

  const handleCategoryClick = (category: string) => {
    // Toggle category open/close
    if (selectedCategory === category) {
      setSelectedCategory(null); // Close the category if it's already open
    } else {
      setSelectedCategory(category); // Open the selected category
    }
    setSelectedProject(null);  // Reset project details when switching categories
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <div className="flex justify-center items-center mt-8">
            <ul className="flex space-x-20">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className={`flex flex-col items-center cursor-pointer transition-all duration-500 ease-in-out ${
                    selectedCategory === category.name
                      ? category.name === "tech"
                        ? "translate-x-[100px] opacity-75"  // Move tech right with opacity change
                        : "translate-x-[-100px] opacity-75"  // Move fashion left with opacity change
                      : "opacity-100"
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
            <div className="mt-8 transition-all duration-500 ease-in-out">
              <div className="flex justify-center space-x-10">
                {categories.find(c => c.name === selectedCategory)?.projects.map((project, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center cursor-pointer"
                    onClick={() => handleProjectClick(project)}
                  >
                    <Image
                      src={project.imageSrc}
                      alt={project.title}
                      width={100}
                      height={100}
                    />
                    <span className="text-sm font-Script mt-2">{project.title}</span>
                  </div>
                ))}
              </div>

              {/* Display the project details when a project is clicked */}
              {selectedProject && (
                <div className="mt-8 border-2 p-4 rounded-lg">
                  <h2 className="text-lg font-bold">{selectedProject.title}</h2>
                  <p>{selectedProject.description}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
