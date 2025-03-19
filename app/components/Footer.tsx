"use client";
import React, { useState } from "react";
import { Button } from '@/components/ui/button';
import { socialMediaIcons } from '../data/arrayData.js';
import { ChevronUp } from "lucide-react";

const Footer: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <footer className="w-full py-6 flex flex-row md:flex-row md:justify-between md:items-center px-6 border-t-2 mt-16 relative">
      <span className="text-gray-600 mb-4 md:mb-0 text-center md:text-left">
        © 2025 Shreya Gupta. All rights reserved.
      </span>

      {/* Desktop View */}
      <div className="hidden md:flex space-x-4">
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

      {/* Mobile View */}
      <div className="md:hidden flex flex-col items-center relative">
        <Button
          variant="reverse"
          className="rounded-full mb-2"
          size="icon"
          onClick={() => setShowMenu(!showMenu)}
        >
          <ChevronUp className={`transition-transform duration-300 ${showMenu ? "rotate-180" : "rotate-0"}`} />
        </Button>

        <div
          className={`absolute bottom-14  rounded-xl  p-3 flex flex-col space-y-3 transition-all duration-300 ${
            showMenu ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4 pointer-events-none"
          }`}
        >
          {socialMediaIcons.map((item) => (
            <Button
              key={item.id}
              className="rounded-full w-10 h-10"
              variant="reverse"
              size="icon"
              onClick={() => window.open(item.link, '_blank')}
            >
              {item.icon}
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
