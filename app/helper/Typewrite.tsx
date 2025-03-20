

import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';

const Typewrite = (props: { examples: string[] }) => {
  const [index, setIndex] = useState(0);

  const LETTER_DELAY = 0.1;
  const BOX_FADE_DURATION = 0.125;
  const FADE_DELAY = 4;
  const MAIN_FADE_DURATION = 0.25;
  const SWAP_DELAY_IN_MS = 4500;

  const { examples } = props;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => (prev + 1) % examples.length);
    }, SWAP_DELAY_IN_MS);

    return () => clearInterval(intervalId);
  }, []);

  const letters = examples[index].split("");

  return (
    <motion.div className="mb-2.5 leading-tight ">
      {letters.map((char, i) => {

        if (char === "\n") {
          return <br key={`br-${i}`} />;
        }

        if (char === " ") {
          return (
            <span key={`space-${i}`}>&nbsp;</span>
          );
        }

        return (
          <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{
              delay: FADE_DELAY,
              duration: MAIN_FADE_DURATION,
              ease: "easeInOut"
            }}
            className="relative inline-block"
            key={`char-${i}-${index}`}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: i * LETTER_DELAY,
                duration: 0
              }}
            >
              {char}
            </motion.span>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                times: [0, 0.1, 1],
                delay: i * LETTER_DELAY,
                duration: BOX_FADE_DURATION,
                ease: "easeInOut"
              }}
              className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-primary"
            />
          </motion.span>
        );
      })}
    </motion.div>
  );
};

export default Typewrite;
