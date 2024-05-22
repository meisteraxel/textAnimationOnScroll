"use client";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Word from "./Word";
import ImageWord from "./ImageWord";

const Paragraph = () => {
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
      <p className="flex flex-wrap items-center">
        {words.map((word, index) => {
          if (typeof word === "object" && word.type === "image") {
            return (
              <ImageWord
                key={index}
                word={word}
                index={index}
                scrollYProgress={scrollYProgress}
                totalWords={words.length}
              />
            );
          }

          return (
            <Word
              key={index}
              word={word}
              index={index}
              scrollYProgress={scrollYProgress}
              totalWords={words.length}
            />
          );
        })}
      </p>
    </div>
  );
};

export default Paragraph;
