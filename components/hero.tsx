import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const titleText = "Neztrácejte čas!";

function Hero({
  setEmailModalVisible,
}: {
  setEmailModalVisible: (visible: boolean) => void;
}) {
  const [animationStep, setAnimationStep] = useState(0);
  const [displayValues, setDisplayValues] = useState(["00", "00", "00"]);
  // const [displayTitle, setDisplayTitle] = useState(titleText);
  // const [displaySubtitle, setDisplaySubtitle] = useState(subtitleText);

  // Shuffling effect for numbers
  useEffect(() => {
    if (animationStep !== 0) return;

    const shuffleInterval = setInterval(() => {
      setDisplayValues([
        Math.floor(Math.random() * 100)
          .toString()
          .padStart(2, "0"),
        Math.floor(Math.random() * 100)
          .toString()
          .padStart(2, "0"),
        Math.floor(Math.random() * 100)
          .toString()
          .padStart(2, "0"),
      ]);
    }, 100);

    setTimeout(() => {
      clearInterval(shuffleInterval);
      setDisplayValues(["60", "44", "63"]);
      setAnimationStep(1); // Move to next step
    }, 3000);

    return () => clearInterval(shuffleInterval);
  }, [animationStep]);

  // Move stats to bottom
  useEffect(() => {
    if (animationStep === 1) {
      const timer = setTimeout(() => setAnimationStep(2), 1000);
      return () => clearTimeout(timer);
    }
  }, [animationStep]);

  return (
    <div
      id="hero"
      className="flex relative flex-col justify-center min-h-[94dvh] overflow-x-hidden bg-black pb-[5vh] overflow-hidden"
    >
      <div className="flex flex-col items-center justify-center w-full h-[93vh] relative">
        {/* Main content - appears in steps 2-4 */}
        <AnimatePresence>
          {animationStep >= 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col h-[100%] text-white text-center md:text-left w-full px-6 lg:px-[20vw] justify-center"
            >
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {titleText}
              </motion.h1>

              {animationStep >= 2 && (
                <motion.h2
                  className="text-4xl md:text-6xl font-bold mb-14"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <span className="text-[#00C6DE]">Automatizace!</span>
                </motion.h2>
              )}

              {animationStep >= 2 && (
                <motion.div
                  className="flex gap-4 flex-col md:flex-row mt-8 md:mt-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <button
                    onClick={() => setEmailModalVisible(true)}
                    className="px-6 py-3 bg-[#A1FAFF] text-[#002330] font-semibold rounded-full hover:opacity-80 transition w-max m-auto md:m-0"
                  >
                    Chci automatizovat
                  </button>
                  <Link
                    href={"https://calendly.com/abectiv/konzultace"}
                    target="_blank"
                  >
                    <button className="w-max px-6 py-3 border border-[#CDFEFF] text-[#CDFEFF] font-semibold rounded-full hover:bg-cyan-400 hover:text-black transition">
                      Konzultace zdarma
                    </button>
                  </Link>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Statistics card */}
        <motion.div
          className={`flex justify-between mx-auto p-8 md:p-0 ${
            animationStep === 0 ? "absolute inset-0 m-auto" : "mb-[10vh]"
          } gap-[10vw] w-[100vw] md:w-[60vw]`}
          initial={{
            y: "40%",
          }}
          animate={{
            bottom: "0",
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {displayValues.map((value, index) => (
            <div key={index} className="flex flex-col gap-4">
              <motion.h3
                key={`value-${value}-${index}`}
                className="text-4xl md:text-8xl font-bold md:pr-[50px] border-r-[1px]"
              >
                {value}
              </motion.h3>
              <p className="text-[#0097B2]">
                {index === 0 && "% rychlejší realizace"}
                {index === 1 && "% více zákazníků"}
                {index === 2 && "% vyšší efektivita"}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
