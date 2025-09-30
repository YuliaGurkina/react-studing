import { useState, useEffect, useCallback} from "react";
import { useWindowEvent } from "./useWindowEvent";

const eventListerOptions = {
  passive: true,
};

const useViewportSize = (): { width: number; height: number } => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  const updateSize = useCallback(() => {
    setWindowSize({ width: window.innerWidth || 0, height: window.innerHeight || 0 });
  }, []);

  useWindowEvent('resize', updateSize, eventListerOptions);
  useWindowEvent('orientationchange', updateSize, eventListerOptions);

   useEffect(updateSize, []);

  return windowSize;
}

export default useViewportSize;