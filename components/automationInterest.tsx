const AutomationInterestSection = () => {
  return (
    <div className="flex justify-between items-center min-h-[50vh] bg-black text-white px-6 md:px-24 lg:px-24 py-12">
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

export default AutomationInterestSection;
