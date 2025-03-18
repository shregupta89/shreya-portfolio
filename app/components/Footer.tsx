"use client"
import React from "react";
import { Button } from '@/components/ui/button'
import { socialMediaIcons } from '../data/socialMediaIcons.js';
const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 flex justify-between items-center px-8 border-t-2 mt-16 ">
      <span className="text-gray-600">© 2025 Shreya Gupta. All rights reserved.</span>
      <div className="flex space-x-6">
      
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
    </footer>
  );
};

export default Footer;
