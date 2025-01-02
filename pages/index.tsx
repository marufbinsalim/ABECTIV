import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

function Navbar({ color }: { color: string }) {
  return (
    <div
      className={`fixed z-10 top-0 left-0 w-[calc(100vw-15px)] h-16 text-white flex items-center justify-between py-6 px-6 transition-all
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

const ProductivitySection = () => {
  return (
    <div className="flex flex-col items-start min-h-[calc(100dvh-60px)] bg-black text-white lg:px-24 py-28">
      {/* Header */}
      <h5 className="text-sm font-semibold text-[#00C6DE] uppercase mb-2">
        Rychlá digitalizace a automatizace
      </h5>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Zvyšte produktivitu s automatizací
      </h1>

      {/* Paragraphs */}
      <p className="text-lg md:text-xl mb-4 max-w-[80%]">
        Online nástroje, které denně používáme, jsou už samozřejmostí. Ať už
        mají jakýkoliv účel, jedno mají společné – dají se automatizovat.{" "}
        <span className="text-cyan-400">
          Díky chytré automatizaci můžete ušetřit více jak 20 minut denně.
        </span>
      </p>
      <p className="text-lg md:text-xl mb-8 max-w-[80%]">
        Automatizace je naše práce – vy rozhodnete, co uděláte s ušetřeným
        časem. Věnujte ho strategickým projektům? Posilíte vztahy s klienty?
        Nebo si dopřejte delší pauzu na oběd?
      </p>

      {/* Benefits */}
      <div className="flex flex-wrap justify-start gap-8 text-center mt-auto">
        <div className="text-sm font-medium">Více času</div>
        <div className="text-sm font-medium">Vyšší produktivita</div>
        <div className="text-sm font-medium">Méně chyb</div>
        <div className="text-sm font-medium">Lepší přehled</div>
      </div>
    </div>
  );
};

const AutomationInterestSection = () => {
  return (
    <div className="flex justify-between items-center min-h-[50vh] bg-black text-white px-6 md:px-12 lg:px-24 py-12">
      {/* Left Content */}
      <div className="bg-[#053747] w-full px-6 md:px-12 lg:px-24 py-12 flex flex-row gap-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#A1FAFF] mb-4 ">
            Máte zájem o automatizaci
          </h2>
          <p className="text-3xl text-white">vašich procesů?</p>
          <p className="text-white">
            Zjistěte hned jak můžete tuto službu použít i pro Váš business.
          </p>
        </div>

        {/* Right Button */}
        <div className="ml-auto my-auto">
          <button className="flex items-center bg-[#A1FAFF] text-[#053747] font-semibold px-6 py-3 rounded-full hover:bg-cyan-400 transition">
            Zjistit teď
            <span className="ml-2">&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const AnimatedSteps = () => {
  const [step, setStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Mapování procesů",
      content: "Detailní popis mapování procesů. Analyzujte klíčové kroky...",
      bgColor: "#1B1B1B",
    },
    {
      id: 2,
      title: "Návrh řešení",
      content: "Popis návrhu řešení s ohledem na efektivitu a design...",
      bgColor: "#00363A",
    },
    {
      id: 3,
      title: "Implementace",
      content:
        "Kroky k implementaci včetně konkrétních nástrojů a technologií...",
      bgColor: "#004F54",
    },
    {
      id: 4,
      title: "Automatizace a nasazení",
      content: "Detaily automatizace a nasazení do produkce...",
      bgColor: "#006D75",
    },
  ];

  const nextStep = () => {
    setStep((prev) => (prev === steps.length ? 1 : prev + 1));
  };

  const prevStep = () => {
    setStep((prev) => (prev === 1 ? steps.length : prev - 1));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-dvh bg-blue-300">
      animated
      <motion.div
        key={step}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        style={{
          maxWidth: "800px",
          textAlign: "center",
          padding: "20px",
          border: "1px solid #fff",
          borderRadius: "10px",
        }}
      >
        <h1>{steps[step - 1].title}</h1>
        <p>{steps[step - 1].content}</p>
      </motion.div>
      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <button
          onClick={prevStep}
          style={{
            padding: "10px 20px",
            backgroundColor: "#fff",
            color: "#000",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Previous
        </button>
        <button
          onClick={nextStep}
          style={{
            padding: "10px 20px",
            backgroundColor: "#fff",
            color: "#000",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const BusinessAnalyticsSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#141414] to-[#053747] text-white pt-48 pb-28 px-8 min-h-[100dvh]">
      <div className="max-w-6xl mx-auto">
        {/* Heading Section */}
        <div className="mb-[100px]">
          <h3 className="text-[#00C6DE] uppercase text-lg tracking-widest mb-2">
            Business Analytika
          </h3>
          <h1 className="text-6xl font-bold leading-snug mb-4">
            Odhalte skrytý potenciál vašich dat
          </h1>
          <p className="text-2xl leading-relaxed">
            Pokud už máte digitalizované procesy disponujete{" "}
            <span className="italic">"neobjeveným pokladem"</span> DATY ty se
            stávají v dnešním dynamickém prostředí klíčem k úspěchu. Business
            analytika vám umožňuje{" "}
            <span className="text-[#00C6DE] font-semibold">
              proměnit nestrukturovaná data v cenné informace
            </span>
            , které povedou k lepším obchodním rozhodnutím.
          </p>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-6xl font-bold text-[#00C6DE] mb-4">57%</p>
            <p className="text-2xl">
              firem v Česku již <span className="font-semibold">využívá</span>{" "}
              business analýzu ke svému{" "}
              <span className="font-semibold">rozhodování</span>
            </p>
          </div>
          <div>
            <p className="text-6xl font-bold text-[#00C6DE] mb-4">63%</p>
            <p className="text-2xl">
              firem, které se rozhodli upravit své procesy na základě dat,
              prokazatelně{" "}
              <span className="font-semibold">zvýšili svou efektivitu</span>
            </p>
          </div>
          <div>
            <p className="text-6xl font-bold text-[#00C6DE] mb-4">44%</p>
            <p className="text-2xl">
              více zákazníků našli firmy, které zapojili do svého plánování{" "}
              <span className="font-semibold">business analytiku</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

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
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  useEffect(() => {
    setColor(textContents[index].color); // Update color whenever index changes
  }, [index]);

  return (
    <div
      className={`flex flex-col h-dvh text-white ${color === COLORS.black ? "overflow-auto" : "overflow-hidden"}`}
    >
      <Navbar color={Object.values(COLORS)[index]} />
      <div
        className={`flex relative flex-col justify-center min-h-[100dvh] overflow-x-hidden transition-all ${color}`}
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
              className={`flex flex-col items-center justify-center w-full h-[93vh] mt-16 relative`}
            >
              {textContents[index].content}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <ProductivitySection />
      <AutomationInterestSection />
      <AnimatedSteps />
      <BusinessAnalyticsSection />
      <div className="flex flex-col items-center justify-center min-h-dvh">
        section 2
      </div>
      <div className="flex flex-col items-center justify-center min-h-dvh">
        section 2
      </div>
    </div>
  );
}
