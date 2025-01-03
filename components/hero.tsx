import { AnimatePresence, motion } from "framer-motion";
import textContents from "@/components/textContents";

function Hero({ index, color }: { index: number; color: string }) {
  return (
    <div
      className={`flex relative flex-col justify-center min-h-[94dvh] overflow-x-hidden transition-all ${color}`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={textContents[index].id}
          className={`flex flex-col justify-center ${textContents[index].color} overflow-hidden`}
          initial={{ opacity: 0, x: 500 * (index % 2 === 0 ? -1 : 1) }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 500 * (index % 2 === 0 ? -1 : 1) }}
          transition={{ duration: 0.3 }}
        >
          <div
            className={`flex flex-col items-center justify-center w-full h-[93vh] relative`}
          >
            {textContents[index].content}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Hero;
