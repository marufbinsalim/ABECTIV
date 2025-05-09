const BusinessAnalyticsSection = () => {
  return (
    <section
      id="analytika"
      className="bg-gradient-to-b from-[#141414] to-[#053747] text-white px-6 py-6 md:pt-48 md:pb-28 md:px-24 h-auto md:min-h-[100dvh]"
    >
      <div className="mx-auto">
        {/* Heading Section */}
        <div className="mb-[100px]">
          <h3 className="text-[#00C6DE] uppercase text-sm md:text-lg tracking-widest mb-2">
            Business Analytika
          </h3>
          <h1 className="text-3xl md:text-6xl font-bold leading-snug mb-4">
            Odhalte skrytý potenciál vašich dat
          </h1>
          <p className="text-lg md:text-2xl leading-relaxed">
            Pokud už máte digitalizované procesy, máte k dispozici{" "}
            <span className="italic">cenný zdroj – data</span>. V dnešním
            dynamickém prostředí jsou právě data{" "}
            <span className="italic">klíčem k úspěchu</span>. Business analytika
            vám umožní{" "}
            <span className="text-[#00C6DE] font-semibold">
              proměnit nestrukturovaná data v užitečné informace
            </span>
            , které vedou k lepším obchodním rozhodnutím.
          </p>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-3xl md:text-6xl font-bold text-[#00C6DE] mb-4">
              57%
            </p>
            <p className="text-lg md:text-2xl md:w-[80%]">
              firem v Česku již <span className="font-semibold">využívá</span>{" "}
              business analýzu ke svému{" "}
              <span className="font-semibold">rozhodování</span>
            </p>
          </div>
          <div>
            <p className="text-3xl md:text-6xl font-bold text-[#00C6DE] mb-4">
              63%
            </p>
            <p className="text-lg md:text-2xl md:w-[80%]">
              firem, které se rozhodli upravit své procesy na základě dat,
              prokazatelně{" "}
              <span className="font-semibold">zvýšili svou efektivitu</span>
            </p>
          </div>
          <div>
            <p className="text-3xl md:text-6xl font-bold text-[#00C6DE] mb-4">
              44%
            </p>
            <p className="text-lg md:text-2xl md:w-[80%]">
              více zákazníků našli firmy, které zapojili do svého plánování{" "}
              <span className="font-semibold">business analytiku</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessAnalyticsSection;
