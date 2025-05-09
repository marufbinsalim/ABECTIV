import { ChartArea, ChartBar, Rocket, ShieldCheck, Timer } from "lucide-react";

const ProductivitySection = () => {
  return (
    <div
      id="digitalizace"
      className="flex flex-col items-start h-auto md:min-h-[calc(100dvh-60px)] bg-black text-white px-6 lg:px-24 py-8 md:py-28"
    >
      {/* Header */}
      <h5 className="text-sm font-semibold text-[#00C6DE] uppercase mb-2">
        Rychlá digitalizace a automatizace
      </h5>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Zvyšte produktivitu s automatizací
      </h1>

      {/* Paragraphs */}
      <p className="text-lg md:text-xl mb-4 md:max-w-[80%]">
        Online nástroje, které denně používáme, jsou už samozřejmostí. Ať už
        mají jakýkoliv účel, jedno mají společné – dají se automatizovat.{" "}
        <span className="text-cyan-400">
          Díky chytré automatizaci můžete ušetřit více jak 20 minut denně.
        </span>
      </p>
      <p className="text-lg md:text-xl mb-8 md:max-w-[80%]">
        Automatizace je naše práce – vy rozhodnete, co uděláte s ušetřeným
        časem. Věnujte ho strategickým projektům? Posilíte vztahy s klienty?
        Nebo si dopřejte delší pauzu na oběd?
      </p>

      {/* Benefits */}
      <div className="flex justify-between gap-8 text-center mt-4 md:mt-auto flex-wrap h-max w-[90%] md:w-full m-auto">
        <div className="text-lg md:text-2xl font-medium flex flex-col items-center">
          {/* <img
            src="/4.gif"
            alt="Time Saved"
            className="h-16 w-16 md:h-24 md:w-24 mb-1 md:mb-2"
          /> */}
          <Timer className="h-16 w-16 md:h-24 md:w-24 mb-1 md:mb-2" />
          <p>Více času</p>
          {/* english : More time */}
        </div>

        <div className="text-lg md:text-2xl font-medium flex flex-col items-center">
          {/* <img
            src="/3.gif"
            alt="Productivity"
            className="h-16 w-16 md:h-24 md:w-24 mb-1 md:mb-2"
          /> */}
          <ChartArea className="h-16 w-16 md:h-24 md:w-24 mb-1 md:mb-2" />
          <p>Vyšší produktivita</p>
          {/* english : Higher productivity */}
        </div>

        <div className="text-lg md:text-2xl font-medium flex flex-col items-center">
          {/* <img
            src="/2.gif"
            alt="Errors"
            className="h-16 w-16 md:h-24 md:w-24 mb-1 md:mb-2"
          /> */}
          <Rocket className="h-16 w-16 md:h-24 md:w-24 mb-1 md:mb-2" />
          <p>Méně chyb</p>
          {/* english : Less errors */}
        </div>

        <div className="text-lg md:text-2xl font-medium flex flex-col items-center">
          {/* <img
            src="/1.gif"
            alt="Overview"
            className="h-16 w-16 md:h-24 md:w-24 mb-1 md:mb-2"
          /> */}
          <ShieldCheck className="h-16 w-16 md:h-24 md:w-24 mb-1 md:mb-2" />
          <p>Lepší přehled</p>
          {/* english : Better overview */}
        </div>
      </div>
    </div>
  );
};

export default ProductivitySection;
