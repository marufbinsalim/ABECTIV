import { useState, useEffect } from "react";

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState("sm");

  useEffect(() => {
    const breakpoints = {
      sm: "(min-width: 640px)",
      md: "(min-width: 768px)",
      lg: "(min-width: 1024px)",
    };

    const getBreakpoint = () => {
      if (window.matchMedia(breakpoints.lg).matches) {
        return "lg";
      } else if (window.matchMedia(breakpoints.md).matches) {
        return "md";
      } else {
        return "sm";
      }
    };

    const handleResize = () => setBreakpoint(getBreakpoint());

    // Set the initial breakpoint
    setBreakpoint(getBreakpoint());

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    breakpoint,
  };
};

export default useBreakpoint;
