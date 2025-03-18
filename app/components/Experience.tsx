"use client"
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle, MinusCircle } from 'lucide-react';

const experiences = [
  {
    year: '2023 - Now',
    role: 'Lead Web Designer | Creative Solutions Inc.',
    description: 'Leading a team of designers to create innovative web solutions that enhance user engagement and drive business growth.'
  },
  {
    year: '2016 - 2020',
    role: 'Senior Designer | Digital Innovations LLC',
    description: 'Focused on UI/UX design for various client projects, enhancing user experiences and delivering creative solutions.'
  },
  {
    year: '2013 - 2016',
    role: 'Web Designer | Tech Visionary Solutions',
    description: 'Worked on developing responsive web designs and collaborating with developers to implement high-quality solutions.'
  }
];

const ExperienceSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="experience"className="p-6 grid md:grid-cols-2 gap-8">
      <div className="bg-gray-100 p-4">
        <img src="/your-image-path.jpg" alt="Experience Image" className="w-full h-full object-cover" />
      </div>
      <div>
        <h1 className="text-4xl font-bold mb-4">EXPERIENCE</h1>
        {experiences.map((experience, index) => (
          <Card key={index} className="rounded-2xl shadow-md mb-4">
            <CardContent className="p-6 cursor-pointer flex justify-between items-center" onClick={() => toggleAccordion(index)}>
              <div>
                <h2 className="text-xl font-bold">{experience.role}</h2>
                <p className="text-sm text-gray-500">{experience.year}</p>
              </div>
              {activeIndex === index ? 
              <button><img src="./minus.png" alt="Collapse" className="w-6 h-6"/></button>  : 
              <button><img src="./add.png" alt="Expand" className="w-6 h-6" /></button>}
            </CardContent>
            {activeIndex === index && (
              <div className="mt-4 text-gray-700 px-6 pb-4">{experience.description}</div>
            )}
          </Card>
        ))}
        <Button className="mt-6 bg-orange-500 text-white">Download CV</Button>
      </div>
    </div>
  );
};

export default ExperienceSection;
