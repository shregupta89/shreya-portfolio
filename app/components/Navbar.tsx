// import React from 'react'
// import Link from 'next/link'
// const Navbar = () => {
//     const tabs=['AboutMe','Skills','Projects','Experience', 'ContactMe' ]
//   return (
//     <div className='border-b-4 border-border w-full fixed top-0 h-20 bg-main flex justify-between items-center px-6 shadow-sm'>
//        <div className='font-bold text-xl'>Shreya Gupta</div>
//        <div className='flex items-center space-x-8'>
//             {tabs.map((tab)=>(
//             <Link 
//             href={`#${tab.toLowerCase()}`} 
//             className='relative text-text font-heading transition-all duration-300 
//                        hover:text-accent after:content-[""] after:absolute after:left-0 after:-bottom-1 
//                        after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 
//                        hover:after:w-full'
//             key={tab}>  {tab}
//             </Link>
//             ))}
           
//         </div>
      
//     </div>
//   )
// }

// export default Navbar
"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const tabs = ['AboutMe', 'Skills', 'Projects', 'Experience', 'ContactMe'];

  useEffect(() => {
    // Add smooth scrolling behavior for anchor links
    const handleSmoothScroll = (e) => {
      const href = e.target.getAttribute('href');
      
      // Only process anchor links starting with #
      if (href && href.startsWith('#')) {
        e.preventDefault();
        
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          // Scroll smoothly to the element
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Update URL without refreshing page
          history.pushState(null, '', href);
        }
      }
    };

    // Add event listeners to all links with # in href
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    // Clean up event listeners when component unmounts
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <div className='border-b-4 border-border w-full fixed top-0 h-20 bg-main flex justify-between items-center px-6 shadow-sm z-50'>
      <div className='font-bold text-xl'>Shreya Gupta</div>
      <div className='flex items-center space-x-8'>
        {tabs.map((tab) => (
          <Link 
            href={`#${tab.toLowerCase()}`}
            className='relative text-text font-heading transition-all duration-300 
                      hover:text-accent after:content-[""] after:absolute after:left-0 after:-bottom-1 
                      after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 
                      hover:after:w-full'
            key={tab}
          >
            {tab}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
