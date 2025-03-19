"use client"
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Marquee from '@/components/ui/marquee';
import Typewrite from '../helper/Typewrite'

const skillsData = [
  {
    category: 'Languages and Databases',
    skills: [
      { name: 'JavaScript', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png' },
      { name: 'TypeScript', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968381.png' },
      { name: 'C++', logo: 'https://cdn-icons-png.flaticon.com/512/6132/6132222.png' },
      { name: 'Python', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png' },
      { name: 'HTML/CSS', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968267.png' },
      { name: 'PostgreSQL', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968342.png' },
      { name: 'MySQL', logo: 'https://cdn-icons-png.flaticon.com/512/1199/1199128.png' },
      { name: 'MongoDB', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968342.png' }
    ]
  },
  {
    category: 'Frameworks',
    skills: [
      { name: 'React.js', logo: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png' },
      { name: 'Next.js', logo: 'https://cdn-icons-png.flaticon.com/512/282/282385.png' },
      { name: 'Node.js', logo: 'https://cdn-icons-png.flaticon.com/512/919/919825.png' },
      { name: 'Express.js', logo: 'https://cdn-icons-png.flaticon.com/512/919/919825.png' },
      { name: 'Tailwind', logo: 'https://cdn-icons-png.flaticon.com/512/732/732212.png' }
    ]
  },
  {
    category: 'Development Tools',
    skills: [
      { name: 'Git', logo: 'https://cdn-icons-png.flaticon.com/512/2111/2111288.png' },
      { name: 'GitHub', logo: 'https://cdn-icons-png.flaticon.com/512/2111/2111432.png' },
      { name: 'Docker', logo: 'https://cdn-icons-png.flaticon.com/512/919/919853.png' },
      { name: 'Postman', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968371.png' },
      { name: 'Canva', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968567.png' },
      { name: 'Figma', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png' }
    ]
  }
];

const SkillsSection = () => {
  return (
    <div id="skills" className="">
      {/* Skills section */}
       <div className="p-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">CODING MY WAY THROUGH: <span className="text-contrast">
              <Typewrite
              examples={["SKILLS"]}/></span></h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillsData.map((category) => (
          <Card key={category.category} className="rounded-2xl">
            <CardContent className="p-4">
              <h2 className="text-xl font-bold mb-2 border-b-2 border-border pb-1">{category.category}</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="flex items-center gap-2">
                    <img src={skill.logo} alt={skill.name} className="w-8 h-8" />
                    <span className="text-lg">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
      
       </div>

       {/* marquee section */}
       <div className='mt-8'>
        <Marquee
            items={["Mern stack developer", "AI/ML Enthusiast", "C++ Programmer", "Web3 Enthusiast"]}
            speed={15}
            pauseOnHover={true}
          />
        
       </div>
    
    </div>
   
  );
};

export default SkillsSection;
