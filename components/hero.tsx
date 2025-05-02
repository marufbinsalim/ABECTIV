import { AnimatePresence, motion } from "framer-motion";
import textContents from "@/components/textContents";
import { COLORS } from "./colors";
import Link from "next/link";

function Hero({
  index,
  color,
  setEmailModalVisible,
}: {
  index: number;
  color: string;
  setEmailModalVisible: (visible: boolean) => void;
}) {
  return (
    <div
      id="hero"
      className={`flex relative flex-col justify-center min-h-[94dvh] overflow-x-hidden transition-all ${color}`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={textContents[index].id}
          className={`flex flex-col justify-center ${textContents[index].color} overflow-hidden`}
          initial={{ opacity: 0, x: 500 * (index % 2 !== 0 ? -1 : 1) }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 500 * (index % 2 !== 0 ? -1 : 1) }}
          transition={{ duration: 0.1 }}
        >
          <div
            className={`flex flex-col items-center justify-center w-full h-[93vh] relative`}
          >
            {textContents[index].content ? (
              textContents[index].content
            ) : (
              <div className="flex flex-col h-[100%] text-white text-center md:text-left w-full px-6 lg:px-[20vw] justify-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Neztrácejte čas!
                </h1>
                <h2 className="text-4xl md:text-6xl font-bold mb-14">
                  Objevte sílu{" "}
                  <span className="text-[#00C6DE]">automatizace</span> a
                  zvyšujte produktivitu.
                </h2>
                <div className="flex gap-4 flex-col md:flex-row mt-8 md:mt-0">
                  <button
                    onClick={() => {
                      if (color === COLORS.black) setEmailModalVisible(true);
                    }}
                    className="px-6 py-3 bg-[#A1FAFF] text-[#002330] font-semibold rounded-full hover:opacity-80 transition w-max m-auto md:m-0"
                  >
                    Chci automatizovat
                  </button>
                  <Link
                    href={"https://calendly.com/abectiv/konzultace"}
                    target="_blank"
                  >
                    <button className="w-max px-6 py-3 border border-[#CDFEFF] text-[#CDFEFF]  font-semibold rounded-full hover:bg-cyan-400 hover:text-black transition">
                      Konzultace zdarma
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Hero;
