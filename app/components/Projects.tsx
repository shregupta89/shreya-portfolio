'use client'
import Typewrite from '../helper/Typewrite'
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { projectsData } from '../data/arrayData.js';
import Image from 'next/image'



const Projects = () => {
  // Container animation variant
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Slightly faster than skills section
        delayChildren: 0.1,
      }
    }
  };

  // Card animation variant
  const cardVariants = {
    hidden: {
      y: 50,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 12,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div id="projects" className="p-8 sm:p-6 md:p-10 sm:px-6 lg:px-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
        IDEAS TURNED TO REALITY: 
        <span className="text-contrast">
          <Typewrite examples={["PROJECTS", "PROJECTS", "PROJECTS"]} />
        </span>
      </h1>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={containerVariants}
        key="projects-container"
      >
        {projectsData.map((project) => (
          <motion.div
            key={project.name}
            variants={cardVariants}
            className="h-full"
          >
            <Card className="rounded-2xl shadow-lg h-full group relative overflow-hidden transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-4 flex flex-col h-full">
                <Image
                  src={project.image}
                  alt={project.name}
                  className="w-full h-32 sm:h-40 object-fill mb-4 rounded-xl"
                  width={300} // Adjust based on the expected width
                  height={160}
                />

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-2">
                  <h2 className="text-lg sm:text-xl font-semibold">{project.name}</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs sm:text-sm bg-contrast px-2 py-1 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-gray-700">
                  {project.description}
                </p>

                {/* Overlay with links that appears on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110"
                    aria-label="View GitHub repository"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 18L22 12L16 6"></path>
                      <path d="M8 6L2 12L8 18"></path>
                    </svg>
                  </a>
                  
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110"
                      aria-label="View live project"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;