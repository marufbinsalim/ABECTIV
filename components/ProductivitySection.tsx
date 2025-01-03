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
      <div className="flex flex-wrap justify-between gap-8 text-center mt-auto w-full">
        <div className="text-2xl font-medium flex flex-col items-center">
          <img src="/4.gif" alt="Time" className="h-24 w-24" />
          <p>Více času</p>
        </div>

        <div className="text-2xl font-medium flex flex-col items-center">
          <img src="/3.gif" alt="Productivity" className="h-24 w-24" />
          <p>Vyšší produktivita</p>
        </div>

        <div className="text-2xl font-medium flex flex-col items-center">
          <img src="/2.gif" alt="Errors" className="h-24 w-24" />
          <p>Méně chyb</p>
        </div>

        <div className="text-2xl font-medium flex flex-col items-center">
          <img src="/1.gif" alt="Overview" className="h-24 w-24" />
          <p>Lepší přehled</p>
        </div>
      </div>
    </div>
  );
};

export default ProductivitySection;
