import { useState } from "react";
import { useWindowEvent } from "./useWindowEvent";

const useViewportSize = (): { width: number; height: number } => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const updateSize = (): void => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useWindowEvent('resize', updateSize, {});

  return {
    height,
    width
  };
}

export default useViewportSize;