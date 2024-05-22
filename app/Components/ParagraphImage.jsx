"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ParagraphImage = () => {
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
    /*{
      type: "image",
      src: "/girl.jpg",
      alt: "anime-girl",
      style: { height: "80px" },
    },*/
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
    /*{
      type: "image",
      src: "/Circle.gif",
      alt: "Circle",
      style: { height: "100px" },
    },*/
    "and",
    "bringing",
    "visuals",
    "to",
    "life",
    "from",
    "development",
    "to",
    "launch.",
    /*{
      type: "image",
      src: "/GreenArrow.gif",
      alt: "green-arrow",
      style: { height: "100px" },
    },*/
  ];

  return (
    <div
      ref={textRef}
      className="text-5xl max-w-5xl p-10 mx-auto relative flex items-center flex-wrap leading-[1.3] font-semibold"
    >
      {words.map((word, index) => {
        /*if (typeof word === "object" && word.type === "image") {
          const wordOpacity = useTransform(
            scrollYProgress,
            [index / words.length, (index + 1) / words.length],
            [0, 1]
          );
          const maxWidth = useTransform(
            scrollYProgress,
            [index / words.length, (index + 1) / words.length],
            ["0px", "100%"]
          );

          return (
            <motion.div
              key={index}
              className="overflow-hidden inline-block mt-4 mr-3 transition-all duration-500"
              style={{ opacity: wordOpacity, maxWidth }}
            >
              <motion.img
                src={word.src}
                alt={word.alt}
                style={word.style}
                className="rounded-full"
              />
            </motion.div>
          );
        }*/

        const wordOpacity = useTransform(
          scrollYProgress,
          [index / words.length, (index + 1) / words.length],
          [0.1, 1]
        );

        return (
          <motion.span
            key={index}
            className="mr-3 mt-3 transition-all duration-500"
            style={{ opacity: wordOpacity }}
          >
            {word}{" "}
          </motion.span>
        );
      })}
    </div>
  );
};

export default ParagraphImage;
