"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const words = [
  "We",
  "help",
  "companies",
  "identify",
  "product-market",
  "fit",
  "through",
  "user",
  "research",
  "and",
  "iterative",
  "testing.",
  {
    type: "image",
    src: "/girl.jpg",
    alt: "anime-girl",
    style: { height: "80px" },
  },
  "By",
  "collaborating",
  "with",
  "internal",
  "stakeholders,",
  "we",
  "solve",
  "product",
  "and",
  "UX",
  "challenges",
  "by",
  "crafting",
  "seamless,",
  "user-centric",
  "solutions",
  {
    type: "image",
    src: "/Circle.gif",
    alt: "Circle",
    style: { height: "100px" },
  },
  "and",
  "bringing",
  "visuals",
  "to",
  "life",
  "from",
  "development",
  "to",
  "launch.",
  {
    type: "image",
    src: "/GreenArrow.gif",
    alt: "green-arrow",
    style: { height: "100px" },
  },
];

const useWordOpacity = (scrollYProgress, index, totalWords) => {
  return useTransform(
    scrollYProgress,
    [index / totalWords, (index + 1) / totalWords],
    [0.1, 1]
  );
};

const useImageOpacity = (scrollYProgress, index, totalWords) => {
  return useTransform(
    scrollYProgress,
    [index / totalWords, (index + 1) / totalWords],
    [0, 1]
  );
};

const useImageWidth = (scrollYProgress, index, totalWords) => {
  return useTransform(
    scrollYProgress,
    [index / totalWords, (index + 1) / totalWords],
    ["0%", "100%"]
  );
};

const TextOne = () => {
  const textRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 0.3", "end 0.7"],
  });

  // Calculate Opacity and Width for all words
  const opacities = [];
  const widths = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const wordOpacity =
      typeof word === "string"
        ? useWordOpacity(scrollYProgress, i, words.length)
        : null;

    const imageOpacity =
      typeof word === "object" && word.type === "image"
        ? useImageOpacity(scrollYProgress, i, words.length)
        : null;

    const imageWidth =
      typeof word === "object" && word.type === "image"
        ? useImageWidth(scrollYProgress, i, words.length)
        : null;

    opacities.push(wordOpacity);
    widths.push(imageWidth);
  }

  return (
    <div
      ref={textRef}
      className="text-5xl max-w-5xl p-10 mx-auto relative flex items-center flex-wrap leading-[1.3] font-semibold"
    >
      {words.map((word, index) => {
        if (typeof word === "string") {
          return (
            <motion.span
              key={index}
              className="mr-3 mt-3 transition-all duration-500"
              style={{ opacity: opacities[index] }}
            >
              {word}
            </motion.span>
          );
        } else {
          return (
            <motion.img
              key={index}
              className="mr-3 mt-3 transition-all duration-500 rounded-full"
              src={word.src}
              alt={word.alt}
              style={{
                ...word.style,
                opacity: opacities[index],
                maxWidth: widths[index],
              }}
            />
          );
        }
      })}
    </div>
  );
};

export default TextOne;
