import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

function Navbar({ color }: { color: string }) {
  return (
    <div
      className={`sticky top-0 left-0 w-full h-16 text-white flex items-center justify-between py-6 px-6 transition-all
        duration-1000 ease-in-out
        ${color}`}
    >
      <img src="/logo.webp" alt="Logo" className="h-8" />

      <div className="flex items-center space-x-8">
        <Link href="/#digitalizace">
          <p>Digitalizace</p>
        </Link>
        <Link href="/#analytika">
          <p>Analytika</p>
        </Link>
        <Link href="/#reference">
          <p>Reference</p>
        </Link>
        <Link href="/#onas">
          <p>O nás</p>
        </Link>
        <Link href="/#konzultace">
          <p className="bg-[#121212] px-4 py-2 rounded-full">
            Konzultace zdarma
          </p>
        </Link>
        <Link href="/#automatizace">
          <p className="bg-[#A1FAFF] border-[#EBFFFE] border rounded-full px-4 py-2 text-black">
            Chci automatizovat
          </p>
        </Link>
      </div>
    </div>
  );
}

const COLORS = {
  brand_300: "brand_300",
  brand_500: "brand_500",
  brand_700: "brand_700",
  black: "bg-black",
};

const textContents = [
  {
    id: "tc1",
    color: COLORS.brand_300,
    content: (
      <div className="flex flex-col items-center justify-center w-max absolute left-[30vw]">
        <p className="text-[100px] text-[#087D96] font-bold leading-none">
          <span className="text-[160px]">20</span>min
        </p>
        <p className="text-[40px] text-[#00C6DE] font-medium">
          ušetřených denně
        </p>
      </div>
    ),
  },
  {
    id: "tc2",
    color: COLORS.brand_500,
    content: (
      <div className="flex flex-col items-center justify-center w-max absolute right-[30vw]">
        <p className="text-[100px] text-[#087D96] font-bold leading-none">
          <span className="text-[160px]">44</span> %
        </p>
        <p className="text-[40px] text-[#60F4FF] font-medium">Více zákazníků</p>
      </div>
    ),
  },
  {
    id: "tc3",
    color: COLORS.brand_700,
    content: (
      <div className="flex flex-col items-center justify-center w-max absolute left-[30vw]">
        <p className="text-[100px] text-[#60F4FF] font-bold leading-none">
          <span className="text-[160px]">63</span> %
        </p>
        <p className="text-[40px] text-[#00C6DE] font-medium">
          vyšši efektivita
        </p>
      </div>
    ),
  },
  {
    id: "main",
    color: COLORS.black,
    content: (
      <div className="flex flex-col h-[100%] text-white text-left w-full px-[20vw] justify-center">
        <h1 className="text-6xl font-bold mb-4">Neztrácejte čas!</h1>
        <h2 className="text-6xl font-bold mb-14">
          Objevte sílu <span className="text-[#00C6DE]">automatizace</span> a
          zvyšujte produktivitu.
        </h2>
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-[#A1FAFF] text-[#002330] font-semibold rounded-full hover:opacity-80 transition">
            Chci automatizovat
          </button>
          <button className="px-6 py-3 border border-[#CDFEFF] text-[#CDFEFF]  font-semibold rounded-full hover:bg-cyan-400 hover:text-black transition">
            Konzultace zdarma
          </button>
        </div>
      </div>
    ),
  },
];

export default function Home() {
  const [color, setColor] = useState<string>(COLORS.brand_300);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        if (prevIndex === textContents.length - 1) {
          clearInterval(interval); // Stop the interval
          return prevIndex; // Maintain the current index
        }
        return prevIndex + 1; // Increment index
      });
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  useEffect(() => {
    setColor(textContents[index].color); // Update color whenever index changes
  }, [index]);

  return (
    <div
      className={`flex flex-col h-dvh  relative text-white ${color === COLORS.black ? "overflow-auto" : "overflow-hidden"}`}
    >
      <Navbar color={Object.values(COLORS)[index]} />
      <div
        className={`flex relative flex-col justify-center min-h-[93vh] overflow-x-hidden transition-all ${color}`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={textContents[index].id}
            className={`flex flex-col justify-center min-h-[93vh] ${textContents[index].color}`}
            initial={{ opacity: 0, x: 500 * (index % 2 === 0 ? -1 : 1) }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 500 * (index % 2 === 0 ? -1 : 1) }}
            transition={{ duration: 0.5 }}
          >
            <div
              className={`flex flex-col items-center justify-center w-full h-[93vh] relative`}
            >
              {textContents[index].content}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex flex-col items-center justify-center min-h-dvh">
        section 2
      </div>
    </div>
  );
}
