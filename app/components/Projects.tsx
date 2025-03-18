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
    <div  id="projects"className="p-6">
      <h1 className="text-4xl font-bold mb-6">IDEAS TURNED TO REALITY: PROJECTS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <Card key={project.name} className="rounded-2xl">
            <CardContent className="p-4">
              <img src={project.image} alt={project.name} className="w-full h-32 object-cover mb-4 rounded-xl" />
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold">{project.name}</h2>
                <div className="flex gap-2">
                  {project.skills.map((skill) => (
                    <span key={skill} className="text-sm bg-gray-200 px-2 py-1 rounded-md">{skill}</span>
                  ))}
                </div>
              </div>
              <p>{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
