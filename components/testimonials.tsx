import useBreakpoint from "@/hooks/useBreakpoint";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    companyLogo: "/logo.webp", // Replace with the correct path to the logo
    feedback: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."`,
    name: "Name Surname",
    position: "Position, Company name",
  },
  {
    id: 2,
    companyLogo: "/logo.webp", // Replace with the correct path to the logo
    feedback: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."`,
    name: "Name Surname",
    position: "Position, Company name",
  },
  {
    id: 3,
    companyLogo: "/logo.webp", // Replace with another logo
    feedback: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."`,
    name: "Name Surname",
    position: "Position, Company name",
  },
  {
    id: 4,
    companyLogo: "/logo.webp", // Replace with another logo
    feedback: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."`,
    name: "Name Surname",
    position: "Position, Company name",
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
    <div className="bg-black text-white py-16 px-6 md:px-24">
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
            className="absolute left-0 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition h-[56px] w-[56px]"
            onClick={prevSlide}
          >
            ←
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[80%] md:w-[90%] m-auto min-h-[50vh] items-center">
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
            className="absolute right-0 h-[56px] w-[56px] rounded-full text-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
            onClick={nextSlide}
          >
            →
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
