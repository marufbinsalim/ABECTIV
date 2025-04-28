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
          vyšší efektivita
        </p>
      </div>
    ),
  },
  {
    id: "main",
    color: COLORS.black,
    content: null,
  },
];

export default textContents;
