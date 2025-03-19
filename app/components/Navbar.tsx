"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import {motion, useScroll} from 'framer-motion'

const Navbar = () => {
  const tabs = ['AboutMe', 'Skills', 'Projects', 'Experience', 'ContactMe'];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          history.pushState(null, ' ', href);
          setIsMenuOpen(false); // Close menu after click
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', handleSmoothScroll));
    return () => {
      links.forEach(link => link.removeEventListener('click', handleSmoothScroll));
    };
  }, []);
  const {scrollYProgress}=useScroll()
  return (
    <div>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className='fixed top-0 left-0 h-0.5 w-full bg-black origin-left z-[60]'
      />

      <div className='border-b-4 border-border w-full fixed top-0 h-20 bg-main px-6 shadow-sm z-50'>
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
        <div className='font-bold text-xl'>Shreya Gupta</div>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center space-x-8'>
          {tabs.map((tab) => (
            <Link
              key={tab}
              href={`#${tab.toLowerCase()}`}
              className='relative text-text font-heading transition-all duration-300 hover:text-accent after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full'
            >
              {tab}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6 text-black" /> : <Menu className="h-6 w-6 text-black" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-In Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-main flex flex-col items-start px-6 py-4 space-y-4 border-t border-border">
          {tabs.map((tab) => (
            <Link
              key={tab}
              href={`#${tab.toLowerCase()}`}
              className='text-lg text-text font-medium w-full hover:text-accent'
              onClick={() => setIsMenuOpen(false)}
            >
              {tab}
            </Link>
          ))}
        </div>
      )}
    </div>

    </div>
    
  );
};

export default Navbar;
