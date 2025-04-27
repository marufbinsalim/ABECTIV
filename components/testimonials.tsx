import useBreakpoint from "@/hooks/useBreakpoint";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, LucideArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

// "Díky digitalizovanému protokolu máme ihned přehled o stavu vozidel i práci mechaniků. Reporty se zákazníkům odesílají automaticky a my šetříme každý den spoustu času. Skvělý posun kupředu!"
// Miroslav Houdek, manager servisu
// Servis-Centrum CZ, s.r.o.

// "Papírová docházka byla noční můra. Teď máme vše online, bez chyb a bez zdržení. Zaměstnanci si to pochvalují a my máme přesné podklady pro mzdy během chvilky."
// Jaroslav Řehoř, ředitel společnosti
// Servis-Centrum CZ, s.r.o.

// "Výdejní box nám výrazně zefektivnil práci. Materiál je dostupný nonstop, sledují se zásoby i spotřeba. Prostoje zmizely a chyba ve výdeji je dnes skoro nemožná."
// Miroslav Beránek, manager skladu
// Servis-Centrum CZ, s.r.o.

// "Platby dodavatelských faktur nám dříve trvaly celé dny/měsíce – teď je hotovo během pár minut. Systém všechno ověří, zaplatí a my máme jistotu, že je vše v pořádku. Ušetříme čas i starosti." Dodavatelé jsou spokojeni a nečekají na své peníze.
// Vladimír Horváth, Purchasing manager
// Hitachi Energy Czech Republic, s.r.o.
// "Nahrát odkaz a mít během chvíle hotovou objednávku bez čekání na schválení? To je pro nás obrovská úspora času. Nákupy probíhají rychle a bez zbytečných průtahů."
// Daniel Parai, buyer
// Hitachi Energy Czech Republic, s.r.o.

const testimonials = [
  {
    id: 1,
    companyLogo: "/logo.webp", // Replace with the correct path to the logo
    feedback: `"Díky digitalizovanému protokolu máme ihned přehled o stavu vozidel i práci mechaniků. Reporty se zákazníkům odesílají automaticky a my šetříme každý den spoustu času. Skvělý posun kupředu!"`,
    name: "Miroslav Houdek",
    position: "Manager servisu, Servis-Centrum CZ, s.r.o.",
  },
  {
    id: 2,
    companyLogo: "/logo.webp", // Replace with the correct path to the logo
    feedback: `"Papírová docházka byla noční můra. Teď máme vše online, bez chyb a bez zdržení. Zaměstnanci si to pochvalují a my máme přesné podklady pro mzdy během chvilky."`,
    name: "Jaroslav Řehoř",
    position: "Ředitel společnosti, Servis-Centrum CZ, s.r.o.",
  },
  {
    id: 3,
    companyLogo: "/logo.webp", // Replace with the correct path to the logo
    feedback: `"Výdejní box nám výrazně zefektivnil práci. Materiál je dostupný nonstop, sledují se zásoby i spotřeba. Prostoje zmizely a chyba ve výdeji je dnes skoro nemožná."`,
    name: "Miroslav Beránek",
    position: "Manager skladu, Servis-Centrum CZ, s.r.o.",
  },
  {
    id: 4,
    companyLogo: "/logo.webp", // Replace with the correct path to the logo
    feedback: `"Platby dodavatelských faktur nám dříve trvaly celé dny/měsíce – teď je hotovo během pár minut. Systém všechno ověří, zaplatí a my máme jistotu, že je vše v pořádku. Ušetříme čas i starosti."`,
    name: "Vladimír Horváth",
    position: "Purchasing manager, Hitachi Energy Czech Republic, s.r.o.",
  },
  {
    id: 5,
    companyLogo: "/logo.webp", // Replace with the correct path to the logo
    feedback: `"Nahrát odkaz a mít během chvíle hotovou objednávku bez čekání na schválení? To je pro nás obrovská úspora času. Nákupy probíhají rychle a bez zbytečných průtahů."`,
    name: "Daniel Parai",
    position: "Buyer, Hitachi Energy Czech Republic, s.r.o.",
  },
];

const groupTestimonials = (testimonials: any[], groupSize: number) => {
  const grouped = [];
  for (let i = 0; i < testimonials.length; i += groupSize) {
    grouped.push(testimonials.slice(i, i + groupSize));
  }
  return grouped;
};

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  const { breakpoint } = useBreakpoint();

  useEffect(() => {
    setCurrent(0);
  }, [breakpoint]);

  const groupedTestimonials = groupTestimonials(
    testimonials,
    breakpoint === "sm" ? 1 : 2,
  );

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % groupedTestimonials.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) =>
        (prev - 1 + groupedTestimonials.length) % groupedTestimonials.length,
    );
  };

  return (
    <div id="reference" className="bg-black text-white py-16 px-6 md:px-24">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-left mb-12">
          <h6 className="text-[#00C6DE] mb-4 uppercase text-sm font-medium">
            Reference
          </h6>
          <h2 className="text-4xl font-bold">Ohlasy zákazníků</h2>
        </div>

        {/* Slider */}
        <div className="relative flex items-center justify-between">
          {/* Previous Arrow */}
          <button
            className="absolute left-0 rounded-full flex items-center justify-center border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition h-[40px] w-[40px] md:h-[56px] md:w-[56px]"
            onClick={prevSlide}
          >
            <ArrowLeft />
          </button>

          {/* Testimonials */}
          <div className="flex-1 px-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[90%] m-auto min-h-[50vh] items-center">
                  {groupedTestimonials[current]?.map((testimonial: any) => (
                    <div
                      key={testimonial.id}
                      className="flex flex-col justify-start"
                    >
                      <img
                        src={testimonial.companyLogo}
                        alt="Company Logo"
                        className="mb-8 h-[30px] object-contain mr-auto"
                      />
                      <p className="text-lg italic max-w-3xl md:w-[80%]">
                        {testimonial.feedback}
                      </p>
                      <div className="mt-8">
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next Arrow */}
          <button
            className="absolute  flex items-center justify-center right-0 h-[40px] w-[40px] md:h-[56px] md:w-[56px] rounded-full text-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
            onClick={nextSlide}
          >
            <ArrowRight />
          </button>
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center space-x-2">
          {groupedTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2.5 h-2.5 rounded-full ${
                current === index ? "bg-cyan-400" : "bg-gray-600"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
