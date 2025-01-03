const BusinessAnalyticsSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#141414] to-[#053747] text-white pt-48 pb-28 px-24 min-h-[100dvh]">
      <div className="mx-auto">
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
            <p className="text-2xl w-[80%]">
              firem v Česku již <span className="font-semibold">využívá</span>{" "}
              business analýzu ke svému{" "}
              <span className="font-semibold">rozhodování</span>
            </p>
          </div>
          <div>
            <p className="text-6xl font-bold text-[#00C6DE] mb-4">63%</p>
            <p className="text-2xl w-[80%]">
              firem, které se rozhodli upravit své procesy na základě dat,
              prokazatelně{" "}
              <span className="font-semibold">zvýšili svou efektivitu</span>
            </p>
          </div>
          <div>
            <p className="text-6xl font-bold text-[#00C6DE] mb-4">44%</p>
            <p className="text-2xl w-[80%]">
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
