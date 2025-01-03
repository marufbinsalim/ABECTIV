import { COLORS } from "./colors";

const textContents = [
  {
    id: "tc1",
    color: COLORS.brand_300,
    content: (
      <div className="flex flex-col items-center justify-center w-max absolute left-[30vw] sm:left-[10vw] md:left-[20vw]">
        <p className="text-[60px] sm:text-[40px] md:text-[100px] text-[#087D96] font-bold leading-none">
          <span className="text-[100px] sm:text-[80px] md:text-[160px]">
            20
          </span>
          min
        </p>
        <p className="text-[20px] sm:text-[16px] md:text-[40px] text-[#00C6DE] font-medium">
          ušetřených denně
        </p>
      </div>
    ),
  },
  {
    id: "tc2",
    color: COLORS.brand_500,
    content: (
      <div className="flex flex-col items-center justify-center w-max absolute right-[30vw] sm:right-[10vw] md:right-[20vw]">
        <p className="text-[60px] sm:text-[40px] md:text-[100px] text-[#087D96] font-bold leading-none">
          <span className="text-[100px] sm:text-[80px] md:text-[160px]">
            44
          </span>
          %
        </p>
        <p className="text-[20px] sm:text-[16px] md:text-[40px] text-[#60F4FF] font-medium">
          Více zákazníků
        </p>
      </div>
    ),
  },
  {
    id: "tc3",
    color: COLORS.brand_700,
    content: (
      <div className="flex flex-col items-center justify-center w-max absolute left-[30vw] sm:left-[10vw] md:left-[20vw]">
        <p className="text-[60px] sm:text-[40px] md:text-[100px] text-[#60F4FF] font-bold leading-none">
          <span className="text-[100px] sm:text-[80px] md:text-[160px]">
            63
          </span>
          %
        </p>
        <p className="text-[20px] sm:text-[16px] md:text-[40px] text-[#00C6DE] font-medium">
          vyšši efektivita
        </p>
      </div>
    ),
  },
  {
    id: "main",
    color: COLORS.black,
    content: (
      <div className="flex flex-col h-[100%] text-white text-center md:text-left w-full px-6 lg:px-[20vw] justify-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Neztrácejte čas!
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold mb-14">
          Objevte sílu <span className="text-[#00C6DE]">automatizace</span> a
          zvyšujte produktivitu.
        </h2>
        <div className="flex gap-4 flex-col md:flex-row mt-8 md:mt-0">
          <button className="px-6 py-3 bg-[#A1FAFF] text-[#002330] font-semibold rounded-full hover:opacity-80 transition ">
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

export default textContents;
