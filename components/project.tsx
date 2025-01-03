import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useBreakpoint from "@/hooks/useBreakpoint";
import { ArrowLeft, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Digitalizace skladu",
    description:
      "Transformace konvenčního skladu s papírovou administrací do plně digitálního moderního skladu s automatizovaným procesem příjmu a výdeje.",
    tags: ["2 hodiny denně méně administrativy", "80% menší chybovost"],
    image: "/image.jpeg", // Replace with actual image path
  },
  {
    id: 2,
    title: "Digitalizace skladu",
    description:
      "Transformace konvenčního skladu s papírovou administrací do plně digitálního moderního skladu s automatizovaným procesem příjmu a výdeje.",
    tags: ["2 hodiny denně méně administrativy", "80% menší chybovost"],
    image: "/image.jpeg",
  },
  {
    id: 3,
    title: "Digitalizace skladu",
    description:
      "Transformace konvenčního skladu s papírovou administrací do plně digitálního moderního skladu s automatizovaným procesem příjmu a výdeje.",
    tags: ["2 hodiny denně méně administrativy", "80% menší chybovost"],
    image: "/image.jpeg",
  },
  {
    id: 4,
    title: "Digitalizace skladu",
    description:
      "Transformace konvenčního skladu s papírovou administrací do plně digitálního moderního skladu s automatizovaným procesem příjmu a výdeje.",
    tags: ["2 hodiny denně méně administrativy", "80% menší chybovost"],
    image: "/image.jpeg",
  },
];

const groupProjects = (projects: any[], groupSize: number) => {
  const grouped = [];
  for (let i = 0; i < projects.length; i += groupSize) {
    grouped.push(projects.slice(i, i + groupSize));
  }
  return grouped;
};

const ProjectSlider = () => {
  const [current, setCurrent] = useState(0);

  const { breakpoint } = useBreakpoint();

  useEffect(() => {
    setCurrent(0);
  }, [breakpoint]);

  const groupedProjects = groupProjects(projects, breakpoint === "sm" ? 1 : 3);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % groupedProjects.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + groupedProjects.length) % groupedProjects.length,
    );
  };

  return (
    <div className="bg-black text-white py-16 px-6 md:px-24">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-left mb-12">
          <h6 className="text-[#00C6DE] mb-4 uppercase text-sm font-medium">
            Use Cases
          </h6>
          <h2 className="text-4xl font-bold">Ukázka realizovaných projektů</h2>
        </div>

        {/* Slider */}
        <div className="relative flex items-center">
          {/* Previous Arrow */}
          <button
            className="absolute flex items-center justify-center left-0 h-[40px] w-[40px] md:h-[56px] md:w-[56px] rounded-full text-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
            onClick={prevSlide}
          >
            <ArrowLeft />
          </button>

          {/* Projects */}
          <div className="flex-1 px-8 md:px-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {groupedProjects[current]?.map((project: any) => (
                    <div key={project.id} className="p-6 relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="rounded-lg mb-4 h-[230px] w-[100%]"
                      />
                      <div className="absolute top-0 right-0 p-8 w-[90%] md:w-[70%] flex flex-wrap justify-end space-y-2">
                        {project.tags.map((tag: string, index: number) => (
                          <span
                            key={index}
                            className="inline-block bg-cyan-400 text-black px-3 py-1 text-sm rounded-full mr-2 truncate"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <p className="text-gray-300">{project.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next Arrow */}
          <button
            className="absolute flex items-center justify-center right-0 h-[40px] w-[40px] md:h-[56px] md:w-[56px] rounded-full text-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
            onClick={nextSlide}
          >
            <ArrowRight />
          </button>
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center space-x-2">
          {groupedProjects.map((_, index) => (
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

export default ProjectSlider;
