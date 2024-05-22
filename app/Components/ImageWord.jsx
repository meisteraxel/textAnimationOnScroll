import { motion, useTransform } from "framer-motion";

const ImageWord = ({ word, index, scrollYProgress, totalWords }) => {
  const wordOpacity = useTransform(
    scrollYProgress,
    [index / totalWords, (index + 1) / totalWords],
    [0, 1]
  );
  const maxWidth = useTransform(
    scrollYProgress,
    [index / totalWords, (index + 1) / totalWords],
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
};

export default ImageWord;
