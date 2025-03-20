"use client"

import React from 'react';
import { motion } from 'framer-motion';

import Typewrite from '../helper/Typewrite'
import { achievements } from '../data/arrayData.js';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image'


const Achievements = () => {
  return (
    <div className="p-8 mt-10  border-black">
     <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            <span className="text-contrast">
              <Typewrite
              examples={["ACHIEVEMENTS:","ACHIEVEMENTS","ACHIEVEMENTS"]}/></span>
              HACKS AND CROWNS</h1>
      <div className="relative">
        <div className="absolute left-4 top-0 h-full border-l-4 border-black"></div>
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="flex items-start mb-8 ml-8 bg-white border-4 border-black rounded-2xl p-4 shadow-[6px_6px_0px_#000]"
          >
            <Image src="/crown.png" alt="crown" className="w-6 h-6 mr-4"
             width={300} 
             height={350}  />
            <div className="flex-1">
              <h3 className="text-xl font-bold text-black">{achievement.year} - {achievement.title}</h3>
              <p className="text-black mt-1">{achievement.description}</p>
            </div>
            {achievement.link && (
              <a 
                href={achievement.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="ml-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label={`Link to ${achievement.title}`}
              >
                <ExternalLink
                className="w-5 h-5 text-black" />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;