import { COLORS } from "@/components/colors";
import { useEffect, useState } from "react";

export function useAnimationColors(list: any[]) {
  const [color, setColor] = useState<string>(COLORS.brand_300);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        if (prevIndex === list.length - 1) {
          clearInterval(interval);
          return prevIndex;
        }
        return prevIndex + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setColor(list[index].color);
  }, [index]);

  return {
    color,
    index,
  };
}
