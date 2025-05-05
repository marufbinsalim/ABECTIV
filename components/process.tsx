import { useState } from "react";

const MobileProcessComponent = () => {
  const steps = [
    {
      id: 1,
      title: "Mapování procesů",
      description: [
        `
        Společně s vámi prozkoumáme, jak vaše firma aktuálně funguje.
        Mluvíme s klíčovými lidmi, analyzujeme kroky a vytváříme jasný
        vizuální přehled procesů. Takto rychle identifikujeme slabá místa,
        zpoždění a příležitosti pro zlepšení.
      `,
      ],
      color: "#000000",
    },
    {
      id: 2,
      title: "Návrh řešení",
      description: [
        `
        Na základě získaných poznatků vám navrhneme efektivné řešení, jak
        procesy digitalizovat a převést data na plně automatizovanou formu.
        Díky tomuhle přístupu rychle uvidíte, jak vám moderní nástroje
        usnadní práci.
      `,
      ],
      color: "#053747",
    },
    {
      id: 3,
      title: "Implementace",
      description: [
        `
        Ukážeme vám vybrané nástroje v praxi – co dokážou a jak vám ušetří
        čas i peníze. Naučíme vás s nimi pracovat, abyste ihned viděli jasné
        výhody oproti stávajícím postupům.`,
        `Vědeli jste, že...? Můžete například propojit svůj CRM systém s
        e-mailovým klientem nebo účetním softwarem, napojit automatizace na
        současné ERP řešení jako je SAP, POHODA, MONEY S3 apd.
      `,
      ],
      color: "#10647A",
    },
    {
      id: 4,
      title: "Automatizace a nasazení",
      description: [
        `
        Zvolíme vhodné NoCode/LowCode nástroje, které perfektně zapadnou do vašeho systému.
        Nastavíme automatizované pracovní postupy, které plynule propojí všechny vaše aplikace.`,
        `Po otestování vše nasadíme a vy můžete okamžitě začít sklízet výsledky.
      `,
      ],
      color: "#0097B2",
    },
  ];

  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="lg:hidden flex flex-col space-y-8">
      {steps.map((step) => (
        <div
          key={step.id}
          className={`border border-[#dbdbdb60] rounded-lg p-6 bg-[${step.color}] text-white transition-all duration-700`}
          onClick={() => setCurrentStep(step.id)}
        >
          <p className="text-2xl font-bold mb-4">{`0${step.id}`} </p>
          <h2 className="text-2xl font-bold mb-4">{step.title}</h2>
          <div
            className={`transition-all duration-700 ${currentStep === step.id ? "opacity-100 h-auto" : "opacity-0 h-0"}`}
          >
            {currentStep === step.id &&
              step?.description.map((desc) => <p className="mt-8">{desc} </p>)}
          </div>
        </div>
      ))}
    </div>
  );
};

const ProcessSection = () => {
  const [current, setCurrent] = useState(1);

  return (
    <section className="bg-black text-white py-28 px-6 md:px-24">
      <h1 className="text-3xl md:text-6xl font-bold leading-snug mb-12">
        Jak to funguje
      </h1>

      {/* Mobile */}

      <MobileProcessComponent />

      {/* Desktop */}

      <div className="w-full border border-white h-[500px] hidden lg:flex overflow-clip">
        {/* first */}
        <div
          className="h-full bg-black w-max items-center px-4 py-8 flex flex-col justify-between cursor-pointer"
          onClick={() => setCurrent(1)}
        >
          <p className="text-2xl font-bold">01</p>
          <div className="relative h-[1px] w-[40px]">
            <p
              className="absolute w-max transform -translate-x-1/2 left-[50%]
              font-bold
              text-2xl
              bottom-0 -translate-y-[90px] -rotate-90"
            >
              Mapování procesů
            </p>
          </div>
        </div>

        <div
          className={`
            overflow-clip transition-all duration-700
          ${current === 1 ? "w-full opacity-100 p-6 py-12" : "w-0 opacity-0"}
          `}
        >
          <h1 className="text-3xl md:text-6xl font-bold leading-snug mb-12">
            Mapování procesů
          </h1>

          <p className="w-[60%]">
            {`
            Společně s vámi prozkoumáme, jak vaše firma aktuálně funguje.
            Mluvíme s klíčovými lidmi, analyzujeme kroky a vytváříme jasný
            vizuální přehled procesů. Takto rychle identifikujeme slabá místa,
            zpoždění a příležitosti pro zlepšení.
              `}
          </p>
        </div>

        {/* second */}
        <div
          className="h-full bg-[#053747] w-max items-center px-4 py-8 flex flex-col justify-between cursor-pointer"
          onClick={() => setCurrent(2)}
        >
          <p className="text-2xl font-bold">02</p>
          <div className="relative h-[1px] w-[40px] ">
            <p
              className="absolute w-max transform -translate-x-1/2 left-[50%]
              font-bold
              text-2xl
              bottom-0 -translate-y-[60px] -rotate-90"
            >
              Návrh řešení
            </p>
          </div>
        </div>

        <div
          className={`
            overflow-clip transition-all duration-700 bg-[#053747]
          ${current === 2 ? "w-full opacity-100 p-6 py-12" : "w-0 opacity-0"}
          `}
        >
          <h1 className="text-3xl md:text-6xl font-bold leading-snug mb-12">
            Návrh řešení
          </h1>

          <p className="w-[60%]">
            {`
            Na základě získaných poznatků vám navrhneme efektivné řešení, jak
            procesy digitalizovat a převést data na plně automatizovanou formu.
            Díky tomuhle přístupu rychle uvidíte, jak vám moderní nástroje
            usnadní práci.
              `}
          </p>
        </div>

        {/* third */}
        <div
          className="h-full bg-[#10647A] cursor-pointer w-max items-center px-4 py-8 flex flex-col justify-between"
          onClick={() => setCurrent(3)}
        >
          <p className="text-2xl font-bold">03</p>
          <div className="relative h-[1px] w-[40px] ">
            <p
              className="absolute w-max transform -translate-x-1/2 left-[50%]
              font-bold
              text-2xl
              bottom-0 -translate-y-[70px] -rotate-90"
            >
              Implementace
            </p>
          </div>
        </div>
        <div
          className={`
            overflow-clip transition-all duration-700 bg-[#10647A]
          ${current === 3 ? "w-full opacity-100 p-6 py-12" : "w-0 opacity-0"}
          `}
        >
          <h1 className="text-3xl md:text-6xl font-bold leading-snug mb-12">
            Implementace
          </h1>

          <p className="w-[60%] mb-12">
            {`
            Ukážeme vám vybrané nástroje v praxi – co dokážou a jak vám ušetří
            čas i peníze. Naučíme vás s nimi pracovat, abyste ihned viděli jasné
            výhody oproti stávajícím postupům.
              `}
          </p>

          <p className="w-[60%]">
            {`
            Vědeli jste, že...? Můžete například propojit svůj CRM systém s
            e-mailovým klientem nebo účetním softwarem, napojit automatizace na
            současné ERP řešení jako je SAP, POHODA, MONEY S3 apd.
              `}
          </p>
        </div>
        {/* fourth */}
        <div
          className="h-full bg-[#0097B2] w-max items-center cursor-pointer px-4 py-8 flex flex-col justify-between"
          onClick={() => setCurrent(4)}
        >
          <p className="text-2xl font-bold">04</p>
          <div className="relative h-[1px] w-[40px] ">
            <p
              className="absolute w-max transform -translate-x-1/2 left-[50%]
              font-bold
              text-2xl
              bottom-0 -translate-y-[130px] -rotate-90"
            >
              Automatizace a nasazení
            </p>
          </div>
        </div>

        <div
          className={`
            overflow-clip transition-all duration-700 bg-[#0097B2]
          ${current === 4 ? "w-full opacity-100 p-6 py-12" : "w-0 opacity-0"}
          `}
        >
          <h1 className="text-3xl md:text-6xl font-bold leading-snug mb-12">
            Automatizace a nasazení
          </h1>

          <p className="w-[60%] mb-12">
            {`Zvolíme vhodné NoCode/LowCode nástroje, které perfektně zapadnou do vašeho systému.
              Nastavíme automatizované pracovní postupy, které plynule propojí všechny vaše aplikace.`}
          </p>

          <p className="w-[60%]">
            {`Po otestování vše nasadíme a vy můžete okamžitě začít sklízet výsledky.`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
