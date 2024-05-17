"use client";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

export const Paragraph = ({ value }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.5", "start start"],
  });

  const words = value.split(" ");

  return (
    <p
      className="text-5xl max-w-5xl p-10 mx-auto relative flex flex-wrap"
      ref={element}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

const Word = ({ children, range, progress }) => {
  const characters = children.split("");
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className="mr-3 mt-3">
      {characters.map((character, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return (
          <Character key={i} range={[start, end]} progress={progress}>
            {character}
          </Character>
        );
      })}
    </span>
  );
};

const Character = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <motion.span className="transition-opacity" style={{ opacity }}>
      {children}
    </motion.span>
  );
};
