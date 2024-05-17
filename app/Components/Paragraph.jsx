"use client";
import { useRef } from "react";
import { useScroll, motion } from "framer-motion";

const Paragraph = ({ value }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  return (
    <motion.p
      className="text-5xl max-w-7xl p-10 mx-auto leading-[1.5] relative"
      ref={element}
      style={{ opacity: scrollYProgress }}
    >
      {value}
    </motion.p>
  );
};

export default Paragraph;
