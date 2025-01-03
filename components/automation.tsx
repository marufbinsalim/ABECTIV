const AutomationSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#053747] to-black text-white py-16 px-24">
      <div className="mx-auto bg-[#0097B2] p-12 rounded-lg">
        {/* Text Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">
            Získejte{" "}
            <span className="text-teal-100">efektivní automatizaci</span> <br />{" "}
            vašich procesů
          </h1>
          <p className="text-lg">
            Rychlá a cenově dostupná digitalizace a automatizace procesů pro váš
            business.
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex gap-6">
          <button className="bg-[#A1FAFF] text-[#002330] px-6 py-3 font-semibold rounded-full shadow-md hover:bg-teal-200 transition">
            Konzultace zdarma
          </button>
          <button className="border-2 border-[#CDFEFF] text-white px-6 py-3 font-semibold rounded-full shadow-md hover:bg-white hover:text-teal-700 transition">
            Napište nám
          </button>
        </div>
      </div>
    </section>
  );
};

export default AutomationSection;
