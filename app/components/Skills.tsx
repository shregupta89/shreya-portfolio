"use client"
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Marquee from '@/components/ui/marquee';
import Typewrite from '../helper/Typewrite';
import { motion } from 'framer-motion';
import { skillsData } from '../data/arrayData.js';

const SkillsSection = () => {
  // Enhanced animation variants for card transitions
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // This creates the sequential effect
        delayChildren: 0.1,   // Small delay before the first card appears
      }
    }
  };
  
  // Animation variants for individual cards with smooth easing
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
        stiffness: 50,   // Softer spring for smoother motion
        damping: 12,     // More damping for less bounce
        duration: 0.8,
        ease: "easeOut"  // Smooth ease-out effect
      }
    }
  };

  // Animation variants for skill items
  const skillVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  // Helper function to chunk the skills array into groups of 4
  const chunkSkills = (skills: { name: string; logo: string }[], chunkSize = 4) => {
    const chunks = [];
    for (let i = 0; i < skills.length; i += chunkSize) {
      chunks.push(skills.slice(i, i + chunkSize));
    }
    return chunks;
  };

  return (
    <div id="skills" className="">
      {/* Skills section */}
      <div className="p-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          CODING MY WAY THROUGH: 
          <span className="text-contrast">
            <Typewrite examples={["SKILLS","SKILLS","SKILLS"]}/>
          </span>
        </h1>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 "
          initial="hidden"
          whileInView="visible"
          viewport={{  amount: 0.1 }}
          variants={containerVariants}
        >
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              variants={cardVariants}
              className="h-full" // Ensure full height
            >
              <Card className="rounded-2xl h-full shadow-lg hover:shadow-xl transition-shadow duration-300"> {/* Added shadow effects */}
                <CardContent className="p-4 h-full">
                  <h2 className="text-xl font-bold mb-2 border-b-2 border-border pb-1">
                    {category.category}
                  </h2>
                  <div className="grid grid-cols-2  gap-4 mt-4">
                    {chunkSkills(category.skills).map((chunk, chunkIndex) => (
                      <div key={chunkIndex} className="space-y-4n">
                        {chunk.map((skill) => (
                          <motion.div
                            key={skill.name}
                            className="flex items-center gap-2"
                            variants={skillVariants}
                            initial="initial"
                            whileHover="hover"
                          >
                            <img src={skill.logo} alt={skill.name} className="w-8 h-8" />
                            <span className="text-lg">{skill.name}</span>
                          </motion.div>
                        ))}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* marquee section */}
      <div className='mt-8'>
        <Marquee
          items={["Mern stack developer", "C++ Programmer", "Web3 Enthusiast", "AI/ML Developer"]}
          speed={15}
          pauseOnHover={true}
        />
      </div>
    </div>
  );
};

export default SkillsSection;