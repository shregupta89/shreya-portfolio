import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';

const LETTER_DELAY = 0.1; // Increased delay between letters for better visibility
const BOX_FADE_DURATION = 0.125;

const FADE_DELAY = 5;
const MAIN_FADE_DURATION = 0.25;

const SWAP_DELAY_IN_MS = 5500;

const Typewrite = ({ examples }: { examples: string[] }) => {
  const [exampleIndex, setExampleIndex] = useState(0);
  const [visibleLetters, setVisibleLetters] = useState(0);
  const [currentExample, setCurrentExample] = useState(examples[0]);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    // Reset visible letters when example changes
    setVisibleLetters(0);
    setIsTyping(true);
    
    // Get total length of current example (including newline characters)
    const totalLength = currentExample.length;
    
    // Typing effect - incrementally reveal letters
    const typingInterval = setInterval(() => {
      setVisibleLetters(prev => {
        if (prev < totalLength) {
          return prev + 1;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
          return prev;
        }
      });
    }, LETTER_DELAY * 1000);
    
    // Clear typing interval
    return () => clearInterval(typingInterval);
  }, [currentExample]);
  
  // Handle example change
  useEffect(() => {
    if (!isTyping) {
      const exampleTimeout = setTimeout(() => {
        const nextIndex = (exampleIndex + 1) % examples.length;
        setExampleIndex(nextIndex);
        setCurrentExample(examples[nextIndex]);
      }, FADE_DELAY * 1000);
      
      return () => clearTimeout(exampleTimeout);
    }
  }, [isTyping, exampleIndex, examples]);

  return (
    <p className="mb-2.5">
      {currentExample.split("\n").map((line, lineIndex) => (
        <div key={`line-${lineIndex}-${exampleIndex}`}>
          {line.split("").map((letter, letterIndex) => {
            // Calculate overall index in the whole text
            const overallIndex = currentExample.split("\n")
              .slice(0, lineIndex)
              .join("").length + letterIndex;
            
            // Only show letters up to the current visibleLetters count
            const isVisible = overallIndex < visibleLetters;
            
            return (
              <motion.span
                key={`letter-${exampleIndex}-${lineIndex}-${letterIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.1 }}
                className="relative inline-block"
                style={{ 
                  // Add whitespace preservation to maintain spaces
                  whiteSpace: 'pre' 
                }}
              >
                {letter}
                {isVisible && (
                  <motion.span
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{
                      duration: BOX_FADE_DURATION,
                      ease: "easeInOut",
                    }}
                    className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950"
                  />
                )}
              </motion.span>
            );
          })}
        </div>
      ))}
      
      {/* Blinking cursor */}
      {/* {isTyping && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="ml-1 inline-block w-[0.1em] h-[1em] bg-black"
        />
      )} */}
    </p>
  );
};
export default  Typewrite;