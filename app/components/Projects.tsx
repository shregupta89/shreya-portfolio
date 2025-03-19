'use client'
import Typewrite from '../helper/Typewrite'
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const projectsData = [
  {
    name: 'THRIVEAGRO',
    skills: ['React', 'Node.js', 'MongoDB'],
    description: 'A platform empowering farmers with AI-driven crop insights.',
    image: 'https://cdn-icons-png.flaticon.com/512/1704/1704342.png'
  },
  {
    name: 'DISHCOVERY',
    skills: ['Next.js', 'Tailwind', 'AI'],
    description: 'An AI-powered recipe discovery tool.',
    image: 'https://cdn-icons-png.flaticon.com/512/1046/1046856.png'
  },
  {
    name: 'XPENSE',
    skills: ['TypeScript', 'Express', 'PostgreSQL'],
    description: 'A smart expense management application.',
    image: 'https://cdn-icons-png.flaticon.com/512/2169/2169769.png'
  },
  {
    name: 'MANN NIRVANA',
    skills: ['Python', 'Flask', 'NLP'],
    description: 'A mental wellness platform with personalized AI recommendations.',
    image: 'https://cdn-icons-png.flaticon.com/512/1077/1077063.png'
  }
];

const Projects = () => {
  return (
    <div id="projects" className="p-4 sm:p-6 md:p-10  sm:px-6 lg:px-12 ">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
        IDEAS TURNED TO REALITY: 
        <span className="text-contrast">
              <Typewrite
              examples={["PROJECTS","PROJECTS","PROJECTS"]}/></span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {projectsData.map((project) => (
          <Card key={project.name} className="rounded-2xl shadow-lg h-full">
            <CardContent className="p-4 flex flex-col h-full">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-32 sm:h-40 object-contain mb-4 rounded-xl"
              />

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-2">
                <h2 className="text-lg sm:text-xl font-semibold">{project.name}</h2>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs sm:text-sm bg-gray-200 px-2 py-1 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-sm sm:text-base text-gray-700">
                {project.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
