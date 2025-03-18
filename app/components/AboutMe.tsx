"use client"

import React from 'react';
import { socialMediaIcons } from '../data/socialMediaIcons.js';
import { Button } from '@/components/ui/button'
const AboutMe = () => {


  return (
    <div id ="aboutme"className="flex flex-col items-center justify-center min-h-screen pt-20">
      {/* Main Container */}
      <div className="flex w-full bg-bg px-12 py-12 ">
        {/* Left Section - Social Media Icons */}
        <div className="flex flex-col items-center ">
          <div className=" flex flex-col space-y-4 p-0 mt-12">
          {socialMediaIcons.map((item) => (
              <Button
                key={item.id}
                className=" rounded-full"
                variant="reverse"
                size="icon"
                onClick={() => window.open(item.link, '_blank')}
              >
                {item.icon}
              </Button>
            ))}
          </div>
          <div className="w-[2px] h-full bg-black mt-4" />
        </div>

        {/* Middle Section - Photo Component Placeholder */}
        <div className="flex-1 flex items-center justify-center mr-8">
          <ProfileComponent/>
        </div>

        {/* Right Section - Text Content */}
        <div className="flex-1 space-y-6">
          <h1 className="text-8xl font-bold">HEY, I'M<br/> SHREYA GUPTA</h1>
          <p>I'm an enthusiastic Developer specializing in Mern Stack Web Development.
        I love solving real-world problems building efficient and AI-driven scalable solutions.</p>
          <div className="space-x-4">
            <Button variant='default'>Contact Me</Button>
            <Button variant='neutral'>Resume</Button>
          </div>
        </div>
      </div>

      {/* Bottom Section - About Me Description */}
      <div className=" text-left w-full bg-main">
        <div className='px-12 py-12'>
          <h2 className="text-4xl font-bold">WHAT "ABOUT ME" ?</h2>
          <p>
            A pre-final year student at Indira Gandhi Delhi Technical University for Women.
            I love to participate in hackathons.
          </p>

        </div>
     
      </div>
    </div>
  );
};

export default AboutMe;

const ProfileComponent = () => {
  return (
    <div className="relative mx-auto">
      {/* Outer frame with tilt */}
      <div className="relative border-4 border-black p-4 transform rotate-1">
        {/* Inner frame with tilt in opposite direction */}
        <div className="border-4 border-black p-1 transform -rotate-2">
          {/* Light gray background with profile content */}
          <div className="bg-gray-200 w-80 flex items-center justify-center">
            {/* Profile content - replace with actual image */}
            <img src='./profilepic.png' alt='Profile picture' className='w-full h-full object-cover' />
          </div>
        </div>
      </div>

      {/* Light bulb decoration */}
      <div className="absolute -top-6 -left-6 w-16 h-16">
        <div className="w-full h-full bg-yellow-300 border-border rounded-full shadow-lg flex items-center justify-center transform -rotate-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8 text-yellow-800">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
      </div>

      {/* Hand-drawn style star */}
      <div className="absolute -bottom-4 -right-4 w-12 h-12">
        <svg viewBox="0 0 80 80" fill="#e07a5f" className="w-full h-full transform rotate-12">
          <path d="M40 5c3 12 5 18 19 20-14 6-19 9-14 23-5-12-9-13-23-11 14-7 15-11 18-32z" />
          <path d="M25 25l30 30M60 20L30 55M15 45l50-10M45 65L25 30" 
            stroke="#d35f47" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
          />
        </svg>
      </div>
    </div>
  );
};
