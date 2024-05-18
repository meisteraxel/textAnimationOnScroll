"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Paragraph = () => {
  const textRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["10% 90%", "60% 30%"],
  });

  const words =
    "We help companies identify product-market fit through user research and iterative testing. By collaborating with internal stakeholders, we solve product and UX challenges by crafting seamless, user-centric solutions and bringing visuals to life from development to launch".split(
      " "
    );

  return (
    <>
      <div
        ref={textRef}
        className="text-5xl max-w-5xl p-10 mx-auto relative flex flex-wrap"
      >
        {words.map((word, index) => {
          const wordOpacity = useTransform(
            scrollYProgress,
            [index / words.length, (index + 1) / words.length],
            [0.1, 1]
          );

          return (
            <motion.span
              key={index}
              className="mr-3 mt-3 transition-opacity"
              style={{ opacity: wordOpacity }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </div>
    </>
  );
};

export default Paragraph;
