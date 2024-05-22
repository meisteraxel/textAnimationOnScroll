"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const Paragraph = () => {
  const textRef = useRef(null);
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

  const { scrollYProgress } = useScroll({ target: textRef });

  return (
    <div
      ref={textRef}
      className="text-5xl max-w-5xl p-10 mx-auto relative flex items-center flex-wrap leading-[1.3] font-semibold"
    >
      {words.map((word, index) => {
        const opacity = useTransform(
          scrollYProgress,
          [index / words.length, (index + 1) / words.length],
          [typeof word === "string" ? 0.1 : 0, 1]
        );

        if (typeof word === "string") {
          return (
            <motion.span
              key={index}
              className="mr-3 mt-3 transition-opacity"
              style={{ opacity }}
            >
              {word}
            </motion.span>
          );
        } else {
          const maxWidth = useTransform(
            scrollYProgress,
            [index / words.length, (index + 1) / words.length],
            ["0%", "100%"]
          );
          return (
            <motion.img
              key={index}
              className="mr-3 mt-3 transition-all duration-500 rounded-full"
              src={word.src}
              alt={word.alt}
              style={{
                ...word.style,
                opacity,
                maxWidth,
              }}
            />
          );
        }
      })}
    </div>
  );
};

export default Paragraph;
