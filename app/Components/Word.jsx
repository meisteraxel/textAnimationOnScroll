import { motion, useTransform } from "framer-motion";

const Word = ({ word, index, scrollYProgress, totalWords }) => {
  const wordOpacity = useTransform(
    scrollYProgress,
    [index / totalWords, (index + 1) / totalWords],
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
};

export default Word;
