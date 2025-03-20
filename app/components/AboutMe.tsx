"use client"

import React from "react";
import { socialMediaIcons } from '../data/arrayData.js';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Typewrite from '../helper/Typewrite'
import Image from 'next/image'

const AboutMe = () => {
  // Animation variants for the container of icons
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Controls the delay between each child animation
        delayChildren: 0.3,   // Delay before starting the staggered animations
      }
    }
  };

  // Animation variants for each icon
  const iconVariants = {
    hidden: { 
      y: -100,
      opacity: 0 
    },
    visible: { 
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div id="aboutme" className="flex flex-col items-center justify-center min-h-screen mt-12">
      {/* Main Container */}
      <div className="flex flex-col lg:flex-row w-full bg-bg px-4 sm:px-6 lg:px-12 py-12">
        {/* Left Section - Social Media Icons */}
        <div className="flex flex-row lg:flex-col items-center justify-center mb-8 lg:mb-0">
          <motion.div 
            className="flex lg:flex-col flex-row space-x-4 lg:space-x-0 lg:space-y-4 mt-4 lg:mt-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {socialMediaIcons.map((item) => (
              <motion.div
                key={item.id}
                variants={iconVariants}
              >
                <Button
                  className="rounded-full"
                  variant="reverse"
                  size="icon"
                  onClick={() => {if (typeof window !== 'undefined')window.open(item.link, '_blank')}}
                >
                  {item.icon}
                </Button>
              </motion.div>
            ))}
          </motion.div>
          <div className="hidden lg:block w-[2px] h-full bg-black mt-4" />
        </div>

        {/* Middle Section - Photo Component Placeholder */}
        <div className="flex-1 flex items-center justify-center mb-8 lg:mb-0 lg:mr-8">
          <ProfileComponent />
        </div>

        {/* Right Section - Text Content */}
        <div className="flex-1 space-y-6 text-center lg:text-left px-4 sm:px-6 lg:px-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold">HEY, I'M
            <br />
            <Typewrite
              examples={[
                "SHREYA\nGUPTA",
                "FULL STACK DEVELOPER",
                "BLOCKCHAIN ENTHUSIAST"
              ]}
            />
          </h1>
          <p className="text-base sm:text-lg md:text-xl">
            I'm an enthusiastic Developer specializing in Mern Stack Web Development. I love solving real-world problems building efficient and AI-driven scalable solutions.
          </p>
          <div className="space-x-4 flex justify-center md:justify-start">
            {/* Contact Me Button */}
            <Button
              variant="default"
              size="default"
              className="w-32 h-10 text-sm sm:w-40 sm:h-12 sm:text-base"
              onClick={() =>{
                if (typeof window !== 'undefined')window.open(
                  "https://mail.google.com/mail/?view=cm&fs=1&to=shregupta89@gmail.com",
                  "_blank"
                )}
              }
            >
              Contact Me
            </Button>

            {/* Resume Button */}
            <Button
              variant="neutral"
              size="default"
              className="w-32 h-10 text-sm sm:w-40 sm:h-12 sm:text-base"
              onClick={() =>{
                
                if (typeof window !== 'undefined')window.open(
                  "https://drive.google.com/file/d/1awLOQULAdCrWsKJXt6A4OqtwL2AlsNje/view?usp=sharing",
                  "_blank"
                )}
              }
            >
              Resume
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Section - About Me Description */}
      <div className="text-left border-t-2 border-b-2 border-border w-full bg-white">
        <div className='px-4 sm:px-6 lg:px-12 py-4'>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">WHAT 
            <span className="text-contrast">
              <Typewrite
                examples={["ABOUT ME ?","ABOUT ME ?","ABOUT ME ?"]}
              />
            </span>
          </h2>
          <p className="text-base sm:text-lg">
          I am a pre-final year student at Indira Gandhi Delhi Technical University for Women, passionate about exploring Web3 and Machine Learning. I actively participate in hackathons to hone my skills and expand my knowledge through hands-on projects. Continuously striving to improve, I am dedicated to personal and professional growth.
          </p>
        </div>
      </div>
    </div>
  );
};



const ProfileComponent = () => {
  return (
    <Card className="relative w-72 sm:w-80 h-[350px] sm:h-[420px] bg-main shadow-lg">
      <CardContent>
        {/* Top Browser Dots */}
        <div className="absolute top-2 left-2 flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>

        {/* Image Container */}
        <div className="relative mt-10 pb-10 w-full h-[300px] sm:h-[350px] bg-bg rounded-lg flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
            className="absolute z-10 w-full overflow-hidden"
            style={{ height: 'calc(100% + 100px)', top: '-100px' }}
          >
            <Image
              src="./Subject.png"
              alt="Profile"
              className="object-contain rounded-lg shadow-md w-full h-full"
            />
          </motion.div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AboutMe;