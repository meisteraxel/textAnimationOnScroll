"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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

const TextTwo = () => {
  const textRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 0.3", "end 0.7"],
  });

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

  return (
    <div
      ref={textRef}
      className="text-5xl max-w-5xl p-10 mx-auto relative flex items-center flex-wrap leading-[1.3] font-semibold"
    >
      {words.map((word, index) => {
        const wordOpacity =
          typeof word === "string"
            ? useWordOpacity(scrollYProgress, index, words.length)
            : null;

        const imageOpacity =
          typeof word === "object" && word.type === "image"
            ? useImageOpacity(scrollYProgress, index, words.length)
            : null;

        const imageWidth =
          typeof word === "object" && word.type === "image"
            ? useImageWidth(scrollYProgress, index, words.length)
            : null;

        if (typeof word === "string") {
          return (
            <motion.span
              key={index}
              className="mr-3 mt-3 transition-all duration-500"
              style={{ opacity: wordOpacity }}
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
                opacity: imageOpacity,
                maxWidth: imageWidth,
              }}
            />
          );
        }
      })}
    </div>
  );
};

export default TextTwo;
