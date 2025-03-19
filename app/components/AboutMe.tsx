"use client"

import React from "react";
import { socialMediaIcons } from '../data/socialMediaIcons.js';
import { Button } from '@/components/ui/button';
import { Card ,CardContent} from '@/components/ui/card';
import { motion } from 'framer-motion';
import Typewrite from '../helper/Typewrite'
const AboutMe = () => {
  return (
    <div id="aboutme" className="flex flex-col items-center justify-center min-h-screen mt-8">
      {/* Main Container */}
      <div className="flex flex-col lg:flex-row w-full bg-bg px-4 sm:px-6 lg:px-12 py-12">
        {/* Left Section - Social Media Icons */}
        <div className="flex flex-row lg:flex-col items-center justify-center mb-8 lg:mb-0">
          <div className="flex lg:flex-col flex-row space-x-4 lg:space-x-0 lg:space-y-4 mt-4 lg:mt-12">
            {socialMediaIcons.map((item) => (
              <Button
                key={item.id}
                className="rounded-full"
                variant="reverse"
                size="icon"
                onClick={() => window.open(item.link, '_blank')}
              >
                {item.icon}
              </Button>
            ))}
          </div>
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
          "MERN STACK DEVELOPER",
          "BLOCKCHAIN DEVELOPER"
         
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
    onClick={() => (window.location.href = "mailto:your-shregupta89@gmail.com")}
  >
    Contact Me
  </Button>

  {/* Resume Button */}
  <Button
    variant="neutral"
    size="default"
    className="w-32 h-10 text-sm sm:w-40 sm:h-12 sm:text-base"
    onClick={() =>
      window.open(
        "https://drive.google.com/file/d/1awLOQULAdCrWsKJXt6A4OqtwL2AlsNje/view?usp=sharing",
        "_blank"
      )
    }
  >
    Resume
  </Button>
</div>
        </div>
      </div>

      {/* Bottom Section - About Me Description */}
      <div className="text-left border-t-2 border-b-2 border-border w-full bg-white">
        <div className='px-4 sm:px-6 lg:px-12 py-12'>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">WHAT 
            <span className="text-contrast">
              <Typewrite
              examples={["ABOUT ME ?","ABOUT ME ?","ABOUT ME ?"]}/></span></h2>
          <p className="text-base sm:text-lg">
            A pre-final year student at Indira Gandhi Delhi Technical University for Women. I love to participate in hackathons.
          </p>
        </div>
      </div>
    </div>
  );
};

import Image from 'next/image';

const ProfileComponent = () => {
  return (
   
          <Card className="relative w-72 sm:w-80 h-[350px] sm:h-[400px] bg-main shadow-lg">
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
            <img
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









// const ProfileComponent = () => {
//   return (
//     <div className="relative mx-auto">
//       {/* Outer frame with tilt */}
//       <div className="relative border-4 border-black p-4 transform rotate-1">
//         {/* Inner frame with tilt in opposite direction */}
//         <div className="border-4 border-black p-1 transform -rotate-2">
//           {/* Light gray background with profile content */}
//           <div className="bg-gray-200 w-80 flex items-center justify-center">
//             {/* Profile content - replace with actual image */}
//             <img src='./Subject.png' alt='Profile picture' className='w-full h-full object-cover' />
//           </div>
//         </div>
//       </div>

//       {/* Light bulb decoration */}
//       <div className="absolute -top-6 -left-6 w-16 h-16">
//         <div className="w-full h-full bg-yellow-300 border-border rounded-full shadow-lg flex items-center justify-center transform -rotate-6">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8 text-yellow-800">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//           </svg>
//         </div>
//       </div>

//       {/* Hand-drawn style star */}
//       <div className="absolute -bottom-4 -right-4 w-12 h-12">
//         <svg viewBox="0 0 80 80" fill="#e07a5f" className="w-full h-full transform rotate-12">
//           <path d="M40 5c3 12 5 18 19 20-14 6-19 9-14 23-5-12-9-13-23-11 14-7 15-11 18-32z" />
//           <path d="M25 25l30 30M60 20L30 55M15 45l50-10M45 65L25 30" 
//             stroke="#d35f47" 
//             strokeWidth="1.5" 
//             strokeLinecap="round" 
//           />
//         </svg>
//       </div>
//     </div>
//   );
// };
